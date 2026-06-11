"use client";

import Link from "next/link";
import Image from "next/image";
import { useT } from "../language-context";

export function CtaBand() {
  const t = useT();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-maroon-deep via-maroon to-saffron text-cream">
      <Image
        src="/assets/motif-lotus.svg"
        alt=""
        width={240}
        height={160}
        className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 opacity-25"
      />
      <Image
        src="/assets/motif-lotus.svg"
        alt=""
        width={240}
        height={160}
        className="pointer-events-none absolute -right-12 top-1/2 -translate-y-1/2 opacity-25 -scale-x-100"
      />
      <div className="relative mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="font-hindi text-lg text-cream/90">|| गंगा माता की जय ||</p>
        <h2 className="mt-3 font-serif-display text-3xl sm:text-4xl">
          Begin your sankalp today.
        </h2>
        <p className="font-hindi mt-1 text-lg text-cream/90">अपना संकल्प आज ही प्रारंभ करें।</p>
        <p className="mx-auto mt-4 max-w-xl text-cream/85">
          Within 48 hours, you will hold the proof of a holy dip performed in your name on
          the banks of the Ganga or the Triveni Sangam.
        </p>
        <Link href="/book" className="btn btn-primary mt-8">
          {t("hero.cta.primary")}
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10h10m0 0l-4-4m4 4l-4 4" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
