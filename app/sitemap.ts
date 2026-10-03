import type { MetadataRoute } from "next";
import { guides } from "@/content/guides";
import { siteConfig, siteUrl } from "@/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/how-it-works", "/guides", "/about", "/contact", "/privacy", "/terms", "/affiliate-disclosure"];
  return [
    ...pages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: siteConfig.legalUpdated,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...guides.map((g) => ({
      url: `${siteUrl}/guides/${g.slug}`,
      lastModified: g.updated ?? g.published,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
