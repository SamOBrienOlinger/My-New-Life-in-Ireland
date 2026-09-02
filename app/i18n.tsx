"use client";

import { useEffect, useState } from "react";
import { Languages } from "lucide-react";
import type { Character, Choice, RouteFilter, RouteKey, Step } from "./journey-data";

export type Language = "en" | "ga" | "ar";
const storageKey = "mnli-language";

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem(storageKey);
    return saved === "ga" || saved === "ar" ? saved : "en";
  });

  useEffect(() => {
    window.localStorage.setItem(storageKey, language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return { language, setLanguage: setLanguageState, dir: language === "ar" ? "rtl" as const : "ltr" as const };
}

export function LanguageControl({ language, setLanguage, label }: { language: Language; setLanguage: (language: Language) => void; label?: string }) {
  return <label className="language-control"><Languages size={17} aria-hidden="true" /><span className="sr-only">{label || "Language"}</span>
    <select value={language} onChange={(event) => setLanguage(event.target.value as Language)} aria-label={label || "Language"}>
      <option value="en">English</option><option value="ga">Gaeilge</option><option value="ar">العربية</option>
    </select>
  </label>;
}

export const ui = {
  en: {
    language: "Language", siteName: "My New Life in Ireland", about: "About", hub: "Information hub", official: "Official guidance", journeys: "Journeys",
    heroEyebrow: "An interactive journey through Ireland’s migration system", heroTitle: "Every journey to Ireland is different.", heroIntro: "Choose one of twelve fictional people and guide their journey from departure to life in Ireland.",
    challengeLabel: "Challenges & choices", challengeQuestion: "What do people face when they come to Ireland?", peopleLabel: "People", peopleQuestion: "Who are they?", beginningLabel: "New beginnings", beginningQuestion: "How do they make a new life in Ireland?",
    findJourney: "Find a journey", exploreInfo: "Explore practical information", people: "people", routes: "route types", decisions: "decisions", ireland: "Ireland",
    howEyebrow: "How the experience works", howTitle: "Plan. Choose. See what changes.", how1: "Explore a realistic situation", how1p: "Each fictional character combines circumstances and decisions that people may encounter.", how2: "Choose what happens next", how2p: "See how each decision shapes the journey.", how3: "Understand Ireland’s immigration system", how3p: "Learn how permissions, procedures and rights may affect each decision, with links to current official guidance and specialist sources.", how4: "Prepare for life in Ireland", how4p: "Journeys continue into registration, work, study, family and community life.",
    routeEyebrow: "Start from your situation", routeTitle: "What brings you to Ireland?", routeNote: "This is an educational filter, not an eligibility checker. A real case may involve more than one route or a route not shown here.",
    chooseEyebrow: "Choose a perspective", chooseTitle: "Whose journey will you take?", explored: "journeys explored", saved: "Progress is saved only on this device.", exploredBadge: "Explored", walkWith: "Walk with", selected: "Selected journey", begin: "Begin five-stage journey", selectPrompt: "Select a character to begin.", emptyPrompt: "Choose another route to see available journeys.",
    afterStory: "After the story", practicalTitle: "Practical information for life in Ireland", practicalText: "The information hub organises trusted links around arrival, immigration, protection, work, housing, health, education and community support.", openHub: "Open the information hub", workPermits: "Work and permits", protectionSafety: "Protection and safety", studyEducation: "Study and education", familyCommunity: "Family and community", arrivalRegistration: "Arrival and registration", rightsAdvice: "Rights and advice",
    checkEyebrow: "Check before you act", checkTitle: "Use the current source for a real case.", checkText: "This experience teaches common patterns. It is not legal advice and cannot decide eligibility. Immigration requirements and individual circumstances change.", review: "Source review completed 29 August 2026.",
    tagline: "Interactive migration pathways", ownership: "About and ownership", footerNote: "Designed to build understanding, not to replace professional advice.", copyright: "Copyright © 2026 Sam O’Brien-Olinger. All rights reserved.",
    choose: "Choose a character", change: "Change character", walking: "You are walking with", stake: "What is at stake", stages: "Journey stages", decision: "Decision", of: "of", progress: "Journey progress", rule: "What the rules mean here", plain: "Plain-language version", detailed: "Detailed version", check: "Check decision", next: "Continue", back: "Back", complete: "Complete journey", listen: "Listen", source: "Check the source", safer: "A safer, informed decision", risk: "A risk appears on the route", changes: "What changes next",
    done: "Journey complete", walked: "You walked five stages with", scoreBefore: "You identified", scoreAfter: "safer, informed decisions. Replay the journey to explore different consequences without changing anyone’s real legal position.", checkRoute: "Check the route", checkRouteP: "Visa, residence, work, study and family permission are not interchangeable.", evidence: "Keep your evidence", evidenceP: "Documents, dates and truthful explanations help people navigate separate systems.", network: "Build a support network", networkP: "Official information, independent advice and community connections all matter.", chooseAnother: "Choose another person", openIrelandHub: "Open the Ireland information hub", disclaimer: "Fictional composite story. General education only. Rules and circumstances change.",
  },
  ga: {
    language: "Teanga", siteName: "Mo Shaol Nua in Éirinn", about: "Maidir leis", hub: "Mol eolais", official: "Treoir oifigiúil", journeys: "Turais",
    heroEyebrow: "Turas idirghníomhach trí chóras imirce na hÉireann", heroTitle: "Tá gach turas go hÉirinn difriúil.", heroIntro: "Roghnaigh duine ficseanúil as dáréag agus treoraigh a dturas ón imeacht go dtí an saol in Éirinn.",
    challengeLabel: "Dúshláin agus roghanna", challengeQuestion: "Cad a bhíonn os comhair daoine nuair a thagann siad go hÉirinn?", peopleLabel: "Daoine", peopleQuestion: "Cé hiad?", beginningLabel: "Tús nua", beginningQuestion: "Conas a chruthaíonn siad saol nua in Éirinn?",
    findJourney: "Aimsigh turas", exploreInfo: "Fiosraigh eolas praiticiúil", people: "duine", routes: "chineál bealaigh", decisions: "cinneadh", ireland: "Éire",
    howEyebrow: "Conas a oibríonn sé", howTitle: "Pleanáil. Roghnaigh. Féach cad a athraíonn.", how1: "Fiosraigh cás réalaíoch", how1p: "Cuimsíonn gach carachtar ficseanúil cúinsí agus cinntí a d’fhéadfadh teacht roimh dhaoine.", how2: "Roghnaigh cad a tharlaíonn ina dhiaidh", how2p: "Féach conas a mhúnlaíonn gach cinneadh an turas.", how3: "Tuig córas inimirce na hÉireann", how3p: "Foghlaim conas a d’fhéadfadh ceadanna, nósanna imeachta agus cearta dul i bhfeidhm ar gach cinneadh, le naisc chuig foinsí oifigiúla agus speisialtóra.", how4: "Ullmhaigh don saol in Éirinn", how4p: "Leanann na turais ar aghaidh chuig clárú, obair, staidéar, teaghlach agus saol pobail.",
    routeEyebrow: "Tosaigh le do chás", routeTitle: "Cad a thugann go hÉirinn thú?", routeNote: "Scagaire oideachais é seo, ní seiceálaí incháilitheachta. D’fhéadfadh níos mó ná bealach amháin a bheith i gceist i gcás fíor.",
    chooseEyebrow: "Roghnaigh dearcadh", chooseTitle: "Cé leis a rachaidh tú ar an turas?", explored: "turas fiosraithe", saved: "Sábháiltear dul chun cinn ar an ngléas seo amháin.", exploredBadge: "Fiosraithe", walkWith: "Siúil le", selected: "Turas roghnaithe", begin: "Tosaigh an turas cúig chéim", selectPrompt: "Roghnaigh carachtar chun tosú.", emptyPrompt: "Roghnaigh bealach eile chun turais a fheiceáil.",
    afterStory: "Tar éis an scéil", practicalTitle: "Eolas praiticiúil don saol in Éirinn", practicalText: "Eagraíonn an mol eolais naisc iontaofa faoi theacht, inimirce, cosaint, obair, tithíocht, sláinte, oideachas agus tacaíocht pobail.", openHub: "Oscail an mol eolais", workPermits: "Obair agus ceadanna", protectionSafety: "Cosaint agus sábháilteacht", studyEducation: "Staidéar agus oideachas", familyCommunity: "Teaghlach agus pobal", arrivalRegistration: "Teacht agus clárú", rightsAdvice: "Cearta agus comhairle",
    checkEyebrow: "Seiceáil sula ngníomhaíonn tú", checkTitle: "Úsáid an fhoinse reatha do chás fíor.", checkText: "Múineann an t-eispéireas patrúin choitianta. Ní comhairle dlí é agus ní féidir leis incháilitheacht a chinneadh. Athraíonn riachtanais agus cúinsí.", review: "Athbhreithníodh na foinsí an 29 Lúnasa 2026.",
    tagline: "Bealaí idirghníomhacha imirce", ownership: "Maidir leis agus úinéireacht", footerNote: "Ceaptha chun tuiscint a chothú, ní chun comhairle ghairmiúil a ionadú.", copyright: "Cóipcheart © 2026 Sam O’Brien-Olinger. Gach ceart ar cosaint.",
    choose: "Roghnaigh carachtar", change: "Athraigh carachtar", walking: "Tá tú ag siúl le", stake: "Cad atá i mbaol", stages: "Céimeanna an turais", decision: "Cinneadh", of: "as", progress: "Dul chun cinn", rule: "Cad a chiallaíonn na rialacha anseo", plain: "Leagan simplí", detailed: "Leagan mionsonraithe", check: "Seiceáil an cinneadh", next: "Lean ar aghaidh", back: "Siar", complete: "Críochnaigh an turas", listen: "Éist", source: "Seiceáil an fhoinse", safer: "Cinneadh níos sábháilte agus eolasach", risk: "Tá riosca le feiceáil ar an mbealach", changes: "Cad a athraíonn anois",
    done: "Turas críochnaithe", walked: "Shiúil tú cúig chéim le", scoreBefore: "D’aithin tú", scoreAfter: "cinneadh níos sábháilte. Déan an turas arís chun iarmhairtí eile a fhiosrú gan seasamh dlíthiúil aon duine a athrú.", checkRoute: "Seiceáil an bealach", checkRouteP: "Ní hionann víosa, cónaí, obair, staidéar agus cead teaghlaigh.", evidence: "Coinnigh d’fhianaise", evidenceP: "Cabhraíonn doiciméid, dátaí agus mínithe fírinneacha le daoine córais éagsúla a thuiscint.", network: "Tóg líonra tacaíochta", networkP: "Tá eolas oifigiúil, comhairle neamhspleách agus naisc phobail tábhachtach.", chooseAnother: "Roghnaigh duine eile", openIrelandHub: "Oscail mol eolais na hÉireann", disclaimer: "Scéal cumaisc ficseanúil. Oideachas ginearálta amháin. Athraíonn rialacha agus cúinsí.",
  },
  ar: {
    language: "اللغة", siteName: "حياتي الجديدة في أيرلندا", about: "عن الموقع", hub: "مركز المعلومات", official: "الإرشادات الرسمية", journeys: "الرحلات",
    heroEyebrow: "رحلة تفاعلية عبر نظام الهجرة الأيرلندي", heroTitle: "كل رحلة إلى أيرلندا مختلفة.", heroIntro: "اختر شخصية خيالية من بين اثنتي عشرة شخصية ووجّه رحلتها من المغادرة إلى الحياة في أيرلندا.",
    challengeLabel: "التحديات والخيارات", challengeQuestion: "ما الذي يواجهه الناس عندما يأتون إلى أيرلندا؟", peopleLabel: "الأشخاص", peopleQuestion: "من هم؟", beginningLabel: "بدايات جديدة", beginningQuestion: "كيف يبنون حياة جديدة في أيرلندا؟",
    findJourney: "اعثر على رحلة", exploreInfo: "استكشف المعلومات العملية", people: "شخصاً", routes: "أنواع مسارات", decisions: "قراراً", ireland: "أيرلندا",
    howEyebrow: "كيف تعمل التجربة", howTitle: "خطّط. اختر. شاهد ما يتغيّر.", how1: "استكشف حالة واقعية", how1p: "تجمع كل شخصية خيالية ظروفاً وقرارات قد يواجهها الناس.", how2: "اختر ما يحدث لاحقاً", how2p: "شاهد كيف يشكّل كل قرار مسار الرحلة.", how3: "افهم نظام الهجرة الأيرلندي", how3p: "تعرّف إلى كيفية تأثير الأذونات والإجراءات والحقوق في كل قرار، مع روابط إلى الإرشادات الرسمية والمصادر المتخصصة.", how4: "استعد للحياة في أيرلندا", how4p: "تستمر الرحلات لتشمل التسجيل والعمل والدراسة والأسرة والحياة المجتمعية.",
    routeEyebrow: "ابدأ من وضعك", routeTitle: "ما الذي يأتي بك إلى أيرلندا؟", routeNote: "هذا مرشّح تعليمي وليس أداة لتحديد الأهلية. قد تتضمن الحالة الحقيقية أكثر من مسار واحد أو مساراً غير معروض هنا.",
    chooseEyebrow: "اختر منظوراً", chooseTitle: "رحلة مَن ستخوض؟", explored: "رحلة مستكشفة", saved: "يُحفظ التقدم على هذا الجهاز فقط.", exploredBadge: "تم الاستكشاف", walkWith: "سر مع", selected: "الرحلة المختارة", begin: "ابدأ رحلة من خمس مراحل", selectPrompt: "اختر شخصية للبدء.", emptyPrompt: "اختر مساراً آخر لرؤية الرحلات المتاحة.",
    afterStory: "بعد القصة", practicalTitle: "معلومات عملية للحياة في أيرلندا", practicalText: "ينظم مركز المعلومات روابط موثوقة حول الوصول والهجرة والحماية والعمل والسكن والصحة والتعليم والدعم المجتمعي.", openHub: "افتح مركز المعلومات", workPermits: "العمل والتصاريح", protectionSafety: "الحماية والسلامة", studyEducation: "الدراسة والتعليم", familyCommunity: "الأسرة والمجتمع", arrivalRegistration: "الوصول والتسجيل", rightsAdvice: "الحقوق والمشورة",
    checkEyebrow: "تحقق قبل أن تتصرف", checkTitle: "استخدم المصدر الحالي للحالة الحقيقية.", checkText: "تشرح هذه التجربة أنماطاً شائعة. وهي ليست مشورة قانونية ولا تحدد الأهلية. تتغير متطلبات الهجرة والظروف الفردية.", review: "اكتملت مراجعة المصادر في 29 أغسطس 2026.",
    tagline: "مسارات هجرة تفاعلية", ownership: "عن الموقع والملكية", footerNote: "صُمم لتعزيز الفهم، لا ليحل محل المشورة المهنية.", copyright: "حقوق النشر © 2026 Sam O’Brien-Olinger. جميع الحقوق محفوظة.",
    choose: "اختر شخصية", change: "غيّر الشخصية", walking: "أنت تسير مع", stake: "ما هو على المحك", stages: "مراحل الرحلة", decision: "القرار", of: "من", progress: "تقدم الرحلة", rule: "ماذا تعني القواعد هنا", plain: "نسخة مبسطة", detailed: "نسخة مفصلة", check: "تحقق من القرار", next: "متابعة", back: "رجوع", complete: "أكمل الرحلة", listen: "استمع", source: "تحقق من المصدر", safer: "قرار أكثر أماناً واستنارة", risk: "ظهر خطر في المسار", changes: "ما الذي سيتغير لاحقاً",
    done: "اكتملت الرحلة", walked: "سرت عبر خمس مراحل مع", scoreBefore: "حددت", scoreAfter: "قرارات أكثر أماناً واستنارة. أعد الرحلة لاستكشاف نتائج مختلفة من دون تغيير الوضع القانوني الحقيقي لأي شخص.", checkRoute: "تحقق من المسار", checkRouteP: "التأشيرة والإقامة والعمل والدراسة وإذن الأسرة ليست أموراً متبادلة.", evidence: "احتفظ بأدلتك", evidenceP: "تساعد الوثائق والتواريخ والتفسيرات الصادقة في التعامل مع الأنظمة المختلفة.", network: "ابنِ شبكة دعم", networkP: "المعلومات الرسمية والمشورة المستقلة والروابط المجتمعية كلها مهمة.", chooseAnother: "اختر شخصاً آخر", openIrelandHub: "افتح مركز معلومات أيرلندا", disclaimer: "قصة خيالية مركبة. للتعليم العام فقط. تتغير القواعد والظروف.",
  },
} as const;

const routeText: Record<Language, Record<RouteKey, { label: string; short: string; focus: string }>> = {
  en: {
    critical:{label:"Critical Skills Employment Permit",short:"Skilled work",focus:"a critical-skills employment journey"}, general:{label:"General Employment Permit",short:"Employment",focus:"a general employment-permit journey"}, protection:{label:"International protection",short:"Protection",focus:"an international-protection journey"}, study:{label:"Long-stay study",short:"Study",focus:"a long-stay study journey"}, family:{label:"Join family",short:"Family",focus:"a family-reunification journey"}, "protection-access":{label:"Protection with accessibility needs",short:"Protection + access",focus:"protection with disability and reception needs"}, "eu-mobility":{label:"EU free movement",short:"EU mobility",focus:"EU free movement, work and equality"}, "family-safety":{label:"Independent permission after domestic abuse",short:"Family + safety",focus:"safety and independent immigration permission"},
  },
  ga: {
    critical:{label:"Cead Fostaíochta do Scileanna Criticiúla",short:"Obair oilte",focus:"turas fostaíochta scileanna criticiúla"}, general:{label:"Cead Fostaíochta Ginearálta",short:"Fostaíocht",focus:"turas ceada fostaíochta ghinearálta"}, protection:{label:"Cosaint idirnáisiúnta",short:"Cosaint",focus:"turas cosanta idirnáisiúnta"}, study:{label:"Staidéar fadfhanachta",short:"Staidéar",focus:"turas staidéir fadfhanachta"}, family:{label:"Teacht le teaghlach",short:"Teaghlach",focus:"turas athaontaithe teaghlaigh"}, "protection-access":{label:"Cosaint le riachtanais inrochtaineachta",short:"Cosaint + rochtain",focus:"cosaint le riachtanais míchumais agus ghlactha"}, "eu-mobility":{label:"Saorghluaiseacht AE",short:"Soghluaisteacht AE",focus:"saorghluaiseacht, obair agus comhionannas AE"}, "family-safety":{label:"Cead neamhspleách tar éis foréigin teaghlaigh",short:"Teaghlach + sábháilteacht",focus:"sábháilteacht agus cead inimirce neamhspleách"},
  },
  ar: {
    critical:{label:"تصريح توظيف المهارات الحرجة",short:"عمل ماهر",focus:"رحلة عمل ضمن المهارات الحرجة"}, general:{label:"تصريح التوظيف العام",short:"التوظيف",focus:"رحلة تصريح توظيف عام"}, protection:{label:"الحماية الدولية",short:"الحماية",focus:"رحلة حماية دولية"}, study:{label:"دراسة طويلة الإقامة",short:"الدراسة",focus:"رحلة دراسة طويلة الإقامة"}, family:{label:"الانضمام إلى الأسرة",short:"الأسرة",focus:"رحلة لمّ شمل الأسرة"}, "protection-access":{label:"الحماية مع احتياجات الوصول",short:"الحماية + الوصول",focus:"الحماية مع احتياجات الإعاقة والاستقبال"}, "eu-mobility":{label:"حرية التنقل في الاتحاد الأوروبي",short:"تنقل أوروبي",focus:"حرية التنقل والعمل والمساواة في الاتحاد الأوروبي"}, "family-safety":{label:"إذن مستقل بعد العنف الأسري",short:"الأسرة + السلامة",focus:"السلامة وإذن هجرة مستقل"},
  },
};

export function localRoute(route: RouteKey, language: Language) { return routeText[language][route]; }

const filterText: Record<Language, Record<RouteFilter, { label: string; description: string }>> = {
  en:{all:{label:"Show everyone",description:"Compare all twelve fictional journeys."},work:{label:"I want to work",description:"Employment-permit journeys."},study:{label:"I want to study",description:"Course, visa, finance and Stamp 2 decisions."},family:{label:"I want to join family",description:"Sponsor, relationship and permission decisions."},protection:{label:"I need safety",description:"International-protection and reception decisions."},eu:{label:"I am an EU citizen",description:"Free-movement, work and equality decisions."}},
  ga:{all:{label:"Taispeáin gach duine",description:"Cuir an dá thuras ficseanúla dhéag i gcomparáid."},work:{label:"Ba mhaith liom obair",description:"Turais ceada fostaíochta."},study:{label:"Ba mhaith liom staidéar",description:"Cúrsa, víosa, airgeadas agus cinntí Stamp 2."},family:{label:"Ba mhaith liom teacht le teaghlach",description:"Cinntí urraíochta, caidrimh agus ceada."},protection:{label:"Teastaíonn sábháilteacht uaim",description:"Cinntí cosanta idirnáisiúnta agus ghlactha."},eu:{label:"Is saoránach AE mé",description:"Cinntí saorghluaiseachta, oibre agus comhionannais."}},
  ar:{all:{label:"اعرض الجميع",description:"قارن الرحلات الخيالية الاثنتي عشرة."},work:{label:"أريد أن أعمل",description:"رحلات تصاريح العمل."},study:{label:"أريد أن أدرس",description:"قرارات الدورة والتأشيرة والتمويل وإقامة Stamp 2."},family:{label:"أريد الانضمام إلى الأسرة",description:"قرارات الكفيل والعلاقة والإذن."},protection:{label:"أحتاج إلى الأمان",description:"قرارات الحماية الدولية والاستقبال."},eu:{label:"أنا مواطن في الاتحاد الأوروبي",description:"قرارات حرية التنقل والعمل والمساواة."}},
};
export function localFilter(filter: RouteFilter, language: Language) { return filterText[language][filter]; }

const characterText: Record<Language, Record<string, [string,string,string,string,string]>> = {
  en: {},
  ga: {
    kwame:["sé / é","Gána","Innealtóir sibhialta","Ag bogadh leis féin le haghaidh post innealtóireachta dhá bhliain","Tá tairiscint ag Kwame ar bhonneagar fuinnimh in-athnuaite. Tá an dáta tosaithe gar agus ceapann an fostóir gur leor an tairiscint."],
    mateo:["sé / é","An Airgintín","Cócaire","Cócaire le taithí agus é ag pleanáil a chéad aistrithe thar lear","Tá fostóir Éireannach aimsithe ag Mateo, ach caithfidh an post agus an tairiscint cáiliú. Tá earcaitheoir ag brú air airgead tirim a íoc."],
    farid:["sé / é","An Afganastáin","Iriseoir","Ag lorg sábháilteachta tar éis bagairtí mar gheall ar a chuid oibre","Ní féidir le Farid filleadh abhaile go sábháilte. Tá sé tuirseach, tá doiciméid ar iarraidh agus tá eagla air nach gcreidfear é."],
    priya:["sí / í","An India","Altra cláraithe","Ag teacht le foireann ospidéil agus ag tógáil saoil in Éirinn","Tá tairiscint altranais cháilithe ag Priya agus caithfidh sí cead, clárú gairmiúil agus dáta bogtha réalaíoch a chomhordú."],
    mariam:["sí / í","An Ghuine","Múinteoir agus tuismitheoir","Ag taisteal lena hiníon ocht mbliana d’aois","Tá Mariam ag lorg cosanta agus caithfidh sí riachtanais scoile agus teaghlaigh a láimhseáil. Bíonn tionchar ag gach cinneadh ar an mbeirt acu."],
    sofia:["sí / í","Peiriú","Cúntóir cúraim sláinte","Earcaithe do ról cúraim lánaimseartha","Tá tairiscint poist ag Sofía, ach ní thugann conradh amháin cead oibre. Caithfidh sí earcaíocht chothrom agus cearta oibre a aithint."],
    valentina:["sí / í","An Cholóim","Dearthóir grafach","Bean thrasinscneach a bhfuil imní shonrach sábháilteachta uirthi","Caithfidh Valentina a mhíniú cén fáth a bhfuil géarleanúint nó dochar tromchúiseach i gceist di féin agus tacaíocht a iarraidh go sábháilte."],
    noor:["siad / iad","An Liobáin","Mac léinn iarchéime","Duine aiteach neamh-dhénártha ag tosú máistreachta","Tá tairiscint choláiste ag Noor agus tá siad ag pleanáil airgeadais, víosa agus tithíochta. Tá an costas maireachtála níos airde ná mar a bhí súil acu."],
    river:["siad / í","An Afraic Theas","Innealtóir bogearraí","Duine inscne-sholúbtha ag bogadh chuig céile Éireannach","Ba mhaith le River bealach an teaghlaigh a thuiscint. Ceapann a bhfostóir gur féidir leo oibriú sula gcláraítear cead Éireannach."],
    adama:["sí / í","Mailí","Táilliúir agus tuismitheoir aonair","Bean Dhubh, úsáideoir cathaoireach rothaí agus máthair lena mac óg","Teastaíonn cosaint ó Adama agus í ag déileáil le soghluaisteacht, pian, tuismitheoireacht agus riachtanais ghlactha inrochtana."],
    elena:["sí / í","An Bhulgáir","Glantóir óstáin","Bean Romach thrasinscneach níos sine ag úsáid cearta saorghluaiseachta AE","Is féidir le Elena obair mar shaoránach AE ach tagann ciníochas, trasfóibe agus idirdhealú aoise trasna ar a chéile."],
    leila:["sí / í","An Bhanglaidéis","Iarchúntóir cuntas","Bean imirceach dhéghnéasach agus máthair a bhfuil a cead ceangailte le céile maslach","Tá Leila scoite de bharr teanga, smacht airgeadais agus eagla. Tá sábháilteacht, leanaí, doiciméid, tithíocht agus stádas neamhspleách fite fuaite."],
  },
  ar: {
    kwame:["هو","غانا","مهندس مدني","ينتقل بمفرده لوظيفة هندسية مدتها سنتان","لدى كوامي عرض للعمل في بنية الطاقة المتجددة. موعد البدء قريب، ويفترض صاحب العمل أن العرض وحده يكفي."],
    mateo:["هو","الأرجنتين","طاهٍ","طاهٍ متمرس يخطط لأول انتقال له إلى الخارج","وجد ماتيو صاحب عمل أيرلندياً، لكن الوظيفة والعرض يجب أن يستوفيا الشروط. يضغط عليه مسؤول توظيف لدفع مبلغ نقدي."],
    farid:["هو","أفغانستان","صحفي","يطلب الأمان بعد تهديدات مرتبطة بعمله","لا يستطيع فريد العودة بأمان. هو مرهق ووثائقه غير مكتملة ويخشى ألا يُصدّق."],
    priya:["هي","الهند","ممرضة مسجلة","تنضم إلى فريق مستشفى وتبني حياة في أيرلندا","لدى بريا عرض تمريض مؤهل، وعليها تنسيق الإذن والتسجيل المهني وموعد انتقال واقعي."],
    mariam:["هي","غينيا","معلمة وأم","تسافر مع ابنتها البالغة ثماني سنوات","تطلب مريم الحماية وعليها أيضاً التعامل مع المدرسة واحتياجات الأسرة. يؤثر كل قرار في سلامتهما معاً."],
    sofia:["هي","بيرو","مساعدة رعاية صحية","تم توظيفها لوظيفة رعاية بدوام كامل","لدى صوفيا عرض عمل، لكن العقد وحده لا يمنح إذن العمل. عليها معرفة التوظيف العادل وحقوق مكان العمل."],
    valentina:["هي","كولومبيا","مصممة جرافيك","امرأة عابرة جنسياً لديها مخاوف أمان شخصية ومحددة","تحتاج فالنتينا إلى شرح سبب خوفها الشخصي من الاضطهاد أو الضرر الجسيم وطلب الدعم بأمان."],
    noor:["هم","لبنان","طالب دراسات عليا","شخص كويري وغير ثنائي يبدأ دراسة ماجستير","لدى نور قبول جامعي ويخطط للتمويل والتأشيرة والسكن. تكلفة المعيشة أعلى كثيراً مما توقعه."],
    river:["هم / هي","جنوب أفريقيا","مهندس برمجيات","شخص مرن الهوية الجندرية ينتقل للعيش مع زوج أيرلندي","يريد ريفر فهم مسار الأسرة. يفترض صاحب العمل أنه يستطيع مواصلة العمل قبل تسجيل الإذن الأيرلندي."],
    adama:["هي","مالي","خياطة وأم عزباء","امرأة سوداء تستخدم كرسياً متحركاً وتسافر مع ابنها الصغير","تحتاج أداما إلى الحماية وهي تتعامل مع الحركة والألم والأمومة واحتياجات الاستقبال المتاحة."],
    elena:["هي","بلغاريا","عاملة تنظيف فندق","امرأة روما عابرة جنسياً وأكبر سناً تمارس حقوق التنقل الأوروبية","يمكن لإيلينا العمل كمواطنة في الاتحاد الأوروبي، لكنها تواجه العنصرية ورهاب العابرين والتمييز العمري معاً."],
    leila:["هي","بنغلاديش","مساعدة حسابات سابقة","امرأة مهاجرة ثنائية الميل وأم يرتبط إذنها بزوج مسيء","تعاني ليلى العزلة بسبب اللغة والسيطرة المالية والخوف. سلامتها وأطفالها ووثائقها وسكنها ووضعها المستقل أمور مترابطة."],
  },
};

export function localCharacter(character: Character, language: Language): Character {
  if (language === "en") return character;
  const [pronouns, origin, role, identity, combined] = characterText[language][character.id];
  return { ...character, pronouns, origin, role, identity, summary: combined.split(".")[0] + ".", stakes: combined.includes(".") ? combined.slice(combined.indexOf(".") + 1).trim() : combined };
}

const stageText = {
  ga: {
    Plan:["Pleanáil","Sula dtugtar gealltanas","Seiceáil an bealach sula ngníomhaíonn tú","Tá deis ann, ach ní mór na fíricí, na rioscaí agus na rialacha reatha a dheimhniú.","Cad é an chéad chéim is sábháilte?"],
    Prepare:["Ullmhaigh","Doiciméid agus am","Ullmhaigh an fhianaise cheart","Freagraíonn gach cead agus doiciméad ceist éagsúil. Coinnigh smacht ar d’fhaisnéis féin.","Cén t-ullmhúchán a chosnaíonn an turas?"],
    Travel:["Taisteal","Ar an mbealach go hÉirinn","Mínigh an fíorchuspóir go soiléir","Caithfidh an scéal, na doiciméid agus an cuspóir a bheith fírinneach agus comhsheasmhach.","Cad ba cheart a dhéanamh agus tú ag taisteal?"],
    Arrive:["Teacht","Na chéad laethanta","Cuir na céimeanna tar éis teacht in ord","Is céimeanna ar leith iad cead teorann, clárú, tithíocht agus rochtain ar sheirbhísí.","Cad ba cheart fanacht ar an bplean?"],
    "Build a life":["Tóg saol","An saol in Éirinn","Cosain cearta agus tóg tacaíocht","Tá cearta, fianaise, comhairle neamhspleách agus naisc phobail tábhachtach don chéad chéim eile.","Cén rogha a thacaíonn le saol níos sábháilte?"],
  },
  ar: {
    Plan:["التخطيط","قبل الالتزام","تحقق من المسار قبل أن تتصرف","هناك فرصة، لكن يجب التحقق من الحقائق والمخاطر والقواعد الحالية.","ما الخطوة الأولى الأكثر أماناً؟"],
    Prepare:["الاستعداد","الوثائق والتوقيت","حضّر الأدلة الصحيحة","لكل إذن ووثيقة وظيفة مختلفة. احتفظ بالسيطرة على معلوماتك ووثائقك.","أي استعداد يحمي الرحلة؟"],
    Travel:["السفر","في الطريق إلى أيرلندا","اشرح الغرض الحقيقي بوضوح","يجب أن تكون القصة والوثائق والغرض صادقة ومتسقة.","ماذا ينبغي فعله أثناء السفر؟"],
    Arrive:["الوصول","الأيام الأولى","رتّب خطوات ما بعد الوصول","إذن الحدود والتسجيل والسكن والوصول إلى الخدمات خطوات منفصلة.","ما الذي يجب أن يبقى ضمن الخطة؟"],
    "Build a life":["بناء حياة","الحياة في أيرلندا","احمِ الحقوق وابنِ الدعم","الحقوق والأدلة والمشورة المستقلة والروابط المجتمعية مهمة للمرحلة التالية.","أي خيار يدعم حياة أكثر أماناً؟"],
  },
} as const;

export function localStep(step: Step, route: RouteKey, language: Language): Step {
  if (language === "en") return step;
  const [stage, eyebrow, title, scene, question] = stageText[language][step.stage];
  const focus = routeText[language][route].focus;
  const ga = language === "ga";
  const law = ga
    ? `Baineann na rialacha reatha le ${focus}. Ní mór cead, fianaise agus uainiú a sheiceáil ar leithligh ag gach céim.`
    : `تنطبق القواعد الحالية على ${focus}. يجب التحقق من الإذن والأدلة والتوقيت بصورة منفصلة في كل مرحلة.`;
  const plainLaw = ga
    ? "Seiceáil an fhoinse oifigiúil reatha, tabhair eolas fírinneach agus lorg comhairle cháilithe nuair is gá."
    : "تحقق من المصدر الرسمي الحالي، وقدّم معلومات صادقة، واطلب مشورة مؤهلة عند الحاجة.";
  const choices = step.choices.map((choice, index): Choice => {
    const good = choice.correct;
    if (ga) return { ...choice,
      label: good ? "Seiceáil na rialacha reatha, coinnigh fianaise agus bain úsáid as an bpróiseas oifigiúil." : index === 1 ? "Glac leis gur leor gealltanas nó doiciméad amháin gan seiceáil." : "Úsáid aicearra nó tabhair eolas nach bhfuil ag teacht leis an bhfíorchás.",
      feedback: good ? "Tugann an rogha seo fianaise, uainiú agus an bealach oifigiúil le chéile." : "D’fhéadfadh an rogha seo cead, sábháilteacht nó cearta a chur i mbaol.",
      consequence: good ? "Éiríonn an chéad chéim eile níos soiléire agus níos sábháilte." : "D’fhéadfadh moill, diúltú, dúshaothrú nó fadhb eile teacht chun cinn.",
    };
    return { ...choice,
      label: good ? "تحقق من القواعد الحالية، واحتفظ بالأدلة، واستخدم الإجراء الرسمي." : index === 1 ? "افترض أن وعداً أو وثيقة واحدة تكفي من دون تحقق." : "استخدم طريقاً مختصراً أو قدّم معلومات لا تطابق الوضع الحقيقي.",
      feedback: good ? "يجمع هذا الخيار بين الأدلة والتوقيت والمسار الرسمي." : "قد يعرّض هذا الخيار الإذن أو السلامة أو الحقوق للخطر.",
      consequence: good ? "تصبح الخطوة التالية أوضح وأكثر أماناً." : "قد يحدث تأخير أو رفض أو استغلال أو مشكلة أخرى.",
    };
  });
  return { ...step, stage: stage as Step["stage"], eyebrow, title, scene, question, law, plainLaw, sourceLabel: ga ? "Foinse oifigiúil" : "المصدر الرسمي", choices };
}
