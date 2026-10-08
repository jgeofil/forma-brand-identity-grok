import type { Bag, Concept, PlateState, Research, ScoreRow, Status, VisualRef } from "./model";
import { withTotal } from "./model";

export const SAMPLE_BRIEF =
  "An evening swimming club on a cold northern lake. Members swim at dusk, then sit in a timber boathouse with wool blankets and a single brass lamp. Quiet, physical, a little ceremonial. Not a spa, not a gym.";

export const SAMPLE_JOB = "F–014";

const research: Research = {
  workingName: "Vesper Dock",
  nameStatus: "given",
  reading:
    "The club is a ritual for cold water, not a wellness product. The identity has to make a timber dock, a hard swim, and the lamp afterward feel like one place — and refuse both the gym and the spa.",
  category: "Cold-water swimming club",
  audience: {
    who: "Adults who swim outside after work, often in pairs, in a climate that is already dark by five.",
    desire: "A place that takes the swim seriously without turning it into a performance.",
    tension: "They want belonging, and they distrust any mark that looks like it is selling belonging.",
  },
  culturalCodes: [
    { code: "A single lamp", meaning: "Warmth is a point, not a wash of amber across everything." },
    { code: "Cold water", meaning: "Clarity, not punishment. The lake is not a challenge brand." },
    { code: "Wool afterward", meaning: "The swim is only half the ritual. The blanket is the other half." },
    { code: "A painted number", meaning: "The place is used. Wear is allowed to show." },
  ],
  categoryHabits: [
    {
      habit: "Ice-bath brands",
      looksLike: "Black fields, electric blue, a grotesk that shouts.",
      opening: "They sell shock. This club sells the hour after the water.",
    },
    {
      habit: "Nordic spa",
      looksLike: "Oatmeal linen, pebbles, a logo that whispers.",
      opening: "It looks like a resort. The dock is a working room.",
    },
    {
      habit: "Yacht clubs",
      looksLike: "Navy, a gold crest, script.",
      opening: "Membership as costume. Here it is a key and a blanket.",
    },
  ],
  languageOwn: ["dusk", "keel", "lamp", "wool", "member"],
  languageAvoid: ["wellness", "journey", "plunge", "elite", "community"],
  constraints: [
    "The mark has to embroider small on a robe.",
    "The dock sign is read wet, and often in the dark.",
    "No drawings of swimmers.",
  ],
};

const references: VisualRef[] = [
  {
    id: "r1",
    title: "Brass ship's lamp",
    kind: "material",
    description: "Soot on the glass, and a small pool of warm light on oak.",
    why: "Warmth here is a point source. The identity should not glow all over.",
  },
  {
    id: "r2",
    title: "Navy wool blanket",
    kind: "material",
    description: "Folded once, with a stitched edge you can see across the room.",
    why: "This is the object members actually touch after the water.",
  },
  {
    id: "r3",
    title: "Wet black timber",
    kind: "material",
    description: "Dock planks, grain raised by water, almost black.",
    why: "The building is a tool that stays wet. Finish should feel used.",
  },
  {
    id: "r4",
    title: "Worn oarlock",
    kind: "object",
    description: "Bronze, polished only where the oar turns.",
    why: "A working part. Not an anchor, not a rope flourish.",
  },
  {
    id: "r5",
    title: "Dusk on a flat lake",
    kind: "place",
    description: "The light already gone from the sky. No postcard sunset.",
    why: "The field is cold and wide. Color has to live in a narrow band.",
  },
  {
    id: "r6",
    title: "Letterpress ticket",
    kind: "type",
    description: "Bone-colored cotton paper, a number, almost no decoration.",
    why: "Membership can be a piece of paper someone keeps in a coat.",
  },
  {
    id: "r7",
    title: "Hand-painted locker number",
    kind: "type",
    description: "A numeral painted slightly off-square on wood.",
    why: "Imperfect and specific. It could only be this building.",
  },
  {
    id: "r8",
    title: "Peat-dark water",
    kind: "color",
    description: "Brown-black water with a single ripple. Not pool blue.",
    why: "Do not illustrate the lake as leisure water.",
  },
  {
    id: "r9",
    title: "Railway enamel sign",
    kind: "type",
    description: "Condensed letters fired into a sign, readable in bad light.",
    why: "The dock sign has a public job. It is not a mood.",
  },
  {
    id: "r10",
    title: "Soot on plaster",
    kind: "color",
    description: "A gray bloom on the wall where a lamp has burned for years.",
    why: "Use is allowed to be the decoration.",
  },
  {
    id: "r11",
    title: "Key on a leather lace",
    kind: "ritual",
    description: "One key, handed over. Not a keycard.",
    why: "Belonging as an object, not a tier.",
  },
  {
    id: "r12",
    title: "Hull ribs",
    kind: "object",
    description: "The same wooden curve, repeated, inside a boat.",
    why: "A system is one part, repeated. The identity should behave that way.",
  },
];

