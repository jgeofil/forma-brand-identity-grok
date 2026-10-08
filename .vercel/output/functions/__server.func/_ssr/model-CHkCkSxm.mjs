//#region node_modules/.nitro/vite/services/ssr/assets/model-CHkCkSxm.js
var DISPLAY_FACES = [
	"Fraunces",
	"Newsreader",
	"Libre Baskerville",
	"Cormorant Garamond",
	"Syne",
	"Space Grotesk",
	"Bodoni Moda",
	"Familjen Grotesk",
	"Literata"
];
var TEXT_FACES = [
	"Outfit",
	"Familjen Grotesk",
	"Literata",
	"Newsreader",
	"Space Grotesk",
	"IBM Plex Mono"
];
var MARKS = [
	"seal",
	"monogram",
	"stripe",
	"arc",
	"frame",
	"wave",
	"diamond",
	"keel"
];
var PALETTE_ROLES = [
	"ground",
	"ink",
	"accent",
	"support",
	"quiet"
];
var REF_KINDS = [
	"material",
	"object",
	"place",
	"type",
	"color",
	"ritual",
	"photograph"
];
var STAGES = [
	{
		id: "research",
		index: "01",
		label: "Research",
		hint: "The cultural job of the brief.",
		running: "Reading the category…"
	},
	{
		id: "references",
		index: "02",
		label: "References",
		hint: "Broad evidence, not logos.",
		running: "Gathering references…"
	},
	{
		id: "cluster",
		index: "03",
		label: "Cluster",
		hint: "Sort the evidence into tensions.",
		running: "Sorting territories…"
	},
	{
		id: "concepts",
		index: "04",
		label: "Concepts",
		hint: "Six directions that disagree.",
		running: "Writing six directions…"
	},
	{
		id: "score",
		index: "05",
		label: "Score",
		hint: "Five marks, in the open.",
		running: "Scoring against the brief…"
	},
	{
		id: "render",
		index: "06",
		label: "Render",
		hint: "Three boards and three plates.",
		running: "Rendering three boards…"
	}
];
var CRITERIA = [
	{
		key: "fit",
		label: "Fit",
		hint: "Serves the brief's tension, not a generic version of the category."
	},
	{
		key: "distinction",
		label: "Distinction",
		hint: "Distance from what the category already looks like."
	},
	{
		key: "system",
		label: "System",
		hint: "Can govern a sign, a small label, and a page."
	},
	{
		key: "craft",
		label: "Craft",
		hint: "Type, color, and mark agree with each other."
	},
	{
		key: "memory",
		label: "Memory",
		hint: "A person could describe it after one visit."
	}
];
var FONT_STACK = {
	Fraunces: "\"Fraunces\", Georgia, serif",
	Newsreader: "\"Newsreader\", Georgia, serif",
	"Libre Baskerville": "\"Libre Baskerville\", Georgia, serif",
	"Cormorant Garamond": "\"Cormorant Garamond\", Georgia, serif",
	Syne: "\"Syne\", \"Outfit\", system-ui, sans-serif",
	"Space Grotesk": "\"Space Grotesk\", \"Outfit\", system-ui, sans-serif",
	"Bodoni Moda": "\"Bodoni Moda\", Georgia, serif",
	"Familjen Grotesk": "\"Familjen Grotesk\", \"Outfit\", system-ui, sans-serif",
	Literata: "\"Literata\", Georgia, serif",
	Outfit: "\"Outfit\", system-ui, sans-serif",
	"IBM Plex Mono": "\"IBM Plex Mono\", ui-monospace, monospace"
};
function fontFamily(name) {
	return FONT_STACK[name] ?? FONT_STACK.Fraunces;
}
function isDisplayFace(value) {
	return DISPLAY_FACES.includes(value);
}
function isTextFace(value) {
	return TEXT_FACES.includes(value);
}
function isMark(value) {
	return MARKS.includes(value);
}
function isRefKind(value) {
	return REF_KINDS.includes(value);
}
function initials(name) {
	const letters = name.split(/\s+/).filter((part) => /[A-Za-z]/.test(part)).map((part) => part.match(/[A-Za-z]/)?.[0] ?? "").join("");
	const one = (letters[0] ?? "A").toUpperCase();
	return {
		one,
		two: (letters.slice(0, 2) || `${one}${one}`).toUpperCase()
	};
}
function wordmark(name, casing) {
	return casing === "upper" ? name.toUpperCase() : name;
}
function channel(hex, index) {
	const value = Number.parseInt(hex.slice(1 + index * 2, 3 + index * 2), 16) / 255;
	return value <= .03928 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4;
}
function luminance(hex) {
	const safe = /^#[0-9a-fA-F]{6}$/.test(hex) ? hex : "#888888";
	return .2126 * channel(safe, 0) + .7152 * channel(safe, 1) + .0722 * channel(safe, 2);
}
function contrastRatio(a, b) {
	const left = luminance(a);
	const right = luminance(b);
	const hi = Math.max(left, right);
	const lo = Math.min(left, right);
	return (hi + .05) / (lo + .05);
}
function inkFor(background) {
	return contrastRatio(background, "#1a1714") >= contrastRatio(background, "#f4efe6") ? "#1a1714" : "#f4efe6";
}
function readablePair(ground, ink) {
	if (contrastRatio(ground, ink) >= 4.5) return {
		ground,
		ink
	};
	return {
		ground,
		ink: inkFor(ground)
	};
}
function swatch(concept, role) {
	return concept.palette.find((item) => item.role === role) ?? concept.palette[0] ?? {
		role,
		name: role,
		hex: role === "ink" ? "#1a1714" : "#f3eee6"
	};
}
function withTotal(row) {
	return {
		...row,
		total: row.fit + row.distinction + row.system + row.craft + row.memory
	};
}
function selectBoards(concepts, scores) {
	const scoreOf = new Map(scores.map((score) => [score.id, score]));
	const ranked = concepts.filter((concept) => scoreOf.has(concept.id)).sort((a, b) => {
		const delta = scoreOf.get(b.id).total - scoreOf.get(a.id).total;
		return delta !== 0 ? delta : a.name.localeCompare(b.name);
	});
	const picked = [];
	const used = /* @__PURE__ */ new Set();
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
	return {
		ranked,
		picked,
		scoreOf
	};
}
function boardMark(concept, picked) {
	if (picked.some((item) => item.id === concept.id)) return "Board";
	if (picked.some((item) => item.territoryId === concept.territoryId)) return "Held";
	return "Lower";
}
//#endregion
export { swatch as _, REF_KINDS as a, boardMark as c, isDisplayFace as d, isMark as f, selectBoards as g, readablePair as h, PALETTE_ROLES as i, fontFamily as l, isTextFace as m, DISPLAY_FACES as n, STAGES as o, isRefKind as p, MARKS as r, TEXT_FACES as s, CRITERIA as t, initials as u, withTotal as v, wordmark as y };
