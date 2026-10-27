"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft, BookOpen, BriefcaseBusiness, ExternalLink, GraduationCap,
  HeartHandshake, Home, MapPin, Search, ShieldCheck, Stethoscope,
} from "lucide-react";
import { LanguageControl, ui, useLanguage, type Language } from "../i18n";
import {
  additionalResourceCopy,
  additionalTopicCopy,
  additionalTranslatedTitles,
} from "../additional-page-copy";
import { MobileNavigation } from "../mobile-navigation";
import { resourceDescription } from "../journey-translations";
import { learningCopy } from "../learning-copy";
import { FooterTagline } from "../footer-tagline";
import { factNavLabel } from "../fact-or-fiction/locales";
import { searchText } from "../search/search-copy";
import { practicalResources } from "../journey-learning";
import { SourceDetails } from "../source-details";
import { movingGuideDefinitions, movingGuideResources } from "../moving-guide";

type Topic = "all" | "arrival" | "immigration" | "protection" | "work" | "study" | "daily-life" | "family" | "rights";

const topics: { id: Topic; label: string }[] = [
  { id: "all", label: "All information" }, { id: "arrival", label: "First days" },
  { id: "immigration", label: "Immigration" }, { id: "protection", label: "Protection" },
  { id: "work", label: "Work" }, { id: "study", label: "Study" },
  { id: "daily-life", label: "Daily life" }, { id: "family", label: "Family" },
  { id: "rights", label: "Rights and advice" },
];

const topicIcons = {
  arrival: MapPin, immigration: BookOpen, protection: ShieldCheck,
  work: BriefcaseBusiness, study: GraduationCap, "daily-life": Home,
  family: HeartHandshake, rights: ShieldCheck,
};

const overviewUrl = movingGuideDefinitions.find(({ id }) => id === "overview")!.href;
const beforeArrivalUrl = movingGuideDefinitions.find(({ id }) => id === "beforeArrival")!.href;

