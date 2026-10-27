"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft, ArrowRight, BookOpen, Check, ChevronDown, ClipboardCheck, ExternalLink,
  FileSearch, Globe2, Info, Library, Lightbulb, MessageSquareWarning, Search, ShieldCheck,
  Sparkles, Users, X,
} from "lucide-react";
import { LanguageControl, ui, useLanguage } from "../i18n";
import { MobileNavigation } from "../mobile-navigation";
import { FooterTagline } from "../footer-tagline";
import { FooterNavigation, primarySiteLinks } from "../footer-navigation";
import { factEntries, evidenceSources, editorialCheckDate, type FactTopic } from "./facts";
import { localFact } from "./translations";
import { factUi, factNavLabel } from "./locales";
import { searchText } from "../search/search-copy";
import "./facts.css";

const topics: Array<"all" | FactTopic> = ["all", "protection", "welfare", "housing", "work", "community"];
const toolkitLinks = [
  { url: "https://inar.ie/resources/", name: "INAR", description: "Anti-racism resources", icon: Users },
  { url: "https://www.mrci.ie/tied-to-exploitation-experience-of-migrant-workers-in-ireland/", name: "MRCI", description: "Migrant worker rights", icon: ShieldCheck },
  { url: "https://www.esri.ie/migration", name: "ESRI", description: "Migration research", icon: FileSearch },
  { url: "https://www.irishrefugeecouncil.ie/get-help/information-hub/", name: "Irish Refugee Council", description: "Protection information", icon: BookOpen },
] as const;

function revealHashClaim() {
  if (!window.location.hash.startsWith("#check-")) return;
  const id = decodeURIComponent(window.location.hash.slice(1));
  const card = document.getElementById(id);
  if (card instanceof HTMLDetailsElement) {
    card.open = true;
    card.scrollIntoView({ block: "start", behavior: "instant" });
  }
}

