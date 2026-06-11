"use client";

import { useT } from "../language-context";
import { Section } from "../section";

const steps = [
  { titleKey: "how.step1.title", bodyKey: "how.step1.body", icon: UploadIcon },
  { titleKey: "how.step2.title", bodyKey: "how.step2.body", icon: RiverIcon },
  { titleKey: "how.step3.title", bodyKey: "how.step3.body", icon: SnanIcon },
  { titleKey: "how.step4.title", bodyKey: "how.step4.body", icon: CertIcon },
] as const;

export function HowItWorks() {
  const t = useT();
  return (
    <Section
      id="how"
      kicker={t("how.title")}
      title={t("how.title")}
      titleHi="विधि — चार सरल चरण"
      sub={t("how.sub")}
    >
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <li key={s.titleKey} className="card relative flex flex-col p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="step-num">{i + 1}</span>
                <Icon />
              </div>
              <h3 className="font-serif-display text-xl text-maroon">{t(s.titleKey)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{t(s.bodyKey)}</p>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="hidden lg:block absolute right-[-14px] top-1/2 -translate-y-1/2 text-gold/60"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14m0 0l-5-5m5 5l-5 5" strokeLinecap="round" />
                  </svg>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

function UploadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-teal" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 16V4m0 0l-4 4m4-4l4 4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" strokeLinecap="round" />
    </svg>
  );
}
function RiverIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-teal" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 8c3 2 6-2 9 0s6 2 9 0M3 14c3 2 6-2 9 0s6 2 9 0M3 20c3 2 6-2 9 0s6 2 9 0" strokeLinecap="round" />
    </svg>
  );
}
function SnanIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-saffron" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3c0 0-5 6-5 10a5 5 0 0010 0c0-4-5-10-5-10z" strokeLinejoin="round" />
      <path d="M9 13c0 1.5 1.3 3 3 3" strokeLinecap="round" />
    </svg>
  );
}
function CertIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="14" rx="2" />
      <path d="M8 9h8M8 12h5" strokeLinecap="round" />
      <circle cx="12" cy="19" r="2" />
    </svg>
  );
}
