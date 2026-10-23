"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Accessibility, ArrowLeft, ArrowRight, BookOpen, BriefcaseBusiness, Check, CheckCircle2,
  ExternalLink, Globe2, GraduationCap, HeartHandshake, Languages, Map, MapPin,
  RotateCcw, Scale, ShieldCheck, Sparkles, Users, Volume2,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  characters, routeFilters, stepsByRoute,
  type RouteFilter, type RouteKey,
} from "./journey-data";
import { LanguageControl, localCharacter, localFilter, localRoute, localStep, ui, useLanguage } from "./i18n";
import { additionalOfficialSourceDescriptions } from "./additional-page-copy";
import { MobileNavigation } from "./mobile-navigation";
import { CharacterPortrait } from "./character-portrait";
import {
  completedStorageKey, createSavedJourney, parseCompletedJourneys, parseSavedJourneys,
  progressStorageKey, serialiseSavedJourneys, type SavedJourney, type SavedJourneys,
} from "./journey-progress";
import { journeyControls } from "./journey-translations";
import { learningCopy } from "./learning-copy";
import { SourceDetails } from "./source-details";
import { JourneyInsight, JourneyRecap } from "./journey-learning-panels";
import { resourceTopicForRoute } from "./journey-learning";
import { usePageMotion } from "./use-page-motion";
import { FooterTagline } from "./footer-tagline";

const scrollBehavior = (): ScrollBehavior => window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

const routeIcons: Record<RouteKey, typeof ShieldCheck> = {
  critical: BriefcaseBusiness, general: BriefcaseBusiness, protection: ShieldCheck,
  study: GraduationCap, family: HeartHandshake,
  "protection-access": Accessibility, "eu-mobility": Globe2, "family-safety": ShieldCheck,
};

const officialSources = [
  ["Irish Immigration Service", "Work, study, family, registration and permission", "https://www.irishimmigration.ie/"],
  ["Employment Permits", "Current permit types, eligibility and occupation lists", "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/"],
  ["International Protection Office", "Applying for international protection in Ireland", "https://ipo.irishimmigration.ie/"],
  ["Irish Refugee Council", "Rights and procedures, including applications after 12 June 2026", "https://www.irishrefugeecouncil.ie/get-help/information-hub/"],
  ["Workplace Relations Commission", "Employment rights and workplace remedies", "https://www.workplacerelations.ie/en/what_you_should_know/"],
];

const officialSourceDescriptions = {
  ga: ["Obair, staidéar, teaghlach, clárú agus cead","Cineálacha ceada, incháilitheacht agus liostaí gairmeacha reatha","Iarratas ar chosaint idirnáisiúnta in Éirinn","Cearta agus nósanna imeachta, lena n-áirítear iarratais tar éis 12 Meitheamh 2026","Cearta fostaíochta agus leigheasanna san ionad oibre"],
  ar: ["العمل والدراسة والأسرة والتسجيل والإذن","أنواع التصاريح الحالية والأهلية وقوائم المهن","التقدم للحماية الدولية في أيرلندا","الحقوق والإجراءات، بما فيها الطلبات بعد 12 يونيو 2026","حقوق العمل وسبل الانتصاف في مكان العمل"],
  ...additionalOfficialSourceDescriptions,
};

