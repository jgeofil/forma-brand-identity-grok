import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { a as object, n as array, o as string, t as _enum } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-BsjzC8Pi.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
async function engine() {
	return import("./engine.server-NuZ0v5OP.mjs");
}
function briefOf(input) {
	const brief = input && typeof input === "object" && "brief" in input && typeof input.brief === "string" ? input.brief.trim() : "";
	if (brief.length < 12 || brief.length > 800) throw new Error("Write a brief between 12 and 800 characters.");
	return brief;
}
var ResearchInput = object({
	workingName: string(),
	nameStatus: _enum(["given", "proposed"]),
	reading: string(),
	category: string(),
	audience: object({
		who: string(),
		desire: string(),
		tension: string()
	}),
	culturalCodes: array(object({
		code: string(),
		meaning: string()
	})).max(8),
	categoryHabits: array(object({
		habit: string(),
		looksLike: string(),
		opening: string()
	})).max(6),
	languageOwn: array(string()).max(10),
	languageAvoid: array(string()).max(10),
	constraints: array(string()).max(8)
});
var RefInput = object({
	id: string().max(16),
	title: string().max(120),
	kind: string(),
	description: string().max(400),
	why: string().max(400)
});
var ClusterInput = object({
	id: string().max(16),
	name: string().max(80),
	thesis: string().max(400),
	risk: string().max(400),
	referenceIds: array(string().max(16)).max(12)
});
var ConceptInput = object({
	id: string().max(24),
	name: string().max(48),
	epithet: string().max(200),
	territoryId: string().max(16),
	narrative: string().max(600),
	palette: array(object({
		role: string(),
		name: string(),
		hex: string()
	})).max(6),
	displayFace: string(),
	textFace: string(),
	typeNote: string().max(300),
	mark: string(),
	wordmarkCase: _enum(["upper", "title"]),
	voice: array(string()).max(6),
	materials: array(string()).max(6),
	photoDirection: string().max(300),
	imagePrompt: string().max(600),
	dos: array(string()).max(4),
	donts: array(string()).max(4)
});
var researchBrief_createServerFn_handler = createServerRpc({
	id: "7e93cf21b54cf8d660bdf2c0c66bfb7658e7617d3d9d687969769a8ab3bc8b64",
	name: "researchBrief",
	filename: "src/lib/pipeline/api.ts"
}, (opts) => researchBrief.__executeServer(opts));
var researchBrief = createServerFn({ method: "POST" }).validator((input) => ({ brief: briefOf(input) })).handler(researchBrief_createServerFn_handler, async ({ data }) => (await engine()).runResearch(data.brief));
var collectReferences_createServerFn_handler = createServerRpc({
	id: "9bf692ca5935fd5011ec835fb1caa0f5987280a61eae1cfed9218916beae49ee",
	name: "collectReferences",
	filename: "src/lib/pipeline/api.ts"
}, (opts) => collectReferences.__executeServer(opts));
var collectReferences = createServerFn({ method: "POST" }).validator((input) => ({ brief: briefOf(input) })).handler(collectReferences_createServerFn_handler, async ({ data }) => (await engine()).runReferences(data.brief));
var clusterReferences_createServerFn_handler = createServerRpc({
	id: "c34f2a3f1261c63c1a1b7c2ed48c6ed242abde6ec77a1b0f75c68df1b57d16f1",
	name: "clusterReferences",
	filename: "src/lib/pipeline/api.ts"
}, (opts) => clusterReferences.__executeServer(opts));
var clusterReferences = createServerFn({ method: "POST" }).validator((input) => {
	const record = input && typeof input === "object" ? input : {};
	const brief = briefOf(record);
	const research = ResearchInput.safeParse(record.research);
	const references = array(RefInput).min(4).max(16).safeParse(record.references);
	if (!research.success || !references.success) throw new Error("The previous step is missing. Start the sequence again.");
	return {
		brief,
		research: research.data,
		references: references.data
	};
}).handler(clusterReferences_createServerFn_handler, async ({ data }) => (await engine()).runClusters(data.brief, data.research, data.references));
var draftConcepts_createServerFn_handler = createServerRpc({
	id: "d60ef2aad2a8986f425ae826358893d8ffb57fafca4169308033d0db3b67f5d5",
	name: "draftConcepts",
	filename: "src/lib/pipeline/api.ts"
}, (opts) => draftConcepts.__executeServer(opts));
var draftConcepts = createServerFn({ method: "POST" }).validator((input) => {
	const record = input && typeof input === "object" ? input : {};
	const brief = briefOf(record);
	const research = ResearchInput.safeParse(record.research);
	const clusters = array(ClusterInput).min(2).max(6).safeParse(record.clusters);
	const references = array(RefInput).min(4).max(16).safeParse(record.references);
	if (!research.success || !clusters.success || !references.success) throw new Error("The previous step is missing. Start the sequence again.");
	return {
		brief,
		research: research.data,
		clusters: clusters.data,
		references: references.data
	};
}).handler(draftConcepts_createServerFn_handler, async ({ data }) => (await engine()).runConcepts(data.brief, data.research, data.clusters, data.references));
var scoreConcepts_createServerFn_handler = createServerRpc({
	id: "f171af0ec9249e6ffb2ef51e25f35faf1dac116d71f83269d0eb99f05a6f7762",
	name: "scoreConcepts",
	filename: "src/lib/pipeline/api.ts"
}, (opts) => scoreConcepts.__executeServer(opts));
var scoreConcepts = createServerFn({ method: "POST" }).validator((input) => {
	const record = input && typeof input === "object" ? input : {};
	const brief = briefOf(record);
	const research = ResearchInput.safeParse(record.research);
	const concepts = array(ConceptInput).min(3).max(8).safeParse(record.concepts);
	if (!research.success || !concepts.success) throw new Error("The previous step is missing. Start the sequence again.");
	return {
		brief,
		research: research.data,
		concepts: concepts.data
	};
}).handler(scoreConcepts_createServerFn_handler, async ({ data }) => (await engine()).runScores(data.brief, data.research, data.concepts));
var renderPlate_createServerFn_handler = createServerRpc({
	id: "e4c675ae596d7715a4e715d3f07e4563c0500f8dbadcc90ff641a82db2c7e515",
	name: "renderPlate",
	filename: "src/lib/pipeline/api.ts"
}, (opts) => renderPlate.__executeServer(opts));
var renderPlate = createServerFn({ method: "POST" }).validator((input) => {
	const prompt = input && typeof input === "object" && "prompt" in input && typeof input.prompt === "string" ? input.prompt.trim().slice(0, 600) : "";
	if (prompt.length < 8) throw new Error("This direction has no plate to expose.");
	return { prompt };
}).handler(renderPlate_createServerFn_handler, async ({ data }) => (await engine()).runPlate(data.prompt));
//#endregion
export { clusterReferences_createServerFn_handler, collectReferences_createServerFn_handler, draftConcepts_createServerFn_handler, renderPlate_createServerFn_handler, researchBrief_createServerFn_handler, scoreConcepts_createServerFn_handler };
