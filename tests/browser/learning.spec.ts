import { expect, test, type Page } from "@playwright/test";
import { characters, stepsByRoute } from "../../app/journey-data";
import { practicalResourceUrls } from "../../app/journey-learning";
import en from "../../app/learning-copy/en";
import french from "../../app/learning-copy/fr";
import arabic from "../../app/learning-copy/ar";
import farsi from "../../app/learning-copy/fa";
import arabicJourney from "../../app/journey-translations/ar";
import farsiJourney from "../../app/journey-translations/fa";
import type { JourneyTranslationCatalog } from "../../app/journey-translations/types";

const heading = (page: Page) => page.locator("#decision-title");
const nextAction = (page: Page) => page.locator(".decision-actions .primary-button");
const radio = (page: Page, stage: number, id: string) => page.locator(`[id="${stage}-${id}"]`);
const choiceOrder = (page: Page) => page.locator('.choice-list [role="radio"]').evaluateAll((nodes) =>
  nodes.map((node) => node.id.slice(node.id.indexOf("-") + 1)));

async function expectStageFocus(page: Page, title: string) {
  await expect(heading(page)).toHaveText(title);
  await expect(heading(page)).toBeFocused();
  await expect.poll(() => heading(page).evaluate((node) => {
    const box = node.getBoundingClientRect();
    return box.top >= 0 && box.bottom <= window.innerHeight;
  })).toBe(true);
}

async function finishJourney(
  page: Page,
  characterId = "kwame",
  reviewStages = [1, 3],
  afterCheck?: (index: number) => Promise<void>,
) {
  const character = characters.find((item) => item.id === characterId)!;
  const steps = stepsByRoute[character.route];
  const answers: Record<number, string> = {};
  const order: Record<number, string[]> = {};
  await page.goto(`./#character-${character.id}`);
  await expect(page.getByRole("radio", { name: character.name, exact: true })).toHaveAttribute("aria-checked", "true");
  await page.getByRole("button", { name: "Begin five-stage journey", exact: true }).click();
  for (const [index, step] of steps.entries()) {
    await expectStageFocus(page, step.title);
    order[index] = await choiceOrder(page);
    answers[index] = step.choices.find((choice) => reviewStages.includes(index) ? !choice.correct : choice.correct)!.id;
    await expect(page.locator(".journey-insight")).toHaveCount(0);
    await radio(page, index, answers[index]).click();
    await nextAction(page).click();
    await expect(page.locator(".journey-insight").getByRole("heading", { name: en.misunderstanding, exact: true })).toBeVisible();
    if (afterCheck) await afterCheck(index);
    await nextAction(page).click();
  }
  await expect(page.locator("#completion-title")).toHaveText(en.recapTitle.replace("{name}", character.name));
  await expect(page.locator("#completion-title")).toBeFocused();
  return { steps, answers, order };
}

test("a mixed journey explains all five selected answers and identifies what needs another look", async ({ page }) => {
  const { steps, answers } = await finishJourney(page);
  const decisions = page.locator(".decision-recap");
  await expect(decisions).toHaveCount(5);
  await expect(page.locator(".decision-recap.needs-review")).toHaveCount(2);
  await expect(page.locator(".readiness-meter")).toHaveAttribute("aria-label", /^3 of 5\b/);
  await expect(page.locator(".recap-decisions")).toContainText(en.revisitCount.replace("{count}", "2"));

  for (const [index, step] of steps.entries()) {
    const decision = decisions.nth(index);
    const chosen = step.choices.find((choice) => choice.id === answers[index])!;
    const needsReview = !chosen.correct;
    await expect(decision.locator(".recap-step-title")).toHaveText(step.title);
    await expect(decision.locator(".recap-outcome")).toHaveText(needsReview ? en.worthRevisiting : en.informedChoice);
    await expect(decision).toHaveJSProperty("open", needsReview);
    if (!needsReview) await decision.locator("summary").click();
    await expect(decision.getByText(chosen.label, { exact: true })).toBeVisible();
    await expect(decision.getByText(chosen.feedback, { exact: true })).toBeVisible();
    await expect(decision.locator(".recap-consequence")).toHaveText(chosen.consequence);
    if (needsReview) {
      const informed = step.choices.find((choice) => choice.correct)!;
      await expect(decision.getByText(informed.label, { exact: true })).toBeVisible();
      await expect(decision.getByRole("heading", { name: en.saferOption, exact: true })).toBeVisible();
    } else {
      await expect(decision.getByRole("heading", { name: en.saferOption, exact: true })).toHaveCount(0);
    }
  }
  await expect(page.locator(".recap-reflection")).toContainText(en.reflectIntro);
  const sources = await page.locator(".recap-resources .learning-resource-card > a").evaluateAll((links) => links.map((link) => link.getAttribute("href")));
  expect(new Set(sources).size).toBe(sources.length);
});