const clusters = [
  {
    id: "t1",
    name: "Lamp in a field",
    thesis: "One warm point against a wide, cold dark.",
    risk: "It slides into cozy hospitality: too much amber, not enough lake.",
    referenceIds: ["r1", "r5", "r8", "r10"],
  },
  {
    id: "t2",
    name: "Working timber",
    thesis: "The club is a boat you use, not a mood you enter.",
    risk: "Nautical costume. Anchors, script, rope borders.",
    referenceIds: ["r3", "r4", "r12"],
  },
  {
    id: "t3",
    name: "What you hold",
    thesis: "Membership is a blanket, a key, a ticket. Things in the hand.",
    risk: "Soft lifestyle styling. Linen, pebbles, a whisper.",
    referenceIds: ["r2", "r6", "r11"],
  },
  {
    id: "t4",
    name: "Painted and fired",
    thesis: "Letters that still read when the dock is wet and dark.",
    risk: "Municipal blandness, or a poster that shouts.",
    referenceIds: ["r7", "r9"],
  },
];

const concepts: Concept[] = [
  {
    id: "lantern",
    name: "Lantern",
    epithet: "A cold field, and one lamp left on.",
    territoryId: "t1",
    narrative:
      "The name is set like something engraved near the door, not printed on a campaign. Navy carries the lake; brass is allowed only as a point, the way the real lamp is a point.",
    palette: [
      { role: "ground", name: "Lamp paper", hex: "#f3ecdf" },
      { role: "ink", name: "Lake night", hex: "#1c2833" },
      { role: "accent", name: "Brass", hex: "#a56b32" },
      { role: "support", name: "Fog", hex: "#8ea0ae" },
      { role: "quiet", name: "Oak", hex: "#e4d3bc" },
    ],
    displayFace: "Fraunces",
    textFace: "Outfit",
    typeNote: "Fraunces at a large optical size for the name. Outfit for anything read in a hurry, in the dark.",
    mark: "seal",
    wordmarkCase: "title",
    voice: ["The lamp is on.", "Swim, then sit.", "Members only, quietly."],
    materials: ["sooted brass", "navy wool", "wet oak"],
    photoDirection: "The boathouse at dusk, one lamp on the table, the lake black-blue through the door.",
    imagePrompt:
      "Interior of a timber boathouse at dusk, one brass oil lamp on a scarred oak table, a folded navy wool blanket, a cold black-blue lake beyond an open door, no people.",
    dos: ["Keep brass to a thin rule or a stitch.", "Let most of the surface stay cold."],
    donts: ["No sunset photography.", "No script under the name."],
  },
  {
    id: "keel",
    name: "Keel",
    epithet: "A working boat, named like gear.",
    territoryId: "t2",
    narrative:
      "The club is treated as equipment. Wide grotesque, a small seam of red, timber almost black. It would be painted on the hull before it would be printed on a tote.",
    palette: [
      { role: "ground", name: "Bone", hex: "#e7e1d6" },
      { role: "ink", name: "Tar", hex: "#161513" },
      { role: "accent", name: "Seam red", hex: "#8e3328" },
      { role: "support", name: "Rope", hex: "#6e675e" },
      { role: "quiet", name: "Ash", hex: "#cfc6b8" },
    ],
    displayFace: "Space Grotesk",
    textFace: "IBM Plex Mono",
    typeNote: "Space Grotesk, always wide and often uppercase on the sign. Mono for numbers, times, and locker marks.",
    mark: "keel",
    wordmarkCase: "upper",
    voice: ["On the water.", "Back by dark.", "Hang your key."],
    materials: ["varnished hull", "brass rivets", "tarred rope"],
    photoDirection: "The hull close up: dark varnish, rivets, pale rope, black water.",
    imagePrompt:
      "Close photograph of a dark varnished wooden boat hull, a row of brass rivets, a coil of pale rope, black water, hard side light, no people.",
    dos: ["Uppercase the sign.", "Use red only at the scale of a stitch or a rivet."],
    donts: ["No crest.", "No wave icon."],
  },
  {
    id: "wool",
    name: "Wool",
    epithet: "Start from the blanket, not the water.",
    territoryId: "t3",
    narrative:
      "The identity begins with the object in the hand after the swim. Type with the patience of a book left on the bench. The risk is softness; the fog blue exists so it does not become a bakery.",
    palette: [
      { role: "ground", name: "Oatmeal", hex: "#f1ebe3" },
      { role: "ink", name: "Peat", hex: "#2c2622" },
      { role: "accent", name: "Fog blue", hex: "#5e7382" },
      { role: "support", name: "Fleece", hex: "#a89888" },
      { role: "quiet", name: "Limestone", hex: "#d9cfc3" },
    ],
    displayFace: "Literata",
    textFace: "Familjen Grotesk",
    typeNote: "Literata for the name, like a line in a logbook. Familjen Grotesk for labels and the timetable.",
    mark: "frame",
    wordmarkCase: "title",
    voice: ["Blanket's on the bench.", "Stay until you're warm.", "One key each."],
    materials: ["oatmeal wool", "limestone", "cotton ticket"],
    photoDirection: "A folded wool blanket on pale stone, fog on the water behind it.",
    imagePrompt:
      "Folded oatmeal wool blanket with a stitched edge on pale limestone beside still foggy lake water, cool daylight, no people.",
    dos: ["Show the stitch.", "Prefer objects in the hand to views of the lake."],
    donts: ["No pebbles.", "No thin script."],
  },
  {
    id: "enamel",
    name: "Enamel",
    epithet: "A sign that still reads in the wet.",
    territoryId: "t4",
    narrative:
      "Public, fired, a little strict. It would survive the dock. It has less to say about the wool and the lamp, which is why it does not lead.",
    palette: [
      { role: "ground", name: "Enamel white", hex: "#f2f0ea" },
      { role: "ink", name: "Station blue", hex: "#10293d" },
      { role: "accent", name: "Signal", hex: "#b23a2f" },
      { role: "support", name: "Steel", hex: "#8b908f" },
      { role: "quiet", name: "Steam", hex: "#d5dde3" },
    ],
    displayFace: "Syne",
    textFace: "Outfit",
    typeNote: "Syne, tightly tracked, as if fired into a sign. Outfit underneath, plain.",
    mark: "stripe",
    wordmarkCase: "upper",
    voice: ["Last boat, dusk.", "Numbers, not slogans.", "The sign is the sign."],
    materials: ["fired enamel", "painted wood", "wet steel"],
    photoDirection: "A fired sign at the end of a dark dock, letters readable, no decoration around them.",
    imagePrompt:
      "A small fired-enamel sign on a dark wet wooden dock at dusk, condensed lettering with no readable words, cold blue air, no people.",
    dos: ["Design for ten meters, in the dark.", "Let the letters be the whole mark."],
    donts: ["No texture for its own sake.", "No gold."],
  },
  {
    id: "crest",
    name: "Crest",
    epithet: "Membership as a badge.",
    territoryId: "t1",
    narrative:
      "Navy and a metal-colored monogram would embroider beautifully, and would be mistaken for a yacht club on sight. The brief asked not to wear a costume.",
    palette: [
      { role: "ground", name: "Ivory", hex: "#f4f1e8" },
      { role: "ink", name: "Dress navy", hex: "#1a2744" },
      { role: "accent", name: "Old gold", hex: "#8a7040" },
      { role: "support", name: "Braid", hex: "#b7a88a" },
      { role: "quiet", name: "Linen", hex: "#e7e0d0" },
    ],
    displayFace: "Cormorant Garamond",
    textFace: "Newsreader",
    typeNote: "High-contrast serif, title case, the monogram larger than the name. It looks founded. That is the problem.",
    mark: "monogram",
    wordmarkCase: "title",
    voice: ["Established manners.", "The crest above the line.", "Formal evenings."],
    materials: ["gilt thread", "navy wool", "ivory paper"],
    photoDirection: "A gold monogram embroidered on navy cloth, formal, slightly airless.",
    imagePrompt:
      "Close photograph of gold thread embroidery on navy wool cloth, formal and still, no readable letters, no people.",
    dos: ["If used at all, keep it off the dock sign."],
    donts: ["Do not add a founding year.", "Do not use script."],
  },
  {
    id: "plunge",
    name: "Plunge",
    epithet: "The category's own voice.",
    territoryId: "t1",
    narrative:
      "Black, a hard grotesk, a wave. This is what cold-water brands already do. It fits a different product: one that sells shock.",
    palette: [
      { role: "ground", name: "Flash", hex: "#efefef" },
      { role: "ink", name: "Black", hex: "#111111" },
      { role: "accent", name: "Signal blue", hex: "#2a62d0" },
      { role: "support", name: "Graphite", hex: "#6e7378" },
      { role: "quiet", name: "Mist", hex: "#d5d5d5" },
    ],
    displayFace: "Space Grotesk",
    textFace: "Outfit",
    typeNote: "Grotesk, tight, uppercase. Blue used as a jolt. Fast, and already familiar.",
    mark: "wave",
    wordmarkCase: "upper",
    voice: ["Get in.", "Cold is the point.", "Again tomorrow."],
    materials: ["rubber", "powder-coated steel", "printed nylon"],
    photoDirection: "Black water cropped hard, a shock of blue, no architecture.",
    imagePrompt:
      "Hard crop of black water with a single electric-blue reflection, graphic and cold, no people, no text.",
    dos: ["Only if the club decides it is a gym."],
    donts: ["No lamp.", "No serif."],
  },
];

