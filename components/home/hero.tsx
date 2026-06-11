"use client";

import Link from "next/link";
import Image from "next/image";
import { useT } from "../language-context";

export function Hero() {
  const t = useT();
  return (
    <section className="relative overflow-hidden bg-warm-paper">
      {/* decorative top ripple */}
      <div className="absolute inset-x-0 top-0 h-24 opacity-40">
        <div className="ripple-divider" />
      </div>

      {/* soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(242,105,30,0.16), rgba(242,105,30,0))",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(14,110,134,0.12), rgba(14,110,134,0))",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div className="flex flex-col items-start">
          <div className="mb-6 hidden sm:block">
            <Image
              src="/assets/logo-horizontal.svg"
              alt="Divyasnan"
              width={260}
              height={70}
              priority
              className="h-14 w-auto"
            />
          </div>
          <p className="tag mb-5">{t("hero.kicker")}</p>
          <h1 className="font-serif-display text-4xl leading-[1.05] text-maroon-deep sm:text-5xl md:text-6xl">
            <span className="font-hindi block text-3xl text-maroon mb-3 sm:text-4xl">
              घर बैठे, गंगा स्नान।
            </span>
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">
            {t("hero.sub")}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/book" className="btn btn-primary">
              {t("hero.cta.primary")}
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10h10m0 0l-4-4m4 4l-4 4" />
              </svg>
            </Link>
            <Link href="#how" className="btn btn-secondary">
              {t("hero.cta.secondary")}
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/70">
            <li className="inline-flex items-center gap-2">
              <Dot /> {t("hero.trust.video")}
            </li>
            <li className="inline-flex items-center gap-2">
              <Dot /> {t("hero.trust.geo")}
            </li>
            <li className="inline-flex items-center gap-2">
              <Dot /> {t("hero.trust.respect")}
            </li>
          </ul>
        </div>

        {/* Visual: hero badge + sample certificate stacked */}
        <div className="relative flex items-center justify-center">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 m-auto h-[360px] w-[360px] rounded-full opacity-50"
            style={{
              background:
                "radial-gradient(closest-side, rgba(201,162,39,0.20), rgba(201,162,39,0))",
            }}
          />
          <div className="relative">
            <div className="absolute -left-10 -top-6 rotate-[-6deg] hidden sm:block">
              <MiniCert />
            </div>
            <div className="relative rounded-3xl border border-gold/30 bg-cream p-6 shadow-card">
              <Image
                src="/assets/logo-badge.svg"
                alt=""
                width={280}
                height={280}
                className="h-64 w-64"
                priority
              />
              <div className="mt-4 text-center">
                <p className="font-serif-display text-xl text-maroon">Sankalp received</p>
                <p className="font-hindi text-sm text-maroon/70">संकल्प स्वीकृत</p>
                <p className="mt-2 inline-flex items-center gap-2 text-xs text-ink/60">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Geo-tagged · 26.0 Ganga · 04:42 IST
                </p>
              </div>
            </div>
            <div className="absolute -right-8 -bottom-6 rotate-[6deg] hidden sm:block">
              <MiniDiya />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return (
    <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden>
      <circle cx="6" cy="6" r="3" fill="#C9A227" />
      <circle cx="6" cy="6" r="5" fill="none" stroke="#C9A227" strokeOpacity="0.4" />
    </svg>
  );
}

function MiniCert() {
  return (
    <div className="w-44 rotate-1 rounded-xl border border-gold/40 bg-[#FFFBF0] p-3 shadow-soft">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-saffron-soft to-saffron" />
        <p className="font-serif-display text-xs text-maroon">Divya Snan Certificate</p>
      </div>
      <div className="mt-2 h-1 w-12 rounded bg-gold/60" />
      <p className="mt-2 text-[10px] leading-snug text-ink/70">
        Snan respectfully performed on behalf of Shri ____
      </p>
      <p className="mt-1 font-mono text-[9px] text-ink/50">#DS-2026-0042</p>
    </div>
  );
}

function MiniDiya() {
  return (
    <div className="rounded-2xl border border-gold/40 bg-[#FFFBF0] p-3 shadow-soft">
      <Image src="/assets/motif-diya.svg" alt="" width={56} height={70} />
    </div>
  );
}
