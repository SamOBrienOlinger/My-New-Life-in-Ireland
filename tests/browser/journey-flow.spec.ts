import { expect, test, type Page } from "@playwright/test";
import { characters, stepsByRoute } from "../../app/journey-data";

const portrait = { width: 390, height: 844 };
const landscape = { width: 844, height: 390 };
const nextAction = (page: Page) => page.locator(".decision-actions .primary-button");

test("first play, feedback and resume take a keyboard user to the right stage", async ({ page }) => {
  await page.setViewportSize(portrait);
  await page.goto("./");
  const start = page.getByRole("button", { name: "Start a journey", exact: true });
  await expect(start).toBeInViewport();
  await expect(start).toHaveAccessibleDescription(/Suggested first journey.*Kwame Mensah/);
  await page.getByRole("link", { name: "How it works", exact: true }).press("Enter");
  await expect(page.locator("#how-it-works")).toHaveAttribute("open", "");
  await start.press("Enter");
  await expect(page.locator("#decision-title")).toBeFocused();
  await expect(page.locator("#stage-progress")).toContainText("Stage 1 of 5");
  await expect(page.getByRole("button", { name: "With guidance", exact: true })).toHaveAttribute("aria-pressed", "true");

  await page.getByRole("button", { name: "Try first", exact: true }).press("Enter");
  await expect(page.locator(".story-guidance")).not.toHaveAttribute("open");
  const firstChoice = page.locator(".choice-card").first();
  expect((await firstChoice.boundingBox())!.y).toBeLessThan((await page.locator(".chapter-illustration").boundingBox())!.y);
  await firstChoice.press("Space");
  await nextAction(page).press("Enter");
  await expect(page.locator(".feedback-card")).toBeFocused();
  await expect(page.locator(".feedback-status")).not.toBeEmpty();
  await nextAction(page).press("Enter");
  await expect(page.locator("#stage-progress")).toContainText("Stage 2 of 5");

  const answer = page.locator(".choice-card").last();
  const selectedId = await answer.getAttribute("id");
  await answer.press("Space");
  await page.locator(".journey-topbar select").selectOption("ar");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  await expect(page.locator(`.choice-card[id="${selectedId}"]`)).toBeChecked();
  await page.locator(".journey-topbar select").selectOption("en");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await page.reload();
  const resume = page.getByRole("button", { name: "Resume journey", exact: true });
  await expect(resume).toHaveAccessibleDescription(/Kwame Mensah.*Stage 2 of 5.*Prepare/);
  await resume.press("Enter");
  await expect(page.locator("#decision-title")).toHaveText(stepsByRoute.critical[1].title);
  await expect(page.locator(`.choice-card[id="${selectedId}"]`)).toBeChecked();
  await expect(page.getByRole("button", { name: "Try first", exact: true })).toHaveAttribute("aria-pressed", "true");
});

