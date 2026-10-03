import type { Metadata } from "next";
import { siteConfig, siteUrl } from "@/site.config";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  /** Override the default site OG image (e.g. per-guide images). */
  ogImage?: string;
  type?: "website" | "article";
};

export function pageMetadata({ title, description, path, ogImage, type = "website" }: PageMeta): Metadata {
  const url = `${siteUrl}${path}`;
  const image = ogImage ?? "/opengraph-image";
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.appName}`,
      description,
      url,
      siteName: siteConfig.appName,
      type,
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: `${siteConfig.appName}: ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.appName}`,
      description,
      images: [image],
    },
  };
}
