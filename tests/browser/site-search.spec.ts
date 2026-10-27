import { expect, test } from "@playwright/test";

test("home search returns site-wide results, supporting multi-word keywords and section filtering", async ({ page }) => {
  await page.goto("./");
  const form = page.locator(".home-search");
  await expect(form.getByRole("searchbox")).toBeVisible();
  await form.getByRole("searchbox").fill("employment permit");
  await form.getByRole("button", { name: /Search/i }).click();
  await expect(page).toHaveURL(/\/search\/\?q=employment\+permit/);
  await expect(page.locator(".site-search-result").first()).toBeVisible();
  await expect(page.locator(".site-search-result mark").first()).toBeVisible();
  const resources = page.getByRole("button", { name: /Information Hub\s*\d+/ });
  await resources.click();
  await expect(resources).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".site-search-result").first()).toBeVisible();
  await expect(page.locator(".site-search-result a").first()).toHaveAttribute("href", /resources\/\?q=/);
});

test("search results link directly to Fact or Fiction claims and reveal them", async ({ page }) => {
  await page.goto("./search/?q=71%25");
  await expect(page.locator(".site-search-result").first()).toBeVisible();
  await page.getByRole("button", { name: /Fact or Fiction\s*\d+/ }).click();
  const fact = page.locator(".site-search-result").first();
  await expect(fact.getByRole("link").first()).toHaveAttribute("href", "../fact-or-fiction/#check-permit-equals-fairness");
  await fact.getByRole("link").first().click();
  await expect(page).toHaveURL(/fact-or-fiction\/#check-permit-equals-fairness/);
  await expect(page.locator("#check-permit-equals-fairness")).toHaveAttribute("open");
});

test("character and decision-stage matches link to the correct person and preserve journey order", async ({ page }) => {
  await page.goto("./search/?q=Kwame");
  await expect(page.locator(".site-search-result").first()).toBeVisible();
  await page.getByRole("button", { name: /Journeys\s*\d+/ }).click();
  const matches = page.locator(".site-search-result");
  await expect(matches.first()).toBeVisible();
  await expect(matches.first().getByRole("link").first()).toHaveAttribute("href", "../#character-kwame");
  await matches.first().getByRole("link").first().click();
  await expect(page).toHaveURL(/#character-kwame/);
  await expect(page.locator("#character-kwame")).toBeVisible();
});

test("site search is accent-tolerant and has an empty-state recovery", async ({ page }) => {
  await page.goto("./search/?q=Sofia");
  await expect(page.locator(".site-search-result h3")).toContainText(["Sofía Quispe", "Sofía Quispe ·"]);
  await page.locator("#site-search-query").fill("unfindablephrase987654321");
  await expect(page.locator(".search-no-results")).toBeVisible();
  await page.locator(".search-no-results button").click();
  await expect(page.locator("#site-search-query")).toHaveValue("");
  await expect(page.locator(".search-suggestion-list")).toBeVisible();
});

test("multilingual right-to-left search is readable and navigation is available on narrow screens", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("mnli-language", "ar"));
  await page.setViewportSize({ width: 320, height: 700 });
  await page.goto("./search/?q=%D8%A7%D9%84%D8%B3%D9%83%D9%86");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  await expect(page.locator("#site-search-query")).toHaveValue("السكن");
  await expect(page.locator(".site-search-result").first()).toBeVisible();
  await page.locator(".mobile-menu-button").click();
  await expect(page.locator(".mobile-navigation-panel")).toBeVisible();
  const widths = await page.evaluate(() => ({ document: document.documentElement.scrollWidth, viewport: document.documentElement.clientWidth }));
  expect(widths.document).toBeLessThanOrEqual(widths.viewport + 1);
});

test("search handles punctuation and user input as text only", async ({ page }) => {
  await page.goto("./search/");
  await page.locator("#site-search-query").fill("<img src=x onerror=alert(1)>");
  await expect(page.locator(".search-no-results")).toBeVisible();
  expect(await page.locator("img[onerror]").count()).toBe(0);
  await expect(page.locator("#site-search-query")).toHaveValue("<img src=x onerror=alert(1)>");
});
