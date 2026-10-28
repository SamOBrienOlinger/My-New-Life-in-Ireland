/** Gentle, one-time entrances for the lower homepage sections only. */
const sectionDefinitions = [
  {
    key: "journal",
    selector: "#learning-journal",
    items: ".journal-library-heading, .journal-storage-note, .journal-empty, .journal-library-list",
  },
  { key: "facts", selector: ".fact-home-teaser", items: ":scope > div, :scope > a" },
  { key: "hub", selector: ".hub-preview", items: ":scope > div, .hub-topic-grid > a" },
  { key: "guidance", selector: "#official-guidance", items: ".guidance-intro, .source-list > a" },
] as const;

export const homeSectionMotionSelector = sectionDefinitions.map((section) => section.selector).join(", ");

/**
 * Progressive enhancement: no hidden CSS, layout changes or timers that gate
 * content. Without motion support, every heading, link and journal stays usable.
 * The shared Set survives language changes and trips into/out of a journey.
 */
export function startHomeSectionMotion(root: HTMLElement, revealed: Set<string>): () => void {
  const sections = sectionDefinitions.flatMap((definition) => {
    const element = root.querySelector<HTMLElement>(definition.selector);
    return element ? [{ ...definition, element, revealKey: "home-section:" + definition.key }] : [];
  });
  if (!sections.length) return () => {};

  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const animations = new Map<HTMLElement, Animation>();
  let observer: IntersectionObserver | undefined;

  function settle(section: (typeof sections)[number]) {
    revealed.add(section.revealKey);
    observer?.unobserve(section.element);
    animations.forEach((animation, target) => {
      if (section.element.contains(target)) {
        animation.cancel();
        animations.delete(target);
      }
    });
  }

  function reveal(section: (typeof sections)[number]) {
    observer?.unobserve(section.element);
    if (revealed.has(section.revealKey)) return;
    revealed.add(section.revealKey);
    if (preference.matches || section.element.contains(document.activeElement)) return;

    // Query at entry, not on mount: a saved journal may have finished loading.
    const items = section.element.querySelectorAll<HTMLElement>(section.items);
    items.forEach((item, index) => {
      if (typeof item.animate !== "function") return;
      try {
        const animation = item.animate([
          { opacity: 0.35, transform: "translateY(14px)" },
          { opacity: 1, transform: "translateY(0)" },
        ], {
          id: section.revealKey + ":" + index,
          duration: 700,
          delay: 100 + Math.min(index * 100, 400),
          easing: "cubic-bezier(.22,.8,.25,1)",
          // Apply the gentle starting pose during the short stagger, then
          // release it completely so hover/focus styles retain their control.
          fill: "backwards",
        });
        animations.set(item, animation);
        animation.onfinish = () => animations.delete(item);
      } catch {
        // The readable, untransformed base styles are already in place.
      }
    });
  }

  function stopForInteraction(event: Event) {
    if (!(event.target instanceof Node)) return;
    const target = event.target;
    sections.forEach((section) => {
      if (section.element.contains(target)) settle(section);
    });
  }

  function stopForPreference() {
    if (!preference.matches) return;
    observer?.disconnect();
    sections.forEach(settle);
  }

  if (preference.matches || typeof window.IntersectionObserver !== "function") {
    sections.forEach(settle);
  } else {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const section = sections.find((candidate) => candidate.element === entry.target);
        if (section) reveal(section);
      });
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });
    sections.forEach((section) => {
      if (!revealed.has(section.revealKey)) observer?.observe(section.element);
    });
  }

  // Touch and keyboard interactions immediately cancel any pending entrance.
  root.addEventListener("focusin", stopForInteraction);
  root.addEventListener("pointerdown", stopForInteraction);
  preference.addEventListener("change", stopForPreference);
  return () => {
    observer?.disconnect();
    animations.forEach((animation) => animation.cancel());
    animations.clear();
    root.removeEventListener("focusin", stopForInteraction);
    root.removeEventListener("pointerdown", stopForInteraction);
    preference.removeEventListener("change", stopForPreference);
  };
}
