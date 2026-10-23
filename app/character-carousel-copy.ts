import type { Language } from "./i18n";

export type CharacterCarouselCopy = {
  previous: string;
  next: string;
  instructions: string;
};

const copy: Record<Language, CharacterCarouselCopy> = {
  en: {
    previous: "Previous characters",
    next: "Next characters",
    instructions: "Swipe or use the arrows to meet everyone.",
  },
  ga: {
    previous: "Na carachtair roimhe seo",
    next: "Na chéad charachtair eile",
    instructions: "Svaidhpeáil nó úsáid na saigheada chun aithne a chur ar gach duine.",
  },
  ar: {
    previous: "الشخصيات السابقة",
    next: "الشخصيات التالية",
    instructions: "اسحب أو استخدم الأسهم للتعرّف على الجميع.",
  },
  zh: {
    previous: "前面的人物",
    next: "后面的人物",
    instructions: "滑动或使用箭头，认识每一位人物。",
  },
  fr: {
    previous: "Personnages précédents",
    next: "Personnages suivants",
    instructions: "Balayez ou utilisez les flèches pour découvrir chaque personnage.",
  },
  pt: {
    previous: "Personagens anteriores",
    next: "Personagens seguintes",
    instructions: "Deslize ou use as setas para conhecer todas as personagens.",
  },
  es: {
    previous: "Personajes anteriores",
    next: "Personajes siguientes",
    instructions: "Desliza o usa las flechas para conocer a todos los personajes.",
  },
  nl: {
    previous: "Vorige personages",
    next: "Volgende personages",
    instructions: "Veeg of gebruik de pijlen om iedereen te leren kennen.",
  },
  fa: {
    previous: "شخصیت‌های قبلی",
    next: "شخصیت‌های بعدی",
    instructions: "برای آشنایی با همه، انگشت خود را روی صفحه بکشید یا از پیکان‌ها استفاده کنید.",
  },
  xh: {
    previous: "Abalinganiswa bangaphambili",
    next: "Abalinganiswa abalandelayo",
    instructions: "Swayipha okanye usebenzise iintolo ukuze ubazi bonke.",
  },
};

export function characterCarouselCopy(language: Language): CharacterCarouselCopy {
  return copy[language];
}
