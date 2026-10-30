import { expect, test, type Page } from "@playwright/test";

type Entrance = { id: string; duration: number; delay: number; fill: string };
declare global {
  interface Window { __homeSectionEntrances: Entrance[] }
}

const sections = [
  { key: "journal", selector: "#learning-journal", items: ".journal-library-heading, .journal-storage-note, .journal-empty, .journal-library-list" },
  { key: "facts", selector: ".fact-home-teaser", items: ":scope > div, :scope > a" },
  { key: "hub", selector: ".hub-preview", items: ":scope > div, .hub-topic-grid > a" },
  { key: "guidance", selector: "#official-guidance", items: ".guidance-intro, .source-list > a" },
] as const;
const targets = "#learning-journal, .fact-home-teaser, .hub-preview, #official-guidance";

async function recordEntrances(page: Page, pause = false) {
  await page.addInitScript(({ pause }) => {
    window.__homeSectionEntrances = [];
    const original = Element.prototype.animate;
    Element.prototype.animate = function (
      this: Element,
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions,
    ) {
      const animation = original.call(this, keyframes, options);
      if (typeof options === "object" && options.id?.startsWith("home-section:")) {
        window.__homeSectionEntrances.push({
          id: options.id,
          duration: Number(options.duration),
          delay: Number(options.delay),
          fill: String(options.fill),
        });
        // Freeze the animation only in cancellation tests to avoid racing a
        // 700ms effect against a busy runner; all other tests run real motion.
        if (pause) animation.pause();
      }
      return animation;
    };
  }, { pause });
}

async function enterSection(page: Page, selector: string, key: string) {
  await page.locator(selector).evaluate((node) => node.scrollIntoView({ block: "start", behavior: "instant" }));
  await expect.poll(() => page.evaluate((key) => window.__homeSectionEntrances.filter(
    (item) => item.id.startsWith("home-section:" + key + ":"),
  ).length, key)).toBeGreaterThan(0);
}

async function expectSettled(page: Page) {
  await expect.poll(() => page.locator(targets).evaluateAll((nodes) => nodes.reduce(
    (total, node) => total + node.getAnimations({ subtree: true }).filter(
      (animation) => animation.id.startsWith("home-section:"),
    ).length, 0,
  ))).toBe(0);
  const states = await page.locator(targets).evaluateAll((nodes) => nodes.flatMap((node) =>
    [node, ...Array.from(node.querySelectorAll("div, h2, p, a"))].map((item) => {
      const style = getComputedStyle(item);
      return { opacity: style.opacity, visibility: style.visibility };
    }),
  ));
  expect(states.length).toBeGreaterThan(4);
  for (const state of states) {
    expect(state.opacity).toBe("1");
    expect(state.visibility).toBe("visible");
  }
}

test("lower homepage sections use slower staggered entrances only once", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await recordEntrances(page);
  await page.goto("./");
  await expect(page.locator("#home-title")).toBeVisible();
  expect(await page.evaluate(() => window.__homeSectionEntrances.length)).toBe(0);

  for (const section of sections) {
    await enterSection(page, section.selector, section.key);
    const records = await page.evaluate((key) => window.__homeSectionEntrances.filter(
      (entry) => entry.id.startsWith("home-section:" + key + ":"),
    ), section.key);
    const count = await page.locator(section.selector).locator(section.items).count();
    expect(records).toHaveLength(count);
    expect(records.map((entry) => entry.duration)).toEqual(Array(count).fill(700));
    expect(records.map((entry) => entry.delay)).toEqual(Array.from({ length: count }, (_, index) => 100 + Math.min(index * 100, 400)));
    expect(records.every((entry) => entry.fill === "backwards")).toBe(true);
  }
  await expectSettled(page);
  const count = await page.evaluate(() => window.__homeSectionEntrances.length);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await enterSection(page, "#learning-journal", "journal");
  expect(await page.evaluate(() => window.__homeSectionEntrances.length)).toBe(count);
});

test("keyboard focus immediately removes the entrance and the Fact or Fiction link remains usable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await recordEntrances(page, true);
  await page.goto("./");
  await enterSection(page, ".fact-home-teaser", "facts");
  const link = page.locator(".fact-home-teaser > a");
  await link.focus();
  await expect(link).toBeFocused();
  // The existing arrow focus transition is intentionally retained. Only the
  // decorative section entrance must cancel immediately on keyboard focus.
  expect(await page.locator(".fact-home-teaser").evaluate((node) => node.getAnimations({ subtree: true }).filter(
    (animation) => animation.id.startsWith("home-section:"),
  ).length)).toBe(0);
  await expect(link).toHaveCSS("opacity", "1");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/fact-or-fiction\/$/);
  await expect(page.getByRole("heading", { name: "Fact or Fiction?", exact: true })).toBeVisible();
});

