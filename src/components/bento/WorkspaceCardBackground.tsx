"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const logs = [
  {
    title: "Problem framing completed",
    tag: "brief",
    detail: "Goals, scope, and constraints are locked."
  },
  {
    title: "Implementation branch active",
    tag: "build",
    detail: "Core feature path is under active delivery."
  },
  {
    title: "Regression checks clean",
    tag: "qa",
    detail: "Suite is green and quality gates are passing."
  },
  {
    title: "Release candidate approved",
    tag: "ship",
    detail: "Deployment window and rollback plan are ready."
  }
];

const CYCLE_MS = 3000;
const ladder = [
  { label: "Discover", color: "bg-sky-300" },
  { label: "Build", color: "bg-cyan-300" },
  { label: "Verify", color: "bg-violet-300" },
  { label: "Deploy", color: "bg-emerald-300" }
];
const ticker = [
  "sync standup",
  "review loop",
  "release prep",
  "post-ship checks"
];

export function WorkspaceCardBackground() {
  const [activeLog, setActiveLog] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveLog((i) => (i + 1) % logs.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  const activeStep = activeLog % ladder.length; 

  return (
    <div className="relative h-full p-6 space-y-6 flex flex-col items-center justify-center overflow-hidden">
      <p className="w-full text-center text-balance font-display text-xl leading-[1.02] text-zinc-100 md:text-3xl">
        Structured execution, measurable outcomes
      </p>
      <div className="flex flex-1 gap-6 w-full">
        <div className="relative w-full overflow-hidden rounded-lg border border-white/10 bg-black p-2.5">
          <p className="text-sm tracking-[0.14em] text-zinc-400 uppercase">
            Now Active
          </p>

          <div className="mt-2 min-h-17">
            <AnimatePresence mode="wait">
              <motion.div
                key={logs[activeLog].title}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-md border border-white/12 bg-white/6 px-2.5 py-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-semibold text-zinc-100">
                    {logs[activeLog].title}
                  </p>
                  <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-1.5 py-0.5 text-xs uppercase tracking-[0.14em] text-cyan-200">
                    {logs[activeLog].tag}
                  </span>
                </div>
                <p className="mt-1 text-xs text-zinc-300">
                  {logs[activeLog].detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="relative w-80 rounded-lg border border-white/10 bg-black p-3">
          <p className="mb-2 text-sm tracking-[0.14em] text-zinc-400 uppercase">
            Flow Ladder
          </p>
          <div className="space-y-2.5">
            {ladder.map((step, idx) => (
              <div
                key={step.label}
                className="relative flex items-center gap-2"
              >
                <motion.span
                  className={`relative z-10 size-2 rounded-full ${step.color}`}
                  animate={
                    idx === activeStep
                      ? { scale: [0.95, 1.35, 0.95], opacity: [0.6, 1, 0.6] }
                      : { scale: 1, opacity: 0.45 }
                  }
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <p
                  className={`text-xs ${
                    idx === activeStep
                      ? "font-medium text-zinc-100"
                      : "text-zinc-400"
                  }`}
                >
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
