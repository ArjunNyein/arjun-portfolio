"use client";

import { useEffect, useRef } from "react";

export function PointerRing() {
  const ring = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ring.current;
    if (!element) return;

    const suitable = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let frame = 0;

    const hide = () => {
      cancelAnimationFrame(frame);
      element.removeAttribute("data-visible");
    };

    const move = (event: PointerEvent) => {
      if (!suitable.matches || event.pointerType !== "mouse") {
        hide();
        return;
      }

      const target = event.target instanceof Element ? event.target : null;
      if (!target || target.closest("dialog, input, textarea, select, [contenteditable], iframe")) {
        hide();
        return;
      }

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        element.style.translate = `${event.clientX}px ${event.clientY}px`;
        element.toggleAttribute("data-active", Boolean(target.closest("a, button, summary")));
        element.setAttribute("data-visible", "");
      });
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("blur", hide);
    window.addEventListener("pointerdown", hide, { passive: true });
    document.documentElement.addEventListener("pointerleave", hide);
    suitable.addEventListener("change", hide);

    return () => {
      hide();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("blur", hide);
      window.removeEventListener("pointerdown", hide);
      document.documentElement.removeEventListener("pointerleave", hide);
      suitable.removeEventListener("change", hide);
    };
  }, []);

  return <span ref={ring} className="pointer-ring" aria-hidden="true" />;
}
