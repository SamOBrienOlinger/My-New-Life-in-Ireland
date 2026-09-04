"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { LanguageControl, type Language } from "./i18n";

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

  useEffect(() => {
    if (!open) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    function closeOnOutsidePress(event: PointerEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    }

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePress);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePress);
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
        aria-controls="mobile-navigation-panel"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        <span>{open ? closeLabel : menuLabel}</span>
      </button>
      <div className={`mobile-navigation-panel${open ? " open" : ""}`} id="mobile-navigation-panel">
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
