import { Garment, type GarmentKind } from "@/components/illustrations/Garment";

// Quiet paper tints behind each tile, independent of the garment colors.
const tints = ["#f3ece2", "#eef0ea", "#f5ebe6"];

type Tile = { kind: GarmentKind; fill: string; accent?: string };

type Props = {
  title: string;
  palette: string[];
  tiles: Tile[];
  /** Short words shown as tags, e.g. ["Soft tailoring", "Neutral"]. */
  words?: string[];
  className?: string;
};

/**
 * A pinned-paper moodboard: garment illustrations, a color palette and a few
 * taste words. Pure HTML/SVG, authored for this site.
 */
export function Moodboard({ title, palette, tiles, words = [], className = "" }: Props) {
  // One hero tile plus two supporting tiles keeps the 3-column grid full.
  const shown = tiles.slice(0, 3);
  return (
    <figure className={`relative overflow-hidden rounded-2xl border border-line bg-paper p-4 shadow-sm sm:p-5 ${className}`}>
      <div
        role="img"
        aria-label={`Illustrated moodboard: ${title}. Garments: ${shown.map((t) => t.kind).join(", ")}.`}
        className="grid grid-cols-3 gap-3"
      >
        {shown.map((t, i) => (
          <div
            key={i}
            className={`flex items-center justify-center rounded-xl p-2 ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            style={{ background: tints[i % tints.length] }}
          >
            <Garment kind={t.kind} fill={t.fill} accent={t.accent} className={i === 0 ? "h-40 w-auto sm:h-48" : "h-20 w-auto"} />
          </div>
        ))}
        <div className="col-span-3 flex items-center gap-2 pt-1">
          {palette.map((c) => (
            <span key={c} className="h-7 flex-1 rounded-md border border-black/10" style={{ background: c }} />
          ))}
        </div>
      </div>
      {words.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {words.map((w) => (
            <li key={w} className="rounded-full border border-line bg-cream px-2.5 py-0.5 text-xs text-muted">
              {w}
            </li>
          ))}
        </ul>
      )}
      <figcaption className="mt-3 text-xs font-medium uppercase tracking-wider text-muted">{title}</figcaption>
    </figure>
  );
}
