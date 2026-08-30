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
  characters, routeFilters, routeMeta, stepsByRoute,
  type RouteFilter, type RouteKey,
} from "./journey-data";

type Language = "en" | "ga" | "ar";

const copy = {
  en: { about: "About", hub: "Information hub", official: "Official guidance", choose: "Choose a character", change: "Change character", walking: "You are walking with", decision: "Decision", of: "of", rule: "What the rules mean here", plain: "Plain-language version", detailed: "Detailed version", check: "Check decision", next: "Continue", back: "Back", complete: "Complete journey", listen: "Listen", source: "Check the source" },
  ga: { about: "Maidir leis", hub: "Mol eolais", official: "Treoir oifigiúil", choose: "Roghnaigh carachtar", change: "Athraigh carachtar", walking: "Tá tú ag siúl le", decision: "Cinneadh", of: "as", rule: "Cad a chiallaíonn na rialacha anseo", plain: "Leagan i dteanga shimplí", detailed: "Leagan mionsonraithe", check: "Seiceáil an cinneadh", next: "Lean ar aghaidh", back: "Siar", complete: "Críochnaigh an turas", listen: "Éist", source: "Seiceáil an fhoinse" },
  ar: { about: "حول الموقع", hub: "مركز المعلومات", official: "الإرشادات الرسمية", choose: "اختر شخصية", change: "تغيير الشخصية", walking: "أنت تسير مع", decision: "القرار", of: "من", rule: "ماذا تعني القواعد هنا", plain: "نسخة بلغة مبسطة", detailed: "نسخة مفصلة", check: "تحقق من القرار", next: "متابعة", back: "رجوع", complete: "إكمال الرحلة", listen: "استمع", source: "تحقق من المصدر" },
} satisfies Record<Language, Record<string, string>>;

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

