"use client";

import { BookOpenText, ChevronDown, ExternalLink } from "lucide-react";
import type { Language } from "./i18n";
import { glossarySources, readingToolsCopy, type GlossaryKey } from "./reading-tools-copy";
import "./reading-tools.css";

const termOrder: GlossaryKey[] = ["permission", "registration", "permit", "pps"];

export function JourneyGlossary({ language }: { language: Language }) {
  const copy = readingToolsCopy[language];
  return <details className="reading-glossary">
    <summary><BookOpenText size={18} aria-hidden="true" /><span>{copy.words}</span><ChevronDown className="reading-tools__chevron" size={17} aria-hidden="true" /></summary>
    <div className="reading-glossary__body">
      <p className="reading-glossary__intro">{copy.wordsIntro}</p>
      <div className="reading-glossary__terms">
        {termOrder.map((key) => <details className="reading-glossary__term" key={key}>
          <summary><span>{copy.terms[key].label}</span><ChevronDown className="reading-tools__chevron" size={16} aria-hidden="true" /></summary>
          <div className="reading-glossary__definition">
            <p>{copy.terms[key].definition}</p>
            <a href={glossarySources[key]} target="_blank" rel="noopener noreferrer">
              <span>{copy.source}</span><ExternalLink size={14} aria-hidden="true" /><span className="sr-only"> ({copy.newTab})</span>
            </a>
          </div>
        </details>)}
      </div>
    </div>
  </details>;
}