test("revisiting restores choice, focus and order and requires a changed answer to be checked", async ({ page }) => {
  const { steps, answers, order } = await finishJourney(page, "kwame", [1]);
  await expect(page.locator(".readiness-meter")).toHaveAttribute("aria-label", /^4 of 5\b/);
  await page.locator(".decision-recap").nth(1).locator(".recap-answer-actions button").click();
  await expectStageFocus(page, steps[1].title);
  await expect(radio(page, 1, answers[1])).toHaveAttribute("aria-checked", "true");
  expect(await choiceOrder(page)).toEqual(order[1]);
  await expect(page.locator(".feedback-status")).toContainText(steps[1].choices.find((choice) => choice.id === answers[1])!.feedback);
  const returnToRecap = page.getByRole("button", { name: en.returnToRecap, exact: true });
  await expect(returnToRecap).toBeEnabled();

  const corrected = steps[1].choices.find((choice) => choice.correct)!;
  await radio(page, 1, corrected.id).click();
  await expect(returnToRecap).toBeDisabled();
  await expect(page.locator(".feedback-status")).toBeEmpty();
  await expect(page.locator(".journey-insight")).toHaveCount(0);
  await page.getByRole("button", { name: "Check decision", exact: true }).click();
  await expect(returnToRecap).toBeEnabled();
  await returnToRecap.click();
  await expect(page.locator("#completion-title")).toBeFocused();
  await expect(page.locator(".readiness-meter")).toHaveAttribute("aria-label", /^5 of 5\b/);
  await expect(page.locator(".decision-recap.needs-review")).toHaveCount(0);
  await expect(page.locator(".recap-decisions")).toContainText(en.allConsidered);
  const updated = page.locator(".decision-recap").nth(1);
  await updated.locator("summary").click();
  await expect(updated.getByText(corrected.label, { exact: true })).toBeVisible();
  await expect(updated.getByText(corrected.feedback, { exact: true })).toBeVisible();
  await expect(updated.getByText(steps[1].choices.find((choice) => choice.id === answers[1])!.label, { exact: true })).toHaveCount(0);
});

