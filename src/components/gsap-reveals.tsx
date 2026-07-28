import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Global GSAP scroll reveals.
 * - Animates every <section> heading (h2) with a clip-style reveal.
 * - Animates any element marked with `data-reveal` (fade + rise).
 * - Parallax on `data-parallax="0.2"` (number = strength).
 * Safe to run alongside framer-motion `whileInView` because we target
 * different elements (section headings and explicitly-tagged nodes).
 */
export function GsapReveals() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      // Section H2 reveal
      gsap.utils.toArray<HTMLElement>("section h2").forEach((h) => {
        gsap.from(h, {
          yPercent: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: h,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Generic [data-reveal] fade + rise (with optional stagger via parent)
      gsap.utils
        .toArray<HTMLElement>("[data-reveal]")
        .forEach((el) => {
          gsap.from(el, {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          });
        });

      // Parallax
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const strength = parseFloat(el.dataset.parallax || "0.2");
        gsap.to(el, {
          yPercent: -strength * 100,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Refresh once after first paint to pick up async content (images, etc.)
      const id = setTimeout(() => ScrollTrigger.refresh(), 400);
      return () => clearTimeout(id);
    });
    return () => ctx.revert();
  }, []);

  return null;
}
