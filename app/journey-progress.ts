import { characters, stepsByRoute, type Character, type Step } from "./journey-data.ts";

export const progressStorageKey = "mnli-journey-progress";
export const completedStorageKey = "mnli-completed-journeys";

export type SavedJourney = {
  characterId: string;
  route: Character["route"];
  stepIndex: number;
  answers: Record<number, string>;
  checkedSteps: number[];
  choiceOrder: Record<number, string[]>;
  plainLanguage: boolean;
  updatedAt: number;
};

export type SavedJourneys = Record<string, SavedJourney>;

function shuffle<T>(items: readonly T[], random: () => number): T[] {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const other = Math.floor(random() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
}

/** Balance correct-answer positions, then randomise their sequence once per attempt. */
export function createChoiceOrder(steps: readonly Step[], random = Math.random): Record<number, string[]> {
  const groups = new Map<number, number[]>();
  steps.forEach((step, index) => {
    const group = groups.get(step.choices.length) ?? [];
    group.push(index);
    groups.set(step.choices.length, group);
  });
  const order: Record<number, string[]> = {};
  groups.forEach((indices, count) => {
    const offset = Math.floor(random() * count);
    const positions = shuffle(indices.map((_, index) => (index + offset) % count), random);
    indices.forEach((stepIndex, index) => {
      const choices = steps[stepIndex].choices;
      const correct = choices.filter((choice) => choice.correct);
      if (correct.length !== 1) {
        order[stepIndex] = shuffle(choices.map((choice) => choice.id), random);
        return;
      }
      const ids = shuffle(choices.filter((choice) => !choice.correct).map((choice) => choice.id), random);
      ids.splice(positions[index], 0, correct[0].id);
      order[stepIndex] = ids;
    });
  });
  return order;
}

export function createSavedJourney(character: Character, now = Date.now()): SavedJourney {
  return {
    characterId: character.id,
    route: character.route,
    stepIndex: 0,
    answers: {},
    checkedSteps: [],
    choiceOrder: createChoiceOrder(stepsByRoute[character.route]),
    plainLanguage: true,
    updatedAt: now,
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

/** Invalid or outdated records cannot select a different character or unlock a stage. */
export function parseSavedJourneys(raw: string | null): SavedJourneys {
  if (!raw) return {};
  let payload: unknown;
  try { payload = JSON.parse(raw); } catch { return {}; }
  if (!isRecord(payload) || payload.version !== 1 || !isRecord(payload.journeys)) return {};
  const saved: SavedJourneys = {};
  for (const character of characters) {
    const value = payload.journeys[character.id];
    if (!isRecord(value) || value.characterId !== character.id || value.route !== character.route) continue;
    const steps = stepsByRoute[character.route];
    if (!Number.isInteger(value.stepIndex) || (value.stepIndex as number) < 0 || (value.stepIndex as number) >= steps.length) continue;
    if (!isRecord(value.answers) || !isRecord(value.choiceOrder) || !Array.isArray(value.checkedSteps)) continue;
    const answers: Record<number, string> = {};
    const choiceOrder: Record<number, string[]> = {};
    let validOrder = true;
    steps.forEach((step, index) => {
      const answer = value.answers && (value.answers as Record<string, unknown>)[index];
      if (typeof answer === "string" && step.choices.some((choice) => choice.id === answer)) answers[index] = answer;
      const ids = (value.choiceOrder as Record<string, unknown>)[index];
      if (!Array.isArray(ids) || ids.length !== step.choices.length || new Set(ids).size !== ids.length || ids.some((id) => typeof id !== "string" || !step.choices.some((choice) => choice.id === id))) {
        validOrder = false;
      } else {
        choiceOrder[index] = [...ids] as string[];
      }
    });
    if (!validOrder) continue;
    const checkedSteps = [...new Set(value.checkedSteps.filter((index): index is number => Number.isInteger(index) && typeof index === "number" && Boolean(answers[index])))];
    let stepIndex = value.stepIndex as number;
    // An interrupted or stale write must not skip unanswered, unchecked decisions.
    for (let index = 0; index < stepIndex; index += 1) {
      if (!checkedSteps.includes(index)) { stepIndex = index; break; }
    }
    saved[character.id] = {
      characterId: character.id,
      route: character.route,
      stepIndex,
      answers,
      checkedSteps,
      choiceOrder,
      plainLanguage: value.plainLanguage !== false,
      updatedAt: typeof value.updatedAt === "number" && Number.isFinite(value.updatedAt) ? value.updatedAt : 0,
    };
  }
  return saved;
}

export function serialiseSavedJourneys(journeys: SavedJourneys): string {
  return JSON.stringify({ version: 1, journeys });
}

export function parseCompletedJourneys(raw: string | null): string[] {
  try {
    const value: unknown = JSON.parse(raw || "[]");
    return Array.isArray(value) ? [...new Set(value.filter((id): id is string => typeof id === "string" && characters.some((character) => character.id === id)))] : [];
  } catch { return []; }
}
