import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";
import { operatorName, siteConfig, suggestionsExplainer } from "@/site.config";

export const metadata = pageMetadata({
  title: "Privacy policy",
  description:
    "How YourEdit handles waitlist emails, website analytics, cookies and future affiliate links, and how the app's suggestions use your data.",
  path: "/privacy",
});

export default function Privacy() {
  const email = siteConfig.contactEmail;
  return (
    <LegalPage
      title="Privacy policy"
      intro={`This policy explains what information ${operatorName} ("we", "us") collects through ${siteConfig.domain}, how we use it, and the choices you have.`}
    >
      <h2>Summary</h2>
      <ul>
        <li>If you join the waitlist, we store your email address and the time you signed up. Nothing else.</li>
        <li>We use Vercel Web Analytics to count visits. It does not use cookies.</li>
        <li>We do not sell your personal information or use it for advertising.</li>
        <li>You can ask us to delete your email at any time.</li>
      </ul>

      <h2>Who we are</h2>
      <p>
        This website is operated by {operatorName}. You can contact us about anything in this policy at{" "}
        <a href={`mailto:${email}`}>{email}</a>.
      </p>

      <h2>What this policy covers</h2>
      <p>
        This policy covers the {siteConfig.appName} website. The {siteConfig.appName} iOS app is still in development.
        Before it launches, we&apos;ll update this policy (or publish a separate app privacy policy) to describe exactly
        what the app collects. The section &ldquo;How app suggestions are generated&rdquo; below explains what we can say
        today.
      </p>

      <h2>Information we collect</h2>
      <h3>Waitlist sign-ups</h3>
      <p>
        If you join the waitlist, we collect your email address and record the date and time you signed up. We use it
        only to tell you when the app is available. We won&apos;t send you marketing emails or newsletters unless you
        separately agree to receive them.
      </p>
      <p>
        To protect the form from abuse, we limit how often sign-ups can be submitted from the same network. For this we
        use a one-way hash of your IP address, held for a few minutes and then discarded. We do not store your IP address
        alongside your email.
      </p>

      <h3>Website analytics</h3>
      <p>
        We use Vercel Web Analytics to understand how many people visit the site and which pages are useful. According to
        Vercel, it does not use cookies, and it identifies visits using a hash of request information that changes daily,
        rather than tracking you across sites. We see aggregated information such as page views, referring sites, country,
        browser and device type.
      </p>

      <h3>Server logs</h3>
      <p>
        Like most websites, our hosting provider automatically processes technical information such as IP address,
        browser type and the pages requested, in order to deliver the site, keep it secure and diagnose problems.
      </p>

      <h3>Emails you send us</h3>
      <p>If you email us, we receive your email address and whatever you choose to include, and use it to reply.</p>

      <h2>Cookies</h2>
      <p>
        This website does not set cookies for analytics or advertising. If that changes, for example when affiliate links
        are introduced (see below), we&apos;ll update this policy first and ask for consent where the law requires it.
      </p>

      <h2>How app suggestions are generated</h2>
      <p>{suggestionsExplainer}</p>
      <p>
        This applies to the app once it launches. The website itself does not send anything to that provider. Before
        launch, we&apos;ll update this section with the provider&apos;s name and a full description of what is sent and how
        it&apos;s handled.
      </p>

      <h2>Affiliate links (future)</h2>
      <p>
        There are no affiliate links on this site today. In the future, some links to retailers may be affiliate links,
        which means a retailer may pay us a commission if you buy after following one. When you follow an affiliate link,
        the retailer or affiliate network may use cookies or similar technology to record that the visit came from us.
        Their handling of that data is governed by their own privacy policies. We&apos;ll label affiliate links clearly and
        update this policy before they go live. See our <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
      </p>

      <h2>Who we share information with</h2>
      <p>We use a small number of service providers to run the site, who process data on our behalf:</p>
      <ul>
        <li>
          <strong>Vercel</strong>, for website hosting and analytics.
        </li>
        <li>
          <strong>Upstash</strong>, for the database that stores waitlist emails.
        </li>
      </ul>
      <p>
        We do not sell or rent personal information, and we do not share it for cross-context behavioral advertising. We
        may disclose information if required by law or to protect our rights and users.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep waitlist emails until the app launches and we&apos;ve let you know, or until you ask us to delete yours,
        whichever comes first. If we decide not to launch, we&apos;ll delete the list.
      </p>

      <h2>Your choices and rights</h2>
      <p>
        You can ask us to access, correct or delete the personal information we hold about you by emailing{" "}
        <a href={`mailto:${email}`}>{email}</a>. Depending on where you live, you may have additional rights under laws such
        as the California Consumer Privacy Act or the EU and UK GDPR. We&apos;ll respond to requests as those laws require
        and won&apos;t treat you differently for making one.
      </p>

      <h2>Children</h2>
      <p>
        This website is not directed to children under 13, and we do not knowingly collect personal information from
        them. If you believe a child has joined the waitlist, contact us and we&apos;ll delete the information.
      </p>

      <h2>Security</h2>
      <p>
        We use reputable providers, encrypted connections (HTTPS) and access controls to protect the information we hold.
        No method of transmission or storage is completely secure, but we work to keep the data we collect minimal.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We&apos;ll post any changes on this page and update the date at the top. If we make significant changes that affect
        waitlist members, we&apos;ll let you know by email.
      </p>
    </LegalPage>
  );
}
