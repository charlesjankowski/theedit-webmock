"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/components/nav";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="-mr-2 rounded-md p-2 text-ink"
      >
        {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
      </button>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="absolute inset-x-0 top-16 border-b border-line bg-cream px-5 pb-6 pt-2 shadow-sm"
        >
          <ul className="flex flex-col gap-1 text-lg">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={close} className="block rounded-md py-2.5">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/#waitlist"
                onClick={close}
                className="inline-block rounded-full bg-ink px-5 py-2.5 font-medium text-cream"
              >
                Join the waitlist
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
