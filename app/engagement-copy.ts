import { packedLanguageCopy } from "./language-packs";
import type { Language } from "./i18n";

type EngagementCopy = {
  chapter: string; about: string; chapters: string; review: string; current: string;
  completed: string; nextChapter: string; allPeople: string; carousel: string;
  learningMode: string; guided: string; practice: string; guidedHint: string; practiceHint: string;
  sourceDetails: string; whatMeans: string; compareChoices: string; compareIntro: string;
  yourChoice: string; alternative: string; selectAlternative: string; compareNote: string;
  journal: string; saved: string; reading: string; startWith: string;
};

const copy: Record<Language, EngagementCopy> = {
  ...packedLanguageCopy("engagement"),
  en: {
    chapter: "Chapter", about: "About {name}", chapters: "Your journey", review: "Review", current: "Current chapter",
    completed: "Explored", nextChapter: "Still to explore", allPeople: "View all people", carousel: "Use the carousel",
    learningMode: "How would you like to learn?", guided: "With guidance", practice: "Try first",
    guidedHint: "Read the guidance, then consider your choice.", practiceHint: "Try the decision first. Guidance is here whenever you need it.",
    sourceDetails: "About this source", whatMeans: "What this choice means", compareChoices: "What if I chose differently?",
    compareIntro: "Compare the explanations for two choices in this situation.", yourChoice: "Your checked choice", alternative: "Another possibility",
    selectAlternative: "Choose an alternative to compare", compareNote: "Exploring an alternative does not change your saved answer.",
    journal: "My learning journal", saved: "Saved on this device", reading: "Reading tools", startWith: "Begin with {name}",
  },
  ga: {
    chapter: "Caibidil", about: "Maidir le {name}", chapters: "Do thuras", review: "Athbhreithnigh", current: "An chaibidil reatha",
    completed: "Fiosraithe", nextChapter: "Le fiosrú fós", allPeople: "Féach ar gach duine", carousel: "Úsáid an timpeallán",
    learningMode: "Conas ba mhaith leat foghlaim?", guided: "Le treoir", practice: "Bain triail as ar dtús",
    guidedHint: "Léigh an treoir, ansin smaoinigh ar do rogha.", practiceHint: "Bain triail as an gcinneadh ar dtús. Tá an treoir ar fáil nuair is gá.",
    sourceDetails: "Maidir leis an bhfoinse", whatMeans: "Cad a chiallaíonn an rogha seo", compareChoices: "Cad dá roghnóinn rud eile?",
    compareIntro: "Cuir na mínithe ar dhá rogha sa chás seo i gcomparáid.", yourChoice: "Do rogha seiceáilte", alternative: "Féidearthacht eile",
    selectAlternative: "Roghnaigh rogha eile le comparáid a dhéanamh", compareNote: "Ní athraíonn fiosrú rogha eile do fhreagra sábháilte.",
    journal: "Mo dhialann foghlama", saved: "Sábháilte ar an ngléas seo", reading: "Uirlisí léitheoireachta", startWith: "Tosaigh le {name}",
  },
  ar: {
    chapter: "الفصل", about: "عن {name}", chapters: "رحلتك", review: "مراجعة", current: "الفصل الحالي",
    completed: "تم استكشافه", nextChapter: "لم يُستكشف بعد", allPeople: "عرض جميع الشخصيات", carousel: "استخدام العرض المتتابع",
    learningMode: "كيف تود أن تتعلم؟", guided: "مع الإرشادات", practice: "جرّب أولاً",
    guidedHint: "اقرأ الإرشادات ثم فكّر في اختيارك.", practiceHint: "جرّب اتخاذ القرار أولاً. الإرشادات متاحة كلما احتجتها.",
    sourceDetails: "عن هذا المصدر", whatMeans: "ما الذي يعنيه هذا الاختيار", compareChoices: "ماذا لو اخترت خياراً آخر؟",
    compareIntro: "قارن بين تفسيرَي خيارين في هذا الموقف.", yourChoice: "اختيارك الذي راجعته", alternative: "احتمال آخر",
    selectAlternative: "اختر بديلاً للمقارنة", compareNote: "استكشاف خيار بديل لا يغيّر إجابتك المحفوظة.",
    journal: "دفتر تعلّمي", saved: "محفوظ على هذا الجهاز", reading: "أدوات القراءة", startWith: "ابدأ مع {name}",
  },
  zh: {
    chapter: "章节", about: "了解{name}", chapters: "你的旅程", review: "回顾", current: "当前章节",
    completed: "已探索", nextChapter: "尚待探索", allPeople: "查看所有人物", carousel: "使用轮播视图",
    learningMode: "你想如何学习？", guided: "参考指引", practice: "先试一试",
    guidedHint: "先阅读指引，再考虑你的选择。", practiceHint: "先尝试作出决定。需要时可以随时查看指引。",
    sourceDetails: "关于此来源", whatMeans: "这一选择意味着什么", compareChoices: "如果我作出不同选择呢？",
    compareIntro: "比较这一情境下两种选择的解释。", yourChoice: "你已确认的选择", alternative: "另一种可能",
    selectAlternative: "选择一个替代选项进行比较", compareNote: "探索其他选项不会更改你已保存的答案。",
    journal: "我的学习日志", saved: "已保存在此设备上", reading: "阅读工具", startWith: "与{name}一起开始",
  },
  fr: {
    chapter: "Chapitre", about: "À propos de {name}", chapters: "Votre parcours", review: "Revoir", current: "Chapitre en cours",
    completed: "Exploré", nextChapter: "À explorer", allPeople: "Voir tous les personnages", carousel: "Utiliser le carrousel",
    learningMode: "Comment souhaitez-vous apprendre ?", guided: "Avec des repères", practice: "Essayer d’abord",
    guidedHint: "Lisez les repères, puis réfléchissez à votre choix.", practiceHint: "Essayez de décider d’abord. Les repères restent disponibles à tout moment.",
    sourceDetails: "À propos de cette source", whatMeans: "Ce que signifie ce choix", compareChoices: "Et si je choisissais autrement ?",
    compareIntro: "Comparez les explications de deux choix dans cette situation.", yourChoice: "Votre choix vérifié", alternative: "Une autre possibilité",
    selectAlternative: "Choisissez une autre option à comparer", compareNote: "Explorer une autre option ne modifie pas votre réponse enregistrée.",
    journal: "Mon journal d’apprentissage", saved: "Enregistré sur cet appareil", reading: "Outils de lecture", startWith: "Commencer avec {name}",
  },
  pt: {
    chapter: "Capítulo", about: "Sobre {name}", chapters: "O seu percurso", review: "Rever", current: "Capítulo atual",
    completed: "Explorado", nextChapter: "Por explorar", allPeople: "Ver todas as personagens", carousel: "Usar o carrossel",
    learningMode: "Como gostaria de aprender?", guided: "Com orientação", practice: "Experimentar primeiro",
    guidedHint: "Leia a orientação e depois pense na sua escolha.", practiceHint: "Tente decidir primeiro. A orientação está disponível sempre que precisar.",
    sourceDetails: "Sobre esta fonte", whatMeans: "O que esta escolha significa", compareChoices: "E se escolhesse outra opção?",
    compareIntro: "Compare as explicações de duas escolhas nesta situação.", yourChoice: "A sua escolha verificada", alternative: "Outra possibilidade",
    selectAlternative: "Escolha uma alternativa para comparar", compareNote: "Explorar uma alternativa não altera a sua resposta guardada.",
    journal: "O meu diário de aprendizagem", saved: "Guardado neste dispositivo", reading: "Ferramentas de leitura", startWith: "Começar com {name}",
  },
  es: {
    chapter: "Capítulo", about: "Sobre {name}", chapters: "Tu recorrido", review: "Revisar", current: "Capítulo actual",
    completed: "Explorado", nextChapter: "Por explorar", allPeople: "Ver todos los personajes", carousel: "Usar el carrusel",
    learningMode: "¿Cómo quieres aprender?", guided: "Con orientación", practice: "Intentarlo primero",
    guidedHint: "Lee la orientación y después considera tu elección.", practiceHint: "Intenta decidir primero. La orientación está disponible cuando la necesites.",
    sourceDetails: "Sobre esta fuente", whatMeans: "Qué significa esta elección", compareChoices: "¿Y si eligiera otra opción?",
    compareIntro: "Compara las explicaciones de dos elecciones en esta situación.", yourChoice: "Tu elección comprobada", alternative: "Otra posibilidad",
    selectAlternative: "Elige una alternativa para comparar", compareNote: "Explorar una alternativa no cambia tu respuesta guardada.",
    journal: "Mi diario de aprendizaje", saved: "Guardado en este dispositivo", reading: "Herramientas de lectura", startWith: "Empezar con {name}",
  },
  nl: {
    chapter: "Hoofdstuk", about: "Over {name}", chapters: "Jouw reis", review: "Terugkijken", current: "Huidig hoofdstuk",
    completed: "Verkend", nextChapter: "Nog te verkennen", allPeople: "Bekijk iedereen", carousel: "Gebruik de carrousel",
    learningMode: "Hoe wil je leren?", guided: "Met uitleg", practice: "Eerst proberen",
    guidedHint: "Lees de uitleg en denk daarna over je keuze na.", practiceHint: "Probeer eerst een beslissing te nemen. De uitleg blijft beschikbaar wanneer je die nodig hebt.",
    sourceDetails: "Over deze bron", whatMeans: "Wat deze keuze betekent", compareChoices: "Wat als ik anders had gekozen?",
    compareIntro: "Vergelijk de uitleg bij twee keuzes in deze situatie.", yourChoice: "Jouw gecontroleerde keuze", alternative: "Een andere mogelijkheid",
    selectAlternative: "Kies een alternatief om te vergelijken", compareNote: "Een alternatief verkennen verandert je opgeslagen antwoord niet.",
    journal: "Mijn leerdagboek", saved: "Opgeslagen op dit apparaat", reading: "Leeshulpmiddelen", startWith: "Begin met {name}",
  },
  fa: {
    chapter: "فصل", about: "دربارهٔ {name}", chapters: "مسیر شما", review: "مرور", current: "فصل کنونی",
    completed: "بررسی‌شده", nextChapter: "هنوز بررسی نشده", allPeople: "نمایش همهٔ شخصیت‌ها", carousel: "استفاده از نمای چرخشی",
    learningMode: "چگونه می‌خواهید یاد بگیرید؟", guided: "با راهنما", practice: "ابتدا امتحان کنید",
    guidedHint: "راهنما را بخوانید و سپس دربارهٔ انتخاب خود فکر کنید.", practiceHint: "ابتدا تصمیم بگیرید. راهنما هر زمان که نیاز داشته باشید در دسترس است.",
    sourceDetails: "دربارهٔ این منبع", whatMeans: "معنای این انتخاب", compareChoices: "اگر انتخاب دیگری می‌کردم چه می‌شد؟",
    compareIntro: "توضیح دو انتخاب را در این موقعیت مقایسه کنید.", yourChoice: "انتخاب بررسی‌شدهٔ شما", alternative: "احتمالی دیگر",
    selectAlternative: "گزینه‌ای دیگر برای مقایسه انتخاب کنید", compareNote: "بررسی گزینه‌ای دیگر، پاسخ ذخیره‌شدهٔ شما را تغییر نمی‌دهد.",
    journal: "دفتر یادگیری من", saved: "در این دستگاه ذخیره شد", reading: "ابزارهای خواندن", startWith: "با {name} شروع کنید",
  },
  xh: {
    chapter: "Isahluko", about: "Malunga no{name}", chapters: "Uhambo lwakho", review: "Phinda ujonge", current: "Isahluko sangoku",
    completed: "Sihloliwe", nextChapter: "Sisaza kuhlolwa", allPeople: "Bona bonke abantu", carousel: "Sebenzisa umboniso ojikelezayo",
    learningMode: "Ungathanda ukufunda njani?", guided: "Ngesikhokelo", practice: "Zama kuqala",
    guidedHint: "Funda isikhokelo, uze ucinge ngokhetho lwakho.", practiceHint: "Zama ukwenza isigqibo kuqala. Isikhokelo sikhona nanini na usidinga.",
    sourceDetails: "Malunga nalo mthombo", whatMeans: "Intsingiselo yolu khetho", compareChoices: "Kuthekani ukuba bendikhethe okwahlukileyo?",
    compareIntro: "Thelekisa iingcaciso zokhetho olubini kule meko.", yourChoice: "Ukhetho lwakho olujongiweyo", alternative: "Enye indlela",
    selectAlternative: "Khetha enye indlela oza kuyithelekisa", compareNote: "Ukuhlola enye indlela akutshintshi impendulo yakho egciniweyo.",
    journal: "Idayari yam yokufunda", saved: "Igcinwe kwesi sixhobo", reading: "Izixhobo zokufunda", startWith: "Qala no{name}",
  },
};

export function engagementCopy(language: Language): EngagementCopy {
  return copy[language];
}
