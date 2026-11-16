"use client";

import { useCallback, useEffect, useState } from "react";

export function usePageTopic<T extends string>(normalise: (raw: string | null) => T) {
  const [topic, setTopic] = useState(() => normalise(null));

  useEffect(() => {
    function restore() {
      const url = new URL(window.location.href);
      const requested = url.searchParams.get("topic");
      const available = normalise(requested);
      if (requested !== null && requested !== available) {
        url.searchParams.delete("topic");
        window.history.replaceState(window.history.state, "", url);
      }
      setTopic(available);
    }
    const frame = window.requestAnimationFrame(restore);
    window.addEventListener("popstate", restore);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("popstate", restore);
    };
  }, [normalise]);

  const selectTopic = useCallback((next: T, hash?: string, replace = false) => {
    const url = new URL(window.location.href);
    if (next === "all") url.searchParams.delete("topic");
    else url.searchParams.set("topic", next);
    if (hash !== undefined) url.hash = hash;
    if (url.href !== window.location.href) {
      if (replace) window.history.replaceState(window.history.state, "", url);
      else window.history.pushState(window.history.state, "", url);
    }
    setTopic(next);
  }, []);

  return [topic, selectTopic] as const;
}
