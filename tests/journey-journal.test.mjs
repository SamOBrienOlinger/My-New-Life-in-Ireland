import assert from "node:assert/strict";
import test from "node:test";
import { characters, stepsByRoute } from "../app/journey-data.ts";
import {
  createJournalEntry, journalNoteLimit, journalStorageKey, parseJournal, serialiseJournal,
} from "../app/journey-journal.ts";
import { progressStorageKey, completedStorageKey } from "../app/journey-progress.ts";

function complete(characterId, now = 100) {
  const character = characters.find((item) => item.id === characterId);
  const steps = stepsByRoute[character.route];
  const answers = Object.fromEntries(steps.map((step, index) => [index, step.choices[0].id]));
  return createJournalEntry(characterId, answers, steps.map((_, index) => index), now);
}

test("completed journals preserve checked answer IDs and notes for different people", () => {
  const kwame = { ...complete("kwame"), note: "I would check the source first." };
  const adama = complete("adama", 200);
  const result = parseJournal(serialiseJournal({ kwame, adama }));
  assert.deepEqual(result, { kwame, adama });
  assert.notEqual(journalStorageKey, progressStorageKey);
  assert.notEqual(journalStorageKey, completedStorageKey);
});

test("an incomplete or unchecked attempt cannot become a completed journal", () => {
  const entry = complete("kwame");
  assert.equal(createJournalEntry("kwame", entry.answers, [0, 1, 2, 3], 300), null);
  assert.equal(createJournalEntry("kwame", { ...entry.answers, 4: "removed-choice" }, entry.checkedSteps, 300), null);
  assert.equal(createJournalEntry("unknown", {}, [], 300), null);
  assert.equal(createJournalEntry("kwame", entry.answers, entry.checkedSteps, Number.POSITIVE_INFINITY), null);
});

test("bad storage cannot replace valid records", () => {
  const kwame = complete("kwame");
  const adama = complete("adama");
  for (const patch of [
    { route: "protection" }, { characterId: "elena" },
    { checkedSteps: [0, 1] }, { answers: { 0: "contract" } }, { completedAt: -1 },
    { completedAt: 1e40 }, { updatedAt: 0 }, { answers: [] },
  ]) {
    const restored = parseJournal(serialiseJournal({ kwame: { ...kwame, ...patch }, adama }));
    assert.deepEqual(Object.keys(restored), ["adama"]);
  }
  for (const raw of [null, "bad json", "null", "[]", '{"version":2,"entries":{}}', '{"version":1,"entries":[]}']) {
    assert.deepEqual(parseJournal(raw), {});
  }
});

test("a changed scenario keeps the learner's note and date without reusing old answers", () => {
  const original = { ...complete("kwame"), contentVersion: "older-story", note: "A reflection worth keeping.", answers: { 0: "retired-answer" } };
  const restored = parseJournal(serialiseJournal({ kwame: original })).kwame;
  assert.equal(restored.note, original.note);
  assert.equal(restored.completedAt, original.completedAt);
  assert.equal(restored.needsReview, true);
  assert.deepEqual(restored.answers, {});
  assert.deepEqual(restored.checkedSteps, []);
  const savedAgain = parseJournal(serialiseJournal({ kwame: { ...restored, note: "A revised reflection.", updatedAt: 200 } })).kwame;
  assert.equal(savedAgain.note, "A revised reflection.");
  assert.equal(savedAgain.needsReview, true);
});

test("journals are bounded to known people and bounded reflection text", () => {
  const kwame = { ...complete("kwame"), note: "x".repeat(journalNoteLimit + 100) };
  const restored = parseJournal(serialiseJournal({ kwame, unknown: { ...kwame, characterId: "unknown" } }));
  assert.deepEqual(Object.keys(restored), ["kwame"]);
  assert.equal(restored.kwame.note.length, journalNoteLimit);
  const invalidNote = parseJournal(serialiseJournal({ kwame: { ...kwame, note: { html: "untrusted" } } }));
  assert.equal(invalidNote.kwame.note, "");
});
