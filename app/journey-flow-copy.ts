import type { Language } from "./i18n";

type JourneyFlowCopy = {
  purpose: string;
  start: string;
  resume: string;
  recommended: string;
  browse: string;
  all: string;
  finder: string;
  how: string;
  search: string;
  reset: string;
  illustration: string;
};

export const journeyFlowCopy: Record<Language, JourneyFlowCopy> = {
  en: {
    purpose: "Learn how people navigate moving to Ireland by making decisions with fictional characters.",
    start: "Start a journey", resume: "Resume journey", recommended: "Suggested first journey",
    browse: "Browse all journeys", all: "All journeys", finder: "Route finder", how: "How it works",
    search: "Search journeys", reset: "Reset search and filters", illustration: "Chapter illustration",
  },
  ga: {
    purpose: "Foghlaim faoin aistriú go hÉirinn trí chinntí a dhéanamh le carachtair fhicseanúla.",
    start: "Tosaigh turas", resume: "Lean leis an turas", recommended: "An chéad turas molta",
    browse: "Brabhsáil na turais go léir", all: "Gach turas", finder: "Aimsitheoir bealaí", how: "Conas a oibríonn sé",
    search: "Cuardaigh turais", reset: "Glan an cuardach agus na scagairí", illustration: "Léaráid na caibidle",
  },
  ar: {
    purpose: "تعرّف كيف ينتقل الناس للعيش في أيرلندا من خلال اتخاذ قرارات مع شخصيات خيالية.",
    start: "ابدأ رحلة", resume: "تابع الرحلة", recommended: "رحلة أولى مقترحة",
    browse: "تصفّح جميع الرحلات", all: "جميع الرحلات", finder: "البحث عن مسار", how: "كيف تعمل التجربة",
    search: "ابحث في الرحلات", reset: "امسح البحث وعوامل التصفية", illustration: "رسم الفصل",
  },
  zh: {
    purpose: "与虚构人物一起作决定，了解人们如何迁居爱尔兰。",
    start: "开始旅程", resume: "继续旅程", recommended: "推荐的首次旅程",
    browse: "浏览所有旅程", all: "所有旅程", finder: "查找移居途径", how: "如何参与",
    search: "搜索旅程", reset: "重置搜索和筛选", illustration: "章节插图",
  },
  fr: {
    purpose: "Prenez des décisions avec des personnages fictifs pour comprendre comment s’installer en Irlande.",
    start: "Commencer un parcours", resume: "Reprendre le parcours", recommended: "Premier parcours conseillé",
    browse: "Parcourir tous les parcours", all: "Tous les parcours", finder: "Trouver une voie d’immigration", how: "Comment ça marche",
    search: "Rechercher un parcours", reset: "Effacer la recherche et les filtres", illustration: "Illustration du chapitre",
  },
  pt: {
    purpose: "Tome decisões com personagens fictícias para conhecer diferentes formas de se mudar para a Irlanda.",
    start: "Começar um percurso", resume: "Retomar o percurso", recommended: "Primeiro percurso sugerido",
    browse: "Explorar todos os percursos", all: "Todos os percursos", finder: "Encontrar uma via de imigração", how: "Como funciona",
    search: "Pesquisar percursos", reset: "Limpar a pesquisa e os filtros", illustration: "Ilustração do capítulo",
  },
  es: {
    purpose: "Toma decisiones con personajes ficticios para conocer cómo se traslada la gente a Irlanda.",
    start: "Iniciar un recorrido", resume: "Continuar el recorrido", recommended: "Primer recorrido recomendado",
    browse: "Explorar todos los recorridos", all: "Todos los recorridos", finder: "Buscar una vía de inmigración", how: "Cómo funciona",
    search: "Buscar recorridos", reset: "Borrar la búsqueda y los filtros", illustration: "Ilustración del capítulo",
  },
  nl: {
    purpose: "Neem beslissingen met fictieve personages en ontdek hoe mensen naar Ierland verhuizen.",
    start: "Begin een reis", resume: "Hervat je reis", recommended: "Aanbevolen eerste reis",
    browse: "Bekijk alle reizen", all: "Alle reizen", finder: "Vind een immigratieroute", how: "Hoe het werkt",
    search: "Zoek in de reizen", reset: "Wis de zoekopdracht en filters", illustration: "Illustratie bij het hoofdstuk",
  },
  fa: {
    purpose: "با تصمیم‌گیری همراه شخصیت‌های خیالی، با روند مهاجرت به ایرلند آشنا شوید.",
    start: "سفری را آغاز کنید", resume: "ادامهٔ سفر", recommended: "پیشنهاد برای سفر اول",
    browse: "مرور همهٔ سفرها", all: "همهٔ سفرها", finder: "یافتن مسیر مهاجرت", how: "چگونه کار می‌کند",
    search: "جست‌وجوی سفرها", reset: "پاک‌کردن جست‌وجو و فیلترها", illustration: "تصویر فصل",
  },
  xh: {
    purpose: "Funda ngendlela abantu abafudukela ngayo eIreland ngokwenza izigqibo nabalinganiswa abaqanjiweyo.",
    start: "Qalisa uhambo", resume: "Qhubeka nohambo", recommended: "Uhambo lokuqala olucetyiswayo",
    browse: "Khangela zonke iihambo", all: "Zonke iihambo", finder: "Fumana indlela efanelekileyo", how: "Indlela esebenza ngayo",
    search: "Khangela iihambo", reset: "Cima uphendlo nezihluzi", illustration: "Umfanekiso wesahluko",
  },
  ln: {
    purpose: "Yekolá ndenge bato bakendaka kofanda na Irlande na kozwáká bikateli elongo na bato ya masolo.",
    start: "Bandá mobembo", resume: "Kobá mobembo", recommended: "Mobembo ya liboso oyo tozali kopesa yo toli",
    browse: "Talá mibembo nyonso", all: "Mibembo nyonso", finder: "Luká nzela", how: "Ndenge esalaka",
    search: "Luká mibembo", reset: "Longolá boluki mpe biyungoli", illustration: "Elilingi ya mokapo",
  },
  yo: {
    purpose: "Kọ́ bí àwọn ènìyàn ṣe ń kó lọ sí Ireland nípa ṣíṣe ìpinnu pẹ̀lú àwọn ohun kikọ̀ inú ìtàn.",
    start: "Bẹ̀rẹ̀ ìrìnàjò", resume: "Tẹ̀síwájú pẹ̀lú ìrìnàjò", recommended: "Ìrìnàjò àkọ́kọ́ tí a dábàá",
    browse: "Wo gbogbo ìrìnàjò", all: "Gbogbo ìrìnàjò", finder: "Wá ọ̀nà tí ó bá ọ mu", how: "Bí ó ṣe ń ṣiṣẹ́",
    search: "Wá ìrìnàjò", reset: "Pa àwárí àti àwọn àsẹ́ rẹ́", illustration: "Àwòrán orí ìtàn",
  },
  sw: {
    purpose: "Jifunze jinsi watu wanavyohamia Ireland kwa kufanya maamuzi pamoja na wahusika wa kubuni.",
    start: "Anza safari", resume: "Endelea na safari", recommended: "Safari ya kwanza inayopendekezwa",
    browse: "Vinjari safari zote", all: "Safari zote", finder: "Tafuta njia ya kuhamia", how: "Jinsi inavyofanya kazi",
    search: "Tafuta safari", reset: "Futa utafutaji na vichujio", illustration: "Mchoro wa sura",
  },
  tr: {
    purpose: "Kurgusal karakterlerle kararlar vererek insanların İrlanda’ya nasıl taşındığını öğrenin.",
    start: "Bir yolculuğa başlayın", resume: "Yolculuğa devam edin", recommended: "Önerilen ilk yolculuk",
    browse: "Tüm yolculuklara göz atın", all: "Tüm yolculuklar", finder: "Göç yolu bulucu", how: "Nasıl çalışır?",
    search: "Yolculuklarda arayın", reset: "Aramayı ve filtreleri sıfırlayın", illustration: "Bölüm çizimi",
  },
  ps: {
    purpose: "له خیالي کرکټرونو سره پرېکړې وکړئ او زده کړئ چې خلک څنګه ایرلنډ ته کډه کېږي.",
    start: "سفر پیل کړئ", resume: "سفر ته دوام ورکړئ", recommended: "د لومړي سفر وړاندیز",
    browse: "ټول سفرونه وګورئ", all: "ټول سفرونه", finder: "د لارې موندونکی", how: "دا څنګه کار کوي؟",
    search: "سفرونه ولټوئ", reset: "لټون او فلټرونه پاک کړئ", illustration: "د څپرکي انځور",
  },
};
