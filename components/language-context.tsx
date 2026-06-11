"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { dict, type DictKey, type Lang } from "@/lib/i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: DictKey) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "divyasnan.lang";

const langListeners = new Set<() => void>();
function emitLangChange() {
  for (const listener of langListeners) listener();
}
function subscribeLang(listener: () => void) {
  langListeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    langListeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}
function readLangSnapshot(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "hi" || saved === "en") return saved;
    const nav = window.navigator.language?.toLowerCase() ?? "";
    if (nav.startsWith("hi")) return "hi";
  } catch {}
  return "en";
}
const readServerSnapshot = (): Lang => "en";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribeLang, readLangSnapshot, readServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {}
    emitLangChange();
  }, []);

  const t = useCallback(
    (key: DictKey) => {
      const entry = dict[key];
      if (!entry) return key;
      return entry[lang];
    },
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}

export function useT() {
  return useLang().t;
}
