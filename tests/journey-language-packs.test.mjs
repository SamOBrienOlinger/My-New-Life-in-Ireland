import assert from "node:assert/strict";
import test from "node:test";
import { characters } from "../app/journey-data.ts";
import { factEntries } from "../app/fact-or-fiction/facts.ts";

function leaves(value, path = "") {
  if (typeof value === "string") return [[path, value]];
  return Object.entries(value).flatMap(([key, child]) => leaves(child, path ? `${path}.${key}` : key));
}

const expectedPlaceholders = {
  "ui.tagline": ["{siteName}"],
  "engagement.about": ["{name}"],
  "engagement.startWith": ["{name}"],
  "journal.entryTitle": ["{name}"],
  "journal.explore": ["{name}"],
};

for (const language of ["ln", "yo", "sw"]) {
  test(`${language}: interface text is complete and preserves character, fact and interpolation identities`, async () => {
    const { default: copy } = await import(`../app/language-packs/${language}.ts`);
    const strings = new Map(leaves(copy));
    for (const [path, text] of strings) {
      assert.ok(text.trim(), `${language}.${path} is empty`);
      assert.deepEqual((text.match(/\{[^{}]+\}/g) ?? []).sort(), expectedPlaceholders[path] ?? [], `${language}.${path} placeholders`);
    }
    assert.deepEqual(Object.keys(copy.characterText).sort(), characters.map(c => c.id).sort());
    assert.deepEqual(Object.keys(copy.stageLabels), ["Plan", "Prepare", "Travel", "Arrive", "Build a life"]);
    assert.deepEqual(Object.keys(copy.facts).sort(), factEntries.map(f => f.id).sort());
    // A translated statute title may repeat its original English name and year.
    const numbers = text => [...new Set((text.match(/\d[\d,.]*/g) ?? []).map(n => n.replace(/[,\.]+$/, "").replaceAll(",", "")))].sort();
    for (const fact of factEntries) {
      const original = [fact.claim, fact.answer, fact.context];
      copy.facts[fact.id].forEach((text, index) => {
        assert.notEqual(text, original[index], `${language}.${fact.id} needs translated copy`);
        assert.deepEqual(numbers(text), numbers(original[index]), `${language}.${fact.id} must preserve figures and dates`);
      });
    }
  });
}
