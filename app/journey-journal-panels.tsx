"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, BookOpen, Check, Download, ExternalLink, NotebookPen, Trash2 } from "lucide-react";
import { characters, stepsByRoute } from "./journey-data";
import { localCharacter, localRoute, localStep, ui, type Language } from "./i18n";
import { learningCopy } from "./learning-copy";
import { insightKeysByRoute } from "./journey-learning";
import { CharacterPortrait } from "./character-portrait";
import { journalCopy } from "./journal-copy";
import {
  createJournalEntry, journalNoteLimit, journalStorageKey,
  parseJournal, serialiseJournal, type JournalEntries, type JournalEntry,
} from "./journey-journal";
import "./journey-journal.css";

export type JourneyJournalController = {
  entries: JournalEntries;
  ready: boolean;
  available: boolean;
  record: (characterId: string, answers: Record<number, string>, checkedSteps: number[]) => boolean;
  saveNote: (characterId: string, note: string) => boolean;
  remove: (characterId: string) => boolean;
};

/** Owns only the completed-journal key. Unfinished attempts are independent. */
export function useJourneyJournal(): JourneyJournalController {
  const [entries, setEntries] = useState<JournalEntries>({});
  const [ready, setReady] = useState(false);
  const [available, setAvailable] = useState(true);
  const snapshot = useRef<JournalEntries>({});
  const pending = useRef<Record<string, JournalEntry | null>>({});

  function includePending(stored: JournalEntries) {
    const merged = { ...stored };
    for (const [id, entry] of Object.entries(pending.current)) {
      if (entry) merged[id] = entry;
      else delete merged[id];
    }
    return merged;
  }

  useEffect(() => {
    function read() {
      try {
        const stored = parseJournal(window.localStorage.getItem(journalStorageKey));
        // Do not discard notes from this visit if an earlier write was blocked.
        const next = includePending(stored);
        snapshot.current = next;
        setEntries(next);
      } catch { setAvailable(false); }
      setReady(true);
    }
    const frame = window.requestAnimationFrame(read);
    function sync(event: StorageEvent) { if (event.key === null || event.key === journalStorageKey) read(); }
    function restore(event: PageTransitionEvent) { if (event.persisted) read(); }
    window.addEventListener("storage", sync);
    window.addEventListener("pageshow", restore);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("storage", sync);
      window.removeEventListener("pageshow", restore);
    };
  }, []);

  function update(transform: (current: JournalEntries) => JournalEntries): boolean {
    let current = snapshot.current;
    try {
      const stored = parseJournal(window.localStorage.getItem(journalStorageKey));
      current = includePending(stored);
    } catch { /* Keep the in-memory journal when browser storage is unavailable. */ }
    const next = transform(current);
    let saved = true;
    try { window.localStorage.setItem(journalStorageKey, serialiseJournal(next)); }
    catch { saved = false; }
    if (saved) pending.current = {};
    else for (const id of new Set([...Object.keys(current), ...Object.keys(next)])) {
      if (current[id] !== next[id]) pending.current[id] = next[id] ?? null;
    }
    snapshot.current = next;
    setEntries(next);
    setAvailable(saved);
    return saved;
  }

  function record(characterId: string, answers: Record<number, string>, checkedSteps: number[]): boolean {
    if (!ready) return false;
    // Timestamp this user interaction, never a render.
    const entry = createJournalEntry(characterId, answers, checkedSteps, Date.now());
    if (!entry) return false;
    return update((current) => ({ ...current, [characterId]: { ...entry, note: current[characterId]?.note ?? "" } }));
  }

  function saveNote(characterId: string, note: string): boolean {
    if (!ready || !snapshot.current[characterId]) return false;
    const now = Date.now();
    return update((current) => current[characterId] ? {
      ...current, [characterId]: { ...current[characterId], note: note.slice(0, journalNoteLimit), updatedAt: Math.max(now, current[characterId].completedAt) },
    } : current);
  }

  function remove(characterId: string): boolean {
    if (!ready) return false;
    return update((current) => {
      const next = { ...current };
      delete next[characterId];
      return next;
    });
  }

  return { entries, ready, available, record, saveNote, remove };
}