test("Priya keeps professional and tax guidance while moving guides join the translated hub search", async ({ page }) => {
  await finishJourney(page, "priya", [], async (index) => {
    const cards = page.locator(".stage-practical-resources");
    if (index === 0) {
      await expect(cards.getByRole("heading", { name: en.professionalTitle, exact: true })).toBeVisible();
      await expect(cards.locator(`a[href="${practicalResourceUrls.nursing}"]`)).toBeVisible();
    } else if (index === 3) {
      await expect(cards.getByRole("heading", { name: en.taxTitle, exact: true })).toBeVisible();
      await expect(cards.locator(`a[href="${practicalResourceUrls.tax}"]`)).toBeVisible();
    } else {
      await expect(cards).toHaveCount(0);
    }
  });
  const related = page.locator(".recap-resources");
  await expect(related.getByRole("heading", { name: en.professionalTitle, exact: true })).toBeVisible();
  await expect(related.getByRole("heading", { name: en.taxTitle, exact: true })).toBeVisible();
  const moving = page.locator(".recap-moving-guidance");
  await expect(moving.getByRole("heading", { name: en.movingGuide.resources.work.title, exact: true })).toBeVisible();
  await expect(moving.getByRole("link")).toHaveAttribute("href", "https://www.citizensinformation.ie/en/moving-country/working-in-ireland/migrant-workers/coming-to-work-in-ireland/");
  await page.locator(".completion-actions a").click();
  await expect(page).toHaveURL(/\/resources\/\?topic=work#resource-browser$/);
  await expect(page.locator(".topic-tabs").getByRole("button", { name: "Work", exact: true })).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".resource-card")).toHaveCount(7);
  await page.locator(".topic-tabs").getByRole("button", { name: "Study", exact: true }).click();
  await expect(page.locator(".resource-card")).toHaveCount(3);
  await page.locator(".topic-tabs").getByRole("button", { name: en.movingGuide.arrivalTopic, exact: true }).click();
  await expect(page.locator(".resource-card")).toHaveCount(6);
  await expect(page.locator(".resource-grid").getByRole("heading", { name: en.movingGuide.resources.beforeArrival.title, exact: true })).toBeVisible();
  await page.locator(".topic-tabs").getByRole("button", { name: "All information", exact: true }).click();
  await expect(page.locator(".resource-card")).toHaveCount(40);
  await expect(page.locator(".result-count")).toContainText("40");

  await page.locator(".resources-nav > .language-control select").selectOption("fr");
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  const search = page.getByRole("searchbox");
  for (const [title, description, href] of [
    [french.professionalTitle, french.professionalDescription, practicalResourceUrls.nursing],
    [french.taxTitle, french.taxDescription, practicalResourceUrls.tax],
    [french.movingGuide.resources.housing.title, french.movingGuide.resources.housing.description, "https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/introduction-to-the-irish-system/accommodation/"],
  ]) {
    await search.fill(title);
    const card = page.locator(".resource-card");
    await expect(card).toHaveCount(1);
    await expect(card.getByRole("heading", { name: title, exact: true })).toBeVisible();
    await expect(card.getByText(description, { exact: true })).toBeVisible();
    await expect(card.locator("a")).toHaveAttribute("href", href);
  }
  await search.fill("");
  await expect(page.locator(".resource-card")).toHaveCount(40);
});

async function expectReadableWidth(page: Page, width: number, selector: string) {
  await expect.poll(() => page.evaluate(({ expectedWidth, target }) => {
    const visible = [...document.querySelectorAll<HTMLElement>(target)].filter((node) => node.getBoundingClientRect().height > 0);
    return visible.length > 0 && document.documentElement.scrollWidth <= expectedWidth && visible.every((node) => {
      const box = node.getBoundingClientRect();
      return box.left >= -1 && box.right <= window.innerWidth + 1 && node.scrollWidth <= node.clientWidth + 1;
    });
  }, { expectedWidth: width, target: selector })).toBe(true);
}

