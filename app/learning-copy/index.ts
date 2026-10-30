import type { Language } from "../i18n";
import en, { type LearningCopy } from "./en.ts";

type TranslatedLanguage = Exclude<Language, "en">;
const loaders: Record<TranslatedLanguage, () => Promise<{ default: LearningCopy }>> = {
  ga: () => import("./ga.ts"), ar: () => import("./ar.ts"),
  zh: () => import("./zh.ts"), fr: () => import("./fr.ts"),
  pt: () => import("./pt.ts"), es: () => import("./es.ts"),
  nl: () => import("./nl.ts"), fa: () => import("./fa.ts"),
  xh: () => import("./xh.ts"),
  ln: () => import("./ln.ts"), yo: () => import("./yo.ts"), sw: () => import("./sw.ts"),
};
const loaded: Partial<Record<TranslatedLanguage, LearningCopy>> = {};
const pending: Partial<Record<TranslatedLanguage, Promise<void>>> = {};

export function loadLearningLanguage(language: Language): Promise<void> {
  if (language === "en" || loaded[language]) return Promise.resolve();
  if (!pending[language]) {
    pending[language] = loaders[language]().then((module) => { loaded[language] = module.default; }).catch((error: unknown) => {
      delete pending[language];
      throw error;
    });
  }
  return pending[language]!;
}

export function learningCopy(language: Language): LearningCopy {
  if (language === "en") return en;
  const copy = loaded[language];
  if (!copy) throw new Error(`Learning translation ${language} has not loaded.`);
  return copy;
}

export type { LearningCopy, InsightKey } from "./en.ts";
