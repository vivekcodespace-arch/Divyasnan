"use client";

import Link from "next/link";
import Image from "next/image";
import { useT } from "./language-context";
import { Section } from "./section";
import { CertificatePreview } from "./certificate-preview";

const pillars = [
  { titleKey: "about.pillar.respect.title", bodyKey: "about.pillar.respect.body", icon: "🪔" },
  { titleKey: "about.pillar.authenticity.title", bodyKey: "about.pillar.authenticity.body", icon: "🛕" },
  { titleKey: "about.pillar.privacy.title", bodyKey: "about.pillar.privacy.body", icon: "🔒" },
] as const;

export function AboutPage() {
  const t = useT();
  return (
    <>
      <header className="relative overflow-hidden bg-warm-paper">
        <Image
          src="/assets/motif-lotus.svg"
          alt=""
          width={200}
          height={140}
          className="pointer-events-none absolute -left-10 bottom-0 opacity-30"
        />
        <Image
          src="/assets/motif-lotus.svg"
          alt=""
          width={200}
          height={140}
          className="pointer-events-none absolute -right-10 top-4 opacity-30 -scale-x-100"
        />
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="tag mb-3">{t("about.kicker")}</p>
          <h1 className="font-serif-display text-4xl text-maroon-deep sm:text-5xl">
            {t("about.title")}
          </h1>
          <p className="font-hindi mt-1 text-lg text-maroon/80">हमारा वचन</p>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">{t("about.p1")}</p>
        </div>
      </header>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.titleKey} className="card flex flex-col p-7">
              <span aria-hidden className="text-3xl">{p.icon}</span>
              <h2 className="mt-3 font-serif-display text-2xl text-maroon">{t(p.titleKey)}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">{t(p.bodyKey)}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="paper" title="What you receive" titleHi="आपको क्या प्राप्त होगा" align="center">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <ul className="space-y-4">
              {[
                "A continuous, unedited HD video of the snan, with geo-tag and timestamp.",
                "Photographs from before, during and after the snan.",
                "A personalised Divya Snan Certificate (digital and, on Aarti/Sampurna tiers, printed).",
                "A short prayer recital recording with the devotee's name and gotra.",
                "On Sampurna Seva: sealed gangajal in a brass kalash + prasad + raksha-sutra by courier.",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold/20 text-gold">
                    <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 11l4 4 8-9" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-ink/85">{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <CertificatePreview />
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-3xl border border-gold/30 bg-[#FFFBF0] p-8 text-center shadow-soft">
          <p className="font-hindi text-lg text-maroon/80">|| हर हर गंगे ||</p>
          <h3 className="mt-2 font-serif-display text-2xl text-maroon-deep">
            Ready to begin your sankalp?
          </h3>
          <p className="mt-2 text-ink/70">Most devotees receive their video within 48 hours.</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link href="/book" className="btn btn-primary">{t("hero.cta.primary")}</Link>
            <Link href="/pricing" className="btn btn-secondary">{t("nav.pricing")}</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
