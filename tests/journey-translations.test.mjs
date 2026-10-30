import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";
import { stepsByRoute } from "../app/journey-data.ts";
import { loadJourneyLanguage, translateJourneyStep, resourceDescription, journeyControls } from "../app/journey-translations/index.ts";

const languages = ["ga", "ar", "zh", "fr", "pt", "es", "nl", "fa", "xh", "ln", "yo", "sw"];
const entries = Object.entries(stepsByRoute).flatMap(([route, steps]) => steps.map((step) => ({ route, step, key: `${route}:${step.stage}` })));
const source = ts.createSourceFile("resources.tsx", await readFile(new URL("../app/resources/page.tsx", import.meta.url), "utf8"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
const resources = [];
function collectResources(node) {
  if (ts.isVariableDeclaration(node) && node.name.getText(source) === "resources") {
    const array = ts.isAsExpression(node.initializer) ? node.initializer.expression : node.initializer;
    for (const element of array.elements) {
      const properties = Object.fromEntries(element.properties.filter(ts.isPropertyAssignment).filter((property) => ts.isStringLiteral(property.initializer)).map((property) => [property.name.getText(source), property.initializer.text]));
      resources.push(properties);
    }
  }
  ts.forEachChild(node, collectResources);
}
collectResources(source);
assert.equal(resources.length, 24);

for (const language of languages) {
  test(`${language}: all 40 specific decisions and their 120 answers retain their source identities`, async () => {
    await loadJourneyLanguage(language);
    const { default: catalog } = await import(`../app/journey-translations/${language}.ts`);
    assert.deepEqual(Object.keys(catalog).sort(), entries.map(({ key }) => key).sort());
    const scenes = new Set();
    for (const { route, step, key } of entries) {
      const translated = translateJourneyStep(step, route, language, "stage label");
      assert.equal(translated.sourceUrl, step.sourceUrl);
      assert.deepEqual(translated.choices.map(({ id, correct }) => ({ id, correct })), step.choices.map(({ id, correct }) => ({ id, correct })));
      assert.deepEqual(Object.keys(catalog[key].choices).sort(), step.choices.map(({ id }) => id).sort());
      for (const field of ["eyebrow", "title", "scene", "question", "law", "plainLaw", "sourceLabel"]) {
        assert.ok(typeof translated[field] === "string" && translated[field].trim(), `${key}.${field}`);
      }
      assert.notEqual(translated.scene, step.scene, `${key} must have its own translated scene.`);
      scenes.add(translated.scene);
      for (const choice of translated.choices) for (const field of ["label", "feedback", "consequence"]) {
        assert.ok(typeof choice[field] === "string" && choice[field].trim(), `${key}.${choice.id}.${field}`);
      }
    }
    assert.equal(scenes.size, new Set(entries.map(({ step }) => step.scene)).size, "Different situations must not collapse into a shared generic scene.");
    assert.match(journeyControls(language).resumeJourney, /\{name\}/);
  });

  test(`${language}: every hub resource retains an individual translated description`, async () => {
    await loadJourneyLanguage(language);
    const { resourceDescriptions } = await import(`../app/journey-translations/${language}.ts`);
    assert.deepEqual(Object.keys(resourceDescriptions).sort(), resources.map(({ title }) => title).sort());
    const translated = resources.map(({ title, description }) => resourceDescription(title, description, language));
    assert.equal(new Set(translated).size, resources.length);
    for (const description of translated) assert.ok(description.trim());
  });
}