test("compatible topics survive between views and genuine empty searches can be reset", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("./");
  await page.getByRole("link", { name: "Route finder", exact: true }).click();
  await page.locator("#route-finder").getByRole("button", { name: /^I want to work/ }).click();
  await expect(page).toHaveURL(/\?topic=work#choose-character$/);
  await expect(page.locator("#character-picker-title")).toBeFocused();
  await expect(page.locator(".character-card")).toHaveCount(characters.filter((person) => person.filter === "work").length);

  await page.locator(".home-nav").getByRole("link", { name: "Information hub", exact: true }).click();
  await expect(page.locator(".topic-tabs button[aria-pressed=true]")).toHaveText("Work");
  await page.locator(".resources-nav").getByRole("link", { name: "Fact or Fiction", exact: true }).click();
  await expect(page.locator(".facts-page button[aria-pressed=true]")).toHaveText(/Work/);
  await page.locator(".facts-nav").getByRole("link", { name: "Journeys", exact: true }).click();
  await expect(page.locator(".browse-filters button[aria-pressed=true]")).toHaveText("I want to work");

  await page.goto("resources/?topic=rights#resource-browser");
  await page.getByRole("link", { name: "Back to the journeys", exact: true }).click();
  await expect(page).toHaveURL(/\/My-New-Life-in-Ireland\/#choose-character$/);
  await expect(page.locator(".browse-filters button[aria-pressed=true]")).toHaveText("All journeys");
  await expect(page.locator(".character-card")).toHaveCount(characters.length);

  await page.goto("./?topic=rights#choose-character");
  await expect(page).toHaveURL(/\/My-New-Life-in-Ireland\/#choose-character$/);
  await expect(page.locator(".character-card")).toHaveCount(characters.length);
  const search = page.getByRole("searchbox", { name: "Search journeys", exact: true });
  await search.fill("no-matching-journey-xyz");
  await expect(page.locator(".character-card")).toHaveCount(0);
  await page.getByRole("button", { name: "Reset search and filters", exact: true }).press("Enter");
  await expect(search).toBeFocused();
  await expect(search).toBeEmpty();
  await expect(page.locator(".character-card")).toHaveCount(characters.length);
});

async function answerLayout(page: Page, viewport: { width: number; height: number }) {
  // The first layout read after resize checks each line, including a hanging
  // last line that a whole-button size check could miss.
  const layout = await page.evaluate(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
    scrollWidth: document.documentElement.scrollWidth,
    choices: Array.from(document.querySelectorAll<HTMLButtonElement>("button.choice-card")).map((button) => {
      const bounds = button.getBoundingClientRect();
      const range = document.createRange();
      range.selectNodeContents(button.querySelector(".choice-text")!);
      const lines = Array.from(range.getClientRects());
      return {
        id: button.id,
        lines: lines.length,
        targetSize: Math.min(bounds.width, bounds.height),
        contained: lines.length > 0 && lines.every((line) => line.top >= bounds.top - .5 && line.bottom <= bounds.bottom + .5 && line.left >= bounds.left - .5 && line.right <= bounds.right + .5),
        checked: button.getAttribute("aria-checked") === "true",
      };
    }),
  }));
  expect(layout).toMatchObject(viewport);
  expect(layout.scrollWidth).toBeLessThanOrEqual(viewport.width);
  expect(layout.choices.length).toBeGreaterThan(0);
  for (const { id, targetSize, contained } of layout.choices) {
    expect(targetSize, id).toBeGreaterThanOrEqual(44);
    expect(contained, id).toBe(true);
  }
  return layout.choices;
}

test.describe("WebKit touch rotation", () => {
  test.skip(({ browserName }) => browserName !== "webkit", "Uses WebKit mobile emulation.");
  test.use({ viewport: portrait, isMobile: true, hasTouch: true });

  for (const character of characters) {
    test(`${character.name} keeps every answer inside its control across all five stages`, async ({ page }) => {
      await page.goto(`./#character-${character.id}`);
      await page.locator(".start-bar .primary-button").tap();
      let wrapped = false;
      for (const [index, step] of stepsByRoute[character.route].entries()) {
        await expect(page.locator("#decision-title")).toHaveText(step.title);
        await page.locator(".choice-card").first().tap();
        await page.setViewportSize(landscape);
        await answerLayout(page, landscape);
        // Change how the context is presented while the same answer is selected.
        await page.getByRole("button", { name: index % 2 === 0 ? "Try first" : "With guidance", exact: true }).tap();
        await page.setViewportSize(portrait);
        const choices = await answerLayout(page, portrait);
        expect(choices).toHaveLength(step.choices.length);
        expect(choices.filter((choice) => choice.checked).map((choice) => choice.id)).toEqual([choices[0].id]);
        wrapped ||= choices.some((choice) => choice.lines > 1);
        await nextAction(page).tap();
        await nextAction(page).tap();
      }
      expect(wrapped).toBe(true);
      await expect(page.locator("#completion-title")).toContainText(character.name);
    });
  }

  test("Arabic answer text still fits at 200% after rotation", async ({ page }) => {
    await page.goto("./");
    await page.getByRole("button", { name: "Start a journey", exact: true }).tap();
    const choiceId = await page.locator(".choice-card").first().getAttribute("id");
    await page.locator(".choice-card").first().tap();
    await page.locator(".journey-topbar select").selectOption("ar");
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
    await page.evaluate(() => { document.documentElement.style.fontSize = "200%"; });
    await page.setViewportSize(landscape);
    await answerLayout(page, landscape);
    await page.setViewportSize(portrait);
    const answers = await answerLayout(page, portrait);
    expect(answers.some((answer) => answer.lines > 2)).toBe(true);
    expect(answers.find((answer) => answer.checked)?.id).toBe(choiceId);
  });
});
