"use client";

import { useT } from "../language-context";
import { Section } from "../section";

const items = [
  { bodyKey: "test.t1.body", nameKey: "test.t1.name" },
  { bodyKey: "test.t2.body", nameKey: "test.t2.name" },
  { bodyKey: "test.t3.body", nameKey: "test.t3.name" },
] as const;

export function Testimonials() {
  const t = useT();
  return (
    <Section title={t("test.title")} titleHi="संकल्पकर्ताओं के अनुभव">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <figure key={it.nameKey} className="card flex flex-col p-6">
            <svg
              viewBox="0 0 24 24"
              className="mb-3 h-6 w-6 text-gold"
              fill="currentColor"
              aria-hidden
            >
              <path d="M7 7c-2 0-3 1-3 3s1 3 3 3v4H4v-4c0-3 1-6 3-6V7zm10 0c-2 0-3 1-3 3s1 3 3 3v4h-3v-4c0-3 1-6 3-6V7z" />
            </svg>
            <blockquote className="flex-1 text-sm leading-relaxed text-ink/85">
              {t(it.bodyKey)}
            </blockquote>
            <figcaption className="mt-4 text-xs font-semibold tracking-wide text-maroon">
              — {t(it.nameKey)}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