export const resources = [
  { topic: "arrival", title: "Registering immigration permission", description: "Who must register, what registration records and how to use the official process.", organisation: "Immigration Service Delivery", href: "https://www.irishimmigration.ie/registering-your-immigration-permission/", icon: MapPin },
  { topic: "arrival", title: "Personal Public Service number", description: "How a PPS number is used for public services and official transactions. It is not immigration permission.", organisation: "Department of Social Protection", href: "https://www.gov.ie/en/department-of-social-protection/services/get-a-personal-public-service-pps-number/", icon: MapPin },
  { topic: "immigration", title: "Choose an immigration purpose", description: "Official starting points for visiting, working, studying, living in Ireland or joining family.", organisation: "Immigration Service Delivery", href: "https://www.irishimmigration.ie/", icon: BookOpen },
  { topic: "immigration", title: "Immigration permission stamps", description: "Understand what the stamp recorded on an Irish Residence Permit allows and requires.", organisation: "Immigration Service Delivery", href: "https://www.irishimmigration.ie/registering-your-immigration-permission/information-on-registering/immigration-permission-stamps/", icon: BookOpen },
  { topic: "protection", title: "Applying for international protection", description: "Official information about the Irish application and examination process.", organisation: "International Protection Office", href: "https://ipo.irishimmigration.ie/", icon: ShieldCheck },
  { topic: "protection", title: "Applications made after 12 June 2026", description: "Plain-language information on the International Protection Act 2026 and the rules applying to newer applications.", organisation: "Irish Refugee Council", href: "https://www.irishrefugeecouncil.ie/get-help/information-hub/after-12-june-2026/", icon: ShieldCheck },
  { topic: "protection", title: "Accommodation and reception supports", description: "Information about IPAS accommodation, services, resident welfare and complaints.", organisation: "International Protection Accommodation Services", href: "https://ipas.irishimmigration.ie/", icon: Home },
  { topic: "protection", title: "Vulnerability and accommodation needs", description: "How applicants can identify disability, health, parenting and other special reception needs, and how accommodation concerns are considered.", organisation: "International Protection Accommodation Services", href: "https://ipas.irishimmigration.ie/accommodation/securing-accommodation/", icon: ShieldCheck },
  { topic: "protection", title: "Independent legal and practical support", description: "Information, advocacy, legal, housing, employment, youth and resettlement services.", organisation: "Irish Refugee Council", href: "https://www.irishrefugeecouncil.ie/get-help/", icon: ShieldCheck },
  { topic: "work", title: "Employment permit types", description: "Current permit categories, eligibility, occupation lists, application guidance and updates.", organisation: "Department of Enterprise, Tourism and Employment", href: "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/", icon: BriefcaseBusiness },
  { topic: "work", title: "Rights when working in Ireland", description: "Pay, terms, working time, leave, records and routes for workplace complaints.", organisation: "Workplace Relations Commission", href: "https://www.workplacerelations.ie/en/what_you_should_know/", icon: BriefcaseBusiness },
  { topic: "work", title: "Migrant employment and exploitation support", description: "Independent information and support for migrant workers, including people at risk of exploitation.", organisation: "Migrant Rights Centre Ireland", href: "https://www.mrci.ie/get-info/", icon: BriefcaseBusiness },
  { topic: "work", title: "EU citizens coming to work", description: "Work rights for EU and EEA citizens, including why an Irish employment permit is generally not required.", organisation: "Citizens Information", href: "https://www.citizensinformation.ie/en/moving-country/working-in-ireland/migrant-workers/coming-from-eu-to-work/", icon: BriefcaseBusiness },
  { topic: "immigration", title: "EU residence rights", description: "The bases on which EU citizens may enter and reside in Ireland, including work, job-seeking, study and self-sufficiency.", organisation: "Citizens Information", href: "https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/rights-of-residence-in-ireland/residence-rights-eu-national/", icon: BookOpen },
  { topic: "study", title: "Coming to study in Ireland", description: "Visa, finance, insurance, course and registration information for non-EEA students.", organisation: "Immigration Service Delivery", href: "https://www.irishimmigration.ie/coming-to-study-in-ireland/", icon: GraduationCap },
  { topic: "study", title: "Education in Ireland", description: "Public information about school, further education, third-level study and educational supports.", organisation: "Citizens Information", href: "https://www.citizensinformation.ie/en/education/", icon: GraduationCap },
  { topic: "daily-life", title: "Healthcare services", description: "How to access GPs, hospitals, emergency services and public health information in Ireland.", organisation: "Health Service Executive", href: "https://www2.hse.ie/services/", icon: Stethoscope },
  { topic: "daily-life", title: "Finding and renting a home", description: "Housing, renting, tenant rights, deposits, homelessness and housing-support information.", organisation: "Citizens Information", href: "https://www.citizensinformation.ie/en/housing/", icon: Home },
  { topic: "daily-life", title: "Independent public information", description: "National information on social welfare, health, housing, money, tax, education and consumer rights.", organisation: "Citizens Information", href: "https://www.citizensinformation.ie/en/", icon: BookOpen },
  { topic: "daily-life", title: "Traveller and Roma equality rights", description: "Information about the discrimination experienced by Traveller and Roma communities and the protections available under Irish equality law.", organisation: "Irish Human Rights and Equality Commission", href: "https://www.ihrec.ie/topics/traveller-and-roma", icon: ShieldCheck },
  { topic: "family", title: "Coming to join family", description: "Find the route based on whether the sponsor is Irish, UK, EEA or Swiss, non-EEA, or has protection status.", organisation: "Immigration Service Delivery", href: "https://www.irishimmigration.ie/coming-to-join-family-in-ireland/", icon: HeartHandshake },
  { topic: "family", title: "Specialist migrant and refugee advice", description: "Information and casework on immigration status, visas, family reunification, citizenship and reception conditions.", organisation: "Nasc", href: "https://nascireland.org/", icon: HeartHandshake },
  { topic: "family", title: "Independent status after domestic abuse", description: "Confidential immigration guidance for a victim whose permission is linked to the alleged perpetrator, including how to apply and what evidence may help.", organisation: "Immigration Service Delivery", href: "https://www.irishimmigration.ie/my-situation-has-changed-since-i-arrived-in-ireland/immigration-guidelines-for-victims-of-domestic-abuse/", icon: ShieldCheck },
  { topic: "family", title: "Domestic-abuse safety and support", description: "Confidential support, interpretation and safety information for women experiencing domestic abuse; call 999 or 112 in an emergency.", organisation: "Women’s Aid", href: "https://www.womensaid.ie/get-help/", icon: HeartHandshake },
] as const;

