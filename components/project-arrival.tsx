"use client";

import { useEffect } from "react";

export function ProjectArrival() {
  useEffect(() => {
    let frame = 0;
    const emphasize = () => {
      let id: string;
      try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
      const target = document.getElementById(id);
      if (!target?.classList.contains("project-story")) return;
      document.querySelectorAll("[data-arrival]").forEach((element) => element.removeAttribute("data-arrival"));
      target.focus({ preventScroll: true });
      frame = requestAnimationFrame(() => target.setAttribute("data-arrival", ""));
    };
    const followLink = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const url = new URL(link.href);
      if (url.origin === location.origin && url.pathname === location.pathname && url.hash) {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(emphasize);
      }
    };
    emphasize();
    window.addEventListener("hashchange", emphasize);
    document.addEventListener("click", followLink);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", emphasize);
      document.removeEventListener("click", followLink);
    };
  }, []);
  return null;
}
