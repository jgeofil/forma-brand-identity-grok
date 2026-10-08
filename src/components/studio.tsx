import { useRef, useState } from "react";
import {
  BoardsView,
  ClustersView,
  ConceptsView,
  MethodView,
  ParallelView,
  ReferencesView,
  ResearchView,
  ScoresView,
} from "@/components/pipeline-views";
import { EXAMPLES, SAMPLE_BRIEF, SAMPLE_JOB, SAMPLE_STATUS, sampleBag, samplePlates } from "@/lib/pipeline/sample";
import {
  STAGES,
  selectBoards,
  type Bag,
  type PlateState,
  type Research,
  type StageId,
  type Status,
  type VisualRef,
} from "@/lib/pipeline/model";
import {
  clusterReferences,
  collectReferences,
  draftConcepts,
  renderPlate,
  researchBrief,
  scoreConcepts,
} from "@/lib/pipeline/api";

type ViewId = "method" | "parallel" | StageId;

const EMPTY_BAG: Bag = {
  research: null,
  references: null,
  clusters: null,
  concepts: null,
  scores: null,
};

const IDLE_STATUS: Record<StageId, Status> = {
  research: "idle",
  references: "idle",
  cluster: "idle",
  concepts: "idle",
  score: "idle",
  render: "idle",
};

function clean(message: string): string {
  if (/api[_ ]?key/i.test(message)) return "The model isn't available in this preview.";
  if (message.length > 280) return "The step failed. Run it again.";
  return message;
}

function messageOf(error: unknown): string {
  if (error instanceof Error && error.message) return clean(error.message);
  if (typeof error === "string") return clean(error);
  if (error && typeof error === "object" && "message" in error && typeof error.message === "string") {
    return clean(error.message);
  }
  return "The step failed.";
}

async function settle<T>(task: Promise<T>): Promise<{ ok: true; data: T } | { ok: false; error: string }> {
  try {
    return { ok: true, data: await task };
  } catch (error) {
    return { ok: false, error: messageOf(error) };
  }
}

function followView(status: Record<StageId, Status>): ViewId {
  if (status.research === "running" || status.references === "running") return "parallel";
  if (status.cluster === "running") return "cluster";
  if (status.concepts === "running") return "concepts";
  if (status.score === "running") return "score";
  if (status.render === "running" || status.render === "done") return "render";
  if (status.score === "done") return "render";
  if (status.concepts === "done") return "concepts";
  if (status.cluster === "done") return "cluster";
  if (status.research === "done" || status.references === "done") return "parallel";
  return "method";
}

class StepFailure extends Error {
  stage: StageId;
  constructor(stage: StageId, message: string) {
    super(message);
    this.name = "StepFailure";
    this.stage = stage;
  }
}

function makeJob(): string {
  return `F–${100 + Math.floor(Math.random() * 900)}`;
}

