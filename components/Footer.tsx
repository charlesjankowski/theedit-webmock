import Link from "next/link";
import { Logo } from "@/components/Logo";
import { legalNav, mainNav } from "@/components/nav";
import { operatorName, siteConfig } from "@/site.config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {siteConfig.tagline} A virtual stylist for iOS, currently in development.
          </p>
          <p className="mt-4 text-sm">
            <a href={`mailto:${siteConfig.contactEmail}`} className="underline underline-offset-4 hover:text-accent">
              {siteConfig.contactEmail}
            </a>
          </p>
        </div>
        <nav aria-label="Site">
          <h2 className="text-sm font-semibold">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-ink">Home</Link>
            </li>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ink">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Legal">
          <h2 className="text-sm font-semibold">Legal</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ink">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl space-y-2 px-5 py-6 text-xs leading-relaxed text-muted">
          <p>
            <strong className="font-semibold text-ink">Disclosure:</strong>{" "}
            {siteConfig.affiliateLinksActive
              ? "Some links on this site are affiliate links. If you buy through them, we may earn a commission at no extra cost to you."
              : "We plan to use affiliate links in the future and will clearly label them. There are no affiliate links on this site today."}{" "}
            <Link href="/affiliate-disclosure" className="underline underline-offset-2 hover:text-ink">
              Read our affiliate disclosure
            </Link>
            .
          </p>
          <p>{siteConfig.notAffiliatedStatement}</p>
          <p>
            © {year} {operatorName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
