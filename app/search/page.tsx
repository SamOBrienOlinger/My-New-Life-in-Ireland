"use client";

import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowLeft, ArrowRight, BookOpen, ExternalLink, FileSearch, Globe2,
  GraduationCap, ListFilter, Search, ShieldCheck, UserRound, X,
} from "lucide-react";
import { LanguageControl, ui, useLanguage } from "../i18n";
import { MobileNavigation } from "../mobile-navigation";
import { FooterTagline } from "../footer-tagline";
import { factNavLabel } from "../fact-or-fiction/locales";
import { searchText, suggestedQueries, type SearchGroup } from "./search-copy";
import { buildSearchDocuments, searchDocuments, searchExcerpt, type SearchDocument } from "./search-index";
import "./search.css";

const resultPageSize = 16;
const groups: SearchGroup[] = ["journeys", "facts", "resources", "about"];
const groupIcons: Record<SearchGroup, typeof Search> = {
  journeys: UserRound, facts: ShieldCheck, resources: BookOpen, about: GraduationCap,
};

function highlighted(text: string, query: string): ReactNode {
  const words = [...new Set(query.trim().split(/\s+/u).filter(Boolean))].slice(0, 10);
  if (!words.length) return text;
  const escaped = words.map((word) => word.replace(/[.*+?^$()|[\]{}\\]/g, "\\$&"));
  const expression = new RegExp("(" + escaped.join("|") + ")", "gi");
  const parts = text.split(expression);
  return parts.map((part, index) =>
    words.some((word) => part.toLocaleLowerCase() === word.toLocaleLowerCase())
      ? <mark key={index}>{part}</mark>
      : <span key={index}>{part}</span>
  );
}

function readQuery(): string {
  return new URLSearchParams(window.location.search).get("q")?.slice(0, 180) ?? "";
}

