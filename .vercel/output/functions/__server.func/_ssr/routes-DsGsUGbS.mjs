import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as object, n as array, o as string, t as _enum } from "../_libs/zod.mjs";
import { _ as swatch, c as boardMark, g as selectBoards, h as readablePair, l as fontFamily, o as STAGES, t as CRITERIA, u as initials, v as withTotal, y as wordmark } from "./model-CHkCkSxm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DsGsUGbS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function IdentityMark({ kind, letters, className }) {
	const props = {
		viewBox: "0 0 72 72",
		className,
		fill: "none",
		"aria-hidden": true
	};
	const stroke = {
		stroke: "currentColor",
		strokeWidth: 1.5,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	};
	if (kind === "seal") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "36",
				cy: "36",
				r: "22",
				...stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "36",
				cy: "36",
				r: "17.5",
				stroke: "currentColor",
				strokeWidth: "0.75"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "36",
				y: "42",
				textAnchor: "middle",
				fontSize: "18",
				fontFamily: "Fraunces, Georgia, serif",
				fill: "currentColor",
				children: letters.one
			})
		]
	});
	if (kind === "monogram") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: "26",
			y: "46",
			textAnchor: "middle",
			fontSize: "28",
			fontFamily: "Fraunces, Georgia, serif",
			fill: "currentColor",
			children: letters.two[0]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: "46",
			y: "50",
			textAnchor: "middle",
			fontSize: "28",
			fontFamily: "Fraunces, Georgia, serif",
			fill: "currentColor",
			opacity: "0.45",
			children: letters.two[1]
		})]
	});
	if (kind === "stripe") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 26 H56",
				...stroke,
				strokeWidth: "2.25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 36 H46",
				...stroke,
				strokeWidth: "2.25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 46 H56",
				...stroke,
				strokeWidth: "2.25"
			})
		]
	});
	if (kind === "arc") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 46 A20 20 0 0 1 56 46",
				...stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "36",
				cy: "46",
				r: "2",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M36 18 V28",
				...stroke
			})
		]
	});
	if (kind === "frame") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M18 16 H54 V42 L42 54 H18 Z",
			...stroke
		})
	});
	if (kind === "wave") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M10 30 C22 18, 28 42, 40 30 S58 18, 64 30",
			...stroke
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M10 44 C22 32, 28 56, 40 44 S58 32, 64 44",
			...stroke
		})]
	});
	if (kind === "diamond") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "24",
			y: "24",
			width: "24",
			height: "24",
			transform: "rotate(45 36 36)",
			...stroke
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M14 46 L36 18 L58 46",
				...stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M22 46 L36 30 L50 46",
				...stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 52 H56",
				...stroke
			})
		]
	});
}
function Moodboard({ concept, territory, clientName, rank, score, plate }) {
	const ground = swatch(concept, "ground");
	const ink = swatch(concept, "ink");
	const accent = swatch(concept, "accent");
	const quiet = swatch(concept, "quiet");
	const pair = readablePair(ground.hex, ink.hex);
	const name = wordmark(clientName, concept.wordmarkCase);
	const letters = initials(clientName);
	const rule = "color-mix(in srgb, currentColor 16%, transparent)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		id: `board-${concept.id}`,
		className: "overflow-hidden rounded-lg shadow-border",
		style: {
			background: pair.ground,
			color: pair.ink
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-start justify-between gap-4 px-5 pt-5 sm:px-6",
				style: { borderColor: rule },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-xs uppercase tracking-widest opacity-70",
						children: [
							String(rank).padStart(2, "0"),
							" · ",
							concept.name,
							territory ? ` · ${territory.name}` : ""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl leading-none break-words sm:text-6xl",
						style: {
							fontFamily: fontFamily(concept.displayFace),
							letterSpacing: concept.wordmarkCase === "upper" ? "0.04em" : "-0.03em"
						},
						children: name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-base leading-relaxed",
						style: { fontFamily: fontFamily(concept.textFace) },
						children: concept.epithet
					})
				] }), score ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "shrink-0 font-mono text-sm tabular-nums",
					children: [score.total, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "opacity-60",
						children: "/50"
					})]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-5 px-5 sm:px-6 md:grid-cols-[1.15fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
					concept,
					plate,
					quiet: quiet.hex
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-2 text-xs leading-relaxed opacity-75",
					children: concept.photoDirection
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-widest opacity-70",
							children: "Palette"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 grid grid-cols-5 gap-2",
							children: concept.palette.map((color) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-12",
									style: {
										background: color.hex,
										boxShadow: "inset 0 0 0 1px rgba(26,23,20,0.12)"
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs leading-tight",
									children: color.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs tabular-nums opacity-70",
									children: color.hex
								})
							] }, color.role))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs uppercase tracking-widest opacity-70",
								children: "Type"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-3xl leading-none",
								style: { fontFamily: fontFamily(concept.displayFace) },
								children: concept.displayFace
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed",
								style: { fontFamily: fontFamily(concept.textFace) },
								children: concept.typeNote
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-widest opacity-70",
							children: "Materials"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 flex flex-wrap gap-2",
							children: concept.materials.map((material) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border px-2 py-1 text-xs",
								style: { borderColor: rule },
								children: material
							}, material))
						})] })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-5 border-t px-5 py-5 sm:px-6 md:grid-cols-3",
				style: { borderColor: rule },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdentityMark, {
							kind: concept.mark,
							letters,
							className: "size-16 shrink-0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-xs uppercase tracking-widest opacity-70",
							children: ["Mark · ", concept.mark]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							children: concept.narrative
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-widest opacity-70",
						children: "Voice"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 space-y-1 text-sm",
						children: concept.voice.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"“",
							line,
							"”"
						] }, line))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-widest opacity-70",
							children: "Do"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-2",
							children: concept.dos.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, line))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-widest opacity-70",
							children: "Don’t"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-2",
							children: concept.donts.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, line))
						})] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 p-3 sm:grid-cols-3",
				style: { background: "color-mix(in srgb, currentColor 7%, transparent)" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sign, {
						name,
						face: concept.displayFace,
						ground: pair.ground,
						ink: pair.ink,
						accent: accent.hex
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticket, {
						name,
						face: concept.displayFace,
						ground: pair.ground,
						ink: pair.ink,
						accent: accent.hex
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						letters: letters.two,
						face: concept.textFace,
						ground: quiet.hex,
						ink: pair.ink
					})
				]
			})
		]
	});
}
function Plate({ concept, plate, quiet }) {
	if (plate?.status === "done" && plate.url) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "plate-frame overflow-hidden",
		style: { boxShadow: "inset 0 0 0 1px rgba(26,23,20,0.12)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: plate.url,
			alt: concept.photoDirection,
			className: "h-full w-full object-cover",
			decoding: "async"
		})
	});
	const label = plate?.status === "running" ? "Exposing the plate…" : plate?.status === "error" ? plate.error || "The plate didn't return." : "No plate yet.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "plate-frame flex items-end p-4",
		style: {
			background: quiet,
			color: readablePair(quiet, "#1a1714").ink
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "max-w-sm text-sm leading-relaxed",
			children: label
		})
	});
}
function Sign({ name, face, ground, ink, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-36 flex-col justify-between p-4",
		style: {
			background: ground,
			color: ink
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-widest opacity-70",
				children: "Sign"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-2xl leading-none",
				style: { fontFamily: fontFamily(face) },
				children: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-px w-10",
				style: { background: accent }
			})
		]
	});
}
function Ticket({ name, face, ground, ink, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-36 flex-col justify-between border border-dashed p-4",
		style: {
			background: ink,
			color: ground,
			borderColor: accent
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between font-mono text-xs uppercase tracking-widest",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ticket" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums",
					children: "04"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xl leading-none",
				style: { fontFamily: fontFamily(face) },
				children: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs opacity-80",
				children: "Member"
			})
		]
	});
}
function Label({ letters, face, ground, ink }) {
	const pair = readablePair(ground, ink);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-36 flex-col items-start justify-between p-4",
		style: {
			background: pair.ground,
			color: pair.ink
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-widest opacity-70",
				children: "Label"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-3xl leading-none",
				style: { fontFamily: fontFamily(face) },
				children: letters
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs",
				children: "Woven, small."
			})
		]
	});
}
function Sheet({ kicker, title, lede, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-xs uppercase tracking-widest text-muted",
			children: kicker
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl leading-tight",
			children: title
		}),
		lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-2xl text-base leading-relaxed text-muted",
			children: lede
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			children
		})
	] });
}
function Waiting({ text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: text
	});
}
function MethodView() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		kicker: "Method",
		title: "The sequence",
		lede: "A visual identity is a decision you can defend. This studio runs that decision in the open, and only then draws the three directions worth looking at.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "max-w-3xl space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
						n: "01",
						title: "Research",
						body: "Names the job. Who it is for, what the category already looks like, which words are tired."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
						n: "02",
						title: "References",
						body: "Stays wide. Materials, objects, places, type, rituals. Not logos, and not a mood adjective."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-mono text-xs uppercase tracking-widest text-clay-ink",
					children: "These two start together. Neither waits."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
					n: "03",
					title: "Cluster",
					body: "References are sorted into territories. A territory is a tension you can say in one sentence. “Minimal” is not a territory. “A warm lamp in a cold field” is. Every reference lands in one."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
					n: "04",
					title: "Concepts",
					body: "Six directions. Each belongs to a territory, and they have to disagree in type, palette, and mark. Variations of one idea do not count."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
					n: "05",
					title: "Score",
					body: "Five marks, each out of ten, equal weight. Fit, distinction, system, craft, memory. A pretty direction that looks like the category loses on distinction, and the loss stays visible."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					children: CRITERIA.map((criterion) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-line px-3 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-sm",
							children: criterion.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-sm text-muted",
							children: criterion.hint
						})]
					}, criterion.key))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
					n: "06",
					title: "Render",
					body: "Only three are drawn: the highest scores, spread across different territories, so one idea cannot take every board. Each board is a wordmark, a mark, a palette, type, materials, voice, three applications, and one photographic plate. The rest stay in the table."
				}) })
			]
		})
	});
}
function Step({ n, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-line bg-paper px-4 py-4 shadow-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs text-muted",
				children: n
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-2xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: body
			})
		]
	});
}
function ParallelView({ bag, status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		kicker: "01 + 02",
		title: "Research and references",
		lede: "These two start at the same moment. Research without references becomes strategy-speak. References without research become a pile.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lane, {
				title: "Research",
				status: status.research,
				running: "Reading the category…",
				children: bag.research ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResearchBody, {
					research: bag.research,
					compact: true
				}) : null
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lane, {
				title: "References",
				status: status.references,
				running: "Gathering references…",
				children: bag.references ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceList, {
					references: bag.references,
					columns: 1
				}) : null
			})]
		})
	});
}
function Lane({ title, status, running, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0 border border-line p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusWord, { status })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: children || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waiting, { text: status === "running" ? running : "Waiting on this lane." })
		})]
	});
}
function StatusWord({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "font-mono text-xs uppercase tracking-widest text-muted",
		children: status === "running" ? "Running" : status === "done" ? "In" : status === "error" ? "Stopped" : "Waiting"
	});
}
function ResearchView({ bag, status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		kicker: "01",
		title: "Research",
		lede: "The cultural job, before anyone picks a color.",
		children: bag.research ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResearchBody, { research: bag.research }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waiting, { text: status === "running" ? "Reading the category…" : "Research has not run." })
	});
}
function ResearchBody({ research, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-widest text-muted",
					children: research.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-2 font-display leading-snug ${compact ? "text-2xl" : "text-3xl"}`,
					children: research.reading
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-muted",
					children: [
						research.nameStatus === "proposed" ? "Working name, proposed" : "Name in the brief",
						": ",
						research.workingName
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Who",
						body: research.audience.who
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Desire",
						body: research.audience.desire
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Tension",
						body: research.audience.tension
					})
				]
			}),
			!compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Cultural codes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 divide-y divide-line border-y border-line",
					children: research.culturalCodes.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-1 py-3 sm:grid-cols-[12rem_1fr] sm:gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg",
							children: code.code
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm leading-relaxed text-muted",
							children: code.meaning
						})]
					}, code.code))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "What the category already does"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-3",
					children: research.categoryHabits.map((habit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border border-line px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: habit.habit
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: habit.looksLike
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm",
								children: habit.opening
							})
						]
					}, habit.habit))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordList, {
						label: "Can say",
						words: research.languageOwn
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordList, {
						label: "Already tired",
						words: research.languageAvoid
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Constraints"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 list-disc space-y-1 pl-5 text-sm",
					children: research.constraints.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
				})] })
			] }) : null
		]
	});
}
function Fact({ label, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-line px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-xs uppercase tracking-widest text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed",
			children: body
		})]
	});
}
function WordList({ label, words }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "font-display text-2xl",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-3 flex flex-wrap gap-2",
		children: words.map((word) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "border border-line px-2 py-1 text-sm",
			children: word
		}, word))
	})] });
}
function ReferencesView({ bag, status }) {
	const clustered = bag.clusters && bag.references;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		kicker: "02",
		title: "References",
		lede: "Broad on purpose. Pointable things, not a style word.",
		children: !bag.references ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waiting, { text: status === "running" ? "Gathering references…" : "References have not been gathered." }) : clustered ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-8",
			children: bag.clusters.map((cluster) => {
				const items = bag.references.filter((item) => cluster.referenceIds.includes(item.id));
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: cluster.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceList, { references: items })
				})] }, cluster.id);
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceList, { references: bag.references })
	});
}
function ReferenceList({ references, columns = 2 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: columns === 2 ? "grid gap-3 sm:grid-cols-2" : "grid gap-3",
		children: references.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "border border-line px-3 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs uppercase tracking-widest text-muted",
					children: [
						item.id,
						" · ",
						item.kind
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-display text-xl",
					children: item.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed",
					children: item.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: item.why
				})
			]
		}, item.id))
	});
}
function ClustersView({ bag, status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		kicker: "03",
		title: "Territories",
		lede: "A cluster is a tension. If it can only be said as a style adjective, it is not ready.",
		children: !bag.clusters || !bag.references ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waiting, { text: status === "running" ? "Sorting territories…" : "Nothing has been clustered yet." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-4 lg:grid-cols-2",
			children: bag.clusters.map((cluster) => {
				const items = bag.references.filter((item) => cluster.referenceIds.includes(item.id));
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border border-line px-4 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-muted",
							children: cluster.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-3xl",
							children: cluster.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-base leading-relaxed",
							children: cluster.thesis
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm text-muted",
							children: ["Risk — ", cluster.risk]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 flex flex-wrap gap-2",
							children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "bg-ink/5 px-2 py-1 text-xs",
								children: item.title
							}, item.id))
						})
					]
				}, cluster.id);
			})
		})
	});
}
function ConceptsView({ bag, status }) {
	const client = bag.research?.workingName ?? "Name";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		kicker: "04",
		title: "Six directions",
		lede: "Candidates, before the score. They are supposed to disagree.",
		children: !bag.concepts ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waiting, { text: status === "running" ? "Writing six directions…" : "No directions yet." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			children: bag.concepts.map((concept) => {
				const territory = bag.clusters?.find((cluster) => cluster.id === concept.territoryId);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-4 border border-line p-4 sm:grid-cols-[auto_1fr_auto]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdentityMark, {
							kind: concept.mark,
							letters: initials(client),
							className: "size-14 text-ink"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-xs uppercase tracking-widest text-muted",
									children: [
										concept.id,
										" · ",
										territory?.name ?? concept.territoryId
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-1 font-display text-2xl",
									style: { fontFamily: fontFamily(concept.displayFace) },
									children: concept.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm leading-relaxed",
									children: concept.epithet
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-xs text-muted",
									children: [
										concept.displayFace,
										" / ",
										concept.textFace
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex h-8 w-full sm:w-36",
							children: concept.palette.map((color) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "h-full flex-1",
								style: { background: color.hex }
							}, color.role))
						})
					]
				}, concept.id);
			})
		})
	});
}
var MARK_COPY = {
	Board: "Drawn as a board.",
	Held: "Held. A higher score already took this territory.",
	Lower: "Lower than the three that were drawn."
};
function ScoresView({ bag, status }) {
	if (!bag.concepts || !bag.scores) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		kicker: "05",
		title: "Scores",
		lede: "Equal weight. The rationale has to survive a critique.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waiting, { text: status === "running" ? "Scoring against the brief…" : "Nothing has been scored." })
	});
	const { ranked, picked, scoreOf } = selectBoards(bag.concepts, bag.scores);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		kicker: "05",
		title: "Scores",
		lede: "Boards are the highest scores spread across territories, so three variations of one idea cannot crowd the table.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hidden md:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full border-collapse text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-line text-xs uppercase tracking-widest text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-3 font-medium",
							children: "Direction"
						}),
						CRITERIA.map((criterion) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-2 py-2 text-right font-medium",
							children: criterion.label
						}, criterion.key)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-2 py-2 text-right font-medium",
							children: "Total"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pl-3 font-medium",
							children: "Board"
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: ranked.map((concept) => {
					const score = scoreOf.get(concept.id);
					const mark = boardMark(concept, picked);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-line align-top",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "py-3 pr-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: concept.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 max-w-sm text-xs leading-relaxed text-muted",
									children: score.rationale
								})]
							}),
							CRITERIA.map((criterion) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-2 py-3 text-right font-mono tabular-nums",
								children: score[criterion.key]
							}, criterion.key)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-2 py-3 text-right font-mono tabular-nums",
								children: score.total
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "py-3 pl-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: mark }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: MARK_COPY[mark]
								})]
							})
						]
					}, concept.id);
				}) })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3 md:hidden",
			children: ranked.map((concept) => {
				const score = scoreOf.get(concept.id);
				const mark = boardMark(concept, picked);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border border-line p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl",
								children: concept.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-sm tabular-nums",
								children: [score.total, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: "/50"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs uppercase tracking-widest text-muted",
							children: mark
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							children: score.rationale
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-3 grid grid-cols-5 gap-2",
							children: CRITERIA.map((criterion) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs text-muted",
									children: criterion.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-mono text-sm tabular-nums",
									children: score[criterion.key]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 h-1 bg-ink/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full bg-ink",
										style: { width: `${score[criterion.key] * 10}%` }
									})
								})
							] }, criterion.key))
						})
					]
				}, concept.id);
			})
		})]
	});
}
function BoardsView({ bag, plates, status, sample }) {
	if (!bag.concepts || !bag.scores || !bag.research) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		kicker: "06",
		title: "Three boards",
		lede: "Rendered only after the score, and only three of them.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waiting, { text: status === "running" ? "Rendering three boards…" : "No boards yet." })
	});
	const { ranked, picked } = selectBoards(bag.concepts, bag.scores);
	const spread = new Set(picked.map((concept) => concept.territoryId)).size;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		kicker: "06",
		title: "Three boards",
		lede: sample ? `A finished sequence for ${bag.research.workingName}. Write a brief and run it to start another.` : spread >= 3 ? `Three directions for ${bag.research.workingName}. Same brief, different territories.` : `The field converged. These are still the strongest directions for ${bag.research.workingName}.`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "mb-6 flex flex-wrap gap-2",
			children: picked.map((concept, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: `#board-${concept.id}`,
				className: "inline-flex min-h-11 items-center border border-line px-3 text-sm hover:bg-ink/5",
				children: [
					String(index + 1).padStart(2, "0"),
					" ",
					concept.name
				]
			}, concept.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-8",
			children: picked.map((concept) => {
				const rank = ranked.findIndex((item) => item.id === concept.id) + 1;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moodboard, {
					concept,
					territory: bag.clusters?.find((cluster) => cluster.id === concept.territoryId),
					clientName: bag.research.workingName,
					rank,
					score: bag.scores.find((score) => score.id === concept.id),
					plate: plates[concept.id]
				}, concept.id);
			})
		})]
	});
}
var SAMPLE_BRIEF = "An evening swimming club on a cold northern lake. Members swim at dusk, then sit in a timber boathouse with wool blankets and a single brass lamp. Quiet, physical, a little ceremonial. Not a spa, not a gym.";
var SAMPLE_JOB = "F–014";
var sampleBag = {
	research: {
		workingName: "Vesper Dock",
		nameStatus: "given",
		reading: "The club is a ritual for cold water, not a wellness product. The identity has to make a timber dock, a hard swim, and the lamp afterward feel like one place — and refuse both the gym and the spa.",
		category: "Cold-water swimming club",
		audience: {
			who: "Adults who swim outside after work, often in pairs, in a climate that is already dark by five.",
			desire: "A place that takes the swim seriously without turning it into a performance.",
			tension: "They want belonging, and they distrust any mark that looks like it is selling belonging."
		},
		culturalCodes: [
			{
				code: "A single lamp",
				meaning: "Warmth is a point, not a wash of amber across everything."
			},
			{
				code: "Cold water",
				meaning: "Clarity, not punishment. The lake is not a challenge brand."
			},
			{
				code: "Wool afterward",
				meaning: "The swim is only half the ritual. The blanket is the other half."
			},
			{
				code: "A painted number",
				meaning: "The place is used. Wear is allowed to show."
			}
		],
		categoryHabits: [
			{
				habit: "Ice-bath brands",
				looksLike: "Black fields, electric blue, a grotesk that shouts.",
				opening: "They sell shock. This club sells the hour after the water."
			},
			{
				habit: "Nordic spa",
				looksLike: "Oatmeal linen, pebbles, a logo that whispers.",
				opening: "It looks like a resort. The dock is a working room."
			},
			{
				habit: "Yacht clubs",
				looksLike: "Navy, a gold crest, script.",
				opening: "Membership as costume. Here it is a key and a blanket."
			}
		],
		languageOwn: [
			"dusk",
			"keel",
			"lamp",
			"wool",
			"member"
		],
		languageAvoid: [
			"wellness",
			"journey",
			"plunge",
			"elite",
			"community"
		],
		constraints: [
			"The mark has to embroider small on a robe.",
			"The dock sign is read wet, and often in the dark.",
			"No drawings of swimmers."
		]
	},
	references: [
		{
			id: "r1",
			title: "Brass ship's lamp",
			kind: "material",
			description: "Soot on the glass, and a small pool of warm light on oak.",
			why: "Warmth here is a point source. The identity should not glow all over."
		},
		{
			id: "r2",
			title: "Navy wool blanket",
			kind: "material",
			description: "Folded once, with a stitched edge you can see across the room.",
			why: "This is the object members actually touch after the water."
		},
		{
			id: "r3",
			title: "Wet black timber",
			kind: "material",
			description: "Dock planks, grain raised by water, almost black.",
			why: "The building is a tool that stays wet. Finish should feel used."
		},
		{
			id: "r4",
			title: "Worn oarlock",
			kind: "object",
			description: "Bronze, polished only where the oar turns.",
			why: "A working part. Not an anchor, not a rope flourish."
		},
		{
			id: "r5",
			title: "Dusk on a flat lake",
			kind: "place",
			description: "The light already gone from the sky. No postcard sunset.",
			why: "The field is cold and wide. Color has to live in a narrow band."
		},
		{
			id: "r6",
			title: "Letterpress ticket",
			kind: "type",
			description: "Bone-colored cotton paper, a number, almost no decoration.",
			why: "Membership can be a piece of paper someone keeps in a coat."
		},
		{
			id: "r7",
			title: "Hand-painted locker number",
			kind: "type",
			description: "A numeral painted slightly off-square on wood.",
			why: "Imperfect and specific. It could only be this building."
		},
		{
			id: "r8",
			title: "Peat-dark water",
			kind: "color",
			description: "Brown-black water with a single ripple. Not pool blue.",
			why: "Do not illustrate the lake as leisure water."
		},
		{
			id: "r9",
			title: "Railway enamel sign",
			kind: "type",
			description: "Condensed letters fired into a sign, readable in bad light.",
			why: "The dock sign has a public job. It is not a mood."
		},
		{
			id: "r10",
			title: "Soot on plaster",
			kind: "color",
			description: "A gray bloom on the wall where a lamp has burned for years.",
			why: "Use is allowed to be the decoration."
		},
		{
			id: "r11",
			title: "Key on a leather lace",
			kind: "ritual",
			description: "One key, handed over. Not a keycard.",
			why: "Belonging as an object, not a tier."
		},
		{
			id: "r12",
			title: "Hull ribs",
			kind: "object",
			description: "The same wooden curve, repeated, inside a boat.",
			why: "A system is one part, repeated. The identity should behave that way."
		}
	],
	clusters: [
		{
			id: "t1",
			name: "Lamp in a field",
			thesis: "One warm point against a wide, cold dark.",
			risk: "It slides into cozy hospitality: too much amber, not enough lake.",
			referenceIds: [
				"r1",
				"r5",
				"r8",
				"r10"
			]
		},
		{
			id: "t2",
			name: "Working timber",
			thesis: "The club is a boat you use, not a mood you enter.",
			risk: "Nautical costume. Anchors, script, rope borders.",
			referenceIds: [
				"r3",
				"r4",
				"r12"
			]
		},
		{
			id: "t3",
			name: "What you hold",
			thesis: "Membership is a blanket, a key, a ticket. Things in the hand.",
			risk: "Soft lifestyle styling. Linen, pebbles, a whisper.",
			referenceIds: [
				"r2",
				"r6",
				"r11"
			]
		},
		{
			id: "t4",
			name: "Painted and fired",
			thesis: "Letters that still read when the dock is wet and dark.",
			risk: "Municipal blandness, or a poster that shouts.",
			referenceIds: ["r7", "r9"]
		}
	],
	concepts: [
		{
			id: "lantern",
			name: "Lantern",
			epithet: "A cold field, and one lamp left on.",
			territoryId: "t1",
			narrative: "The name is set like something engraved near the door, not printed on a campaign. Navy carries the lake; brass is allowed only as a point, the way the real lamp is a point.",
			palette: [
				{
					role: "ground",
					name: "Lamp paper",
					hex: "#f3ecdf"
				},
				{
					role: "ink",
					name: "Lake night",
					hex: "#1c2833"
				},
				{
					role: "accent",
					name: "Brass",
					hex: "#a56b32"
				},
				{
					role: "support",
					name: "Fog",
					hex: "#8ea0ae"
				},
				{
					role: "quiet",
					name: "Oak",
					hex: "#e4d3bc"
				}
			],
			displayFace: "Fraunces",
			textFace: "Outfit",
			typeNote: "Fraunces at a large optical size for the name. Outfit for anything read in a hurry, in the dark.",
			mark: "seal",
			wordmarkCase: "title",
			voice: [
				"The lamp is on.",
				"Swim, then sit.",
				"Members only, quietly."
			],
			materials: [
				"sooted brass",
				"navy wool",
				"wet oak"
			],
			photoDirection: "The boathouse at dusk, one lamp on the table, the lake black-blue through the door.",
			imagePrompt: "Interior of a timber boathouse at dusk, one brass oil lamp on a scarred oak table, a folded navy wool blanket, a cold black-blue lake beyond an open door, no people.",
			dos: ["Keep brass to a thin rule or a stitch.", "Let most of the surface stay cold."],
			donts: ["No sunset photography.", "No script under the name."]
		},
		{
			id: "keel",
			name: "Keel",
			epithet: "A working boat, named like gear.",
			territoryId: "t2",
			narrative: "The club is treated as equipment. Wide grotesque, a small seam of red, timber almost black. It would be painted on the hull before it would be printed on a tote.",
			palette: [
				{
					role: "ground",
					name: "Bone",
					hex: "#e7e1d6"
				},
				{
					role: "ink",
					name: "Tar",
					hex: "#161513"
				},
				{
					role: "accent",
					name: "Seam red",
					hex: "#8e3328"
				},
				{
					role: "support",
					name: "Rope",
					hex: "#6e675e"
				},
				{
					role: "quiet",
					name: "Ash",
					hex: "#cfc6b8"
				}
			],
			displayFace: "Space Grotesk",
			textFace: "IBM Plex Mono",
			typeNote: "Space Grotesk, always wide and often uppercase on the sign. Mono for numbers, times, and locker marks.",
			mark: "keel",
			wordmarkCase: "upper",
			voice: [
				"On the water.",
				"Back by dark.",
				"Hang your key."
			],
			materials: [
				"varnished hull",
				"brass rivets",
				"tarred rope"
			],
			photoDirection: "The hull close up: dark varnish, rivets, pale rope, black water.",
			imagePrompt: "Close photograph of a dark varnished wooden boat hull, a row of brass rivets, a coil of pale rope, black water, hard side light, no people.",
			dos: ["Uppercase the sign.", "Use red only at the scale of a stitch or a rivet."],
			donts: ["No crest.", "No wave icon."]
		},
		{
			id: "wool",
			name: "Wool",
			epithet: "Start from the blanket, not the water.",
			territoryId: "t3",
			narrative: "The identity begins with the object in the hand after the swim. Type with the patience of a book left on the bench. The risk is softness; the fog blue exists so it does not become a bakery.",
			palette: [
				{
					role: "ground",
					name: "Oatmeal",
					hex: "#f1ebe3"
				},
				{
					role: "ink",
					name: "Peat",
					hex: "#2c2622"
				},
				{
					role: "accent",
					name: "Fog blue",
					hex: "#5e7382"
				},
				{
					role: "support",
					name: "Fleece",
					hex: "#a89888"
				},
				{
					role: "quiet",
					name: "Limestone",
					hex: "#d9cfc3"
				}
			],
			displayFace: "Literata",
			textFace: "Familjen Grotesk",
			typeNote: "Literata for the name, like a line in a logbook. Familjen Grotesk for labels and the timetable.",
			mark: "frame",
			wordmarkCase: "title",
			voice: [
				"Blanket's on the bench.",
				"Stay until you're warm.",
				"One key each."
			],
			materials: [
				"oatmeal wool",
				"limestone",
				"cotton ticket"
			],
			photoDirection: "A folded wool blanket on pale stone, fog on the water behind it.",
			imagePrompt: "Folded oatmeal wool blanket with a stitched edge on pale limestone beside still foggy lake water, cool daylight, no people.",
			dos: ["Show the stitch.", "Prefer objects in the hand to views of the lake."],
			donts: ["No pebbles.", "No thin script."]
		},
		{
			id: "enamel",
			name: "Enamel",
			epithet: "A sign that still reads in the wet.",
			territoryId: "t4",
			narrative: "Public, fired, a little strict. It would survive the dock. It has less to say about the wool and the lamp, which is why it does not lead.",
			palette: [
				{
					role: "ground",
					name: "Enamel white",
					hex: "#f2f0ea"
				},
				{
					role: "ink",
					name: "Station blue",
					hex: "#10293d"
				},
				{
					role: "accent",
					name: "Signal",
					hex: "#b23a2f"
				},
				{
					role: "support",
					name: "Steel",
					hex: "#8b908f"
				},
				{
					role: "quiet",
					name: "Steam",
					hex: "#d5dde3"
				}
			],
			displayFace: "Syne",
			textFace: "Outfit",
			typeNote: "Syne, tightly tracked, as if fired into a sign. Outfit underneath, plain.",
			mark: "stripe",
			wordmarkCase: "upper",
			voice: [
				"Last boat, dusk.",
				"Numbers, not slogans.",
				"The sign is the sign."
			],
			materials: [
				"fired enamel",
				"painted wood",
				"wet steel"
			],
			photoDirection: "A fired sign at the end of a dark dock, letters readable, no decoration around them.",
			imagePrompt: "A small fired-enamel sign on a dark wet wooden dock at dusk, condensed lettering with no readable words, cold blue air, no people.",
			dos: ["Design for ten meters, in the dark.", "Let the letters be the whole mark."],
			donts: ["No texture for its own sake.", "No gold."]
		},
		{
			id: "crest",
			name: "Crest",
			epithet: "Membership as a badge.",
			territoryId: "t1",
			narrative: "Navy and a metal-colored monogram would embroider beautifully, and would be mistaken for a yacht club on sight. The brief asked not to wear a costume.",
			palette: [
				{
					role: "ground",
					name: "Ivory",
					hex: "#f4f1e8"
				},
				{
					role: "ink",
					name: "Dress navy",
					hex: "#1a2744"
				},
				{
					role: "accent",
					name: "Old gold",
					hex: "#8a7040"
				},
				{
					role: "support",
					name: "Braid",
					hex: "#b7a88a"
				},
				{
					role: "quiet",
					name: "Linen",
					hex: "#e7e0d0"
				}
			],
			displayFace: "Cormorant Garamond",
			textFace: "Newsreader",
			typeNote: "High-contrast serif, title case, the monogram larger than the name. It looks founded. That is the problem.",
			mark: "monogram",
			wordmarkCase: "title",
			voice: [
				"Established manners.",
				"The crest above the line.",
				"Formal evenings."
			],
			materials: [
				"gilt thread",
				"navy wool",
				"ivory paper"
			],
			photoDirection: "A gold monogram embroidered on navy cloth, formal, slightly airless.",
			imagePrompt: "Close photograph of gold thread embroidery on navy wool cloth, formal and still, no readable letters, no people.",
			dos: ["If used at all, keep it off the dock sign."],
			donts: ["Do not add a founding year.", "Do not use script."]
		},
		{
			id: "plunge",
			name: "Plunge",
			epithet: "The category's own voice.",
			territoryId: "t1",
			narrative: "Black, a hard grotesk, a wave. This is what cold-water brands already do. It fits a different product: one that sells shock.",
			palette: [
				{
					role: "ground",
					name: "Flash",
					hex: "#efefef"
				},
				{
					role: "ink",
					name: "Black",
					hex: "#111111"
				},
				{
					role: "accent",
					name: "Signal blue",
					hex: "#2a62d0"
				},
				{
					role: "support",
					name: "Graphite",
					hex: "#6e7378"
				},
				{
					role: "quiet",
					name: "Mist",
					hex: "#d5d5d5"
				}
			],
			displayFace: "Space Grotesk",
			textFace: "Outfit",
			typeNote: "Grotesk, tight, uppercase. Blue used as a jolt. Fast, and already familiar.",
			mark: "wave",
			wordmarkCase: "upper",
			voice: [
				"Get in.",
				"Cold is the point.",
				"Again tomorrow."
			],
			materials: [
				"rubber",
				"powder-coated steel",
				"printed nylon"
			],
			photoDirection: "Black water cropped hard, a shock of blue, no architecture.",
			imagePrompt: "Hard crop of black water with a single electric-blue reflection, graphic and cold, no people, no text.",
			dos: ["Only if the club decides it is a gym."],
			donts: ["No lamp.", "No serif."]
		}
	],
	scores: [
		{
			id: "lantern",
			fit: 9,
			distinction: 8,
			system: 9,
			craft: 9,
			memory: 9,
			rationale: "The brief is a cold field and one warm point. This is that sentence, and it still works at the size of a robe label."
		},
		{
			id: "keel",
			fit: 8,
			distinction: 9,
			system: 8,
			craft: 8,
			memory: 8,
			rationale: "It treats the club as a working boat. The red is small enough to be a stitch, not a campaign."
		},
		{
			id: "wool",
			fit: 8,
			distinction: 7,
			system: 8,
			craft: 8,
			memory: 7,
			rationale: "It starts from the blanket, which members actually touch. Quieter than the other two, and that quiet is the risk."
		},
		{
			id: "enamel",
			fit: 7,
			distinction: 7,
			system: 8,
			craft: 6,
			memory: 6,
			rationale: "Right for the wet sign. The lamp and the wool have nowhere to live, so the system is only half a club."
		},
		{
			id: "crest",
			fit: 6,
			distinction: 3,
			system: 7,
			craft: 7,
			memory: 5,
			rationale: "It would embroider cleanly, and it would be mistaken for a yacht club. The brief asked to refuse costume."
		},
		{
			id: "plunge",
			fit: 4,
			distinction: 2,
			system: 6,
			craft: 5,
			memory: 4,
			rationale: "This is the ice-bath category speaking. It fits a product that sells shock."
		}
	].map(withTotal)
};
var samplePlates = {
	lantern: {
		status: "done",
		url: "/sample/lantern.jpg"
	},
	keel: {
		status: "done",
		url: "/sample/keel.jpg"
	},
	wool: {
		status: "done",
		url: "/sample/wool.jpg"
	}
};
var SAMPLE_STATUS = {
	research: "done",
	references: "done",
	cluster: "done",
	concepts: "done",
	score: "done",
	render: "done"
};
var EXAMPLES = [
	{
		id: "vesper",
		label: "Evening swim club",
		brief: SAMPLE_BRIEF,
		sample: true
	},
	{
		id: "bakery",
		label: "Mill bakery",
		brief: "A neighborhood bakery that mills its own grain in the room behind the counter. Bread is sold until it is gone, usually by noon. Warm flour, wood, and a schedule. Not a café brand, not rustic-cute.",
		sample: false
	},
	{
		id: "ferry",
		label: "Night ferry",
		brief: "A night ferry between two small islands. One boat, a short crew, a timetable printed on cheap paper that people keep in coat pockets. Practical, slightly romantic, never a luxury brand.",
		sample: false
	},
	{
		id: "journal",
		label: "Field journal",
		brief: "A field journal for amateur naturalists, from a small press. Thick paper, a pencil loop, species notes rather than inspiration quotes. Serious about looking, uninterested in lifestyle.",
		sample: false
	}
];
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
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
var researchBrief = createServerFn({ method: "POST" }).validator((input) => ({ brief: briefOf(input) })).handler(createSsrRpc("7e93cf21b54cf8d660bdf2c0c66bfb7658e7617d3d9d687969769a8ab3bc8b64"));
var collectReferences = createServerFn({ method: "POST" }).validator((input) => ({ brief: briefOf(input) })).handler(createSsrRpc("9bf692ca5935fd5011ec835fb1caa0f5987280a61eae1cfed9218916beae49ee"));
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
}).handler(createSsrRpc("c34f2a3f1261c63c1a1b7c2ed48c6ed242abde6ec77a1b0f75c68df1b57d16f1"));
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
}).handler(createSsrRpc("d60ef2aad2a8986f425ae826358893d8ffb57fafca4169308033d0db3b67f5d5"));
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
}).handler(createSsrRpc("f171af0ec9249e6ffb2ef51e25f35faf1dac116d71f83269d0eb99f05a6f7762"));
var renderPlate = createServerFn({ method: "POST" }).validator((input) => {
	const prompt = input && typeof input === "object" && "prompt" in input && typeof input.prompt === "string" ? input.prompt.trim().slice(0, 600) : "";
	if (prompt.length < 8) throw new Error("This direction has no plate to expose.");
	return { prompt };
}).handler(createSsrRpc("e4c675ae596d7715a4e715d3f07e4563c0500f8dbadcc90ff641a82db2c7e515"));
var EMPTY_BAG = {
	research: null,
	references: null,
	clusters: null,
	concepts: null,
	scores: null
};
var IDLE_STATUS = {
	research: "idle",
	references: "idle",
	cluster: "idle",
	concepts: "idle",
	score: "idle",
	render: "idle"
};
function clean(message) {
	if (/api[_ ]?key/i.test(message)) return "The model isn't available in this preview.";
	if (message.length > 280) return "The step failed. Run it again.";
	return message;
}
function messageOf(error) {
	if (error instanceof Error && error.message) return clean(error.message);
	if (typeof error === "string") return clean(error);
	if (error && typeof error === "object" && "message" in error && typeof error.message === "string") return clean(error.message);
	return "The step failed.";
}
async function settle(task) {
	try {
		return {
			ok: true,
			data: await task
		};
	} catch (error) {
		return {
			ok: false,
			error: messageOf(error)
		};
	}
}
function followView(status) {
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
var StepFailure = class extends Error {
	stage;
	constructor(stage, message) {
		super(message);
		this.name = "StepFailure";
		this.stage = stage;
	}
};
function makeJob() {
	return `F–${100 + Math.floor(Math.random() * 900)}`;
}
function Studio() {
	const [brief, setBrief] = (0, import_react.useState)(SAMPLE_BRIEF);
	const [runBrief, setRunBrief] = (0, import_react.useState)(SAMPLE_BRIEF);
	const [job, setJob] = (0, import_react.useState)(SAMPLE_JOB);
	const [source, setSource] = (0, import_react.useState)("sample");
	const [bag, setBag] = (0, import_react.useState)(sampleBag);
	const [status, setStatus] = (0, import_react.useState)(SAMPLE_STATUS);
	const [plates, setPlates] = (0, import_react.useState)(samplePlates);
	const [pinned, setPinned] = (0, import_react.useState)("render");
	const [running, setRunning] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [failed, setFailed] = (0, import_react.useState)(null);
	const bagRef = (0, import_react.useRef)(bag);
	const statusRef = (0, import_react.useRef)(status);
	const runningRef = (0, import_react.useRef)(false);
	const briefRef = (0, import_react.useRef)(brief);
	bagRef.current = bag;
	statusRef.current = status;
	briefRef.current = brief;
	function commitBag(next) {
		bagRef.current = next;
		setBag(next);
	}
	function commitStatus(next) {
		statusRef.current = next;
		setStatus(next);
	}
	function setStage(id, value) {
		commitStatus({
			...statusRef.current,
			[id]: value
		});
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
	function clearAfter(from) {
		const next = { ...bagRef.current };
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
		} else if (from === "score") next.scores = null;
		commitBag(next);
		if (resetPlates) setPlates({});
		const idle = {};
		const order = [
			"cluster",
			"concepts",
			"score",
			"render"
		];
		const startAt = from === "start" || from === "research" || from === "references" ? "cluster" : from === "cluster" ? "concepts" : from === "concepts" ? "score" : from === "score" ? "render" : "render";
		if (from === "start" || from === "research" || from === "references" || order.includes(from)) {
			let wiping = from === "start" || from === "research" || from === "references";
			for (const id of order) {
				if (id === startAt) wiping = true;
				if (wiping && !(from === "render" && id === "render")) idle[id] = "idle";
			}
		}
		if (Object.keys(idle).length) commitStatus({
			...statusRef.current,
			...idle
		});
	}
	async function execute(from) {
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
		let step = from === "start" ? "research" : from;
		try {
			if (from === "start" || from === "research" || from === "references") {
				step = "research";
				await runParallel(text, from);
			}
			const current = bagRef.current;
			if (!current.research || !current.references) throw new Error("Research and references both have to land before the field can be sorted.");
			if (from === "start" || from === "research" || from === "references" || from === "cluster") {
				step = "cluster";
				clearAfter("cluster");
				setStage("cluster", "running");
				const clusters = await unwrap(clusterReferences({ data: {
					brief: text,
					research: bagRef.current.research,
					references: bagRef.current.references
				} }));
				commitBag({
					...bagRef.current,
					clusters
				});
				setStage("cluster", "done");
			}
			if (stepRank(from) <= stepRank("concepts")) {
				step = "concepts";
				clearAfter("concepts");
				setStage("concepts", "running");
				const concepts = await unwrap(draftConcepts({ data: {
					brief: text,
					research: bagRef.current.research,
					clusters: bagRef.current.clusters,
					references: bagRef.current.references
				} }));
				commitBag({
					...bagRef.current,
					concepts
				});
				setStage("concepts", "done");
			}
			if (stepRank(from) <= stepRank("score")) {
				step = "score";
				clearAfter("score");
				setStage("score", "running");
				const scores = await unwrap(scoreConcepts({ data: {
					brief: text,
					research: bagRef.current.research,
					concepts: bagRef.current.concepts
				} }));
				commitBag({
					...bagRef.current,
					scores
				});
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
	async function runParallel(text, from) {
		const redoResearch = from === "start" || from === "research" || statusRef.current.research !== "done";
		const redoReferences = from === "start" || from === "references" || statusRef.current.references !== "done";
		if (!redoResearch && !redoReferences) return;
		if (redoResearch) {
			commitBag({
				...bagRef.current,
				research: null,
				clusters: null,
				concepts: null,
				scores: null
			});
			setStage("research", "running");
		}
		if (redoReferences) {
			commitBag({
				...bagRef.current,
				references: null,
				clusters: null,
				concepts: null,
				scores: null
			});
			setStage("references", "running");
		}
		setPlates({});
		commitStatus({
			...statusRef.current,
			cluster: "idle",
			concepts: "idle",
			score: "idle",
			render: "idle"
		});
		const tasks = [];
		let researchError = null;
		let referencesError = null;
		if (redoResearch) tasks.push(settle(unwrap(researchBrief({ data: { brief: text } }))).then((result) => {
			if (result.ok) {
				commitBag({
					...bagRef.current,
					research: result.data
				});
				setStage("research", "done");
			} else {
				researchError = result.error;
				setStage("research", "error");
			}
		}));
		if (redoReferences) tasks.push(settle(unwrap(collectReferences({ data: { brief: text } }))).then((result) => {
			if (result.ok) {
				commitBag({
					...bagRef.current,
					references: result.data
				});
				setStage("references", "done");
			} else {
				referencesError = result.error;
				setStage("references", "error");
			}
		}));
		await Promise.all(tasks);
		if (researchError || referencesError) throw new StepFailure(researchError ? "research" : "references", researchError ?? referencesError ?? "The step failed.");
	}
	async function exposePlates() {
		const concepts = bagRef.current.concepts;
		const scores = bagRef.current.scores;
		if (!concepts || !scores) throw new Error("There is nothing to render yet.");
		const { picked } = selectBoards(concepts, scores);
		const initial = {};
		for (const concept of picked) initial[concept.id] = { status: "running" };
		setPlates(initial);
		await Promise.all(picked.map(async (concept) => {
			const result = await settle(unwrap(renderPlate({ data: { prompt: concept.imagePrompt } })));
			setPlates((current) => ({
				...current,
				[concept.id]: result.ok ? {
					status: "done",
					url: result.data.url
				} : {
					status: "error",
					error: result.error
				}
			}));
		}));
	}
	const view = pinned ?? followView(status);
	const edited = brief.trim() !== runBrief;
	const tooShort = brief.trim().length < 12;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "border-b border-line",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4 px-4 py-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-4xl italic leading-none",
					children: "Forma"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "A visual identity sequence"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tabular-nums text-muted",
					children: job
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "px-4 pb-4 sm:px-6",
				onSubmit: (event) => {
					event.preventDefault();
					execute("start");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border border-line shadow-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-l-4 border-l-clay",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3 px-4 pt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "brief",
									className: "font-mono text-xs uppercase tracking-widest text-muted",
									children: "Brief"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `font-mono text-xs tabular-nums ${tooShort ? "text-clay-ink" : "text-muted"}`,
									children: [brief.trim().length, "/800"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "brief",
								value: brief,
								maxLength: 800,
								rows: 4,
								onChange: (event) => setBrief(event.target.value),
								placeholder: "A short description of the company, app, or place.",
								className: "w-full resize-y bg-transparent px-4 py-3 text-base leading-relaxed outline-none placeholder:text-muted"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: running || tooShort,
							className: "inline-flex min-h-11 items-center justify-center bg-ink px-4 text-sm font-medium text-paper disabled:cursor-not-allowed disabled:opacity-40",
							children: running ? "Running the sequence" : "Run the sequence"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							"aria-live": "polite",
							children: error ? error : running ? "The sequence is working. Stages light up as they land." : edited ? "The brief has changed since this sequence." : source === "sample" ? "A finished sequence is open." : "Sequence complete."
						})]
					}),
					failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "mt-3 inline-flex min-h-11 items-center border border-line px-4 text-sm hover:bg-ink/5",
						onClick: () => void execute(failed),
						disabled: running || tooShort,
						children: ["Retry ", STAGES.find((stage) => stage.id === failed)?.label.toLowerCase()]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: EXAMPLES.map((example) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex min-h-11 items-center border border-line px-3 text-sm hover:bg-ink/5",
							onClick: () => {
								if (example.sample) loadSample();
								else setBrief(example.brief);
							},
							children: example.label
						}, example.id))
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:grid lg:grid-cols-[17rem_minmax(0,1fr)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 overflow-x-auto border-b border-line px-4 py-3 lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RailChip, {
						label: "Method",
						active: view === "method",
						onClick: () => setPinned("method")
					}), STAGES.map((stage) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RailChip, {
						label: stage.label,
						active: view === stage.id || view === "parallel" && (stage.id === "research" || stage.id === "references"),
						disabled: !enabled(stage.id, status, bag),
						onClick: () => setPinned(stage.id)
					}, stage.id))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "hidden border-r border-line lg:sticky lg:top-0 lg:block lg:max-h-screen lg:overflow-y-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "py-4",
						"aria-label": "Sequence",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RailButton, {
								label: "Method",
								hint: "How the sequence is built.",
								active: view === "method",
								onClick: () => setPinned("method")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-4 pt-4 font-mono text-xs uppercase tracking-widest text-clay-ink",
								children: "Together"
							}),
							STAGES.slice(0, 2).map((stage) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RailButton, {
								index: stage.index,
								label: stage.label,
								hint: status[stage.id] === "running" ? stage.running : stage.hint,
								status: status[stage.id],
								active: view === stage.id,
								disabled: !enabled(stage.id, status, bag),
								onClick: () => setPinned(stage.id)
							}, stage.id)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-4 my-3 h-px bg-line" }),
							STAGES.slice(2).map((stage) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RailButton, {
								index: stage.index,
								label: stage.label,
								hint: status[stage.id] === "running" ? stage.running : stage.hint,
								status: status[stage.id],
								active: view === stage.id,
								disabled: !enabled(stage.id, status, bag),
								onClick: () => setPinned(stage.id)
							}, stage.id))
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "min-w-0 px-4 py-6 sm:px-6 lg:px-8 lg:py-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl",
						children: [
							view === "method" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodView, {}) : null,
							view === "parallel" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallelView, {
								bag,
								status
							}) : null,
							view === "research" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResearchView, {
								bag,
								status: status.research
							}) : null,
							view === "references" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferencesView, {
								bag,
								status: status.references
							}) : null,
							view === "cluster" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClustersView, {
								bag,
								status: status.cluster
							}) : null,
							view === "concepts" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConceptsView, {
								bag,
								status: status.concepts
							}) : null,
							view === "score" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoresView, {
								bag,
								status: status.score
							}) : null,
							view === "render" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoardsView, {
								bag,
								plates,
								status: status.render,
								sample: source === "sample"
							}) : null
						]
					})
				})
			]
		})]
	});
}
function enabled(id, status, bag) {
	if (status[id] === "running" || status[id] === "done" || status[id] === "error") return true;
	if (id === "research") return bag.research != null;
	if (id === "references") return bag.references != null;
	if (id === "cluster") return bag.clusters != null;
	if (id === "concepts") return bag.concepts != null;
	if (id === "score") return bag.scores != null;
	return false;
}
function stepRank(id) {
	if (id === "start" || id === "research" || id === "references") return 0;
	if (id === "cluster") return 1;
	if (id === "concepts") return 2;
	if (id === "score") return 3;
	return 4;
}
async function unwrap(task) {
	const result = await task;
	if (!result.ok) throw new Error(result.error);
	return result.data;
}
function RailChip({ label, active, disabled, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		disabled,
		onClick,
		"aria-current": active ? "page" : void 0,
		className: `inline-flex min-h-11 shrink-0 items-center border px-3 text-sm disabled:opacity-40 ${active ? "border-ink bg-ink text-paper" : "border-line bg-paper text-ink"}`,
		children: label
	});
}
function RailButton({ index, label, hint, status, active, disabled, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		disabled,
		onClick,
		"aria-current": active ? "page" : void 0,
		className: `flex w-full items-start gap-3 px-4 py-3 text-left disabled:opacity-40 ${active ? "bg-ink/5" : "hover:bg-ink/5"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-6 pt-0.5 font-mono text-xs text-muted",
				children: index ?? "00"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-sm",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-0.5 block text-xs leading-relaxed text-muted",
					children: hint
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dot, { status })
		]
	});
}
function Dot({ status }) {
	if (!status || status === "idle") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "mt-1 size-2 shrink-0 border border-line",
		"aria-hidden": true
	});
	if (status === "running") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "kiln-pulse mt-1 size-2 shrink-0 bg-clay",
		"aria-hidden": true
	});
	if (status === "error") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "mt-1 size-2 shrink-0 bg-clay",
		"aria-hidden": true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "mt-1 size-2 shrink-0 bg-ink",
		"aria-hidden": true
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, {});
}
//#endregion
export { Home as component };
