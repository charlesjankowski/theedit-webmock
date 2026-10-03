import Link from "next/link";
import { ArrowRight, Sparkles, SlidersHorizontal, CalendarHeart, Shirt, BookOpen, ShieldCheck } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { TasteScreen, OccasionScreen, EditScreen, RefineScreen } from "@/components/screens/Screens";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Moodboard } from "@/components/illustrations/Moodboard";
import { guides } from "@/content/guides";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/site.config";

export const metadata = {
  ...pageMetadata({
    title: siteConfig.tagline,
    description: siteConfig.description,
    path: "/",
  }),
  title: { absolute: `${siteConfig.appName}: ${siteConfig.tagline} A virtual stylist for iOS` },
};

const features = [
  {
    icon: Sparkles,
    title: "Learns your taste",
    body: "A short visual quiz captures the shapes, colors and moods you gravitate to. Every like, skip and swap sharpens it.",
  },
  {
    icon: CalendarHeart,
    title: "Dresses the occasion",
    body: "Tell it the event, the dress code and the weather. It decodes the brief so you're not guessing what \"smart casual\" means this time.",
  },
  {
    icon: Shirt,
    title: "Suggests whole looks",
    body: "You get complete outfits, not a feed of single items: a main piece, layers, shoes and a bag that work together.",
  },
  {
    icon: SlidersHorizontal,
    title: "Lets you refine",
    body: "Nudge a look more relaxed or more polished, swap one piece, change a color. Your stylist adjusts until it's yours.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 md:grid-cols-[1.1fr_1fr] md:pt-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            In development for iOS
          </p>
          <h1 className="mt-5 font-serif text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{siteConfig.description}</p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            It&apos;s for anyone who has stood in front of a full closet with nothing to wear, stared at a dress code on an
            invitation, or bought something that looked great online and never felt like them.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#waitlist"
              className="rounded-full bg-accent px-6 py-3 font-medium text-cream transition-colors hover:bg-accent-dark"
            >
              Join the waitlist
            </Link>
            <Link href="/how-it-works" className="group inline-flex items-center gap-1.5 font-medium text-ink">
              See how it works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <PhoneFrame label="Your edit: a suggested garden cocktail look with a dress, bag and sandals">
            <EditScreen />
          </PhoneFrame>
        </div>
      </section>

      {/* Screens */}
      <section aria-labelledby="screens-heading" className="border-y border-line bg-paper py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 id="screens-heading" className="max-w-2xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            From &ldquo;what do I wear?&rdquo; to a look you love, in four screens
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Illustrative previews of the app. Brands and items shown are fictional placeholders.
          </p>
          <div className="mt-12 grid justify-items-center gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <PhoneFrame label="Taste quiz: choosing styles and colors" caption="1. Show it what you like.">
              <TasteScreen />
            </PhoneFrame>
            <PhoneFrame label="Occasion: wedding guest, cocktail dress code" caption="2. Tell it where you're going.">
              <OccasionScreen />
            </PhoneFrame>
            <PhoneFrame label="Your edit: a complete suggested outfit" caption="3. Get a complete look.">
              <EditScreen />
            </PhoneFrame>
            <PhoneFrame label="Refine: swapping shoes and adjusting the look" caption="4. Refine it until it's yours.">
              <RefineScreen />
            </PhoneFrame>
          </div>
        </div>
      </section>

      {/* Features */}
      <section aria-labelledby="features-heading" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <h2 id="features-heading" className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              A stylist that starts with you
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              YourEdit starts with your taste and your plans, then suggests pieces that fit both, so you see
              looks that feel like you, for the day you actually have.
            </p>
            <Moodboard
              className="mt-8 max-w-sm"
              title="Example moodboard: soft tailoring"
              palette={["#eadfcb", "#8a3b2a", "#d9e0d0", "#1f1a17"]}
              tiles={[
                { kind: "blazer", fill: "#d8cbb5", accent: "#8a3b2a" },
                { kind: "trousers", fill: "#f6efe6" },
                { kind: "knit", fill: "#d9e0d0", accent: "#8a3b2a" },
                { kind: "shoe", fill: "#1f1a17", accent: "#8a3b2a" },
                { kind: "bag", fill: "#8a3b2a", accent: "#6e2d1f" },
              ]}
              words={["Soft tailoring", "Warm neutrals", "Polished but easy"]}
            />
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, body }) => (
              <li key={title} className="rounded-2xl border border-line bg-paper p-6">
                <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Guides teaser */}
      <section aria-labelledby="guides-heading" className="mx-auto max-w-6xl px-5 pb-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="guides-heading" className="font-serif text-3xl font-semibold tracking-tight">
              <BookOpen className="mr-2 inline h-7 w-7 align-[-4px] text-accent" aria-hidden="true" />
              Style guides
            </h2>
            <p className="mt-2 text-muted">Practical, brand-free advice from the team building YourEdit.</p>
          </div>
          <Link href="/guides" className="group inline-flex items-center gap-1.5 font-medium">
            All guides
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {guides.slice(0, 3).map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}`}
                className="block h-full rounded-2xl border border-line bg-paper p-6 transition-shadow hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{g.category}</p>
                <h3 className="mt-2 font-serif text-xl font-semibold leading-snug">{g.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{g.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Waitlist */}
      <section id="waitlist" aria-labelledby="waitlist-heading" className="scroll-mt-20 px-5">
        <div className="mx-auto max-w-6xl rounded-3xl bg-plum px-6 py-14 text-cream sm:px-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 id="waitlist-heading" className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                Be first to try YourEdit
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-cream/85">
                YourEdit is in development for iPhone and isn&apos;t in the App Store yet. Join the waitlist and
                we&apos;ll send one email when it&apos;s ready. No newsletters, no spam.
              </p>
              <p className="mt-4 flex items-center gap-2 text-sm text-cream/85">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" /> Unsubscribe or ask us to delete your email any time.
              </p>
            </div>
            <WaitlistForm tone="dark" />
          </div>
        </div>
      </section>
    </>
  );
}
