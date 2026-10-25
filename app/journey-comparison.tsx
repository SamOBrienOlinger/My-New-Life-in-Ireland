"use client";

import { useId, useState } from "react";
import { ArrowRight, Check, Columns2, ExternalLink, Lightbulb } from "lucide-react";
import { characters, stepsByRoute } from "./journey-data";
import { CharacterPortrait } from "./character-portrait";
import { localCharacter, localRoute, localStep, ui, type Language } from "./i18n";
import { journalCopy } from "./journal-copy";
import "./journey-journal.css";

const comparisonPairs = {
  work: { characterIds: ["kwame", "elena"], stageIndex: 0 },
  safety: { characterIds: ["mariam", "adama"], stageIndex: 2 },
} as const;
type PairKey = keyof typeof comparisonPairs;

export function JourneyComparison({ characterId, completedIds, language, onExplore }: {
  characterId?: string;
  completedIds: string[];
  language: Language;
  onExplore: (characterId: string) => void;
}) {
  const copy = journalCopy(language);
  const t = ui[language];
  const id = useId();
  const [selectedPair, setSelectedPair] = useState<PairKey | null>(null);
  const [revealed, setRevealed] = useState(false);
  const currentCharacter = characters.find((character) => character.id === characterId);
  const pairKey = selectedPair ?? (currentCharacter?.filter === "protection" ? "safety" : "work");
  const pair = comparisonPairs[pairKey];
  const question = pairKey === "work" ? copy.workQuestion : copy.safetyQuestion;

  return <section className="journey-comparison" aria-labelledby={`${id}-title`}>
    <div className="comparison-heading"><div><p className="journal-kicker">{copy.compareTitle}</p><h3 id={`${id}-title`}>{copy.compareIntro}</h3></div><Columns2 size={26} aria-hidden="true" /></div>
    <div className="comparison-picker"><label htmlFor={`${id}-pair`}>{copy.pairLabel}</label>
      <select id={`${id}-pair`} value={pairKey} onChange={(event) => { setSelectedPair(event.target.value as PairKey); setRevealed(false); }}>
        <option value="work">{copy.workPair}: Kwame &amp; Elena</option>
        <option value="safety">{copy.safetyPair}: Mariam &amp; Adama</option>
      </select>
    </div>
    <div className="comparison-question"><Lightbulb size={21} aria-hidden="true" /><p>{question}</p></div>
    <p className="comparison-hint">{copy.compareHint}</p>
    <div className="comparison-people">
      {pair.characterIds.map((personId) => {
        const base = characters.find((character) => character.id === personId)!;
        const person = localCharacter(base, language);
        const step = localStep(stepsByRoute[base.route][pair.stageIndex], base.route, language);
        const explored = completedIds.includes(personId);
        return <article className="comparison-person" key={personId}>
          <header><CharacterPortrait character={person} /><div><h4>{person.name}</h4><p>{person.role}</p></div></header>
          <span className={`comparison-state ${explored ? "explored" : ""}`}>{explored ? <Check size={14} aria-hidden="true" /> : null}{explored ? t.exploredBadge : copy.newJourney}</span>
          <h5>{copy.context}</h5><p>{person.identity}</p><p>{person.stakes}</p>
          <h5>{copy.moment}</h5><p>{step.scene}</p>
          <button className="quiet-button" type="button" onClick={() => onExplore(personId)}>{copy.explore.replace("{name}", person.name.split(" ")[0])}<ArrowRight size={16} aria-hidden="true" /></button>
        </article>;
      })}
    </div>
    <div className="comparison-reveal-actions"><p>{copy.shared}</p><button type="button" className="quiet-button" aria-expanded={revealed} aria-controls={`${id}-explanation`} onClick={() => setRevealed(!revealed)}>{revealed ? copy.hide : copy.reveal}</button></div>
    <div id={`${id}-explanation`} hidden={!revealed} className="comparison-explanation">
      <div className="comparison-explanation-grid">
        {pair.characterIds.map((personId) => {
          const base = characters.find((person) => person.id === personId)!;
          const person = localCharacter(base, language);
          const step = localStep(stepsByRoute[base.route][pair.stageIndex], base.route, language);
          return <div key={personId}><h4>{person.name}</h4><p className="comparison-route">{localRoute(person.route, language).label}</p>
            <p>{step.plainLaw}</p><a href={step.sourceUrl} target="_blank" rel="noreferrer">{copy.source}<span className="sr-only">: {step.sourceLabel}</span><ExternalLink size={15} aria-hidden="true" /></a>
          </div>;
        })}
      </div>
      <p className="comparison-reflection">{copy.reflect}</p>
    </div>
  </section>;
}
