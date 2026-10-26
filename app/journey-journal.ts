import { characters, stepsByRoute, type RouteKey } from "./journey-data.ts";

export const journalStorageKey = "mnli-learning-journal";
export const journalSchemaVersion = 1;
export const journalNoteLimit = 1600;

export type JournalEntry = {
  characterId: string;
  route: RouteKey;
  contentVersion: string;
  needsReview: boolean;
  answers: Record<number, string>;
  checkedSteps: number[];
  completedAt: number;
  updatedAt: number;
  note: string;
};
export type JournalEntries = Record<string, JournalEntry>;

/** A changed scenario must not silently rewrite the meaning of an archived answer. */
export function journalContentVersion(route: RouteKey): string {
  const content = JSON.stringify(stepsByRoute[route]);
  let hash = 2166136261;
  for (let index = 0; index < content.length; index += 1) {
    hash ^= content.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return `1-${(hash >>> 0).toString(36)}`;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function completeAnswers(route: RouteKey, value: unknown, checked: unknown): Record<number, string> | null {
  if (!isRecord(value) || !Array.isArray(checked)) return null;
  const answers: Record<number, string> = {};
  for (const [index, step] of stepsByRoute[route].entries()) {
    const answer = value[index];
    if (!checked.includes(index) || typeof answer !== "string" || !step.choices.some((choice) => choice.id === answer)) return null;
    answers[index] = answer;
  }
  return answers;
}

/** Keep reflections from older stories without interpreting their answers as current. */
export function parseJournal(raw: string | null): JournalEntries {
  if (!raw || raw.length > 500_000) return {};
  let payload: unknown;
  try { payload = JSON.parse(raw); } catch { return {}; }
  if (!isRecord(payload) || payload.version !== journalSchemaVersion || !isRecord(payload.entries)) return {};
  const entries: JournalEntries = {};
  for (const character of characters) {
    const value = payload.entries[character.id];
    if (!isRecord(value) || value.characterId !== character.id || value.route !== character.route || typeof value.contentVersion !== "string" || value.contentVersion.length > 100) continue;
    const needsReview = value.contentVersion !== journalContentVersion(character.route);
    const answers = needsReview ? {} : completeAnswers(character.route, value.answers, value.checkedSteps);
    if (!answers || typeof value.completedAt !== "number" || !Number.isFinite(value.completedAt) || value.completedAt < 0 || value.completedAt > 8_640_000_000_000_000 ||
      typeof value.updatedAt !== "number" || !Number.isFinite(value.updatedAt) || value.updatedAt < value.completedAt || value.updatedAt > 8_640_000_000_000_000) continue;
    entries[character.id] = {
      characterId: character.id, route: character.route, contentVersion: value.contentVersion, needsReview,
      answers, checkedSteps: needsReview ? [] : stepsByRoute[character.route].map((_, index) => index),
      completedAt: value.completedAt, updatedAt: value.updatedAt,
      note: typeof value.note === "string" ? value.note.slice(0, journalNoteLimit) : "",
    };
  }
  return entries;
}

export function serialiseJournal(entries: JournalEntries): string {
  return JSON.stringify({ version: journalSchemaVersion, entries });
}

export function createJournalEntry(characterId: string, answers: Record<number, string>, checkedSteps: number[], now: number, note = ""): JournalEntry | null {
  const character = characters.find((item) => item.id === characterId);
  if (!character || !Number.isFinite(now) || now < 0 || now > 8_640_000_000_000_000) return null;
  const validAnswers = completeAnswers(character.route, answers, checkedSteps);
  if (!validAnswers) return null;
  return {
    characterId, route: character.route, contentVersion: journalContentVersion(character.route), needsReview: false,
    answers: validAnswers, checkedSteps: stepsByRoute[character.route].map((_, index) => index),
    completedAt: now, updatedAt: now, note: note.slice(0, journalNoteLimit),
  };
}
