import type { Language } from "./i18n";
import { learningCopy } from "./learning-copy";
import { sourceInfo } from "./source-info";

const dateLocales: Record<Language, string> = {
  en: "en-IE", ga: "ga-IE", ar: "ar", zh: "zh-CN", fr: "fr-FR",
  pt: "pt-PT", es: "es-ES", nl: "nl-NL", fa: "fa-IR", xh: "xh-ZA",
};

export function SourceDetails({ href, language, publisher }: { href: string; language: Language; publisher?: string }) {
  const copy = learningCopy(language);
  const info = sourceInfo(href);
  const date = info.checkedAt ? new Intl.DateTimeFormat(dateLocales[language], {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC", calendar: "gregory",
  }).format(new Date(`${info.checkedAt}T12:00:00Z`)) : undefined;
  return <dl className="source-details">
    <div><dt>{copy.sourcePublisher}</dt><dd><bdi>{publisher || info.publisher}</bdi></dd></div>
    <div><dt>{copy.sourceScope}</dt><dd>{copy.scopes[info.scope]}</dd></div>
    <div><dt>{copy.sourceChecked}</dt><dd>{info.checkedAt ? <time dateTime={info.checkedAt}>{date}</time> : copy.sourceUndated}</dd></div>
  </dl>;
}
