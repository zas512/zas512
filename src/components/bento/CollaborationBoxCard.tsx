"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const badges = [
  {
    title: "Code You Keep",
    subtitle: "Clean & maintainable",
    icon: "⌁",
  },
  {
    title: "Clear Updates",
    subtitle: "No endless meetings",
    icon: "◌",
  },
  {
    title: "Fast Shipping",
    subtitle: "Ship every week",
    icon: "↻",
  },
  {
    title: "Built to Scale",
    subtitle: "Ready to grow",
    icon: "▢",
  },
  {
    title: "Pixel-Perfect UI",
    subtitle: "Polished interfaces",
    icon: "◈",
  },
  {
    title: "Strong Architecture",
    subtitle: "Built to last",
    icon: "⧉",
  },
  {
    title: "Reliable Delivery",
    subtitle: "On time, always",
    icon: "✓",
  },
  {
    title: "Team-Friendly Handoff",
    subtitle: "Easy ownership",
    icon: "⇄",
  },
  {
    title: "Product-Focused Iteration",
    subtitle: "Driven by feedback",
    icon: "◍",
  },
  {
    title: "Secure by Default",
    subtitle: "Security first",
    icon: "🔒",
  },
  {
    title: "Performance First",
    subtitle: "Fast by design",
    icon: "⚡",
  },
  {
    title: "Responsive Design",
    subtitle: "Works everywhere",
    icon: "📱",
  },
  {
    title: "Accessible UX",
    subtitle: "Built for everyone",
    icon: "♿",
  },
  {
    title: "Modern Stack",
    subtitle: "Latest technologies",
    icon: "⬢",
  },
  {
    title: "Developer Experience",
    subtitle: "Easy to extend",
    icon: "🛠",
  },
  {
    title: "API Integration",
    subtitle: "Connect anything",
    icon: "🔗",
  },
  {
    title: "Automated Testing",
    subtitle: "Fewer regressions",
    icon: "🧪",
  },
  {
    title: "Continuous Deployment",
    subtitle: "Deploy with confidence",
    icon: "🚀",
  },
  {
    title: "Documentation",
    subtitle: "Clear and complete",
    icon: "📄",
  },
  {
    title: "Long-Term Support",
    subtitle: "Future ready",
    icon: "🛡",
  },
];

const CYCLE_MS = 2000;

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
    <div className="relative h-full overflow-hidden p-4">
      <div className="relative z-10 flex h-full flex-col items-center justify-start gap-6 px-2 pt-2 text-center">
        <p className="text-balance font-display tracking-wide text-xl w-full text-center text-zinc-100 md:text-3xl">
          Production-ready software, shipped fast
        </p>
        {/* Badge + box stage */}
        <div className="relative mt-4 h-72 w-full max-w-[24rem]">
          <BoxBack className="absolute inset-x-0 -bottom-20 z-10 mx-auto h-72 w-full scale-x-105 text-white" />

          {/* Falling badge — rendered between back and front layers */}
          <div className="absolute inset-x-0 top-0 z-20 flex h-20 justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{ y: -20, opacity: 0, scale: 0.94 }}
                animate={{ y: 8, opacity: 1, scale: 1 }}
                exit={{ y: 108, opacity: 0.08, scale: 0.76 }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-2 z-30"
              >
                <div className="flex min-w-40 items-center gap-2 rounded-full border border-white/10 bg-[#191919] px-2.5 py-2 text-left">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/6 text-xs text-zinc-300">
                    {active.icon}
                  </span>
                  <div className="">
                    <p className="text-xs font-semibold text-zinc-100">
                      {active.title}
                    </p>
                    <p className="text-xs text-zinc-400">{active.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <BoxFront className="absolute inset-x-0 -bottom-20 z-30 mx-auto h-72 w-full scale-x-105 text-white" />
        </div>
      </div>
    </div>
  );
}

function BoxBack({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 340 220"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g strokeLinejoin="round" strokeLinecap="round">
        <polygon
          points="70,115 270,115 225,75 115,75"
          fill="rgba(0, 0, 0, 0.45)"
        />
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
          fill="rgba(255, 255, 255, 0.18)"
          strokeWidth="1.2"
        />
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
          fill="rgba(255, 255, 255, 0.18)"
          strokeWidth="1.2"
        />
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

function BoxFront({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 340 220"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g strokeLinejoin="round" strokeLinecap="round">
        <path
          d="M 70,115 
             L 42,165 
             Q 38,172 47,172 
             L 293,172 
             Q 302,172 298,165 
             L 270,115 Z"
          fill="rgba(10, 10, 12, 0.9)"
        />
        <polygon
          points="70,115 270,115 270,215 70,215"
          fill="rgba(10, 10, 12, 0.96)"
        />
        <path
          d="M 70,115 
             L 42,165 
             Q 38,172 47,172 
             L 293,172 
             Q 302,172 298,165 
             L 270,115 Z"
          fill="rgba(255, 255, 255, 0.18)"
          strokeWidth="1.2"
        />
        <polygon
          points="70,115 270,115 270,215 70,215"
          fill="rgba(255, 255, 255, 0.18)"
          strokeWidth="1.2"
        />
      </g>
    </svg>
  );
}
