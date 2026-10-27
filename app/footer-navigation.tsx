"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { ui, type Language } from "./i18n";
import { factNavLabel } from "./fact-or-fiction/locales";
import { searchText } from "./search/search-copy";

export type SitePage = "home" | "journeys" | "about" | "resources" | "facts" | "search";
type NavItem = { id: SitePage | "official"; href: string; label: string };

const footerCopy: Record<Language, { navigation: string; backToTop: string }> = {
  en: { navigation: "Footer navigation", backToTop: "Back to the top" },
  ga: { navigation: "Nascleanúint na buntásca", backToTop: "Ar ais go barr an leathanaigh" },
  ar: { navigation: "التنقل في تذييل الصفحة", backToTop: "العودة إلى أعلى الصفحة" },
  zh: { navigation: "页脚导航", backToTop: "返回顶部" },
  fr: { navigation: "Navigation de pied de page", backToTop: "Retour en haut" },
  pt: { navigation: "Navegação do rodapé", backToTop: "Voltar ao topo" },
  es: { navigation: "Navegación del pie de página", backToTop: "Volver arriba" },
  nl: { navigation: "Navigatie in de voettekst", backToTop: "Terug naar boven" },
  fa: { navigation: "ناوبری پایین صفحه", backToTop: "بازگشت به بالای صفحه" },
  xh: { navigation: "Ukuhamba emazantsi ephepha", backToTop: "Buyela phezulu" },
};

/**
 * Single source of truth for the mobile menu and the footer. All URLs stay
 * relative to the existing GitHub Pages base directory on every route.
 * The active story is not exited by Back to top (the button only scrolls).
 */
export function primarySiteLinks(language: Language, rootPrefix: string, currentPage: SitePage): NavItem[] {
  const t = ui[language];
  const root = rootPrefix || "./";
  const onHome = currentPage === "home";
  return [
    { id: "home", href: onHome ? "#top" : root, label: t.home },
    { id: "journeys", href: onHome ? "#route-finder" : root + "#route-finder", label: t.journeys },
    { id: "about", href: rootPrefix + "about/", label: t.about },
    { id: "resources", href: rootPrefix + "resources/", label: t.hub },
    { id: "facts", href: rootPrefix + "fact-or-fiction/", label: factNavLabel(language) },
    { id: "search", href: rootPrefix + "search/", label: searchText[language].nav },
    { id: "official", href: onHome ? "#official-guidance" : root + "#official-guidance", label: t.official },
  ];
}

function backToTop() {
  // Keep keyboard users and screen readers at the start of the page as well
  // as moving the visible viewport. Do not change the URL or journey state.
  const main = document.querySelector<HTMLElement>("main");
  if (main) {
    if (!main.hasAttribute("tabindex")) main.tabIndex = -1;
    main.focus({ preventScroll: true });
  }
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
}

export function FooterNavigation({
  language,
  rootPrefix,
  currentPage,
}: {
  language: Language;
  rootPrefix: string;
  currentPage: SitePage;
}) {
  const labels = footerCopy[language];
  const links = primarySiteLinks(language, rootPrefix, currentPage);
  const footerTopButtonRef = useRef<HTMLButtonElement>(null);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    let frame = 0;
    function update() {
      frame = 0;
      const button = footerTopButtonRef.current;
      const bounds = button?.getBoundingClientRect();
      // The floating shortcut is unnecessary when the footer's own button
      // is already visible. This also prevents duplicate controls at the end.
      const footerButtonVisible = bounds !== undefined &&
        bounds.bottom > 0 && bounds.top < window.innerHeight;
      setShowFloating(window.scrollY > Math.max(480, window.innerHeight * 0.75) && !footerButtonVisible);
    }
    function schedule() {
      if (frame === 0) frame = window.requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <section className="footer-navigation-section" aria-label={labels.navigation}>
      <div className="footer-navigation-heading">
        <h2>{labels.navigation}</h2>
        <button ref={footerTopButtonRef} type="button" className="footer-back-to-top" onClick={backToTop}>
          <ArrowUp size={18} aria-hidden="true" />
          <span>{labels.backToTop}</span>
        </button>
      </div>
      <nav className="footer-navigation" aria-label={ui[language].siteName + ": " + labels.navigation}>
        {links.map((item) => (
          <a className="footer-nav-link" key={item.id} href={item.href}
            aria-current={item.id === currentPage ? "page" : undefined}>
            {item.label}
          </a>
        ))}
      </nav>
      <button type="button" className="floating-back-to-top"
        onClick={backToTop} hidden={!showFloating}>
        <ArrowUp size={18} aria-hidden="true" />
        <span>{labels.backToTop}</span>
      </button>
    </section>
  );
}
