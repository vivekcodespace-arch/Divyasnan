"use client";

import Link from "next/link";
import { useT } from "../language-context";
import { Section } from "../section";
import { TIERS } from "@/lib/catalog";

export function PricingTeaser() {
  const t = useT();
  return (
    <Section
      id="pricing"
      title={t("pricing.title")}
      titleHi="सेवाएँ"
      sub={t("pricing.sub")}
      variant="paper"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {TIERS.map((tier) => (
          <article
            key={tier.id}
            className={
              "card relative flex flex-col p-7 " +
              (tier.highlighted
                ? "ring-2 ring-gold/70 shadow-card"
                : "")
            }
          >
            {tier.highlighted ? (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-maroon-deep shadow-soft">
                {t("pricing.popular")}
              </span>
            ) : null}

            <div className="flex items-baseline justify-between">
              <h3 className="font-serif-display text-2xl text-maroon">
                {t(tier.nameKey)}
              </h3>
            </div>
            <p className="font-hindi text-sm text-maroon/70 -mt-0.5">
              {tier.id === "snan" && "स्नान"}
              {tier.id === "aarti" && "स्नान + आरती"}
              {tier.id === "sampurna" && "सम्पूर्ण सेवा"}
            </p>
            <p className="mt-1 text-xs uppercase tracking-widest text-ink/55">
              {t(tier.taglineKey)}
            </p>

            <p className="mt-5 font-serif-display text-4xl text-maroon-deep">
              {t(tier.priceKey)}
            </p>
            <p className="text-xs text-ink/55">per devotee · dakshina-inclusive</p>

            <ul className="mt-6 space-y-3 text-sm">
              {tier.featureKeys.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-saffron" />
                  <span className="text-ink/80">{t(f)}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/book?tier=${tier.id}`}
              className={
                "btn mt-7 " + (tier.highlighted ? "btn-primary" : "btn-secondary")
              }
            >
              {t("pricing.choose")}
            </Link>
          </article>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-ink/60">{t("pricing.note")}</p>
    </Section>
  );
}
