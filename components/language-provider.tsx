"use client";

import React, { createContext, useEffect, useMemo, useState } from "react";

export type Language = "pt" | "en";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "imoharmonia_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("pt");
  const [hasLoadedPreference, setHasLoadedPreference] = useState(false);

  const setLang = (next: Language) => setLangState(next);
  const toggleLang = () => setLangState((prev) => (prev === "pt" ? "en" : "pt"));

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "pt" || stored === "en") {
        setLangState(stored);
      }
    } catch {
      // ignore
    } finally {
      setHasLoadedPreference(true);
    }
  }, []);

  useEffect(() => {
    try {
      if (hasLoadedPreference) window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
    try {
      document.documentElement.lang = lang === "pt" ? "pt-PT" : "en";
    } catch {
      // ignore
    }
  }, [hasLoadedPreference, lang]);

  const value = useMemo<LanguageContextValue>(() => ({ lang, setLang, toggleLang }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
