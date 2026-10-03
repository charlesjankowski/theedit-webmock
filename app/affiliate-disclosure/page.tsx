import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";
import { operatorName, siteConfig } from "@/site.config";

export const metadata = pageMetadata({
  title: "Affiliate disclosure",
  description: "How YourEdit uses, or plans to use, affiliate links to retailers, and how we label them.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosure() {
  const active = siteConfig.affiliateLinksActive;
  return (
    <LegalPage
      title="Affiliate disclosure"
      intro="We believe you should always know how we make money and when a link might earn us a commission."
    >
      <h2>{active ? "Some links may earn us a commission" : "We plan to use affiliate links"}</h2>
      {active ? (
        <p>
          Some links on this site and in the {siteConfig.appName} app are affiliate links. If you follow one and make a
          purchase from the retailer, we may earn a commission. This doesn&apos;t change the price you pay.
        </p>
      ) : (
        <p>
          There are no affiliate links on this site today. In the future, we plan to use affiliate links when{" "}
          {siteConfig.appName} points you to a retailer. If you follow one of those links and make a purchase, we may earn
          a commission at no extra cost to you. We will clearly label affiliate links when we introduce them, and we&apos;ll
          update this page first.
        </p>
      )}

      <h2>How affiliate links work</h2>
      <p>
        An affiliate link contains a tracking code that tells the retailer, usually through an affiliate network, that you
        arrived from {siteConfig.appName}. If you buy something within the retailer&apos;s tracking window, the retailer
        pays a commission. Tracking typically relies on cookies or similar technology set by the retailer or network. See
        our <Link href="/privacy">privacy policy</Link> for more.
      </p>

      <h2>Our commitments</h2>
      <ul>
        <li>
          <strong>Suggestions come first.</strong> Pieces are suggested for your taste and your occasion. Whether a
          retailer has an affiliate program won&apos;t be the reason we show you something.
        </li>
        <li>
          <strong>Clear labels.</strong> Affiliate links will be identified as such, close to the link itself.
        </li>
        <li>
          <strong>Independence.</strong> {siteConfig.notAffiliatedStatement}
        </li>
      </ul>

      <h2>Why we disclose this</h2>
      <p>
        The U.S. Federal Trade Commission asks publishers to disclose material connections with the businesses they link
        to. Beyond that, it&apos;s simply the honest thing to do.
      </p>

      <h2>Questions</h2>
      <p>
        If anything here is unclear, email {operatorName} at{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
