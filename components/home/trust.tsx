"use client";

import { useT } from "../language-context";
import { Section } from "../section";
import { CertificatePreview } from "../certificate-preview";

const points = [
  { titleKey: "trust.point.video.title", bodyKey: "trust.point.video.body" },
  { titleKey: "trust.point.geo.title", bodyKey: "trust.point.geo.body" },
  { titleKey: "trust.point.priests.title", bodyKey: "trust.point.priests.body" },
  { titleKey: "trust.point.privacy.title", bodyKey: "trust.point.privacy.body" },
] as const;

export function Trust() {
  const t = useT();
  return (
    <Section id="trust" title={t("trust.title")} sub={t("trust.sub")}>
      <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] items-start">
        <ul className="grid gap-4 sm:grid-cols-2">
          {points.map((p) => (
            <li key={p.titleKey} className="card p-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 11l4 4 8-9" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-serif-display text-lg text-maroon">{t(p.titleKey)}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/75">{t(p.bodyKey)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center">
          <CertificatePreview />
          <p className="mt-3 text-xs text-ink/55">A sample of the certificate you receive.</p>
        </div>
      </div>
    </Section>
  );
}
