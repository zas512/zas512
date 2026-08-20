"use client";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { profile } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { type ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <section
      className="relative flex items-center justify-center isolate min-h-svh overflow-hidden pt-28 pb-16"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
      <div className="absolute inset-0 -z-10 radial-fade" />
      <motion.div
        className="absolute left-1/2 top-[10%] -z-10 size-[26rem] -translate-x-1/2 rounded-full pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0, 184, 232, 0.14), rgba(0, 184, 232, 0.04) 45%, transparent 75%)"
        }}
        animate={{ scale: [0.96, 1.08, 0.96], opacity: [0.6, 0.95, 0.6] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-7xl px-4 sm:px-6"
      >
        {/* Available Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 backdrop-blur-md transition-colors hover:border-border-strong">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-muted">
              01 / AVAILABLE FOR FULL-TIME & CONTRACT
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <h1 className="mt-8 text-center font-display text-[clamp(3.5rem,7.5vw,8rem)] leading-[0.94] tracking-tight">
          <Reveal delay={0.15}>
            <span className="text-foreground font-light">
              Building <span className="italic">AI-native full-stack</span>
            </span>
          </Reveal>
          <Reveal delay={0.25}>
            <span className="block text-foreground font-light">
              products, end to end.
            </span>
          </Reveal>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mx-auto mt-8 max-w-2xl text-center text-balance text-base text-foreground-muted md:text-lg leading-relaxed font-sans"
        >
          I'm{" "}
          <span className="font-medium text-foreground">
            {profile.shortName}
          </span>
          , a <span className="text-foreground">{profile.role}</span> shipping
          SaaS platforms, production AI systems, and real-time communication
          infrastructure.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.99 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
            <Link
              href="#work"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full"
            >
              <InteractiveHoverButton>View selected work</InteractiveHoverButton>
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-2.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:bg-surface-elevated hover:border-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="size-4 text-foreground-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Social / Channel Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-5 text-[11px] font-mono tracking-[0.16em] text-foreground-subtle"
        >
          <span className="flex items-center gap-2">
            <Sparkles className="size-3 text-accent" />
            <span className="uppercase">Remote Worldwide</span>
          </span>
          <span className="size-1 rounded-full bg-border" />
          <a
            href="https://github.com/zas512"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground uppercase focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-xs"
            aria-label="GitHub profile (opens in new tab)"
          >
            <FaGithub className="size-3.5" /> GitHub
          </a>
          <span className="size-1 rounded-full bg-border" />
          <a
            href="https://www.linkedin.com/in/zas512/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground uppercase focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-xs"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            <FaLinkedin className="size-3.5" /> LinkedIn
          </a>
        </motion.div>
      </motion.div>

      <FloatingCards />
    </section>
  );
}

function Reveal({
  children,
  delay = 0
}: Readonly<{ children: ReactNode; delay?: number }>) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function FloatingCards() {
  return (
    <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none">
      {/* Code snippet card */}
      <motion.div
        initial={{ opacity: 0, x: -12, y: 28, rotate: -6 }}
        animate={{ opacity: 1, x: 0, y: [22, 12, 22], rotate: -6 }}
        transition={{
          delay: 0.95,
          duration: 0.9,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
        className="pointer-events-auto absolute left-[5%] top-[25%] w-68 hover:scale-[1.02] hover:-rotate-3 transition-transform duration-300"
      >
        <div className="glass rounded-xl border border-border p-4 text-left font-mono text-[11px] text-foreground-muted shadow-2xl backdrop-blur-xl bg-surface/50">
          <div className="mb-2.5 flex items-center justify-between border-b border-border pb-2">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-border-strong" />
              <span className="size-2 rounded-full bg-border-strong" />
              <span className="size-2 rounded-full bg-border-strong" />
            </div>
            <span className="text-[10px] tracking-[0.14em] text-foreground-subtle uppercase">
              agent.ts
            </span>
          </div>
          <pre className="leading-relaxed">
            <span className="text-accent">const</span> ship ={" "}
            <span className="text-accent">async</span> () =&gt; &#123;
            <br />
            &nbsp;&nbsp;<span className="text-accent">await</span>{" "}
            <span className="text-foreground">architect</span>()
            <br />
            &nbsp;&nbsp;<span className="text-accent">await</span>{" "}
            <span className="text-foreground">deployAI</span>()
            <br />
            &nbsp;&nbsp;<span className="text-foreground-subtle">
              return
            </span>{" "}
            &lt;<span className="text-accent">ProductionSaaS</span> /&gt;
            <br />
            &#125;
          </pre>
        </div>
      </motion.div>

      {/* Metric badge card */}
      <motion.div
        initial={{ opacity: 0, x: 12, y: 28, rotate: 5 }}
        animate={{ opacity: 1, x: 0, y: [18, 8, 18], rotate: 5 }}
        transition={{
          delay: 1.1,
          duration: 0.9,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
        className="pointer-events-auto absolute right-[6%] bottom-[25%] w-58 hover:scale-[1.02] hover:rotate-3 transition-transform duration-300"
      >
        <div className="glass rounded-xl p-4 text-left shadow-2xl border border-border backdrop-blur-xl bg-surface/50">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground-subtle">
              Telemetry
            </span>
            <span className="size-2 rounded-full bg-accent animate-pulse" />
          </div>
          <div className="mt-1 text-3xl font-display font-light text-foreground">
            99<span className="text-accent">.</span>
          </div>
          <div className="mt-1 text-[11px] text-foreground-muted font-sans">
            Lighthouse Performance Score
          </div>
          <div className="mt-3.5 h-1 w-full overflow-hidden rounded-full bg-surface-elevated">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "99%" }}
              transition={{ delay: 1.4, duration: 1.2 }}
              className="h-full bg-accent"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