export default function SiteSearchPage() {
  const { language, setLanguage, dir } = useLanguage();
  const t = searchText[language];
  const shared = ui[language];
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<"all" | SearchGroup>("all");
  const [visible, setVisible] = useState(resultPageSize);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setQuery(readQuery()));
    function restore() { setQuery(readQuery()); setGroup("all"); setVisible(resultPageSize); }
    window.addEventListener("popstate", restore);
    return () => { window.cancelAnimationFrame(frame); window.removeEventListener("popstate", restore); };
  }, []);

  const documents = useMemo(() => buildSearchDocuments(language), [language]);
  const matches = useMemo(() => searchDocuments(documents, query), [documents, query]);
  const shown = useMemo(() => group === "all" ? matches : matches.filter((item) => item.group === group), [matches, group]);
  const perGroup = useMemo(() => Object.fromEntries(groups.map((item) => [item, matches.filter((match) => match.group === item).length])) as Record<SearchGroup, number>, [matches]);

  function changeQuery(value: string) {
    const next = value.slice(0, 180);
    setQuery(next);
    setVisible(resultPageSize);
    setGroup("all");
    // Keep the current URL shareable, without generating a history entry on every keystroke.
    const url = new URL(window.location.href);
    if (next.trim()) url.searchParams.set("q", next.trim());
    else url.searchParams.delete("q");
    window.history.replaceState(null, "", url.pathname + url.search + url.hash);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const heading = document.getElementById("search-results-title");
    heading?.scrollIntoView({ block: "start", behavior: "auto" });
    heading?.focus({ preventScroll: true });
  }

  return <main className="site-search-page" lang={language} dir={dir}>
    <nav className="home-nav site-search-nav" aria-label={shared.siteName + ": " + shared.menu}>
      <a className="brand-button" href="../" aria-label={shared.siteName + ": " + shared.home}>
        <img className="brand-mark" src="../images/harp-heart-logo.png" alt="" aria-hidden="true" />
        <span>{shared.siteName}</span>
      </a>
      <div className="nav-links">
        <a className="nav-link" href="../">{shared.journeys}</a>
        <a className="nav-link" href="../resources/">{shared.hub}</a>
        <a className="nav-link" href="../fact-or-fiction/">{factNavLabel(language)}</a>
        <a className="nav-link" href="../about/">{shared.about}</a>
        <a className="nav-link" href="./" aria-current="page"><Search size={16} aria-hidden="true" /> {t.nav}</a>
      </div>
      <LanguageControl language={language} setLanguage={setLanguage} label={shared.language} />
      <MobileNavigation links={[
        { href: "../", label: shared.home },
        { href: "../#route-finder", label: shared.journeys },
        { href: "../resources/", label: shared.hub },
        { href: "../fact-or-fiction/", label: factNavLabel(language) },
        { href: "../about/", label: shared.about },
        { href: "./", label: t.nav },
      ]} language={language} setLanguage={setLanguage} languageLabel={shared.language}
      menuLabel={shared.menu} closeLabel={shared.closeMenu} />
    </nav>

    <header className="search-hero">
      <div className="search-hero-inner">
        <a className="search-back" href="../"><ArrowLeft size={17} aria-hidden="true" />{t.back}</a>
        <p className="eyebrow"><FileSearch size={18} aria-hidden="true" />{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <p className="search-intro">{t.intro}</p>
        <form className="site-search-form" role="search" onSubmit={submit}>
          <label className="sr-only" htmlFor="site-search-query">{t.title}</label>
          <Search size={22} aria-hidden="true" />
          <input id="site-search-query" name="q" type="search" autoComplete="off" enterKeyHint="search"
            value={query} onChange={(event) => changeQuery(event.target.value)} placeholder={t.placeholder} />
          {query ? <button className="search-input-clear" type="button" onClick={() => changeQuery("")} aria-label={t.clear}><X size={19} aria-hidden="true" /></button> : null}
          <button className="search-submit" type="submit"><span>{t.submit}</span><ArrowRight size={17} aria-hidden="true" /></button>
        </form>
        <p className="search-scope"><Globe2 size={16} aria-hidden="true" />{t.scope}</p>
      </div>
    </header>

    <section className="search-body" aria-labelledby="search-results-title">
      {!query.trim() ? (
        <div className="search-empty-start">
          <div className="search-section-title"><p className="eyebrow">{t.featured}</p><h2 id="search-results-title" tabIndex={-1}>{t.suggestions}</h2><p>{t.tip}</p></div>
          <div className="search-suggestion-list">{(suggestedQueries[language] ?? suggestedQueries.en!).map((suggestion) =>
            <button key={suggestion} type="button" onClick={() => changeQuery(suggestion)}>
              <Search size={17} aria-hidden="true" />{suggestion}<ArrowRight size={15} aria-hidden="true" />
            </button>)}</div>
          <div className="search-sections-grid">{groups.map((item) => {
            const Icon = groupIcons[item];
            return <div className="search-section-summary" key={item}><Icon size={23} aria-hidden="true" /><h3>{t.groups[item]}</h3></div>;
          })}</div>
        </div>
      ) : (
        <>
          <div className="search-section-title">
            <p className="eyebrow">{t.nav}</p>
            <h2 id="search-results-title" tabIndex={-1}>{matches.length} {t.results} {t.forQuery} <span className="search-quoted-query" dir="auto">“{query.trim()}”</span></h2>
            <p>{t.guidance}</p>
          </div>
          <div className="search-result-filters" aria-label={t.filters} role="group">
            <button type="button" aria-pressed={group === "all"} onClick={() => {setGroup("all");setVisible(resultPageSize);}}>
              {t.all}<span>{matches.length}</span>
            </button>
            {groups.map((item) => <button type="button" aria-pressed={group === item} onClick={() => {setGroup(item);setVisible(resultPageSize);}} key={item}>
              {t.groups[item]}<span>{perGroup[item]}</span>
            </button>)}
          </div>
          <p className="sr-only" role="status" aria-live="polite">{shown.length} {t.results}</p>

          {shown.length ? <>
            <div className="search-result-grid">
              {shown.slice(0, visible).map((item) => {
                const Icon = groupIcons[item.group];
                return <article className="site-search-result" key={item.id}>
                  <div className="search-result-meta"><span className="search-result-group"><Icon size={15} aria-hidden="true" />{t.groups[item.group]}</span><span>{item.meta}</span></div>
                  <h3><a href={item.href}>{highlighted(item.title, query)}<ArrowRight size={18} aria-hidden="true" /><span className="sr-only"> · {t.open}</span></a></h3>
                  <p>{highlighted(searchExcerpt(item, query), query)}</p>
                  {item.stage ? <p className="search-stage-note"><ListFilter size={15} aria-hidden="true" />{t.stageNote}</p> : null}
                </article>;
              })}
            </div>
            {shown.length > visible ? <button className="quiet-button search-load-more" type="button" onClick={() => setVisible((count) => count + resultPageSize)}>
              {t.more} ({shown.length - visible})<ArrowRight size={16} aria-hidden="true" />
            </button> : null}
          </> : <div className="search-no-results" role="status">
            <FileSearch size={34} aria-hidden="true" /><h3>{t.empty}</h3><p>{t.emptyHelp}</p>
            <button className="quiet-button" type="button" onClick={() => changeQuery("")}>{t.clear}</button>
          </div>}
        </>
      )}
    </section>
    <footer className="site-footer"><div className="site-footer-content">
      <FooterTagline siteName={shared.siteName} text={shared.tagline} />
      <p><a href="https://samobrienolinger.github.io/SamOBrienOlinger/" target="_blank" rel="noreferrer">Sam Tim Solutions<ExternalLink size={15} aria-hidden="true" /></a></p>
      <p className="site-footer-copyright">{shared.copyright}</p>
    </div></footer>
  </main>;
}
