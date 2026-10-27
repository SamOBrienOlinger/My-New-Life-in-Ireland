import { expect, test, type Page } from "@playwright/test";
import { characters, stepsByRoute } from "../../app/journey-data";
import { createSavedJourney, serialiseSavedJourneys } from "../../app/journey-progress";

// Include both sides of the navigation/column breakpoints, large desktop screens,
// and landscape heights where a sticky rail or an open menu can block content.
const viewports = [
  { width: 320, height: 640 },
  { width: 360, height: 800 },
  { width: 390, height: 844 },
  { width: 760, height: 800 },
  { width: 761, height: 800 },
  { width: 768, height: 1024 },
  { width: 820, height: 1180 },
  { width: 900, height: 800 },
  { width: 901, height: 800 },
  { width: 1024, height: 768 },
  { width: 1025, height: 768 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
  { width: 2560, height: 1440 },
  { width: 667, height: 320 },
  { width: 1024, height: 480 },
];

const publicPages = [
  {
    name: "home", path: "./", ready: "#home-title",
    content: ".home-nav, .nav-links, .brand-button, #home-title, .hero-copy, .hero-actions, .route-filter, .route-filter-grid, .character-gallery, .character-card, .character-card h3, .start-bar, .hub-topic-grid, .guidance-section, .site-footer",
    controls: ".mobile-menu-button, .route-filter, .character-view-tools button, .card-action, .start-bar .primary-button",
  },
  {
    name: "about", path: "./about/", ready: ".about-hero h1",
    content: ".about-topbar, .nav-links, .brand-button, .about-hero h1, .about-hero-inner, .about-content, .about-card, .about-learning-nav, .about-learning-panel, .learning-flow-node, .learning-stages, .learning-stages li, .learning-loop-steps, .learning-loop-steps li, .learning-explore-branches a, .learning-methods article, .learning-outcomes li, .learning-research",
    controls: ".mobile-menu-button, .about-learning-nav a, .learning-explore-branches a, .learning-research > summary",
  },
  {
    name: "resources", path: "./resources/", ready: ".resources-hero h1",
    content: ".home-nav, .nav-links, .brand-button, .resources-hero h1, .resources-hero, .moving-guide-intro, .moving-guide-actions, .resource-controls, .topic-tabs, .resource-grid, .resource-card, .resource-card h3, .source-details, .first-week-checklist, .site-footer",
    controls: ".mobile-menu-button, .moving-guide-actions a, .resource-search input, .topic-tabs button",
  },
  {
    name: "search", path: "./search/", ready: ".search-hero h1",
    content: ".site-search-nav, .site-search-nav .brand-button, .search-hero, .search-hero h1, .search-intro, .site-search-form, .search-scope, .search-body, .search-section-title, .search-suggestion-list, .search-suggestion-list button, .search-sections-grid, .search-section-summary",
    controls: ".mobile-menu-button, .site-search-form input, .site-search-form button, .search-suggestion-list button",
  },
] as const;

const decisionContent = ".journey-topbar, .journey-tools, .story-character, .story-context, .story-person-heading, .chapter-navigation, .chapter-banner, .decision-panel, #decision-title, .scene, .learning-tools, .reading-audio, .reading-audio__controls, .reading-audio__settings, .learning-mode, .story-guidance, .story-source, .law-card, .choice-card, .choice-text, .feedback-card, .journey-insight, .choice-comparison, .choice-comparison-grid article, .reading-glossary, .reading-glossary__term, .reading-glossary__definition, .decision-actions, .story-save-status";
const decisionControls = ".journey-tools button, .chapter-trail button, .reading-audio__button, .reading-audio__options > summary, .learning-mode button, .story-guidance > summary, .story-source > summary, .choice-card, .choice-comparison > summary, .choice-comparison select, .reading-glossary > summary, .reading-glossary__term > summary, .decision-actions button";
const completionContent = ".completion-card, .completion-actions, .journal-entry, .journal-entry-header, .journal-topic-strip, .journal-decisions, .journal-note, .journal-note-actions, .journal-entry-actions, .journey-comparison, .comparison-picker, .comparison-person, .comparison-reveal-actions, .comparison-explanation, .comparison-explanation-grid, .decision-recap, .recap-answer-actions, .learning-resource-card, .source-details";
const completionControls = ".completion-actions button, .journal-decisions > summary, .journal-note-actions button, .journal-entry-actions button, .comparison-picker select, .comparison-person button, .comparison-reveal-actions button, .decision-recap > summary, .recap-answer-actions button";

async function settleLayout(page: Page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
  });
}

