"use client";

import Link from "next/link";
import Image from "next/image";
import { useT } from "./language-context";
import { Section } from "./section";
import { TIERS } from "@/lib/catalog";
import type { DictKey } from "@/lib/i18n";

const comparisonRows: { labelEn: string; labelHi: string; values: [boolean, boolean, boolean] }[] = [
  { labelEn: "Respectful photo-snan", labelHi: "श्रद्धापूर्वक फोटो-स्नान", values: [true, true, true] },
  { labelEn: "Short prayer with name & gotra", labelHi: "नाम-गोत्र सहित मंत्रोच्चार", values: [true, true, true] },
  { labelEn: "Photo proof", labelHi: "फोटो प्रमाण", values: [true, true, true] },
  { labelEn: "Geo-tagged HD video", labelHi: "स्थान-अंकित HD वीडियो", values: [false, true, true] },
  { labelEn: "Sandhya Ganga aarti on your behalf", labelHi: "संध्या गंगा आरती", values: [false, true, true] },
  { labelEn: "Printed certificate by post", labelHi: "मुद्रित प्रमाणपत्र", values: [false, true, true] },
  { labelEn: "Sealed gangajal kalash to your home", labelHi: "घर तक मुहरबंद गंगाजल", values: [false, false, true] },
  { labelEn: "Prasad & raksha-sutra", labelHi: "प्रसाद व रक्षासूत्र", values: [false, false, true] },
  { labelEn: "Priority next-morning snan", labelHi: "अगले प्रातः प्राथमिकता स्नान", values: [false, false, true] },
];

export function PricingPage() {
  const t = useT();
  return (
    <>
      <header className="bg-warm-paper">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="tag mb-3">{t("nav.pricing")}</p>
          <h1 className="font-serif-display text-4xl text-maroon-deep sm:text-5xl">
            {t("pricing.title")}
          </h1>
          <p className="font-hindi mt-1 text-lg text-maroon/80">सेवाएँ — अपने संकल्प अनुसार</p>
          <p className="mt-4 text-ink/75">{t("pricing.sub")}</p>
        </div>
      </header>

      <Section align="center">
        <div className="grid gap-6 md:grid-cols-3">
          {TIERS.map((tier) => (
            <article
              key={tier.id}
              className={
                "card relative flex flex-col p-7 " +
                (tier.highlighted ? "ring-2 ring-gold/70 shadow-card" : "")
              }
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-maroon-deep shadow-soft">
                  {t("pricing.popular")}
                </span>
              )}
              <h2 className="font-serif-display text-2xl text-maroon">{t(tier.nameKey)}</h2>
              <p className="text-xs uppercase tracking-widest text-ink/55">{t(tier.taglineKey)}</p>
              <p className="mt-5 font-serif-display text-4xl text-maroon-deep">{t(tier.priceKey)}</p>
              <p className="text-xs text-ink/55">per devotee · dakshina-inclusive</p>
              <ul className="mt-6 space-y-2 text-sm">
                {tier.featureKeys.map((f) => (
                  <li key={f as DictKey} className="flex items-start gap-2">
                    <svg viewBox="0 0 20 20" className="mt-1 h-3.5 w-3.5 shrink-0 text-saffron" fill="currentColor">
                      <path d="M7.7 13.3 4.4 10l-1.4 1.4 4.7 4.7 10-10-1.4-1.4z" />
                    </svg>
                    <span className="text-ink/80">{t(f)}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/book?tier=${tier.id}`}
                className={"btn mt-7 " + (tier.highlighted ? "btn-primary" : "btn-secondary")}
              >
                {t("pricing.choose")}
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-ink/60">{t("pricing.note")}</p>
      </Section>

      <Section
        variant="paper"
        title="Compare what's included"
        titleHi="सेवाओं की तुलना"
      >
        <div className="overflow-hidden rounded-2xl border border-gold/30 bg-[#FFFBF0] shadow-soft">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-maroon/5 text-maroon-deep">
                  <th className="px-4 py-3 text-left font-semibold">Included</th>
                  {TIERS.map((t2) => (
                    <th key={t2.id} className="px-4 py-3 text-center font-semibold">
                      {t(t2.nameKey)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.labelEn} className="border-t border-gold/20">
                    <td className="px-4 py-3 align-top">
                      <p className="text-ink/90">{row.labelEn}</p>
                      <p className="font-hindi text-xs text-ink/55">{row.labelHi}</p>
                    </td>
                    {row.values.map((v, i) => (
                      <td key={i} className="px-4 py-3 text-center">
                        {v ? (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                            ✓
                          </span>
                        ) : (
                          <span className="text-ink/30">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-maroon-deep via-maroon to-saffron p-8 text-center text-cream relative overflow-hidden">
          <Image
            src="/assets/motif-lotus.svg"
            alt=""
            width={160}
            height={100}
            className="pointer-events-none absolute -left-6 -bottom-6 opacity-30"
          />
          <Image
            src="/assets/motif-lotus.svg"
            alt=""
            width={160}
            height={100}
            className="pointer-events-none absolute -right-6 -top-6 opacity-30 -scale-x-100"
          />
          <h3 className="font-serif-display text-2xl">Need help choosing?</h3>
          <p className="mt-2 text-cream/85 text-sm">
            Speak with one of our purohits on WhatsApp — we will help you select the right seva
            for your sankalp and tithi.
          </p>
          <Link href="/contact" className="btn btn-primary mt-5">
            {t("nav.contact")}
          </Link>
        </div>
      </Section>
    </>
  );
}
