import assert from "node:assert/strict";
import test from "node:test";
import { characters, stepsByRoute } from "../app/journey-data.ts";
import {
  buildJourneyRecap, guidanceForRecap, insightKeysByRoute,
  practicalResourceUrls, practicalResourcesForCharacter,
} from "../app/journey-learning.ts";
import { createChoiceOrder } from "../app/journey-progress.ts";
import { loadJourneyLanguage } from "../app/journey-translations/index.ts";
import en from "../app/learning-copy/en.ts";
import { learningCopy, loadLearningLanguage } from "../app/learning-copy/index.ts";
import { sourceInfo, sourceVerificationLog } from "../app/source-info.ts";
import { movingGuideForRoute, movingGuideResources } from "../app/moving-guide.ts";

const languages = ["en", "ga", "ar", "zh", "fr", "pt", "es", "nl", "fa", "xh", "ln", "yo", "sw"];

function answersFor(steps, reviewIndices = []) {
  return Object.fromEntries(steps.map((step, index) => [
    index, step.choices.find((choice) => reviewIndices.includes(index) ? !choice.correct : choice.correct).id,
  ]));
}

for (const [route, steps] of Object.entries(stepsByRoute)) {
  test(`${route}: shuffled choices retain the selected answer, feedback and recap outcome`, () => {
    const answers = answersFor(steps, [1, 3]);
    const checked = steps.map((_, index) => index);
    const before = structuredClone({ steps, answers, checked });

    // Exercise distinct attempt orders without relying on a random test outcome.
    for (const random of [() => 0, () => 0.49, () => 0.99]) {
      const order = createChoiceOrder(steps, random);
      const displayed = steps.map((step, index) => ({
        ...step, choices: order[index].map((id) => step.choices.find((choice) => choice.id === id)),
      }));
      const displayedOrder = displayed.map((step) => step.choices.map((choice) => choice.id));
      const recap = buildJourneyRecap(displayed, answers, checked);

      assert.equal(recap.length, steps.length);
      assert.deepEqual(recap.map(({ index }) => index), checked);
      assert.deepEqual(recap.filter(({ needsReview }) => needsReview).map(({ index }) => index), [1, 3]);
      for (const decision of recap) {
        const chosen = steps[decision.index].choices.find((choice) => choice.id === answers[decision.index]);
        assert.deepEqual(decision.chosen, chosen, "The recap must follow the stored answer ID, including its explanation.");
        assert.equal(decision.informed.id, steps[decision.index].choices.find((choice) => choice.correct).id);
        assert.equal(decision.step.sourceUrl, steps[decision.index].sourceUrl);
      }
      assert.deepEqual(displayed.map((step) => step.choices.map((choice) => choice.id)), displayedOrder);
    }
    assert.deepEqual({ steps, answers, checked }, before, "Building a recap must not alter the attempt or its original content.");
  });
}

test("a recap omits unchecked, removed and absent answers without inventing decisions", () => {
  const steps = stepsByRoute.critical;
  const answers = { ...answersFor(steps), 2: "removed-answer", 99: "out-of-range" };
  delete answers[4];
  const recap = buildJourneyRecap(steps, answers, [0, 0, 2, 4, 99]);
  assert.deepEqual(recap.map(({ index }) => index), [0]);
  assert.equal(recap[0].chosen.id, answers[0]);
  assert.deepEqual(buildJourneyRecap(steps, answers, []), []);
});

test("next sources prioritise decisions to revisit and never repeat a URL", () => {
  const steps = stepsByRoute.critical;
  const decisions = buildJourneyRecap(steps, answersFor(steps, [1, 2, 4]), [0, 1, 2, 3, 4]);
  assert.equal(steps[1].sourceUrl, steps[2].sourceUrl, "This fixture covers two decisions sharing one source.");
  const guidance = guidanceForRecap(decisions);

  assert.deepEqual(guidance.map(({ index }) => index), [1, 4, 3]);
  assert.deepEqual(guidance.map(({ needsReview }) => needsReview), [true, true, false]);
  assert.equal(new Set(guidance.map(({ step }) => step.sourceUrl)).size, guidance.length);
  assert.deepEqual(decisions.map(({ index }) => index), [0, 1, 2, 3, 4], "Prioritising sources must not reorder the decision recap.");
  assert.deepEqual(guidanceForRecap([]), []);
});

test("all 40 stages have a specific misunderstanding and a useful next action", () => {
  assert.deepEqual(Object.keys(insightKeysByRoute).sort(), Object.keys(stepsByRoute).sort());
  let stageCount = 0;
  for (const [route, steps] of Object.entries(stepsByRoute)) {
    assert.equal(insightKeysByRoute[route].length, steps.length, route);
    for (const key of insightKeysByRoute[route]) {
      assert.ok(en.insights[key]?.explanation.trim(), `${route}: ${key} explanation`);
      assert.ok(en.insights[key]?.action.trim(), `${route}: ${key} action`);
      stageCount += 1;
    }
  }
  assert.equal(stageCount, 40);
});

test("nursing guidance is specific to Priya and tax guidance follows the work routes", () => {
  const workRoutes = new Set(["critical", "general", "eu-mobility"]);
  for (const character of characters) {
    const resources = practicalResourcesForCharacter(character, en);
    const urls = resources.map(({ href }) => href);
    assert.equal(urls.includes(practicalResourceUrls.nursing), character.id === "priya", character.id);
    assert.equal(urls.includes(practicalResourceUrls.tax), workRoutes.has(character.route), character.id);
    assert.equal(new Set(urls).size, urls.length);
  }
});

