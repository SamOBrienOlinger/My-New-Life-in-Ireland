import { expect, test, type Page } from "@playwright/test";

const pages = [
  { url: "./", current: "Home" },
  { url: "./about/", current: "About" },
  { url: "./resources/", current: "Information hub" },
  { url: "./fact-or-fiction/", current: "Fact or Fiction" },
  { url: "./search/", current: "Search" },
] as const;

async function footerLinkData(page: Page, selector: string) {
  return page.locator(selector).evaluateAll((elements) =>
    elements.map((element) => ({
      label: (element.textContent || "").trim(),
      href: element.getAttribute("href"),
    })),
  );
}

test("footer navigation matches the mobile menu on every public page and Back to top preserves the route", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const item of pages) await test.step(item.url, async () => {
    await page.goto(item.url);
    const nav = page.getByRole("navigation", { name: "Journeys to Ireland: Footer navigation" });
    await expect(nav).toBeVisible();
    await expect(nav.locator("a")).toHaveCount(7);
    const active = nav.locator('a[aria-current="page"]');
    await expect(active).toHaveCount(1);
    await expect(active).toHaveText(item.current);

    await page.locator(".mobile-menu-button").click();
    const mobileLinks = await footerLinkData(page, ".mobile-navigation-links a");
    const footerLinks = await footerLinkData(page, ".footer-navigation .footer-nav-link");
    expect(footerLinks, "Same link labels and destinations as mobile menu").toEqual(mobileLinks);
    await page.locator(".mobile-menu-button").click();

    const before = page.url();
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(100);
    await page.getByRole("button", { name: "Back to top", exact: true }).click();
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThanOrEqual(2);
    await expect(page.locator("main").first()).toBeFocused();
    expect(page.url()).toBe(before);
  });
});

test("footer offers keyboard-accessible links with 44px targets and an accessible top button", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("./resources/");
  const nav = page.getByRole("navigation", { name: "Journeys to Ireland: Footer navigation" });
  const controls = nav.locator("a");
  await expect(controls).toHaveCount(7);
  const sizes = await controls.evaluateAll((links) => links.map((link) => {
    const rect = link.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  }));
  expect(sizes.every((size) => size.width >= 44 && size.height >= 44)).toBe(true);
  await page.getByRole("button", { name: "Back to top", exact: true }).focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("main").first()).toBeFocused();
  await nav.getByRole("link", { name: "Search", exact: true }).click();
  await expect(page).toHaveURL(/\/search\/$/);
  await expect(page.getByRole("heading", { name: "Search the entire site" })).toBeVisible();
});

test("Back to top on an active character journey does not restart the story", async ({ page }) => {
  await page.goto("./");
  await page.getByRole("link", { name: "Walk with Kwame", exact: true }).first().click();
  await expect(page.locator("#decision-title")).toBeVisible();
  await expect(page.locator(".journey-footer .footer-nav-link")).toHaveCount(7);
  await expect(page.locator('.journey-footer .footer-nav-link[aria-current="page"]')).toHaveText("Journeys");
  const title = await page.locator("#decision-title").innerText();
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await page.locator(".journey-footer .footer-back-to-top").click();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThanOrEqual(2);
  await expect(page.locator("#decision-title")).toHaveText(title);
  await expect(page.locator("main")).toBeFocused();
});

test("Arabic RTL footer is responsive and back-to-top uses the chosen language", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("mnli-language", "ar"));
  await page.setViewportSize({ width: 320, height: 700 });
  await page.goto("./fact-or-fiction/");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  const back = page.getByRole("button", { name: "العودة إلى أعلى الصفحة", exact: true });
  await expect(back).toBeVisible();
  const nav = page.locator(".footer-navigation");
  await expect(nav.locator("a")).toHaveCount(7);
  await page.locator(".mobile-menu-button").click();
  expect(await footerLinkData(page, ".footer-navigation a")).toEqual(await footerLinkData(page, ".mobile-navigation-links a"));
  await page.locator(".mobile-menu-button").click();
  const sizes = await nav.locator("a").evaluateAll((links) => links.map((element) => {
    const rect = element.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  }));
  expect(sizes.every(({ width, height }) => width >= 44 && height >= 44)).toBe(true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(321);
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await back.click();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThanOrEqual(2);
});

test("all primary footer links resolve under the GitHub Pages base", async ({ page }) => {
  await page.goto("./about/");
  const anchors = page.locator(".footer-navigation a");
  const urls = await anchors.evaluateAll((links) => links.map((a) => (a as HTMLAnchorElement).pathname));
  expect(urls.every((path) => path.startsWith("/My-New-Life-in-Ireland/"))).toBe(true);
  await expect(anchors).toHaveCount(7);
});
