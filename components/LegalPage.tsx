import { PageHeader } from "@/components/PageHeader";
import { siteConfig } from "@/site.config";

const dateFmt = new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" });

export function LegalPage({ title, intro, children }: { title: string; intro?: string; children: React.ReactNode }) {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={title}
        intro={
          <>
            {intro && <p>{intro}</p>}
            <p className="mt-3 text-sm">
              Last updated <time dateTime={siteConfig.legalUpdated}>{dateFmt.format(new Date(siteConfig.legalUpdated))}</time>
            </p>
          </>
        }
      />
      <div className="prose-edit mx-auto max-w-3xl px-5">{children}</div>
    </>
  );
}
