import { expect, test, type Page } from "@playwright/test";
import { stepsByRoute } from "../../app/journey-data";
import french from "../../app/journey-translations/fr";
import arabic, { controls as arabicControls } from "../../app/journey-translations/ar";
import farsi, { controls as farsiControls } from "../../app/journey-translations/fa";

const heading = (page: Page) => page.locator("#decision-title");
const nextAction = (page: Page) => page.locator(".decision-actions .primary-button");
const radio = (page: Page, stage: number, id: string) => page.locator(`[id="${stage}-${id}"]`);
const choiceOrder = (page: Page) => page.locator('.choice-list [role="radio"]').evaluateAll((nodes) => nodes.map((node) => node.id.slice(node.id.indexOf("-") + 1)));

async function expectStageFocus(page: Page, title: string) {
  await expect(heading(page)).toHaveText(title);
  await expect(heading(page)).toBeFocused();
  await expect.poll(() => heading(page).evaluate((node) => {
    const box = node.getBoundingClientRect();
    return box.top >= 0 && box.bottom <= window.innerHeight;
  })).toBe(true);
}

async function begin(page: Page) {
  await page.goto("./#character-kwame");
  await expect(page.getByRole("radio", { name: "Kwame Mensah", exact: true })).toHaveAttribute("aria-checked", "true");
  await page.getByRole("button", { name: "Begin five-stage journey", exact: true }).click();
  await expectStageFocus(page, stepsByRoute.critical[0].title);
}

test("hub visits and reloads retain answers, checked feedback, answer order and reading mode", async ({ page }) => {
  await begin(page);
  await radio(page, 0, "verify").click();
  await page.getByRole("button", { name: "Check decision", exact: true }).click();
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await expectStageFocus(page, stepsByRoute.critical[1].title);
  await page.getByRole("button", { name: "Detailed version", exact: true }).click();
  await radio(page, 1, "agent").click();
  const order = await choiceOrder(page);

  await page.locator(".journey-topbar").getByRole("link", { name: "Information hub", exact: true }).click();
  await expect(page).toHaveURL(/\/resources\/$/);
  await page.getByRole("link", { name: "Back to the journeys", exact: true }).click();
  await page.locator(".resume-banner").getByRole("button", { name: "Continue with Kwame", exact: true }).click();
  await expectStageFocus(page, stepsByRoute.critical[1].title);
  await expect(radio(page, 1, "agent")).toHaveAttribute("aria-checked", "true");
  expect(await choiceOrder(page)).toEqual(order);
  await expect(page.getByRole("button", { name: "Check decision", exact: true })).toBeEnabled();
  await expect(page.getByRole("button", { name: "Plain-language version", exact: true })).toBeVisible();

  await page.reload();
  await page.locator(".resume-banner button").click();
  await expectStageFocus(page, stepsByRoute.critical[1].title);
  expect(await choiceOrder(page)).toEqual(order);
  await expect(radio(page, 1, "agent")).toHaveAttribute("aria-checked", "true");

  await page.getByRole("button", { name: "Back", exact: true }).click();
  await expectStageFocus(page, stepsByRoute.critical[0].title);
  await expect(page.locator(".feedback-status")).toContainText(stepsByRoute.critical[0].choices[0].feedback);
  await expect(page.getByRole("button", { name: "Continue", exact: true })).toBeVisible();
  await radio(page, 0, "visitor").click();
  await expect(page.locator(".feedback-status")).toBeEmpty();
  await expect(page.getByRole("button", { name: "Check decision", exact: true })).toBeEnabled();
});

test("each character has an independent save and restarting clears only that attempt", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await begin(page);
  await radio(page, 0, "verify").click();
  await nextAction(page).click();
  await nextAction(page).click();
  await page.getByRole("button", { name: "Change character", exact: true }).click();
  await expect(page.locator("#character-picker-title")).toBeFocused();
  await page.getByRole("link", { name: "Walk with Farid", exact: true }).click();
  await page.locator('.choice-list [role="radio"]').first().click();
  await nextAction(page).click();
  await page.getByRole("button", { name: "Change character", exact: true }).click();
  await page.getByRole("link", { name: "Walk with Kwame", exact: true }).click();
  await expectStageFocus(page, stepsByRoute.critical[1].title);
  await page.getByRole("button", { name: "Change character", exact: true }).click();
  await expect(page.locator("#character-picker-title")).toBeFocused();
  await page.getByRole("radio", { name: "Kwame Mensah", exact: true }).focus();
  await page.keyboard.press("Space");
  await page.getByRole("button", { name: "Restart this journey", exact: true }).click();
  await expectStageFocus(page, stepsByRoute.critical[0].title);
  await expect(page.locator('.choice-list [aria-checked="true"]')).toHaveCount(0);
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem("mnli-journey-progress")!).journeys);
  expect(saved.kwame.answers).toEqual({});
  expect(saved.farid.checkedSteps).toEqual([0]);
});

