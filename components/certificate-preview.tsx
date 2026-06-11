"use client";

import Image from "next/image";
import { useLang } from "./language-context";

type Props = {
  devoteeName?: string;
  gotra?: string;
  river?: string;
  date?: string;
  orderId?: string;
  className?: string;
};

export function CertificatePreview({
  devoteeName = "Shri / Smt. ___________",
  gotra,
  river = "Ganga, Har Ki Pauri · Haridwar",
  date,
  orderId,
  className = "",
}: Props) {
  const { lang } = useLang();
  const today =
    date ??
    new Date().toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <div
      className={
        "relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-b from-[#FFFBF0] to-[#FFF6E6] p-6 shadow-card " +
        className
      }
      role="img"
      aria-label="Divya Snan Certificate preview"
    >
      {/* corner ornaments */}
      <span className="pointer-events-none absolute left-3 top-3 h-8 w-8 border-l-2 border-t-2 border-gold/70 rounded-tl-md" />
      <span className="pointer-events-none absolute right-3 top-3 h-8 w-8 border-r-2 border-t-2 border-gold/70 rounded-tr-md" />
      <span className="pointer-events-none absolute left-3 bottom-3 h-8 w-8 border-l-2 border-b-2 border-gold/70 rounded-bl-md" />
      <span className="pointer-events-none absolute right-3 bottom-3 h-8 w-8 border-r-2 border-b-2 border-gold/70 rounded-br-md" />

      <div className="flex flex-col items-center text-center">
        <Image
          src="/assets/logo-badge.svg"
          alt=""
          width={96}
          height={96}
          className="h-20 w-20"
        />
        <p className="mt-2 font-hindi text-sm text-maroon/80">|| श्री गणेशाय नमः ||</p>
        <h3 className="mt-3 font-serif-display text-2xl text-maroon">
          Divya Snan Certificate
        </h3>
        <p className="font-hindi text-sm text-maroon/80 -mt-1">दिव्य स्नान प्रमाणपत्र</p>

        <div className="my-4 h-px w-24 bg-gold/60" />

        <p className="text-xs uppercase tracking-widest text-ink/60">This certifies that</p>
        <p className="mt-1 font-serif-display text-xl text-ink">{devoteeName}</p>
        {gotra ? (
          <p className="text-sm text-ink/70">
            <span className="font-hindi">गोत्र</span>: {gotra}
          </p>
        ) : null}

        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/80">
          A representative snan and prayer were respectfully performed on their
          behalf in the sacred waters of{" "}
          <span className="font-medium text-maroon">{river}</span> on{" "}
          <span className="font-medium text-maroon">{today}</span>.
        </p>

        <div className="mt-5 grid w-full grid-cols-2 gap-3 text-left">
          <div className="rounded-lg border border-gold/30 bg-cream/60 px-3 py-2">
            <p className="text-[10px] uppercase tracking-widest text-ink/55">River</p>
            <p className="text-xs font-medium text-ink">{river}</p>
          </div>
          <div className="rounded-lg border border-gold/30 bg-cream/60 px-3 py-2">
            <p className="text-[10px] uppercase tracking-widest text-ink/55">Date</p>
            <p className="text-xs font-medium text-ink">{today}</p>
          </div>
        </div>

        <div className="mt-5 flex w-full items-end justify-between text-[10px] text-ink/55">
          <div className="text-left">
            <p className="border-t border-ink/30 pt-1 font-medium">Tirth-Purohit</p>
          </div>
          <p className="font-mono">
            {orderId ? `#${orderId}` : "#DS-PREVIEW"}
          </p>
        </div>
      </div>
    </div>
  );
}