test("moving guide links and localized search remain usable on narrow RTL screens", async ({ page }) => {
  for (const [width, language, copy] of [[320, "ar", arabic], [390, "fa", farsi]] as const) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("./resources/?topic=arrival#resource-browser");
    await page.getByRole("searchbox").fill("");
    await page.locator(".mobile-menu-button").click();
    await page.locator(".mobile-language-row select").selectOption(language);
    await expect(page.locator("html")).toHaveAttribute("lang", language);
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
    await page.keyboard.press("Escape");

    const intro = page.locator(".moving-guide-intro");
    await expect(intro.getByRole("heading", { name: copy.movingGuide.title, exact: true })).toBeVisible();
    const openGuide = intro.getByRole("link", { name: copy.movingGuide.open, exact: true });
    await expect(openGuide).toHaveAttribute("href", "https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/");
    await expect(openGuide).toHaveAttribute("target", "_blank");
    await expect(intro.getByRole("link", { name: copy.movingGuide.beforeTravel, exact: true })).toHaveAttribute("href", "https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/before-you-come-to-ireland/");
    await openGuide.focus();
    await expect(openGuide).toBeFocused();
    await expect(page.locator(".topic-tabs").getByRole("button", { name: copy.movingGuide.arrivalTopic, exact: true })).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator(".resource-card")).toHaveCount(6);
    await expectReadableWidth(page, width, ".moving-guide-intro, .moving-guide-actions, .moving-guide-actions a, .resource-card, .source-details");

    await page.getByRole("searchbox").fill(copy.movingGuide.resources.registration.title);
    const card = page.locator(".resource-card");
    await expect(card).toHaveCount(1);
    await expect(card.getByRole("heading", { name: copy.movingGuide.resources.registration.title, exact: true })).toBeVisible();
    await expect(card).toContainText(copy.movingGuide.resources.registration.description);
    await expect(card.getByRole("link")).toHaveAttribute("href", "https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/rights-of-residence-in-ireland/registration-of-non-eea-nationals-in-ireland/");
    await expect(card.locator(".source-details")).toContainText(copy.sourceUndated);
    await expect(card.locator("time")).toHaveCount(0);
    await expectReadableWidth(page, width, ".resource-card, .resource-card h3, .source-details");
  }
});

test("narrow RTL recaps and insights wrap and keep keyboard focus across language changes", async ({ page }) => {
  test.setTimeout(60_000);
  const { answers, order } = await finishJourney(page, "kwame", [1]);
  for (const [width, language, copy, catalog] of [
    [320, "ar", arabic, arabicJourney],
    [390, "fa", farsi, farsiJourney],
  ] as const) {
    await page.setViewportSize({ width, height: 844 });
    const select = page.locator(".journey-topbar select");
    await select.focus();
    await select.selectOption(language);
    await expect(page.locator("html")).toHaveAttribute("lang", language);
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
    await expect(select).toBeFocused();
    await expect(page.getByRole("heading", { name: copy.decisionsTitle, exact: true })).toBeVisible();
    await expect(page.locator(".decision-recap")).toHaveCount(5);
    await expectReadableWidth(page, width, ".decision-recap, .recap-answer-actions, .learning-resource-card, .source-details");

    // Native details retain a visible focus indicator and keyboard expansion.
    const firstSummary = page.locator(".decision-recap summary").first();
    await firstSummary.focus();
    await page.keyboard.press("Shift+Tab");
    await page.keyboard.press("Tab");
    await expect(firstSummary).toBeFocused();
    await expect.poll(() => firstSummary.evaluate((node) => getComputedStyle(node).outlineStyle)).toBe("solid");
    if (!(await firstSummary.locator("..").evaluate((node) => (node as HTMLDetailsElement).open))) {
      await page.keyboard.press("Enter");
    }
    const firstAnswer = (catalog as JourneyTranslationCatalog)["critical:Plan"].choices[answers[0]];
    await expect(page.locator(".decision-recap").first().getByText(firstAnswer.label, { exact: true })).toBeVisible();

    const revisit = page.locator(".decision-recap").nth(1).locator(".recap-answer-actions button");
    await expect(revisit).toHaveAccessibleName(new RegExp(copy.revisitDecision));
    await revisit.click();
    await expectStageFocus(page, catalog["critical:Prepare"].title);
    await expect(radio(page, 1, answers[1])).toHaveAttribute("aria-checked", "true");
    expect(await choiceOrder(page)).toEqual(order[1]);
    await expect(page.locator(".journey-insight")).toContainText(copy.insights.permissions.explanation);
    await expectReadableWidth(page, width, ".journey-insight, .insight-source-link, .source-details, .recap-return");
    await page.getByRole("button", { name: copy.returnToRecap, exact: true }).click();
    await expect(page.locator("#completion-title")).toBeFocused();
    await expect(page.locator(".decision-recap.needs-review")).toHaveCount(1);
  }
});

