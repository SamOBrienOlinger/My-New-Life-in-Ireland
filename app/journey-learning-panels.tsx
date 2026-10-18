import { BookOpen, ExternalLink, MessageCircle, RotateCcw } from "lucide-react";
import type { Character, Step } from "./journey-data";
import type { Language } from "./i18n";
import { learningCopy } from "./learning-copy";
import { SourceDetails } from "./source-details";
import {
  buildJourneyRecap, guidanceForRecap, insightKeysByRoute,
  practicalResourcesForCharacter, type LearningResource,
} from "./journey-learning";

function PracticalCard({ resource, language }: { resource: LearningResource; language: Language }) {
  const copy = learningCopy(language);
  return <article className="learning-resource-card">
    <h4>{resource.title}</h4><p>{resource.description}</p>
    <SourceDetails href={resource.href} language={language} publisher={resource.organisation} />
    <a href={resource.href} target="_blank" rel="noreferrer">{copy.openResource}<span className="sr-only">: {resource.title}</span><ExternalLink size={15} aria-hidden="true" /></a>
  </article>;
}

export function JourneyInsight({ character, step, index, language }: { character: Character; step: Step; index: number; language: Language }) {
  const copy = learningCopy(language);
  const insight = copy.insights[insightKeysByRoute[character.route][index]];
  const practical = practicalResourcesForCharacter(character, copy).filter((resource) =>
    resource.organisation.includes("NMBI") ? index === 0 : index === 3);
  return <section className="journey-insight" aria-labelledby="insight-title">
    <div className="insight-heading"><BookOpen size={19} aria-hidden="true" /><h3 id="insight-title">{copy.misunderstanding}</h3></div>
    <p>{insight.explanation}</p>
    <h4>{copy.nextStep}</h4><p>{insight.action}</p>
    <a className="insight-source-link" href={step.sourceUrl} target="_blank" rel="noreferrer">{copy.checkSource}<span className="sr-only">: {step.sourceLabel}</span><ExternalLink size={15} aria-hidden="true" /></a>
    {practical.length ? <div className="stage-practical-resources">{practical.map((resource) => <PracticalCard resource={resource} language={language} key={resource.href} />)}</div> : null}
  </section>;
}

export function JourneyRecap({ character, steps, answers, checkedSteps, language, onRevisit }: {
  character: Character; steps: Step[]; answers: Record<number, string>; checkedSteps: number[];
  language: Language; onRevisit: (index: number) => void;
}) {
  const copy = learningCopy(language);
  const decisions = buildJourneyRecap(steps, answers, checkedSteps);
  const reviewCount = decisions.filter((item) => item.needsReview).length;
  const practical = practicalResourcesForCharacter(character, copy);
  const guidance = guidanceForRecap(decisions).slice(0, Math.max(1, 3 - practical.length));
  return <div className="journey-recap">
    <section className="recap-decisions" data-reveal={`recap-decisions-${character.id}`} aria-labelledby="recap-decisions-title">
      <div className="recap-section-heading"><h3 id="recap-decisions-title">{copy.decisionsTitle}</h3>
        <p>{reviewCount ? copy.revisitCount.replace("{count}", String(reviewCount)) : copy.allConsidered}</p>
      </div>
      <ol className="decision-recap-list">{decisions.map(({ index, step, chosen, informed, needsReview }) => <li key={index}>
        <details className={`decision-recap ${needsReview ? "needs-review" : "informed"}`} open={needsReview}>
          <summary><span className="recap-stage">{step.stage}</span><span className="recap-step-title">{step.title}</span><span className="recap-outcome">{needsReview ? copy.worthRevisiting : copy.informedChoice}</span></summary>
          <div className="recap-answer-detail">
            <h4>{copy.yourChoice}</h4><p>{chosen.label}</p>
            <p>{chosen.feedback}</p><p className="recap-consequence">{chosen.consequence}</p>
            {needsReview && informed ? <><h4>{copy.saferOption}</h4><p>{informed.label}</p><p>{informed.feedback}</p></> : null}
            <h4>{copy.nextStep}</h4><p>{copy.insights[insightKeysByRoute[character.route][index]].action}</p>
            <div className="recap-answer-actions">
              <button type="button" className="quiet-button" onClick={() => onRevisit(index)} aria-label={`${copy.revisitDecision}: ${step.stage} · ${step.title}`}><RotateCcw size={16} aria-hidden="true" />{copy.revisitDecision}</button>
              <a href={step.sourceUrl} target="_blank" rel="noreferrer">{copy.checkSource}<span className="sr-only">: {step.sourceLabel}</span><ExternalLink size={15} aria-hidden="true" /></a>
            </div>
          </div>
        </details>
      </li>)}</ol>
    </section>

    <section className="recap-reflection" data-reveal={`recap-reflection-${character.id}`} aria-labelledby="reflection-title">
      <div className="insight-heading"><MessageCircle size={21} aria-hidden="true" /><h3 id="reflection-title">{copy.reflectTitle}</h3></div>
      <p>{copy.reflectIntro}</p>
      <div className="reflection-context"><h4>{copy.livedContext}</h4><p>{character.identity}</p><p>{character.stakes}</p></div>
      <ul><li>{copy.reflections[character.route]}</li><li>{copy.controlPrompt}</li><li>{copy.supportPrompt}</li></ul>
    </section>

    <section className="recap-resources" data-reveal={`recap-resources-${character.id}`} aria-labelledby="recap-resources-title">
      <div className="recap-section-heading"><h3 id="recap-resources-title">{copy.relatedResources}</h3><p>{copy.relatedIntro}</p></div>
      <div className="learning-resource-grid">
        {guidance.map(({ index, step }) => <article className="learning-resource-card" key={step.sourceUrl}>
          <span className="recap-stage">{step.stage}</span><h4>{step.sourceLabel}</h4>
          <p>{copy.insights[insightKeysByRoute[character.route][index]].action}</p>
          <SourceDetails href={step.sourceUrl} language={language} />
          <a href={step.sourceUrl} target="_blank" rel="noreferrer">{copy.openResource}<span className="sr-only">: {step.sourceLabel}</span><ExternalLink size={15} aria-hidden="true" /></a>
        </article>)}
        {practical.map((resource) => <PracticalCard resource={resource} language={language} key={resource.href} />)}
      </div>
      <p className="source-date-note">{copy.sourceDateMeaning} <a href="about/#source-method">{copy.sourceMethodLink}</a></p>
    </section>
  </div>;
}
