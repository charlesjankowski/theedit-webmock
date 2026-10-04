import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";
import { operatorName, siteConfig } from "@/site.config";

export const metadata = pageMetadata({
  title: "Terms of use",
  description: "The terms that apply when you use the YourEdit website and join the waitlist.",
  path: "/terms",
});

export default function Terms() {
  const email = siteConfig.contactEmail;
  return (
    <LegalPage
      title="Terms of use"
      intro={`These terms apply to your use of ${siteConfig.domain}, operated by ${operatorName} ("we", "us"). By using the site, you agree to them.`}
    >
      <h2>About this site</h2>
      <p>
        This website provides information about {siteConfig.appName}, an iOS app in development, along with original style
        guides and a waitlist. Separate terms will apply to the app when it launches.
      </p>

      <h2>Using the site</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the site in a way that breaks any law or infringes anyone&apos;s rights;</li>
        <li>submit someone else&apos;s email address to the waitlist without their permission;</li>
        <li>try to disrupt, overload or gain unauthorized access to the site or its systems; or</li>
        <li>use automated means to scrape or copy the site&apos;s content in bulk.</li>
      </ul>

      <h2>Our content</h2>
      <p>
        The text, illustrations, interface designs and other content on this site were created for {siteConfig.appName}{" "}
        and are owned by us or used with permission. You&apos;re welcome to read, share links to, and quote short excerpts
        with attribution. Please don&apos;t republish whole articles or illustrations without asking.
      </p>
      <p>
        App screens shown on this site are illustrative. Brand names such as &ldquo;Brand A&rdquo; are fictional
        placeholders, and the final app may look and work differently.
      </p>

      <h2>Style guidance is general information</h2>
      <p>
        Our guides and suggestions are general style information, offered in good faith. They aren&apos;t professional
        advice for your specific circumstances, and decisions about what to wear or buy are yours.
      </p>

      <h2>The waitlist</h2>
      <p>
        Joining the waitlist is free and doesn&apos;t commit you to anything. It also doesn&apos;t guarantee access, a
        launch date, or particular features. Our <Link href="/privacy">privacy policy</Link> explains how we handle your
        email.
      </p>

      <h2>Buying through the app</h2>
      <p>
        When the app launches, you&apos;ll be able to buy pieces from retailers within {siteConfig.appName}. The app&apos;s
        own terms will set out who sells each item and how payment, delivery and returns work. Nothing can be bought
        through this website.
      </p>

      <h2>Links to other sites</h2>
      <p>
        The site may link to other websites, including retailers in the future. We don&apos;t control those sites and
        aren&apos;t responsible for their content, products or policies. Purchases you make on a retailer&apos;s
        site are between you and that retailer. Our <Link href="/affiliate-disclosure">affiliate disclosure</Link>{" "}
        explains how such links may work.
      </p>

      <h2>No warranties</h2>
      <p>
        The site is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. To the extent the law allows, we make no
        warranties of any kind about the site or its content, including that it will be uninterrupted, error-free or
        accurate in every detail.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent the law allows, we aren&apos;t liable for any indirect, incidental or consequential loss arising from
        your use of the site. Nothing in these terms limits liability that can&apos;t be limited by law.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. We&apos;ll post the new version here and update the date at the top.
        Continuing to use the site after a change means you accept the updated terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Email <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </LegalPage>
  );
}