const scoreSeed: Omit<ScoreRow, "total">[] = [
  {
    id: "lantern",
    fit: 9,
    distinction: 8,
    system: 9,
    craft: 9,
    memory: 9,
    rationale: "The brief is a cold field and one warm point. This is that sentence, and it still works at the size of a robe label.",
  },
  {
    id: "keel",
    fit: 8,
    distinction: 9,
    system: 8,
    craft: 8,
    memory: 8,
    rationale: "It treats the club as a working boat. The red is small enough to be a stitch, not a campaign.",
  },
  {
    id: "wool",
    fit: 8,
    distinction: 7,
    system: 8,
    craft: 8,
    memory: 7,
    rationale: "It starts from the blanket, which members actually touch. Quieter than the other two, and that quiet is the risk.",
  },
  {
    id: "enamel",
    fit: 7,
    distinction: 7,
    system: 8,
    craft: 6,
    memory: 6,
    rationale: "Right for the wet sign. The lamp and the wool have nowhere to live, so the system is only half a club.",
  },
  {
    id: "crest",
    fit: 6,
    distinction: 3,
    system: 7,
    craft: 7,
    memory: 5,
    rationale: "It would embroider cleanly, and it would be mistaken for a yacht club. The brief asked to refuse costume.",
  },
  {
    id: "plunge",
    fit: 4,
    distinction: 2,
    system: 6,
    craft: 5,
    memory: 4,
    rationale: "This is the ice-bath category speaking. It fits a product that sells shock.",
  },
];

