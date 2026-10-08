import { IdentityMark } from "@/components/identity-mark";
import {
  fontFamily,
  initials,
  readablePair,
  swatch,
  wordmark,
  type Cluster,
  type Concept,
  type PlateState,
  type ScoreRow,
} from "@/lib/pipeline/model";

type Props = {
  concept: Concept;
  territory?: Cluster;
  clientName: string;
  rank: number;
  score?: ScoreRow;
  plate?: PlateState;
};

export function Moodboard({ concept, territory, clientName, rank, score, plate }: Props) {
  const ground = swatch(concept, "ground");
  const ink = swatch(concept, "ink");
  const accent = swatch(concept, "accent");
  const quiet = swatch(concept, "quiet");
  const pair = readablePair(ground.hex, ink.hex);
  const name = wordmark(clientName, concept.wordmarkCase);
  const letters = initials(clientName);
  const rule = "color-mix(in srgb, currentColor 16%, transparent)";

  return (
    <article
      id={`board-${concept.id}`}
      className="overflow-hidden rounded-lg shadow-border"
      style={{ background: pair.ground, color: pair.ink }}
    >
      <header className="flex items-start justify-between gap-4 px-5 pt-5 sm:px-6" style={{ borderColor: rule }}>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest opacity-70">
            {String(rank).padStart(2, "0")} · {concept.name}
            {territory ? ` · ${territory.name}` : ""}
          </p>
          <h2
            className="mt-3 font-display text-4xl leading-none break-words sm:text-6xl"
            style={{ fontFamily: fontFamily(concept.displayFace), letterSpacing: concept.wordmarkCase === "upper" ? "0.04em" : "-0.03em" }}
          >
            {name}
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed" style={{ fontFamily: fontFamily(concept.textFace) }}>
            {concept.epithet}
          </p>
        </div>
        {score ? (
          <p className="shrink-0 font-mono text-sm tabular-nums">
            {score.total}
            <span className="opacity-60">/50</span>
          </p>
        ) : null}
      </header>

      <div className="mt-6 grid gap-5 px-5 sm:px-6 md:grid-cols-[1.15fr_0.85fr]">
        <figure>
          <Plate concept={concept} plate={plate} quiet={quiet.hex} />
          <figcaption className="mt-2 text-xs leading-relaxed opacity-75">{concept.photoDirection}</figcaption>
        </figure>
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest opacity-70">Palette</p>
            <ul className="mt-3 grid grid-cols-5 gap-2">
              {concept.palette.map((color) => (
                <li key={color.role}>
                  <div className="h-12" style={{ background: color.hex, boxShadow: "inset 0 0 0 1px rgba(26,23,20,0.12)" }} />
                  <p className="mt-1 text-xs leading-tight">{color.name}</p>
                  <p className="font-mono text-xs tabular-nums opacity-70">{color.hex}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest opacity-70">Type</p>
            <p className="mt-2 text-3xl leading-none" style={{ fontFamily: fontFamily(concept.displayFace) }}>
              {concept.displayFace}
            </p>
            <p className="mt-2 text-sm leading-relaxed" style={{ fontFamily: fontFamily(concept.textFace) }}>
              {concept.typeNote}
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest opacity-70">Materials</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {concept.materials.map((material) => (
                <li key={material} className="border px-2 py-1 text-xs" style={{ borderColor: rule }}>
                  {material}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5 border-t px-5 py-5 sm:px-6 md:grid-cols-3" style={{ borderColor: rule }}>
        <div className="flex gap-3">
          <IdentityMark kind={concept.mark} letters={letters} className="size-16 shrink-0" />
          <div>
            <p className="font-mono text-xs uppercase tracking-widest opacity-70">Mark · {concept.mark}</p>
            <p className="mt-2 text-sm leading-relaxed">{concept.narrative}</p>
          </div>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest opacity-70">Voice</p>
          <ul className="mt-2 space-y-1 text-sm">
            {concept.voice.map((line) => (
              <li key={line}>“{line}”</li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest opacity-70">Do</p>
            <ul className="mt-2 space-y-2">
              {concept.dos.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest opacity-70">Don’t</p>
            <ul className="mt-2 space-y-2">
              {concept.donts.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="grid gap-3 p-3 sm:grid-cols-3" style={{ background: "color-mix(in srgb, currentColor 7%, transparent)" }}>
        <Sign name={name} face={concept.displayFace} ground={pair.ground} ink={pair.ink} accent={accent.hex} />
        <Ticket name={name} face={concept.displayFace} ground={pair.ground} ink={pair.ink} accent={accent.hex} />
        <Label letters={letters.two} face={concept.textFace} ground={quiet.hex} ink={pair.ink} />
      </div>
    </article>
  );
}

function Plate({ concept, plate, quiet }: { concept: Concept; plate?: PlateState; quiet: string }) {
  if (plate?.status === "done" && plate.url) {
    return (
      <div className="plate-frame overflow-hidden" style={{ boxShadow: "inset 0 0 0 1px rgba(26,23,20,0.12)" }}>
        <img
          src={plate.url}
          alt={concept.photoDirection}
          className="h-full w-full object-cover"
          decoding="async"
        />
      </div>
    );
  }
  const label =
    plate?.status === "running"
      ? "Exposing the plate…"
      : plate?.status === "error"
        ? plate.error || "The plate didn't return."
        : "No plate yet.";
  return (
    <div
      className="plate-frame flex items-end p-4"
      style={{ background: quiet, color: readablePair(quiet, "#1a1714").ink }}
    >
      <p className="max-w-sm text-sm leading-relaxed">{label}</p>
    </div>
  );
}

function Sign({
  name,
  face,
  ground,
  ink,
  accent,
}: {
  name: string;
  face: string;
  ground: string;
  ink: string;
  accent: string;
}) {
  return (
    <div className="flex min-h-36 flex-col justify-between p-4" style={{ background: ground, color: ink }}>
      <p className="font-mono text-xs uppercase tracking-widest opacity-70">Sign</p>
      <p className="text-2xl leading-none" style={{ fontFamily: fontFamily(face) }}>
        {name}
      </p>
      <div className="h-px w-10" style={{ background: accent }} />
    </div>
  );
}

function Ticket({
  name,
  face,
  ground,
  ink,
  accent,
}: {
  name: string;
  face: string;
  ground: string;
  ink: string;
  accent: string;
}) {
  return (
    <div className="flex min-h-36 flex-col justify-between border border-dashed p-4" style={{ background: ink, color: ground, borderColor: accent }}>
      <div className="flex justify-between font-mono text-xs uppercase tracking-widest">
        <span>Ticket</span>
        <span className="tabular-nums">04</span>
      </div>
      <p className="text-xl leading-none" style={{ fontFamily: fontFamily(face) }}>
        {name}
      </p>
      <p className="text-xs opacity-80">Member</p>
    </div>
  );
}

function Label({
  letters,
  face,
  ground,
  ink,
}: {
  letters: string;
  face: string;
  ground: string;
  ink: string;
}) {
  const pair = readablePair(ground, ink);
  return (
    <div className="flex min-h-36 flex-col items-start justify-between p-4" style={{ background: pair.ground, color: pair.ink }}>
      <p className="font-mono text-xs uppercase tracking-widest opacity-70">Label</p>
      <p className="text-3xl leading-none" style={{ fontFamily: fontFamily(face) }}>
        {letters}
      </p>
      <p className="text-xs">Woven, small.</p>
    </div>
  );
}
