"use client";

import { useEffect, useRef } from "react";

export function PointerRing() {
  const ring = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ring.current;
    if (!element) return;

    const suitable = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    let pulse: Animation | undefined;

    const hide = () => {
      cancelAnimationFrame(frame);
      pulse?.cancel();
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
        if (target.closest("a, button, summary")) {
          element.dataset.mode = "control";
        } else if (target.closest("[data-pointer-card], .project-story, .card-hover")) {
          element.dataset.mode = "card";
        } else {
          delete element.dataset.mode;
        }
        element.setAttribute("data-visible", "");
      });
    };

    const press = (event: PointerEvent) => {
      move(event);
      if (!suitable.matches || event.pointerType !== "mouse" || event.button !== 0) return;

      const target = event.target instanceof Element ? event.target : null;
      if (!target?.closest("a, button, summary") || target.closest("dialog")) return;

      pulse?.cancel();
      pulse = element.animate(
        [{ transform: "scale(0.78)" }, { transform: "scale(1.1)", offset: 0.6 }, { transform: "scale(1)" }],
        { duration: 230, easing: "ease-out" },
      );
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("blur", hide);
    window.addEventListener("pointerdown", press, { passive: true });
    document.documentElement.addEventListener("pointerleave", hide);
    suitable.addEventListener("change", hide);

    return () => {
      hide();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("blur", hide);
      window.removeEventListener("pointerdown", press);
      document.documentElement.removeEventListener("pointerleave", hide);
      suitable.removeEventListener("change", hide);
    };
  }, []);

  return <span ref={ring} className="pointer-ring" aria-hidden="true" />;
}