/** Check real component overflow as well as document width: body overflow-x:
 * hidden alone must not make a clipped card, translated label, or button pass. */
async function expectReadableLayout(page: Page, selectors: string, description: string) {
  await settleLayout(page);
  const result = await page.evaluate((selector) => {
    const width = document.documentElement.clientWidth;
    const failures: string[] = [];
    for (const element of document.querySelectorAll<HTMLElement>(selector)) {
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      if (!rect.width || !rect.height || style.visibility === "hidden" || style.display === "none") continue;
      const name = `${element.tagName.toLowerCase()}${element.id ? `#${element.id}` : `.${String(element.className).trim().replace(/\s+/g, ".")}`}`;
      if (rect.left < -2 || rect.right > width + 2) {
        failures.push(`${name} outside viewport: left=${Math.round(rect.left)}, right=${Math.round(rect.right)}, viewport=${width}`);
      }
      // These are intentionally horizontally scrollable; their viewport bounds
      // are still checked, and tests below exercise the offscreen controls.
      const scrollable = element.matches(".character-carousel-viewport, .topic-tabs");
      // The learning sequence draws decorative connectors into the space between
      // its cards. Check card text separately so those arrows are not mistaken
      // for clipped reading content; the containing sequence still must fit.
      const hasConnector = element.matches(".learning-stages li, .learning-loop-steps li");
      if (hasConnector) {
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
        let node = walker.nextNode();
        while (node) {
          if (node.textContent?.trim()) {
            const range = document.createRange();
            range.selectNodeContents(node);
            for (const textRect of range.getClientRects()) {
              if (textRect.left < rect.left - 2 || textRect.right > rect.right + 2) failures.push(`${name} text exceeds its card: ${node.textContent.trim().slice(0, 50)}`);
            }
          }
          node = walker.nextNode();
        }
      }
      if (!scrollable && !hasConnector && element.clientWidth && element.scrollWidth > element.clientWidth + 2) {
        failures.push(`${name} clips horizontal content: ${element.scrollWidth} > ${element.clientWidth}`);
      }
    }
    return { documentWidth: document.documentElement.scrollWidth, viewport: width, height: window.innerHeight, failures };
  }, selectors);
  const label = `${description} at ${result.viewport}×${result.height}`;
  expect.soft(result.documentWidth, `${label}: document width`).toBeLessThanOrEqual(result.viewport + 1);
  expect.soft(result.failures, `${label}: readable component bounds`).toEqual([]);
}

async function expectTouchTargets(page: Page, selectors: string, description: string) {
  const failures = await page.locator(selectors).evaluateAll((elements) => elements.flatMap((element) => {
    const rect = element.getBoundingClientRect();
    const style = getComputedStyle(element);
    if (!rect.width || !rect.height || style.visibility === "hidden" || style.display === "none") return [];
    return rect.width < 43 || rect.height < 43
      ? [`${element.tagName.toLowerCase()}.${String(element.className).trim().replace(/\s+/g, ".")} (${(element.textContent || element.getAttribute("aria-label") || "").trim().slice(0, 70)}): ${Math.round(rect.width)}×${Math.round(rect.height)}`]
      : [];
  }));
  const viewport = page.viewportSize()!;
  expect.soft(failures, `${description} at ${viewport.width}×${viewport.height}: primary controls offer at least 44px targets (1px rounding tolerance)`).toEqual([]);
}

async function preparePublicPage(page: Page, item: typeof publicPages[number]) {
  await page.goto(item.path);
  await expect(page.locator(item.ready)).toBeVisible();
  if (item.name === "home") {
    // The carousel deliberately scrolls horizontally; check its separate behavior
    // below, and check every person's complete card here using the grid view.
    await page.locator(".character-view-tools button").click();
    await expect(page.locator(".character-gallery .character-card")).toHaveCount(characters.length);
  }
  if (item.name === "about") await page.locator(".learning-research > summary").click();
}

