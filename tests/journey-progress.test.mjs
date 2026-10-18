import assert from "node:assert/strict";
import test from "node:test";
import { characters, stepsByRoute } from "../app/journey-data.ts";
import {
  createChoiceOrder, createSavedJourney, parseCompletedJourneys,
  parseSavedJourneys, serialiseSavedJourneys,
} from "../app/journey-progress.ts";

test("every attempt presents each answer once and varies the correct position", () => {
  for (const steps of Object.values(stepsByRoute)) {
    for (let attempt = 0; attempt < 30; attempt += 1) {
      const order = createChoiceOrder(steps);
      const positions = steps.map((step, index) => {
        assert.deepEqual([...order[index]].sort(), step.choices.map((choice) => choice.id).sort());
        return order[index].indexOf(step.choices.find((choice) => choice.correct).id);
      });
      assert.equal(new Set(positions).size, 3, "The five stages should use all three correct-answer positions.");
      const counts = [0, 1, 2].map((position) => positions.filter((value) => value === position).length);
      assert.ok(Math.max(...counts) - Math.min(...counts) <= 1);
    }
  }
});

test("two unfinished characters round-trip with answers, checked feedback and order intact", () => {
  const kwame = createSavedJourney(characters.find((character) => character.id === "kwame"), 100);
  const farid = createSavedJourney(characters.find((character) => character.id === "farid"), 200);
  kwame.answers = { 0: "contract", 1: "sequence" };
  kwame.checkedSteps = [0];
  kwame.stepIndex = 1;
  kwame.plainLanguage = false;
  const saved = { kwame, farid };
  assert.deepEqual(parseSavedJourneys(serialiseSavedJourneys(saved)), saved);
  assert.equal(parseSavedJourneys(serialiseSavedJourneys(saved)).kwame.checkedSteps.includes(1), false);
});

test("invalid JSON, unsupported versions and malformed records are ignored", () => {
  for (const raw of [null, "", "{", "null", "[]", '{"version":2,"journeys":{}}', '{"version":1,"journeys":[]}']) {
    assert.deepEqual(parseSavedJourneys(raw), {});
  }
  const kwame = createSavedJourney(characters[0]);
  for (const patch of [{ route: "protection" }, { characterId: "farid" }, { stepIndex: -1 }, { stepIndex: 5 }, { stepIndex: 1.5 }, { choiceOrder: {} }]) {
    assert.deepEqual(parseSavedJourneys(serialiseSavedJourneys({ kwame: { ...kwame, ...patch } })), {});
  }
});

test("stale answers cannot unlock later stages or count as checked feedback", () => {
  const kwame = createSavedJourney(characters[0]);
  kwame.answers = { 0: "removed-answer", 1: "sequence" };
  kwame.checkedSteps = [0, 1, 99];
  kwame.stepIndex = 2;
  const restored = parseSavedJourneys(serialiseSavedJourneys({ kwame })).kwame;
  assert.equal(restored.stepIndex, 0);
  assert.deepEqual(restored.answers, { 1: "sequence" });
  assert.deepEqual(restored.checkedSteps, [1]);
});

test("a corrupt answer order does not replace valid progress for another person", () => {
  const kwame = createSavedJourney(characters[0]);
  const farid = createSavedJourney(characters.find((character) => character.id === "farid"));
  kwame.choiceOrder[0] = ["verify", "verify", "visitor"];
  const restored = parseSavedJourneys(serialiseSavedJourneys({ kwame, farid }));
  assert.deepEqual(Object.keys(restored), ["farid"]);
  assert.deepEqual(restored.farid, farid);
});

test("existing completion badges retain only distinct, known characters", () => {
  assert.deepEqual(parseCompletedJourneys('["kwame","unknown","kwame",23,"farid"]'), ["kwame", "farid"]);
  assert.deepEqual(parseCompletedJourneys('{"kwame":true}'), []);
  assert.deepEqual(parseCompletedJourneys("bad JSON"), []);
});