export const sampleBag: Bag = {
  research,
  references,
  clusters,
  concepts,
  scores: scoreSeed.map(withTotal),
};

export const samplePlates: Record<string, PlateState> = {
  lantern: { status: "done", url: "/sample/lantern.jpg" },
  keel: { status: "done", url: "/sample/keel.jpg" },
  wool: { status: "done", url: "/sample/wool.jpg" },
};

export const SAMPLE_STATUS: Record<
  "research" | "references" | "cluster" | "concepts" | "score" | "render",
  Status
> = {
  research: "done",
  references: "done",
  cluster: "done",
  concepts: "done",
  score: "done",
  render: "done",
};

export const EXAMPLES: { id: string; label: string; brief: string; sample: boolean }[] = [
  { id: "vesper", label: "Evening swim club", brief: SAMPLE_BRIEF, sample: true },
  {
    id: "bakery",
    label: "Mill bakery",
    brief:
      "A neighborhood bakery that mills its own grain in the room behind the counter. Bread is sold until it is gone, usually by noon. Warm flour, wood, and a schedule. Not a café brand, not rustic-cute.",
    sample: false,
  },
  {
    id: "ferry",
    label: "Night ferry",
    brief:
      "A night ferry between two small islands. One boat, a short crew, a timetable printed on cheap paper that people keep in coat pockets. Practical, slightly romantic, never a luxury brand.",
    sample: false,
  },
  {
    id: "journal",
    label: "Field journal",
    brief:
      "A field journal for amateur naturalists, from a small press. Thick paper, a pencil loop, species notes rather than inspiration quotes. Serious about looking, uninterested in lifestyle.",
    sample: false,
  },
];
