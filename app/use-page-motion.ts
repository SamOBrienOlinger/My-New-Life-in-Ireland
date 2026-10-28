"use client";

import { useEffect, useRef, type RefObject } from "react";

const motionPreference = "(prefers-reduced-motion: reduce)";

/** Decorative entrances never control visibility, focus, layout or saved state. */
export function usePageMotion(rootRef: RefObject<HTMLElement | null>, contentKey: string, stageKey: string | null) {
  const revealed = useRef(new Set<string>());

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const preference = window.matchMedia(motionPreference);
    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const animations = new Map<HTMLElement, Animation>();
    let observer: IntersectionObserver | undefined;

    function settle(target: HTMLElement) {
      revealed.current.add(target.dataset.reveal!);
      observer?.unobserve(target);
      animations.get(target)?.cancel();
      animations.delete(target);
    }

    function reveal(target: HTMLElement, delay: number) {
      observer?.unobserve(target);
      const alreadyRevealed = revealed.current.has(target.dataset.reveal!);
      revealed.current.add(target.dataset.reveal!);
      if (alreadyRevealed || preference.matches || typeof target.animate !== "function" || target.contains(document.activeElement)) return;

      // Gentle, explicitly staggered reveals are reserved for the lower home
      // sections. Keep the existing short animation elsewhere on the site.
      const gentle = target.dataset.revealMotion === "gentle";
      const requestedDelay = Number(target.dataset.revealDelay ?? delay);
      const stagger = Number.isFinite(requestedDelay)
        ? Math.min(Math.max(requestedDelay, 0), 420)
        : delay;

      // Do not hide an unrevealed section or use backwards/forwards fill:
      // text stays readable without JS, with reduced motion or while loading.
      const animation = target.animate([
        { opacity: gentle ? .82 : .9, transform: gentle ? "translateY(14px)" : "translateY(10px)" },
        { opacity: 1, transform: "translateY(0)" },
      ], {
        duration: gentle ? 600 : 360,
        delay: gentle ? stagger : delay,
        easing: "cubic-bezier(.22,.8,.25,1)",
      });
      animations.set(target, animation);
      animation.onfinish = () => animations.delete(target);
    }

    function stopForInteraction(event: Event) {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest<HTMLElement>("[data-reveal]");
      if (target && root?.contains(target)) settle(target);
    }

    function stopForPreference() {
      if (!preference.matches) return;
      observer?.disconnect();
      targets.forEach(settle);
    }

    if (preference.matches || !("IntersectionObserver" in window)) {
      targets.forEach(settle);
    } else {
      observer = new IntersectionObserver((entries) => {
        let index = 0;
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal(entry.target as HTMLElement, Math.min(index++ * 40, 80));
        });
      }, { threshold: 0, rootMargin: "0px 0px -20px 0px" });
      targets.forEach((target) => {
        if (!revealed.current.has(target.dataset.reveal!)) observer?.observe(target);
      });
    }

    root.addEventListener("focusin", stopForInteraction);
    root.addEventListener("pointerdown", stopForInteraction);
    preference.addEventListener("change", stopForPreference);
    return () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      root.removeEventListener("focusin", stopForInteraction);
      root.removeEventListener("pointerdown", stopForInteraction);
      preference.removeEventListener("change", stopForPreference);
    };
  }, [rootRef, contentKey]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !stageKey) return;
    const preference = window.matchMedia(motionPreference);
    if (preference.matches) return;

    // The focused heading, answer controls and live region remain stationary.
    const animations = Array.from(root.querySelectorAll<HTMLElement>("[data-stage-copy]"))
      .filter((target) => typeof target.animate === "function")
      .map((target) => target.animate([{ opacity: .9 }, { opacity: 1 }], { duration: 180, easing: "ease-out" }));
    const stop = () => animations.forEach((animation) => animation.cancel());
    const stopForInteraction = (event: Event) => {
      if (event.target instanceof Element && event.target.matches("button, a, input, select, [role=radio]")) stop();
    };
    const stopForPreference = () => { if (preference.matches) stop(); };
    root.addEventListener("focusin", stopForInteraction);
    preference.addEventListener("change", stopForPreference);
    return () => {
      stop();
      root.removeEventListener("focusin", stopForInteraction);
      preference.removeEventListener("change", stopForPreference);
    };
  }, [rootRef, stageKey]);
}