export default function Home() {
  const [selectedId, setSelectedId] = useState("");
  const [filter, setFilter] = useState<RouteFilter>("all");
  const [started, setStarted] = useState(false);
  const journeyStartedRef = useRef(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checkedSteps, setCheckedSteps] = useState<number[]>([]);
  const [choiceOrder, setChoiceOrder] = useState<Record<number, string[]>>({});
  const [completed, setCompleted] = useState(false);
  const [reviewing, setReviewing] = useState(false);
  const [plainLanguage, setPlainLanguage] = useState(true);
  const pageRef = useRef<HTMLElement>(null);
  const decisionPanelRef = useRef<HTMLElement>(null);
  const stageHeadingRef = useRef<HTMLHeadingElement>(null);
  const completionHeadingRef = useRef<HTMLHeadingElement>(null);
  const landingFocusRef = useRef<string | null>(null);
  const [savedJourneys, setSavedJourneys] = useState<SavedJourneys>({});
  const [storageReady, setStorageReady] = useState(false);
  const [storageAvailable, setStorageAvailable] = useState(true);
  const { language, setLanguage, dir } = useLanguage();
  const [completedCharacters, setCompletedCharacters] = useState<string[]>([]);

  useEffect(() => {
    function readProgress() {
      try {
        setSavedJourneys(parseSavedJourneys(window.localStorage.getItem(progressStorageKey)));
        setCompletedCharacters(parseCompletedJourneys(window.localStorage.getItem(completedStorageKey)));
      } catch { setStorageAvailable(false); }
      setStorageReady(true);
    }
    const frame = window.requestAnimationFrame(readProgress);
    function syncStorage(event: StorageEvent) {
      if (event.key === null || event.key === progressStorageKey || event.key === completedStorageKey) readProgress();
    }
    function syncRestoredPage(event: PageTransitionEvent) {
      if (event.persisted) readProgress();
    }
    window.addEventListener("storage", syncStorage);
    window.addEventListener("pageshow", syncRestoredPage);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("storage", syncStorage);
      window.removeEventListener("pageshow", syncRestoredPage);
    };
  }, []);

  const t = ui[language];
  const controls = journeyControls(language);
  const learning = learningCopy(language);
  const baseCharacter = useMemo(() => characters.find((item) => item.id === selectedId), [selectedId]);
  const character = useMemo(() => baseCharacter ? localCharacter(baseCharacter, language) : undefined, [baseCharacter, language]);
  const visibleCharacters = useMemo(() => characters.filter((item) => filter === "all" || item.filter === filter).map((item) => localCharacter(item, language)), [filter, language]);
  const steps = character ? stepsByRoute[character.route].map((item, index) => {
    const translated = localStep(item, character.route, language);
    const order = choiceOrder[index];
    return order ? { ...translated, choices: order.map((id) => translated.choices.find((choice) => choice.id === id)).filter((choice) => choice !== undefined) } : translated;
  }) : [];
  const step = steps[stepIndex];
  const checked = checkedSteps.includes(stepIndex);
  const choiceId = answers[stepIndex] || "";
  const choice = step?.choices.find((item) => item.id === choiceId);
  const correctCount = steps.reduce((total, item, index) => total + (item.choices.find((option) => option.id === answers[index])?.correct ? 1 : 0), 0);
  const RouteIcon = character ? routeIcons[character.route] : Users;
  const selectedSavedJourney = character ? savedJourneys[character.id] : undefined;
  const recentJourney = Object.values(savedJourneys).sort((a, b) => b.updatedAt - a.updatedAt)[0];
  const recentCharacter = recentJourney ? characters.find((item) => item.id === recentJourney.characterId) : undefined;

  usePageMotion(pageRef,
    started ? (completed ? `recap:${selectedId}` : "journey") : `home:${filter}`,
    started && !completed ? `${selectedId}:${stepIndex}` : null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (started) {
        const heading = completed ? completionHeadingRef.current : stageHeadingRef.current;
        heading?.focus({ preventScroll: true });
        // A new screen must settle before the next keyboard or pointer action.
        decisionPanelRef.current?.scrollIntoView({ block: "start", behavior: "instant" });
      } else if (landingFocusRef.current) {
        const target = landingFocusRef.current;
        landingFocusRef.current = null;
        const heading = document.getElementById(target === "#choose-character" ? "character-picker-title" : "home-title");
        heading?.focus({ preventScroll: true });
        document.querySelector(target)?.scrollIntoView({ block: "start", behavior: "instant" });
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [started, stepIndex, completed]);

  useEffect(() => () => {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  }, [started, stepIndex, language]);

  useEffect(() => {
    function selectLinkedCharacter() {
      // History navigation must not switch characters during an active game.
      if (journeyStartedRef.current) return;
      const linkedCharacter = characters.find((item) => window.location.hash === `#character-${item.id}`);
      if (!linkedCharacter) return;
      setSelectedId(linkedCharacter.id);
      setFilter((current) => current === "all" || current === linkedCharacter.filter ? current : "all");
      // Wait for React to reveal the card before scrolling to a shared link.
      window.requestAnimationFrame(() => document.getElementById(`character-${linkedCharacter.id}`)?.scrollIntoView({ block: "start", behavior: "instant" }));
    }

    selectLinkedCharacter();
    window.addEventListener("hashchange", selectLinkedCharacter);
    return () => window.removeEventListener("hashchange", selectLinkedCharacter);
  }, []);

  function persistJourneys(journeys: SavedJourneys, finished = completedCharacters) {
    let mergedJourneys = journeys;
    let mergedCompleted = finished;
    let available = true;
    try {
      // Apply this interaction's changed character to the latest stored snapshot.
      // Other tabs may have saved a different character since this page rendered.
      mergedJourneys = parseSavedJourneys(window.localStorage.getItem(progressStorageKey));
      for (const id of new Set([...Object.keys(savedJourneys), ...Object.keys(journeys)])) {
        if (savedJourneys[id] === journeys[id]) continue;
        if (journeys[id]) mergedJourneys[id] = journeys[id];
        else delete mergedJourneys[id];
      }
      mergedCompleted = [...new Set([...parseCompletedJourneys(window.localStorage.getItem(completedStorageKey)), ...finished])];
      window.localStorage.setItem(progressStorageKey, serialiseSavedJourneys(mergedJourneys));
      window.localStorage.setItem(completedStorageKey, JSON.stringify(mergedCompleted));
    } catch {
      // Keep every in-memory attempt if storage is readable but cannot be written.
      mergedJourneys = journeys;
      mergedCompleted = finished;
      available = false;
    }
    setSavedJourneys(mergedJourneys);
    setCompletedCharacters(mergedCompleted);
    setStorageAvailable(available);
  }

  // Save within the interaction, before a link can leave the page.
  function saveActiveJourney(changes: Partial<SavedJourney>) {
    if (!baseCharacter || !storageReady) return;
    // Called only by user-event handlers, including the recap's onClick callback.
    // eslint-disable-next-line react-hooks/purity -- Timestamp the interaction before navigation; the custom callback is not a render call.
    const updatedAt = Date.now();
    persistJourneys({ ...savedJourneys, [baseCharacter.id]: {
      characterId: baseCharacter.id, route: baseCharacter.route, stepIndex,
      answers, checkedSteps, choiceOrder, plainLanguage, ...changes, updatedAt,
    } });
  }

  function resumeJourney(saved: SavedJourney) {
    journeyStartedRef.current = true;
    setSelectedId(saved.characterId);
    setStepIndex(saved.stepIndex);
    setAnswers(saved.answers);
    setCheckedSteps(saved.checkedSteps);
    setChoiceOrder(saved.choiceOrder);
    setPlainLanguage(saved.plainLanguage);
    setCompleted(false);
    setReviewing(false);
    setStarted(true);
    persistJourneys({ ...savedJourneys, [saved.characterId]: { ...saved, updatedAt: Date.now() } });
  }

  function beginJourney() {
    if (!baseCharacter || !storageReady) return;
    resumeJourney(savedJourneys[baseCharacter.id] ?? createSavedJourney(baseCharacter));
  }

  function restartJourney() {
    if (!baseCharacter || !storageReady) return;
    resumeJourney(createSavedJourney(baseCharacter));
  }

  function completeJourney() {
    if (!character || !steps.every((item, index) => checkedSteps.includes(index) && item.choices.some((option) => option.id === answers[index]))) return;
    setCompleted(true);
    setReviewing(false);
    const remaining = { ...savedJourneys };
    delete remaining[character.id];
    persistJourneys(remaining, [...new Set([...completedCharacters, character.id])]);
  }

  function revisitDecision(index: number) {
    setStepIndex(index);
    setCompleted(false);
    setReviewing(true);
    saveActiveJourney({ stepIndex: index });
  }

  function nextStep() {
    if (!checked || !choice) return;
    if (stepIndex === steps.length - 1) {
      completeJourney();
    } else {
      setStepIndex(stepIndex + 1);
      saveActiveJourney({ stepIndex: stepIndex + 1 });
    }
  }

  function previousStep() {
    if (stepIndex === 0) return;
    setStepIndex(stepIndex - 1);
    saveActiveJourney({ stepIndex: stepIndex - 1 });
  }

  function selectAnswer(value: string) {
    const nextAnswers = { ...answers, [stepIndex]: value };
    const nextChecked = checkedSteps.filter((index) => index !== stepIndex);
    setAnswers(nextAnswers);
    setCheckedSteps(nextChecked);
    saveActiveJourney({ answers: nextAnswers, checkedSteps: nextChecked });
  }

  function checkAnswer() {
    if (!choice) return;
    const nextChecked = [...new Set([...checkedSteps, stepIndex])];
    setCheckedSteps(nextChecked);
    saveActiveJourney({ checkedSteps: nextChecked });
  }

  function togglePlainLanguage() {
    setPlainLanguage(!plainLanguage);
    saveActiveJourney({ plainLanguage: !plainLanguage });
  }

  function resetJourney(target?: string) {
    landingFocusRef.current = target || "#top";
    journeyStartedRef.current = false;
    setStarted(false); setCompleted(false); setReviewing(false); setStepIndex(0); setAnswers({}); setCheckedSteps([]); setChoiceOrder({}); setSelectedId("");
  }

  function readStep() {
    if (!step || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(`${step.title}. ${step.scene}. ${plainLanguage ? step.plainLaw : step.law}`);
    utterance.lang = ({ en:"en-IE", ga:"ga-IE", ar:"ar", zh:"zh-CN", fr:"fr-FR", pt:"pt-PT", es:"es-ES", nl:"nl-NL", fa:"fa-IR", xh:"xh-ZA" } as const)[language];
    window.speechSynthesis.speak(utterance);
  }

  if (started && character) {
    return (
      <main className="journey-shell" ref={pageRef} lang={language} dir={dir}>
        <header className="journey-topbar">
          <button className="brand-button" type="button" aria-label={`${t.siteName}: ${controls.returnHome}`} onClick={() => resetJourney()}>
            <img className="brand-mark" src="images/harp-heart-logo.png" alt="" aria-hidden="true" /><span>{t.siteName}</span>
          </button>
          <div className="journey-tools">
            <LanguageControl language={language} setLanguage={setLanguage} label={t.language} />
            <a className="quiet-button compact-button" href="resources/" aria-label={t.hub}><BookOpen size={17} aria-hidden="true" />{t.hub}</a>
            <button className="quiet-button compact-button" type="button" aria-label={t.change} onClick={() => resetJourney("#choose-character")}><Users size={17} aria-hidden="true" /> {t.change}</button>
          </div>
        </header>

        <div className="journey-layout journey-layout-expanded">
          <aside className="character-rail" aria-label={t.selected}>
            <CharacterPortrait character={character} eager />
            <p className="mini-label">{t.walking}</p><h1>{character.name}</h1><p>{character.pronouns}</p>
            <div className="rail-detail"><MapPin size={16} aria-hidden="true" /><span>{character.origin}</span></div>
            <div className="rail-detail"><RouteIcon size={16} aria-hidden="true" /><span>{character.role}</span></div>
            <div className="route-pill">{localRoute(character.route, language).label}</div>
            <p className="identity-note">{character.identity}</p>
            <div className="stakes-card"><strong>{t.stake}</strong><p>{character.stakes}</p></div>
            <ol className="stage-trail" aria-label={t.stages}>
              {steps.map((item, index) => (
                <li className={index === stepIndex && !completed ? "active" : index < stepIndex || completed ? "done" : ""} aria-current={index === stepIndex && !completed ? "step" : undefined} key={item.stage}>
                  <span>{index < stepIndex || completed ? <Check size={13} aria-hidden="true" /> : index + 1}</span>
                  <div><strong>{item.stage}</strong><small>{item.title}</small></div>
                </li>
              ))}
            </ol>
          </aside>

          <section className="decision-panel" ref={decisionPanelRef} aria-labelledby={completed ? "completion-title" : "decision-title"}>
            {!completed && step ? <>
              <div className="progress-row"><span id="stage-progress">{controls.stage} {stepIndex + 1} {t.of} {steps.length} · {step.stage}</span><span aria-hidden="true">{Math.round(((stepIndex + 1) / steps.length) * 100)}%</span></div>
              <Progress value={((stepIndex + 1) / steps.length) * 100} aria-label={t.progress} aria-valuetext={`${controls.stage} ${stepIndex + 1} ${t.of} ${steps.length}: ${step.stage}`} />
              <div className="decision-heading">
                <div className="decision-kicker"><p className="eyebrow">{step.eyebrow}</p><span>{step.stage}</span></div>
                <h2 id="decision-title" ref={stageHeadingRef} tabIndex={-1} aria-describedby="stage-progress">{step.title}</h2><p className="scene" data-stage-copy>{step.scene}</p>
              </div>
              <div className="learning-tools">
                <button className="tool-button" type="button" onClick={readStep}><Volume2 size={17} aria-hidden="true" />{t.listen}</button>
                <button className="tool-button" type="button" onClick={togglePlainLanguage}><Languages size={17} aria-hidden="true" />{plainLanguage ? t.detailed : t.plain}</button>
              </div>
              <div className="law-card" data-stage-copy><Scale size={22} aria-hidden="true" /><div><strong>{t.rule}</strong><p>{plainLanguage ? step.plainLaw : step.law}</p><a href={step.sourceUrl} target="_blank" rel="noreferrer">{t.source}: {step.sourceLabel}<ExternalLink size={14} aria-hidden="true" /></a><SourceDetails href={step.sourceUrl} language={language} /></div></div>
              <fieldset className="choice-fieldset">
                <legend id="decision-question">{step.question}</legend>
                <RadioGroup value={choiceId} onValueChange={selectAnswer} className="choice-list" aria-labelledby="decision-question" dir={dir}>
                  {step.choices.map((item, index) => (
                    <label className={"choice-card " + (choiceId === item.id ? "selected" : "")} key={item.id}>
                      <RadioGroupItem value={item.id} id={stepIndex + "-" + item.id} aria-labelledby={`choice-${stepIndex}-${item.id}`} />
                      <span className="choice-letter" aria-hidden="true">{String.fromCharCode(65 + index)}</span><span id={`choice-${stepIndex}-${item.id}`} className="choice-text">{item.label}</span>
                    </label>
                  ))}
                </RadioGroup>
              </fieldset>
              <div className="feedback-status" role="status" aria-atomic="true">{checked && choice ? <div className={"feedback-card " + (choice.correct ? "correct" : "consider")}>
                {choice.correct ? <CheckCircle2 size={22} aria-hidden="true" /> : <Map size={22} aria-hidden="true" />}
                <div><strong>{choice.correct ? t.safer : t.risk}</strong><p>{choice.feedback}</p><div className="consequence"><span>{t.changes}</span>{choice.consequence}</div></div>
              </div> : null}</div>
              {checked && choice ? <JourneyInsight character={character} step={step} index={stepIndex} language={language} /> : null}
              {!storageAvailable ? <p className="storage-notice" role="status">{controls.saveUnavailable}</p> : null}
              <div className="decision-actions">
                <button className="quiet-button" type="button" aria-label={t.back} onClick={previousStep} disabled={stepIndex === 0}><ArrowLeft size={17} aria-hidden="true" /> {t.back}</button>
                {!checked ? <button className="primary-button" type="button" disabled={!choiceId} onClick={checkAnswer}>{t.check} <ArrowRight size={17} aria-hidden="true" /></button>
                  : <button className="primary-button" type="button" onClick={nextStep}>{stepIndex === steps.length - 1 ? t.complete : t.next}<ArrowRight size={17} aria-hidden="true" /></button>}
              </div>
              {reviewing ? <button className="quiet-button recap-return" type="button" onClick={completeJourney} disabled={!steps.every((item, index) => checkedSteps.includes(index) && item.choices.some((option) => option.id === answers[index]))}><BookOpen size={17} aria-hidden="true" />{learning.returnToRecap}</button> : null}
            </> : <div className="completion-card completion-card-expanded">
              <div className="completion-icon"><CheckCircle2 size={34} aria-hidden="true" /></div><p className="eyebrow">{t.done}</p>
              <h2 id="completion-title" ref={completionHeadingRef} tabIndex={-1}>{learning.recapTitle.replace("{name}", character.name)}</h2>
              <p>{learning.recapIntro}</p>
              <p>{t.scoreBefore} <strong>{correctCount} {t.of} {steps.length}</strong> {t.scoreAfter}</p>
              <div className="readiness-meter" aria-label={`${correctCount} ${t.of} ${steps.length} ${t.decisions}`}>{steps.map((_, index) => <span className={index < correctCount ? "filled" : ""} key={index} />)}</div>
              <JourneyRecap character={character} steps={steps} answers={answers} checkedSteps={checkedSteps} language={language} onRevisit={(index) => revisitDecision(index)} />
              <div className="completion-actions"><button className="primary-button" type="button" onClick={() => resetJourney("#choose-character")}><RotateCcw size={17} aria-hidden="true" /> {t.chooseAnother}</button><a className="quiet-button" href={`resources/?topic=${resourceTopicForRoute(character.route)}#resource-browser`}><BookOpen size={17} aria-hidden="true" />{t.openIrelandHub}</a></div>
            </div>}
          </section>
        </div>
        <footer className="site-footer journey-footer"><div className="site-footer-content"><FooterTagline siteName={t.siteName} text={t.tagline} /><p><a href="https://samobrienolinger.github.io/SamOBrienOlinger/" target="_blank" rel="noreferrer">Sam Tim Solutions</a></p><p className="site-footer-copyright">{t.copyright}</p></div></footer>
      </main>
    );
  }

  return <main ref={pageRef} lang={language} dir={dir}>
    <section className="hero-section hero-section-expanded" id="top">
      <nav className="home-nav" aria-label={`${t.siteName}: ${t.menu}`}><a className="brand-button" href="#top" aria-label={`${t.siteName}: ${t.home}`}><img className="brand-mark" src="images/harp-heart-logo.png" alt="" aria-hidden="true" /><span>{t.siteName}</span></a><div className="nav-links"><a className="nav-link" href="about/">{t.about}</a><a className="nav-link" href="resources/">{t.hub}</a><a className="nav-link" href="#official-guidance">{t.official}</a></div><LanguageControl language={language} setLanguage={setLanguage} label={t.language} /><MobileNavigation links={[{ href: "#top", label: t.home }, { href: "about/", label: t.about }, { href: "resources/", label: t.hub }, { href: "#official-guidance", label: t.official }]} language={language} setLanguage={setLanguage} languageLabel={t.language} menuLabel={t.menu} closeLabel={t.closeMenu} /></nav>
      <div className="hero-content hero-content-expanded">
        <p className="eyebrow">{t.heroEyebrow}</p>
        <div className="hero-heading">
          <img
            className="hero-mobile-image"
            src="images/dublin-pathways-hero.webp"
            alt=""
            width={1672}
            height={941}
            decoding="async"
            fetchPriority="high"
          />
          <h1 id="home-title" tabIndex={-1}>{t.heroTitle}</h1>
        </div>
        <div className="hero-copy"><p>{t.heroIntro}</p></div>
        {recentJourney && recentCharacter ? <div className="resume-banner">
          <div><span className="mini-label">{controls.savedJourney}</span><strong>{recentCharacter.name}</strong><span>{controls.stage} {recentJourney.stepIndex + 1} {t.of} {stepsByRoute[recentCharacter.route].length} · {localStep(stepsByRoute[recentCharacter.route][recentJourney.stepIndex], recentCharacter.route, language).stage}</span></div>
          <button className="primary-button" type="button" disabled={!storageReady} onClick={() => resumeJourney(recentJourney)}>{controls.resumeJourney.replace("{name}", recentCharacter.name.split(" ")[0])}<ArrowRight size={18} aria-hidden="true" /></button>
        </div> : null}
        <section
          className="hero-question-board"
          aria-label={t.questionsExplored}
        >
          <p className="hero-question-intro">{t.questionsExplored}</p>
          <div className="hero-question-card question-challenges" data-reveal="question-challenges"><span>{t.challengeLabel}</span><h2>{t.challengeQuestion}</h2></div>
          <div className="hero-question-card question-people" data-reveal="question-people"><span>{t.peopleLabel}</span><h2>{t.peopleQuestion}</h2></div>
          <div className="hero-question-card question-new-life" data-reveal="question-new-life"><span>{t.beginningLabel}</span><h2>{t.beginningQuestion}</h2></div>
        </section>
        <div className="hero-actions"><a className="primary-button hero-button" href="#route-finder">{t.findJourney} <ArrowRight size={18} aria-hidden="true" /></a><a className="quiet-button hero-secondary" href="resources/"><BookOpen size={18} aria-hidden="true" /><span>{t.exploreInfo}</span><ArrowRight className="action-arrow" size={18} aria-hidden="true" /></a></div>
      </div>
    </section>

    <section className="experience-map" data-reveal="experience-map" aria-labelledby="experience-title"><div><p className="eyebrow">{t.howEyebrow}</p><h2 id="experience-title">{t.howTitle}</h2></div><ol><li><span className="experience-icon" aria-hidden="true"><Users /></span><div><strong>{t.how1}</strong><p>{t.how1p}</p></div></li><li><span className="experience-icon" aria-hidden="true"><ArrowRight /></span><div><strong>{t.how2}</strong><p>{t.how2p}</p></div></li><li><span className="experience-icon" aria-hidden="true"><Scale /></span><div><strong>{t.how3}</strong><p>{t.how3p}</p></div></li><li><span className="experience-icon" aria-hidden="true"><CheckCircle2 /></span><div><strong>{t.how4}</strong><p>{t.how4p}</p></div></li></ol></section>

    <section className="route-finder" id="route-finder" aria-labelledby="route-finder-title"><div className="route-finder-copy" data-reveal="route-finder-copy"><p className="eyebrow">{t.routeEyebrow}</p><h2 id="route-finder-title">{t.routeTitle}</h2><p>{t.routeNote}</p></div><div className="route-filter-grid" role="group" aria-label={t.routeTitle}>{routeFilters.map((item) => { const local = localFilter(item.id, language); const selected = filter === item.id; return <button type="button" className={"route-filter " + (selected ? "selected" : "")} aria-pressed={selected} onClick={() => { setFilter(item.id); if (selectedId && item.id !== "all" && character?.filter !== item.id) setSelectedId(""); window.setTimeout(() => document.querySelector("#choose-character")?.scrollIntoView({ behavior: scrollBehavior(), block: "start" }), 0); }} key={item.id}><span className="route-filter-heading"><span>{local.label}</span><span className="selection-indicator" aria-hidden="true">{selected ? <Check size={14} /> : null}</span></span><small>{local.description}</small></button>; })}</div></section>

    <section className="character-section character-section-expanded" id="choose-character">
      <div className="section-heading" data-reveal="character-heading"><div><p className="eyebrow">{t.chooseEyebrow}</p><h2 id="character-picker-title" tabIndex={-1}>{t.chooseTitle}</h2></div><div className="learning-progress-card"><Sparkles size={20} aria-hidden="true" /><div><strong>{completedCharacters.length} {t.of} 12 {t.explored}</strong><span>{storageAvailable ? t.saved : controls.saveUnavailable}</span></div></div></div>
      <div className="start-bar" aria-live="polite">{character ? <><div><span className="mini-label">{t.selected}</span><strong>{character.name} · {localRoute(character.route, language).label}</strong>{selectedSavedJourney ? <span>{controls.stage} {selectedSavedJourney.stepIndex + 1} {t.of} {steps.length}</span> : null}</div><div className="start-actions"><button className="primary-button" type="button" disabled={!storageReady} onClick={beginJourney}>{selectedSavedJourney ? controls.resumeJourney.replace("{name}", character.name.split(" ")[0]) : t.begin}<ArrowRight size={18} aria-hidden="true" /></button>{selectedSavedJourney ? <button className="quiet-button restart-button" type="button" disabled={!storageReady} onClick={restartJourney}>{controls.restart}</button> : null}</div></> : <p>{visibleCharacters.length ? t.selectPrompt : t.emptyPrompt}</p>}</div>
      <RadioGroup value={selectedId} onValueChange={setSelectedId} className="character-grid" aria-label={t.choose} dir={dir}>{visibleCharacters.map((item) => { const Icon = routeIcons[item.route]; const finished = completedCharacters.includes(item.id); return <label id={`character-${item.id}`} data-reveal={`character-${item.id}`} className={"character-card " + (selectedId === item.id ? "selected" : "")} key={item.id}><RadioGroupItem value={item.id} id={item.id} className="sr-only" aria-labelledby={`character-name-${item.id}`} aria-describedby={`character-summary-${item.id}`} /><div className="card-topline"><CharacterPortrait character={item} /><span className="route-tag"><Icon size={14} aria-hidden="true" />{localRoute(item.route, language).short}</span></div>{finished ? <span className="completed-badge"><Check size={13} aria-hidden="true" />{t.exploredBadge}</span> : null}<h3 id={`character-name-${item.id}`}>{item.name}</h3><p className="character-meta">{item.pronouns} · {item.origin}</p><p className="character-role">{item.role}</p><p className="character-summary" id={`character-summary-${item.id}`}>{item.summary}</p><a className="card-action" href={`#character-${item.id}`} onClick={(event) => { if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && event.button === 0) setSelectedId(item.id); }}>{t.walkWith} {item.name.split(" ")[0]} <ArrowRight size={16} aria-hidden="true" /></a></label>; })}</RadioGroup>
    </section>

    <section className="hub-preview" id="information-hub-topics" aria-labelledby="hub-title"><div data-reveal="hub-introduction"><p className="eyebrow">{t.afterStory}</p><h2 id="hub-title">{t.practicalTitle}</h2><p>{t.practicalText}</p><a className="primary-button" href="resources/">{t.openHub} <ArrowRight size={18} aria-hidden="true" /></a></div><nav className="hub-topic-grid" data-reveal="hub-topics" aria-label={t.hub}><a href="resources/?topic=work#resource-browser"><BriefcaseBusiness aria-hidden="true" /><span>{t.workPermits}</span><ArrowRight className="hub-topic-arrow" size={18} aria-hidden="true" /></a><a href="resources/?topic=protection#resource-browser"><ShieldCheck aria-hidden="true" /><span>{t.protectionSafety}</span><ArrowRight className="hub-topic-arrow" size={18} aria-hidden="true" /></a><a href="resources/?topic=study#resource-browser"><GraduationCap aria-hidden="true" /><span>{t.studyEducation}</span><ArrowRight className="hub-topic-arrow" size={18} aria-hidden="true" /></a><a href="resources/?topic=family#resource-browser"><HeartHandshake aria-hidden="true" /><span>{t.familyCommunity}</span><ArrowRight className="hub-topic-arrow" size={18} aria-hidden="true" /></a><a href="resources/?topic=arrival#resource-browser"><MapPin aria-hidden="true" /><span>{t.arrivalRegistration}</span><ArrowRight className="hub-topic-arrow" size={18} aria-hidden="true" /></a><a href="resources/?topic=rights#resource-browser"><Scale aria-hidden="true" /><span>{t.rightsAdvice}</span><ArrowRight className="hub-topic-arrow" size={18} aria-hidden="true" /></a></nav></section>

    <section className="guidance-section" id="official-guidance"><div className="guidance-intro" data-reveal="guidance-introduction"><p className="eyebrow">{t.checkEyebrow}</p><h2>{t.checkTitle}</h2><p>{t.checkText}</p><a className="source-method-link" href="about/#source-method">{learning.sourceMethodLink}</a></div><div className="source-list source-list-detailed">{officialSources.map(([label, description, href], index) => <a href={href} target="_blank" rel="noreferrer" key={href}><span><strong>{label}</strong><small>{language === "en" ? description : officialSourceDescriptions[language][index]}</small></span><ExternalLink size={17} aria-hidden="true" /></a>)}</div></section>
    <footer className="site-footer"><div className="site-footer-content"><FooterTagline siteName={t.siteName} text={t.tagline} /><p><a href="https://samobrienolinger.github.io/SamOBrienOlinger/" target="_blank" rel="noreferrer">Sam Tim Solutions</a></p><p className="site-footer-copyright">{t.copyright}</p></div></footer>
  </main>;
}