function dateLabel(timestamp: number, language: Language) {
  return new Intl.DateTimeFormat(language, { year: "numeric", month: "short", day: "numeric" }).format(timestamp);
}

function downloadEntry(entry: JournalEntry, language: Language) {
  const base = characters.find((item) => item.id === entry.characterId);
  if (!base) return;
  const character = localCharacter(base, language);
  const copy = journalCopy(language);
  const learning = learningCopy(language);
  const steps = stepsByRoute[base.route].map((step) => localStep(step, base.route, language));
  const sections = [copy.entryTitle.replace("{name}", character.name), dateLabel(entry.completedAt, language)];
  if (entry.needsReview) sections.push(copy.stale);
  else sections.push(character.identity, character.stakes);
  if (!entry.needsReview) steps.forEach((step, index) => {
    const choice = step.choices.find((item) => item.id === entry.answers[index]);
    if (!choice) return;
    sections.push(`${step.stage}: ${step.title}`, `${learning.yourChoice}: ${choice.label}`, choice.feedback, choice.consequence,
      `${learning.nextStep}: ${learning.insights[insightKeysByRoute[base.route][index]].action}`, `${step.sourceLabel}: ${step.sourceUrl}`);
  });
  if (entry.note) sections.push(`${copy.note}\n${entry.note}`);
  const url = URL.createObjectURL(new Blob([sections.join("\n\n")], { type: "text/plain;charset=utf-8" }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `journey-${base.id}-${language}.txt`;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function JournalEntryContent({ entry, journal, language }: { entry: JournalEntry; journal: JourneyJournalController; language: Language }) {
  const base = characters.find((item) => item.id === entry.characterId)!;
  const character = localCharacter(base, language);
  const copy = journalCopy(language);
  const learning = learningCopy(language);
  const t = ui[language];
  const id = useId();
  const [draft, setDraft] = useState<string | null>(null);
  const [savedMessage, setSavedMessage] = useState(false);
  const [confirmingRemoval, setConfirmingRemoval] = useState(false);
  // Keep untouched notes in sync across tabs without replacing an active draft.
  const note = draft ?? entry.note;
  const dirty = note !== entry.note;
  const steps = stepsByRoute[base.route].map((step) => localStep(step, base.route, language));

  return <section className="journal-entry" aria-labelledby={`${id}-title`}>
    <div className="journal-entry-header">
      <NotebookPen size={23} aria-hidden="true" />
      <div><p className="journal-kicker">{copy.title}</p><h3 id={`${id}-title`}>{copy.entryTitle.replace("{name}", character.name.split(" ")[0])}</h3></div>
    </div>
    <p className="journal-save-state" role="status">{journal.available ? copy.saved : copy.unavailable}</p>
    {entry.needsReview ? <p className="journal-stale-notice">{copy.stale}</p> : <>
    <div className="journal-topic-strip" aria-label={t.stages}>
      {steps.map((step) => <span key={step.stage}><Check size={14} aria-hidden="true" />{step.stage}</span>)}
    </div>
    <details className="journal-decisions">
      <summary><BookOpen size={18} aria-hidden="true" />{learning.decisionsTitle}</summary>
      <ol>{steps.map((step, index) => {
        const choice = step.choices.find((item) => item.id === entry.answers[index]);
        if (!choice) return null;
        return <li key={step.stage}>
          <p className="journal-kicker">{step.stage}</p><h4>{step.title}</h4>
          <p><strong>{learning.yourChoice}</strong></p><p>{choice.label}</p>
          <p>{choice.feedback}</p>
          <p className="journal-takeaway"><strong>{learning.nextStep}</strong> {learning.insights[insightKeysByRoute[base.route][index]].action}</p>
          <a href={step.sourceUrl} target="_blank" rel="noreferrer">{copy.source}<span className="sr-only">: {step.sourceLabel}</span><ExternalLink size={15} aria-hidden="true" /></a>
        </li>;
      })}</ol>
    </details>
    </>}
    <form className="journal-note" onSubmit={(event) => {
      event.preventDefault();
      setSavedMessage(journal.saveNote(entry.characterId, note));
      setDraft(null);
    }}>
      <label htmlFor={`${id}-note`}>{copy.note}</label>
      <p id={`${id}-help`}>{copy.noteHelp}</p>
      <textarea id={`${id}-note`} rows={3} maxLength={journalNoteLimit} value={note} aria-describedby={`${id}-help`} onChange={(event) => { setDraft(event.target.value === entry.note ? null : event.target.value); setSavedMessage(false); }} />
      <div className="journal-note-actions">
        <button className="quiet-button" type="submit" disabled={!dirty && journal.available}>{copy.saveNote}</button>
        <span role="status">{dirty ? copy.noteUnsaved : savedMessage ? copy.noteSaved : ""}</span>
      </div>
    </form>
    <div className="journal-entry-actions">
      <button className="quiet-button" type="button" onClick={() => downloadEntry({ ...entry, note }, language)}><Download size={16} aria-hidden="true" />{copy.download}</button>
      <button className="journal-remove" type="button" aria-expanded={confirmingRemoval} aria-controls={`${id}-remove`} onClick={() => setConfirmingRemoval(!confirmingRemoval)}><Trash2 size={16} aria-hidden="true" />{copy.remove}</button>
    </div>
    {confirmingRemoval ? <div className="journal-remove-confirmation" id={`${id}-remove`}>
      <p>{copy.removeQuestion}</p>
      <div><button className="quiet-button" type="button" onClick={() => setConfirmingRemoval(false)}>{copy.keep}</button>
        <button className="quiet-button" type="button" onClick={() => {
          journal.remove(entry.characterId);
          window.requestAnimationFrame(() => (document.getElementById("learning-journal-title") ?? document.getElementById("completion-title"))?.focus());
        }}>{copy.confirmRemove}</button></div>
    </div> : null}
  </section>;
}

export function JourneyJournalEntry({ characterId, journal, language }: { characterId: string; journal: JourneyJournalController; language: Language }) {
  const entry = journal.entries[characterId];
  if (!entry) return null;
  return <JournalEntryContent key={`${entry.characterId}:${entry.completedAt}`} entry={entry} journal={journal} language={language} />;
}

export function JourneyJournalLibrary({ journal, language, onExplore }: { journal: JourneyJournalController; language: Language; onExplore: (characterId: string) => void }) {
  const copy = journalCopy(language);
  const entries = Object.values(journal.entries).sort((a, b) => b.updatedAt - a.updatedAt);
  return <section id="learning-journal" className="journal-library" aria-labelledby="learning-journal-title">
    <div className="journal-library-heading">
      <div>
        <p className="eyebrow" data-reveal="journal-kicker" data-reveal-motion="gentle" data-reveal-delay="0">{copy.title}</p>
        <h2 id="learning-journal-title" tabIndex={-1} data-reveal="journal-heading" data-reveal-motion="gentle" data-reveal-delay="110">{copy.intro}</h2>
      </div>
      <BookOpen size={34} aria-hidden="true" />
    </div>
    <p className="journal-storage-note" data-reveal="journal-storage" data-reveal-motion="gentle" data-reveal-delay="210">{journal.available ? copy.storage : copy.unavailable}</p>
    {!entries.length
      ? <p className="journal-empty" data-reveal="journal-empty" data-reveal-motion="gentle" data-reveal-delay="300">{copy.empty}</p>
      : <div className="journal-library-list" data-reveal="journal-entries" data-reveal-motion="gentle" data-reveal-delay="300">
      {entries.map((entry) => {
        const character = localCharacter(characters.find((item) => item.id === entry.characterId)!, language);
        return <details className="journal-library-item" key={entry.characterId}>
          <summary>
            <CharacterPortrait character={character} />
            <span className="journal-item-identity"><strong>{character.name}</strong><span>{localRoute(character.route, language).short}</span><time dateTime={new Date(entry.completedAt).toISOString()}>{dateLabel(entry.completedAt, language)}</time></span>
            <span className="journal-open-label">{copy.view}<ArrowRight size={17} aria-hidden="true" /></span>
          </summary>
          <JourneyJournalEntry characterId={entry.characterId} journal={journal} language={language} />
          <button className="quiet-button journal-replay" type="button" onClick={() => onExplore(entry.characterId)}>{copy.explore.replace("{name}", character.name.split(" ")[0])}<ArrowRight size={16} aria-hidden="true" /></button>
        </details>;
      })}
    </div>}
  </section>;
}