const rightsAndAdviceTitles = new Set([
  "Independent legal and practical support",
  "Rights when working in Ireland",
  "Independent public information",
  "Traveller and Roma equality rights",
  "Specialist migrant and refugee advice",
  "Independent status after domestic abuse",
]);

const resourceCopy = {
  en: {
    back:"Back to the journeys", eyebrow:"Ireland information hub", title:"Find the right source for the next question.", intro:"Search practical, official and specialist information for people planning a move, seeking protection or building a life in Ireland.", cautionTitle:"Start here, but verify the detail.", caution:"Immigration and protection rules change. Check the linked source for a real situation and seek qualified advice where needed.", browse:"Browse by need", trusted:"Trusted starting points", search:"Search resources", placeholder:"Search work, housing, family…", showing:"Showing", resource:"resource", resources:"resources", open:"Open source", none:"No matching resource", retry:"Try a broader word or choose “All information”.", clear:"Clear filters", arrival:"Arrival orientation", week:"Questions for the first week", weekIntro:"Not every item applies to every person. Use the questions to identify which source or adviser you need.", footer:"General information only. It is not legal advice.",
    questions:["What immigration or protection permission do I have, and what are its conditions?","Do I need to register, and do I have evidence of my appointment or application?","Where will I stay, and who can advise me if the arrangement is unsafe?","How will I access healthcare, education, tax and a PPS number where relevant?","Who can give independent advice if an employer, agent or family member controls my documents?"],
  },
  ga: {
    back:"Ar ais chuig na turais", eyebrow:"Mol eolais na hÉireann", title:"Aimsigh an fhoinse cheart don chéad cheist eile.", intro:"Cuardaigh eolas praiticiúil, oifigiúil agus speisialtóra do dhaoine atá ag pleanáil bogadh, ag lorg cosanta nó ag tógáil saoil in Éirinn.", cautionTitle:"Tosaigh anseo, ach seiceáil na sonraí.", caution:"Athraíonn rialacha inimirce agus cosanta. Seiceáil an fhoinse nasctha do chás fíor agus lorg comhairle cháilithe nuair is gá.", browse:"Brabhsáil de réir riachtanais", trusted:"Pointí tosaithe iontaofa", search:"Cuardaigh acmhainní", placeholder:"Cuardaigh obair, tithíocht, teaghlach…", showing:"Á dtaispeáint", resource:"acmhainn", resources:"acmhainn", open:"Oscail an fhoinse", none:"Níl aon acmhainn mheaitseála", retry:"Bain triail as focal níos leithne nó roghnaigh ‘Gach eolas’.", clear:"Glan na scagairí", arrival:"Treoshuíomh teachta", week:"Ceisteanna don chéad seachtain", weekIntro:"Ní bhaineann gach mír le gach duine. Úsáid na ceisteanna chun an fhoinse nó an comhairleoir a theastaíonn uait a aithint.", footer:"Eolas ginearálta amháin. Ní comhairle dlí é.",
    questions:["Cén cead inimirce nó cosanta atá agam, agus cad iad na coinníollacha?","An gá dom clárú, agus an bhfuil fianaise agam ar mo choinne nó iarratas?","Cá bhfanfaidh mé, agus cé a chabhróidh liom mura bhfuil an socrú sábháilte?","Conas a gheobhaidh mé rochtain ar shláinte, oideachas, cáin agus uimhir PSP nuair is cuí?","Cé a thabharfaidh comhairle neamhspleách má rialaíonn fostóir, gníomhaire nó ball teaghlaigh mo dhoiciméid?"],
  },
  ar: {
    back:"العودة إلى الرحلات", eyebrow:"مركز معلومات أيرلندا", title:"اعثر على المصدر الصحيح للسؤال التالي.", intro:"ابحث في معلومات عملية ورسمية ومتخصصة لمن يخطط للانتقال أو يطلب الحماية أو يبني حياة في أيرلندا.", cautionTitle:"ابدأ هنا، لكن تحقق من التفاصيل.", caution:"تتغير قواعد الهجرة والحماية. تحقق من المصدر المرتبط لحالة حقيقية واطلب مشورة مؤهلة عند الحاجة.", browse:"تصفح حسب الحاجة", trusted:"نقاط بداية موثوقة", search:"ابحث في المصادر", placeholder:"ابحث عن العمل أو السكن أو الأسرة…", showing:"يُعرض", resource:"مصدر", resources:"مصادر", open:"افتح المصدر", none:"لا يوجد مصدر مطابق", retry:"جرّب كلمة أوسع أو اختر «كل المعلومات».", clear:"امسح عوامل التصفية", arrival:"التوجيه عند الوصول", week:"أسئلة الأسبوع الأول", weekIntro:"ليست كل نقطة مناسبة لكل شخص. استخدم الأسئلة لتحديد المصدر أو المستشار الذي تحتاج إليه.", footer:"معلومات عامة فقط، وليست مشورة قانونية.",
    questions:["ما إذن الهجرة أو الحماية الذي أملكه، وما شروطه؟","هل أحتاج إلى التسجيل، وهل لدي دليل على الموعد أو الطلب؟","أين سأقيم، ومن يمكنه نصحي إذا كان الترتيب غير آمن؟","كيف أصل إلى الرعاية الصحية والتعليم والضرائب ورقم PPS عند الحاجة؟","من يمكنه تقديم مشورة مستقلة إذا كان صاحب عمل أو وكيل أو فرد من الأسرة يسيطر على وثائقي؟"],
  },
  ...additionalResourceCopy,
} as const;

