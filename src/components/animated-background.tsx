import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Cinematic ambient background:
 * - 3 large, slow-drifting blurred color orbs (aurora feel)
 * - subtle animated grid
 * - faint noise overlay
 * Fixed behind all content. Pointer-events: none.
 */
export function AnimatedBackground() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);
  const orb3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ctx = gsap.context(() => {
      const float = (el: HTMLElement | null, x: number, y: number, dur: number) => {
        if (!el) return;
        gsap.to(el, {
          xPercent: x,
          yPercent: y,
          duration: dur,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      };
      float(orb1.current, 18, -12, 14);
      float(orb2.current, -22, 14, 18);
      float(orb3.current, 12, 22, 22);
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.20_0.03_270)_0%,oklch(0.13_0.02_270)_55%,oklch(0.10_0.015_270)_100%)]" />

      {/* Drifting color orbs */}
      <div
        ref={orb1}
        className="absolute -top-40 -left-32 size-[640px] rounded-full opacity-[0.35] blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.16 230 / 0.7) 0%, transparent 60%)",
        }}
      />
      <div
        ref={orb2}
        className="absolute top-1/3 -right-40 size-[720px] rounded-full opacity-[0.28] blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.20 320 / 0.7) 0%, transparent 60%)",
        }}
      />
      <div
        ref={orb3}
        className="absolute bottom-0 left-1/4 size-[560px] rounded-full opacity-[0.25] blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.18 150 / 0.6) 0%, transparent 60%)",
        }}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.18] animate-grid"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, white 5%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, white 5%, transparent) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}
