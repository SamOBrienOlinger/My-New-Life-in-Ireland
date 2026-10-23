import type { Language } from "./i18n";

export type CharacterCarouselCopy = {
  previous: string;
  next: string;
  instructions: string;
  range: string;
};

const copy: Record<Language, CharacterCarouselCopy> = {
  en: {
    previous: "Previous characters",
    next: "Next characters",
    instructions: "Swipe or use the arrows to meet everyone.",
    range: "{start}–{end} of {total}",
  },
  ga: {
    previous: "Na carachtair roimhe seo",
    next: "Na chéad charachtair eile",
    instructions: "Svaidhpeáil nó úsáid na saigheada chun aithne a chur ar gach duine.",
    range: "{start}–{end} as {total}",
  },
  ar: {
    previous: "الشخصيات السابقة",
    next: "الشخصيات التالية",
    instructions: "اسحب أو استخدم الأسهم للتعرّف على الجميع.",
    range: "{start} إلى {end} من {total}",
  },
  zh: {
    previous: "前面的人物",
    next: "后面的人物",
    instructions: "滑动或使用箭头，认识每一位人物。",
    range: "第 {start}–{end} 位，共 {total} 位",
  },
  fr: {
    previous: "Personnages précédents",
    next: "Personnages suivants",
    instructions: "Balayez ou utilisez les flèches pour découvrir chaque personnage.",
    range: "{start}–{end} sur {total}",
  },
  pt: {
    previous: "Personagens anteriores",
    next: "Personagens seguintes",
    instructions: "Deslize ou use as setas para conhecer todas as personagens.",
    range: "{start}–{end} de {total}",
  },
  es: {
    previous: "Personajes anteriores",
    next: "Personajes siguientes",
    instructions: "Desliza o usa las flechas para conocer a todos los personajes.",
    range: "{start}–{end} de {total}",
  },
  nl: {
    previous: "Vorige personages",
    next: "Volgende personages",
    instructions: "Veeg of gebruik de pijlen om iedereen te leren kennen.",
    range: "{start}–{end} van {total}",
  },
  fa: {
    previous: "شخصیت‌های قبلی",
    next: "شخصیت‌های بعدی",
    instructions: "برای آشنایی با همه، انگشت خود را روی صفحه بکشید یا از پیکان‌ها استفاده کنید.",
    range: "{start} تا {end} از {total}",
  },
  xh: {
    previous: "Abalinganiswa bangaphambili",
    next: "Abalinganiswa abalandelayo",
    instructions: "Swayipha okanye usebenzise iintolo ukuze ubazi bonke.",
    range: "Abalinganiswa: {start}–{end} / {total}",
  },
};

export function characterCarouselCopy(language: Language): CharacterCarouselCopy {
  return copy[language];
}
