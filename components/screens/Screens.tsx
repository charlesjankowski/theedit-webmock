import { Garment } from "@/components/illustrations/Garment";

/*
 * Illustrative app screens rendered in HTML/CSS. All data is fictional:
 * "Brand A/B/C/D" are placeholders, not real companies.
 */

function ScreenTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="pt-3">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
      <p className="mt-1 font-serif text-[22px] leading-tight text-ink">{title}</p>
    </div>
  );
}

function Chip({ children, on = false }: { children: React.ReactNode; on?: boolean }) {
  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-[11px] ${
        on ? "border-ink bg-ink text-cream" : "border-line bg-paper text-ink"
      }`}
    >
      {children}
    </span>
  );
}

export function TasteScreen() {
  return (
    <div>
      <ScreenTitle eyebrow="Your taste" title="Which of these feel like you?" />
      <div className="mt-4 grid grid-cols-2 gap-2">
        {[
          { kind: "blazer" as const, fill: "#d8cbb5", on: true, name: "Soft tailoring" },
          { kind: "knit" as const, fill: "#d9e0d0", on: true, name: "Easy knits" },
          { kind: "dress" as const, fill: "#f1ddd3", on: false, name: "Romantic" },
          { kind: "tee" as const, fill: "#c9d3dd", on: true, name: "Clean basics" },
        ].map((c) => (
          <div
            key={c.name}
            className={`rounded-xl border p-2 ${c.on ? "border-ink bg-paper" : "border-line bg-paper/60"}`}
          >
            <Garment kind={c.kind} fill={c.fill} className="mx-auto h-20 w-auto" />
            <p className="mt-1 flex items-center justify-between text-[11px] text-ink">
              {c.name}
              <span className={`h-3.5 w-3.5 rounded-full border ${c.on ? "border-accent bg-accent" : "border-line"}`} />
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[11px] font-semibold text-ink">Colors you reach for</p>
      <div className="mt-2 flex gap-1.5">
        {["#1f1a17", "#eadfcb", "#8a3b2a", "#d9e0d0", "#4a2f3f", "#c9d3dd"].map((c, i) => (
          <span
            key={c}
            className={`h-7 w-7 rounded-full border ${i < 3 ? "ring-2 ring-accent ring-offset-2 ring-offset-cream" : ""}`}
            style={{ background: c, borderColor: "#0001" }}
          />
        ))}
      </div>
      <div className="mt-5 rounded-full bg-ink py-2.5 text-center text-[12px] font-semibold text-cream">Continue</div>
    </div>
  );
}

export function OccasionScreen() {
  return (
    <div>
      <ScreenTitle eyebrow="The occasion" title="What are you dressing for?" />
      <div className="mt-4 flex flex-wrap gap-1.5">
        <Chip>Work</Chip>
        <Chip on>Wedding guest</Chip>
        <Chip>First date</Chip>
        <Chip>Interview</Chip>
        <Chip>Weekend</Chip>
        <Chip>Travel</Chip>
      </div>
      <div className="mt-4 space-y-2.5 rounded-xl border border-line bg-paper p-3 text-[11px] text-ink">
        <Row k="Dress code" v="Cocktail" />
        <Row k="Setting" v="Garden, afternoon" />
        <Row k="Weather" v="Warm, light breeze" />
      </div>
      <p className="mt-4 text-[11px] font-semibold text-ink">Your vibe for this one</p>
      <div className="mt-2 space-y-3">
        <Slider left="Relaxed" right="Polished" at={68} />
        <Slider left="Quiet" right="Statement" at={40} />
      </div>
      <div className="mt-5 rounded-full bg-ink py-2.5 text-center text-[12px] font-semibold text-cream">Style me</div>
    </div>
  );
}

export function EditScreen() {
  return (
    <div>
      <ScreenTitle eyebrow="Your edit" title="Garden cocktail, softly polished" />
      <div className="mt-3 rounded-2xl bg-blush/60 p-3">
        <div className="flex items-end justify-center gap-1">
          <Garment kind="dress" fill="#f6efe6" accent="#8a3b2a" className="h-36 w-auto" />
          <div className="flex flex-col items-center">
            <Garment kind="bag" fill="#8a3b2a" accent="#6e2d1f" className="h-14 w-auto" />
            <Garment kind="shoe" fill="#eadfcb" accent="#1f1a17" className="h-14 w-auto" />
          </div>
        </div>
      </div>
      <ul className="mt-3 space-y-2">
        <Item brand="Brand A" name="Linen wrap midi dress" />
        <Item brand="Brand B" name="Structured mini bag" />
        <Item brand="Brand C" name="Low block-heel sandal" />
      </ul>
    </div>
  );
}

export function RefineScreen() {
  return (
    <div>
      <ScreenTitle eyebrow="Refine" title="Make it yours" />
      <div className="mt-3 flex items-center gap-3 rounded-xl border border-line bg-paper p-2.5">
        <Garment kind="shoe" fill="#eadfcb" accent="#1f1a17" className="h-12 w-auto" />
        <div className="flex-1 text-[11px]">
          <p className="font-semibold text-ink">Swap the shoes</p>
          <p className="text-muted">3 alternatives that keep the look</p>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {[
          { k: "boot" as const, f: "#4a2f3f", b: "Brand D" },
          { k: "shoe" as const, f: "#d9e0d0", b: "Brand B", on: true },
          { k: "shoe" as const, f: "#1f1a17", b: "Brand A" },
        ].map((s, i) => (
          <div key={i} className={`rounded-lg border p-1.5 text-center ${s.on ? "border-ink bg-paper" : "border-line bg-paper/60"}`}>
            <Garment kind={s.k} fill={s.f} accent="#8a3b2a" className="mx-auto h-11 w-auto" />
            <p className="text-[10px] text-muted">{s.b}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[11px] font-semibold text-ink">Tell your stylist</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        <Chip on>Less formal</Chip>
        <Chip>Warmer tones</Chip>
        <Chip>Flat shoes only</Chip>
      </div>
      <div className="mt-4 flex gap-2">
        <div className="flex-1 rounded-full border border-ink py-2.5 text-center text-[12px] font-semibold text-ink">Save look</div>
        <div className="flex-1 rounded-full bg-accent py-2.5 text-center text-[12px] font-semibold text-cream">Buy pieces</div>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <p className="flex justify-between">
      <span className="text-muted">{k}</span>
      <span className="font-medium">{v}</span>
    </p>
  );
}

function Slider({ left, right, at }: { left: string; right: string; at: number }) {
  return (
    <div>
      <div className="relative h-1.5 rounded-full bg-line">
        <span className="absolute inset-y-0 left-0 rounded-full bg-accent" style={{ width: `${at}%` }} />
        <span
          className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent bg-paper"
          style={{ left: `${at}%` }}
        />
      </div>
      <p className="mt-1.5 flex justify-between text-[10px] text-muted">
        <span>{left}</span>
        <span>{right}</span>
      </p>
    </div>
  );
}

function Item({ brand, name }: { brand: string; name: string }) {
  return (
    <li className="flex items-center justify-between rounded-lg border border-line bg-paper px-2.5 py-2 text-[11px]">
      <span>
        <span className="block text-[10px] uppercase tracking-wider text-muted">{brand}</span>
        <span className="text-ink">{name}</span>
      </span>
      <span className="rounded-full border border-line px-2 py-0.5 text-[10px] text-ink">Swap</span>
    </li>
  );
}
