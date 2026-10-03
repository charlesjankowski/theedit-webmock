import Link from "next/link";
import { Garment } from "@/components/illustrations/Garment";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-24 text-center">
      <Garment kind="scarf" fill="#eadfcb" accent="#8a3b2a" className="h-28 w-auto" />
      <h1 className="mt-6 font-serif text-4xl font-semibold">This page isn&apos;t in the edit</h1>
      <p className="mt-3 text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className="rounded-full bg-ink px-5 py-2.5 font-medium text-cream hover:bg-accent">
          Back to home
        </Link>
        <Link href="/guides" className="rounded-full border border-ink px-5 py-2.5 font-medium hover:bg-paper">
          Read the style guides
        </Link>
      </div>
    </div>
  );
}
