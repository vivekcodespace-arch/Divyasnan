"use client";

import { useT } from "../language-context";
import { Section } from "../section";
import { RIVERS } from "@/lib/catalog";

const visuals: Record<string, { gradient: string; emoji: string }> = {
  haridwar: { gradient: "from-saffron via-saffron-soft to-gold", emoji: "🪔" },
  varanasi: { gradient: "from-maroon via-saffron to-gold", emoji: "🛕" },
  prayagraj: { gradient: "from-teal via-teal-soft to-gold-soft", emoji: "🌊" },
};

export function Rivers() {
  const t = useT();
  return (
    <Section
      id="rivers"
      title={t("rivers.title")}
      titleHi="हम जिन पवित्र तटों पर सेवा करते हैं"
      sub={t("rivers.sub")}
      variant="paper"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {RIVERS.map((r) => {
          const v = visuals[r.id];
          return (
            <article key={r.id} className="card overflow-hidden">
              <div
                className={`relative h-40 bg-gradient-to-br ${v.gradient} flex items-end p-4`}
              >
                <span
                  aria-hidden
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'><path d='M0 30 Q 25 10 50 30 T 100 30 T 150 30 T 200 30' fill='none' stroke='%23FFF6E6' stroke-width='1.5' opacity='0.7'/><path d='M0 45 Q 25 25 50 45 T 100 45 T 150 45 T 200 45' fill='none' stroke='%23FFF6E6' stroke-width='1.2' opacity='0.4'/></svg>\")",
                    backgroundRepeat: "repeat-x",
                    backgroundSize: "200px 60px",
                    backgroundPosition: "center bottom",
                  }}
                />
                <span className="relative font-hindi text-cream/90 text-sm">
                  {r.id === "haridwar" && "हर हर गंगे"}
                  {r.id === "varanasi" && "हर हर महादेव"}
                  {r.id === "prayagraj" && "त्रिवेणी संगम"}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif-display text-2xl text-maroon">
                  {t(r.titleKey)}
                </h3>
                <p className="font-hindi text-sm text-maroon/70 mt-0.5">
                  {r.ghatHi}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {t(r.bodyKey)}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