export default function FactOrFictionPage() {
  const { language, setLanguage, dir } = useLanguage();
  const shared = ui[language];
  const t = factUi[language];
  const [topic, setTopic] = useState<"all" | FactTopic>("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const frame = window.requestAnimationFrame(revealHashClaim);
    window.addEventListener("hashchange", revealHashClaim);
    return () => { window.cancelAnimationFrame(frame); window.removeEventListener("hashchange", revealHashClaim); };
  }, []);

  const results = useMemo(() => {
    const term = search.trim().toLocaleLowerCase(language);
    return factEntries.filter((entry) => {
      if (topic !== "all" && topic !== entry.topic) return false;
      if (!term) return true;
      const translated = localFact(entry, language);
      const sourceNames = entry.evidenceIds.map((key) => evidenceSources[key].publisher).join(" ");
      return [translated.claim, translated.answer, translated.context, entry.claim, entry.answer, t.topics[entry.topic], sourceNames]
        .join(" ").toLocaleLowerCase(language).includes(term);
    });
  }, [language, search, topic, t]);

  const clear = () => { setSearch(""); setTopic("all"); };

  return <main className="facts-page" lang={language} dir={dir}>
    <nav className="home-nav facts-nav" aria-label={shared.siteName + ": " + shared.menu}>
      <a className="brand-button" href="../" aria-label={shared.siteName + ": " + shared.home}>
        <img className="brand-mark" src="../images/harp-heart-logo.png" alt="" aria-hidden="true" />
        <span>{shared.siteName}</span>
      </a>
      <div className="nav-links">
        <a className="nav-link" href="../">{shared.journeys}</a>
        <a className="nav-link" href="../resources/">{shared.hub}</a>
        <a className="nav-link" href="../about/">{shared.about}</a>
        <a className="nav-link site-search-link" href="../search/"><Search size={17} aria-hidden="true" />{searchText[language].nav}</a>
        <a className="nav-link facts-current" href="./" aria-current="page">{factNavLabel(language)}</a>
      </div>
      <LanguageControl language={language} setLanguage={setLanguage} label={shared.language} />
      <MobileNavigation
        links={primarySiteLinks(language, "../", "facts")}
        language={language} setLanguage={setLanguage} languageLabel={shared.language}
        menuLabel={shared.menu} closeLabel={shared.closeMenu}
      />
    </nav>

    <header className="facts-hero">
      <div className="facts-hero-inner">
        <a className="facts-back" href="../"><ArrowLeft size={17} aria-hidden="true" /> {t.back}</a>
        <div className="facts-hero-intro">
          <p className="eyebrow"><Sparkles size={15} aria-hidden="true" />{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="facts-hero-description">{t.intro}</p>
        </div>
        <div className="facts-hero-shapes" aria-hidden="true"><span>?</span><span><Check size={55} /></span></div>
      </div>
    </header>

    <section className="facts-content" aria-labelledby="facts-list-title">
      <div className="facts-section-heading">
        <div>
          <p className="eyebrow">{t.nav}</p>
          <h2 id="facts-list-title">{t.sectionTitle}</h2>
          <p>{t.sectionIntro}</p>
        </div>
        <span className="facts-total" aria-label={String(factEntries.length) + " " + t.results}>
          <Library size={20} aria-hidden="true" />{factEntries.length} {t.results}
        </span>
      </div>
      <div className="facts-filters" role="search" aria-label={t.searchLabel}>
        <label className="facts-search">
          <Search size={21} aria-hidden="true" />
          <span className="sr-only">{t.searchLabel}</span>
          <input type="search" value={search} placeholder={t.searchPlaceholder}
            onChange={(event) => setSearch(event.target.value)} aria-label={t.searchLabel} />
          {search ? <button type="button" aria-label={t.reset} onClick={() => setSearch("")}><X size={18} aria-hidden="true" /></button> : null}
        </label>
        <div className="facts-filter-topics" role="group" aria-label={t.sectionTitle}>
          {topics.map((item) => <button type="button" key={item} aria-pressed={topic === item}
            className={topic === item ? "active" : ""}
            onClick={() => setTopic(item)}>{t.topics[item]}</button>)}
        </div>
      </div>

      <div className="facts-result-heading">
        <p role="status" aria-live="polite">{t.showing} {results.length} {t.results}</p>
        {(topic !== "all" || search) ? <button className="facts-reset" type="button" onClick={clear}><X size={16} aria-hidden="true" />{t.reset}</button> : null}
      </div>

      {results.length ? <div className="fact-grid">
        {results.map((entry) => {
          const translated = localFact(entry, language);
          return <details className="fact-card" id={"check-" + entry.id} key={entry.id}>
            <summary aria-label={translated.claim + ". " + t.reveal}>
              <span className="fact-card-top"><span className="fact-category">{t.topics[entry.topic]}</span><span className="fact-query-mark" aria-hidden="true">?</span></span>
              <span className="fact-claim">{translated.claim}</span>
              <span className="fact-reveal"><span>{t.reveal}</span><ChevronDown size={19} aria-hidden="true" /></span>
            </summary>
            <div className="fact-card-answer">
              <span className={"fact-verdict fact-verdict-" + entry.verdict}>
                {entry.verdict === "fact" ? <Check size={17} aria-hidden="true" /> : <Info size={17} aria-hidden="true" />}
                {t.verdicts[entry.verdict]}
              </span>
              <h3>{t.why}</h3>
              <p className="fact-answer">{translated.answer}</p>
              <h4>{t.context}</h4>
              <p>{translated.context}</p>
              <div className="fact-evidence">
                <h4><FileSearch size={17} aria-hidden="true" />{t.evidence}</h4>
                <ul>{entry.evidenceIds.map((key) => {
                  const source = evidenceSources[key];
                  return <li key={key}>
                    <div>
                      <span className="fact-kind">{t.kinds[source.kind]}</span>
                      <span className="fact-source-name">{source.publisher}</span>
                      <span className="fact-source-title">{source.title}</span>
                      {source.published ? <small><span>{t.published}: </span><time dateTime={source.published}>{source.published}</time></small> : null}
                    </div>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" aria-label={t.guidance + ": " + source.title}>
                      {t.guidance}<ExternalLink size={16} aria-hidden="true" />
                    </a>
                  </li>;
                })}</ul>
                <small className="fact-checked"><ClipboardCheck size={15} aria-hidden="true" />{t.checked}: <time dateTime={editorialCheckDate}>{editorialCheckDate}</time></small>
              </div>
              <a className="fact-permalink" href={"#check-" + entry.id} aria-label={t.share + ": " + translated.claim}>
                <Globe2 size={16} aria-hidden="true" />{t.share}
              </a>
            </div>
          </details>;
        })}
      </div> : <div className="facts-empty" role="status"><Search size={26} aria-hidden="true" /><p>{t.noResults}</p><button type="button" className="quiet-button" onClick={clear}>{t.reset}</button></div>}

      <p className="facts-editorial-translation"><Globe2 size={17} aria-hidden="true" />{t.translations}</p>
    </section>

    <section className="facts-literacy" aria-labelledby="facts-literacy-title">
      <div className="facts-literacy-inner">
        <div className="facts-literacy-heading">
          <p className="eyebrow">{t.eyebrow}</p><h2 id="facts-literacy-title">{t.toolkitTitle}</h2><p>{t.toolkitIntro}</p>
        </div>
        <div className="facts-literacy-steps">
          <article><span><MessageSquareWarning size={21} aria-hidden="true" /></span><p>{t.stop}</p></article>
          <article><span><Lightbulb size={21} aria-hidden="true" /></span><p>{t.think}</p></article>
          <article><span><FileSearch size={21} aria-hidden="true" /></span><p>{t.check}</p></article>
        </div>
        <a className="facts-literacy-source" href={evidenceSources.misinformation.url} target="_blank" rel="noopener noreferrer">
          {t.guidance}: {evidenceSources.misinformation.publisher}<ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
    </section>

    <section className="facts-deeper" aria-labelledby="facts-deeper-title">
      <div className="facts-section-heading">
        <div><p className="eyebrow">{t.evidence}</p><h2 id="facts-deeper-title">{t.furtherTitle}</h2><p>{t.furtherIntro}</p></div>
      </div>
      <div className="facts-source-directory">{toolkitLinks.map((link) => {
        const Icon = link.icon;
        return <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
          <Icon size={24} aria-hidden="true" /><span><strong>{link.name}</strong><small>{link.description}</small></span>
          <ArrowRight size={17} aria-hidden="true" />
        </a>;
      })}</div>
      <div className="facts-report"><ShieldCheck size={23} aria-hidden="true" />
        <div><a href="https://ireport.ie/" target="_blank" rel="noopener noreferrer">{t.report}<ExternalLink size={15} aria-hidden="true" /></a><p>{t.reportNote}</p></div>
      </div>
      <details className="facts-editorial">
        <summary><BookOpen size={19} aria-hidden="true" />{t.editorialTitle}<ChevronDown size={18} aria-hidden="true" /></summary>
        <p>{t.editorialNote}</p>
        <p>{t.translations}</p>
        <p><strong>{t.checked}:</strong> <time dateTime={editorialCheckDate}>{editorialCheckDate}</time></p>
        <a href="https://github.com/SamOBrienOlinger/My-New-Life-in-Ireland/issues" target="_blank" rel="noopener noreferrer">{shared.siteName}: {t.share}<ExternalLink size={16} aria-hidden="true" /></a>
      </details>
    </section>
    <footer className="site-footer"><div className="site-footer-content">
      <FooterTagline siteName={shared.siteName} text={shared.tagline} />
      <FooterNavigation language={language} rootPrefix="../" currentPage="facts" />
      <p><a href="https://samobrienolinger.github.io/SamOBrienOlinger/" target="_blank" rel="noopener noreferrer">Sam Tim Solutions</a></p>
      <p className="site-footer-copyright">{shared.copyright}</p>
    </div></footer>
  </main>;
}
