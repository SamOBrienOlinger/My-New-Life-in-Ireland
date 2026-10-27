import { readFile } from "node:fs/promises";
import { expect, test, type Page } from "@playwright/test";
import { stepsByRoute } from "../../app/journey-data";

async function completeKwame(page: Page) {
  await page.goto("./#character-kwame");
  await page.getByRole("button", { name: "Begin five-stage journey", exact: true }).click();
  for (const [index, step] of stepsByRoute.critical.entries()) {
    await expect(page.locator("#decision-title")).toHaveText(step.title);
    const answer = step.choices.find((choice) => choice.correct)!;
    await page.locator(`[id="${index}-${answer.id}"]`).click();
    await page.getByRole("button", { name: "Check decision", exact: true }).click();
    await page.locator(".decision-actions .primary-button").click();
  }
  await expect(page.locator("#completion-title")).toBeVisible();
  await expect(page.locator(".journal-entry")).toBeVisible();
}

async function openKwameJournal(page: Page) {
  const item = page.locator(".journal-library-item").filter({ has: page.locator("summary strong", { hasText: "Kwame Mensah" }) });
  await item.locator(":scope > summary").click();
  await expect(item.locator(".journal-entry")).toBeVisible();
  return item;
}

test("completed decisions and a saved reflection survive reload; export includes the current draft", async ({ page }) => {
  await completeKwame(page);
  const completed = page.locator(".journal-entry");
  await completed.getByLabel("My reflection", { exact: true }).fill("I will check which source supports the next step.");
  await expect(completed).toContainText("Changes not saved yet.");
  await completed.getByRole("button", { name: "Save reflection", exact: true }).click();
  await expect(completed).toContainText("Reflection saved.");

  await page.reload();
  const entry = await openKwameJournal(page);
  await expect(entry.getByLabel("My reflection", { exact: true })).toHaveValue("I will check which source supports the next step.");
  await entry.locator(".journal-decisions > summary").click();
  for (const step of stepsByRoute.critical) {
    await expect(entry.getByRole("heading", { name: step.title, exact: true })).toBeVisible();
  }
  const firstChoice = stepsByRoute.critical[0].choices.find((choice) => choice.correct)!;
  await expect(entry).toContainText(firstChoice.label);

  const draft = "A second reflection, exported before saving.";
  await entry.getByLabel("My reflection", { exact: true }).fill(draft);
  const downloadPromise = page.waitForEvent("download");
  await entry.getByRole("button", { name: "Download summary", exact: true }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("journey-kwame-en.txt");
  const path = await download.path();
  expect(path).not.toBeNull();
  const text = await readFile(path!, "utf8");
  expect(text).toContain(draft);
  expect(text).toContain(firstChoice.label);
  expect(text).toContain(stepsByRoute.critical[0].sourceUrl);
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem("mnli-learning-journal")!).entries.kwame.note))
    .toBe("I will check which source supports the next step.");
});

test("removing a journal requires a clear action and preserves another unfinished journey", async ({ page }) => {
  await completeKwame(page);
  await page.locator(".journey-comparison").getByRole("button", { name: "Walk with Elena", exact: true }).click();
  await expect(page.locator("#decision-title")).toHaveText(stepsByRoute["eu-mobility"][0].title);
  const answer = stepsByRoute["eu-mobility"][0].choices.find((choice) => choice.correct)!;
  await page.locator(`[id="0-${answer.id}"]`).click();
  await page.getByRole("button", { name: "Check decision", exact: true }).click();
  await page.locator(".journal-nav-link").click();
  await expect(page.locator("#learning-journal-title")).toBeFocused();
  const entry = await openKwameJournal(page);
  await entry.getByRole("button", { name: "Remove entry", exact: true }).click();
  await expect(entry.getByText("Remove this journal entry and its reflection? Your unfinished journeys will remain available.", { exact: true })).toBeVisible();
  await entry.getByRole("button", { name: "Keep entry", exact: true }).click();
  await expect(entry).toBeVisible();
  await entry.getByRole("button", { name: "Remove entry", exact: true }).click();
  await entry.getByRole("button", { name: "Remove this entry", exact: true }).click();
  await expect(page.locator(".journal-library-item")).toHaveCount(0);
  await expect(page.locator("#learning-journal-title")).toBeFocused();
  const stored = await page.evaluate(() => ({
    journal: JSON.parse(localStorage.getItem("mnli-learning-journal")!),
    progress: JSON.parse(localStorage.getItem("mnli-journey-progress")!),
  }));
  expect(stored.journal.entries).toEqual({});
  expect(stored.progress.journeys.elena.answers[0]).toBe(answer.id);
  expect(stored.progress.journeys.elena.checkedSteps).toEqual([0]);
  await page.reload();
  await expect(page.locator(".journal-library-item")).toHaveCount(0);
  await page.locator(".resume-banner").getByRole("button", { name: "Continue with Elena", exact: true }).click();
  await expect(page.locator(`[id="0-${answer.id}"]`)).toHaveAttribute("aria-checked", "true");
});