async function seedJourney(page: Page, { complete = false, language = "en" } = {}) {
  const character = characters.find((person) => person.id === "kwame")!;
  const journey = createSavedJourney(character, 1792886400000);
  const steps = stepsByRoute[character.route];
  journey.stepIndex = complete ? steps.length - 1 : 0;
  steps.slice(0, complete ? steps.length : 1).forEach((step, index) => {
    journey.answers[index] = step.choices.find((choice) => choice.correct)!.id;
    journey.checkedSteps.push(index);
  });
  await page.addInitScript(({ progress, locale }) => {
    localStorage.setItem("mnli-journey-progress", progress);
    localStorage.setItem("mnli-language", locale);
  }, { progress: serialiseSavedJourneys({ kwame: journey }), locale: language });
  // A query change forces a document navigation even when the previous check
  // ended on the home page; a hash-only change would skip the storage fixture.
  await page.goto(`./?responsive-fixture=${complete ? "complete" : "decision"}-${language}#character-kwame`);
  await expect(page.locator("html")).toHaveAttribute("lang", language);
  await page.locator(".start-bar .primary-button").click();
  await expect(page.locator("#decision-title")).toBeFocused();
  if (complete) {
    await page.locator(".decision-actions .primary-button").click();
    await expect(page.locator("#completion-title")).toBeVisible();
    await expect(page.locator(".journal-entry")).toBeVisible();
  }
}

async function openDecisionTools(page: Page) {
  for (const selector of [".story-context", ".reading-audio__options", ".story-guidance", ".story-source", ".choice-comparison", ".reading-glossary"]) {
    const details = page.locator(selector);
    if (await details.isVisible() && !(await details.evaluate((element) => (element as HTMLDetailsElement).open))) {
      await details.locator(":scope > summary").click();
    }
  }
  const glossary = page.locator(".reading-glossary__term").first();
  if (!(await glossary.evaluate((element) => (element as HTMLDetailsElement).open))) await glossary.locator(":scope > summary").click();
  const alternatives = page.locator(".choice-comparison select");
  const option = await alternatives.locator("option").evaluateAll((options) => (options as HTMLOptionElement[]).find((item) => item.value)?.value);
  expect(option).toBeTruthy();
  await alternatives.selectOption(option!);
  await expect(page.locator(".choice-comparison-grid article")).toHaveCount(2);
}

async function openCompletionDetails(page: Page) {
  await page.locator(".journal-decisions > summary").click();
  await page.locator(".comparison-reveal-actions button").click();
  for (const summary of await page.locator(".decision-recap > summary").all()) {
    if (!(await summary.evaluate((element) => (element.parentElement as HTMLDetailsElement).open))) await summary.click();
  }
}

for (const item of publicPages) {
  test(`${item.name} reflows across phone, tablet, desktop, ultrawide, and landscape screens`, async ({ page }, testInfo) => {
    await preparePublicPage(page, item);
    for (const viewport of viewports) await test.step(`${viewport.width}×${viewport.height}`, async () => {
      await page.setViewportSize(viewport);
      await expectReadableLayout(page, item.content, item.name);
      await expectTouchTargets(page, item.controls, item.name);
      if (item.name === "resources") {
        // Scrolling topics is an intentional narrow-screen interaction. Both
        // ends must be reachable without introducing document-level scrolling.
        await page.locator(".topic-tabs button").last().click({ trial: true });
        await page.locator(".topic-tabs button").first().click({ trial: true });
      }
      if (item.name === "home" && viewport.width === 390) {
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.screenshot({ path: testInfo.outputPath("home-390.png") });
      }
    });
  });
}

test("an expanded decision preserves answers and exposes its controls across screen changes", async ({ page }, testInfo) => {
  await page.setViewportSize(viewports[0]);
  await seedJourney(page);
  await openDecisionTools(page);
  const answer = stepsByRoute.critical[0].choices.find((choice) => choice.correct)!;
  const original = await page.evaluate(() => JSON.parse(localStorage.getItem("mnli-journey-progress")!).journeys.kwame);
  for (const viewport of viewports) await test.step(`${viewport.width}×${viewport.height}`, async () => {
    await page.setViewportSize(viewport);
    await expectReadableLayout(page, decisionContent, "expanded decision");
    await expectTouchTargets(page, decisionControls, "expanded decision");
    await expect(page.locator(`[id="0-${answer.id}"]`)).toHaveAttribute("aria-checked", "true");
    await page.locator(".choice-list [role=radio]").last().click({ trial: true });
    await page.locator(".decision-actions .primary-button").click({ trial: true });
    if (viewport.width === 820) {
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: testInfo.outputPath("journey-820.png") });
    }
  });
  const resized = await page.evaluate(() => JSON.parse(localStorage.getItem("mnli-journey-progress")!).journeys.kwame);
  expect(resized.answers).toEqual(original.answers);
  expect(resized.checkedSteps).toEqual(original.checkedSteps);
  expect(resized.choiceOrder).toEqual(original.choiceOrder);
  await expect(page.locator(".choice-comparison-grid article")).toHaveCount(2);
});

