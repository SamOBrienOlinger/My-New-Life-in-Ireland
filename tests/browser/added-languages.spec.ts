import { expect, test, type Page } from "@playwright/test";
import { packedLanguageCopy, type PackedLanguage } from "../../app/language-packs";
import { stepsByRoute } from "../../app/journey-data";

const languages: PackedLanguage[] = ["ln", "yo", "sw", "tr", "ps"];
const ui = packedLanguageCopy("ui");
const about = packedLanguageCopy("aboutCopy");
const resources = packedLanguageCopy("resourceCopy");
const facts = packedLanguageCopy("factUi");
const search = packedLanguageCopy("search");

async function selectMobileLanguage(page: Page, language: string) {
  await page.locator(".mobile-menu-button").click();
  const select = page.locator(".mobile-language-row select");
  await select.selectOption(language);
  await expect(page.locator("html")).toHaveAttribute("lang", language);
  await expect(select).toHaveAttribute("aria-busy", "false");
  await page.locator(".mobile-menu-button").click();
}

async function selectJourneyLanguage(page: Page, language: string) {
  const select = page.locator(".journey-tools select");
  await select.selectOption(language);
  await expect(page.locator("html")).toHaveAttribute("lang", language);
  await expect(select).toHaveAttribute("aria-busy", "false");
}

for (const language of languages) {
  test(`${language}: mobile language selection persists across pages and preserves a checked journey`, async ({ page }) => {
    test.setTimeout(60_000);
    const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("./");
    await selectMobileLanguage(page, language);
    await expect(page.locator(".hero-heading h1")).toHaveText(ui[language].heroTitle);
    await expect(page.locator("html")).toHaveAttribute("dir", language === "ps" ? "rtl" : "ltr");

    for (const [url, title] of [
      ["./about/", about[language].title],
      ["./resources/", resources[language].title],
      ["./fact-or-fiction/", facts[language].title],
      ["./search/", search[language].title],
    ]) {
      await page.goto(url);
      await expect(page.locator("html")).toHaveAttribute("lang", language);
      await expect(page.locator("h1")).toHaveText(title);
      await expect(page.locator(".footer-nav-link").first()).toHaveText(ui[language].home);
      for (const width of [320, 390, 1280]) {
        await page.setViewportSize({ width, height: 844 });
        await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width + 1);
      }
      await page.setViewportSize({ width: 390, height: 844 });
    }

    // Search still matches Yoruba diacritics and the other native-language text.
    const query = ui[language].journeys.normalize("NFKD").replace(/\p{M}/gu, "");
    await page.locator("#site-search-query").fill(query);
    await expect(page.locator(".site-search-result").first()).toBeVisible();

    await page.goto("./#character-kwame");
    await expect(page.locator("html")).toHaveAttribute("lang", language);
    await page.getByRole("button", { name: ui[language].begin, exact: true }).click();
    const translatedTitle = await page.locator("#decision-title").innerText();
    expect(translatedTitle).not.toBe(stepsByRoute.critical[0].title);
    for (const width of [320, 390, 1280]) {
      await page.setViewportSize({ width, height: 844 });
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width + 1);
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await page.locator('[id="0-verify"]').click();
    await page.getByRole("button", { name: ui[language].check, exact: true }).click();
    await expect(page.locator(".feedback-card.correct")).toBeVisible();

    await selectJourneyLanguage(page, "en");
    await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
    await expect(page.locator("#decision-title")).toHaveText(stepsByRoute.critical[0].title);
    await expect(page.locator('[id="0-verify"]')).toHaveAttribute("aria-checked", "true");
    await expect(page.locator(".feedback-card.correct")).toBeVisible();
    await selectJourneyLanguage(page, language);
    await expect(page.locator("html")).toHaveAttribute("dir", language === "ps" ? "rtl" : "ltr");
    await expect(page.locator("#decision-title")).toHaveText(translatedTitle);
    await expect(page.locator('[id="0-verify"]')).toHaveAttribute("aria-checked", "true");
    await expect(page.locator(".feedback-card.correct")).toBeVisible();

    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("lang", language);
    await page.locator(".resume-banner button").click();
    await expect(page.locator("#decision-title")).toHaveText(translatedTitle);
    await expect(page.locator('[id="0-verify"]')).toHaveAttribute("aria-checked", "true");
    expect(errors).toEqual([]);
  });
}
