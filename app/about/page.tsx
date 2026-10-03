import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Moodboard } from "@/components/illustrations/Moodboard";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/site.config";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Why we're building YourEdit, a virtual stylist for iPhone that starts with your taste and your plans. Currently in development.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Built for people who care how they dress"
        intro={`${siteConfig.appName} is a virtual stylist for iPhone, in development now. Here's who it's for and why we're building it.`}
      />
      <div className="mx-auto grid max-w-5xl gap-12 px-5 md:grid-cols-[1.4fr_1fr]">
        <div className="prose-edit">
          <h2>Why we&apos;re building it</h2>
          <p>
            Getting dressed well takes more than owning nice clothes. It takes knowing what suits you, what an occasion
            asks for, and how pieces work together. Most of us piece that knowledge together slowly, through trial,
            error and the occasional purchase that never quite felt right.
          </p>
          <p>
            A good stylist shortens that path. They listen first: to your taste, your plans, the way you want to feel.
            Then they suggest, and keep adjusting with you until the look is yours. We want to make that experience
            available to anyone with a phone, for the everyday questions as much as the big occasions.
          </p>

          <h2>What we believe</h2>
          <ul>
            <li>
              <strong>Your taste leads.</strong> Suggestions should feel like a sharper version of you, not someone
              else&apos;s idea of what&apos;s current.
            </li>
            <li>
              <strong>Fewer, better pieces.</strong> Clothes that fit well, are well made and work together get worn.
              That&apos;s what we want to help you find.
            </li>
            <li>
              <strong>Clear about how it works.</strong> We explain how suggestions are generated, what data the app uses,
              and how we&apos;ll earn money. Read <Link href="/how-it-works">how it works</Link> and our{" "}
              <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
            </li>
          </ul>

          <h2>Where we are today</h2>
          <p>
            {siteConfig.appName} is in development for iOS. It isn&apos;t in the App Store yet, and we&apos;re not taking
            pre-orders or payments of any kind. If you&apos;d like to try it when it&apos;s ready,{" "}
            <Link href="/#waitlist">join the waitlist</Link>. In the meantime, our <Link href="/guides">style guides</Link>{" "}
            share the thinking behind the app.
          </p>

          <h2>Say hello</h2>
          <p>
            Questions, ideas or feedback are welcome at{" "}
            <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
          </p>
        </div>
        <div className="space-y-6">
          <Moodboard
            title="Your taste leads"
            palette={["#4a2f3f", "#f1ddd3", "#eadfcb", "#1f1a17"]}
            tiles={[
              { kind: "coat", fill: "#4a2f3f", accent: "#f1ddd3" },
              { kind: "skirt", fill: "#f1ddd3", accent: "#4a2f3f" },
              { kind: "tee", fill: "#f6efe6" },
              { kind: "boot", fill: "#1f1a17", accent: "#4a2f3f" },
              { kind: "scarf", fill: "#eadfcb", accent: "#4a2f3f" },
            ]}
            words={["Considered", "Personal", "Easy to wear"]}
          />
        </div>
      </div>
    </>
  );
}
