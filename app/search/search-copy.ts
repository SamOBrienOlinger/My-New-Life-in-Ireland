import type { Language } from "../i18n";

export type SearchGroup = "journeys" | "facts" | "resources" | "about";

export type SearchText = {
  nav: string;
  title: string;
  eyebrow: string;
  intro: string;
  placeholder: string;
  submit: string;
  filters: string;
  all: string;
  groups: Record<SearchGroup, string>;
  results: string;
  forQuery: string;
  guidance: string;
  empty: string;
  emptyHelp: string;
  ready: string;
  suggestions: string;
  try: string;
  open: string;
  more: string;
  clear: string;
  back: string;
  stageNote: string;
  scope: string;
  featured: string;
  tip: string;
};

export const searchText: Record<Language, SearchText> = {
  en: {
    nav: "Search", title: "Search the entire site", eyebrow: "Find what matters",
    intro: "Find people, decisions, myth-busters, practical information and learning guidance. Search by a word or phrase.",
    placeholder: "Try housing, employment permits, PPS number…", submit: "Search", filters: "Filter by section",
    all: "Everything", groups: { journeys: "Journeys", facts: "Fact or Fiction", resources: "Information Hub", about: "About & learning" },
    results: "results", forQuery: "for", guidance: "Choose a result to explore it on the site.", empty: "No matching content",
    emptyHelp: "Try fewer words, another spelling or a different topic. The search covers this site's content, not the whole internet.",
    ready: "Search results will appear here as you type.", suggestions: "Popular starting points", try: "Try", open: "Open result",
    more: "Show more results", clear: "Clear search", back: "Back to journeys",
    stageNote: "Start this character's journey to reach this stage. Stages are completed in order.",
    scope: "Results come from this website. For up-to-date rules, always open the original sources.",
    featured: "What the search covers", tip: "You can search for a person's name or a subject such as registration, housing or racism.",
  },
  ga: {
    nav:"Cuardaigh",title:"Cuardaigh an suíomh ar fad",eyebrow:"Aimsigh an rud atá tábhachtach",
    intro:"Aimsigh daoine, cinntí, seiceálacha fíricí, eolas praiticiúil agus treoir foghlama. Cuardaigh focal nó frása.",
    placeholder:"Tithíocht, ceadanna oibre, uimhir PSP…",submit:"Cuardaigh",filters:"Scag de réir rannóige",
    all:"Gach rud",groups:{journeys:"Turais",facts:"Fíric nó Ficsean",resources:"Mol eolais",about:"Maidir leis agus foghlaim"},
    results:"toradh",forQuery:"do",guidance:"Roghnaigh toradh chun é a oscailt.",empty:"Níor aimsíodh ábhar",
    emptyHelp:"Bain triail as níos lú focal nó ábhar eile. Ní chuardaítear an gréasán ar fad.",ready:"Beidh torthaí le feiceáil agus tú ag clóscríobh.",suggestions:"Pointí tosaithe",try:"Bain triail as",open:"Oscail toradh",
    more:"Taispeáin tuilleadh",clear:"Glan an cuardach",back:"Ar ais chuig na turais",
    stageNote:"Tosaigh turas an charachtair chun an chéim seo a bhaint amach. Leanann na céimeanna a chéile.",
    scope:"Is ón suíomh seo na torthaí. Seiceáil na bunfhoinsí le haghaidh rialacha reatha.",
    featured:"Cad a chuardaítear",tip:"Is féidir ainm duine nó ábhar mar chlárú, tithíocht nó ciníochas a chuardach.",
  },
  ar: {
    nav:"بحث",title:"ابحث في الموقع بالكامل",eyebrow:"اعثر على ما يهمك",
    intro:"ابحث عن الأشخاص والقرارات وتدقيق الحقائق والمعلومات العملية وإرشادات التعلم. استخدم كلمة أو عبارة.",
    placeholder:"السكن، تصاريح العمل، رقم PPS…",submit:"بحث",filters:"تصفية حسب القسم",
    all:"الكل",groups:{journeys:"الرحلات",facts:"حقيقة أم خيال",resources:"مركز المعلومات",about:"عن الموقع والتعلم"},
    results:"نتائج",forQuery:"عن",guidance:"اختر نتيجة لفتح المحتوى في الموقع.",empty:"لا توجد نتائج مطابقة",
    emptyHelp:"جرّب كلمات أقل أو موضوعًا آخر. يقتصر البحث على هذا الموقع.",ready:"ستظهر النتائج أثناء الكتابة.",suggestions:"نقاط بداية",try:"جرّب",open:"فتح النتيجة",
    more:"إظهار المزيد",clear:"مسح البحث",back:"العودة إلى الرحلات",
    stageNote:"ابدأ رحلة هذه الشخصية للوصول إلى هذه المرحلة. تتبع المراحل ترتيبًا محددًا.",
    scope:"النتائج من هذا الموقع فقط. راجع المصادر الأصلية للتحقق من القواعد الحالية.",
    featured:"محتوى البحث",tip:"يمكنك البحث باسم شخص أو موضوع مثل التسجيل والسكن والعنصرية.",
  },
  zh: {
    nav:"搜索",title:"搜索整个网站",eyebrow:"找到你需要的内容",
    intro:"搜索人物、决策、事实核查、实用资料和学习指导。输入词语或短语。",
    placeholder:"住房、工作许可、PPS号码……",submit:"搜索",filters:"按栏目筛选",
    all:"全部",groups:{journeys:"旅程",facts:"事实还是虚构",resources:"信息中心",about:"关于与学习"},
    results:"条结果",forQuery:"关键词",guidance:"选择结果以打开网站中的相关内容。",empty:"没有找到内容",
    emptyHelp:"尝试更少的词或其他主题。这里只搜索本网站。",ready:"输入后将显示结果。",suggestions:"热门主题",try:"试试",open:"打开结果",
    more:"查看更多",clear:"清除搜索",back:"返回旅程",stageNote:"请开始该人物的旅程以到达这个阶段；各阶段需按顺序完成。",
    scope:"结果来自本网站。最新规定请以原始来源为准。",featured:"搜索范围",tip:"可按人物姓名或登记、住房、种族主义等主题搜索。",
  },
  fr: {
    nav:"Rechercher",title:"Rechercher sur tout le site",eyebrow:"Trouvez ce qui vous intéresse",
    intro:"Retrouvez personnages, décisions, vérifications, ressources pratiques et outils pédagogiques par mot-clé.",
    placeholder:"Logement, permis de travail, numéro PPS…",submit:"Rechercher",filters:"Filtrer par rubrique",
    all:"Tout",groups:{journeys:"Parcours",facts:"Fait ou fiction",resources:"Centre d’information",about:"À propos et pédagogie"},
    results:"résultats",forQuery:"pour",guidance:"Choisissez un résultat pour ouvrir le contenu.",empty:"Aucun résultat",
    emptyHelp:"Essayez moins de mots ou un autre sujet. La recherche se limite à ce site.",ready:"Les résultats apparaissent au fil de la saisie.",suggestions:"Suggestions",try:"Essayer",open:"Ouvrir",
    more:"Voir plus de résultats",clear:"Effacer",back:"Retour aux parcours",
    stageNote:"Commencez le parcours de ce personnage pour atteindre cette étape. Les étapes se suivent.",
    scope:"Les résultats proviennent de ce site. Vérifiez toujours les sources originales pour les règles en vigueur.",
    featured:"Contenu indexé",tip:"Recherchez un nom ou un sujet : enregistrement, logement, racisme.",
  },
  pt: {
    nav:"Pesquisar",title:"Pesquisar em todo o site",eyebrow:"Encontre o que procura",
    intro:"Encontre personagens, decisões, verificações de factos, informação prática e orientação de aprendizagem.",
    placeholder:"Habitação, autorização de trabalho, número PPS…",submit:"Pesquisar",filters:"Filtrar por secção",
    all:"Tudo",groups:{journeys:"Viagens",facts:"Facto ou Ficção",resources:"Centro de informação",about:"Sobre e aprendizagem"},
    results:"resultados",forQuery:"para",guidance:"Escolha um resultado para abrir o conteúdo.",empty:"Sem resultados",
    emptyHelp:"Experimente menos palavras ou outro tema. A pesquisa é limitada a este site.",ready:"Os resultados surgem enquanto escreve.",suggestions:"Temas sugeridos",try:"Experimente",open:"Abrir resultado",
    more:"Mostrar mais resultados",clear:"Limpar pesquisa",back:"Voltar às viagens",
    stageNote:"Inicie a viagem desta personagem para chegar a esta fase. As fases seguem uma ordem.",
    scope:"Resultados apenas deste site. Consulte sempre as fontes originais para as regras atuais.",
    featured:"O que é pesquisado",tip:"Pesquise nomes ou assuntos como registo, habitação e racismo.",
  },
  es: {
    nav:"Buscar",title:"Buscar en todo el sitio",eyebrow:"Encuentra lo que necesitas",
    intro:"Encuentra personas, decisiones, verificaciones de datos, información práctica y recursos de aprendizaje.",
    placeholder:"Vivienda, permiso de trabajo, número PPS…",submit:"Buscar",filters:"Filtrar por sección",
    all:"Todo",groups:{journeys:"Recorridos",facts:"Realidad o ficción",resources:"Centro de información",about:"Acerca y aprendizaje"},
    results:"resultados",forQuery:"para",guidance:"Selecciona un resultado para abrir su contenido.",empty:"No hay resultados",
    emptyHelp:"Prueba con menos palabras u otro tema. Solo se busca en este sitio.",ready:"Los resultados aparecerán mientras escribes.",suggestions:"Temas sugeridos",try:"Prueba",open:"Abrir resultado",
    more:"Mostrar más",clear:"Borrar búsqueda",back:"Volver a los recorridos",
    stageNote:"Inicia el recorrido de esta persona para llegar a esa etapa. Las etapas siguen un orden.",
    scope:"Resultados del sitio. Consulta siempre las fuentes originales para conocer las normas vigentes.",
    featured:"Qué se busca",tip:"Busca por nombre o tema, como registro, vivienda o racismo.",
  },
  nl: {
    nav:"Zoeken",title:"Zoek op de hele website",eyebrow:"Vind wat belangrijk is",
    intro:"Zoek op trefwoorden naar personen, beslissingen, feitenchecks, praktische informatie en leermateriaal.",
    placeholder:"Huisvesting, werkvergunning, PPS-nummer…",submit:"Zoeken",filters:"Filter op onderdeel",
    all:"Alles",groups:{journeys:"Reizen",facts:"Feit of fictie",resources:"Informatiecentrum",about:"Over en leren"},
    results:"resultaten",forQuery:"voor",guidance:"Kies een resultaat om de inhoud te openen.",empty:"Geen resultaten",
    emptyHelp:"Probeer minder woorden of een ander onderwerp. Dit doorzoekt alleen de website.",ready:"Resultaten verschijnen terwijl je typt.",suggestions:"Suggesties",try:"Probeer",open:"Open resultaat",
    more:"Meer resultaten",clear:"Zoekopdracht wissen",back:"Terug naar de reizen",
    stageNote:"Begin de reis van deze persoon om deze fase te bereiken. De fasen volgen elkaar op.",
    scope:"Resultaten komen van deze website. Controleer de oorspronkelijke bronnen voor actuele regels.",
    featured:"Wat doorzocht wordt",tip:"Zoek op naam of onderwerp zoals registratie, huisvesting of racisme.",
  },
  fa: {
    nav:"جست‌وجو",title:"جست‌وجو در تمام سایت",eyebrow:"آنچه نیاز دارید پیدا کنید",
    intro:"شخصیت‌ها، تصمیم‌ها، راستی‌آزمایی‌ها، اطلاعات کاربردی و راهنمای آموزشی را با کلیدواژه بیابید.",
    placeholder:"مسکن، مجوز کار، شماره PPS…",submit:"جست‌وجو",filters:"فیلتر بر اساس بخش",
    all:"همه",groups:{journeys:"سفرها",facts:"واقعیت یا خیال",resources:"مرکز اطلاعات",about:"درباره و یادگیری"},
    results:"نتیجه",forQuery:"برای",guidance:"برای دیدن محتوا یکی از نتایج را باز کنید.",empty:"نتیجه‌ای یافت نشد",
    emptyHelp:"با واژه‌های کمتر یا موضوع دیگری امتحان کنید. فقط همین سایت جست‌وجو می‌شود.",ready:"نتایج هنگام تایپ ظاهر می‌شوند.",suggestions:"موضوعات پیشنهادی",try:"امتحان کنید",open:"باز کردن نتیجه",
    more:"نمایش نتایج بیشتر",clear:"پاک کردن جست‌وجو",back:"بازگشت به سفرها",
    stageNote:"برای رسیدن به این مرحله سفر شخصیت را آغاز کنید؛ مراحل به ترتیب پیش می‌روند.",
    scope:"نتایج فقط از این سایت است. برای قوانین جاری به منابع اصلی مراجعه کنید.",
    featured:"دامنه جست‌وجو",tip:"نام اشخاص یا موضوع‌هایی چون ثبت، مسکن و نژادپرستی را جست‌وجو کنید.",
  },
  xh: {
    nav:"Khangela",title:"Khangela kuyo yonke indawo",eyebrow:"Fumana okubalulekileyo",
    intro:"Khangela abantu, izigqibo, uhlolo lweenyaniso, ulwazi oluluncedo nezixhobo zokufunda ngamagama.",
    placeholder:"Izindlu, iimvume zomsebenzi, inombolo PPS…",submit:"Khangela",filters:"Hluza ngokwecandelo",
    all:"Konke",groups:{journeys:"Iihambo",facts:"Inyaniso okanye Intsomi",resources:"Iziko lolwazi",about:"Malunga nokufunda"},
    results:"iziphumo",forQuery:"ze",guidance:"Khetha isiphumo ukuze uvule umxholo.",empty:"Akukho ziphumo",
    emptyHelp:"Zama amagama ambalwa okanye omnye umxholo. Kukhangelwa kule sayithi kuphela.",ready:"Iziphumo ziya kuvela xa ubhala.",suggestions:"Imixholo ecetyiswayo",try:"Zama",open:"Vula isiphumo",
    more:"Bonisa ezinye",clear:"Cima ukukhangela",back:"Buyela kuhambo",
    stageNote:"Qala uhambo lwalo mlinganiswa ukuze ufike kweli nqanaba. Amanqanaba alandelelana.",
    scope:"Iziphumo zivela kule sayithi. Jonga imithombo yoqobo ngemigaqo yangoku.",
    featured:"Oko kukhangelwayo",tip:"Khangela igama lomntu okanye umxholo onjengobhaliso, izindlu okanye ubuhlanga.",
  },
};

export const suggestedQueries: Partial<Record<Language, string[]>> = {
  en: ["housing", "employment permit", "international protection", "PPS number", "racism"],
  ga: ["tithíocht", "cead fostaíochta", "cosaint idirnáisiúnta", "uimhir PSP", "ciníochas"],
  ar: ["السكن", "تصريح العمل", "الحماية الدولية", "PPS", "العنصرية"],
  zh: ["住房", "工作许可", "国际保护", "PPS", "种族主义"],
  fr: ["logement", "permis de travail", "protection internationale", "PPS", "racisme"],
  pt: ["habitação", "autorização de trabalho", "proteção internacional", "PPS", "racismo"],
  es: ["vivienda", "permiso de trabajo", "protección internacional", "PPS", "racismo"],
  nl: ["huisvesting", "werkvergunning", "internationale bescherming", "PPS", "racisme"],
  fa: ["مسکن", "مجوز کار", "حمایت بین‌المللی", "PPS", "نژادپرستی"],
  xh: ["izindlu", "imvume yomsebenzi", "ukhuseleko lwamazwe ngamazwe", "PPS", "ubuhlanga"],
};
