import Link from "next/link";
import { Mail, MessageSquareText, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/site.config";

export const metadata = pageMetadata({
  title: "Contact",
  description: `Get in touch with the YourEdit team at ${siteConfig.contactEmail} with questions, feedback, partnership or privacy requests.`,
  path: "/contact",
});

const reasons = [
  { icon: MessageSquareText, title: "Questions and feedback", body: "About the app, the waitlist or our style guides." },
  { icon: Mail, title: "Partnerships and press", body: "Retailers, publishers and anyone interested in working together." },
  {
    icon: ShieldCheck,
    title: "Privacy requests",
    body: "Ask what we hold about you, or have your waitlist email deleted.",
  },
];

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        intro="The best way to reach the YourEdit team is by email."
      />
      <div className="mx-auto max-w-3xl px-5">
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-paper p-6 transition-shadow hover:shadow-md"
        >
          <span>
            <span className="block text-sm text-muted">Email</span>
            <span className="mt-1 block font-serif text-2xl font-semibold sm:text-3xl">{siteConfig.contactEmail}</span>
          </span>
          <Mail className="h-7 w-7 shrink-0 text-accent" aria-hidden="true" />
        </a>

        <h2 className="mt-14 font-serif text-2xl font-semibold">What to write to us about</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {reasons.map(({ icon: Icon, title, body }) => (
            <li key={title} className="rounded-2xl border border-line bg-paper p-5">
              <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-muted">
          Looking to try the app? It&apos;s still in development for iOS. <Link href="/#waitlist" className="text-accent underline underline-offset-4">Join the waitlist</Link>{" "}
          and we&apos;ll let you know when it&apos;s ready.
        </p>
      </div>
    </>
  );
}
