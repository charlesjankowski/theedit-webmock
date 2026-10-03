import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { operatorName, siteConfig, siteUrl } from "@/site.config";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.appName}: ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.appName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.appName,
  robots: { index: true, follow: true },
  ...verificationMeta(siteConfig.verificationMetaTag),
};

/**
 * Accepts either a full tag pasted from the network dashboard
 * (`<meta name="x" content="y" />`) or a bare content value.
 */
function verificationMeta(raw: string): Pick<Metadata, "other"> {
  if (!raw.trim()) return {};
  const name = raw.match(/name=["']([^"']+)["']/)?.[1];
  const content = raw.match(/content=["']([^"']+)["']/)?.[1];
  if (name && content) return { other: { [name]: content } };
  return { other: { verification: raw.trim() } };
}

export const viewport: Viewport = {
  themeColor: "#faf6f0",
  width: "device-width",
  initialScale: 1,
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: operatorName,
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  email: siteConfig.contactEmail,
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-cream text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <JsonLd data={organizationLd} />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
