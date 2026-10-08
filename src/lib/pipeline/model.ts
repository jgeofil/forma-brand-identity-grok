export const DISPLAY_FACES = [
  "Fraunces",
  "Newsreader",
  "Libre Baskerville",
  "Cormorant Garamond",
  "Syne",
  "Space Grotesk",
  "Bodoni Moda",
  "Familjen Grotesk",
  "Literata",
] as const;

export const TEXT_FACES = [
  "Outfit",
  "Familjen Grotesk",
  "Literata",
  "Newsreader",
  "Space Grotesk",
  "IBM Plex Mono",
] as const;

export const MARKS = [
  "seal",
  "monogram",
  "stripe",
  "arc",
  "frame",
  "wave",
  "diamond",
  "keel",
] as const;

export const PALETTE_ROLES = ["ground", "ink", "accent", "support", "quiet"] as const;

export const REF_KINDS = [
  "material",
  "object",
  "place",
  "type",
  "color",
  "ritual",
  "photograph",
] as const;

export type DisplayFace = (typeof DISPLAY_FACES)[number];
export type TextFace = (typeof TEXT_FACES)[number];
export type MarkKind = (typeof MARKS)[number];
export type PaletteRole = (typeof PALETTE_ROLES)[number];
export type RefKind = (typeof REF_KINDS)[number];
export type WordmarkCase = "upper" | "title";
export type NameStatus = "given" | "proposed";

export type Swatch = {
  role: PaletteRole;
  name: string;
  hex: string;
};

export type Research = {
  workingName: string;
  nameStatus: NameStatus;
  reading: string;
  category: string;
  audience: { who: string; desire: string; tension: string };
  culturalCodes: { code: string; meaning: string }[];
  categoryHabits: { habit: string; looksLike: string; opening: string }[];
  languageOwn: string[];
  languageAvoid: string[];
  constraints: string[];
};

export type VisualRef = {
  id: string;
  title: string;
  kind: RefKind;
  description: string;
  why: string;
};

export type Cluster = {
  id: string;
  name: string;
  thesis: string;
  risk: string;
  referenceIds: string[];
};

export type Concept = {
  id: string;
  name: string;
  epithet: string;
  territoryId: string;
  narrative: string;
  palette: Swatch[];
  displayFace: DisplayFace;
  textFace: TextFace;
  typeNote: string;
  mark: MarkKind;
  wordmarkCase: WordmarkCase;
  voice: string[];
  materials: string[];
  photoDirection: string;
  imagePrompt: string;
  dos: string[];
  donts: string[];
};

export type ScoreRow = {
  id: string;
  fit: number;
  distinction: number;
  system: number;
  craft: number;
  memory: number;
  total: number;
  rationale: string;
};

export type StageId =
  | "research"
  | "references"
  | "cluster"
  | "concepts"
  | "score"
  | "render";

export type Status = "idle" | "running" | "done" | "error";

export type PlateState = {
  status: "idle" | "running" | "done" | "error";
  url?: string;
  error?: string;
};

export type StageResult<T> = { ok: true; data: T } | { ok: false; error: string };

export type Bag = {
  research: Research | null;
  references: VisualRef[] | null;
  clusters: Cluster[] | null;
  concepts: Concept[] | null;
  scores: ScoreRow[] | null;
};

export const STAGES: {
  id: StageId;
  index: string;
  label: string;
  hint: string;
  running: string;
}[] = [
  {
    id: "research",
    index: "01",
    label: "Research",
    hint: "The cultural job of the brief.",
    running: "Reading the category…",
  },
  {
    id: "references",
    index: "02",
    label: "References",
    hint: "Broad evidence, not logos.",
    running: "Gathering references…",
  },
  {
    id: "cluster",
    index: "03",
    label: "Cluster",
    hint: "Sort the evidence into tensions.",
    running: "Sorting territories…",
  },
  {
    id: "concepts",
    index: "04",
    label: "Concepts",
    hint: "Six directions that disagree.",
    running: "Writing six directions…",
  },
  {
    id: "score",
    index: "05",
    label: "Score",
    hint: "Five marks, in the open.",
    running: "Scoring against the brief…",
  },
  {
    id: "render",
    index: "06",
    label: "Render",
    hint: "Three boards and three plates.",
    running: "Rendering three boards…",
  },
];

export const CRITERIA = [
  { key: "fit", label: "Fit", hint: "Serves the brief's tension, not a generic version of the category." },
  { key: "distinction", label: "Distinction", hint: "Distance from what the category already looks like." },
  { key: "system", label: "System", hint: "Can govern a sign, a small label, and a page." },
  { key: "craft", label: "Craft", hint: "Type, color, and mark agree with each other." },
  { key: "memory", label: "Memory", hint: "A person could describe it after one visit." },
] as const;

export type CriterionKey = (typeof CRITERIA)[number]["key"];

