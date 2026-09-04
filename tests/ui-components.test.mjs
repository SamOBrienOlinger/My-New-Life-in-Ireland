import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test, { after } from "node:test";
import { fileURLToPath } from "node:url";

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";

const root = fileURLToPath(new URL("..", import.meta.url));
const vite = await createServer({
  appType: "custom",
  configFile: false,
  root,
  resolve: { alias: { "@": root } },
  server: { middlewareMode: true },
});

after(async () => {
  await vite.close();
});

async function readCssTree(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const contents = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        return readCssTree(entryPath);
      }
      return entry.name.endsWith(".css") ? readFile(entryPath, "utf8") : "";
    }),
  );
  return contents.join("\n");
}

test("emits the public launch and reduced-motion styles", async () => {
  const css = await readCssTree(path.join(root, "dist"));

  assert.match(css, /\.about-hero/);
  assert.match(css, /\.about-content/);
  assert.match(css, /\.site-footer/);
  assert.match(css, /\.journey-footer/);
  assert.match(css, /hero-question-reveal/);
  assert.match(css, /--question-delay:\s*\.34s/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});

test("emits mobile accessibility and safe-area protections", async () => {
  const css = await readCssTree(path.join(root, "dist"));

  assert.match(css, /\.mobile-menu-button[^}]*min-height:\s*44px/s);
  assert.match(css, /@media\s*\((?:max-width:\s*900px|width<=900px)\)/);
  assert.match(css, /\.language-control[^}]*min-height:\s*44px/s);
  assert.match(css, /\.tool-button[^}]*min-height:\s*44px/s);
  assert.match(css, /padding-inline:\s*48px 18px/);
  assert.match(css, /inset-inline-start:\s*15px/);
  assert.match(css, /\.resource-card[^}]*min-height:\s*0/s);
  assert.match(css, /safe-area-inset-bottom/);
  assert.match(css, /-webkit-text-size-adjust:\s*100%/);
});

test("ships complete selectable dictionaries for every supported language", async () => {
  const { ui } = await vite.ssrLoadModule("/app/i18n.tsx");
  const {
    additionalLanguageOptions,
    additionalRouteText,
    additionalFilterText,
    additionalCharacterText,
    additionalStageText,
    additionalJourneyText,
  } = await vite.ssrLoadModule("/app/additional-locales.ts");
  const {
    additionalAboutCopy,
    additionalResourceCopy,
    additionalTopicCopy,
    additionalTopicDescriptions,
    additionalTranslatedTitles,
    additionalOfficialSourceDescriptions,
  } = await vite.ssrLoadModule("/app/additional-page-copy.ts");

  const expected = ["zh", "fr", "pt", "es", "nl", "fa", "xh"];
  assert.deepEqual(additionalLanguageOptions.map(({ value }) => value), expected);

  for (const language of expected) {
    assert.ok(Object.keys(ui[language]).length >= Object.keys(ui.en).length);
    assert.equal(Object.keys(additionalRouteText[language]).length, 8);
    assert.equal(Object.keys(additionalFilterText[language]).length, 6);
    assert.equal(Object.keys(additionalCharacterText[language]).length, 12);
    assert.equal(Object.keys(additionalStageText[language]).length, 5);
    assert.ok(additionalJourneyText[language].plainLaw);
    assert.ok(additionalAboutCopy[language].intro);
    assert.equal(additionalResourceCopy[language].questions.length, 5);
    assert.equal(Object.keys(additionalTopicCopy[language]).length, 9);
    assert.equal(Object.keys(additionalTopicDescriptions[language]).length, 9);
    assert.equal(additionalTranslatedTitles[language].length, 24);
    assert.equal(additionalOfficialSourceDescriptions[language].length, 5);
  }
});

test("forwards progress semantics to the primitive", async () => {
  const { Progress } = await vite.ssrLoadModule("/components/ui/progress.tsx");
  const html = renderToStaticMarkup(React.createElement(Progress, { value: 37 }));

  assert.match(html, /aria-valuenow="37"/);
  assert.match(html, /aria-valuetext="37%"/);
  assert.match(html, /data-state="loading"/);
});

test("emits chart themes for the starter's media dark mode", async () => {
  const { ChartStyle } = await vite.ssrLoadModule("/components/ui/chart.tsx");
  const html = renderToStaticMarkup(
    React.createElement(ChartStyle, {
      id: "contract",
      config: {
        latency: { theme: { light: "#ffffff", dark: "#000000" } },
      },
    }),
  );

  assert.match(html, /\[data-chart=contract\]/);
  assert.match(html, /@media \(prefers-color-scheme: dark\)/);
  assert.doesNotMatch(html, /\.dark/);
});

test("renders sidebar skeletons deterministically", async () => {
  const { SidebarMenuSkeleton } = await vite.ssrLoadModule(
    "/components/ui/sidebar.tsx",
  );
  const first = renderToStaticMarkup(React.createElement(SidebarMenuSkeleton));
  const second = renderToStaticMarkup(React.createElement(SidebarMenuSkeleton));

  assert.equal(first, second);
  assert.match(first, /--skeleton-width:70%/);
});
