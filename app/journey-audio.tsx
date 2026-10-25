"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Pause, Play, RotateCcw, SlidersHorizontal, Square, Volume2 } from "lucide-react";
import type { Language } from "./i18n";
import type { Choice } from "./journey-data";
import { readingToolsCopy } from "./reading-tools-copy";
import "./reading-tools.css";

type JourneyAudioProps = {
  language: Language;
  title: string;
  scene: string;
  guidance: string;
  question: string;
  choices: Choice[];
  feedback?: string;
  contextKey: string;
};

type Availability = "loading" | "available" | "unavailable" | "unsupported";
type Playback = "ready" | "starting" | "speaking" | "paused" | "finished" | "failed";

const locales: Record<Language, string> = {
  en: "en-IE", ga: "ga-IE", ar: "ar", zh: "zh-CN", fr: "fr-FR",
  pt: "pt-PT", es: "es-ES", nl: "nl-NL", fa: "fa-IR", xh: "xh-ZA",
};

function matchingVoice(voices: SpeechSynthesisVoice[], language: Language) {
  const normalise = (tag: string) => tag.toLowerCase().replaceAll("_", "-");
  const exact = voices.find((voice) => normalise(voice.lang) === normalise(locales[language]));
  if (exact) return exact;
  const matching = voices.filter((voice) => {
    const tag = normalise(voice.lang);
    // Do not substitute a Cantonese voice for the site's Mandarin translation.
    if (language === "zh") return ["zh", "zh-cn", "zh-sg", "zh-tw", "zh-hans-cn", "zh-hant-tw", "cmn", "cmn-cn", "cmn-tw"].includes(tag);
    return tag.split("-")[0] === language;
  });
  return matching.find((voice) => voice.default) ?? matching[0];
}

export function JourneyAudio(props: JourneyAudioProps) {
  const [rate, setRate] = useState(1);
  const [includeChoices, setIncludeChoices] = useState(true);
  const [includeFeedback, setIncludeFeedback] = useState(true);
  // A changed chapter, language or reading mode ends the previous narration.
  // Remounting also resets visible playback state without a second render effect.
  const readingKey = [props.contextKey, props.language, props.title, props.scene,
    props.guidance, props.question, props.choices.map((choice) => choice.label).join("\u001f"),
    props.feedback ?? ""].join("\u001e");
  return <AudioPlayer key={readingKey} {...props} rate={rate} setRate={setRate}
    includeChoices={includeChoices} setIncludeChoices={setIncludeChoices}
    includeFeedback={includeFeedback} setIncludeFeedback={setIncludeFeedback} />;
}

type AudioPreferences = {
  rate: number; setRate: (rate: number) => void;
  includeChoices: boolean; setIncludeChoices: (include: boolean) => void;
  includeFeedback: boolean; setIncludeFeedback: (include: boolean) => void;
};

