"use client";

import { useMemo, useState } from "react";
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
import { MobileNavigation } from "./mobile-navigation";

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
  ["Workplace Relations Commission", "Employment rights and workplace remedies", "https://www.workplacerelations.ie/en/what_you_should_know/coming_to_work_in_ireland/"],
];

const officialSourceDescriptions = {
  ga: ["Obair, staidéar, teaghlach, clárú agus cead","Cineálacha ceada, incháilitheacht agus liostaí gairmeacha reatha","Iarratas ar chosaint idirnáisiúnta in Éirinn","Cearta agus nósanna imeachta, lena n-áirítear iarratais tar éis 12 Meitheamh 2026","Cearta fostaíochta agus leigheasanna san ionad oibre"],
  ar: ["العمل والدراسة والأسرة والتسجيل والإذن","أنواع التصاريح الحالية والأهلية وقوائم المهن","التقدم للحماية الدولية في أيرلندا","الحقوق والإجراءات، بما فيها الطلبات بعد 12 يونيو 2026","حقوق العمل وسبل الانتصاف في مكان العمل"],
};

export default function Home() {
  const [selectedId, setSelectedId] = useState("");
  const [filter, setFilter] = useState<RouteFilter>("all");
  const [started, setStarted] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [plainLanguage, setPlainLanguage] = useState(true);
  const { language, setLanguage, dir } = useLanguage();
  const [completedCharacters, setCompletedCharacters] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = JSON.parse(window.localStorage.getItem("mnli-completed-journeys") || "[]");
      return Array.isArray(saved) ? saved.filter((item): item is string => typeof item === "string") : [];
    } catch {
      return [];
    }
  });

  const t = ui[language];
  const baseCharacter = useMemo(() => characters.find((item) => item.id === selectedId), [selectedId]);
  const character = useMemo(() => baseCharacter ? localCharacter(baseCharacter, language) : undefined, [baseCharacter, language]);
  const visibleCharacters = useMemo(() => characters.filter((item) => filter === "all" || item.filter === filter).map((item) => localCharacter(item, language)), [filter, language]);
  const steps = character ? stepsByRoute[character.route].map((item) => localStep(item, character.route, language)) : [];
  const step = steps[stepIndex];
  const choiceId = answers[stepIndex] || "";
  const choice = step?.choices.find((item) => item.id === choiceId);
  const correctCount = steps.reduce((total, item, index) => total + (item.choices.find((option) => option.id === answers[index])?.correct ? 1 : 0), 0);
  const RouteIcon = character ? routeIcons[character.route] : Users;

  function beginJourney() {
    if (!character) return;
    setStarted(true); setStepIndex(0); setAnswers({}); setChecked(false); setCompleted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function nextStep() {
    if (stepIndex === steps.length - 1) {
      setCompleted(true);
      if (character && !completedCharacters.includes(character.id)) {
        const updated = [...completedCharacters, character.id];
        setCompletedCharacters(updated);
        try { window.localStorage.setItem("mnli-completed-journeys", JSON.stringify(updated)); } catch {}
      }
    } else {
      setStepIndex((current) => current + 1); setChecked(false);
    }
  }

  function previousStep() {
    if (stepIndex === 0) return;
    setStepIndex((current) => current - 1); setChecked(false);
  }

  function resetJourney(target?: string) {
    setStarted(false); setCompleted(false); setStepIndex(0); setAnswers({}); setChecked(false); setSelectedId("");
    window.setTimeout(() => target ? document.querySelector(target)?.scrollIntoView({ behavior: "smooth" }) : window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  }

  function readStep() {
    if (!step || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(`${step.title}. ${step.scene}. ${plainLanguage ? step.plainLaw : step.law}`);
    utterance.lang = language === "ga" ? "ga-IE" : language === "ar" ? "ar" : "en-IE";
    window.speechSynthesis.speak(utterance);
  }

  if (started && character) {
    return (
      <main className="journey-shell" lang={language} dir={dir}>
        <header className="journey-topbar">
          <button className="brand-button" type="button" onClick={() => resetJourney()}>
            <img className="brand-mark" src="/images/harp-heart-logo.png" alt="" aria-hidden="true" /><span>{t.siteName}</span>
          </button>
          <div className="journey-tools">
            <LanguageControl language={language} setLanguage={setLanguage} label={t.language} />
            <a className="quiet-button compact-button" href="resources/"><BookOpen size={17} aria-hidden="true" />{t.hub}</a>
            <button className="quiet-button compact-button" type="button" onClick={() => resetJourney()}><Users size={17} aria-hidden="true" /> {t.change}</button>
          </div>
        </header>

        <div className="journey-layout journey-layout-expanded">
          <aside className="character-rail" aria-label={t.selected}>
            <div className={"avatar avatar-" + character.tone}>{character.initials}</div>
            <p className="mini-label">{t.walking}</p><h1>{character.name}</h1><p>{character.pronouns}</p>
            <div className="rail-detail"><MapPin size={16} aria-hidden="true" /><span>{character.origin}</span></div>
            <div className="rail-detail"><RouteIcon size={16} aria-hidden="true" /><span>{character.role}</span></div>
            <div className="route-pill">{localRoute(character.route, language).label}</div>
            <p className="identity-note">{character.identity}</p>
            <div className="stakes-card"><strong>{t.stake}</strong><p>{character.stakes}</p></div>
            <ol className="stage-trail" aria-label={t.stages}>
              {steps.map((item, index) => (
                <li className={index === stepIndex && !completed ? "active" : index < stepIndex || completed ? "done" : ""} key={item.stage}>
                  <span>{index < stepIndex || completed ? <Check size={13} aria-hidden="true" /> : index + 1}</span>
                  <div><strong>{item.stage}</strong><small>{item.title}</small></div>
                </li>
              ))}
            </ol>
          </aside>

          <section className="decision-panel" aria-live="polite">
            {!completed && step ? <>
              <div className="progress-row"><span>{t.decision} {stepIndex + 1} {t.of} {steps.length}</span><span>{Math.round(((stepIndex + 1) / steps.length) * 100)}%</span></div>
              <Progress value={((stepIndex + 1) / steps.length) * 100} aria-label={t.progress} />
              <div className="decision-heading">
                <div className="decision-kicker"><p className="eyebrow">{step.eyebrow}</p><span>{step.stage}</span></div>
                <h2>{step.title}</h2><p className="scene">{step.scene}</p>
              </div>
              <div className="learning-tools">
                <button className="tool-button" type="button" onClick={readStep}><Volume2 size={17} aria-hidden="true" />{t.listen}</button>
                <button className="tool-button" type="button" onClick={() => setPlainLanguage((current) => !current)}><Languages size={17} aria-hidden="true" />{plainLanguage ? t.detailed : t.plain}</button>
              </div>
              <div className="law-card"><Scale size={22} aria-hidden="true" /><div><strong>{t.rule}</strong><p>{plainLanguage ? step.plainLaw : step.law}</p><a href={step.sourceUrl} target="_blank" rel="noreferrer">{t.source}: {step.sourceLabel}<ExternalLink size={14} aria-hidden="true" /></a></div></div>
              <fieldset className="choice-fieldset">
                <legend>{step.question}</legend>
                <RadioGroup value={choiceId} onValueChange={(value) => { setAnswers((current) => ({ ...current, [stepIndex]: value })); setChecked(false); }} className="choice-list">
                  {step.choices.map((item, index) => (
                    <label className={"choice-card " + (choiceId === item.id ? "selected" : "")} key={item.id}>
                      <RadioGroupItem value={item.id} id={stepIndex + "-" + item.id} />
                      <span className="choice-letter" aria-hidden="true">{String.fromCharCode(65 + index)}</span><span>{item.label}</span>
                    </label>
                  ))}
                </RadioGroup>
              </fieldset>
              {checked && choice ? <div className={"feedback-card " + (choice.correct ? "correct" : "consider")}>
                {choice.correct ? <CheckCircle2 size={22} aria-hidden="true" /> : <Map size={22} aria-hidden="true" />}
                <div><strong>{choice.correct ? t.safer : t.risk}</strong><p>{choice.feedback}</p><div className="consequence"><span>{t.changes}</span>{choice.consequence}</div></div>
              </div> : null}
              <div className="decision-actions">
                <button className="quiet-button" type="button" onClick={previousStep} disabled={stepIndex === 0}><ArrowLeft size={17} aria-hidden="true" /> {t.back}</button>
                {!checked ? <button className="primary-button" type="button" disabled={!choiceId} onClick={() => setChecked(true)}>{t.check} <ArrowRight size={17} aria-hidden="true" /></button>
                  : <button className="primary-button" type="button" onClick={nextStep}>{stepIndex === steps.length - 1 ? t.complete : t.next}<ArrowRight size={17} aria-hidden="true" /></button>}
              </div>
            </> : <div className="completion-card completion-card-expanded">
              <div className="completion-icon"><CheckCircle2 size={34} aria-hidden="true" /></div><p className="eyebrow">{t.done}</p>
              <h2>{t.walked} {character.name}.</h2>
              <p>{t.scoreBefore} <strong>{correctCount} {t.of} {steps.length}</strong> {t.scoreAfter}</p>
              <div className="readiness-meter" aria-label={`${correctCount} of ${steps.length} informed decisions`}>{steps.map((_, index) => <span className={index < correctCount ? "filled" : ""} key={index} />)}</div>
              <div className="takeaway-grid">
                <article><strong>{t.checkRoute}</strong><span>{t.checkRouteP}</span></article>
                <article><strong>{t.evidence}</strong><span>{t.evidenceP}</span></article>
                <article><strong>{t.network}</strong><span>{t.networkP}</span></article>
              </div>
              <div className="completion-actions"><button className="primary-button" type="button" onClick={() => resetJourney("#choose-character")}><RotateCcw size={17} aria-hidden="true" /> {t.chooseAnother}</button><a className="quiet-button" href="resources/"><BookOpen size={17} aria-hidden="true" />{t.openIrelandHub}</a></div>
            </div>}
          </section>
        </div>
        <footer className="site-footer journey-footer"><div className="site-footer-content"><p><strong>{t.siteName}</strong> - {t.tagline}</p><p><a href="https://samobrienolinger.github.io/SamOBrienOlinger/" target="_blank" rel="noreferrer">Sam Tim Solutions</a> - {t.footerNote}</p><p className="site-footer-copyright">{t.copyright}</p></div></footer>
      </main>
    );
  }

  return <main lang={language} dir={dir}>
    <section className="hero-section hero-section-expanded" id="top">
      <nav className="home-nav" aria-label="Main navigation"><a className="brand-button" href="#top"><img className="brand-mark" src="/images/harp-heart-logo.png" alt="" aria-hidden="true" /><span>{t.siteName}</span></a><div className="nav-links"><a className="nav-link" href="about/">{t.about}</a><a className="nav-link" href="resources/">{t.hub}</a><a className="nav-link" href="#official-guidance">{t.official}</a></div><LanguageControl language={language} setLanguage={setLanguage} label={t.language} /><MobileNavigation links={[{ href: "#top", label: t.home }, { href: "about/", label: t.about }, { href: "resources/", label: t.hub }, { href: "#official-guidance", label: t.official }]} language={language} setLanguage={setLanguage} languageLabel={t.language} menuLabel={t.menu} closeLabel={t.closeMenu} /></nav>
      <div className="hero-content hero-content-expanded">
        <p className="eyebrow">{t.heroEyebrow}</p>
        <h1>{t.heroTitle}</h1>
        <div className="hero-copy"><p>{t.heroIntro}</p></div>
        <section className="hero-question-board" aria-label={t.questionsExplored}>
          <p className="hero-question-intro">{t.questionsExplored}</p>
          <article className="hero-question-card question-challenges"><span>{t.challengeLabel}</span><h2>{t.challengeQuestion}</h2></article>
          <article className="hero-question-card question-people"><span>{t.peopleLabel}</span><h2>{t.peopleQuestion}</h2></article>
          <article className="hero-question-card question-new-life"><span>{t.beginningLabel}</span><h2>{t.beginningQuestion}</h2></article>
        </section>
        <div className="hero-actions"><a className="primary-button hero-button" href="#route-finder">{t.findJourney} <ArrowRight size={18} aria-hidden="true" /></a><a className="quiet-button hero-secondary" href="resources/"><BookOpen size={18} aria-hidden="true" /><span>{t.exploreInfo}</span><ArrowRight className="action-arrow" size={18} aria-hidden="true" /></a></div>
        <div className="hero-proof" aria-label={t.atAGlance}><p className="hero-proof-label">{t.atAGlance}</p><span><strong>12</strong><small>{t.people}</small></span><span><strong>6</strong><small>{t.routes}</small></span><span><strong>40</strong><small>{t.decisions}</small></span><span><strong>1</strong><small>{t.ireland}</small></span></div>
      </div>
    </section>

    <section className="experience-map" aria-labelledby="experience-title"><div><p className="eyebrow">{t.howEyebrow}</p><h2 id="experience-title">{t.howTitle}</h2></div><ol><li><span className="experience-icon" aria-hidden="true"><Users /></span><div><strong>{t.how1}</strong><p>{t.how1p}</p></div></li><li><span className="experience-icon" aria-hidden="true"><ArrowRight /></span><div><strong>{t.how2}</strong><p>{t.how2p}</p></div></li><li><span className="experience-icon" aria-hidden="true"><Scale /></span><div><strong>{t.how3}</strong><p>{t.how3p}</p></div></li><li><span className="experience-icon" aria-hidden="true"><CheckCircle2 /></span><div><strong>{t.how4}</strong><p>{t.how4p}</p></div></li></ol></section>

    <section className="route-finder" id="route-finder" aria-labelledby="route-finder-title"><div className="route-finder-copy"><p className="eyebrow">{t.routeEyebrow}</p><h2 id="route-finder-title">{t.routeTitle}</h2><p>{t.routeNote}</p></div><div className="route-filter-grid" role="group" aria-label={t.routeTitle}>{routeFilters.map((item) => { const local = localFilter(item.id, language); const selected = filter === item.id; return <button type="button" className={"route-filter " + (selected ? "selected" : "")} aria-pressed={selected} onClick={() => { setFilter(item.id); if (selectedId && item.id !== "all" && character?.filter !== item.id) setSelectedId(""); window.setTimeout(() => document.querySelector("#choose-character")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0); }} key={item.id}><span className="route-filter-heading"><span>{local.label}</span><span className="selection-indicator" aria-hidden="true">{selected ? <Check size={14} /> : null}</span></span><small>{local.description}</small></button>; })}</div></section>

    <section className="character-section character-section-expanded" id="choose-character">
      <div className="section-heading"><div><p className="eyebrow">{t.chooseEyebrow}</p><h2>{t.chooseTitle}</h2></div><div className="learning-progress-card"><Sparkles size={20} aria-hidden="true" /><div><strong>{completedCharacters.length} {t.of} 12 {t.explored}</strong><span>{t.saved}</span></div></div></div>
      <RadioGroup value={selectedId} onValueChange={setSelectedId} className="character-grid" aria-label={t.choose}>{visibleCharacters.map((item) => { const Icon = routeIcons[item.route]; const finished = completedCharacters.includes(item.id); return <label className={"character-card " + (selectedId === item.id ? "selected" : "")} key={item.id}><RadioGroupItem value={item.id} id={item.id} className="sr-only" /><div className="card-topline"><div className={"avatar avatar-" + item.tone}>{item.initials}</div><span className="route-tag"><Icon size={14} aria-hidden="true" />{localRoute(item.route, language).short}</span></div>{finished ? <span className="completed-badge"><Check size={13} aria-hidden="true" />{t.exploredBadge}</span> : null}<h3>{item.name}</h3><p className="character-meta">{item.pronouns} · {item.origin}</p><p className="character-role">{item.role}</p><p className="character-summary">{item.summary}</p><span className="card-action">{t.walkWith} {item.name.split(" ")[0]} <ArrowRight size={16} aria-hidden="true" /></span></label>; })}</RadioGroup>
      <div className="start-bar" aria-live="polite">{character ? <><div><span className="mini-label">{t.selected}</span><strong>{character.name} · {localRoute(character.route, language).label}</strong></div><button className="primary-button" type="button" onClick={beginJourney}>{t.begin} <ArrowRight size={18} aria-hidden="true" /></button></> : <p>{visibleCharacters.length ? t.selectPrompt : t.emptyPrompt}</p>}</div>
    </section>

    <section className="hub-preview" id="information-hub-topics" aria-labelledby="hub-title"><div><p className="eyebrow">{t.afterStory}</p><h2 id="hub-title">{t.practicalTitle}</h2><p>{t.practicalText}</p><a className="primary-button" href="resources/">{t.openHub} <ArrowRight size={18} aria-hidden="true" /></a></div><nav className="hub-topic-grid" aria-label={t.hub}><a href="resources/?topic=work#resource-browser"><BriefcaseBusiness aria-hidden="true" /><span>{t.workPermits}</span><ArrowRight className="hub-topic-arrow" size={18} aria-hidden="true" /></a><a href="resources/?topic=protection#resource-browser"><ShieldCheck aria-hidden="true" /><span>{t.protectionSafety}</span><ArrowRight className="hub-topic-arrow" size={18} aria-hidden="true" /></a><a href="resources/?topic=study#resource-browser"><GraduationCap aria-hidden="true" /><span>{t.studyEducation}</span><ArrowRight className="hub-topic-arrow" size={18} aria-hidden="true" /></a><a href="resources/?topic=family#resource-browser"><HeartHandshake aria-hidden="true" /><span>{t.familyCommunity}</span><ArrowRight className="hub-topic-arrow" size={18} aria-hidden="true" /></a><a href="resources/?topic=arrival#resource-browser"><MapPin aria-hidden="true" /><span>{t.arrivalRegistration}</span><ArrowRight className="hub-topic-arrow" size={18} aria-hidden="true" /></a><a href="resources/?topic=rights#resource-browser"><Scale aria-hidden="true" /><span>{t.rightsAdvice}</span><ArrowRight className="hub-topic-arrow" size={18} aria-hidden="true" /></a></nav></section>

    <section className="guidance-section" id="official-guidance"><div className="guidance-intro"><p className="eyebrow">{t.checkEyebrow}</p><h2>{t.checkTitle}</h2><p>{t.checkText}</p><span>{t.review}</span></div><div className="source-list source-list-detailed">{officialSources.map(([label, description, href], index) => <a href={href} target="_blank" rel="noreferrer" key={href}><span><strong>{label}</strong><small>{language === "en" ? description : officialSourceDescriptions[language][index]}</small></span><ExternalLink size={17} aria-hidden="true" /></a>)}</div></section>
    <footer className="site-footer"><div className="site-footer-content"><p><strong>{t.siteName}</strong> - {t.tagline}</p><p><a href="https://samobrienolinger.github.io/SamOBrienOlinger/" target="_blank" rel="noreferrer">Sam Tim Solutions</a> - {t.footerNote}</p><p className="site-footer-copyright">{t.copyright}</p></div></footer>
  </main>;
}