const topicCopy: Record<Language, Record<Topic, string>> = {
  en:Object.fromEntries(topics.map((item) => [item.id,item.label])) as Record<Topic,string>,
  ga:{all:"Gach eolas",arrival:"Na chéad laethanta",immigration:"Inimirce",protection:"Cosaint",work:"Obair",study:"Staidéar","daily-life":"Saol laethúil",family:"Teaghlach",rights:"Cearta agus comhairle"},
  ar:{all:"كل المعلومات",arrival:"الأيام الأولى",immigration:"الهجرة",protection:"الحماية",work:"العمل",study:"الدراسة","daily-life":"الحياة اليومية",family:"الأسرة",rights:"الحقوق والمشورة"},
  ...additionalTopicCopy,
};

function isTopic(value: string | null): value is Topic {
  return topics.some((item) => item.id === value);
}

export const translatedTitles: Record<Exclude<Language,"en">, string[]> = {
  ga:["Cead inimirce a chlárú","Uimhir Phearsanta Seirbhíse Poiblí","Roghnaigh cuspóir inimirce","Stampaí ceada inimirce","Iarratas ar chosaint idirnáisiúnta","Iarratais tar éis 12 Meitheamh 2026","Cóiríocht agus tacaíochtaí glactha","Riachtanais leochaileachta agus chóiríochta","Tacaíocht neamhspleách dlí agus phraiticiúil","Cineálacha ceada fostaíochta","Cearta agus tú ag obair in Éirinn","Tacaíocht d’fhostaíocht imirceach agus dúshaothrú","Saoránaigh AE ag teacht chun oibre","Cearta cónaithe AE","Teacht chun staidéir in Éirinn","Oideachas in Éirinn","Seirbhísí cúraim sláinte","Teach a aimsiú agus a fháil ar cíos","Eolas poiblí neamhspleách","Cearta comhionannais an Lucht Siúil agus na Romach","Teacht le teaghlach","Comhairle speisialtóra d’imircigh agus dídeanaithe","Stádas neamhspleách tar éis foréigin teaghlaigh","Sábháilteacht agus tacaíocht i gcás foréigin teaghlaigh"],
  ar:["تسجيل إذن الهجرة","رقم الخدمة العامة الشخصية","اختر غرض الهجرة","أختام إذن الهجرة","التقدم للحماية الدولية","الطلبات المقدمة بعد 12 يونيو 2026","السكن ودعم الاستقبال","احتياجات الضعف والسكن","دعم قانوني وعملي مستقل","أنواع تصاريح العمل","الحقوق عند العمل في أيرلندا","دعم العمال المهاجرين والاستغلال","مواطنو الاتحاد الأوروبي القادمون للعمل","حقوق الإقامة الأوروبية","القدوم للدراسة في أيرلندا","التعليم في أيرلندا","خدمات الرعاية الصحية","العثور على منزل واستئجاره","معلومات عامة مستقلة","حقوق المساواة للرحّل والروما","القدوم للانضمام إلى الأسرة","مشورة متخصصة للمهاجرين واللاجئين","وضع مستقل بعد العنف الأسري","السلامة والدعم في حالات العنف الأسري"],
  ...additionalTranslatedTitles,
};