test("completion uses answer identities, focuses the summary and removes the unfinished save", async ({ page }) => {
  await begin(page);
  for (const [index, step] of stepsByRoute.critical.entries()) {
    await expectStageFocus(page, step.title);
    await radio(page, index, step.choices.find((choice) => choice.correct)!.id).click();
    await nextAction(page).click();
    await nextAction(page).click();
  }
  await expect(page.locator("#completion-title")).toBeFocused();
  await expect(page.locator(".completion-card")).toContainText("5 of 5");
  const saved = await page.evaluate(() => ({
    journeys: JSON.parse(localStorage.getItem("mnli-journey-progress")!).journeys,
    completed: JSON.parse(localStorage.getItem("mnli-completed-journeys")!),
  }));
  expect(saved.journeys.kwame).toBeUndefined();
  expect(saved.completed).toEqual(["kwame"]);
  await page.getByRole("button", { name: "Choose another person", exact: true }).click();
  await expect(page.locator("#character-kwame .completed-badge")).toHaveText("Explored");
  await expect(page.locator(".resume-banner")).toHaveCount(0);
});

test("changing language preserves the active answer and shows the specific scenario and feedback", async ({ page }) => {
  await begin(page);
  await radio(page, 0, "contract").click();
  await nextAction(page).click();
  const order = await choiceOrder(page);
  await page.locator(".journey-topbar select").selectOption("fr");
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  await expect(heading(page)).toHaveText(french["critical:Plan"].title);
  await expect(page.locator(".scene")).toHaveText(french["critical:Plan"].scene);
  await expect(page.locator(".feedback-status")).toContainText(french["critical:Plan"].choices.contract.feedback);
  await expect(radio(page, 0, "contract")).toHaveAttribute("aria-checked", "true");
  expect(await choiceOrder(page)).toEqual(order);
  await nextAction(page).click();
  await expectStageFocus(page, french["critical:Prepare"].title);
  await page.locator(".journey-topbar select").selectOption("en");
  await expect(page.locator(".scene")).toHaveText(stepsByRoute.critical[1].scene);
});

test("two open tabs preserve each other's saved characters and completion badges", async ({ page, context }) => {
  const other = await context.newPage();
  await other.goto("./#character-farid");
  await begin(page);
  await radio(page, 0, "verify").click();
  await other.getByRole("button", { name: "Begin five-stage journey", exact: true }).click();
  await other.locator('.choice-list [role="radio"]').first().click();
  await nextAction(other).click();
  await nextAction(other).click();
  const saved = await other.evaluate(() => JSON.parse(localStorage.getItem("mnli-journey-progress")!).journeys);
  expect(saved.kwame.answers[0]).toBe("verify");
  expect(saved.farid.stepIndex).toBe(1);
  for (const [index, step] of stepsByRoute.critical.entries()) {
    if (index > 0) await radio(page, index, step.choices.find((choice) => choice.correct)!.id).click();
    await nextAction(page).click();
    await nextAction(page).click();
  }
  await expect(page.locator("#completion-title")).toBeFocused();
  await other.locator('.choice-list [role="radio"]').first().click();
  const after = await other.evaluate(() => ({
    journeys: JSON.parse(localStorage.getItem("mnli-journey-progress")!).journeys,
    completed: JSON.parse(localStorage.getItem("mnli-completed-journeys")!),
  }));
  expect(after.journeys.kwame).toBeUndefined();
  expect(after.journeys.farid.stepIndex).toBe(1);
  expect(after.completed).toEqual(["kwame"]);
});

test("a language selection survives navigation before its translation finishes loading", async ({ page }) => {
  await begin(page);
  let release!: () => void;
  const held = new Promise<void>((resolve) => { release = resolve; });
  await page.route("**/assets/fr-*.js", async (route) => {
    await held;
    await route.continue().catch(() => { /* Navigation may cancel the original request. */ });
  });
  await page.locator(".journey-topbar select").selectOption("fr");
  expect(await page.evaluate(() => localStorage.getItem("mnli-language"))).toBe("fr");
  await page.locator(".journey-topbar").getByRole("link", { name: "Information hub", exact: true }).click();
  release();
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
});

