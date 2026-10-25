import { expect, test, type Page } from "@playwright/test";
import { stepsByRoute } from "../../app/journey-data";

const action = (page: Page) => page.locator(".decision-actions .primary-button");
const saved = (page: Page) => page.evaluate(() => JSON.parse(localStorage.getItem("mnli-journey-progress")!).journeys.kwame);

test("view all people is keyboard accessible and a card starts its journey directly", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("./");
  await page.getByRole("button", { name: "View all people", exact: true }).press("Enter");
  await expect(page.locator(".character-gallery .character-card")).toHaveCount(12);
  await expect(page.locator(".character-carousel-controls")).toHaveCount(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
  await page.getByRole("link", { name: "Walk with Leila", exact: true }).press("Enter");
  await expect(page.locator("#decision-title")).toHaveText(stepsByRoute["family-safety"][0].title);
  await expect(page.locator("#decision-title")).toBeFocused();
  await page.getByRole("button", { name: "Change character", exact: true }).click();
  await page.getByRole("button", { name: "Use the carousel", exact: true }).click();
  await expect(page.getByRole("button", { name: "Next characters", exact: true })).toBeEnabled();
});

test("practice mode persists and comparing an alternative never changes the checked answer", async ({ page }) => {
  await page.goto("./");
  await page.getByRole("link", { name: "Walk with Kwame", exact: true }).click();
  await page.getByRole("button", { name: "Try first", exact: true }).click();
  await expect(page.locator(".story-guidance")).not.toHaveAttribute("open");
  await page.locator('[id="0-contract"]').click();
  await action(page).click();
  const before = await saved(page);
  await page.locator(".choice-comparison > summary").press("Enter");
  await page.locator(".choice-comparison select").selectOption("verify");
  await expect(page.locator(".choice-comparison-grid article")).toHaveCount(2);
  await expect(page.locator(".choice-comparison-grid article").last()).toContainText(stepsByRoute.critical[0].choices.find(choice => choice.id === "verify")!.feedback);
  expect(await saved(page)).toEqual(before);
  await expect(page.locator('[id="0-contract"]')).toHaveAttribute("aria-checked", "true");
  await page.reload();
  await page.locator(".resume-banner button").click();
  await expect(page.getByRole("button", { name: "Try first", exact: true })).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".story-guidance")).not.toHaveAttribute("open");
  await expect(page.locator(".feedback-status")).toContainText(stepsByRoute.critical[0].choices.find(choice => choice.id === "contract")!.feedback);
  await page.locator(".story-guidance > summary").press("Enter");
  await expect(page.locator(".story-guidance .law-card")).toBeVisible();
});

test("mobile context guards future chapters and the final action resolves an unfinished review", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 844 });
  await page.goto("./");
  await page.getByRole("link", { name: "Walk with Kwame", exact: true }).click();
  const context = page.locator(".story-context");
  await context.locator("summary").click();
  await expect(context).toContainText("The start date is close");
  await expect(context.getByRole("button", { name: "Still to explore: Travel", exact: true })).toBeDisabled();
  for (const [index, step] of stepsByRoute.critical.entries()) {
    await page.locator(`[id="${index}-${step.choices.find(choice => choice.correct)!.id}"]`).click();
    await action(page).click();
    if (index < 4) await action(page).click();
  }
  await context.getByRole("button", { name: "Review: Plan", exact: true }).click();
  await page.locator('[id="0-contract"]').click();
  await context.getByRole("button", { name: "Review: Build a life", exact: true }).click();
  await expect(action(page)).toHaveText("Review: Plan");
  await action(page).click();
  await expect(page.locator("#decision-title")).toHaveText(stepsByRoute.critical[0].title);
  await expect(page.locator("#decision-title")).toBeFocused();
  await expect(action(page)).toHaveText("Check decision");
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
  await action(page).click();
  await context.getByRole("button", { name: "Review: Build a life", exact: true }).click();
  await action(page).click();
  await expect(page.locator("#completion-title")).toBeFocused();
});