function AudioPlayer({ language, title, scene, guidance, question, choices, feedback,
  rate, setRate, includeChoices, setIncludeChoices, includeFeedback, setIncludeFeedback,
}: JourneyAudioProps & AudioPreferences) {
  const copy = readingToolsCopy[language];
  const speedId = useId();
  const [availability, setAvailability] = useState<Availability>("loading");
  const [playback, setPlayback] = useState<Playback>("ready");
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const generationRef = useRef(0);
  const startTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let disposed = false;
    const supported = "speechSynthesis" in window && typeof window.SpeechSynthesisUtterance === "function";
    const refresh = (finalAttempt = false) => {
      if (disposed) return;
      if (!supported) { setAvailability("unsupported"); return; }
      try {
        const voices = window.speechSynthesis.getVoices();
        setAvailability(matchingVoice(voices, language) ? "available" : finalAttempt || voices.length ? "unavailable" : "loading");
      } catch { setAvailability("unsupported"); }
    };
    const onVoicesChanged = () => refresh(true);
    const frame = window.requestAnimationFrame(() => refresh());
    // Several browsers populate voices asynchronously without an initial event.
    const retry = window.setTimeout(() => refresh(true), 1500);
    if (supported) window.speechSynthesis.addEventListener("voiceschanged", onVoicesChanged);
    return () => {
      disposed = true;
      window.cancelAnimationFrame(frame);
      window.clearTimeout(retry);
      generationRef.current += 1;
      if (startTimeoutRef.current !== null) clearTimeout(startTimeoutRef.current);
      if (supported) {
        window.speechSynthesis.removeEventListener("voiceschanged", onVoicesChanged);
        if (utteranceRef.current) window.speechSynthesis.cancel();
      }
      utteranceRef.current = null;
    };
  }, [language]);

  function stop() {
    generationRef.current += 1;
    if (startTimeoutRef.current !== null) clearTimeout(startTimeoutRef.current);
    if (utteranceRef.current && "speechSynthesis" in window) window.speechSynthesis.cancel();
    utteranceRef.current = null;
    setPlayback("ready");
  }

  function play() {
    if (!("speechSynthesis" in window) || typeof window.SpeechSynthesisUtterance !== "function") {
      setAvailability("unsupported"); return;
    }
    const synthesis = window.speechSynthesis;
    if (playback === "paused" && utteranceRef.current) {
      try { synthesis.resume(); setPlayback("speaking"); } catch { stop(); setPlayback("failed"); }
      return;
    }
    if (playback === "speaking" && utteranceRef.current) {
      try { synthesis.pause(); setPlayback("paused"); } catch { stop(); setPlayback("failed"); }
      return;
    }
    let voice: SpeechSynthesisVoice | undefined;
    try { voice = matchingVoice(synthesis.getVoices(), language); } catch { setAvailability("unsupported"); return; }
    if (!voice) { setAvailability("unavailable"); return; }
    setAvailability("available");
    stop();
    const generation = ++generationRef.current;
    const text = [title, scene, guidance,
      ...(includeChoices ? [question, ...choices.map((choice) => choice.label)] : []),
      ...(includeFeedback && feedback ? [feedback] : []),
    ].filter(Boolean).join(". ");
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.lang = voice.lang;
    utterance.rate = rate;
    utteranceRef.current = utterance;
    const isCurrent = () => generationRef.current === generation;
    const clearStartTimeout = () => {
      if (startTimeoutRef.current !== null) clearTimeout(startTimeoutRef.current);
      startTimeoutRef.current = null;
    };
    utterance.onstart = () => { if (isCurrent()) { clearStartTimeout(); setPlayback("speaking"); } };
    utterance.onpause = () => { if (isCurrent()) setPlayback("paused"); };
    utterance.onresume = () => { if (isCurrent()) setPlayback("speaking"); };
    utterance.onend = () => {
      if (isCurrent()) { clearStartTimeout(); utteranceRef.current = null; setPlayback("finished"); }
    };
    utterance.onerror = () => {
      if (isCurrent()) { clearStartTimeout(); utteranceRef.current = null; setPlayback("failed"); }
    };
    setPlayback("starting");
    startTimeoutRef.current = setTimeout(() => {
      if (isCurrent()) { stop(); setPlayback("failed"); }
    }, 10000);
    try { synthesis.speak(utterance); } catch { stop(); setPlayback("failed"); }
  }

  function retryVoices() {
    try {
      setAvailability(matchingVoice(window.speechSynthesis.getVoices(), language) ? "available" : "unavailable");
    } catch { setAvailability("unsupported"); }
  }

  const active = playback === "speaking" || playback === "paused" || playback === "starting";
  const actionLabel = playback === "speaking" ? copy.pause : playback === "paused" ? copy.resume : copy.listen;
  const StatusIcon = playback === "speaking" ? Pause : playback === "paused" ? Play : Volume2;
  const status = availability === "available" ? copy[playback] : copy[availability];

  return <div className="reading-audio" role="group" aria-label={copy.listen} data-audio-state={playback}>
    <div className="reading-audio__controls">
      <button className="reading-audio__button" type="button" onClick={play} disabled={availability !== "available" || playback === "starting"}>
        <StatusIcon size={17} aria-hidden="true" /><span>{actionLabel}</span>
      </button>
      <button className="reading-audio__button reading-audio__stop" type="button" onClick={stop} disabled={!active}>
        <Square size={14} aria-hidden="true" /><span>{copy.stop}</span>
      </button>
      <details className="reading-audio__options">
        <summary><SlidersHorizontal size={16} aria-hidden="true" /><span>{copy.options}</span><ChevronDown className="reading-tools__chevron" size={16} aria-hidden="true" /></summary>
        <div className="reading-audio__settings">
          <label className="reading-audio__speed" htmlFor={speedId}><span>{copy.speed}</span>
            <select id={speedId} value={rate} onChange={(event) => { stop(); setRate(Number(event.target.value)); }}>
              {[0.75, 1, 1.25, 1.5].map((value) => <option value={value} key={value}>{value}×</option>)}
            </select>
          </label>
          <label className="reading-audio__check"><input type="checkbox" checked={includeChoices} onChange={(event) => { stop(); setIncludeChoices(event.target.checked); }} /><span>{copy.includeChoices}</span></label>
          <label className="reading-audio__check"><input type="checkbox" checked={includeFeedback} onChange={(event) => { stop(); setIncludeFeedback(event.target.checked); }} /><span>{copy.includeFeedback}</span></label>
        </div>
      </details>
    </div>
    <p className={`reading-audio__status${availability === "available" && playback === "ready" ? " sr-only" : ""}`} role="status" aria-live="polite" aria-atomic="true">{status}</p>
    {availability === "unavailable" ? <button className="reading-audio__retry" type="button" onClick={retryVoices}><RotateCcw size={14} aria-hidden="true" />{copy.retry}</button> : null}
  </div>;
}
