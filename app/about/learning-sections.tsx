import { packedLanguageCopy } from "../language-packs";
import {
  ArrowDown, ArrowRight, BookOpen, Check, CheckCircle2, ChevronDown,
  ExternalLink, GitCompareArrows, Lightbulb, MousePointer2, RotateCcw,
  Search, UserRound,
} from "lucide-react";
import type { Language } from "../i18n";
import { englishLearningCopy, pedagogyReferences } from "./learning-content";
import { learningLocalesA } from "./learning-locales-a";
import { learningLocalesB } from "./learning-locales-b";
import "./learning.css";

const translations = { ...packedLanguageCopy("aboutLearning"), ...learningLocalesA, ...learningLocalesB };
const copyFor = (language: Language) => language === "en" ? englishLearningCopy : translations[language];
const loopIcons = [BookOpen, MousePointer2, Check, Lightbulb];
const methodIcons = [Lightbulb, GitCompareArrows, Search];

function DownConnector() {
  return <div className="learning-flow-connector" aria-hidden="true"><ArrowDown size={24} /></div>;
}

export function AboutLearningNavigation({ language }: { language: Language }) {
  const copy = copyFor(language);
  return (
    <nav className="about-learning-nav" aria-label={copy.navigation}>
      <a href="#how-to-play"><BookOpen size={17} aria-hidden="true" />{copy.flowTitle}</a>
      <a href="#learning-methodology"><Lightbulb size={17} aria-hidden="true" />{copy.methodTitle}</a>
      <a href="#learning-outcomes"><CheckCircle2 size={17} aria-hidden="true" />{copy.outcomesTitle}</a>
    </nav>
  );
}

export function AboutLearningSections({ language }: { language: Language }) {
  const copy = copyFor(language);
  return (
    <>
      <section className="about-learning-panel about-flow-panel" id="how-to-play" aria-labelledby="how-to-play-title">
        <header className="learning-section-heading">
          <span className="learning-heading-icon" aria-hidden="true"><BookOpen size={24} /></span>
          <h2 id="how-to-play-title">{copy.flowTitle}</h2>
          <p>{copy.flowIntro}</p>
        </header>

        <figure className="learning-flow" aria-labelledby="how-to-play-title">
          <div className="learning-flow-node learning-start-node">
            <UserRound className="learning-node-icon" size={25} aria-hidden="true" />
            <div><h3>{copy.choose.title}</h3><p>{copy.choose.body}</p></div>
          </div>
          <DownConnector />

          <p className="learning-stage-label" id="learning-stages-label">{copy.stagesLabel}</p>
          <ol className="learning-stages" role="list" aria-labelledby="learning-stages-label">
            {copy.stages.map((stage, index) => (
              <li key={stage}>
                <span>{stage}</span>
                {index < copy.stages.length - 1 && <ArrowRight className="learning-node-arrow" size={17} aria-hidden="true" />}
              </li>
            ))}
          </ol>
          <DownConnector />

          <div className="learning-loop">
            <h3 id="learning-loop-title">{copy.loopTitle}</h3>
            <ol className="learning-loop-steps" role="list" aria-labelledby="learning-loop-title">
              {copy.loop.map((step, index) => {
                const Icon = loopIcons[index];
                return (
                  <li key={step.title}>
                    <Icon size={23} aria-hidden="true" />
                    <h4>{step.title}</h4><p>{step.body}</p>
                    {index < copy.loop.length - 1 && <ArrowRight className="learning-node-arrow" size={19} aria-hidden="true" />}
                  </li>
                );
              })}
            </ol>
            <p className="learning-loop-return"><RotateCcw size={20} aria-hidden="true" />{copy.repeat}</p>
          </div>

          <div className="learning-finish"><ArrowDown size={20} aria-hidden="true" /><p>{copy.finish}</p></div>
          <div className="learning-flow-node learning-review-node">
            <Lightbulb className="learning-node-icon" size={25} aria-hidden="true" />
            <div>
              <h3>{copy.review.title}</h3><p>{copy.review.body}</p>
              <p className="learning-revisit"><RotateCcw size={17} aria-hidden="true" />{copy.revisit}</p>
            </div>
          </div>
          <DownConnector />

          <div className="learning-explore">
            <h3>{copy.exploreTitle}</h3>
            <div className="learning-explore-branches">
              <a href="../#choose-character"><GitCompareArrows size={22} aria-hidden="true" /><span>{copy.compare}</span><ArrowRight className="learning-link-arrow" size={18} aria-hidden="true" /></a>
              <a href="../resources/"><Search size={22} aria-hidden="true" /><span>{copy.investigate}</span><ArrowRight className="learning-link-arrow" size={18} aria-hidden="true" /></a>
            </div>
          </div>
          <figcaption>{copy.flowNote}</figcaption>
        </figure>
        <a className="learning-diagram-link" href="../images/learning-flow.png" target="_blank" rel="noreferrer">
          {copy.imageLink}<ExternalLink size={16} aria-hidden="true" />
        </a>
      </section>

      <section className="about-learning-panel about-method-panel" id="learning-methodology" aria-labelledby="learning-methodology-title">
        <header className="learning-section-heading">
          <span className="learning-heading-icon" aria-hidden="true"><Lightbulb size={24} /></span>
          <h2 id="learning-methodology-title">{copy.methodTitle}</h2>
          <p>{copy.methodIntro}</p>
        </header>

        <div className="learning-methods">
          {copy.methods.map((method, index) => {
            const Icon = methodIcons[index];
            return <article key={method.title}><Icon size={24} aria-hidden="true" /><h3>{method.title}</h3><p>{method.body}</p></article>;
          })}
        </div>

        <section className="learning-outcomes" id="learning-outcomes" aria-labelledby="learning-outcomes-title">
          <h3 id="learning-outcomes-title">{copy.outcomesTitle}</h3>
          <p>{copy.outcomesIntro}</p>
          <ul role="list">
            {copy.outcomes.map((outcome) => <li key={outcome}><CheckCircle2 size={20} aria-hidden="true" /><span>{outcome}</span></li>)}
          </ul>
        </section>

        <p className="learning-evidence-limit">{copy.evidenceLimit}</p>
        <details className="learning-research" id="learning-research">
          <summary>{copy.evidenceTitle}<ChevronDown size={20} aria-hidden="true" /></summary>
          <div className="learning-research-content">
            <p>{copy.evidenceIntro}</p>
            <ul role="list">
              {pedagogyReferences.map((reference) => (
                <li key={reference.url} lang="en" dir="ltr">
                  <a href={reference.url} target="_blank" rel="noreferrer"><strong>{reference.authors}</strong><span>{reference.title}</span><ExternalLink size={15} aria-hidden="true" /></a>
                </li>
              ))}
            </ul>
            <p>{copy.assessment}</p>
          </div>
        </details>
        <a className="learning-read-more" href="https://github.com/SamOBrienOlinger/My-New-Life-in-Ireland/blob/main/README.md#learning-methodology-and-outcomes" target="_blank" rel="noreferrer">
          {copy.readMore}<ExternalLink size={17} aria-hidden="true" />
        </a>
      </section>
    </>
  );
}
