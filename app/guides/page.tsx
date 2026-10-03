import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Moodboard } from "@/components/illustrations/Moodboard";
import { guides } from "@/content/guides";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Style guides",
  description:
    "Practical styling guides: wedding dress codes, finding your style vibe, capsule wardrobes, first-date and interview outfits, and judging fit, fabric and construction.",
  path: "/guides",
});

export default function GuidesIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Style guides"
        title="Get dressed with more confidence"
        intro="Practical, brand-free advice for everyday styling questions, written by the team building YourEdit."
      />
      <div className="mx-auto max-w-6xl px-5">
        <ul className="grid gap-6 md:grid-cols-2">
          {guides.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}`}
                className="group grid h-full gap-5 rounded-2xl border border-line bg-paper p-5 transition-shadow hover:shadow-md sm:grid-cols-[180px_1fr]"
              >
                <Moodboard
                  title={g.moodboard.title}
                  palette={g.moodboard.palette}
                  tiles={g.moodboard.tiles.slice(0, 4)}
                  className="!p-2.5 !shadow-none [&_figcaption]:hidden"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">{g.category}</p>
                  <h2 className="mt-2 font-serif text-xl font-semibold leading-snug">{g.title}</h2>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{g.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium">
                    Read the guide
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
