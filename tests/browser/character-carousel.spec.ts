import { expect, test, type Page } from "@playwright/test";
import { characters, stepsByRoute } from "../../app/journey-data";

const previous = (page: Page) => page.getByRole("button", { name: "Previous characters", exact: true });
const next = (page: Page) => page.getByRole("button", { name: "Next characters", exact: true });

async function expectVisibleCards(page: Page, ids: string[]) {
  await expect.poll(() => page.locator(".character-carousel-viewport").evaluate((viewport) => {
    const bounds = viewport.getBoundingClientRect();
    return [...viewport.querySelectorAll(".character-card")]
      .filter((card) => {
        const box = card.getBoundingClientRect();
        return box.left >= bounds.left - 2 && box.right <= bounds.right + 2;
      })
      .map((card) => card.id.replace("character-", ""));
  })).toEqual(ids);
}

async function selectNextWithKeyboard(page: Page, key: "ArrowLeft" | "ArrowRight") {
  // Radix selects in a deferred focus task while the arrow is held.
  await page.keyboard.down(key);
  try {
    await expect(page.locator("#mateo")).toBeFocused();
    await expect(page.locator("#mateo")).toHaveAttribute("aria-checked", "true");
  } finally {
    await page.keyboard.up(key);
  }
  await expectVisibleCards(page, ["mateo"]);
}

test("desktop browsing reaches every character without changing the selected journey", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("./#character-kwame");
  await expectVisibleCards(page, characters.slice(0, 3).map((item) => item.id));
  await expect(previous(page)).toBeDisabled();

  for (let start = 1; start <= characters.length - 3; start++) {
    await next(page).click();
    await expectVisibleCards(page, characters.slice(start, start + 3).map((item) => item.id));
  }
  await expect(next(page)).toBeDisabled();
  await expect(page.locator('#kwame[aria-checked="true"]')).toHaveCount(1);
  await expect(page.locator('.character-grid [aria-checked="true"]')).toHaveCount(1);

  await previous(page).click();
  await expectVisibleCards(page, ["river", "adama", "elena"]);
});

test("mobile shows one card and keyboard selection brings the next character into view", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("./#character-kwame");
  await expectVisibleCards(page, ["kwame"]);
  await page.getByRole("button", { name: "Begin five-stage journey", exact: true }).focus();
  await page.keyboard.press("Tab");
  await expect(page.locator("#kwame")).toBeFocused();
  await selectNextWithKeyboard(page, "ArrowRight");
  await expect(page.locator(".start-bar")).toContainText("Mateo Álvarez");
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
});

test("route filters reset the carousel bounds and a single result needs no scrolling", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("./#character-leila");
  await expectVisibleCards(page, ["adama", "elena", "leila"]);
  await page.getByRole("button", { name: /^I want to study/ }).click();
  await expect(page.locator(".character-card")).toHaveCount(1);
  await expectVisibleCards(page, ["noor"]);
  await expect(previous(page)).toBeDisabled();
  await expect(next(page)).toBeDisabled();
  await expect(page.locator('.character-grid [aria-checked="true"]')).toHaveCount(0);

  await page.getByRole("button", { name: /^Show everyone/ }).click();
  await expect(page.locator(".character-card")).toHaveCount(12);
  await expect(previous(page)).toBeDisabled();
  await expect(next(page)).toBeEnabled();
});

test("a mobile deep link reveals the last character and its saved journey remains available", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 844 });
  await page.goto("./#character-leila");
  await expect(page.locator("#leila")).toHaveAttribute("aria-checked", "true");
  await expectVisibleCards(page, ["leila"]);
  await expect(next(page)).toBeDisabled();
  await page.getByRole("button", { name: "Begin five-stage journey", exact: true }).click();
  await expect(page.locator("#decision-title")).toHaveText(stepsByRoute["family-safety"][0].title);
  await page.getByRole("button", { name: "Change character", exact: true }).click();
  await expectVisibleCards(page, ["kwame"]);
  await expect(page.locator('.character-grid [aria-checked="true"]')).toHaveCount(0);
  await expect(page.locator(".resume-banner")).toContainText("Continue with Leila");
  await page.getByRole("link", { name: "Walk with Leila", exact: true }).click();
  await expectVisibleCards(page, ["leila"]);
  await expect(page.locator("#leila")).toHaveAttribute("aria-checked", "true");
  await expect(page.locator(".start-bar")).toContainText("Continue with Leila");
});

for (const language of ["ar", "fa"]) {
  test(`${language} browsing and radio keyboard navigation follow the RTL character order`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("./#character-kwame");
    await page.locator(".mobile-menu-button").click();
    await page.locator(".mobile-language-row select").selectOption(language);
    await expect(page.locator("html")).toHaveAttribute("lang", language);
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
    await page.keyboard.press("Escape");
    await expectVisibleCards(page, ["kwame"]);
    const arrows = page.locator(".character-carousel-controls .carousel-arrow");
    await expect(arrows).toHaveCount(2);
    await expect(arrows.first()).toBeDisabled();
    await expect(arrows.last()).toHaveAccessibleName(/\S/);
    await arrows.last().click();
    await expectVisibleCards(page, ["mateo"]);
    await expect(page.locator("#kwame")).toHaveAttribute("aria-checked", "true");
    await arrows.first().click();
    await expectVisibleCards(page, ["kwame"]);
    await page.locator("#kwame").focus();
    await selectNextWithKeyboard(page, "ArrowLeft");
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
  });
}