export function Studio() {
  const [brief, setBrief] = useState(SAMPLE_BRIEF);
  const [runBrief, setRunBrief] = useState(SAMPLE_BRIEF);
  const [job, setJob] = useState(SAMPLE_JOB);
  const [source, setSource] = useState<"sample" | "live">("sample");
  const [bag, setBag] = useState<Bag>(sampleBag);
  const [status, setStatus] = useState(SAMPLE_STATUS);
  const [plates, setPlates] = useState<Record<string, PlateState>>(samplePlates);
  const [pinned, setPinned] = useState<ViewId | null>("render");
  const [running, setRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [failed, setFailed] = useState<StageId | null>(null);

  const bagRef = useRef(bag);
  const statusRef = useRef(status);
  const runningRef = useRef(false);
  const briefRef = useRef(brief);
  bagRef.current = bag;
  statusRef.current = status;
  briefRef.current = brief;

  function commitBag(next: Bag) {
    bagRef.current = next;
    setBag(next);
  }

  function commitStatus(next: Record<StageId, Status>) {
    statusRef.current = next;
    setStatus(next);
  }

  function setStage(id: StageId, value: Status) {
    commitStatus({ ...statusRef.current, [id]: value });
  }

  function loadSample() {
    if (runningRef.current) return;
    setBrief(SAMPLE_BRIEF);
    setRunBrief(SAMPLE_BRIEF);
    setJob(SAMPLE_JOB);
    setSource("sample");
    commitBag(sampleBag);
    commitStatus(SAMPLE_STATUS);
    setPlates(samplePlates);
    setPinned("render");
    setError(null);
    setFailed(null);
  }

  function clearAfter(from: StageId | "start") {
    const next: Bag = { ...bagRef.current };
    const resetPlates = from !== "render";
    if (from === "start" || from === "research" || from === "references") {
      if (from !== "references") next.research = null;
      if (from !== "research") next.references = null;
      next.clusters = null;
      next.concepts = null;
      next.scores = null;
    } else if (from === "cluster") {
      next.clusters = null;
      next.concepts = null;
      next.scores = null;
    } else if (from === "concepts") {
      next.concepts = null;
      next.scores = null;
    } else if (from === "score") {
      next.scores = null;
    }
    commitBag(next);
    if (resetPlates) setPlates({});
    const idle: Partial<Record<StageId, Status>> = {};
    const order: StageId[] = ["cluster", "concepts", "score", "render"];
    const startAt = from === "start" || from === "research" || from === "references" ? "cluster" : from === "cluster" ? "concepts" : from === "concepts" ? "score" : from === "score" ? "render" : "render";
    if (from === "start" || from === "research" || from === "references" || order.includes(from)) {
      let wiping = from === "start" || from === "research" || from === "references";
      for (const id of order) {
        if (id === startAt) wiping = true;
        if (wiping && !(from === "render" && id === "render")) idle[id] = "idle";
      }
    }
    if (Object.keys(idle).length) commitStatus({ ...statusRef.current, ...idle });
  }

  async function execute(from: "start" | StageId) {
    if (runningRef.current) return;
    const text = briefRef.current.trim();
    if (text.length < 12 || text.length > 800) {
      setError("Write a brief between 12 and 800 characters.");
      return;
    }
    runningRef.current = true;
    setRunning(true);
    setError(null);
    setFailed(null);
    setPinned(null);
    setSource("live");
    setRunBrief(text);
    if (from === "start") {
      setJob(makeJob());
      commitBag(EMPTY_BAG);
      commitStatus(IDLE_STATUS);
      setPlates({});
    }

    let step: StageId = from === "start" ? "research" : from;
    try {
      if (from === "start" || from === "research" || from === "references") {
        step = "research";
        await runParallel(text, from);
      }
      const current = bagRef.current;
      if (!current.research || !current.references) {
        throw new Error("Research and references both have to land before the field can be sorted.");
      }

      if (from === "start" || from === "research" || from === "references" || from === "cluster") {
        step = "cluster";
        clearAfter("cluster");
        setStage("cluster", "running");
        const clusters = await unwrap(clusterReferences({ data: { brief: text, research: bagRef.current.research!, references: bagRef.current.references! } }));
        commitBag({ ...bagRef.current, clusters });
        setStage("cluster", "done");
      }

      if (stepRank(from) <= stepRank("concepts")) {
        step = "concepts";
        clearAfter("concepts");
        setStage("concepts", "running");
        const concepts = await unwrap(
          draftConcepts({
            data: {
              brief: text,
              research: bagRef.current.research!,
              clusters: bagRef.current.clusters!,
              references: bagRef.current.references!,
            },
          }),
        );
        commitBag({ ...bagRef.current, concepts });
        setStage("concepts", "done");
      }

      if (stepRank(from) <= stepRank("score")) {
        step = "score";
        clearAfter("score");
        setStage("score", "running");
        const scores = await unwrap(
          scoreConcepts({
            data: {
              brief: text,
              research: bagRef.current.research!,
              concepts: bagRef.current.concepts!,
            },
          }),
        );
        commitBag({ ...bagRef.current, scores });
        setStage("score", "done");
      }

      step = "render";
      setStage("render", "running");
      await exposePlates();
      setStage("render", "done");
    } catch (caught) {
      const stage = caught instanceof StepFailure ? caught.stage : step;
      setStage(stage, "error");
      setFailed(stage);
      setError(messageOf(caught));
    } finally {
      runningRef.current = false;
      setRunning(false);
    }
  }

  async function runParallel(text: string, from: "start" | StageId) {
    const redoResearch = from === "start" || from === "research" || statusRef.current.research !== "done";
    const redoReferences = from === "start" || from === "references" || statusRef.current.references !== "done";
    if (!redoResearch && !redoReferences) return;
    if (redoResearch) {
      commitBag({ ...bagRef.current, research: null, clusters: null, concepts: null, scores: null });
      setStage("research", "running");
    }
    if (redoReferences) {
      commitBag({ ...bagRef.current, references: null, clusters: null, concepts: null, scores: null });
      setStage("references", "running");
    }
    setPlates({});
    commitStatus({
      ...statusRef.current,
      cluster: "idle",
      concepts: "idle",
      score: "idle",
      render: "idle",
    });

    const tasks: Promise<void>[] = [];
    let researchError: string | null = null;
    let referencesError: string | null = null;
    if (redoResearch) {
      tasks.push(
        settle(unwrap<Research>(researchBrief({ data: { brief: text } }))).then((result) => {
          if (result.ok) {
            commitBag({ ...bagRef.current, research: result.data });
            setStage("research", "done");
          } else {
            researchError = result.error;
            setStage("research", "error");
          }
        }),
      );
    }
    if (redoReferences) {
      tasks.push(
        settle(unwrap<VisualRef[]>(collectReferences({ data: { brief: text } }))).then((result) => {
          if (result.ok) {
            commitBag({ ...bagRef.current, references: result.data });
            setStage("references", "done");
          } else {
            referencesError = result.error;
            setStage("references", "error");
          }
        }),
      );
    }
    await Promise.all(tasks);
    if (researchError || referencesError) {
      const stage: StageId = researchError ? "research" : "references";
      throw new StepFailure(stage, researchError ?? referencesError ?? "The step failed.");
    }
  }

  async function exposePlates() {
    const concepts = bagRef.current.concepts;
    const scores = bagRef.current.scores;
    if (!concepts || !scores) throw new Error("There is nothing to render yet.");
    const { picked } = selectBoards(concepts, scores);
    const initial: Record<string, PlateState> = {};
    for (const concept of picked) initial[concept.id] = { status: "running" };
    setPlates(initial);
    await Promise.all(
      picked.map(async (concept) => {
        const result = await settle(unwrap<{ url: string }>(renderPlate({ data: { prompt: concept.imagePrompt } })));
        setPlates((current) => ({
          ...current,
          [concept.id]: result.ok
            ? { status: "done", url: result.data.url }
            : { status: "error", error: result.error },
        }));
      }),
    );
  }

  const view = pinned ?? followView(status);
  const edited = brief.trim() !== runBrief;
  const tooShort = brief.trim().length < 12;

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-line">
        <div className="flex items-end justify-between gap-4 px-4 py-4 sm:px-6">
          <div>
            <p className="font-display text-4xl italic leading-none">Forma</p>
            <p className="mt-1 text-sm text-muted">A visual identity sequence</p>
          </div>
          <p className="font-mono text-xs tabular-nums text-muted">{job}</p>
        </div>
        <form
          className="px-4 pb-4 sm:px-6"
          onSubmit={(event) => {
            event.preventDefault();
            void execute("start");
          }}
        >
          <div className="border border-line shadow-border">
            <div className="border-l-4 border-l-clay">
              <div className="flex items-center justify-between gap-3 px-4 pt-3">
                <label htmlFor="brief" className="font-mono text-xs uppercase tracking-widest text-muted">
                  Brief
                </label>
                <span className={`font-mono text-xs tabular-nums ${tooShort ? "text-clay-ink" : "text-muted"}`}>
                  {brief.trim().length}/800
                </span>
              </div>
              <textarea
                id="brief"
                value={brief}
                maxLength={800}
                rows={4}
                onChange={(event) => setBrief(event.target.value)}
                placeholder="A short description of the company, app, or place."
                className="w-full resize-y bg-transparent px-4 py-3 text-base leading-relaxed outline-none placeholder:text-muted"
              />
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={running || tooShort}
              className="inline-flex min-h-11 items-center justify-center bg-ink px-4 text-sm font-medium text-paper disabled:cursor-not-allowed disabled:opacity-40"
            >
              {running ? "Running the sequence" : "Run the sequence"}
            </button>
            <p className="text-sm text-muted" aria-live="polite">
              {error
                ? error
                : running
                  ? "The sequence is working. Stages light up as they land."
                  : edited
                    ? "The brief has changed since this sequence."
                    : source === "sample"
                      ? "A finished sequence is open."
                      : "Sequence complete."}
            </p>
          </div>
          {failed ? (
            <button
              type="button"
              className="mt-3 inline-flex min-h-11 items-center border border-line px-4 text-sm hover:bg-ink/5"
              onClick={() => void execute(failed)}
              disabled={running || tooShort}
            >
              Retry {STAGES.find((stage) => stage.id === failed)?.label.toLowerCase()}
            </button>
          ) : null}
          <div className="mt-4 flex flex-wrap gap-2">
            {EXAMPLES.map((example) => (
              <button
                key={example.id}
                type="button"
                className="inline-flex min-h-11 items-center border border-line px-3 text-sm hover:bg-ink/5"
                onClick={() => {
                  if (example.sample) loadSample();
                  else setBrief(example.brief);
                }}
              >
                {example.label}
              </button>
            ))}
          </div>
        </form>
      </header>

      <div className="lg:grid lg:grid-cols-[17rem_minmax(0,1fr)]">
        <div className="flex gap-2 overflow-x-auto border-b border-line px-4 py-3 lg:hidden">
          <RailChip label="Method" active={view === "method"} onClick={() => setPinned("method")} />
          {STAGES.map((stage) => (
            <RailChip
              key={stage.id}
              label={stage.label}
              active={view === stage.id || (view === "parallel" && (stage.id === "research" || stage.id === "references"))}
              disabled={!enabled(stage.id, status, bag)}
              onClick={() => setPinned(stage.id)}
            />
          ))}
        </div>
        <aside className="hidden border-r border-line lg:sticky lg:top-0 lg:block lg:max-h-screen lg:overflow-y-auto">
          <nav className="py-4" aria-label="Sequence">
            <RailButton label="Method" hint="How the sequence is built." active={view === "method"} onClick={() => setPinned("method")} />
            <p className="px-4 pt-4 font-mono text-xs uppercase tracking-widest text-clay-ink">Together</p>
            {STAGES.slice(0, 2).map((stage) => (
              <RailButton
                key={stage.id}
                index={stage.index}
                label={stage.label}
                hint={status[stage.id] === "running" ? stage.running : stage.hint}
                status={status[stage.id]}
                active={view === stage.id}
                disabled={!enabled(stage.id, status, bag)}
                onClick={() => setPinned(stage.id)}
              />
            ))}
            <div className="mx-4 my-3 h-px bg-line" />
            {STAGES.slice(2).map((stage) => (
              <RailButton
                key={stage.id}
                index={stage.index}
                label={stage.label}
                hint={status[stage.id] === "running" ? stage.running : stage.hint}
                status={status[stage.id]}
                active={view === stage.id}
                disabled={!enabled(stage.id, status, bag)}
                onClick={() => setPinned(stage.id)}
              />
            ))}
          </nav>
        </aside>
        <main className="min-w-0 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-6xl">
            {view === "method" ? <MethodView /> : null}
            {view === "parallel" ? <ParallelView bag={bag} status={status} /> : null}
            {view === "research" ? <ResearchView bag={bag} status={status.research} /> : null}
            {view === "references" ? <ReferencesView bag={bag} status={status.references} /> : null}
            {view === "cluster" ? <ClustersView bag={bag} status={status.cluster} /> : null}
            {view === "concepts" ? <ConceptsView bag={bag} status={status.concepts} /> : null}
            {view === "score" ? <ScoresView bag={bag} status={status.score} /> : null}
            {view === "render" ? (
              <BoardsView bag={bag} plates={plates} status={status.render} sample={source === "sample"} />
            ) : null}
          </div>
        </main>
      </div>
    </div>
  );
}

