"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import { profile } from "@/lib/data";
import { Copy } from "lucide-react";

export function CollaborationCardBackground() {
  return (
    <div className="relative h-full overflow-hidden rounded-2xl bg-[#111111] p-4">
      <div className="absolute inset-0 bg-[radial-gradient(130%_100%_at_0%_0%,rgba(255,255,255,0.16),rgba(255,255,255,0)_48%),radial-gradient(120%_90%_at_100%_0%,rgba(255,255,255,0.08),rgba(255,255,255,0)_52%)]" />
      <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/30 to-black/70" />

      <div className="pointer-events-none absolute left-[22%] top-[17%] h-1 w-1 rounded-full bg-white/90 shadow-[0_0_10px_2px_rgba(255,255,255,0.65)] animate-pulse" />
      <div className="pointer-events-none absolute left-[30%] top-[12%] h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_0_12px_2px_rgba(255,255,255,0.55)] [animation-delay:200ms] animate-pulse" />
      <div className="pointer-events-none absolute left-[57%] top-[10%] h-1 w-1 rounded-full bg-white/85 shadow-[0_0_10px_2px_rgba(255,255,255,0.65)] [animation-delay:400ms] animate-pulse" />
      <div className="pointer-events-none absolute left-[70%] top-[17%] h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_0_12px_2px_rgba(255,255,255,0.55)] [animation-delay:600ms] animate-pulse" />
      <div className="pointer-events-none absolute left-[78%] top-[11%] h-1 w-1 rounded-full bg-white/90 shadow-[0_0_10px_2px_rgba(255,255,255,0.65)] [animation-delay:800ms] animate-pulse" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-3 pb-8 pt-4 text-center">
        <h3 className="max-w-[15ch] text-balance font-display text-3xl leading-[1.06] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.22)] md:text-4xl">
          Let&apos;s work together on your next project
        </h3>

        <div className="relative h-20 w-[min(24rem,100%)]">
          <div className="absolute inset-x-8 top-0 h-px w-3/4 bg-linear-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
          <div className="absolute inset-x-8 top-0 h-px w-3/4 bg-linear-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="absolute inset-x-24 top-0 h-0.75 w-1/3 bg-linear-to-r from-transparent via-sky-400 to-transparent blur-sm" />
          <div className="absolute inset-x-24 top-0 h-px w-1/3 bg-linear-to-r from-transparent via-sky-400 to-transparent" />

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="h-full w-full"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 h-full w-full bg-black mask-[radial-gradient(280px_120px_at_top,transparent_20%,white)]" />
        </div>

        <button
          type="button"
          className="group/button inline-flex min-h-12 items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-5 text-sm text-zinc-100 shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-[1px] transition-all duration-300 hover:bg-white/14"
          aria-label="Copy contact email"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-white/20 bg-white/5 transition-transform duration-300 group-hover/button:scale-105">
            <Copy className="h-3.5 w-3.5 text-zinc-200" />
          </span>
          <span className="font-medium tracking-tight text-zinc-200">
            {profile.email}
          </span>
        </button>
      </div>

      <div className="absolute inset-0 transition-all duration-300 group-hover:bg-white/2" />
      <div className="absolute inset-0 transition-all duration-300 group-hover:scale-[1.02]" />
    </div>
  );
}
