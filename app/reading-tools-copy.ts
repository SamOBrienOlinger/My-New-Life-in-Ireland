import { packedLanguageCopy } from "./language-packs";
import type { Language } from "./i18n";

export type GlossaryKey = "permission" | "registration" | "permit" | "pps";

type ReadingToolsCopy = {
  listen: string; pause: string; resume: string; stop: string; options: string;
  speed: string; includeChoices: string; includeFeedback: string;
  loading: string; ready: string; starting: string; speaking: string;
  paused: string; finished: string; unavailable: string; unsupported: string;
  failed: string; retry: string; words: string; wordsIntro: string;
  source: string; newTab: string;
  terms: Record<GlossaryKey, { label: string; definition: string }>;
};

// Brief explanations checked against these official sources on 25 October 2026.
// They define terms only; they do not determine anyone's eligibility.
export const glossarySources: Record<GlossaryKey, string> = {
  permission: "https://www.irishimmigration.ie/registering-your-immigration-permission/information-on-registering/immigration-permission-stamps/",
  registration: "https://www.irishimmigration.ie/registering-your-immigration-permission/",
  permit: "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/",
  pps: "https://www.gov.ie/en/department-of-social-protection/campaigns/how-to-get-a-public-services-card-psc-or-personal-public-service-pps-number/",
};

