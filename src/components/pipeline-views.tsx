import type { ReactNode } from "react";
import { IdentityMark } from "@/components/identity-mark";
import { Moodboard } from "@/components/moodboard";
import {
  boardMark,
  fontFamily,
  initials,
  selectBoards,
  STAGES,
  CRITERIA,
  type Bag,
  type BoardMark,
  type CriterionKey,
  type PlateState,
  type StageId,
  type Status,
} from "@/lib/pipeline/model";

function Sheet({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  lede?: string;
  children: ReactNode;
}) {
  return (
    <section>
      <p className="font-mono text-xs uppercase tracking-widest text-muted">{kicker}</p>
      <h1 className="mt-2 font-display text-4xl leading-tight">{title}</h1>
      {lede ? <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{lede}</p> : null}
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Waiting({ text }: { text: string }) {
  return <p className="text-sm text-muted">{text}</p>;
}

export function MethodView() {
  return (
    <Sheet
      kicker="Method"
      title="The sequence"
      lede="A visual identity is a decision you can defend. This studio runs that decision in the open, and only then draws the three directions worth looking at."
    >
      <ol className="max-w-3xl space-y-8">
        <li>
          <div className="grid gap-3 sm:grid-cols-2">
            <Step n="01" title="Research" body="Names the job. Who it is for, what the category already looks like, which words are tired." />
            <Step n="02" title="References" body="Stays wide. Materials, objects, places, type, rituals. Not logos, and not a mood adjective." />
          </div>
          <p className="mt-3 font-mono text-xs uppercase tracking-widest text-clay-ink">These two start together. Neither waits.</p>
        </li>
        <li>
          <Step
            n="03"
            title="Cluster"
            body="References are sorted into territories. A territory is a tension you can say in one sentence. “Minimal” is not a territory. “A warm lamp in a cold field” is. Every reference lands in one."
          />
        </li>
        <li>
          <Step
            n="04"
            title="Concepts"
            body="Six directions. Each belongs to a territory, and they have to disagree in type, palette, and mark. Variations of one idea do not count."
          />
        </li>
        <li>
          <Step
            n="05"
            title="Score"
            body="Five marks, each out of ten, equal weight. Fit, distinction, system, craft, memory. A pretty direction that looks like the category loses on distinction, and the loss stays visible."
          />
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            {CRITERIA.map((criterion) => (
              <div key={criterion.key} className="border border-line px-3 py-3">
                <dt className="text-sm">{criterion.label}</dt>
                <dd className="mt-1 text-sm text-muted">{criterion.hint}</dd>
              </div>
            ))}
          </dl>
        </li>
        <li>
          <Step
            n="06"
            title="Render"
            body="Only three are drawn: the highest scores, spread across different territories, so one idea cannot take every board. Each board is a wordmark, a mark, a palette, type, materials, voice, three applications, and one photographic plate. The rest stay in the table."
          />
        </li>
      </ol>
    </Sheet>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="border border-line bg-paper px-4 py-4 shadow-border">
      <p className="font-mono text-xs text-muted">{n}</p>
      <h2 className="mt-1 font-display text-2xl">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}

export function ParallelView({ bag, status }: { bag: Bag; status: Record<StageId, Status> }) {
  return (
    <Sheet
      kicker="01 + 02"
      title="Research and references"
      lede="These two start at the same moment. Research without references becomes strategy-speak. References without research become a pile."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Lane title="Research" status={status.research} running="Reading the category…">
          {bag.research ? <ResearchBody research={bag.research} compact /> : null}
        </Lane>
        <Lane title="References" status={status.references} running="Gathering references…">
          {bag.references ? <ReferenceList references={bag.references} columns={1} /> : null}
        </Lane>
      </div>
    </Sheet>
  );
}

function Lane({
  title,
  status,
  running,
  children,
}: {
  title: string;
  status: Status;
  running: string;
  children: ReactNode;
}) {
  return (
    <div className="min-w-0 border border-line p-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-display text-2xl">{title}</h2>
        <StatusWord status={status} />
      </div>
      <div className="mt-4">
        {children || <Waiting text={status === "running" ? running : "Waiting on this lane."} />}
      </div>
    </div>
  );
}

function StatusWord({ status }: { status: Status }) {
  const label = status === "running" ? "Running" : status === "done" ? "In" : status === "error" ? "Stopped" : "Waiting";
  return <span className="font-mono text-xs uppercase tracking-widest text-muted">{label}</span>;
}

export function ResearchView({ bag, status }: { bag: Bag; status: Status }) {
  return (
    <Sheet kicker="01" title="Research" lede="The cultural job, before anyone picks a color.">
      {bag.research ? <ResearchBody research={bag.research} /> : <Waiting text={status === "running" ? "Reading the category…" : "Research has not run."} />}
    </Sheet>
  );
}

function ResearchBody({ research, compact = false }: { research: Bag["research"] & object; compact?: boolean }) {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted">{research.category}</p>
        <p className={`mt-2 font-display leading-snug ${compact ? "text-2xl" : "text-3xl"}`}>{research.reading}</p>
        <p className="mt-3 text-sm text-muted">
          {research.nameStatus === "proposed" ? "Working name, proposed" : "Name in the brief"}: {research.workingName}
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Fact label="Who" body={research.audience.who} />
        <Fact label="Desire" body={research.audience.desire} />
        <Fact label="Tension" body={research.audience.tension} />
      </div>
      {!compact ? (
        <>
          <div>
            <h2 className="font-display text-2xl">Cultural codes</h2>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {research.culturalCodes.map((code) => (
                <li key={code.code} className="grid gap-1 py-3 sm:grid-cols-[12rem_1fr] sm:gap-4">
                  <span className="font-display text-lg">{code.code}</span>
                  <span className="text-sm leading-relaxed text-muted">{code.meaning}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl">What the category already does</h2>
            <ul className="mt-3 space-y-3">
              {research.categoryHabits.map((habit) => (
                <li key={habit.habit} className="border border-line px-4 py-3">
                  <p className="text-sm">{habit.habit}</p>
                  <p className="mt-1 text-sm text-muted">{habit.looksLike}</p>
                  <p className="mt-2 text-sm">{habit.opening}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <WordList label="Can say" words={research.languageOwn} />
            <WordList label="Already tired" words={research.languageAvoid} />
          </div>
          <div>
            <h2 className="font-display text-2xl">Constraints</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              {research.constraints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </>
      ) : null}
    </div>
  );
}

function Fact({ label, body }: { label: string; body: string }) {
  return (
    <div className="border border-line px-3 py-3">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">{label}</p>
      <p className="mt-2 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function WordList({ label, words }: { label: string; words: string[] }) {
  return (
    <div>
      <h2 className="font-display text-2xl">{label}</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {words.map((word) => (
          <li key={word} className="border border-line px-2 py-1 text-sm">
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ReferencesView({ bag, status }: { bag: Bag; status: Status }) {
  const clustered = bag.clusters && bag.references;
  return (
    <Sheet kicker="02" title="References" lede="Broad on purpose. Pointable things, not a style word.">
      {!bag.references ? (
        <Waiting text={status === "running" ? "Gathering references…" : "References have not been gathered."} />
      ) : clustered ? (
        <div className="space-y-8">
          {bag.clusters!.map((cluster) => {
            const items = bag.references!.filter((item) => cluster.referenceIds.includes(item.id));
            return (
              <section key={cluster.id}>
                <h2 className="font-display text-2xl">{cluster.name}</h2>
                <div className="mt-3">
                  <ReferenceList references={items} />
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <ReferenceList references={bag.references} />
      )}
    </Sheet>
  );
}

function ReferenceList({
  references,
  columns = 2,
}: {
  references: NonNullable<Bag["references"]>;
  columns?: 1 | 2;
}) {
  return (
    <ul className={columns === 2 ? "grid gap-3 sm:grid-cols-2" : "grid gap-3"}>
      {references.map((item) => (
        <li key={item.id} className="border border-line px-3 py-3">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            {item.id} · {item.kind}
          </p>
          <h3 className="mt-1 font-display text-xl">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed">{item.description}</p>
          <p className="mt-2 text-sm text-muted">{item.why}</p>
        </li>
      ))}
    </ul>
  );
}

export function ClustersView({ bag, status }: { bag: Bag; status: Status }) {
  return (
    <Sheet kicker="03" title="Territories" lede="A cluster is a tension. If it can only be said as a style adjective, it is not ready.">
      {!bag.clusters || !bag.references ? (
        <Waiting text={status === "running" ? "Sorting territories…" : "Nothing has been clustered yet."} />
      ) : (
        <ul className="grid gap-4 lg:grid-cols-2">
          {bag.clusters.map((cluster) => {
            const items = bag.references!.filter((item) => cluster.referenceIds.includes(item.id));
            return (
              <li key={cluster.id} className="border border-line px-4 py-4">
                <p className="font-mono text-xs text-muted">{cluster.id}</p>
                <h2 className="mt-1 font-display text-3xl">{cluster.name}</h2>
                <p className="mt-3 text-base leading-relaxed">{cluster.thesis}</p>
                <p className="mt-3 text-sm text-muted">Risk — {cluster.risk}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li key={item.id} className="bg-ink/5 px-2 py-1 text-xs">
                      {item.title}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      )}
    </Sheet>
  );
}

export function ConceptsView({ bag, status }: { bag: Bag; status: Status }) {
  const client = bag.research?.workingName ?? "Name";
  return (
    <Sheet kicker="04" title="Six directions" lede="Candidates, before the score. They are supposed to disagree.">
      {!bag.concepts ? (
        <Waiting text={status === "running" ? "Writing six directions…" : "No directions yet."} />
      ) : (
        <ul className="space-y-3">
          {bag.concepts.map((concept) => {
            const territory = bag.clusters?.find((cluster) => cluster.id === concept.territoryId);
            return (
              <li key={concept.id} className="grid gap-4 border border-line p-4 sm:grid-cols-[auto_1fr_auto]">
                <IdentityMark kind={concept.mark} letters={initials(client)} className="size-14 text-ink" />
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted">
                    {concept.id} · {territory?.name ?? concept.territoryId}
                  </p>
                  <h2 className="mt-1 font-display text-2xl" style={{ fontFamily: fontFamily(concept.displayFace) }}>
                    {concept.name}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed">{concept.epithet}</p>
                  <p className="mt-2 text-xs text-muted">
                    {concept.displayFace} / {concept.textFace}
                  </p>
                </div>
                <ul className="flex h-8 w-full sm:w-36">
                  {concept.palette.map((color) => (
                    <li key={color.role} className="h-full flex-1" style={{ background: color.hex }} />
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      )}
    </Sheet>
  );
}

const MARK_COPY: Record<BoardMark, string> = {
  Board: "Drawn as a board.",
  Held: "Held. A higher score already took this territory.",
  Lower: "Lower than the three that were drawn.",
};

export function ScoresView({ bag, status }: { bag: Bag; status: Status }) {
  if (!bag.concepts || !bag.scores) {
    return (
      <Sheet kicker="05" title="Scores" lede="Equal weight. The rationale has to survive a critique.">
        <Waiting text={status === "running" ? "Scoring against the brief…" : "Nothing has been scored."} />
      </Sheet>
    );
  }
  const { ranked, picked, scoreOf } = selectBoards(bag.concepts, bag.scores);
  return (
    <Sheet
      kicker="05"
      title="Scores"
      lede="Boards are the highest scores spread across territories, so three variations of one idea cannot crowd the table."
    >
      <div className="hidden md:block">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-line text-xs uppercase tracking-widest text-muted">
              <th className="py-2 pr-3 font-medium">Direction</th>
              {CRITERIA.map((criterion) => (
                <th key={criterion.key} className="px-2 py-2 text-right font-medium">
                  {criterion.label}
                </th>
              ))}
              <th className="px-2 py-2 text-right font-medium">Total</th>
              <th className="py-2 pl-3 font-medium">Board</th>
            </tr>
          </thead>
          <tbody>
            {ranked.map((concept) => {
              const score = scoreOf.get(concept.id)!;
              const mark = boardMark(concept, picked);
              return (
                <tr key={concept.id} className="border-b border-line align-top">
                  <td className="py-3 pr-3">
                    <p>{concept.name}</p>
                    <p className="mt-1 max-w-sm text-xs leading-relaxed text-muted">{score.rationale}</p>
                  </td>
                  {CRITERIA.map((criterion) => (
                    <td key={criterion.key} className="px-2 py-3 text-right font-mono tabular-nums">
                      {score[criterion.key as CriterionKey]}
                    </td>
                  ))}
                  <td className="px-2 py-3 text-right font-mono tabular-nums">{score.total}</td>
                  <td className="py-3 pl-3">
                    <p>{mark}</p>
                    <p className="mt-1 text-xs text-muted">{MARK_COPY[mark]}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ul className="space-y-3 md:hidden">
        {ranked.map((concept) => {
          const score = scoreOf.get(concept.id)!;
          const mark = boardMark(concept, picked);
          return (
            <li key={concept.id} className="border border-line p-3">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="font-display text-2xl">{concept.name}</h2>
                <p className="font-mono text-sm tabular-nums">
                  {score.total}
                  <span className="text-muted">/50</span>
                </p>
              </div>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted">{mark}</p>
              <p className="mt-2 text-sm leading-relaxed">{score.rationale}</p>
              <dl className="mt-3 grid grid-cols-5 gap-2">
                {CRITERIA.map((criterion) => (
                  <div key={criterion.key}>
                    <dt className="text-xs text-muted">{criterion.label}</dt>
                    <dd className="font-mono text-sm tabular-nums">{score[criterion.key]}</dd>
                    <div className="mt-1 h-1 bg-ink/10">
                      <div className="h-full bg-ink" style={{ width: `${score[criterion.key] * 10}%` }} />
                    </div>
                  </div>
                ))}
              </dl>
            </li>
          );
        })}
      </ul>
    </Sheet>
  );
}

export function BoardsView({
  bag,
  plates,
  status,
  sample,
}: {
  bag: Bag;
  plates: Record<string, PlateState>;
  status: Status;
  sample: boolean;
}) {
  if (!bag.concepts || !bag.scores || !bag.research) {
    return (
      <Sheet kicker="06" title="Three boards" lede="Rendered only after the score, and only three of them.">
        <Waiting text={status === "running" ? "Rendering three boards…" : "No boards yet."} />
      </Sheet>
    );
  }
  const { ranked, picked } = selectBoards(bag.concepts, bag.scores);
  const spread = new Set(picked.map((concept) => concept.territoryId)).size;
  return (
    <Sheet
      kicker="06"
      title="Three boards"
      lede={
        sample
          ? `A finished sequence for ${bag.research.workingName}. Write a brief and run it to start another.`
          : spread >= 3
            ? `Three directions for ${bag.research.workingName}. Same brief, different territories.`
            : `The field converged. These are still the strongest directions for ${bag.research.workingName}.`
      }
    >
      <nav className="mb-6 flex flex-wrap gap-2">
        {picked.map((concept, index) => (
          <a key={concept.id} href={`#board-${concept.id}`} className="inline-flex min-h-11 items-center border border-line px-3 text-sm hover:bg-ink/5">
            {String(index + 1).padStart(2, "0")} {concept.name}
          </a>
        ))}
      </nav>
      <div className="space-y-8">
        {picked.map((concept) => {
          const rank = ranked.findIndex((item) => item.id === concept.id) + 1;
          return (
            <Moodboard
              key={concept.id}
              concept={concept}
              territory={bag.clusters?.find((cluster) => cluster.id === concept.territoryId)}
              clientName={bag.research!.workingName}
              rank={rank}
              score={bag.scores!.find((score) => score.id === concept.id)}
              plate={plates[concept.id]}
            />
          );
        })}
      </div>
    </Sheet>
  );
}

export function stageHint(id: StageId, status: Status): string {
  const stage = STAGES.find((item) => item.id === id);
  if (!stage) return "";
  return status === "running" ? stage.running : stage.hint;
}
