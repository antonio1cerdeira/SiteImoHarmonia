"use client";

import { useContext } from "react";
import { LanguageContext } from "@/components/language-provider";

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage deve ser usado dentro de LanguageProvider");
  return ctx;
}

