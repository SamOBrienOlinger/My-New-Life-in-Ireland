"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft, BookOpen, BriefcaseBusiness, ExternalLink, GraduationCap,
  HeartHandshake, Home, MapPin, Search, ShieldCheck, Stethoscope,
} from "lucide-react";

type Topic = "all" | "arrival" | "immigration" | "protection" | "work" | "study" | "daily-life" | "family";

const topics: { id: Topic; label: string }[] = [
  { id: "all", label: "All information" }, { id: "arrival", label: "First days" },
  { id: "immigration", label: "Immigration" }, { id: "protection", label: "Protection" },
  { id: "work", label: "Work" }, { id: "study", label: "Study" },
  { id: "daily-life", label: "Daily life" }, { id: "family", label: "Family" },
];

const resources = [
  { topic: "arrival", title: "Registering immigration permission", description: "Who must register, what registration records and how to use the official process.", organisation: "Immigration Service Delivery", href: "https://www.irishimmigration.ie/registering-your-immigration-permission/", icon: MapPin },
  { topic: "arrival", title: "Personal Public Service number", description: "How a PPS number is used for public services and official transactions. It is not immigration permission.", organisation: "Department of Social Protection", href: "https://www.gov.ie/en/department-of-social-protection/services/get-a-personal-public-service-pps-number/", icon: MapPin },
  { topic: "immigration", title: "Choose an immigration purpose", description: "Official starting points for visiting, working, studying, living in Ireland or joining family.", organisation: "Immigration Service Delivery", href: "https://www.irishimmigration.ie/", icon: BookOpen },
  { topic: "immigration", title: "Immigration permission stamps", description: "Understand what the stamp recorded on an Irish Residence Permit allows and requires.", organisation: "Immigration Service Delivery", href: "https://www.irishimmigration.ie/registering-your-immigration-permission/information-on-registering/immigration-permission-stamps/", icon: BookOpen },
  { topic: "protection", title: "Applying for international protection", description: "Official information about the Irish application and examination process.", organisation: "International Protection Office", href: "https://ipo.irishimmigration.ie/", icon: ShieldCheck },
  { topic: "protection", title: "Applications made after 12 June 2026", description: "Plain-language information on the International Protection Act 2026 and the rules applying to newer applications.", organisation: "Irish Refugee Council", href: "https://www.irishrefugeecouncil.ie/get-help/information-hub/after-12-june-2026/", icon: ShieldCheck },
  { topic: "protection", title: "Accommodation and reception supports", description: "Information about IPAS accommodation, services, resident welfare and complaints.", organisation: "International Protection Accommodation Services", href: "https://ipas.irishimmigration.ie/", icon: Home },
  { topic: "protection", title: "Independent legal and practical support", description: "Information, advocacy, legal, housing, employment, youth and resettlement services.", organisation: "Irish Refugee Council", href: "https://www.irishrefugeecouncil.ie/get-help/", icon: ShieldCheck },
  { topic: "work", title: "Employment permit types", description: "Current permit categories, eligibility, occupation lists, application guidance and updates.", organisation: "Department of Enterprise, Tourism and Employment", href: "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/", icon: BriefcaseBusiness },
  { topic: "work", title: "Rights when working in Ireland", description: "Pay, terms, working time, leave, records and routes for workplace complaints.", organisation: "Workplace Relations Commission", href: "https://www.workplacerelations.ie/en/what_you_should_know/coming_to_work_in_ireland/", icon: BriefcaseBusiness },
  { topic: "work", title: "Migrant employment and exploitation support", description: "Independent information and support for migrant workers, including people at risk of exploitation.", organisation: "Migrant Rights Centre Ireland", href: "https://www.mrci.ie/", icon: BriefcaseBusiness },
  { topic: "study", title: "Coming to study in Ireland", description: "Visa, finance, insurance, course and registration information for non-EEA students.", organisation: "Immigration Service Delivery", href: "https://www.irishimmigration.ie/coming-to-study-in-ireland/", icon: GraduationCap },
  { topic: "study", title: "Education in Ireland", description: "Public information about school, further education, third-level study and educational supports.", organisation: "Citizens Information", href: "https://www.citizensinformation.ie/en/education/", icon: GraduationCap },
  { topic: "daily-life", title: "Healthcare services", description: "How to access GPs, hospitals, emergency services and public health information in Ireland.", organisation: "Health Service Executive", href: "https://www2.hse.ie/services/", icon: Stethoscope },
  { topic: "daily-life", title: "Finding and renting a home", description: "Housing, renting, tenant rights, deposits, homelessness and housing-support information.", organisation: "Citizens Information", href: "https://www.citizensinformation.ie/en/housing/", icon: Home },
  { topic: "daily-life", title: "Independent public information", description: "National information on social welfare, health, housing, money, tax, education and consumer rights.", organisation: "Citizens Information", href: "https://www.citizensinformation.ie/en/", icon: BookOpen },
  { topic: "family", title: "Coming to join family", description: "Find the route based on whether the sponsor is Irish, UK, EEA or Swiss, non-EEA, or has protection status.", organisation: "Immigration Service Delivery", href: "https://www.irishimmigration.ie/coming-to-join-family-in-ireland/", icon: HeartHandshake },
  { topic: "family", title: "Specialist migrant and refugee advice", description: "Information and casework on immigration status, visas, family reunification, citizenship and reception conditions.", organisation: "Nasc", href: "https://nascireland.org/", icon: HeartHandshake },
] as const;

