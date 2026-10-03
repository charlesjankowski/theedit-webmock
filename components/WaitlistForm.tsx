"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Status = { state: "idle" } | { state: "sending" } | { state: "done" | "error"; message: string };

export function WaitlistForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const emailId = useId();
  const msgId = useId();
  const dark = tone === "dark";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.get("email"), company: form.get("company") }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; message?: string } | null;
      if (res.ok && data?.ok) {
        setStatus({ state: "done", message: data.message ?? "Thanks! You're on the list." });
      } else {
        setStatus({ state: "error", message: data?.message ?? "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ state: "error", message: "We couldn't reach the server. Check your connection and try again." });
    }
  }

  if (status.state === "done") {
    return (
      <p
        role="status"
        className={`flex items-start gap-2 rounded-xl px-4 py-3 text-[0.95rem] ${
          dark ? "bg-cream/10 text-cream" : "bg-sage/70 text-ink"
        }`}
      >
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
        {status.message}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative w-full max-w-md">
      <label htmlFor={emailId} className={`block text-sm font-medium ${dark ? "text-cream" : "text-ink"}`}>
        Email address
      </label>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
        <input
          id={emailId}
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="you@example.com"
          aria-describedby={msgId}
          aria-invalid={status.state === "error" || undefined}
          className="h-12 flex-1 rounded-full border border-line bg-paper px-5 text-ink placeholder:text-muted/80"
        />
        {/* Honeypot: hidden from people and assistive tech, tempting to bots. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label>
            Company
            <input type="text" name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <button
          type="submit"
          disabled={status.state === "sending"}
          className={`inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 font-medium transition-colors disabled:opacity-70 ${
            dark ? "bg-cream text-ink hover:bg-blush" : "bg-accent text-cream hover:bg-accent-dark"
          }`}
        >
          {status.state === "sending" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
          Join the waitlist
        </button>
      </div>
      <div id={msgId} aria-live="polite" className="mt-3 min-h-5 text-sm">
        {status.state === "error" ? (
          <p className={`flex items-center gap-1.5 ${dark ? "text-blush" : "text-accent-dark"}`}>
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            {status.message}
          </p>
        ) : (
          <p className={dark ? "text-cream/80" : "text-muted"}>
            We store only your email and the time you signed up, and use it only to tell you when the app launches. See our{" "}
            <Link href="/privacy" className={`underline underline-offset-2 ${dark ? "hover:text-cream" : "hover:text-ink"}`}>
              privacy policy
            </Link>
            .
          </p>
        )}
      </div>
    </form>
  );
}
