import { expect, test, type Page } from "@playwright/test";
import { stepsByRoute } from "../../app/journey-data";

type SpeechTestState = {
  cancelled: number;
  utterances: { text: string; lang: string; rate: number }[];
  setVoiceLanguages: (languages: string[]) => void;
};

declare global {
  interface Window { __readingSpeechTest: SpeechTestState }
}

async function mockSpeech(page: Page, languages: string[] = ["en-IE"]) {
  await page.addInitScript((initialLanguages) => {
    class MockUtterance {
      text: string;
      lang = "";
      rate = 1;
      voice: { lang: string } | null = null;
      onstart: (() => void) | null = null;
      onpause: (() => void) | null = null;
      onresume: (() => void) | null = null;
      onend: (() => void) | null = null;
      onerror: (() => void) | null = null;
      constructor(text: string) { this.text = text; }
    }
    let current: MockUtterance | null = null;
    let voiceLanguages = initialLanguages;
    const events = new EventTarget();
    const state: SpeechTestState = {
      cancelled: 0,
      utterances: [],
      setVoiceLanguages(next) { voiceLanguages = next; events.dispatchEvent(new Event("voiceschanged")); },
    };
    const synthesis = {
      getVoices: () => voiceLanguages.map((lang, index) => ({ lang, name: lang, default: index === 0, localService: true, voiceURI: lang })),
      speak(utterance: MockUtterance) {
        current = utterance;
        state.utterances.push({ text: utterance.text, lang: utterance.lang, rate: utterance.rate });
        queueMicrotask(() => { if (current === utterance) utterance.onstart?.(); });
      },
      pause() { current?.onpause?.(); },
      resume() { current?.onresume?.(); },
      cancel() { if (current) state.cancelled += 1; current?.onerror?.(); current = null; },
      addEventListener: events.addEventListener.bind(events),
      removeEventListener: events.removeEventListener.bind(events),
    };
    window.__readingSpeechTest = state;
    Object.defineProperty(window, "SpeechSynthesisUtterance", { configurable: true, value: MockUtterance });
    Object.defineProperty(window, "speechSynthesis", { configurable: true, value: synthesis });
  }, languages);
}

async function beginAndOpenAudio(page: Page) {
  await page.goto("./");
  await page.getByRole("link", { name: "Walk with Kwame", exact: true }).click();
  await expect(page.locator("#decision-title")).toHaveText(stepsByRoute.critical[0].title);
  const audio = page.locator(".reading-audio");
  // The main page may group these tools in a native disclosure.
  const closedParent = page.locator("details:not([open])").filter({ has: audio });
  if (await closedParent.count()) await closedParent.locator(":scope > summary").click();
  await expect(audio).toBeVisible();
  return audio;
}

test("audio uses the chosen speed and supports pause, resume and stop", async ({ page }) => {
  await mockSpeech(page);
  const audio = await beginAndOpenAudio(page);
  await expect(audio.getByRole("button", { name: "Listen", exact: true })).toBeEnabled();
  await audio.locator(".reading-audio__options > summary").click();
  await audio.getByRole("combobox", { name: "Reading speed", exact: true }).selectOption("1.25");
  await audio.getByRole("button", { name: "Listen", exact: true }).click();
  await expect(audio).toHaveAttribute("data-audio-state", "speaking");
  const utterances = await page.evaluate(() => window.__readingSpeechTest.utterances);
  expect(utterances).toHaveLength(1);
  expect(utterances[0].lang).toBe("en-IE");
  expect(utterances[0].rate).toBe(1.25);
  expect(utterances[0].text).toContain(stepsByRoute.critical[0].question);
  await audio.getByRole("button", { name: "Pause", exact: true }).click();
  await expect(audio).toHaveAttribute("data-audio-state", "paused");
  await audio.getByRole("button", { name: "Resume audio", exact: true }).click();
  await expect(audio).toHaveAttribute("data-audio-state", "speaking");
  await audio.getByRole("button", { name: "Stop", exact: true }).click();
  await expect(audio).toHaveAttribute("data-audio-state", "ready");
  await expect(audio.getByRole("button", { name: "Stop", exact: true })).toBeDisabled();
  expect(await page.evaluate(() => window.__readingSpeechTest.cancelled)).toBe(1);
});