export default function ResourcesPage() {
  const { language, setLanguage, dir } = useLanguage();
  const t = ui[language];
  const r = resourceCopy[language];
  const learning = learningCopy(language);
  const topicLabels = useMemo(() => ({
    ...topicCopy[language], arrival: learning.movingGuide.arrivalTopic,
  }), [language, learning]);
  const [topic, setTopic] = useState<Topic>("all");
  const [query, setQuery] = useState("");
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search);
      const requestedTopic = params.get("topic");
      const requestedQuery = params.get("q");
      if (isTopic(requestedTopic)) setTopic(requestedTopic);
      if (requestedQuery) setQuery(requestedQuery);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);
  const filtered = useMemo(() => {
    const term = query.trim().toLocaleLowerCase(language);
    return resources.filter((item, index) => {
      const title = language === "en" ? item.title : translatedTitles[language][index];
      const description = resourceDescription(item.title, item.description, language);
      const searchable = `${title} ${description} ${item.organisation} ${topicLabels[item.topic]}`.toLocaleLowerCase(language);
      return (topic === "all" || item.topic === topic || (topic === "rights" && rightsAndAdviceTitles.has(item.title))) && (!term || searchable.includes(term));
    });
  }, [topic, query, language, topicLabels]);
  const extraResources = [...practicalResources(learning), ...movingGuideResources(learning)].filter((item) => {
    const term = query.trim().toLocaleLowerCase(language);
    const searchable = `${item.title} ${item.description} ${item.organisation} ${topicLabels[item.topic]}`.toLocaleLowerCase(language);
    return (topic === "all" || topic === item.topic || (topic === "rights" && "rightsAndAdvice" in item && item.rightsAndAdvice)) && (!term || searchable.includes(term));
  });
  const resultCount = filtered.length + extraResources.length;

  return <main className="resources-page" lang={language} dir={dir}>
    <nav className="home-nav resources-nav" aria-label={`${t.siteName}: ${t.menu}`}>
      <a className="brand-button" href="../" aria-label={`${t.siteName}: ${t.home}`}><img className="brand-mark" src="../images/harp-heart-logo.png" alt="" aria-hidden="true" /><span>{t.siteName}</span></a>
      <div className="nav-links"><a className="nav-link" href="../">{t.journeys}</a><a className="nav-link" href="../about/">{t.about}</a><a className="nav-link" href="../fact-or-fiction/">{factNavLabel(language)}</a><a className="nav-link site-search-link" href="../search/"><Search size={17} aria-hidden="true" />{searchText[language].nav}</a></div><LanguageControl language={language} setLanguage={setLanguage} label={t.language} /><MobileNavigation links={[{ href: "../", label: t.home }, { href: "../#route-finder", label: t.journeys }, { href: "../about/", label: t.about }, { href: "../fact-or-fiction/", label: factNavLabel(language) }, { href: "../search/", label: searchText[language].nav }, { href: "../#official-guidance", label: t.official }]} language={language} setLanguage={setLanguage} languageLabel={t.language} menuLabel={t.menu} closeLabel={t.closeMenu} />
    </nav>

    <header className="resources-hero">
      <a className="back-link" href="../"><ArrowLeft size={16} aria-hidden="true" />{r.back}</a>
      <p className="eyebrow">{r.eyebrow}</p><h1>{r.title}</h1><p>{r.intro}</p>
      <div className="hub-caution"><ShieldCheck size={21} aria-hidden="true" /><span><strong>{r.cautionTitle}</strong> {r.caution}</span></div>
      <p className="source-date-note">{learning.sourceDateMeaning} <a href="../about/#source-method">{learning.sourceMethodLink}</a></p>
    </header>

    <section className="resource-browser" id="resource-browser" aria-labelledby="resource-browser-title">
      <section className="moving-guide-intro" id="moving-to-ireland" aria-labelledby="moving-guide-title">
        <div><p className="eyebrow"><bdi>Citizens Information</bdi></p><h2 id="moving-guide-title">{learning.movingGuide.title}</h2><p>{learning.movingGuide.intro}</p></div>
        <div className="moving-guide-actions">
          <a className="primary-button" href={overviewUrl} target="_blank" rel="noreferrer">{learning.movingGuide.open}<ExternalLink size={17} aria-hidden="true" /></a>
          <a className="quiet-button" href={beforeArrivalUrl} target="_blank" rel="noreferrer">{learning.movingGuide.beforeTravel}<ExternalLink size={17} aria-hidden="true" /></a>
        </div>
      </section>
      <div className="resource-controls">
        <div><p className="eyebrow">{r.browse}</p><h2 id="resource-browser-title">{r.trusted}</h2></div>
        <label className="resource-search"><Search size={18} aria-hidden="true" /><span className="sr-only">{r.search}</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={r.placeholder} /></label>
      </div>
      <div className="topic-tabs" role="group" aria-label={r.browse}>{topics.map((item) => <button type="button" aria-pressed={topic === item.id} className={topic === item.id ? "active" : ""} onClick={() => setTopic(item.id)} key={item.id}>{topicLabels[item.id]}</button>)}</div>
      <p className="result-count" aria-live="polite">{r.showing} {resultCount} {resultCount === 1 ? r.resource : r.resources}</p>
      {resultCount ? <div className="resource-grid">{filtered.map((item) => { const Icon = item.icon; const index=resources.findIndex((entry)=>entry.href===item.href); const title=language === "en" ? item.title : translatedTitles[language][index]; return <article className="resource-card" key={item.href}><div className="resource-icon"><Icon size={22} aria-hidden="true" /></div><span className="resource-topic">{topicLabels[item.topic]}</span><h3>{title}</h3><p>{resourceDescription(item.title, item.description, language)}</p><SourceDetails href={item.href} language={language} publisher={item.organisation} /><a href={item.href} target="_blank" rel="noreferrer">{r.open}<span className="sr-only">: {title}</span> <ExternalLink size={15} aria-hidden="true" /></a></article>; })}{extraResources.map((item) => { const Icon = topicIcons[item.topic]; return <article className="resource-card" key={item.href}><div className="resource-icon"><Icon size={22} aria-hidden="true" /></div><span className="resource-topic">{topicLabels[item.topic]}</span><h3>{item.title}</h3><p>{item.description}</p><SourceDetails href={item.href} language={language} publisher={item.organisation} /><a href={item.href} target="_blank" rel="noreferrer">{r.open}<span className="sr-only">: {item.title}</span> <ExternalLink size={15} aria-hidden="true" /></a></article>; })}</div>
        : <div className="resource-empty"><Search size={28} aria-hidden="true" /><h3>{r.none}</h3><p>{r.retry}</p><button type="button" className="quiet-button" onClick={() => { setQuery(""); setTopic("all"); }}>{r.clear}</button></div>}
    </section>

    <section className="first-week-checklist" aria-labelledby="first-week-title"><div><p className="eyebrow">{r.arrival}</p><h2 id="first-week-title">{r.week}</h2><p>{r.weekIntro}</p></div><ul>{r.questions.map((question)=><li key={question}>{question}</li>)}</ul></section>

    <footer className="site-footer"><div className="site-footer-content"><FooterTagline siteName={t.siteName} text={t.tagline} /><p><a href="https://samobrienolinger.github.io/SamOBrienOlinger/" target="_blank" rel="noreferrer">Sam Tim Solutions</a></p><p className="site-footer-copyright">{t.copyright}</p></div></footer>
  </main>;
}

