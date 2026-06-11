"use client";

import Link from "next/link";
import Image from "next/image";
import { useT } from "./language-context";

export function SiteFooter() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-gold/25 bg-[#FFFBF0]">
      <div className="ripple-divider" aria-hidden />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
        <div className="space-y-3 md:col-span-1">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image src="/assets/logo-mark.svg" alt="" width={36} height={36} />
            <span className="font-serif-display text-xl text-maroon">Divyasnan</span>
          </Link>
          <p className="text-sm text-ink/75 max-w-xs">
            <span className="block">{t("footer.tagline")}</span>
            <span className="block font-hindi mt-1">घर बैठे, गंगा स्नान।</span>
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-maroon/80 mb-3">
            {t("footer.col.seva")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/pricing" className="hover:text-maroon">{t("pricing.tier.snan.name")}</Link></li>
            <li><Link href="/pricing" className="hover:text-maroon">{t("pricing.tier.aarti.name")}</Link></li>
            <li><Link href="/pricing" className="hover:text-maroon">{t("pricing.tier.sampurna.name")}</Link></li>
            <li><Link href="/book" className="hover:text-maroon">{t("nav.book")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-maroon/80 mb-3">
            {t("footer.col.company")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-maroon">{t("nav.about")}</Link></li>
            <li><Link href="/contact" className="hover:text-maroon">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-maroon/80 mb-3">
            {t("footer.col.support")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:text-maroon">{t("footer.privacy")}</Link></li>
            <li><Link href="/terms" className="hover:text-maroon">{t("footer.terms")}</Link></li>
            <li><Link href="/refund" className="hover:text-maroon">{t("footer.refund")}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/15">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-5 text-xs text-ink/60 sm:flex-row sm:items-center">
          <p>© {year} Divyasnan · दिव्यस्नान. {t("footer.rights")}</p>
          <p className="font-hindi">|| गंगे च यमुने चैव गोदावरि सरस्वति, नर्मदे सिन्धु कावेरि जलेऽस्मिन् सन्निधिं कुरु ||</p>
        </div>
      </div>
    </footer>
  );
}
