"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { LanguageControl, type Language } from "./i18n";
import "./mobile-navigation.css";

type MobileNavigationLink = {
  href: string;
  label: string;
};

export function MobileNavigation({
  links,
  language,
  setLanguage,
  languageLabel,
  menuLabel,
  closeLabel,
}: {
  links: MobileNavigationLink[];
  language: Language;
  setLanguage: (language: Language) => void;
  languageLabel: string;
  menuLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const mobileLayout = window.matchMedia("(max-width: 900px)");
    const header = wrapper.closest("header, nav");
    let hadMobileFocus = wrapper.contains(document.activeElement);
    let frame = 0;

    function rememberFocus(event: FocusEvent) {
      const target = event.target as Node;
      // A browser may move focus to the body while hiding the mobile controls.
      // A different page control is an intentional focus destination.
      if (wrapper!.contains(target)) hadMobileFocus = true;
      else if (target !== document.body && target !== document.documentElement) hadMobileFocus = false;
    }

    function forgetFocus(event: FocusEvent) {
      const next = event.relatedTarget as Node | null;
      if (next && next !== document.body && next !== document.documentElement && !wrapper!.contains(next)) hadMobileFocus = false;
      scheduleLayoutCheck();
    }

    function forgetOutsidePress(event: PointerEvent) {
      if (!wrapper!.contains(event.target as Node)) hadMobileFocus = false;
    }

    function checkLayout() {
      frame = 0;
      const active = document.activeElement;
      const focusInside = wrapper!.contains(active);
      // WebKit can coalesce media-query events during quick orientation changes.
      // Check rendered visibility after resize, once layout and focus have settled.
      if (wrapper!.getClientRects().length) {
        if (!focusInside) hadMobileFocus = false;
        return;
      }
      const recoverFocus = focusInside || (hadMobileFocus && (!active || active === document.body || active === document.documentElement));
      hadMobileFocus = false;
      setOpen(false);
      if (recoverFocus) header?.querySelector<HTMLElement>(".brand-button")?.focus({ preventScroll: true });
    }

    function scheduleLayoutCheck() {
      if (!frame) frame = window.requestAnimationFrame(checkLayout);
    }

    document.addEventListener("focusin", rememberFocus);
    document.addEventListener("pointerdown", forgetOutsidePress, { passive: true });
    wrapper.addEventListener("focusout", forgetFocus);
    window.addEventListener("resize", scheduleLayoutCheck, { passive: true });
    mobileLayout.addEventListener("change", scheduleLayoutCheck);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("focusin", rememberFocus);
      document.removeEventListener("pointerdown", forgetOutsidePress);
      wrapper.removeEventListener("focusout", forgetFocus);
      window.removeEventListener("resize", scheduleLayoutCheck);
      mobileLayout.removeEventListener("change", scheduleLayoutCheck);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const header = wrapperRef.current?.closest("header, nav");
    const visualViewport = window.visualViewport;
    let frame = 0;

    function fitPanel() {
      frame = 0;
      const panel = panelRef.current;
      if (!panel) return;
      const viewportBottom = visualViewport ? visualViewport.height + visualViewport.offsetTop : window.innerHeight;
      panel.style.setProperty("--mobile-menu-space", `${Math.max(0, viewportBottom - panel.getBoundingClientRect().top - 16)}px`);
    }

    function scheduleFit() {
      if (!frame) frame = window.requestAnimationFrame(fitPanel);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    function closeOnOutsidePress(event: PointerEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function closeOnOutsideFocus(event: FocusEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    }

    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(scheduleFit);
    if (header) observer?.observe(header);
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePress);
    document.addEventListener("focusin", closeOnOutsideFocus);
    window.addEventListener("resize", scheduleFit, { passive: true });
    window.addEventListener("scroll", scheduleFit, { passive: true });
    visualViewport?.addEventListener("resize", scheduleFit, { passive: true });
    visualViewport?.addEventListener("scroll", scheduleFit, { passive: true });
    scheduleFit();
    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePress);
      document.removeEventListener("focusin", closeOnOutsideFocus);
      window.removeEventListener("resize", scheduleFit);
      window.removeEventListener("scroll", scheduleFit);
      visualViewport?.removeEventListener("resize", scheduleFit);
      visualViewport?.removeEventListener("scroll", scheduleFit);
    };
  }, [open]);

  return (
    <div className="mobile-navigation" ref={wrapperRef}>
      <button
        ref={buttonRef}
        className="mobile-menu-button"
        type="button"
        aria-label={open ? closeLabel : menuLabel}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        <span>{open ? closeLabel : menuLabel}</span>
      </button>
      <div className={`mobile-navigation-panel${open ? " open" : ""}`} ref={panelRef} id={panelId} hidden={!open}>
        <div className="mobile-navigation-links">
          {links.map((link) => <a href={link.href} key={`${link.href}-${link.label}`} onClick={() => setOpen(false)}>{link.label}</a>)}
        </div>
        <div className="mobile-language-row">
          <span>{languageLabel}</span>
          <LanguageControl language={language} setLanguage={setLanguage} label={languageLabel} />
        </div>
      </div>
    </div>
  );
}
