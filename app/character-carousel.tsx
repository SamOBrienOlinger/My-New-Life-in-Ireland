"use client";

import { useEffect, useId, useRef, useState, type FocusEvent, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CharacterCarouselCopy } from "./character-carousel-copy";

type Direction = "ltr" | "rtl";

type CharacterCarouselProps = {
  children: ReactNode;
  itemIds: string[];
  selectedId: string;
  direction: Direction;
  label: string;
  copy: CharacterCarouselCopy;
};

type Position = {
  start: number;
  end: number;
  total: number;
  previous: boolean;
  next: boolean;
};

const edgeTolerance = 2;
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function cardsIn(viewport: HTMLElement) {
  return Array.from(viewport.querySelectorAll<HTMLElement>(".character-carousel-track > .character-card"));
}

function viewportEdges(viewport: HTMLElement) {
  const rect = viewport.getBoundingClientRect();
  const style = getComputedStyle(viewport);
  const left = rect.left + viewport.clientLeft;
  return {
    left: left + (Number.parseFloat(style.scrollPaddingLeft) || 0),
    right: left + viewport.clientWidth - (Number.parseFloat(style.scrollPaddingRight) || 0),
  };
}

/** Reveal only the horizontal scroll container; never scroll the document. */
function revealCard(viewport: HTMLElement, card: HTMLElement) {
  const bounds = viewportEdges(viewport);
  const rect = card.getBoundingClientRect();
  const delta = rect.left < bounds.left - edgeTolerance
    ? rect.left - bounds.left
    : rect.right > bounds.right + edgeTolerance ? rect.right - bounds.right : 0;
  if (delta) viewport.scrollBy({ left: delta, behavior: "instant" });
}

function readPosition(viewport: HTMLElement, cards: HTMLElement[], direction: Direction): Position {
  if (!cards.length) return { start: 0, end: 0, total: 0, previous: false, next: false };

  const bounds = viewportEdges(viewport);
  const rects = cards.map((card) => card.getBoundingClientRect());
  const visible: number[] = [];
  const intersecting: number[] = [];
  rects.forEach((rect, index) => {
    const overlap = Math.min(rect.right, bounds.right) - Math.max(rect.left, bounds.left);
    if (overlap > edgeTolerance) intersecting.push(index);
    // A small preview of the next card does not inflate the announced range.
    if (overlap >= Math.min(rect.width, bounds.right - bounds.left) / 2) visible.push(index);
  });
  const range = visible.length ? visible : intersecting;
  const first = rects[0];
  const last = rects[rects.length - 1];

  return {
    start: range.length ? range[0] + 1 : 0,
    end: range.length ? range[range.length - 1] + 1 : 0,
    total: cards.length,
    previous: direction === "rtl"
      ? first.right > bounds.right + edgeTolerance
      : first.left < bounds.left - edgeTolerance,
    next: direction === "rtl"
      ? last.left < bounds.left - edgeTolerance
      : last.right > bounds.right + edgeTolerance,
  };
}