const FONT_STACK: Record<string, string> = {
  Fraunces: '"Fraunces", Georgia, serif',
  Newsreader: '"Newsreader", Georgia, serif',
  "Libre Baskerville": '"Libre Baskerville", Georgia, serif',
  "Cormorant Garamond": '"Cormorant Garamond", Georgia, serif',
  Syne: '"Syne", "Outfit", system-ui, sans-serif',
  "Space Grotesk": '"Space Grotesk", "Outfit", system-ui, sans-serif',
  "Bodoni Moda": '"Bodoni Moda", Georgia, serif',
  "Familjen Grotesk": '"Familjen Grotesk", "Outfit", system-ui, sans-serif',
  Literata: '"Literata", Georgia, serif',
  Outfit: '"Outfit", system-ui, sans-serif',
  "IBM Plex Mono": '"IBM Plex Mono", ui-monospace, monospace',
};

export function fontFamily(name: string): string {
  return FONT_STACK[name] ?? FONT_STACK.Fraunces;
}

export function isDisplayFace(value: string): value is DisplayFace {
  return (DISPLAY_FACES as readonly string[]).includes(value);
}

export function isTextFace(value: string): value is TextFace {
  return (TEXT_FACES as readonly string[]).includes(value);
}

export function isMark(value: string): value is MarkKind {
  return (MARKS as readonly string[]).includes(value);
}

export function isRefKind(value: string): value is RefKind {
  return (REF_KINDS as readonly string[]).includes(value);
}

export function initials(name: string): { one: string; two: string } {
  const parts = name.split(/\s+/).filter((part) => /[A-Za-z]/.test(part));
  const letters = parts.map((part) => part.match(/[A-Za-z]/)?.[0] ?? "").join("");
  const one = (letters[0] ?? "A").toUpperCase();
  const two = (letters.slice(0, 2) || `${one}${one}`).toUpperCase();
  return { one, two };
}

export function wordmark(name: string, casing: WordmarkCase): string {
  return casing === "upper" ? name.toUpperCase() : name;
}

function channel(hex: string, index: number): number {
  const value = Number.parseInt(hex.slice(1 + index * 2, 3 + index * 2), 16) / 255;
  return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}

export function luminance(hex: string): number {
  const safe = /^#[0-9a-fA-F]{6}$/.test(hex) ? hex : "#888888";
  return 0.2126 * channel(safe, 0) + 0.7152 * channel(safe, 1) + 0.0722 * channel(safe, 2);
}

export function contrastRatio(a: string, b: string): number {
  const left = luminance(a);
  const right = luminance(b);
  const hi = Math.max(left, right);
  const lo = Math.min(left, right);
  return (hi + 0.05) / (lo + 0.05);
}

export function inkFor(background: string): string {
  return contrastRatio(background, "#1a1714") >= contrastRatio(background, "#f4efe6")
    ? "#1a1714"
    : "#f4efe6";
}

export function readablePair(ground: string, ink: string): { ground: string; ink: string } {
  if (contrastRatio(ground, ink) >= 4.5) return { ground, ink };
  return { ground, ink: inkFor(ground) };
}

export function swatch(concept: Concept, role: PaletteRole): Swatch {
  return (
    concept.palette.find((item) => item.role === role) ??
    concept.palette[0] ?? { role, name: role, hex: role === "ink" ? "#1a1714" : "#f3eee6" }
  );
}

export function withTotal(row: Omit<ScoreRow, "total">): ScoreRow {
  return {
    ...row,
    total: row.fit + row.distinction + row.system + row.craft + row.memory,
  };
}

export type BoardMark = "Board" | "Held" | "Lower";

export function selectBoards(concepts: Concept[], scores: ScoreRow[]) {
  const scoreOf = new Map(scores.map((score) => [score.id, score]));
  const ranked = concepts
    .filter((concept) => scoreOf.has(concept.id))
    .sort((a, b) => {
      const delta = scoreOf.get(b.id)!.total - scoreOf.get(a.id)!.total;
      return delta !== 0 ? delta : a.name.localeCompare(b.name);
    });
  const picked: Concept[] = [];
  const used = new Set<string>();
  for (const concept of ranked) {
    if (picked.length >= 3) break;
    if (used.has(concept.territoryId)) continue;
    picked.push(concept);
    used.add(concept.territoryId);
  }
  for (const concept of ranked) {
    if (picked.length >= 3) break;
    if (picked.some((item) => item.id === concept.id)) continue;
    picked.push(concept);
  }
  return { ranked, picked, scoreOf };
}

export function boardMark(concept: Concept, picked: Concept[]): BoardMark {
  if (picked.some((item) => item.id === concept.id)) return "Board";
  if (picked.some((item) => item.territoryId === concept.territoryId)) return "Held";
  return "Lower";
}
