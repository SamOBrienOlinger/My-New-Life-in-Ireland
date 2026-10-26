import { expect, test } from "@playwright/test";

test("Fact or Fiction hub opens from the homepage and can be searched and filtered", async ({ page }) => {
  await page.goto("./");
  await page.getByRole("link", { name: "Fact or Fiction", exact: true }).first().click();
  await expect(page).toHaveURL(/\/fact-or-fiction\//);
  await expect(page.getByRole("heading", { name: "Fact or Fiction?", exact: true })).toBeVisible();
  await expect(page.locator(".fact-card")).toHaveCount(10);

  await page.getByRole("button", { name: "Work", exact: true }).click();
  await expect(page.locator(".fact-card")).toHaveCount(2);
  await page.getByRole("button", { name: "Clear filters", exact: true }).click();
  await page.getByRole("searchbox", { name: "Search the fact checks" }).fill("71%");
  await expect(page.locator(".fact-card")).toHaveCount(1);
  await expect(page.locator(".fact-card")).toContainText("employment permit");
  await page.getByRole("searchbox", { name: "Search the fact checks" }).fill("zqx-unlikely");
  await expect(page.locator(".facts-empty")).toBeVisible();
  await page.getByRole("button", { name: "Clear filters", exact: true }).last().click();
  await expect(page.locator(".fact-card")).toHaveCount(10);
});

test("evidence reveals by keyboard and offers original sources with dates", async ({ page }) => {
  await page.goto("./fact-or-fiction/");
  const card = page.locator("#check-benefit-comparison");
  await card.locator("summary").press("Enter");
  await expect(card).toHaveAttribute("open");
  await expect(card).toContainText("Needs context");
  await expect(card).toContainText("9%");
  await expect(card.getByRole("link", { name: /Open source:/ })).toHaveAttribute("href", "https://www.esri.ie/publications/social-transfers-utilisation-among-migrants-and-irish-born-in-ireland");
  await expect(card).toContainText("2026-06-10");
});

test("shared claim links reveal their answer without changing search preferences", async ({ page }) => {
  await page.goto("./fact-or-fiction/#check-reporting-racism");
  const detail = page.locator("#check-reporting-racism");
  await expect(detail).toHaveAttribute("open");
  await expect(detail).toContainText("iReport");
});

test("mobile and RTL layouts preserve readable content and translated answers", async ({ page }) => {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: width === 320 ? 640 : 900 });
    await page.goto("./fact-or-fiction/");
    const size = await page.evaluate(() => ({ doc: document.documentElement.scrollWidth, view: document.documentElement.clientWidth }));
    expect(size.doc, "unexpected horizontal scroll at " + width + "px").toBeLessThanOrEqual(size.view + 1);
  }
  await page.addInitScript(() => localStorage.setItem("mnli-language", "ar"));
  await page.setViewportSize({ width: 320, height: 700 });
  await page.goto("./fact-or-fiction/");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  await expect(page.locator(".fact-card")).toHaveCount(10);
  await page.locator("#check-standard-welfare > summary").click();
  await expect(page.locator("#check-standard-welfare .fact-answer")).toContainText("لا");
  const size = await page.evaluate(() => ({ doc: document.documentElement.scrollWidth, view: document.documentElement.clientWidth }));
  expect(size.doc).toBeLessThanOrEqual(size.view + 1);
});
