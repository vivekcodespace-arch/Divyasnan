"use client";

import { useT } from "../language-context";
import { Section } from "../section";

const items = [
  { qKey: "faq.q1.q", aKey: "faq.q1.a" },
  { qKey: "faq.q2.q", aKey: "faq.q2.a" },
  { qKey: "faq.q3.q", aKey: "faq.q3.a" },
  { qKey: "faq.q4.q", aKey: "faq.q4.a" },
  { qKey: "faq.q5.q", aKey: "faq.q5.a" },
] as const;

export function FAQ() {
  const t = useT();
  return (
    <Section
      title={t("faq.title")}
      titleHi="श्रद्धा से जुड़े प्रश्न"
      variant="paper"
      align="center"
    >
      <div className="mx-auto max-w-3xl divide-y divide-gold/25 rounded-2xl border border-gold/25 bg-[#FFFBF0] shadow-soft">
        {items.map((it, i) => (
          <details key={it.qKey} className="group p-5" {...(i === 0 ? { open: true } : {})}>
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <span className="font-serif-display text-lg text-maroon-deep">
                {t(it.qKey)}
              </span>
              <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-maroon transition-transform group-open:rotate-45">
                <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" d="M10 4v12M4 10h12" />
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink/80">{t(it.aKey)}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
