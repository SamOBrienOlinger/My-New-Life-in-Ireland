import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { immigrationQuestions, immigrationQuestionsReviewed, filterImmigrationQuestions } from "../app/resources/immigration-questions.ts";

const topics = new Set(["arrival", "immigration", "protection", "work", "study", "daily-life", "family", "rights"]);

test("the guide has ten uniquely anchored, sourced questions with both perspectives", () => {
  assert.equal(immigrationQuestions.length, 10);
  assert.equal(new Set(immigrationQuestions.map(({ id }) => id)).size, 10);
  assert.match(immigrationQuestionsReviewed, /^\d{4}-\d{2}-\d{2}$/);
  for (const question of immigrationQuestions) {
    assert.match(question.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    for (const key of ["title", "keywords", "explanation", "forNewcomers", "forOthers", "nextStep"]) assert.ok(question[key].trim(), `${question.id}: ${key}`);
    assert.ok(question.topics.length && question.topics.every((topic) => topics.has(topic)));
    assert.ok(question.sources.length);
    for (const source of question.sources) {
      assert.equal(new URL(source.href).protocol, "https:");
      assert.ok(source.title && source.publisher);
    }
  }
});
test("empty and whitespace queries show all questions", () => {
  assert.equal(filterImmigrationQuestions().length, 10);
  assert.equal(filterImmigrationQuestions("all", "  ").length, 10);
});
test("every existing hub topic has relevant learning questions", () => {
  for (const topic of topics) {
    const matches = filterImmigrationQuestions(topic);
    assert.ok(matches.length, topic);
    assert.ok(matches.every((question) => question.topics.includes(topic)));
  }
});
test("search covers aliases, explanations and source publishers, case-insensitively", () => {
  assert.ok(filterImmigrationQuestions("all", "PPSN").some(({ id }) => id === "documents-and-services"));
  assert.ok(filterImmigrationQuestions("all", "NARIC").some(({ id }) => id === "education-and-qualifications"));
  assert.ok(filterImmigrationQuestions("all", "  MEDICAL   CARD ").some(({ id }) => id === "healthcare-and-medical-cards"));
  assert.ok(filterImmigrationQuestions("all", "HIQA").some(({ id }) => id === "language-and-interpreting"));
});
test("topic and query filters combine without mutating the source", () => {
  assert.equal(filterImmigrationQuestions("work", "habitual residence").length, 0);
  assert.equal(filterImmigrationQuestions("all", "no-such-question-xyz").length, 0);
  assert.equal(filterImmigrationQuestions("unknown-topic").length, 0);
  assert.equal(immigrationQuestions.length, 10);
});
test("the panel discloses scope, ranking limits and its English fallback", () => {
  const panel = readFileSync(new URL("../app/resources/immigration-questions-panel.tsx", import.meta.url), "utf8");
  assert.match(panel, /not a statistical ranking/);
  assert.match(panel, /Republic of Ireland, not Northern Ireland/);
  assert.match(panel, /lang="en" dir="ltr"/);
  assert.match(panel, /currently available in English/);
  assert.match(panel, /<details/);
  assert.match(panel, /<summary/);
});
test("the resource page connects the guide to the existing controls", () => {
  const page = readFileSync(new URL("../app/resources/page.tsx", import.meta.url), "utf8");
  assert.match(page, /import \{ ImmigrationQuestionsPanel \} from "\.\/immigration-questions-panel"/);
  assert.match(page, /<ImmigrationQuestionsPanel topic=\{topic\} query=\{query\} language=\{language\} \/>/);
});
