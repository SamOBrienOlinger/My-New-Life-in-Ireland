import { expect, test, type Page } from "@playwright/test";
import { stepsByRoute } from "../../app/journey-data";
import arabic from "../../app/journey-translations/ar";
import type { JourneyTranslationCatalog } from "../../app/journey-translations/types";

const nextAction = (page: Page) => page.locator(".decision-actions .primary-button");

async function expectReadableWithoutAnimation(page: Page, selector: string) {
  const states = await page.locator(selector).evaluateAll((nodes) => nodes.map((node) => {
    const style = getComputedStyle(node);
    return {
      target: node.getAttribute("data-reveal") || node.className,
      opacity: style.opacity,
      visibility: style.visibility,
      height: node.getBoundingClientRect().height,
      activeAnimations: node.getAnimations({ subtree: true }).filter((animation) =>
        animation.pending || animation.playState === "running" || animation.playState === "paused").length,
    };
  }));
  expect(states.length).toBeGreaterThan(0);
  // Inspect the current styles directly: waiting for an entrance to finish
  // would conceal an unwanted reduced-motion delay.
  for (const state of states) {
    expect(state.opacity, String(state.target)).toBe("1");
    expect(state.visibility, String(state.target)).toBe("visible");
    expect(state.height, String(state.target)).toBeGreaterThan(0);
    expect(state.activeAnimations, String(state.target)).toBe(0);
  }
}

async function expectStageFocus(page: Page, title: string) {
  const heading = page.locator("#decision-title");
  await expect(heading).toHaveText(title);
  await expect(heading).toBeFocused();
  await expect.poll(() => heading.evaluate((node) => {
    const box = node.getBoundingClientRect();
    return box.top >= 0 && box.bottom <= window.innerHeight;
  })).toBe(true);
}

test("reduced motion leaves offscreen content, stage copy and feedback immediately readable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("./");
  await expect(page.locator("#home-title")).toBeVisible();
  expect(await page.locator('[data-reveal="guidance-introduction"]').evaluate((node) =>
    node.getBoundingClientRect().top > window.innerHeight)).toBe(true);
  await expectReadableWithoutAnimation(page, "[data-reveal]");

  await page.getByRole("link", { name: "Walk with Kwame", exact: true }).click();
  await page.getByRole("button", { name: "Begin five-stage journey", exact: true }).click();
  await expectStageFocus(page, stepsByRoute.critical[0].title);
  await expectReadableWithoutAnimation(page, "[data-stage-copy]");

  await page.locator('[id="0-verify"]').click();
  await nextAction(page).click();
  await expect(page.locator(".feedback-status")).toContainText(
    stepsByRoute.critical[0].choices.find((choice) => choice.id === "verify")!.feedback,
  );
  await expect(page.locator(".journey-insight")).toHaveCount(1);
  await expectReadableWithoutAnimation(page, "[data-stage-copy], .feedback-card, .journey-insight");
  await nextAction(page).click();
  await expectStageFocus(page, stepsByRoute.critical[1].title);
  await expectReadableWithoutAnimation(page, "[data-stage-copy]");
});

test("normal motion preserves narrow RTL keyboard choices, stage focus and saved feedback", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("./#character-kwame");
  await expect(page.getByRole("radio", { name: "Kwame Mensah", exact: true })).toHaveAttribute("aria-checked", "true");
  await page.getByRole("button", { name: "Begin five-stage journey", exact: true }).press("Enter");
  await expectStageFocus(page, stepsByRoute.critical[0].title);

  const language = page.locator(".journey-topbar select");
  await language.focus();
  await language.selectOption("ar");
  await expect(page.locator("html")).toHaveAttribute("lang", "ar");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  await expect(language).toBeFocused();
  await expect(page.locator(".choice-list")).toHaveAttribute("dir", "rtl");

  const choices = page.locator('.choice-list [role="radio"]');
  await choices.first().focus();
  await page.keyboard.press("ArrowLeft");
  await expect(choices.nth(1)).toBeFocused();
  await expect(choices.nth(1)).toHaveAttribute("aria-checked", "true");
  expect(await choices.nth(1).evaluate((node) => getComputedStyle(node.closest("label")!).outlineStyle)).toBe("solid");
  // Moving to a control cancels decorative copy motion, so reading and
  // keyboard interaction do not compete with an unfinished entrance.
  await expectReadableWithoutAnimation(page, "[data-stage-copy]");
  const selectedId = (await choices.nth(1).getAttribute("id"))!.slice(2);
  const selectedFeedback = (arabic as JourneyTranslationCatalog)["critical:Plan"].choices[selectedId].feedback;

  await nextAction(page).press("Enter");
  await expect(page.locator(".feedback-status")).toContainText(selectedFeedback);
  await expect(nextAction(page)).toBeFocused();
  await page.keyboard.press("Enter");
  await expectStageFocus(page, arabic["critical:Prepare"].title);
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
  for (const selector of ['.decision-panel [data-slot="progress"]', ".decision-actions .quiet-button svg"]) {
    expect(await page.locator(selector).evaluate((node) => getComputedStyle(node).transform)).toBe("matrix(-1, 0, 0, 1, 0, 0)");
  }

  await page.locator(".decision-actions .quiet-button").press("Enter");
  await expectStageFocus(page, arabic["critical:Plan"].title);
  await expect(page.locator(`[id="0-${selectedId}"]`)).toHaveAttribute("aria-checked", "true");
  await expect(page.locator(".feedback-status")).toContainText(selectedFeedback);
});

test("content remains readable when scroll observation is unavailable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.addInitScript(() => { Reflect.deleteProperty(window, "IntersectionObserver"); });
  await page.goto("./");
  await expect(page.locator("#home-title")).toBeVisible();
  expect(await page.evaluate(() => "IntersectionObserver" in window)).toBe(false);
  await expectReadableWithoutAnimation(page, "[data-reveal]");
  await page.getByRole("link", { name: "Walk with Kwame", exact: true }).click();
  await page.getByRole("button", { name: "Begin five-stage journey", exact: true }).press("Enter");
  await expectStageFocus(page, stepsByRoute.critical[0].title);
});