/** Browsing is independent of selection; the existing radio group owns keys. */
export function CharacterCarousel({ children, itemIds, selectedId, direction, label, copy }: CharacterCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position | null>(null);
  const id = useId();
  const viewportId = `${id}-viewport`;
  const instructionsId = `${id}-instructions`;
  // The parent can pass a freshly mapped array without resetting the viewport.
  const itemsKey = JSON.stringify(itemIds);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const cards = cardsIn(viewport);
    const preference = window.matchMedia(reducedMotionQuery);
    let frame = 0;
    let preserveVisibility = true;
    let resetEmptySelection = true;

    function measure() {
      frame = 0;
      if (!viewport) return;
      if (preserveVisibility) {
        const focused = document.activeElement instanceof Element
          ? document.activeElement.closest<HTMLElement>(".character-card") : null;
        const selected = cards.find((card) => card.id === `character-${selectedId}`);
        const target = focused && viewport.contains(focused) ? focused : selected;
        if (target) {
          revealCard(viewport, target);
        } else if (resetEmptySelection && cards[0]) {
          const bounds = viewportEdges(viewport);
          const first = cards[0].getBoundingClientRect();
          viewport.scrollBy({ left: direction === "rtl" ? first.right - bounds.right : first.left - bounds.left, behavior: "instant" });
        }
      }
      preserveVisibility = false;
      resetEmptySelection = false;
      const next = readPosition(viewport, cards, direction);
      setPosition((current) => current && current.start === next.start && current.end === next.end
        && current.total === next.total && current.previous === next.previous && current.next === next.next
        ? current : next);
    }

    function scheduleMeasure() {
      if (!frame) frame = window.requestAnimationFrame(measure);
    }

    function resize() {
      preserveVisibility = true;
      scheduleMeasure();
    }

    function motionChanged() {
      if (preference.matches) viewport?.scrollBy({ left: 0, behavior: "instant" });
      scheduleMeasure();
    }

    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(resize);
    observer?.observe(viewport);
    cards.forEach((card) => observer?.observe(card));
    viewport.addEventListener("scroll", scheduleMeasure, { passive: true });
    window.addEventListener("resize", resize, { passive: true });
    preference.addEventListener("change", motionChanged);
    scheduleMeasure();

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
      viewport.removeEventListener("scroll", scheduleMeasure);
      window.removeEventListener("resize", resize);
      preference.removeEventListener("change", motionChanged);
    };
  }, [itemsKey, selectedId, direction, label, copy.instructions, copy.range]);

  function move(step: -1 | 1) {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const cards = cardsIn(viewport);
    const bounds = viewportEdges(viewport);
    const positions = cards.map((card) => {
      const rect = card.getBoundingClientRect();
      return { card, distance: direction === "rtl" ? bounds.right - rect.right : rect.left - bounds.left };
    });
    const target = step === 1
      ? positions.find((item) => item.distance > edgeTolerance)
      : positions.reverse().find((item) => item.distance < -edgeTolerance);
    if (!target) return;
    viewport.scrollBy({
      left: direction === "rtl" ? -target.distance : target.distance,
      behavior: window.matchMedia(reducedMotionQuery).matches ? "instant" : "smooth",
    });
  }

  function revealFocusedCard(event: FocusEvent<HTMLDivElement>) {
    const viewport = viewportRef.current;
    const card = event.target.closest<HTMLElement>(".character-card");
    if (viewport && card && viewport.contains(card)) revealCard(viewport, card);
  }

  const range = position ? copy.range
    .replaceAll("{start}", String(position.start))
    .replaceAll("{end}", String(position.end))
    .replaceAll("{total}", String(position.total)) : "";
  const PreviousIcon = direction === "rtl" ? ChevronRight : ChevronLeft;
  const NextIcon = direction === "rtl" ? ChevronLeft : ChevronRight;

  return (
    <div className="character-carousel" role="region" aria-label={label} aria-describedby={instructionsId} dir={direction}>
      <p className="character-carousel-instructions" id={instructionsId}>{copy.instructions}</p>
      {/* Skip Firefox's extra scroll-container Tab stop; the radio group and buttons provide keyboard access. */}
      <div className="character-carousel-viewport" id={viewportId} ref={viewportRef} tabIndex={-1} onFocusCapture={revealFocusedCard}>
        {children}
      </div>
      <div className="character-carousel-controls">
        <button className="carousel-arrow" type="button" aria-label={copy.previous} title={copy.previous}
          aria-controls={viewportId} disabled={!position?.previous} onClick={() => move(-1)}>
          <PreviousIcon size={22} aria-hidden="true" />
        </button>
        <span className="character-carousel-status" role="status" aria-live="polite" aria-atomic="true">{range}</span>
        <button className="carousel-arrow" type="button" aria-label={copy.next} title={copy.next}
          aria-controls={viewportId} disabled={!position?.next} onClick={() => move(1)}>
          <NextIcon size={22} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