export default function ResourcesPage() {
  const [topic, setTopic] = useState<Topic>("all");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return resources.filter((item) => (topic === "all" || item.topic === topic) && (!term || `${item.title} ${item.description} ${item.organisation}`.toLowerCase().includes(term)));
  }, [topic, query]);

  return <main className="resources-page">
    <nav className="home-nav resources-nav" aria-label="Main navigation">
      <a className="brand-button" href="../"><span className="brand-mark" aria-hidden="true">MN</span><span>My New Life in Ireland</span></a>
      <div className="nav-links"><a className="nav-link" href="../">Journeys</a><a className="nav-link" href="../about/">About</a></div>
    </nav>

    <header className="resources-hero">
      <a className="back-link" href="../"><ArrowLeft size={16} aria-hidden="true" />Back to the journeys</a>
      <p className="eyebrow">Ireland information hub</p>
      <h1>Find the right source for the next question.</h1>
      <p>Search practical, official and specialist information for people planning a move, seeking protection or building a life in Ireland.</p>
      <div className="hub-caution"><ShieldCheck size={21} aria-hidden="true" /><span><strong>Start here, but verify the detail.</strong> Immigration and protection rules change. Check the linked source for a real situation and seek qualified advice where needed.</span></div>
    </header>

    <section className="resource-browser" aria-labelledby="resource-browser-title">
      <div className="resource-controls">
        <div><p className="eyebrow">Browse by need</p><h2 id="resource-browser-title">Trusted starting points</h2></div>
        <label className="resource-search"><Search size={18} aria-hidden="true" /><span className="sr-only">Search resources</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search work, housing, family…" /></label>
      </div>
      <div className="topic-tabs" role="group" aria-label="Filter information by topic">{topics.map((item) => <button type="button" aria-pressed={topic === item.id} className={topic === item.id ? "active" : ""} onClick={() => setTopic(item.id)} key={item.id}>{item.label}</button>)}</div>
      <p className="result-count" aria-live="polite">Showing {filtered.length} {filtered.length === 1 ? "resource" : "resources"}</p>
      {filtered.length ? <div className="resource-grid">{filtered.map((item) => { const Icon = item.icon; return <article className="resource-card" key={item.href}><div className="resource-icon"><Icon size={22} aria-hidden="true" /></div><span className="resource-topic">{topics.find((entry) => entry.id === item.topic)?.label}</span><h3>{item.title}</h3><p>{item.description}</p><small>{item.organisation}</small><a href={item.href} target="_blank" rel="noreferrer">Open source <ExternalLink size={15} aria-hidden="true" /></a></article>; })}</div>
        : <div className="resource-empty"><Search size={28} aria-hidden="true" /><h3>No matching resource</h3><p>Try a broader word or choose “All information”.</p><button type="button" className="quiet-button" onClick={() => { setQuery(""); setTopic("all"); }}>Clear filters</button></div>}
    </section>

    <section className="first-week-checklist" aria-labelledby="first-week-title"><div><p className="eyebrow">Arrival orientation</p><h2 id="first-week-title">Questions for the first week</h2><p>Not every item applies to every person. Use the questions to identify which source or adviser you need.</p></div><ul><li>What immigration or protection permission do I have, and what are its conditions?</li><li>Do I need to register, and do I have evidence of my appointment or application?</li><li>Where will I stay, and who can advise me if the arrangement is unsafe?</li><li>How will I access healthcare, education, tax and a PPS number where relevant?</li><li>Who can give independent advice if an employer, agent or family member controls my documents?</li></ul></section>

    <footer className="site-footer"><div className="site-footer-brand"><strong>My New Life in Ireland</strong><span>Interactive migration pathways</span><a href="../about/">About and ownership</a></div><div className="site-footer-copy"><p>General information only. It is not legal advice.</p><p>Copyright © 2026 Sam O&apos;Brien-Olinger. All rights reserved.</p></div></footer>
  </main>;
}