for (const width of [320, 390]) {
  for (const [language, catalog, controls] of [["ar", arabic, arabicControls], ["fa", farsi, farsiControls]] as const) {
    test(`${language} at ${width}px keeps keyboard names, visible focus and readable RTL choices`, async ({ page }, testInfo) => {
      await page.setViewportSize({ width, height: 844 });
      await page.goto("./#character-kwame");
      await expect(page.locator(".home-nav .brand-button")).toHaveAccessibleName("Journeys to Ireland: Home");
      await page.getByRole("button", { name: "Begin five-stage journey", exact: true }).focus();
      await page.keyboard.press("Tab");
      const character = page.getByRole("radio", { name: "Kwame Mensah", exact: true });
      await expect(character).toBeFocused();
      await expect.poll(() => page.locator("#character-kwame").evaluate((node) => getComputedStyle(node).outlineStyle)).toBe("solid");
      await page.getByRole("button", { name: "Begin five-stage journey", exact: true }).click();
      await expectStageFocus(page, stepsByRoute.critical[0].title);

      await page.locator(".journey-topbar .brand-button").focus();
      await page.keyboard.press("Tab");
      const select = page.locator(".journey-topbar select");
      await expect(select).toBeFocused();
      await expect.poll(() => select.evaluate((node) => getComputedStyle(node).outlineStyle)).toBe("solid");
      await select.selectOption(language);
      await expect(page.locator("html")).toHaveAttribute("lang", language);
      await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
      await expect(select).toBeFocused();
      await expect(page.locator(".journey-topbar .brand-button")).toHaveAccessibleName(new RegExp(controls.returnHome));
      await expect(page.locator(".scene")).toHaveText(catalog["critical:Plan"].scene);
      await expect(page.locator(".choice-list")).toHaveAttribute("dir", "rtl");
      const answers = page.locator('.choice-list [role="radio"]');
      await answers.first().focus();
      await page.keyboard.press("ArrowLeft");
      await expect(answers.nth(1)).toBeFocused();
      expect(await page.locator(".choice-card").first().evaluate((node) => getComputedStyle(node).gridTemplateColumns.split(" ").length)).toBe(2);
      expect(await page.locator(".choice-text").evaluateAll((nodes) => Math.min(...nodes.map((node) => node.getBoundingClientRect().width)))).toBeGreaterThan(100);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
      await page.screenshot({ path: testInfo.outputPath(`${language}-${width}.png`), fullPage: true });

      await radio(page, 0, "verify").click();
      await nextAction(page).click();
      await expect(page.locator(".feedback-status")).toContainText(catalog["critical:Plan"].choices.verify.feedback);
      await nextAction(page).click();
      await expectStageFocus(page, catalog["critical:Prepare"].title);
      expect(await page.locator(".decision-actions .quiet-button svg").evaluate((node) => getComputedStyle(node).transform)).toBe("matrix(-1, 0, 0, 1, 0, 0)");
      await page.locator(".journey-tools button").click();
      await expect(page.locator(".character-grid")).toHaveAttribute("dir", "rtl");
    });
  }
}

for (const readable of [false, true]) {
test(`${readable ? "Full" : "Blocked"} browser storage gives an honest notice and keeps in-memory journeys usable`, async ({ page }) => {
  await page.addInitScript((canRead) => {
    if (!canRead) Storage.prototype.getItem = () => { throw new DOMException("Storage blocked", "SecurityError"); };
    Storage.prototype.setItem = () => { throw new DOMException("Storage unavailable", canRead ? "QuotaExceededError" : "SecurityError"); };
  }, readable);
  await begin(page);
  await expect(page.locator(".storage-notice")).toContainText("Progress cannot be saved in this browser");
  await radio(page, 0, "verify").click();
  await nextAction(page).click();
  await nextAction(page).click();
  await expectStageFocus(page, stepsByRoute.critical[1].title);
  await page.getByRole("button", { name: "Change character", exact: true }).click();
  await page.getByRole("link", { name: "Walk with Farid", exact: true }).click();
  await page.getByRole("button", { name: "Change character", exact: true }).click();
  await page.getByRole("link", { name: "Walk with Kwame", exact: true }).click();
  await expectStageFocus(page, stepsByRoute.critical[1].title);
});
}
