import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import type { Cluster, Concept, Research, VisualRef } from "./model";

async function engine() {
  return import("./engine.server");
}

function briefOf(input: unknown): string {
  const brief =
    input && typeof input === "object" && "brief" in input && typeof input.brief === "string"
      ? input.brief.trim()
      : "";
  if (brief.length < 12 || brief.length > 800) {
    throw new Error("Write a brief between 12 and 800 characters.");
  }
  return brief;
}

const ResearchInput = z.object({
  workingName: z.string(),
  nameStatus: z.enum(["given", "proposed"]),
  reading: z.string(),
  category: z.string(),
  audience: z.object({ who: z.string(), desire: z.string(), tension: z.string() }),
  culturalCodes: z.array(z.object({ code: z.string(), meaning: z.string() })).max(8),
  categoryHabits: z.array(z.object({ habit: z.string(), looksLike: z.string(), opening: z.string() })).max(6),
  languageOwn: z.array(z.string()).max(10),
  languageAvoid: z.array(z.string()).max(10),
  constraints: z.array(z.string()).max(8),
});

const RefInput = z.object({
  id: z.string().max(16),
  title: z.string().max(120),
  kind: z.string(),
  description: z.string().max(400),
  why: z.string().max(400),
});

const ClusterInput = z.object({
  id: z.string().max(16),
  name: z.string().max(80),
  thesis: z.string().max(400),
  risk: z.string().max(400),
  referenceIds: z.array(z.string().max(16)).max(12),
});

const ConceptInput = z.object({
  id: z.string().max(24),
  name: z.string().max(48),
  epithet: z.string().max(200),
  territoryId: z.string().max(16),
  narrative: z.string().max(600),
  palette: z.array(z.object({ role: z.string(), name: z.string(), hex: z.string() })).max(6),
  displayFace: z.string(),
  textFace: z.string(),
  typeNote: z.string().max(300),
  mark: z.string(),
  wordmarkCase: z.enum(["upper", "title"]),
  voice: z.array(z.string()).max(6),
  materials: z.array(z.string()).max(6),
  photoDirection: z.string().max(300),
  imagePrompt: z.string().max(600),
  dos: z.array(z.string()).max(4),
  donts: z.array(z.string()).max(4),
});

export const researchBrief = createServerFn({ method: "POST" })
  .validator((input: unknown) => ({ brief: briefOf(input) }))
  .handler(async ({ data }) => (await engine()).runResearch(data.brief));

export const collectReferences = createServerFn({ method: "POST" })
  .validator((input: unknown) => ({ brief: briefOf(input) }))
  .handler(async ({ data }) => (await engine()).runReferences(data.brief));

export const clusterReferences = createServerFn({ method: "POST" })
  .validator((input: unknown) => {
    const record = input && typeof input === "object" ? (input as Record<string, unknown>) : {};
    const brief = briefOf(record);
    const research = ResearchInput.safeParse(record.research);
    const references = z.array(RefInput).min(4).max(16).safeParse(record.references);
    if (!research.success || !references.success) {
      throw new Error("The previous step is missing. Start the sequence again.");
    }
    return {
      brief,
      research: research.data as Research,
      references: references.data as VisualRef[],
    };
  })
  .handler(async ({ data }) => (await engine()).runClusters(data.brief, data.research, data.references));

export const draftConcepts = createServerFn({ method: "POST" })
  .validator((input: unknown) => {
    const record = input && typeof input === "object" ? (input as Record<string, unknown>) : {};
    const brief = briefOf(record);
    const research = ResearchInput.safeParse(record.research);
    const clusters = z.array(ClusterInput).min(2).max(6).safeParse(record.clusters);
    const references = z.array(RefInput).min(4).max(16).safeParse(record.references);
    if (!research.success || !clusters.success || !references.success) {
      throw new Error("The previous step is missing. Start the sequence again.");
    }
    return {
      brief,
      research: research.data as Research,
      clusters: clusters.data as Cluster[],
      references: references.data as VisualRef[],
    };
  })
  .handler(async ({ data }) =>
    (await engine()).runConcepts(data.brief, data.research, data.clusters, data.references),
  );

export const scoreConcepts = createServerFn({ method: "POST" })
  .validator((input: unknown) => {
    const record = input && typeof input === "object" ? (input as Record<string, unknown>) : {};
    const brief = briefOf(record);
    const research = ResearchInput.safeParse(record.research);
    const concepts = z.array(ConceptInput).min(3).max(8).safeParse(record.concepts);
    if (!research.success || !concepts.success) {
      throw new Error("The previous step is missing. Start the sequence again.");
    }
    return {
      brief,
      research: research.data as Research,
      concepts: concepts.data as Concept[],
    };
  })
  .handler(async ({ data }) => (await engine()).runScores(data.brief, data.research, data.concepts));

export const renderPlate = createServerFn({ method: "POST" })
  .validator((input: unknown) => {
    const prompt =
      input && typeof input === "object" && "prompt" in input && typeof input.prompt === "string"
        ? input.prompt.trim().slice(0, 600)
        : "";
    if (prompt.length < 8) throw new Error("This direction has no plate to expose.");
    return { prompt };
  })
  .handler(async ({ data }) => (await engine()).runPlate(data.prompt));
