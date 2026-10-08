import type { MarkKind } from "@/lib/pipeline/model";

type Props = {
  kind: MarkKind;
  letters: { one: string; two: string };
  className?: string;
};

export function IdentityMark({ kind, letters, className }: Props) {
  const props = {
    viewBox: "0 0 72 72",
    className,
    fill: "none",
    "aria-hidden": true as const,
  };
  const stroke = { stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  if (kind === "seal") {
    return (
      <svg {...props}>
        <circle cx="36" cy="36" r="22" {...stroke} />
        <circle cx="36" cy="36" r="17.5" stroke="currentColor" strokeWidth="0.75" />
        <text x="36" y="42" textAnchor="middle" fontSize="18" fontFamily="Fraunces, Georgia, serif" fill="currentColor">
          {letters.one}
        </text>
      </svg>
    );
  }

  if (kind === "monogram") {
    return (
      <svg {...props}>
        <text x="26" y="46" textAnchor="middle" fontSize="28" fontFamily="Fraunces, Georgia, serif" fill="currentColor">
          {letters.two[0]}
        </text>
        <text x="46" y="50" textAnchor="middle" fontSize="28" fontFamily="Fraunces, Georgia, serif" fill="currentColor" opacity="0.45">
          {letters.two[1]}
        </text>
      </svg>
    );
  }

  if (kind === "stripe") {
    return (
      <svg {...props}>
        <path d="M16 26 H56" {...stroke} strokeWidth="2.25" />
        <path d="M16 36 H46" {...stroke} strokeWidth="2.25" />
        <path d="M16 46 H56" {...stroke} strokeWidth="2.25" />
      </svg>
    );
  }

  if (kind === "arc") {
    return (
      <svg {...props}>
        <path d="M16 46 A20 20 0 0 1 56 46" {...stroke} />
        <circle cx="36" cy="46" r="2" fill="currentColor" />
        <path d="M36 18 V28" {...stroke} />
      </svg>
    );
  }

  if (kind === "frame") {
    return (
      <svg {...props}>
        <path d="M18 16 H54 V42 L42 54 H18 Z" {...stroke} />
      </svg>
    );
  }

  if (kind === "wave") {
    return (
      <svg {...props}>
        <path d="M10 30 C22 18, 28 42, 40 30 S58 18, 64 30" {...stroke} />
        <path d="M10 44 C22 32, 28 56, 40 44 S58 32, 64 44" {...stroke} />
      </svg>
    );
  }

  if (kind === "diamond") {
    return (
      <svg {...props}>
        <rect x="24" y="24" width="24" height="24" transform="rotate(45 36 36)" {...stroke} />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="M14 46 L36 18 L58 46" {...stroke} />
      <path d="M22 46 L36 30 L50 46" {...stroke} />
      <path d="M16 52 H56" {...stroke} />
    </svg>
  );
}
