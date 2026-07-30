import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";

/**
 * Adds `.is-visible` when elements enter the viewport.
 * CSS handles the motion (transform/opacity only). Respects reduced motion.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    );
    if (elements.length === 0) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const revealAll = () => {
      for (const el of elements) {
        el.classList.add("is-visible");
      }
    };

    if (reduceMotion.matches) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12,
      },
    );

    for (const el of elements) {
      observer.observe(el);
    }

    const onReduceChange = (event: MediaQueryListEvent) => {
      if (!event.matches) return;
      revealAll();
      observer.disconnect();
    };

    reduceMotion.addEventListener("change", onReduceChange);
    return () => {
      observer.disconnect();
      reduceMotion.removeEventListener("change", onReduceChange);
    };
  }, []);
}