test("comparison reveals reviewed guidance for both pairs and starts the chosen partner", async ({ page }) => {
  await completeKwame(page);
  const comparison = page.locator(".journey-comparison");
  await expect(comparison.getByRole("heading", { name: "Kwame Mensah", exact: true })).toBeVisible();
  await expect(comparison.getByRole("heading", { name: "Elena Petrova", exact: true })).toBeVisible();
  await expect(comparison.locator(".comparison-person").filter({ hasText: "Kwame Mensah" }).locator(".comparison-state")).toHaveText("Explored");
  await comparison.getByRole("button", { name: "Show the explanation", exact: true }).click();
  await expect(comparison.locator(".comparison-explanation")).toContainText(stepsByRoute.critical[0].plainLaw);
  await expect(comparison.locator(".comparison-explanation")).toContainText(stepsByRoute["eu-mobility"][0].plainLaw);

  await comparison.getByLabel("Choose a comparison", { exact: true }).selectOption("safety");
  await expect(comparison.locator(".comparison-explanation")).toBeHidden();
  await expect(comparison.getByRole("heading", { name: "Mariam Diallo", exact: true })).toBeVisible();
  await expect(comparison.getByRole("heading", { name: "Adama Sissoko", exact: true })).toBeVisible();
  await comparison.getByRole("button", { name: "Show the explanation", exact: true }).click();
  await expect(comparison.locator(".comparison-explanation")).toContainText(stepsByRoute.protection[2].plainLaw);
  await expect(comparison.locator(".comparison-explanation")).toContainText(stepsByRoute["protection-access"][2].plainLaw);
  await comparison.getByRole("button", { name: "Walk with Adama", exact: true }).click();
  await expect(page.locator("#decision-title")).toHaveText(stepsByRoute["protection-access"][0].title);
  await expect(page.locator(".journey-shell h1")).toHaveText("Adama Sissoko");
  expect(await page.evaluate(() => Object.keys(JSON.parse(localStorage.getItem("mnli-learning-journal")!).entries)))
    .toEqual(["kwame"]);
});

test("a blocked journal write retains the current visit and reports that it was not saved", async ({ page }) => {
  await page.addInitScript(() => {
    const original = Storage.prototype.setItem;
    Storage.prototype.setItem = function (key, value) {
      if (key === "mnli-learning-journal") throw new DOMException("Journal storage full", "QuotaExceededError");
      original.call(this, key, value);
    };
  });
  await completeKwame(page);
  const entry = page.locator(".journal-entry");
  await expect(entry.locator(".journal-save-state")).toHaveText("Saving is unavailable. This journal is available only during this visit.");
  await entry.getByLabel("My reflection", { exact: true }).fill("A reflection kept for this visit.");
  await entry.getByRole("button", { name: "Save reflection", exact: true }).click();
  await expect(entry.getByText("Reflection saved.", { exact: true })).toHaveCount(0);
  await page.locator(".journal-nav-link").click();
  const restored = await openKwameJournal(page);
  await expect(restored.getByLabel("My reflection", { exact: true })).toHaveValue("A reflection kept for this visit.");
  expect(await page.evaluate(() => localStorage.getItem("mnli-learning-journal"))).toBeNull();
  await page.reload();
  await expect(page.locator(".journal-library-item")).toHaveCount(0);
});

