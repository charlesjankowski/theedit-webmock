export function PageHeader({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: React.ReactNode }) {
  return (
    <header className="mx-auto max-w-3xl px-5 pb-8 pt-14 md:pt-20">
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</p>}
      <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{title}</h1>
      {intro && <div className="mt-5 text-lg leading-relaxed text-muted">{intro}</div>}
    </header>
  );
}
