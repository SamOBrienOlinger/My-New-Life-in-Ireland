import { expect, test } from "@playwright/test";

test.describe("GitHub Pages homepage without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  test("section summaries and guidance links remain readable and keyboard accessible", async ({ page }) => {
    await page.goto("./");
    const fallback = page.getByRole("main");
    await expect(fallback.getByRole("heading", { level: 1 })).toHaveText("Journeys to Ireland");
    await expect(fallback).toContainText("JavaScript is disabled.");
    await expect(fallback).toContainText("This page cannot read or change journeys or reflections already saved on this device.");
    await expect(fallback.getByRole("heading", { level: 2 })).toHaveText([
      "Your journey journal", "Fact or Fiction", "Practical information for life in Ireland", "Official guidance",
    ]);
    await expect(fallback.getByRole("button")).toHaveCount(0);
    const sources = fallback.locator("#official-guidance a");
    await expect(sources).toHaveCount(5);
    for (const link of await sources.all()) {
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute("href", /^https:\/\//);
    }

    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await expect.poll(() => page.evaluate(() => document.documentElement.clientWidth)).toBe(width);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width + 1);
      for (const heading of await fallback.getByRole("heading").all()) {
        await expect(heading).toBeVisible();
        await expect(heading).toHaveCSS("opacity", "1");
      }
    }

    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Skip to guidance links" })).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#official-guidance$/);
    await page.keyboard.press("Tab");
    await expect(sources.first()).toBeFocused();
    await expect(sources.first()).toHaveCSS("outline-style", "solid");
    // Check activation without depending on availability of an external site.
    await page.route("https://www.irishimmigration.ie/", (route) => route.fulfill({
      contentType: "text/html", body: "<h1>Guidance destination reached</h1>",
    }));
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL("https://www.irishimmigration.ie/");
    await expect(page.getByRole("heading")).toHaveText("Guidance destination reached");
  });
});

test("the fallback is absent from the interactive homepage", async ({ page }) => {
  await page.goto("./");
  await expect(page.locator("#home-title")).toBeVisible();
  await expect(page.getByRole("main")).toHaveCount(1);
  await expect(page.locator(".no-script-home")).toHaveCount(0);
  await expect(page.getByText("JavaScript is disabled.", { exact: false })).toHaveCount(0);
});
