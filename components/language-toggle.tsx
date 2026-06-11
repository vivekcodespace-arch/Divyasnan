"use client";

import { useLang } from "./language-context";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const isHi = lang === "hi";
  return (
    <div
      role="group"
      aria-label="Language"
      className={
        "inline-flex items-center rounded-full border border-maroon/15 bg-cream p-0.5 text-xs font-semibold " +
        className
      }
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={!isHi}
        className={
          "rounded-full px-3 py-1.5 transition-colors " +
          (!isHi ? "bg-maroon text-cream" : "text-maroon/70 hover:text-maroon")
        }
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("hi")}
        aria-pressed={isHi}
        className={
          "rounded-full px-3 py-1.5 transition-colors font-hindi " +
          (isHi ? "bg-maroon text-cream" : "text-maroon/70 hover:text-maroon")
        }
      >
        हिं
      </button>
    </div>
  );
}
