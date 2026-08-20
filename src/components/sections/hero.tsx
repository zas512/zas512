"use client";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { profile } from "@/lib/data";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: prefersReducedMotion ? 0 : 0.8,
        },
      });

      heroTl
        .fromTo(
          ".hero-line",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, stagger: 0.12 },
        )
        .fromTo(
          ".hero-card",
          { opacity: 0, y: 30, rotate: (i) => (i === 0 ? -4 : 4) },
          {
            opacity: 1,
            y: 0,
            rotate: (i) => (i === 0 ? -6 : 5),
            stagger: 0.15,
            onComplete: () => {
              if (!prefersReducedMotion) {
                gsap.utils.toArray<HTMLElement>(".hero-card").forEach((card, index) => {
                  gsap.to(card, {
                    y: index === 0 ? "-=12" : "+=12",
                    duration: index === 0 ? 3.5 : 4.2,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true,
                    delay: index * 0.3,
                  });
                });
              }
            },
          },
          "-=0.2",
        )
        .fromTo(
          ".hero-subhead",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0 },
          "-=0.4",
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, stagger: 0.08 },
          "-=0.4",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center isolate min-h-svh overflow-hidden pt-28 pb-16"
      aria-label="Hero section"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Main Headline */}
        <p className="text-center font-display text-[clamp(2.75rem,2rem+4vw,5.5rem)] leading-[1.05] tracking-tight">
          <span className="text-foreground font-light hero-line">
            Shipping full-stack <span className="italic">products</span>
          </span>
          <span className="text-foreground font-light block hero-line opacity-0">
            with{" "}
            <span className="text-accent font-semibold">
              intelligent, real-time systems
            </span>
            .
          </span>
        </p>
        {/* Subtitle & Differentiator */}
        <div className="hero-subhead opacity-0 mx-auto mt-8 max-w-2xl text-center">
          <p className="text-balance text-base text-foreground-muted md:text-lg leading-relaxed font-sans">
            I'm{" "}
            <span className="font-medium text-foreground">
              {profile.shortName}
            </span>
            , a <span className="text-foreground">{profile.role}</span>{" "}
            specializing in scalable multi-tenant platforms, async state
            machines, and polished interfaces.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="hero-cta opacity-0 mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#work"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full"
          >
            <InteractiveHoverButton>See what shipped</InteractiveHoverButton>
          </Link>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-2.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:bg-surface-elevated hover:border-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="size-4 text-foreground-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
          </Link>
        </div>

        {/* Social / Channel Indicators */}
        <div className="hero-cta opacity-0 mt-16 flex flex-wrap items-center justify-center gap-5 text-xs font-mono tracking-[0.16em] text-foreground-subtle">
          <Link
            href="https://github.com/zas512"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 uppercase"
            aria-label="GitHub profile (opens in new tab)"
          >
            <FaGithub className="size-4" /> GitHub
          </Link>
          <span className="size-1 rounded-full bg-border" />
          <Link
            href="https://www.linkedin.com/in/zas512/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 uppercase"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            <FaLinkedin className="size-4" /> LinkedIn
          </Link>
        </div>
      </div>
      <FloatingCards />
    </section>
  );
}
function FloatingCards() {
  return (
    <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none">
      {/* Code snippet card (system) */}
      <div className="hero-card opacity-0 pointer-events-auto absolute left-[6%] top-[25%] w-72">
        <div className="glass rounded-xl border border-border-strong p-5 text-left font-mono text-sm text-foreground shadow-[0_20px_50px_rgba(56,189,248,0.15)] backdrop-blur-xl bg-surface/90 transition-all duration-300 hover:scale-[1.03] hover:border-accent/40 hover:shadow-[0_20px_60px_rgba(56,189,248,0.25)]">
          <div className="mb-3.5 flex items-center justify-between border-b border-border pb-2">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-red-500/80" />
              <span className="size-2.5 rounded-full bg-yellow-500/80" />
              <span className="size-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs tracking-[0.14em] text-foreground-muted uppercase font-mono">
              system
            </span>
          </div>
          <div className="leading-relaxed text-[11px] font-mono text-slate">
            <div className="text-accent font-semibold">production/</div>
            <div>├── ai-workflows</div>
            <div>├── realtime</div>
            <div>├── api-layer</div>
            <div>├── observability</div>
            <div>└── infrastructure</div>
            <div className="mt-4 border-t border-line pt-2 flex items-center gap-2">
              <span className="size-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-slate-dim text-[10px] uppercase tracking-wider">
                status: operational
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Telemetry metric card (outcome) */}
      <div className="hero-card opacity-0 pointer-events-auto absolute right-[6%] bottom-[25%] w-64">
        <div className="glass rounded-xl p-5 text-left shadow-[0_20px_50px_rgba(56,189,248,0.15)] border border-border-strong backdrop-blur-xl bg-surface/90 transition-all duration-300 hover:scale-[1.03] hover:border-accent/40 hover:shadow-[0_20px_60px_rgba(56,189,248,0.25)]">
          <div className="mb-3.5 flex items-center justify-between border-b border-border pb-2">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-red-500/80" />
              <span className="size-2.5 rounded-full bg-yellow-500/80" />
              <span className="size-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs tracking-[0.14em] text-foreground-muted uppercase font-mono">
              outcome
            </span>
          </div>
          <div className="leading-relaxed text-[11px] font-mono text-slate">
            <div className="text-bone font-semibold mb-3 tracking-widest text-[10px]">
              SYSTEM STATUS
            </div>
            <div className="flex justify-between gap-4 mb-1">
              <span>AI workflows</span>
              <span className="text-cyan font-bold">READY</span>
            </div>
            <div className="flex justify-between gap-4 mb-1">
              <span>API infrastructure</span>
              <span className="text-cyan font-bold">READY</span>
            </div>
            <div className="flex justify-between gap-4 mb-1">
              <span>Realtime</span>
              <span className="text-green-400 font-bold">LIVE</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Deployment</span>
              <span className="text-cyan font-bold">AUTOMATED</span>
            </div>
            <div className="mt-4 border-t border-line pt-2 text-right text-green-400 font-semibold flex items-center justify-end gap-1.5 text-[10px] uppercase tracking-wider">
              <span>production</span>
              <span>✓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
