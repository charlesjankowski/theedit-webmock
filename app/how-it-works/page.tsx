import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { PhoneFrame } from "@/components/PhoneFrame";
import { TasteScreen, OccasionScreen, EditScreen, RefineScreen } from "@/components/screens/Screens";
import { ShoppingFlow } from "@/components/illustrations/ShoppingFlow";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig, suggestionsExplainer } from "@/site.config";

export const metadata = pageMetadata({
  title: "How it works",
  description:
    "Share your taste, set the occasion, refine the suggested look, then tap through to the retailer to buy. Here's the full path in YourEdit, step by step.",
  path: "/how-it-works",
});

const detail = [
  {
    title: "Share your taste",
    screen: <TasteScreen />,
    label: "Taste quiz with style and color choices",
    body: [
      "When you first open YourEdit, you'll see a short visual quiz. Pick the shapes, textures and colors that feel like you, and skip the ones that don't. There are no right answers, and nothing to type.",
      "Your taste profile keeps developing as you use the app. Saving a look, swapping a piece or asking for something less formal all tell your stylist a little more.",
    ],
  },
  {
    title: "Set the occasion",
    screen: <OccasionScreen />,
    label: "Occasion screen with dress code and setting",
    body: [
      "Tell YourEdit what you're dressing for: a wedding, an interview, a first date, a week of work, a trip. Add the dress code, setting and weather if you know them.",
      "Then set the vibe for this one. Two sliders let you lean more relaxed or more polished, quieter or more of a statement.",
    ],
  },
  {
    title: "Get your edit",
    screen: <EditScreen />,
    label: "A complete suggested outfit",
    body: [
      "You'll see complete looks rather than a long feed: a main piece, then the layers, shoes and bag that finish it, chosen to work together.",
    ],
  },
  {
    title: "Refine it, then tap through",
    screen: <RefineScreen />,
    label: "Refine screen with shoe alternatives and a View at retailer button",
    body: [
      "Not quite right? Swap one piece for alternatives that keep the look together, or tell your stylist what to change. Save the looks you love.",
      "When you're ready, tap “View at retailer”. The piece opens on the retailer's own website, where you can check sizing, details and returns, and buy directly from them. YourEdit doesn't sell clothing or handle payments.",
    ],
  },
];

const faqs = [
  {
    q: "Is YourEdit available yet?",
    a: (
      <>
        Not yet. YourEdit is in development for iPhone and isn&apos;t in the App Store. You can{" "}
        <Link href="/#waitlist">join the waitlist</Link> and we&apos;ll email you once when it launches.
      </>
    ),
  },
  { q: "How are suggestions generated?", a: <>{suggestionsExplainer} You can read more in our <Link href="/privacy">privacy policy</Link>.</> },
  {
    q: "Do I buy clothes through YourEdit?",
    a: "No. When you choose a piece, you tap through to the retailer's own website and buy from them, under their terms, sizing and returns policies.",
  },
  {
    q: "Is YourEdit connected to any brand or retailer?",
    a: (
      <>
        No. YourEdit is independent. Suggestions are chosen for your taste and occasion. In the future, some retailer
        links may be affiliate links, which we&apos;ll label clearly. See our{" "}
        <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
      </>
    ),
  },
  {
    q: "Which devices will it support?",
    a: "The first version is being built for iPhone.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="From your taste to a look you love"
        intro={`${siteConfig.appName} works like a personal stylist in your pocket. You share your taste and your plans, it suggests pieces, and you refine them until the look is yours. Here's each step.`}
      />

      <section aria-labelledby="flow-heading" className="mx-auto max-w-6xl px-5">
        <h2 id="flow-heading" className="sr-only">The four steps</h2>
        <ShoppingFlow />
      </section>

      <section aria-labelledby="detail-heading" className="mx-auto mt-20 max-w-5xl px-5">
        <h2 id="detail-heading" className="font-serif text-3xl font-semibold tracking-tight">Step by step</h2>
        <p className="mt-2 text-muted">Screens are illustrative. Brands and items shown are fictional.</p>
        <ol className="mt-10 space-y-20">
          {detail.map((d, i) => (
            <li key={d.title} className="grid items-center gap-10 md:grid-cols-2">
              <div className={i % 2 ? "md:order-2" : ""}>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">Step {i + 1}</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold">{d.title}</h3>
                {d.body.map((p) => (
                  <p key={p.slice(0, 20)} className="mt-4 leading-relaxed text-muted">{p}</p>
                ))}
              </div>
              <div className="flex justify-center">
                <PhoneFrame label={d.label}>{d.screen}</PhoneFrame>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="faq-heading" className="mx-auto mt-24 max-w-3xl px-5">
        <h2 id="faq-heading" className="font-serif text-3xl font-semibold tracking-tight">Questions</h2>
        <dl className="mt-8 divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <div key={f.q} className="py-6">
              <dt className="font-semibold">{f.q}</dt>
              <dd className="prose-edit mt-2 !text-base text-muted">{f.a}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-12 text-center">
          <Link
            href="/#waitlist"
            className="inline-block rounded-full bg-accent px-6 py-3 font-medium text-cream transition-colors hover:bg-accent-dark"
          >
            Join the waitlist
          </Link>
        </div>
      </section>
    </>
  );
}
