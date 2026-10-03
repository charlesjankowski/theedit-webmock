import { Palette, CalendarHeart, SlidersHorizontal, ExternalLink, ChevronRight, ChevronDown } from "lucide-react";
import { Garment } from "@/components/illustrations/Garment";

const steps = [
  {
    icon: Palette,
    title: "Share your taste",
    body: "React to shapes, colors and moods in a short visual quiz.",
    art: <Garment kind="knit" fill="#d9e0d0" accent="#8a3b2a" className="h-16 w-auto" />,
  },
  {
    icon: CalendarHeart,
    title: "Set the occasion",
    body: "Choose the event, dress code, setting and weather.",
    art: <Garment kind="dress" fill="#f1ddd3" accent="#4a2f3f" className="h-16 w-auto" />,
  },
  {
    icon: SlidersHorizontal,
    title: "Refine your edit",
    body: "Swap pieces and nudge the look until it feels like you.",
    art: <Garment kind="blazer" fill="#eadfcb" accent="#8a3b2a" className="h-16 w-auto" />,
  },
  {
    icon: ExternalLink,
    title: "Tap through to the retailer",
    body: "Open a piece on the retailer's own site to check details and buy there.",
    art: <Garment kind="bag" fill="#8a3b2a" accent="#6e2d1f" className="h-16 w-auto" />,
  },
];

/** Illustrated four-step path from taste to retailer. HTML + authored SVG. */
export function ShoppingFlow() {
  return (
    <ol className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch">
      {steps.map(({ icon: Icon, title, body, art }, i) => (
        <li key={title} className="contents">
          <div className="flex flex-col rounded-2xl border border-line bg-paper p-5">
            <div className="flex items-start justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-accent">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span aria-hidden="true">{art}</span>
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted">Step {i + 1}</p>
            <h3 className="mt-1 text-lg font-semibold">{title}</h3>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{body}</p>
          </div>
          {i < steps.length - 1 && (
            <span className="flex items-center justify-center text-line" aria-hidden="true">
              <ChevronRight className="hidden h-6 w-6 text-muted/60 lg:block" />
              <ChevronDown className="h-6 w-6 text-muted/60 lg:hidden" />
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