test("audio waits for a matching voice and stops when the language changes", async ({ page }) => {
  await mockSpeech(page, ["fr-FR"]);
  const audio = await beginAndOpenAudio(page);
  await expect(audio.getByRole("button", { name: "Listen", exact: true })).toBeDisabled();
  await expect(audio.getByRole("status")).toHaveText("No voice for this language is available on this device.");
  expect(await page.evaluate(() => window.__readingSpeechTest.utterances)).toHaveLength(0);
  await page.evaluate(() => window.__readingSpeechTest.setVoiceLanguages(["en-IE", "fr-FR"]));
  await expect(audio.getByRole("button", { name: "Listen", exact: true })).toBeEnabled();
  await audio.getByRole("button", { name: "Listen", exact: true }).click();
  await expect(audio).toHaveAttribute("data-audio-state", "speaking");
  await page.getByRole("combobox", { name: "Language", exact: true }).selectOption("ar");
  await expect(audio.getByRole("button", { name: "استمع", exact: true })).toBeDisabled();
  await expect(audio.getByRole("status")).toHaveText("لا يتوفر على هذا الجهاز صوت لهذه اللغة.");
  expect(await page.evaluate(() => window.__readingSpeechTest.cancelled)).toBe(1);
  expect(await page.evaluate(() => window.__readingSpeechTest.utterances)).toHaveLength(1);
});

test("audio follows practice mode and checked feedback while retaining reading preferences", async ({ page }) => {
  await mockSpeech(page);
  const audio = await beginAndOpenAudio(page);
  await audio.locator(".reading-audio__options > summary").click();
  await audio.getByRole("combobox", { name: "Reading speed", exact: true }).selectOption("1.25");
  await audio.getByLabel("Read the question and choices", { exact: true }).uncheck();
  await audio.getByRole("button", { name: "Listen", exact: true }).click();
  await expect(audio).toHaveAttribute("data-audio-state", "speaking");
  expect(await page.evaluate(() => window.__readingSpeechTest.utterances.at(-1)?.text)).toContain(stepsByRoute.critical[0].plainLaw);

  await page.getByRole("button", { name: "Try first", exact: true }).click();
  await expect(audio).toHaveAttribute("data-audio-state", "ready");
  expect(await page.evaluate(() => window.__readingSpeechTest.cancelled)).toBe(1);
  await audio.locator(".reading-audio__options > summary").click();
  await expect(audio.getByRole("combobox", { name: "Reading speed", exact: true })).toHaveValue("1.25");
  await expect(audio.getByLabel("Read the question and choices", { exact: true })).not.toBeChecked();
  await audio.getByRole("button", { name: "Listen", exact: true }).click();
  await expect(audio).toHaveAttribute("data-audio-state", "speaking");
  const practiceText = await page.evaluate(() => window.__readingSpeechTest.utterances.at(-1)?.text);
  expect(practiceText).toContain(stepsByRoute.critical[0].scene);
  expect(practiceText).not.toContain(stepsByRoute.critical[0].plainLaw);
  expect(practiceText).not.toContain(stepsByRoute.critical[0].question);

  await page.locator('[id="0-verify"]').click();
  await page.getByRole("button", { name: "Check decision", exact: true }).click();
  await expect(audio).toHaveAttribute("data-audio-state", "ready");
  expect(await page.evaluate(() => window.__readingSpeechTest.cancelled)).toBe(2);
  await audio.getByRole("button", { name: "Listen", exact: true }).click();
  await expect(audio).toHaveAttribute("data-audio-state", "speaking");
  const checkedText = await page.evaluate(() => window.__readingSpeechTest.utterances.at(-1)?.text);
  const checkedChoice = stepsByRoute.critical[0].choices.find((choice) => choice.id === "verify")!;
  expect(checkedText).toContain(checkedChoice.feedback);
  expect(checkedText).toContain(checkedChoice.consequence);
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await expect(page.locator("#decision-title")).toHaveText(stepsByRoute.critical[1].title);
  await expect(audio).toHaveAttribute("data-audio-state", "ready");
  expect(await page.evaluate(() => window.__readingSpeechTest.cancelled)).toBe(3);
  expect(await page.evaluate(() => window.__readingSpeechTest.utterances)).toHaveLength(3);
});

test("glossary definitions open by keyboard without leaving the decision", async ({ page }) => {
  await mockSpeech(page);
  await beginAndOpenAudio(page);
  const glossary = page.locator(".reading-glossary");
  await glossary.locator(":scope > summary").focus();
  await glossary.locator(":scope > summary").press("Enter");
  const registration = glossary.locator(".reading-glossary__term").filter({ hasText: "Recording an immigration permission" });
  await registration.locator(":scope > summary").focus();
  await registration.locator(":scope > summary").press("Enter");
  await expect(registration.getByText("Recording an immigration permission and its conditions with the Irish immigration authorities, when registration is required.", { exact: true })).toBeVisible();
  await expect(registration.getByRole("link")).toHaveAttribute("href", "https://www.irishimmigration.ie/registering-your-immigration-permission/");
  await registration.locator(":scope > summary").press("Enter");
  await expect(registration.locator(":scope > summary")).toBeFocused();
  await expect(page.locator("#decision-title")).toHaveText(stepsByRoute.critical[0].title);
});