test("completion, journal drafts, and revealed comparisons reflow without losing work", async ({ page }) => {
  await seedJourney(page, { complete: true });
  await openCompletionDetails(page);
  const note = "I will compare the official guidance and discuss the next practical step with my class. ".repeat(8);
  await page.locator(".journal-note textarea").fill(note);
  for (const viewport of viewports) await test.step(`${viewport.width}×${viewport.height}`, async () => {
    await page.setViewportSize(viewport);
    await expectReadableLayout(page, completionContent, "completion and journal");
    await expectTouchTargets(page, completionControls, "completion and journal");
    await expect(page.locator(".journal-note textarea")).toHaveValue(note);
    await page.locator(".journal-note-actions button[type=submit]").click({ trial: true });
    await page.locator(".comparison-reveal-actions button").click({ trial: true });
  });
});

for (const language of ["ar", "fa"]) {
  test(`${language} layouts remain readable at 320px and with enlarged text`, async ({ page }) => {
    await page.addInitScript((locale) => localStorage.setItem("mnli-language", locale), language);
    for (const item of publicPages) await test.step(`${item.name} in ${language}`, async () => {
      await page.setViewportSize({ width: 320, height: 844 });
      await preparePublicPage(page, item);
      await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
      await expectReadableLayout(page, item.content, `${language} ${item.name}`);
      await page.setViewportSize({ width: 640, height: 900 });
      await page.addStyleTag({ content: "html { font-size: 200% !important; }" });
      await expectReadableLayout(page, item.content, `${language} ${item.name}, 200% text`);
    });
    await page.setViewportSize({ width: 320, height: 844 });
    await seedJourney(page, { language });
    await openDecisionTools(page);
    await expectReadableLayout(page, decisionContent, `${language} decision`);
    await page.setViewportSize({ width: 640, height: 900 });
    await page.addStyleTag({ content: "html { font-size: 200% !important; }" });
    await expectReadableLayout(page, decisionContent, `${language} decision, 200% text`);
    await page.locator(".decision-actions .primary-button").click({ trial: true });
  });
}

test("enlarged Dutch text fits public pages, a completed journal, and comparison controls", async ({ page }) => {
  await page.setViewportSize({ width: 640, height: 900 });
  await page.addInitScript(() => localStorage.setItem("mnli-language", "nl"));
  for (const item of publicPages) await test.step(`${item.name}, 200% text`, async () => {
    await preparePublicPage(page, item);
    await page.addStyleTag({ content: "html { font-size: 200% !important; }" });
    await expectReadableLayout(page, item.content, `Dutch ${item.name}, 200% text`);
  });
  await seedJourney(page, { complete: true, language: "nl" });
  await openCompletionDetails(page);
  await page.addStyleTag({ content: "html { font-size: 200% !important; }" });
  await expectReadableLayout(page, completionContent, "Dutch completion, 200% text");
  await page.locator(".journal-note textarea").fill("Ik vergelijk de volgende stap en de officiële informatie.");
  await page.locator(".journal-note-actions button[type=submit]").click();
  await page.setViewportSize({ width: 320, height: 844 });
  await page.addStyleTag({ content: "html { font-size: 100% !important; }" });
  await expectReadableLayout(page, completionContent, "Dutch completion, 320px");
});

test("a 320px screen supports 200% text on the home page and expanded decision", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 844 });
  await preparePublicPage(page, publicPages[0]);
  await page.addStyleTag({ content: "html { font-size: 200% !important; }" });
  await expectReadableLayout(page, publicPages[0].content, "home, 200% text");
  await seedJourney(page);
  await openDecisionTools(page);
  await page.addStyleTag({ content: "html { font-size: 200% !important; }" });
  await expectReadableLayout(page, decisionContent, "expanded decision, 200% text");
  await expectTouchTargets(page, decisionControls, "expanded decision, 200% text");
  await page.locator(".choice-list [role=radio]").last().click({ trial: true });
  await page.locator(".decision-actions .primary-button").click({ trial: true });
});

