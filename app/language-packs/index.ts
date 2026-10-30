import ln from "./ln.ts";
import yo from "./yo.ts";
import sw from "./sw.ts";
import tr from "./tr.ts";
import ps from "./ps.ts";
import type { LanguagePackCopy, PackedLanguage } from "./types";

export type { PackedLanguage } from "./types";

export function isPackedLanguage(language: string): language is PackedLanguage {
  return language === "ln" || language === "yo" || language === "sw" || language === "tr" || language === "ps";
}

export function packedLanguageCopy<K extends keyof LanguagePackCopy>(key: K): Record<PackedLanguage, LanguagePackCopy[K]> {
  return { ln: ln[key], yo: yo[key], sw: sw[key], tr: tr[key], ps: ps[key] };
}