test("source metadata does not present an inaccessible or unknown page as consulted", () => {
  const knownUrl = "https://www.irishimmigration.ie/coming-to-work-in-ireland/";
  const known = sourceInfo(knownUrl);
  assert.equal(known.publisher, "Immigration Service Delivery");
  assert.equal(known.scope, "immigration");
  assert.match(known.checkedAt, /^\d{4}-\d{2}-\d{2}$/);
  assert.deepEqual(sourceInfo(`${knownUrl}?ref=journey#guidance`), known);

  const unverified = sourceVerificationLog.filter(({ status }) => status === "not-verified");
  assert.ok(unverified.length > 0, "The blocked retrievals must remain explicit in the verification log.");
  for (const source of unverified) {
    assert.equal(sourceInfo(source.url).checkedAt, undefined, source.url);
    assert.ok(source.note.trim());
  }
  assert.deepEqual(sourceInfo("https://www.irishimmigration.ie/a-page-that-was-not-consulted/"), {
    publisher: "irishimmigration.ie", scope: "general-information",
  });
  assert.equal(sourceInfo("not a URL").checkedAt, undefined);
  for (const source of sourceVerificationLog) {
    assert.ok(en.scopes[source.scope], `Missing display label for ${source.scope}`);
  }
});

test("moving guidance uses production sources and preserves destinations across languages", async () => {
  await Promise.all(languages.map((language) => loadLearningLanguage(language)));
  const original = movingGuideResources(en);
  const urls = original.map(({ href }) => href);
  assert.equal(new Set(urls).size, urls.length, "The hub must not add duplicate guide cards.");
  assert.equal(new Set(original.map(({ id }) => id)).size, Object.keys(en.movingGuide.resources).length);

  for (const resource of original) {
    const url = new URL(resource.href);
    assert.equal(url.origin, "https://www.citizensinformation.ie", "Staging and API hosts must never become public resource links.");
    assert.equal(url.search, "");
    assert.equal(url.hash, "");
    const source = sourceInfo(resource.href);
    assert.equal(source.publisher, "Citizens Information");
    assert.equal(source.scope, resource.scope);
    assert.equal(source.checkedAt, undefined, "Indexed snippets must not be presented as a page consultation.");
  }

  for (const language of languages) {
    const translated = movingGuideResources(learningCopy(language));
    assert.deepEqual(translated.map(({ href }) => href), urls, language);
    for (const [index, resource] of translated.entries()) {
      assert.ok(resource.title.trim() && resource.description.trim(), `${language}.${resource.id}`);
      if (language !== "en") {
        assert.notEqual(resource.title, original[index].title, `${language}.${resource.id} title must be translated.`);
        assert.notEqual(resource.description, original[index].description, `${language}.${resource.id} description must be translated.`);
      }
    }
  }
});

test("related moving guidance respects the journey purpose and keeps returning-citizen guidance separate", () => {
  for (const character of characters) {
    const resource = movingGuideForRoute(character.route, en);
    assert.ok(resource && resource.href, character.id);
    assert.notEqual(resource.id, "returning", "The fictional journeys do not concern returning Irish citizens.");
    if (["critical", "general"].includes(character.route)) assert.equal(resource.topic, "work", character.id);
    if (character.route === "study") assert.equal(resource.topic, "study", character.id);
    if (character.route === "family") assert.equal(resource.topic, "family", character.id);
    if (character.route === "eu-mobility") {
      assert.equal(resource.topic, "immigration");
      assert.match(resource.href, /\/rights-of-residence-in-ireland\/$/);
    }
    if (["protection", "protection-access", "family-safety"].includes(character.route)) {
      assert.equal(resource.topic, "daily-life", `${character.id}: practical guidance must not imply an ordinary work or family immigration route.`);
    }
    if (character.route === "protection-access") assert.match(resource.href, /\/health-care-in-ireland\/$/);
  }
  assert.match(en.movingGuide.resources.returning.description, /Irish citizens/);
});

function textLeaves(value, path = "") {
  if (typeof value === "string") return [[path, value]];
  assert.ok(value && typeof value === "object" && !Array.isArray(value), `${path} must contain translated text.`);
  return Object.entries(value).flatMap(([key, child]) => textLeaves(child, path ? `${path}.${key}` : key));
}

test("a completed journey-language load also makes its learning copy ready to render", async () => {
  await Promise.all([loadJourneyLanguage("ar"), loadJourneyLanguage("fr")]);
  for (const language of ["ar", "fr"]) {
    assert.ok(learningCopy(language).insights.offer.explanation.trim());
    assert.notEqual(learningCopy(language).recapTitle, en.recapTitle);
  }
});

test("all supported learning languages retain every field and interpolation placeholder", async () => {
  await Promise.all(languages.map((language) => loadLearningLanguage(language)));
  const expected = new Map(textLeaves(en));
  const placeholders = (text) => (text.match(/\{[^{}]+\}/g) ?? []).sort();

  for (const language of languages) {
    const translated = new Map(textLeaves(learningCopy(language)));
    assert.deepEqual([...translated.keys()].sort(), [...expected.keys()].sort(), language);
    for (const [path, text] of translated) {
      assert.ok(text.trim(), `${language}.${path} is empty.`);
      assert.deepEqual(placeholders(text), placeholders(expected.get(path)), `${language}.${path} placeholders`);
    }
  }
  assert.equal(new Set(languages.map((language) => learningCopy(language).recapTitle)).size, languages.length,
    "A locale must not resolve to another language's cached learning copy.");
});

