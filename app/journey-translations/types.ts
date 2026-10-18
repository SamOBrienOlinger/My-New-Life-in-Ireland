import type { Choice, Step } from "../journey-data";

export type TranslatedChoice = Pick<Choice, "label" | "feedback" | "consequence">;
export type TranslatedStep = Pick<Step, "eyebrow" | "title" | "scene" | "question" | "law" | "plainLaw" | "sourceLabel"> & {
  choices: Record<string, TranslatedChoice>;
};
/** Keys combine the canonical route and stage; answer keys retain their source IDs. */
export type JourneyTranslationCatalog = Record<string, TranslatedStep>;
export type JourneyControls = {
  resume: string;
  resumeJourney: string;
  restart: string;
  savedJourney: string;
  stage: string;
  returnHome: string;
  saveUnavailable: string;
};
