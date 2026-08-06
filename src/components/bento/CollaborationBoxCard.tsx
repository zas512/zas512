"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const badges = [
  {
    title: "Code You Keep",
    subtitle: "Clean handoff, zero lock-in",
    icon: "⌁"
  },
  {
    title: "Clear Updates",
    subtitle: "Async demos, no status meetings",
    icon: "◌"
  },
  {
    title: "Fast Shipping",
    subtitle: "Short feedback loops, real progress",
    icon: "↻"
  },
  {
    title: "Built to Scale",
    subtitle: "Structured code and stable releases",
    icon: "▢"
  },
  {
    title: "Pixel-Perfect UI",
    subtitle: "Intentional details, responsive polish",
    icon: "◈"
  },
  {
    title: "Strong Architecture",
    subtitle: "Maintainable patterns, clear boundaries",
    icon: "⧉"
  },
  {
    title: "Reliable Delivery",
    subtitle: "Milestones met with predictable execution",
    icon: "✓"
  },
  {
    title: "Team-Friendly Handoff",
    subtitle: "Docs, cleanup, and smooth ownership transfer",
    icon: "⇄"
  },
  {
    title: "Product-Focused Iteration",
    subtitle: "Fast improvements guided by real feedback",
    icon: "◍"
  }
];

const CYCLE_MS = 3600;

export function CollaborationBoxCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % badges.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  const active = badges[activeIndex];

  return (
    <div className="relative h-full overflow-hidden rounded-2xl p-4">
      <div className="absolute inset-0 bg-[radial-gradient(130%_90%_at_50%_0%,rgba(255,255,255,0.08),rgba(255,255,255,0)_55%)]" />
      <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/40 to-black/75" />

      <div className="relative z-10 flex h-full flex-col items-center justify-start gap-6 px-2 pt-2 text-center">
        <div className="w-full text-left">
          <p className="font-mono text-[0.7rem] text-center font-semibold tracking-[0.24em] text-zinc-400 uppercase">
            What you get
          </p>
          <h3 className="mt-2 max-w-[18ch] text-balance font-display text-xl text-center leading-[1.02] text-zinc-100 md:text-[2.1rem]">
            Production-ready software, shipped fast
          </h3>
        </div>

        {/* Badge + box stage */}
        <div className="relative mt-4 h-72 w-full max-w-[24rem]">
          {/* Falling badge — only ONE mounted at a time */}
          <div className="absolute inset-x-0 top-0 flex h-20 justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{ y: -40, opacity: 0, scale: 0.94 }}
                animate={{ y: 8, opacity: 1, scale: 1 }}
                exit={{ y: 88, opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-2 z-30"
              >
                <div className="flex min-w-44 items-center gap-2 rounded-full border border-white/10 bg-[#191919]/90 px-3 py-2 text-left shadow-[0_14px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/6 text-[11px] text-zinc-300">
                    {active.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-zinc-100">
                      {active.title}
                    </p>
                    <p className="truncate text-[11px] text-zinc-400">
                      {active.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Box illustration */}
          <BoxSvg className="absolute inset-x-0 -bottom-16 mx-auto h-72 w-full text-white" />
        </div>
      </div>
    </div>
  );
}

function BoxSvg({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 340 220"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g strokeLinejoin="round" strokeLinecap="round">
        {/* 1. INNER HOLLOW (Dark top opening trapezoid) */}
        <polygon
          points="70,115 270,115 225,75 115,75"
          fill="rgba(0, 0, 0, 0.45)"
        />

        {/* 2. LEFT FLAP (Rectangular perspective projection) */}
        <path
          d="M 270,115
             Q 268,113 266,111
             L 228,77
             Q 226,75 228,73
             L 284,53
             Q 287,52 289,54
             L 330,90
             Q 333,93 330,95
             L 274,114
             Q 272,115 270,115 Z"
          transform="translate(340 0) scale(-1 1)"
          fill="rgba(255, 255, 255, 0.05)"
          stroke="rgba(255, 255, 255, 0.18)"
          strokeWidth="1.2"
        />

        {/* 3. RIGHT FLAP (Rectangular perspective projection, mirrored) */}
        <path
          d="M 270,115
             Q 268,113 266,111
             L 228,77
             Q 226,75 228,73
             L 284,53
             Q 287,52 289,54
             L 330,90
             Q 333,93 330,95
             L 274,114
             Q 272,115 270,115 Z"
          fill="rgba(255, 255, 255, 0.05)"
          stroke="rgba(255, 255, 255, 0.18)"
          strokeWidth="1.2"
        />

        {/* 4. FRONT FLAP (Hangs down over front panel) */}
        <path
          d="M 70,115 
             L 42,165 
             Q 38,172 47,172 
             L 293,172 
             Q 302,172 298,165 
             L 270,115 Z"
          fill="rgba(255, 255, 255, 0.03)"
          stroke="rgba(255, 255, 255, 0.18)"
          strokeWidth="1.2"
        />

        {/* 5. MAIN BODY (Front face extending down) */}
        <polygon
          points="70,115 270,115 270,215 70,215"
          fill="rgba(255, 255, 255, 0.02)"
          stroke="rgba(255, 255, 255, 0.18)"
          strokeWidth="1.2"
        />

        {/* 6. TOP OPENING RIM HIGHLIGHT */}
        <polygon
          points="70,115 270,115 225,75 115,75"
          fill="none"
          stroke="rgba(255, 255, 255, 0.25)"
          strokeWidth="1.2"
        />
      </g>
    </svg>
  );
}
