import { expect, test, type Page, type TestInfo } from "@playwright/test";

const guideSelector = "#understanding-immigration";

async function expectNoHorizontalOverflow(page: Page) {
  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    document: document.documentElement.scrollWidth,
    body: document.body.scrollWidth,
  }));
  expect(dimensions.document).toBeLessThanOrEqual(dimensions.viewport + 1);
  expect(dimensions.body).toBeLessThanOrEqual(dimensions.viewport + 1);
  const overflowing = await page.locator(`${guideSelector} h2, ${guideSelector} h3, ${guideSelector} p, ${guideSelector} summary, ${guideSelector} li`).evaluateAll((elements) =>
    elements.filter((element) => element.getClientRects().length > 0 && element.scrollWidth > element.clientWidth + 1).map((element) => element.textContent?.slice(0, 100)),
  );
  expect(overflowing).toEqual([]);
}

async function captureGuide(page: Page, testInfo: TestInfo, label: string) {
  const path = testInfo.outputPath(`${label}.png`);
  await page.locator(guideSelector).screenshot({ path, animations: "disabled" });
  await testInfo.attach(label, { path, contentType: "image/png" });
}

test("all ten questions render with both perspectives and original source links", async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const response = await page.goto("resources/");
  expect(response?.ok()).toBe(true);
  const guide = page.locator(guideSelector);
  await expect(guide.getByRole("heading", { name: "10 questions worth clarifying" })).toBeVisible();
  await expect(guide.locator("details")).toHaveCount(10);
  await expect(guide.getByRole("status")).toContainText("Showing 10 of 10");
  await expect(page.locator(".resource-card")).toHaveCount(40);
  await expect(guide).toHaveCSS("border-top-style", "solid");
  for (const question of await guide.locator("details").all()) {
    await question.locator("summary").click();
    await expect(question.getByRole("heading", { name: "For people who have moved to Ireland", exact: true })).toBeVisible();
    await expect(question.getByRole("heading", { name: "For people engaging with or supporting them", exact: true })).toBeVisible();
    await expect(question.getByText("Practical next step:", { exact: true })).toBeVisible();
    const links = question.locator(".immigration-question-sources a");
    expect(await links.count()).toBeGreaterThan(0);
    for (const link of await links.all()) {
      await expect(link).toHaveAttribute("href", /^https:\/\//);
      await expect(link).toHaveText(/\S/);
    }
    await question.locator("summary").click();
  }
  await captureGuide(page, testInfo, "desktop-guide");
  expect(errors).toEqual([]);
});

test("native accordions support keyboard activation and visible focus", async ({ page }) => {
  await page.goto("resources/");
  const question = page.locator(`${guideSelector} details`).first();
  const summary = question.locator("summary");
  await summary.focus();
  await expect(summary).toBeFocused();
  await summary.press("Enter");
  await expect(question).toHaveAttribute("open", "");
  await expect(question.locator(".immigration-question-body")).toBeVisible();
  const outlineWidth = await summary.evaluate((element) => Number.parseFloat(getComputedStyle(element).outlineWidth));
  expect(outlineWidth).toBeGreaterThanOrEqual(2);
  await summary.press("Space");
  await expect(question).not.toHaveAttribute("open", "");
  await expect(summary).toBeFocused();
});

test("search and topic filters combine and empty results can be cleared", async ({ page }) => {
  await page.goto("resources/");
  const guide = page.locator(guideSelector);
  const search = page.getByRole("searchbox", { name: "Search resources" });
  await search.fill("  NARIC  ");
  await expect(guide.locator("details")).toHaveCount(1);
  await expect(guide.locator("#question-education-and-qualifications")).toBeVisible();
  await page.locator(".topic-tabs").getByRole("button", { name: "Work", exact: true }).click();
  await expect(guide.locator("details")).toHaveCount(1);
  await search.fill("habitual residence");
  await expect(guide.locator("details")).toHaveCount(0);
  await expect(guide.getByText(/No learning questions match these filters/)).toBeVisible();
  await page.getByRole("button", { name: "Clear filters", exact: true }).click();
  await expect(search).toHaveValue("");
  await expect(guide.locator("details")).toHaveCount(10);
  await expect(page.locator(".resource-card")).toHaveCount(40);
});

test("resource URL parameters initialise the guide without changing the source count", async ({ page }) => {
  await page.goto("resources/?topic=study&q=NARIC");
  await expect(page.getByRole("searchbox", { name: "Search resources" })).toHaveValue("NARIC");
  await expect(page.locator(".topic-tabs").getByRole("button", { name: "Study", exact: true })).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(`${guideSelector} details`)).toHaveCount(1);
  await expect(page.locator("#question-education-and-qualifications")).toBeVisible();
  await expect(page.locator(".result-count")).toContainText("Showing 0 resources");
  await expect(page.locator(`${guideSelector} [role=status]`)).toContainText("Showing 1 of 10");
});

test("expanded guide reflows at phone, tablet, desktop and landscape sizes", async ({ page }, testInfo) => {
  await page.goto("resources/");
  await page.locator(`${guideSelector} summary`).first().click();
  for (const viewport of [
    { width: 320, height: 740 }, { width: 390, height: 844 },
    { width: 768, height: 1024 }, { width: 1440, height: 900 },
    { width: 844, height: 390 },
  ]) {
    await page.setViewportSize(viewport);
    await expect(page.locator(`${guideSelector} details[open]`)).toHaveCount(1);
    await expectNoHorizontalOverflow(page);
    const box = await page.locator(`${guideSelector} summary`).first().boundingBox();
    expect(box?.height).toBeGreaterThanOrEqual(44);
    if ([320, 390, 1440].includes(viewport.width)) await captureGuide(page, testInfo, `expanded-${viewport.width}`);
  }
});

test("Arabic hub retains an explicit English LTR guide on a narrow screen", async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("resources/");
  await page.locator(".home-nav select").first().selectOption("ar");
  await expect(page.locator("main.resources-page")).toHaveAttribute("lang", "ar");
  await expect(page.locator("main.resources-page")).toHaveAttribute("dir", "rtl");
  const guide = page.locator(guideSelector);
  await expect(guide).toHaveAttribute("lang", "en");
  await expect(guide).toHaveAttribute("dir", "ltr");
  await expect(guide.getByRole("note")).toContainText("currently available in English");
  await page.setViewportSize({ width: 320, height: 740 });
  await guide.locator("summary").first().click();
  await expectNoHorizontalOverflow(page);
  await captureGuide(page, testInfo, "arabic-hub-english-guide-320");
  await page.reload();
  await expect(page.locator("main.resources-page")).toHaveAttribute("lang", "ar");
  await expect(guide.locator("details")).toHaveCount(10);
});

test("touch users can open and close questions without navigation or missing text", async ({ browser, baseURL }, testInfo) => {
  // Touch emulation is supported in all three engines; this is not a physical-device test.
  const context = await browser.newContext({ baseURL, viewport: { width: 390, height: 844 }, hasTouch: true, reducedMotion: "reduce" });
  const page = await context.newPage();
  try {
    await page.goto("resources/");
    const question = page.locator("#question-healthcare-and-medical-cards");
    await question.locator("summary").tap();
    await expect(question).toHaveAttribute("open", "");
    await expect(question.getByRole("heading", { name: "Check the original sources" })).toBeVisible();
    await expectNoHorizontalOverflow(page);
    await captureGuide(page, testInfo, "touch-expanded-guide-390");
    await question.locator("summary").tap();
    await expect(question).not.toHaveAttribute("open", "");
    await expect(page).toHaveURL(/\/resources\/$/);
  } finally {
    await context.close();
  }
});