function enabled(id: StageId, status: Record<StageId, Status>, bag: Bag): boolean {
  if (status[id] === "running" || status[id] === "done" || status[id] === "error") return true;
  if (id === "research") return bag.research != null;
  if (id === "references") return bag.references != null;
  if (id === "cluster") return bag.clusters != null;
  if (id === "concepts") return bag.concepts != null;
  if (id === "score") return bag.scores != null;
  return false;
}

function stepRank(id: "start" | StageId): number {
  if (id === "start" || id === "research" || id === "references") return 0;
  if (id === "cluster") return 1;
  if (id === "concepts") return 2;
  if (id === "score") return 3;
  return 4;
}

async function unwrap<T>(task: Promise<{ ok: true; data: T } | { ok: false; error: string }>): Promise<T> {
  const result = await task;
  if (!result.ok) throw new Error(result.error);
  return result.data;
}

function RailChip({
  label,
  active,
  disabled,
  onClick,
}: {
  label: string;
  active: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`inline-flex min-h-11 shrink-0 items-center border px-3 text-sm disabled:opacity-40 ${
        active ? "border-ink bg-ink text-paper" : "border-line bg-paper text-ink"
      }`}
    >
      {label}
    </button>
  );
}

function RailButton({
  index,
  label,
  hint,
  status,
  active,
  disabled,
  onClick,
}: {
  index?: string;
  label: string;
  hint: string;
  status?: Status;
  active: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`flex w-full items-start gap-3 px-4 py-3 text-left disabled:opacity-40 ${active ? "bg-ink/5" : "hover:bg-ink/5"}`}
    >
      <span className="w-6 pt-0.5 font-mono text-xs text-muted">{index ?? "00"}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm">{label}</span>
        <span className="mt-0.5 block text-xs leading-relaxed text-muted">{hint}</span>
      </span>
      <Dot status={status} />
    </button>
  );
}

function Dot({ status }: { status?: Status }) {
  if (!status || status === "idle") {
    return <span className="mt-1 size-2 shrink-0 border border-line" aria-hidden />;
  }
  if (status === "running") {
    return <span className="kiln-pulse mt-1 size-2 shrink-0 bg-clay" aria-hidden />;
  }
  if (status === "error") {
    return <span className="mt-1 size-2 shrink-0 bg-clay" aria-hidden />;
  }
  return <span className="mt-1 size-2 shrink-0 bg-ink" aria-hidden />;
}
