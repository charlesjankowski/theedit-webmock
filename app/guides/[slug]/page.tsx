import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { Moodboard } from "@/components/illustrations/Moodboard";
import { guides, getGuide } from "@/content/guides";
import { pageMetadata } from "@/lib/metadata";
import { operatorName, siteConfig, siteUrl } from "@/site.config";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    ogImage: `/guides/${guide.slug}/opengraph-image`,
    type: "article",
  });
}

const dateFmt = new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" });

export default async function GuidePage({ params }: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const { Body } = guide;
  const others = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.published,
    dateModified: guide.updated ?? guide.published,
    mainEntityOfPage: `${siteUrl}/guides/${guide.slug}`,
    image: `${siteUrl}/guides/${guide.slug}/opengraph-image`,
    author: { "@type": "Organization", name: operatorName, url: siteUrl },
    publisher: { "@type": "Organization", name: operatorName, url: siteUrl, logo: { "@type": "ImageObject", url: `${siteUrl}/icon.svg` } },
  };

  return (
    <article>
      <JsonLd data={articleLd} />
      <header className="mx-auto max-w-3xl px-5 pt-10 md:pt-14">
        <Link href="/guides" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All style guides
        </Link>
        <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-accent">{guide.category}</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{guide.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{guide.description}</p>
        <p className="mt-4 text-sm text-muted">
          By the {siteConfig.appName} team · <time dateTime={guide.published}>{dateFmt.format(new Date(guide.published))}</time>
        </p>
      </header>
      <div className="mx-auto mt-10 max-w-3xl px-5">
        <Moodboard {...guide.moodboard} />
      </div>
      <div className="prose-edit mx-auto mt-10 max-w-3xl px-5">
        <Body />
      </div>

      <aside aria-labelledby="more-guides" className="mx-auto mt-16 max-w-3xl border-t border-line px-5 pt-10">
        <h2 id="more-guides" className="font-serif text-2xl font-semibold">More style guides</h2>
        <ul className="mt-5 space-y-4">
          {others.map((g) => (
            <li key={g.slug}>
              <Link href={`/guides/${g.slug}`} className="group block">
                <span className="font-medium underline-offset-4 group-hover:underline">{g.title}</span>
                <span className="mt-0.5 block text-sm text-muted">{g.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </article>
  );
}