export default function Home() {
  const [selectedId, setSelectedId] = useState("");
  const [filter, setFilter] = useState<RouteFilter>("all");
  const [started, setStarted] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [plainLanguage, setPlainLanguage] = useState(true);
  const [language, setLanguage] = useState<Language>("en");
  const [completedCharacters, setCompletedCharacters] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = JSON.parse(window.localStorage.getItem("mnli-completed-journeys") || "[]");
      return Array.isArray(saved) ? saved.filter((item): item is string => typeof item === "string") : [];
    } catch {
      return [];
    }
  });

  const t = copy[language];
  const character = useMemo(() => characters.find((item) => item.id === selectedId), [selectedId]);
  const visibleCharacters = useMemo(() => characters.filter((item) => filter === "all" || item.filter === filter), [filter]);
  const steps = character ? stepsByRoute[character.route] : [];
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
    utterance.lang = "en-IE";
    window.speechSynthesis.speak(utterance);
  }

  if (started && character) {
    return (
      <main className="journey-shell" lang={language} dir={language === "ar" ? "rtl" : "ltr"}>
        <header className="journey-topbar">
          <button className="brand-button" type="button" onClick={() => resetJourney()}>
            <span className="brand-mark" aria-hidden="true">MN</span><span>My New Life in Ireland</span>
          </button>
          <div className="journey-tools">
            <label className="language-control"><Languages size={17} aria-hidden="true" /><span className="sr-only">Interface language</span>
              <select value={language} onChange={(event) => setLanguage(event.target.value as Language)}>
                <option value="en">English</option><option value="ga">Gaeilge</option><option value="ar">العربية</option>
              </select>
            </label>
            <a className="quiet-button compact-button" href="resources/"><BookOpen size={17} aria-hidden="true" />{t.hub}</a>
            <button className="quiet-button compact-button" type="button" onClick={() => resetJourney()}><Users size={17} aria-hidden="true" /> {t.change}</button>
          </div>
        </header>

        <div className="journey-layout journey-layout-expanded">
          <aside className="character-rail" aria-label="Selected character">
            <div className={"avatar avatar-" + character.tone}>{character.initials}</div>
            <p className="mini-label">{t.walking}</p><h1>{character.name}</h1><p>{character.pronouns}</p>
            <div className="rail-detail"><MapPin size={16} aria-hidden="true" /><span>{character.origin}</span></div>
            <div className="rail-detail"><RouteIcon size={16} aria-hidden="true" /><span>{character.role}</span></div>
            <div className="route-pill">{routeMeta[character.route].label}</div>
            <p className="identity-note">{character.identity}</p>
            <div className="stakes-card"><strong>What is at stake</strong><p>{character.stakes}</p></div>
            <ol className="stage-trail" aria-label="Journey stages">
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
              <Progress value={((stepIndex + 1) / steps.length) * 100} aria-label="Journey progress" />
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
                <div><strong>{choice.correct ? "A safer, informed decision" : "A risk appears on the route"}</strong><p>{choice.feedback}</p><div className="consequence"><span>What changes next</span>{choice.consequence}</div></div>
              </div> : null}
              <div className="decision-actions">
                <button className="quiet-button" type="button" onClick={previousStep} disabled={stepIndex === 0}><ArrowLeft size={17} aria-hidden="true" /> {t.back}</button>
                {!checked ? <button className="primary-button" type="button" disabled={!choiceId} onClick={() => setChecked(true)}>{t.check} <ArrowRight size={17} aria-hidden="true" /></button>
                  : <button className="primary-button" type="button" onClick={nextStep}>{stepIndex === steps.length - 1 ? t.complete : t.next}<ArrowRight size={17} aria-hidden="true" /></button>}
              </div>
            </> : <div className="completion-card completion-card-expanded">
              <div className="completion-icon"><CheckCircle2 size={34} aria-hidden="true" /></div><p className="eyebrow">Journey complete</p>
              <h2>You walked five stages with {character.name}.</h2>
              <p>You identified <strong>{correctCount} of {steps.length}</strong> safer, informed decisions. Replay the journey to explore different consequences without changing anyone’s real legal position.</p>
              <div className="readiness-meter" aria-label={`${correctCount} of ${steps.length} informed decisions`}>{steps.map((_, index) => <span className={index < correctCount ? "filled" : ""} key={index} />)}</div>
              <div className="takeaway-grid">
                <article><strong>Check the route</strong><span>Visa, residence, work, study and family permission are not interchangeable.</span></article>
                <article><strong>Keep your evidence</strong><span>Documents, dates and truthful explanations help people navigate separate systems.</span></article>
                <article><strong>Build a support network</strong><span>Official information, independent advice and community connections all matter.</span></article>
              </div>
              <div className="completion-actions"><button className="primary-button" type="button" onClick={() => resetJourney("#choose-character")}><RotateCcw size={17} aria-hidden="true" /> Choose another person</button><a className="quiet-button" href="resources/"><BookOpen size={17} aria-hidden="true" />Open the Ireland information hub</a></div>
            </div>}
          </section>
        </div>
        <footer className="journey-footer"><span>Fictional composite story. General education only. Rules and circumstances change.</span><span>Copyright © 2026 Sam O&apos;Brien-Olinger. All rights reserved.</span><a href="about/">About and ownership</a></footer>
      </main>
    );
  }

  return <main>
    <section className="hero-section hero-section-expanded" id="top">
      <nav className="home-nav" aria-label="Main navigation"><a className="brand-button" href="#top"><span className="brand-mark" aria-hidden="true">MN</span><span>My New Life in Ireland</span></a><div className="nav-links"><a className="nav-link" href="about/">About</a><a className="nav-link" href="resources/">Information hub</a><a className="nav-link" href="#official-guidance">Official guidance</a></div></nav>
      <div className="hero-content hero-content-expanded"><p className="eyebrow">An interactive journey through Ireland’s migration system</p><h1>A new country is not one decision. It is a chain of them.</h1><p className="hero-copy">Choose one of twelve fictional people. Make decisions before departure, at the border and after arrival. See how identity and circumstance can overlap, learn the Irish rules and find the source behind every stage.</p><div className="hero-actions"><a className="primary-button hero-button" href="#route-finder">Find a journey <ArrowRight size={18} aria-hidden="true" /></a><a className="quiet-button hero-secondary" href="resources/"><BookOpen size={18} aria-hidden="true" />Explore practical information</a></div><div className="hero-proof" aria-label="Experience summary"><span><strong>12</strong> people</span><span><strong>6</strong> route types</span><span><strong>40</strong> decisions</span><span><strong>1</strong> Irish context</span></div></div>
    </section>

    <section className="experience-map" aria-labelledby="experience-title"><div><p className="eyebrow">How the experience works</p><h2 id="experience-title">Plan. Choose. See what changes.</h2></div><ol><li><span>01</span><strong>Explore a realistic situation</strong><p>Each fictional character combines circumstances and decisions that people may encounter.</p></li><li><span>02</span><strong>Choose what happens next</strong><p>See how each decision changes what happens next.</p></li><li><span>03</span><strong>Understand the Irish rules</strong><p>Clear explanations connect each decision to current official guidance and specialist sources.</p></li><li><span>04</span><strong>Prepare for life in Ireland</strong><p>Journeys continue into registration, work, study, family and community life.</p></li></ol></section>

    <section className="route-finder" id="route-finder" aria-labelledby="route-finder-title"><div className="route-finder-copy"><p className="eyebrow">Start from the situation</p><h2 id="route-finder-title">What brings the person to Ireland?</h2><p>This is an educational filter, not an eligibility checker. A real case may involve more than one route or a route not shown here.</p></div><div className="route-filter-grid" role="group" aria-label="Filter characters by journey type">{routeFilters.map((item) => <button type="button" className={"route-filter " + (filter === item.id ? "selected" : "")} aria-pressed={filter === item.id} onClick={() => { setFilter(item.id); if (selectedId && item.id !== "all" && character?.filter !== item.id) setSelectedId(""); window.setTimeout(() => document.querySelector("#choose-character")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0); }} key={item.id}><span>{item.label}</span><small>{item.description}</small></button>)}</div></section>

    <section className="character-section character-section-expanded" id="choose-character">
      <div className="section-heading"><div><p className="eyebrow">Choose a perspective</p><h2>Whose journey will you take?</h2></div><div className="learning-progress-card"><Sparkles size={20} aria-hidden="true" /><div><strong>{completedCharacters.length} of 12 journeys explored</strong><span>Progress is saved only on this device.</span></div></div></div>
      <RadioGroup value={selectedId} onValueChange={setSelectedId} className="character-grid" aria-label="Choose a character">{visibleCharacters.map((item) => { const Icon = routeIcons[item.route]; const finished = completedCharacters.includes(item.id); return <label className={"character-card " + (selectedId === item.id ? "selected" : "")} key={item.id}><RadioGroupItem value={item.id} id={item.id} className="sr-only" /><div className="card-topline"><div className={"avatar avatar-" + item.tone}>{item.initials}</div><span className="route-tag"><Icon size={14} aria-hidden="true" />{routeMeta[item.route].short}</span></div>{finished ? <span className="completed-badge"><Check size={13} aria-hidden="true" />Explored</span> : null}<h3>{item.name}</h3><p className="character-meta">{item.pronouns} · {item.origin}</p><p className="character-role">{item.role}</p><p className="character-summary">{item.summary}</p><span className="card-action">Walk with {item.name.split(" ")[0]} <ArrowRight size={16} aria-hidden="true" /></span></label>; })}</RadioGroup>
      <div className="start-bar" aria-live="polite">{character ? <><div><span className="mini-label">Selected journey</span><strong>{character.name} · {routeMeta[character.route].label}</strong></div><button className="primary-button" type="button" onClick={beginJourney}>Begin five-stage journey <ArrowRight size={18} aria-hidden="true" /></button></> : <p>{visibleCharacters.length ? "Select a character to begin." : "Choose another route to see available journeys."}</p>}</div>
    </section>

    <section className="hub-preview" aria-labelledby="hub-title"><div><p className="eyebrow">After the story</p><h2 id="hub-title">Practical information for life in Ireland</h2><p>The information hub organises trusted links around arrival, immigration, protection, work, housing, health, education and community support.</p><a className="primary-button" href="resources/">Open the information hub <ArrowRight size={18} aria-hidden="true" /></a></div><div className="hub-topic-grid" aria-label="Information hub topics"><span><BriefcaseBusiness aria-hidden="true" />Work and permits</span><span><ShieldCheck aria-hidden="true" />Protection and safety</span><span><GraduationCap aria-hidden="true" />Study and education</span><span><HeartHandshake aria-hidden="true" />Family and community</span><span><MapPin aria-hidden="true" />Arrival and registration</span><span><Scale aria-hidden="true" />Rights and advice</span></div></section>

    <section className="guidance-section" id="official-guidance"><div className="guidance-intro"><p className="eyebrow">Check before you act</p><h2>Use the current source for a real case.</h2><p>This experience teaches common patterns. It is not legal advice and cannot decide eligibility. Irish rules and individual circumstances change.</p><span>Source review completed 29 August 2026.</span></div><div className="source-list source-list-detailed">{officialSources.map(([label, description, href]) => <a href={href} target="_blank" rel="noreferrer" key={href}><span><strong>{label}</strong><small>{description}</small></span><ExternalLink size={17} aria-hidden="true" /></a>)}</div></section>
    <footer className="site-footer"><div className="site-footer-brand"><strong>My New Life in Ireland</strong><span>Interactive migration pathways</span><a href="about/">About and ownership</a></div><div className="site-footer-copy"><p>Designed to build understanding, not to replace professional advice.</p><p>Copyright © 2026 Sam O&apos;Brien-Olinger. All rights reserved.</p></div></footer>
  </main>;
}