export const readingToolsCopy: Record<Language, ReadingToolsCopy> = {
  ...packedLanguageCopy("reading"),
  en: {
    listen: "Listen", pause: "Pause", resume: "Resume audio", stop: "Stop", options: "Audio options",
    speed: "Reading speed", includeChoices: "Read the question and choices", includeFeedback: "Read feedback when available",
    loading: "Finding a voice for this language…", ready: "Audio ready", starting: "Starting audio…", speaking: "Reading aloud", paused: "Audio paused", finished: "Reading finished",
    unavailable: "No voice for this language is available on this device.", unsupported: "Read-aloud is not available in this browser.", failed: "Audio could not play. You can try again or keep reading.", retry: "Check voices again",
    words: "Useful words", wordsIntro: "Open a word for a short explanation.", source: "Read the official source", newTab: "opens in a new tab",
    terms: {
      permission: { label: "Immigration permission", definition: "Permission to stay in Ireland for a stated period, with conditions on activities such as work or study." },
      registration: { label: "Registration", definition: "Recording an immigration permission and its conditions with the Irish immigration authorities, when registration is required." },
      permit: { label: "Employment permit", definition: "Authorisation for work under Ireland’s employment-permit system. It is separate from immigration permission." },
      pps: { label: "PPS number", definition: "A unique reference number used to access certain public services in Ireland." },
    },
  },
  ga: {
    listen: "Éist", pause: "Cuir ar sos", resume: "Lean leis an bhfuaim", stop: "Stop", options: "Roghanna fuaime",
    speed: "Luas léitheoireachta", includeChoices: "Léigh an cheist agus na roghanna", includeFeedback: "Léigh aiseolas nuair atá sé ar fáil",
    loading: "Guth don teanga seo á lorg…", ready: "Fuaim réidh", starting: "Fuaim á tosú…", speaking: "Á léamh os ard", paused: "Fuaim ar sos", finished: "Léitheoireacht críochnaithe",
    unavailable: "Níl guth don teanga seo ar fáil ar an ngléas seo.", unsupported: "Níl léamh os ard ar fáil sa bhrabhsálaí seo.", failed: "Níorbh fhéidir an fhuaim a sheinm. Bain triail eile as nó lean ort ag léamh.", retry: "Seiceáil na guthanna arís",
    words: "Focail úsáideacha", wordsIntro: "Oscail focal chun míniú gairid a léamh.", source: "Léigh an fhoinse oifigiúil", newTab: "osclaítear i dtáb nua",
    terms: {
      permission: { label: "Cead inimirce", definition: "Cead fanacht in Éirinn ar feadh tréimhse shonraithe, le coinníollacha maidir le hobair, staidéar agus gníomhaíochtaí eile." },
      registration: { label: "Clárú", definition: "Cead inimirce agus a choinníollacha a thaifeadadh le húdaráis inimirce na hÉireann, nuair is gá clárú." },
      permit: { label: "Cead fostaíochta", definition: "Údarú chun oibre faoi chóras ceadanna fostaíochta na hÉireann. Tá sé ar leithligh ó chead inimirce." },
      pps: { label: "Uimhir PSP", definition: "Uimhir thagartha uathúil a úsáidtear chun rochtain a fháil ar sheirbhísí poiblí áirithe in Éirinn." },
    },
  },
  ar: {
    listen: "استمع", pause: "إيقاف مؤقت", resume: "استئناف الصوت", stop: "إيقاف", options: "خيارات الصوت",
    speed: "سرعة القراءة", includeChoices: "قراءة السؤال والخيارات", includeFeedback: "قراءة التعليقات عند توفرها",
    loading: "جارٍ البحث عن صوت لهذه اللغة…", ready: "الصوت جاهز", starting: "جارٍ تشغيل الصوت…", speaking: "تجري القراءة بصوت عالٍ", paused: "الصوت متوقف مؤقتًا", finished: "انتهت القراءة",
    unavailable: "لا يتوفر على هذا الجهاز صوت لهذه اللغة.", unsupported: "القراءة بصوت عالٍ غير متاحة في هذا المتصفح.", failed: "تعذّر تشغيل الصوت. يمكنك المحاولة مجددًا أو متابعة القراءة.", retry: "التحقق من الأصوات مجددًا",
    words: "كلمات مفيدة", wordsIntro: "افتح كلمة للاطلاع على شرح قصير.", source: "اقرأ المصدر الرسمي", newTab: "يفتح في علامة تبويب جديدة",
    terms: {
      permission: { label: "إذن الإقامة", definition: "إذن بالبقاء في أيرلندا لمدة محددة، مع شروط لأنشطة مثل العمل أو الدراسة." },
      registration: { label: "التسجيل", definition: "تسجيل إذن الإقامة وشروطه لدى سلطات الهجرة الأيرلندية، عندما يكون التسجيل مطلوبًا." },
      permit: { label: "تصريح العمل", definition: "ترخيص بالعمل ضمن نظام تصاريح العمل الأيرلندي. وهو منفصل عن إذن الإقامة." },
      pps: { label: "رقم PPS", definition: "رقم مرجعي فريد يُستخدم للوصول إلى بعض الخدمات العامة في أيرلندا." },
    },
  },
  zh: {
    listen: "收听", pause: "暂停", resume: "继续播放", stop: "停止", options: "音频选项",
    speed: "朗读速度", includeChoices: "朗读问题和选项", includeFeedback: "有反馈时朗读反馈",
    loading: "正在查找此语言的语音…", ready: "音频已就绪", starting: "正在开始朗读…", speaking: "正在朗读", paused: "音频已暂停", finished: "朗读结束",
    unavailable: "此设备没有可用于此语言的语音。", unsupported: "此浏览器不支持朗读。", failed: "无法播放音频。你可以重试或继续阅读。", retry: "重新检查语音",
    words: "实用词语", wordsIntro: "展开词语以查看简短解释。", source: "阅读官方来源", newTab: "在新标签页中打开",
    terms: {
      permission: { label: "移民居留许可", definition: "允许在爱尔兰停留一段指定时间，并对工作或学习等活动附加条件的许可。" },
      registration: { label: "登记", definition: "在需要登记时，向爱尔兰移民部门登记居留许可及其条件。" },
      permit: { label: "就业许可", definition: "爱尔兰就业许可制度下的工作授权。它与移民居留许可是不同的。" },
      pps: { label: "PPS号码", definition: "用于获得爱尔兰某些公共服务的唯一参考号码。" },
    },
  },
  fr: {
    listen: "Écouter", pause: "Pause", resume: "Reprendre l’audio", stop: "Arrêter", options: "Options audio",
    speed: "Vitesse de lecture", includeChoices: "Lire la question et les choix", includeFeedback: "Lire les explications disponibles",
    loading: "Recherche d’une voix pour cette langue…", ready: "Audio prêt", starting: "Démarrage de l’audio…", speaking: "Lecture à voix haute", paused: "Audio en pause", finished: "Lecture terminée",
    unavailable: "Aucune voix pour cette langue n’est disponible sur cet appareil.", unsupported: "La lecture à voix haute n’est pas disponible dans ce navigateur.", failed: "L’audio n’a pas pu démarrer. Réessayez ou poursuivez votre lecture.", retry: "Vérifier à nouveau les voix",
    words: "Mots utiles", wordsIntro: "Ouvrez un mot pour lire une courte explication.", source: "Lire la source officielle", newTab: "s’ouvre dans un nouvel onglet",
    terms: {
      permission: { label: "Autorisation de séjour", definition: "Autorisation de rester en Irlande pendant une période définie, avec des conditions concernant notamment le travail ou les études." },
      registration: { label: "Enregistrement", definition: "Inscription d’une autorisation de séjour et de ses conditions auprès des autorités irlandaises, lorsque cet enregistrement est requis." },
      permit: { label: "Permis de travail", definition: "Autorisation de travailler dans le cadre du système irlandais de permis de travail. Elle est distincte de l’autorisation de séjour." },
      pps: { label: "Numéro PPS", definition: "Numéro de référence unique permettant d’accéder à certains services publics en Irlande." },
    },
  },
  pt: {
    listen: "Ouvir", pause: "Pausar", resume: "Retomar áudio", stop: "Parar", options: "Opções de áudio",
    speed: "Velocidade de leitura", includeChoices: "Ler a pergunta e as opções", includeFeedback: "Ler as explicações quando disponíveis",
    loading: "A procurar uma voz para este idioma…", ready: "Áudio pronto", starting: "A iniciar o áudio…", speaking: "A ler em voz alta", paused: "Áudio em pausa", finished: "Leitura concluída",
    unavailable: "Não há uma voz para este idioma disponível neste dispositivo.", unsupported: "A leitura em voz alta não está disponível neste navegador.", failed: "Não foi possível reproduzir o áudio. Tente novamente ou continue a ler.", retry: "Verificar as vozes novamente",
    words: "Palavras úteis", wordsIntro: "Abra uma palavra para ler uma breve explicação.", source: "Ler a fonte oficial", newTab: "abre num novo separador",
    terms: {
      permission: { label: "Autorização de residência", definition: "Permissão para ficar na Irlanda durante um período definido, com condições para atividades como trabalhar ou estudar." },
      registration: { label: "Registo", definition: "Registo da autorização de residência e das suas condições junto das autoridades irlandesas de imigração, quando exigido." },
      permit: { label: "Autorização de trabalho", definition: "Autorização para trabalhar no sistema irlandês de autorizações de trabalho. É distinta da autorização de residência." },
      pps: { label: "Número PPS", definition: "Número de referência único utilizado para aceder a determinados serviços públicos na Irlanda." },
    },
  },
  es: {
    listen: "Escuchar", pause: "Pausar", resume: "Reanudar audio", stop: "Detener", options: "Opciones de audio",
    speed: "Velocidad de lectura", includeChoices: "Leer la pregunta y las opciones", includeFeedback: "Leer las explicaciones cuando estén disponibles",
    loading: "Buscando una voz para este idioma…", ready: "Audio listo", starting: "Iniciando el audio…", speaking: "Lectura en voz alta", paused: "Audio en pausa", finished: "Lectura terminada",
    unavailable: "No hay una voz para este idioma disponible en este dispositivo.", unsupported: "La lectura en voz alta no está disponible en este navegador.", failed: "No se pudo reproducir el audio. Inténtalo de nuevo o sigue leyendo.", retry: "Comprobar las voces de nuevo",
    words: "Palabras útiles", wordsIntro: "Abre una palabra para leer una breve explicación.", source: "Leer la fuente oficial", newTab: "se abre en una pestaña nueva",
    terms: {
      permission: { label: "Permiso de residencia", definition: "Autorización para permanecer en Irlanda durante un período determinado, con condiciones para actividades como trabajar o estudiar." },
      registration: { label: "Registro", definition: "Inscripción del permiso de residencia y sus condiciones ante las autoridades irlandesas de inmigración, cuando sea obligatoria." },
      permit: { label: "Permiso de trabajo", definition: "Autorización para trabajar dentro del sistema irlandés de permisos de trabajo. Es distinta del permiso de residencia." },
      pps: { label: "Número PPS", definition: "Número de referencia único utilizado para acceder a determinados servicios públicos en Irlanda." },
    },
  },
  nl: {
    listen: "Luisteren", pause: "Pauzeren", resume: "Audio hervatten", stop: "Stoppen", options: "Audio-opties",
    speed: "Leessnelheid", includeChoices: "Lees de vraag en de keuzes voor", includeFeedback: "Lees beschikbare feedback voor",
    loading: "Een stem voor deze taal zoeken…", ready: "Audio gereed", starting: "Audio starten…", speaking: "Bezig met voorlezen", paused: "Audio gepauzeerd", finished: "Voorlezen voltooid",
    unavailable: "Op dit apparaat is geen stem voor deze taal beschikbaar.", unsupported: "Voorlezen is niet beschikbaar in deze browser.", failed: "De audio kon niet worden afgespeeld. Probeer opnieuw of lees verder.", retry: "Stemmen opnieuw controleren",
    words: "Handige woorden", wordsIntro: "Open een woord voor een korte uitleg.", source: "Lees de officiële bron", newTab: "opent in een nieuw tabblad",
    terms: {
      permission: { label: "Verblijfstoestemming", definition: "Toestemming om een bepaalde periode in Ierland te blijven, met voorwaarden voor activiteiten zoals werken of studeren." },
      registration: { label: "Registratie", definition: "Het vastleggen van verblijfstoestemming en de voorwaarden bij de Ierse immigratieautoriteiten, wanneer registratie vereist is." },
      permit: { label: "Werkvergunning", definition: "Toestemming om te werken binnen het Ierse werkvergunningenstelsel. Deze staat los van verblijfstoestemming." },
      pps: { label: "PPS-nummer", definition: "Een uniek referentienummer voor toegang tot bepaalde openbare diensten in Ierland." },
    },
  },
  fa: {
    listen: "گوش دادن", pause: "مکث", resume: "ادامهٔ صدا", stop: "توقف", options: "تنظیمات صدا",
    speed: "سرعت خواندن", includeChoices: "خواندن پرسش و گزینه‌ها", includeFeedback: "خواندن بازخورد در صورت وجود",
    loading: "در حال یافتن صدا برای این زبان…", ready: "صدا آماده است", starting: "در حال شروع صدا…", speaking: "در حال خواندن با صدای بلند", paused: "صدا موقتاً متوقف است", finished: "خواندن پایان یافت",
    unavailable: "در این دستگاه صدایی برای این زبان موجود نیست.", unsupported: "خواندن با صدای بلند در این مرورگر در دسترس نیست.", failed: "صدا پخش نشد. دوباره امتحان کنید یا به خواندن ادامه دهید.", retry: "بررسی دوبارهٔ صداها",
    words: "واژه‌های کاربردی", wordsIntro: "یک واژه را باز کنید تا توضیح کوتاهی ببینید.", source: "خواندن منبع رسمی", newTab: "در زبانهٔ جدید باز می‌شود",
    terms: {
      permission: { label: "اجازهٔ اقامت", definition: "اجازهٔ ماندن در ایرلند برای مدت مشخص، با شرایطی برای فعالیت‌هایی مانند کار یا تحصیل." },
      registration: { label: "ثبت اقامت", definition: "ثبت اجازهٔ اقامت و شرایط آن نزد مقامات مهاجرت ایرلند، در مواردی که ثبت لازم است." },
      permit: { label: "مجوز کار", definition: "مجوز اشتغال در چارچوب نظام مجوزهای کار ایرلند. این مجوز از اجازهٔ اقامت جداست." },
      pps: { label: "شمارهٔ PPS", definition: "شمارهٔ مرجع یکتایی برای دسترسی به برخی خدمات عمومی در ایرلند." },
    },
  },
  xh: {
    listen: "Mamela", pause: "Nqumama", resume: "Qhubeka nesandi", stop: "Yeka", options: "Ukhetho lwesandi",
    speed: "Isantya sokufunda", includeChoices: "Funda umbuzo neempendulo onokukhetha kuzo", includeFeedback: "Funda ingcaciso xa ikhona",
    loading: "Kukhangelwa ilizwi lolu lwimi…", ready: "Isandi silungile", starting: "Kuqalwa isandi…", speaking: "Kufundwa ngokuvakalayo", paused: "Isandi sinqunyanyisiwe", finished: "Ukufunda kugqityiwe",
    unavailable: "Akukho lizwi lolu lwimi lifumanekayo kwesi sixhobo.", unsupported: "Ukufunda ngokuvakalayo akufumaneki kwesi sikhangeli.", failed: "Isandi asikwazanga ukudlala. Zama kwakhona okanye uqhubeke ufunda.", retry: "Phinda ukhangele amazwi",
    words: "Amagama aluncedo", wordsIntro: "Vula igama ukuze ufunde ingcaciso emfutshane.", source: "Funda umthombo osemthethweni", newTab: "kuvuleka kwithebhu entsha",
    terms: {
      permission: { label: "Imvume yokuhlala", definition: "Imvume yokuhlala eIreland ixesha elithile, enemiqathango yemisebenzi efana nokusebenza okanye ukufunda." },
      registration: { label: "Ukubhalisa", definition: "Ukurekhoda imvume yokuhlala nemiqathango yayo kwabasemagunyeni bezokufudukela eIreland, xa ukubhalisa kufunwa." },
      permit: { label: "Iphepha-mvume lokusebenza", definition: "Ugunyaziso lokusebenza phantsi kwenkqubo yaseIreland yamaphepha-mvume okusebenza. Lwahlukile kwimvume yokuhlala." },
      pps: { label: "Inombolo yePPS", definition: "Inombolo yesalathiso eyodwa esetyenziselwa ukufikelela kwiinkonzo ezithile zoluntu eIreland." },
    },
  },
};
