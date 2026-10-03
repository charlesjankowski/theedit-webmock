/**
 * Flat garment illustrations, authored for this site. Generic silhouettes
 * only: no brands, logos or product likenesses.
 * All share a 100×120 viewBox so they line up in grids and moodboards.
 */

export type GarmentKind =
  | "dress"
  | "blazer"
  | "trousers"
  | "shirt"
  | "knit"
  | "skirt"
  | "coat"
  | "tee"
  | "shoe"
  | "boot"
  | "bag"
  | "scarf";

type Props = {
  kind: GarmentKind;
  fill?: string;
  accent?: string;
  className?: string;
  /** Accessible label. Omit to mark the illustration decorative. */
  title?: string;
};

const stroke = "#1f1a17";

export function Garment({ kind, fill = "#eadfcb", accent = "#8a3b2a", className, title }: Props) {
  const a11y = title
    ? { role: "img" as const, "aria-label": title }
    : { "aria-hidden": true as const, focusable: "false" as const };
  return (
    <svg viewBox="0 0 100 120" className={className} {...a11y}>
      <g stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
        {shapes[kind](fill, accent)}
      </g>
    </svg>
  );
}

const shapes: Record<GarmentKind, (fill: string, accent: string) => React.ReactNode> = {
  dress: (f, a) => (
    <>
      <path d="M40 8v8M60 8v8" fill="none" />
      <path d="M38 16h24l3 10-5 16 18 70H22l18-70-5-16Z" fill={f} />
      <path d="M40 42h20" fill="none" stroke={a} strokeWidth="3" />
      <path d="M44 60 36 108M56 60l8 48" fill="none" opacity=".35" />
    </>
  ),
  blazer: (f, a) => (
    <>
      <path d="M36 12 50 34l14-22 18 8 6 70-14 4-4-40-2 52H32l-2-52-4 40-14-4 6-70Z" fill={f} />
      <path d="M36 12 44 46l6-12 6 12 8-34" fill="none" />
      <path d="M50 34v70" fill="none" />
      <circle cx="54" cy="62" r="1.8" fill={a} />
      <circle cx="54" cy="74" r="1.8" fill={a} />
      <path d="M34 70h8" fill="none" />
    </>
  ),
  trousers: (f) => (
    <>
      <path d="M28 10h44l4 102H56l-6-70-6 70H24Z" fill={f} />
      <path d="M28 18h44" fill="none" />
      <path d="M40 18v14M60 18v14" fill="none" opacity=".4" />
    </>
  ),
  shirt: (f, a) => (
    <>
      <path d="M36 12 50 20l14-8 22 14-8 16-8-6v68H30V36l-8 6-8-16Z" fill={f} />
      <path d="M36 12 44 28 50 20l6 8 8-16" fill="none" />
      <path d="M50 22v82" fill="none" />
      {[40, 54, 68, 82].map((y) => (
        <circle key={y} cx="53" cy={y} r="1.4" fill={a} stroke="none" />
      ))}
    </>
  ),
  knit: (f, a) => (
    <>
      <path d="M36 12q14 10 28 0l22 14-4 72-10 2-2-58v62H30V42l-2 58-10-2-4-72Z" fill={f} />
      <path d="M36 12q14 10 28 0" fill="none" stroke={a} strokeWidth="3" />
      <path d="M30 96h40M18 92h10M72 92h10" fill="none" opacity=".5" />
    </>
  ),
  skirt: (f, a) => (
    <>
      <path d="M34 22h32l16 82H18Z" fill={f} />
      <path d="M34 22h32v8H34Z" fill={a} />
      <path d="M44 30 36 104M56 30l8 74M50 30v74" fill="none" opacity=".35" />
    </>
  ),
  coat: (f, a) => (
    <>
      <path d="M36 8 50 28 64 8l18 8 8 82-14 2-4-50v66H28V50l-4 50-14-2 8-82Z" fill={f} />
      <path d="M36 8 42 44l8-16 8 16 6-36" fill="none" />
      <path d="M50 28v88" fill="none" />
      <path d="M30 70h40" fill="none" stroke={a} strokeWidth="3" />
    </>
  ),
  tee: (f) => (
    <>
      <path d="M38 14q12 8 24 0l24 12-8 16-8-4v66H30V38l-8 4-8-16Z" fill={f} />
      <path d="M38 14q12 8 24 0" fill="none" />
    </>
  ),
  shoe: (f, a) => (
    <>
      <path d="M14 78c0-10 6-16 14-16 10 0 14 6 24 10l28 8c6 2 8 6 8 10v6H14Z" fill={f} />
      <path d="M14 90h74v6H14Z" fill={a} />
      <path d="M40 66l6 10M48 70l5 9" fill="none" opacity=".5" />
    </>
  ),
  boot: (f, a) => (
    <>
      <path d="M34 20h26v52l20 10c6 3 8 7 8 12v4H30Z" fill={f} />
      <path d="M30 94h58v6H30Z" fill={a} />
      <path d="M34 30h26" fill="none" opacity=".5" />
    </>
  ),
  bag: (f, a) => (
    <>
      <path d="M36 46c0-16 6-22 14-22s14 6 14 22" fill="none" strokeWidth="3" />
      <path d="M20 46h60l-4 56H24Z" fill={f} />
      <path d="M20 46h60v12H20Z" fill={a} opacity=".9" />
      <rect x="45" y="56" width="10" height="7" rx="1.5" fill="#faf6f0" />
    </>
  ),
  scarf: (f, a) => (
    <>
      <path d="M30 16h40c4 20-4 30-10 34l6 62H50l-4-58c-10-4-18-16-16-38Z" fill={f} />
      <path d="M50 112h16M52 106h14" fill="none" stroke={a} strokeWidth="2.4" />
      <path d="M34 26h32M34 36h30" fill="none" stroke={a} opacity=".6" />
    </>
  ),
};
