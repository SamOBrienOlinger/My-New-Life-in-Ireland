"use client";

import { useEffect, useRef, type RefObject } from "react";
import { homeSectionMotionSelector, startHomeSectionMotion } from "./home-section-motion";

const motionPreference = "(prefers-reduced-motion: reduce)";

/** Decorative entrances never block interaction, alter layout or change saved state. */
export function usePageMotion(rootRef: RefObject<HTMLElement | null>, contentKey: string, stageKey: string | null) {
  const revealed = useRef(new Set<string>());

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const stopHomeSections = startHomeSectionMotion(root, revealed.current);
    const preference = window.matchMedia(motionPreference);
    // The lower homepage sections have their own slower grouped entrance.
    // Exclude their existing data-reveal markers to avoid double animations.
    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"))
      .filter((target) => !target.closest(homeSectionMotionSelector));
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

      // No backwards/forwards fill: the normal, readable styles apply during
      // any short delay and after the entrance, including hover transforms.
      const animation = target.animate([
        { opacity: .9, transform: "translateY(10px)" },
        { opacity: 1, transform: "translateY(0)" },
      ], { duration: 360, delay, easing: "cubic-bezier(.22,.8,.25,1)" });
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
      stopHomeSections();
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
