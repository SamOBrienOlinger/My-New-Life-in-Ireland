import { BookOpen, Check, ChevronDown, Circle, Compass, MapPin } from "lucide-react";
import { CharacterPortrait } from "./character-portrait";
import { engagementCopy } from "./engagement-copy";
import { localRoute, ui, type Language } from "./i18n";
import type { Character, Step } from "./journey-data";

const chapterImages = ["plan", "prepare", "travel", "arrive", "build-a-life"] as const;
const chapterPositions = ["50% 57%", "50% 57%", "50% 48%", "50% 55%", "50% 45%"] as const;

export function ChapterBanner({ index, stage, language }: { index: number; stage: string; language: Language }) {
  const copy = engagementCopy(language);
  return <figure className="chapter-banner" aria-hidden="true">
    <img src={`images/chapters/${chapterImages[index]}.webp`} width={1200} height={800} alt="" decoding="async" style={{ objectPosition: chapterPositions[index] }} />
    <figcaption><BookOpen size={15} /><span>{copy.chapter} {index + 1}</span><span className="chapter-banner-divider" />{stage}</figcaption>
  </figure>;
}

type JourneyCharacterProps = {
  character: Character; steps: Step[]; stepIndex: number; checkedSteps: number[]; completed: boolean;
  language: Language; onReview: (index: number) => void;
};

function ChapterTrail({ steps, stepIndex, checkedSteps, completed, language, onReview }: Omit<JourneyCharacterProps, "character">) {
  const copy = engagementCopy(language);
  const firstUnchecked = steps.findIndex((_, index) => !checkedSteps.includes(index));
  return <nav aria-label={ui[language].stages} className="chapter-navigation">
    <p className="mini-label">{copy.chapters}</p>
    <ol className="chapter-trail">{steps.map((step, index) => {
      const current = !completed && index === stepIndex;
      const explored = checkedSteps.includes(index);
      const available = explored || current || index === firstUnchecked;
      return <li key={index} className={current ? "current" : explored ? "explored" : "upcoming"}>
        <button type="button" disabled={!available} aria-current={current ? "step" : undefined}
          aria-label={`${current ? copy.current : explored ? copy.review : copy.nextChapter}: ${step.stage}`}
          onClick={() => onReview(index)}>
          <span className="chapter-marker" aria-hidden="true">{explored && !current ? <Check size={16} /> : current ? <Compass size={17} /> : <Circle size={12} />}</span>
          <span><strong>{step.stage}</strong><small>{current ? copy.current : explored ? copy.completed : copy.nextChapter}</small></span>
        </button>
      </li>;
    })}</ol>
  </nav>;
}

function PersonDetails({ character, language }: { character: Character; language: Language }) {
  const t = ui[language];
  return <div className="story-person-details">
    <p className="story-origin"><MapPin size={15} aria-hidden="true" />{character.origin}<span aria-hidden="true">·</span>{character.role}</p>
    <span className="route-pill">{localRoute(character.route, language).label}</span>
    <p className="story-identity">{character.identity}</p>
    <div className="story-stakes"><strong>{t.stake}</strong><p>{character.stakes}</p></div>
  </div>;
}

export function JourneyCharacter(props: JourneyCharacterProps) {
  const { character, language } = props;
  const copy = engagementCopy(language);
  return <aside className="story-character" aria-label={ui[language].selected}>
    <div className="story-person-heading">
      <CharacterPortrait character={character} eager />
      <div><p className="mini-label">{ui[language].walking}</p><h1>{character.name}</h1><p>{character.pronouns}</p></div>
    </div>
    <div className="story-character-desktop">
      <PersonDetails character={character} language={language} />
      <ChapterTrail {...props} />
    </div>
    <details className="story-context" key={character.id}>
      <summary><span>{copy.about.replace("{name}", character.name.split(" ")[0])}<small>{ui[language].stages}</small></span><ChevronDown size={18} aria-hidden="true" /></summary>
      <PersonDetails character={character} language={language} />
      <ChapterTrail {...props} />
    </details>
  </aside>;
}
