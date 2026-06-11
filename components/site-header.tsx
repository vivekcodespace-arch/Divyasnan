"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useT } from "./language-context";
import { LanguageToggle } from "./language-toggle";

const navItems = [
  { href: "/", key: "nav.home" },
  { href: "/pricing", key: "nav.pricing" },
  { href: "/about", key: "nav.about" },
  { href: "/contact", key: "nav.contact" },
] as const;

export function SiteHeader() {
  const t = useT();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-cream/85 backdrop-blur supports-[backdrop-filter]:bg-cream/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="Divyasnan home">
          <Image
            src="/assets/logo-mark.svg"
            alt=""
            width={40}
            height={40}
            priority
            className="h-9 w-9"
          />
          <span className="hidden sm:inline-flex flex-col leading-tight">
            <span className="font-serif-display text-xl text-maroon">Divyasnan</span>
            <span className="font-hindi text-[11px] text-maroon/70 -mt-0.5">दिव्यस्नान</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-ink/80 hover:text-maroon hover:bg-maroon/5 transition-colors"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="ml-auto md:ml-0 flex items-center gap-2">
          <LanguageToggle />
          <Link href="/book" className="btn btn-primary hidden sm:inline-flex !py-2 !px-4 text-sm">
            {t("nav.book")}
          </Link>
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-maroon/15 text-maroon"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gold/20 bg-cream">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-maroon/5"
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-2 !text-sm"
            >
              {t("nav.book")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
