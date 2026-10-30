import type { Language } from "../i18n";
import { packedLanguageCopy } from "../language-packs";
import { localCharacter, localStep } from "../i18n";
import { characters, stepsByRoute } from "../journey-data";
import { factEntries, evidenceSources } from "../fact-or-fiction/facts";
import { localFact } from "../fact-or-fiction/translations";
import { factUi } from "../fact-or-fiction/locales";
import { resources, translatedTitles } from "../resources/page";
import { practicalResources } from "../journey-learning";
import { movingGuideResources } from "../moving-guide";
import { resourceDescription } from "../journey-translations";
import { learningCopy } from "../learning-copy";
import { aboutCopy } from "../about/page";
import { englishLearningCopy } from "../about/learning-content";
import { learningLocalesA } from "../about/learning-locales-a";
import { learningLocalesB } from "../about/learning-locales-b";
import type { SearchGroup } from "./search-copy";

export type SearchDocument = {
  id: string;
  group: SearchGroup;
  title: string;
  summary: string;
  text: string;
  meta: string;
  href: string;
  stage?: boolean;
};

export type SearchMatch = SearchDocument & { score: number };

const learningLocales = { ...packedLanguageCopy("aboutLearning"), ...learningLocalesA, ...learningLocalesB };

/**
 * A small, deterministic, browser-local index of the editorial content already
 * shipped with this site. No server, third-party search API or visitor tracking.
 * Do not index a person's browser-local journey notes or reflection drafts.
 */
export function buildSearchDocuments(language: Language): SearchDocument[] {
  const documents: SearchDocument[] = [];
  const learning = learningCopy(language);

  for (const originalPerson of characters) {
    const person = localCharacter(originalPerson, language);
    const location = "../#character-" + originalPerson.id;
    documents.push({
      id: "person-" + originalPerson.id,
      group: "journeys",
      title: person.name,
      summary: [person.role, person.origin, person.summary].join(" · "),
      text: [person.name, person.pronouns, person.role, person.origin, person.identity, person.summary, person.stakes].join(" "),
      meta: person.role + " · " + person.origin,
      href: location,
    });

    // Index what visitors can read at each of the five stages, including
    // answer explanations. The result opens the character, not a locked stage.
    stepsByRoute[originalPerson.route].forEach((originalStage, index) => {
      const stage = localStep(originalStage, originalPerson.route, language);
      documents.push({
        id: "stage-" + originalPerson.id + "-" + index,
        group: "journeys",
        title: person.name + " · " + stage.title,
        summary: stage.scene,
        text: [person.role, person.origin, person.identity, stage.stage, stage.eyebrow,
          stage.question, stage.law, stage.plainLaw, stage.sourceLabel, stage.sourceUrl,
          ...stage.choices.flatMap((choice) => [choice.label, choice.feedback, choice.consequence])
        ].join(" "),
        meta: stage.stage + " · " + person.role,
        href: location,
        stage: true,
      });
    });
  }

  for (const fact of factEntries) {
    const translated = localFact(fact, language);
    documents.push({
      id: "fact-" + fact.id,
      group: "facts",
      title: translated.claim,
      summary: translated.answer,
      text: [translated.context, fact.claim, fact.answer, fact.context, factUi[language].topics[fact.topic],
        ...fact.evidenceIds.flatMap((id) => [evidenceSources[id].title, evidenceSources[id].publisher])
      ].join(" "),
      meta: factUi[language].topics[fact.topic],
      href: "../fact-or-fiction/#check-" + fact.id,
    });
  }

  resources.forEach((resource, index) => {
    const title = language === "en" ? resource.title : translatedTitles[language][index];
    const description = resourceDescription(resource.title, resource.description, language);
    documents.push({
      id: "resource-" + index,
      group: "resources",
      title,
      summary: description,
      text: [resource.title, resource.description, resource.organisation, resource.topic].join(" "),
      meta: resource.organisation,
      href: "../resources/?q=" + encodeURIComponent(title) + "#resource-browser",
    });
  });

  [...practicalResources(learning), ...movingGuideResources(learning)].forEach((resource, index) => {
    documents.push({
      id: "extra-resource-" + index,
      group: "resources",
      title: resource.title,
      summary: resource.description,
      text: [resource.title, resource.description, resource.organisation, resource.topic].join(" "),
      meta: resource.organisation,
      href: "../resources/?q=" + encodeURIComponent(resource.title) + "#resource-browser",
    });
  });

  const about = aboutCopy[language];
  const education = language === "en" ? englishLearningCopy : learningLocales[language];
  documents.push(
    {
      id: "about-project",
      group: "about",
      title: about.how,
      summary: about.intro,
      text: [about.how1, about.how2, about.how3].join(" "),
      meta: about.title,
      href: "../about/",
    },
    {
      id: "about-flow",
      group: "about",
      title: education.flowTitle,
      summary: education.flowIntro,
      text: [education.choose.title, education.choose.body, education.stages.join(" "),
        ...education.loop.flatMap((step) => [step.title, step.body]),
        education.repeat, education.review.title, education.review.body, education.flowNote
      ].join(" "),
      meta: about.title,
      href: "../about/#how-to-play",
    },
    {
      id: "about-method",
      group: "about",
      title: education.methodTitle,
      summary: education.methodIntro,
      text: education.methods.flatMap((step) => [step.title, step.body]).join(" ") +
        " " + education.evidenceIntro + " " + education.assessment,
      meta: about.title,
      href: "../about/#learning-methodology",
    },
    {
      id: "about-outcomes",
      group: "about",
      title: education.outcomesTitle,
      summary: education.outcomesIntro,
      text: education.outcomes.join(" "),
      meta: about.title,
      href: "../about/#learning-outcomes",
    },
    {
      id: "about-sources",
      group: "about",
      title: learning.sourceMethod,
      summary: learning.sourceMethodIntro,
      text: [learning.sourceDateMeaning, learning.sourceMethodContent,
        learning.sourceMethodTranslation, learning.sourceMethodReflection,
        about.limits1, about.limits2, about.transparency1].join(" "),
      meta: about.title,
      href: "../about/#source-method",
    },
  );

  return documents;
}