test("pointer interaction cancels the section stagger before activating a control", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await recordEntrances(page, true);
  await page.goto("./");
  await enterSection(page, ".hub-preview", "hub");
  await page.locator(".hub-topic-grid > a").first().dispatchEvent("pointerdown");
  expect(await page.locator(".hub-preview").evaluate((node) => node.getAnimations({ subtree: true }).filter(
    (animation) => animation.id.startsWith("home-section:"),
  ).length)).toBe(0);
  await expect(page.locator(".hub-topic-grid > a").first()).toHaveCSS("opacity", "1");
});

test("changing to reduced motion cancels both active fades and pending delays", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await recordEntrances(page, true);
  await page.goto("./");
  await enterSection(page, "#learning-journal", "journal");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expectSettled(page);
  const count = await page.evaluate(() => window.__homeSectionEntrances.length);
  await page.locator("#official-guidance").evaluate((node) => node.scrollIntoView({ behavior: "instant" }));
  await expectSettled(page);
  expect(await page.evaluate(() => window.__homeSectionEntrances.length)).toBe(count);
});

for (const mode of ["reduced-motion", "no-observer", "no-animate"] as const) {
  test("all requested sections remain immediately readable with " + mode, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: mode === "reduced-motion" ? "reduce" : "no-preference" });
    if (mode === "no-observer") await page.addInitScript(() => { Reflect.deleteProperty(window, "IntersectionObserver"); });
    if (mode === "no-animate") await page.addInitScript(() => { Reflect.deleteProperty(Element.prototype, "animate"); });
    else await recordEntrances(page);
    await page.goto("./");
    await expect(page.locator("#home-title")).toBeVisible();
    await expectSettled(page);
    for (const section of sections) {
      await page.locator(section.selector).evaluate((node) => node.scrollIntoView({ behavior: "instant" }));
      await expect(page.locator(section.selector).getByRole("heading", { level: 2 })).toBeInViewport();
    }
    if (mode !== "no-animate") expect(await page.evaluate(() => window.__homeSectionEntrances)).toEqual([]);
    await expectSettled(page);
    await page.locator(".fact-home-teaser > a").click();
    await expect(page).toHaveURL(/\/fact-or-fiction\/$/);
  });
}

test("staggered sections remain readable on a narrow Arabic layout", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 700 });
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.addInitScript(() => localStorage.setItem("mnli-language", "ar"));
  await recordEntrances(page);
  await page.goto("./");
  await expect(page.locator("html")).toHaveAttribute("lang", "ar");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  for (const section of sections) await enterSection(page, section.selector, section.key);
  await expectSettled(page);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(321);
  await expect(page.locator(".hub-topic-grid > a")).toHaveCount(6);
});

test("lower section links retain their destinations and keyboard navigation through the hub", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await recordEntrances(page, true);
  await page.goto("./");
  await expect(page.locator(".fact-home-teaser > a")).toHaveAttribute("href", "fact-or-fiction/");
  await expect(page.locator(".hub-preview > div > a")).toHaveAttribute("href", "resources/");
  const topics = ["work", "protection", "study", "family", "arrival", "rights"];
  await expect(page.locator(".hub-topic-grid > a")).toHaveCount(topics.length);
  for (const [index, topic] of topics.entries()) {
    await expect(page.locator(".hub-topic-grid > a").nth(index)).toHaveAttribute("href", "resources/?topic=" + topic + "#resource-browser");
  }
  await expect(page.locator("#official-guidance .source-method-link")).toHaveAttribute("href", "about/#source-method");
  const sources = page.locator("#official-guidance .source-list > a");
  await expect(sources).toHaveCount(5);
  for (const source of await sources.all()) {
    await expect(source).toHaveAttribute("href", /^https:\/\//);
    await expect(source).toHaveAttribute("target", "_blank");
    await expect(source).toHaveAttribute("rel", /noreferrer/);
  }
  // Keep the no-JavaScript guidance destinations aligned with the real homepage.
  const fallbackSources = await page.locator("noscript").evaluate((node) => {
    const template = document.createElement("template");
    template.innerHTML = node.textContent || "";
    return Array.from(template.content.querySelectorAll("#official-guidance a"), (link) => link.getAttribute("href"));
  });
  expect(fallbackSources).toEqual(await sources.evaluateAll((links) => links.map((link) => link.getAttribute("href"))));

  await enterSection(page, ".hub-preview", "hub");
  await page.locator(".hub-preview > div > a").focus();
  await page.keyboard.press("Tab");
  await expect(page.locator(".hub-topic-grid > a").first()).toBeFocused();
  expect(await page.locator(".hub-preview").evaluate((node) => node.getAnimations({ subtree: true }).filter(
    (animation) => animation.id.startsWith("home-section:"),
  ).length)).toBe(0);
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/resources\/\?topic=work#resource-browser$/);
  await expect(page.locator(".resources-hero h1")).toBeVisible();
});
