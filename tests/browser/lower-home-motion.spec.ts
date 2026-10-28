import { expect, test, type Page } from "@playwright/test";

// Run these motion tests in addition to the site's default reduced-motion
// browser suite: the default suite intentionally requests reduced motion.
type RevealObservation = { id: string; duration: number; delay: number };
type MotionWindow = Window & { __gentleReveals?: RevealObservation[] };

async function captureReveals(page: Page) {
  await page.addInitScript(() => {
    const original = Element.prototype.animate;
    const w = window as MotionWindow;
    w.__gentleReveals = [];
    Element.prototype.animate = function(keyframes, options) {
      const element = this as HTMLElement;
      if (element.dataset.revealMotion === "gentle") {
        const timing = options as KeyframeAnimationOptions;
        w.__gentleReveals!.push({
          id: element.dataset.reveal || "",
          duration: Number(timing.duration),
          delay: Number(timing.delay),
        });
      }
      return original.call(this, keyframes, options);
    };
  });
}

async function observed(page: Page, name: string): Promise<RevealObservation | undefined> {
  return page.evaluate((id) =>
    (window as MotionWindow).__gentleReveals?.find((entry) => entry.id === id), name);
}

const sections = [
  { title: "journal-heading", follow: "journal-storage", delay: 210 },
  { title: "facts-heading", follow: "facts-action", delay: 300 },
  { title: "hub-heading", follow: "hub-topic-rights", delay: 420 },
  { title: "check-heading", follow: "check-source-0", delay: 80 },
] as const;

test("the four lower homepage sections fade and rise gently with staggered delays", async ({ page }) => {
  test.slow();
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await captureReveals(page);
  await page.goto("./");

  for (const item of sections) {
    const heading = page.locator('[data-reveal="' + item.title + '"]');
    const following = page.locator('[data-reveal="' + item.follow + '"]');
    await expect(heading).toBeVisible();
    await expect(following).toBeVisible();

    await heading.scrollIntoViewIfNeeded();
    await expect.poll(() => observed(page, item.title), { timeout: 6000 }).toMatchObject({
      id: item.title, duration: 600, delay: 110,
    });

    await following.scrollIntoViewIfNeeded();
    await expect.poll(() => observed(page, item.follow), { timeout: 6000 }).toMatchObject({
      id: item.follow, duration: 600, delay: item.delay,
    });
  }

  // The entrance runs once on scrolling in, rather than replaying endlessly.
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.locator('[data-reveal="facts-heading"]').scrollIntoViewIfNeeded();
  const times = await page.evaluate(() =>
    (window as MotionWindow).__gentleReveals?.filter((entry) => entry.id === "facts-heading").length);
  expect(times).toBe(1);

  const layout = await page.evaluate(() => ({
    page: document.documentElement.scrollWidth,
    view: document.documentElement.clientWidth,
  }));
  expect(layout.page).toBeLessThanOrEqual(layout.view + 1);
});

test("reduced-motion visitors see all the content without entrance animations", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await captureReveals(page);
  await page.goto("./");
  for (const name of ["journal-heading", "journal-storage", "facts-heading", "facts-action",
    "hub-heading", "hub-topic-rights", "check-heading", "check-source-0"]) {
    const target = page.locator('[data-reveal="' + name + '"]');
    await target.scrollIntoViewIfNeeded();
    await expect(target).toBeVisible();
    await expect(target).toHaveAttribute("data-reveal-motion", "gentle");
    const opacity = await target.evaluate((element) => getComputedStyle(element).opacity);
    expect(opacity, name + " should be fully readable").toBe("1");
  }
  expect(await page.evaluate(() => (window as MotionWindow).__gentleReveals?.length)).toBe(0);
});

test("all staggered links and calls to action remain usable", async ({ page }) => {
  await page.goto("./");
  const hub = page.locator(".hub-preview");
  await expect(hub.locator('a[data-reveal-motion="gentle"]')).toHaveCount(7);
  const cta = hub.locator('a[data-reveal="hub-action"]');
  await expect(cta).toHaveAttribute("href", "resources/");
  const facts = page.locator('a[data-reveal="facts-action"]');
  await expect(facts).toHaveAttribute("href", "fact-or-fiction/");
  const check = page.locator(".guidance-section");
  await expect(check.locator('a[data-reveal^="check-source-"]').first()).toHaveAttribute("target", "_blank");
  await facts.click();
  await expect(page).toHaveURL(/fact-or-fiction\/$/);
  await expect(page.getByRole("heading", { name: "Fact or Fiction?", exact: true })).toBeVisible();
});