/** Accent- and punctuation-tolerant, case-insensitive matching across supported languages. */
export function normaliseSearch(value: string): string {
  return value.normalize("NFKD")
    .replace(/\p{M}/gu, "")
    .replace(/[\u200c\u200d]/g, "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

export function searchTerms(query: string): string[] {
  return [...new Set(normaliseSearch(query).split(/\s+/).filter(Boolean))];
}

/** Require *every* keyword, but allow those words to appear in different fields. */
export function searchDocuments(documents: SearchDocument[], query: string): SearchMatch[] {
  const terms = searchTerms(query);
  if (!terms.length) return [];
  const phrase = normaliseSearch(query);
  const matches = documents.flatMap((document) => {
    const title = normaliseSearch(document.title);
    const summary = normaliseSearch(document.summary);
    const body = normaliseSearch([document.text, document.meta].join(" "));
    if (!terms.every((term) => title.includes(term) || summary.includes(term) || body.includes(term))) return [];
    let score = title.includes(phrase) ? 35 : 0;
    if (summary.includes(phrase)) score += 13;
    for (const term of terms) {
      if (title.includes(term)) score += 12;
      if (summary.includes(term)) score += 5;
      if (body.includes(term)) score += 1;
    }
    if (document.id.startsWith("person-")) score += 3;
    return [{ ...document, score }];
  });
  return matches.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
}

/** Extract a short preview around the first matched word without HTML injection. */
export function searchExcerpt(document: SearchDocument, query: string, maxLength = 190): string {
  const text = (document.summary + " " + document.text).replace(/\s+/g, " ").trim();
  if (text.length <= maxLength) return text;
  const terms = searchTerms(query);
  const folded = normaliseSearch(text);
  const first = terms.reduce((best, term) => {
    const location = folded.indexOf(term);
    return location >= 0 && (best < 0 || location < best) ? location : best;
  }, -1);
  const offset = first < 0 ? 0 : Math.max(0, first - 42);
  // Do not begin or end mid-word where possible.
  const start = offset ? Math.max(0, text.lastIndexOf(" ", offset)) : 0;
  const end = Math.min(text.length, start + maxLength);
  const finish = end < text.length ? Math.max(start + 60, text.lastIndexOf(" ", end)) : end;
  return (start > 0 ? "…" : "") + text.slice(start, finish).trim() + (finish < text.length ? "…" : "");
}