test("an older story keeps its reflection and date without reconstructing obsolete decisions", async ({ page }) => {
  test.slow(); // Replaying five chapters plus download/storage checks can be slower in CI WebKit.
  await completeKwame(page);
  const reflection = "Keep this reflection when the story changes.";
  await page.locator(".journal-entry").getByLabel("My reflection", { exact: true }).fill(reflection);
  await page.locator(".journal-entry").getByRole("button", { name: "Save reflection", exact: true }).click();
  const completedAt = await page.evaluate(() => {
    const journal = JSON.parse(localStorage.getItem("mnli-learning-journal")!);
    journal.entries.kwame.contentVersion = "previous-story-edition";
    journal.entries.kwame.answers = { 0: "obsolete-answer" };
    localStorage.setItem("mnli-learning-journal", JSON.stringify(journal));
    return journal.entries.kwame.completedAt as number;
  });
  await page.reload();
  const entry = await openKwameJournal(page);
  await expect(entry.locator(".journal-stale-notice")).toHaveText("This story has changed. Your reflection and completion date are kept. Complete the updated journey to refresh your decisions.");
  await expect(entry.getByLabel("My reflection", { exact: true })).toHaveValue(reflection);
  await expect(entry.locator(".journal-item-identity time")).toHaveAttribute("datetime", new Date(completedAt).toISOString());
  await expect(entry.locator(".journal-decisions")).toHaveCount(0);
  await expect(entry.locator(".journal-topic-strip")).toHaveCount(0);
  const downloadPromise = page.waitForEvent("download");
  await entry.getByRole("button", { name: "Download summary", exact: true }).click();
  const download = await downloadPromise;
  const text = await readFile((await download.path())!, "utf8");
  expect(text).toContain(reflection);
  expect(text).toContain("This story has changed.");
  expect(text).not.toContain(stepsByRoute.critical[0].sourceUrl);
  expect(text).not.toContain(stepsByRoute.critical[0].choices[0].label);

  await entry.getByRole("button", { name: "Walk with Kwame", exact: true }).click();
  for (const [index, step] of stepsByRoute.critical.entries()) {
    await expect(page.locator("#decision-title")).toHaveText(step.title);
    // The whole answer card is the accessible pointer target; Safari can stall
    // when clicking the nested 16px radio icon as the page scrolls.
    const correctRadio = page.locator(`[id="${index}-${step.choices.find((choice) => choice.correct)!.id}"]`);
    await page.locator(".choice-card").filter({ has: correctRadio }).click();
    await page.getByRole("button", { name: "Check decision", exact: true }).click();
    await page.locator(".decision-actions .primary-button").click();
  }
  await expect(page.locator("#completion-title")).toBeVisible();
  await expect(page.locator(".journal-stale-notice")).toHaveCount(0);
  await expect(page.locator(".journal-entry").getByLabel("My reflection", { exact: true })).toHaveValue(reflection);
  const refreshed = await page.evaluate(() => JSON.parse(localStorage.getItem("mnli-learning-journal")!).entries.kwame);
  expect(refreshed.needsReview).toBe(false);
  expect(Object.keys(refreshed.answers)).toHaveLength(5);
  expect(refreshed.note).toBe(reflection);
});

test("journal notes sync across tabs without replacing an unfinished draft", async ({ page, context }) => {
  await completeKwame(page);
  const note = page.locator(".journal-entry").getByLabel("My reflection", { exact: true });
  const otherTab = await context.newPage();
  await otherTab.goto("./");
  const otherEntry = await openKwameJournal(otherTab);
  const otherNote = otherEntry.getByLabel("My reflection", { exact: true });
  await otherNote.fill("A reflection saved in another tab.");
  await otherEntry.getByRole("button", { name: "Save reflection", exact: true }).click();
  await expect(note).toHaveValue("A reflection saved in another tab.");

  await note.fill("My current draft stays available.");
  await otherNote.fill("A newer saved reflection from another tab.");
  await otherEntry.getByRole("button", { name: "Save reflection", exact: true }).click();
  await expect(page.locator(".journal-entry")).toContainText("Changes not saved yet.");
  await expect(note).toHaveValue("My current draft stays available.");
  await page.locator(".journal-entry").getByRole("button", { name: "Save reflection", exact: true }).click();
  await expect(otherNote).toHaveValue("My current draft stays available.");
  await otherTab.close();
});