test("a short landscape menu scrolls to its language control and closes safely on desktop resize", async ({ page }) => {
  await page.setViewportSize({ width: 667, height: 320 });
  await page.goto("./");
  const menu = page.locator(".mobile-menu-button");
  const panel = page.locator(".mobile-navigation-panel");
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await expect(panel).toBeVisible();
  const bounds = await panel.evaluate((element) => {
    const rect = element.getBoundingClientRect();
    return { top: rect.top, bottom: rect.bottom, clientHeight: element.clientHeight, scrollHeight: element.scrollHeight, height: window.innerHeight };
  });
  expect.soft(bounds.top).toBeGreaterThanOrEqual(0);
  expect.soft(bounds.bottom, "menu stays inside the short viewport").toBeLessThanOrEqual(bounds.height);
  expect.soft(bounds.scrollHeight, "all menu items remain accessible through scrolling").toBeGreaterThan(bounds.clientHeight);
  const language = panel.locator("select");
  await language.scrollIntoViewIfNeeded();
  await language.click({ trial: true });
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await expect(panel).not.toBeVisible();
  await menu.click();
  await panel.locator("a").first().focus();
  await page.setViewportSize({ width: 1440, height: 900 });
  await expect(panel).not.toBeVisible();
  await expect(page.locator(".home-nav .brand-button")).toBeFocused();
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(panel).not.toBeVisible();
  // Even a closed trigger must not strand keyboard focus when it disappears.
  await menu.focus();
  await page.setViewportSize({ width: 1440, height: 900 });
  await expect(page.locator(".home-nav .brand-button")).toBeFocused();
});

test("carousel browsing survives orientation, direction, and grid changes without changing the selected person", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("./#character-kwame");
  await page.getByRole("button", { name: "Next characters", exact: true }).click();
  const expectMateoVisible = async () => {
    await expect.poll(() => page.locator(".character-carousel-viewport").evaluate((element) => {
      const viewport = element.getBoundingClientRect();
      const card = element.querySelector("#character-mateo")!.getBoundingClientRect();
      return card.left >= viewport.left - 2 && card.right <= viewport.right + 2;
    })).toBe(true);
    await expect(page.locator("#kwame")).toHaveAttribute("aria-checked", "true");
  };
  await expectMateoVisible();
  for (const viewport of [{ width: 820, height: 1180 }, { width: 390, height: 844 }, { width: 667, height: 320 }]) {
    await page.setViewportSize(viewport);
    await expectMateoVisible();
    await expectReadableLayout(page, ".character-carousel-viewport, .character-carousel-controls, .start-bar", "carousel orientation");
  }
  await page.getByRole("button", { name: "View all people", exact: true }).click();
  await expect(page.locator(".character-gallery")).toBeVisible();
  await page.getByRole("button", { name: "Use the carousel", exact: true }).click();
  await expectMateoVisible();
  for (const language of ["ar", "en"]) {
    const menu = page.locator(".mobile-menu-button");
    const panel = page.locator(".mobile-navigation-panel");
    const languageSelect = page.locator(".mobile-language-row select");
    await menu.click();
    await expect(menu).toHaveAttribute("aria-expanded", "true");
    await expect(panel).toBeVisible();
    await languageSelect.scrollIntoViewIfNeeded();
    await expect(languageSelect).toBeVisible();
    await languageSelect.selectOption(language);
    await expect(page.locator("html")).toHaveAttribute("dir", language === "ar" ? "rtl" : "ltr");
    await page.keyboard.press("Escape");
    await expect(menu).toHaveAttribute("aria-expanded", "false");
    await expect(panel).not.toBeVisible();
    await expectMateoVisible();
  }
});

test.describe("touch interaction", () => {
  test.use({ hasTouch: true });

  test("phone taps open navigation, browse people, and check a decision after rotating", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("./#character-kwame");
    const menu = page.locator(".mobile-menu-button");
    await menu.tap();
    await expect(page.locator(".mobile-navigation-panel")).toBeVisible();
    await menu.tap();
    await expect(page.locator(".mobile-navigation-panel")).not.toBeVisible();
    await page.getByRole("button", { name: "Next characters", exact: true }).tap();
    await expect(page.locator("#kwame")).toHaveAttribute("aria-checked", "true");
    await page.getByRole("link", { name: "Walk with Mateo", exact: true }).tap();
    const character = characters.find((person) => person.id === "mateo")!;
    const steps = stepsByRoute[character.route];
    await expect(page.locator("#decision-title")).toHaveText(steps[0].title);
    await page.setViewportSize({ width: 667, height: 320 });
    const answer = steps[0].choices.find((choice) => choice.correct)!;
    await page.locator(`[id="0-${answer.id}"]`).tap();
    await page.locator(".decision-actions .primary-button").tap();
    await expect(page.locator(".feedback-status")).toBeVisible();
    await page.locator(".decision-actions .primary-button").tap();
    await expect(page.locator("#decision-title")).toHaveText(steps[1].title);
    const progress = await page.evaluate(() => JSON.parse(localStorage.getItem("mnli-journey-progress")!).journeys.mateo);
    expect(progress.answers[0]).toBe(answer.id);
    expect(progress.checkedSteps).toEqual([0]);
  });
});
