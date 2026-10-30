import type { Language } from "../i18n";
import type { RouteKey, Step } from "../journey-data";
import type { JourneyControls, JourneyTranslationCatalog } from "./types";
import { loadLearningLanguage } from "../learning-copy/index.ts";

type TranslatedLanguage = Exclude<Language, "en">;
type LanguageCatalog = {
  default: JourneyTranslationCatalog;
  resourceDescriptions: Record<string, string>;
  controls: JourneyControls;
};

// Each language is a separate cached chunk; English does not download other journey catalogs.
const loaders: Record<TranslatedLanguage, () => Promise<LanguageCatalog>> = {
  ga: () => import("./ga.ts"), ar: () => import("./ar.ts"),
  zh: () => import("./zh.ts"), fr: () => import("./fr.ts"),
  pt: () => import("./pt.ts"), es: () => import("./es.ts"),
  nl: () => import("./nl.ts"), fa: () => import("./fa.ts"),
  xh: () => import("./xh.ts"),
  ln: () => import("./ln.ts"), yo: () => import("./yo.ts"), sw: () => import("./sw.ts"),
  tr: () => import("./tr.ts"), ps: () => import("./ps.ts"),
};

const loaded: Partial<Record<TranslatedLanguage, LanguageCatalog>> = {};
const pending: Partial<Record<TranslatedLanguage, Promise<void>>> = {};

export function loadJourneyLanguage(language: Language): Promise<void> {
  if (language === "en" || loaded[language]) return Promise.resolve();
  if (!pending[language]) {
    pending[language] = Promise.all([loaders[language](), loadLearningLanguage(language)]).then(([catalog]) => { loaded[language] = catalog; }).catch((error: unknown) => {
      delete pending[language];
      throw error;
    });
  }
  return pending[language]!;
}

function getCatalog(language: TranslatedLanguage): LanguageCatalog {
  const catalog = loaded[language];
  if (!catalog) throw new Error(`Translation catalog ${language} has not loaded.`);
  return catalog;
}

const englishControls: JourneyControls = {
  resume: "Continue",
  resumeJourney: "Continue with {name}",
  restart: "Restart this journey",
  savedJourney: "Saved journey",
  stage: "Stage",
  returnHome: "Return to journeys",
  saveUnavailable: "Progress cannot be saved in this browser. Keep this page open to continue.",
};

export function journeyControls(language: Language): JourneyControls {
  return language === "en" ? englishControls : getCatalog(language).controls;
}

export function translateJourneyStep(step: Step, route: RouteKey, language: Language, stageLabel: string): Step {
  if (language === "en") return step;
  const translated = getCatalog(language).default[`${route}:${step.stage}`];
  if (!translated) throw new Error(`Missing ${language} translation for ${route}:${step.stage}.`);
  return {
    ...step,
    stage: stageLabel as Step["stage"],
    eyebrow: translated.eyebrow,
    title: translated.title,
    scene: translated.scene,
    question: translated.question,
    law: translated.law,
    plainLaw: translated.plainLaw,
    sourceLabel: translated.sourceLabel,
    choices: step.choices.map((choice) => {
      const text = translated.choices[choice.id];
      if (!text) throw new Error(`Missing ${language} answer ${route}:${step.stage}:${choice.id}.`);
      return { ...choice, label: text.label, feedback: text.feedback, consequence: text.consequence };
    }),
  };
}

export function resourceDescription(title: string, englishDescription: string, language: Language): string {
  if (language === "en") return englishDescription;
  const description = getCatalog(language).resourceDescriptions[title];
  if (!description) throw new Error(`Missing ${language} resource description: ${title}.`);
  return description;
}
