"use client";

import { useId, useState } from "react";
import { ArrowLeftRight, ChevronDown, ExternalLink } from "lucide-react";
import { engagementCopy } from "./engagement-copy";
import { ui, type Language } from "./i18n";
import type { Choice, Step } from "./journey-data";

/** A read-only exploration: never calls the journey's answer/save handlers. */
export function JourneyChoiceComparison({ step, choice, language }: { step: Step; choice: Choice; language: Language }) {
  const copy = engagementCopy(language);
  const t = ui[language];
  const id = useId();
  const [alternativeId, setAlternativeId] = useState("");
  const alternative = step.choices.find((option) => option.id === alternativeId && option.id !== choice.id);
  return <details className="choice-comparison">
    <summary><ArrowLeftRight size={19} aria-hidden="true" /><span>{copy.compareChoices}</span><ChevronDown size={17} aria-hidden="true" /></summary>
    <div className="choice-comparison-content">
      <p>{copy.compareIntro}</p>
      <label htmlFor={id}>{copy.selectAlternative}</label>
      <select id={id} value={alternativeId} onChange={(event) => setAlternativeId(event.target.value)}>
        <option value="">{copy.selectAlternative}</option>
        {step.choices.filter((option) => option.id !== choice.id).map((option) => <option value={option.id} key={option.id}>{option.label}</option>)}
      </select>
      {alternative ? <div className="choice-comparison-grid" aria-live="polite">
        {[{ label: copy.yourChoice, item: choice }, { label: copy.alternative, item: alternative }].map(({ label, item }) => <article key={item.id}>
          <h3>{label}</h3><p className="compared-answer">{item.label}</p>
          <h4>{copy.whatMeans}</h4><p>{item.feedback}</p>
          <h4>{t.changes}</h4><p>{item.consequence}</p>
        </article>)}
      </div> : null}
      <p className="comparison-note">{copy.compareNote}</p>
      <a href={step.sourceUrl} target="_blank" rel="noreferrer">{t.source}: {step.sourceLabel}<ExternalLink size={14} aria-hidden="true" /></a>
    </div>
  </details>;
}
