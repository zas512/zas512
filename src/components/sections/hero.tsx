"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { profile } from "@/lib/data";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center isolate min-h-svh overflow-hidden pt-28 pb-16"
      aria-label="Hero section"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 -z-10 grid-bg [radial-gradient(ellipse_at_center,black_30%,transparent_75%)] opacity-70" />
      <div className="absolute inset-0 -z-10 radial-fade" />
      <motion.div
        className="absolute left-1/2 top-[10%] -z-10 size-205 -translate-x-1/2 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--glow) 35%, transparent), transparent 70%)",
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div style={{ y, opacity }} className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Available Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/60 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur-md transition-colors hover:border-foreground/20">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-foreground/90">
              Available for full-time & contract
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <h1 className="mt-6 text-center font-display text-[clamp(2.75rem,8.5vw,8.5rem)] leading-[0.94] tracking-tight">
          <Reveal delay={0.15}>
            <span className="text-foreground">
              Building <span className="italic text-foreground">AI-native full-stack</span>
            </span>
          </Reveal>
          <Reveal delay={0.25}>
            <span className="block text-foreground">products, end to end.</span>
          </Reveal>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-center text-balance text-base text-muted-foreground/90 md:text-lg leading-relaxed"
        >
          I'm <span className="font-medium text-foreground">{profile.shortName}</span>, a{" "}
          <span className="text-foreground">{profile.role}</span> with 5+ years shipping SaaS platforms, production AI features, and real-time backend systems.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
        >
          <a href="#work" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full">
            <InteractiveHoverButton>View selected work</InteractiveHoverButton>
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/40 px-6 py-2.5 text-sm font-medium text-foreground backdrop-blur-md transition-all hover:bg-surface-2 hover:border-foreground/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
          </a>
        </motion.div>

        {/* Social / Channel Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-5 text-xs font-mono tracking-widest text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <Sparkles className="size-3 text-primary" />
            <span>Remote Worldwide</span>
          </span>
          <span className="size-1 rounded-full bg-border" />
          <a
            href="https://github.com/zas512"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-xs"
            aria-label="GitHub profile (opens in new tab)"
          >
            <FaGithub className="size-3.5" /> GitHub
          </a>
          <span className="size-1 rounded-full bg-border" />
          <a
            href="https://www.linkedin.com/in/zas512/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-xs"
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

function Reveal({ children, delay = 0 }: Readonly<{ children: React.ReactNode; delay?: number }>) {
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
        initial={{ opacity: 0, y: 40, rotate: -6 }}
        animate={{ opacity: 1, y: 0, rotate: -6 }}
        transition={{ delay: 0.95, duration: 0.9 }}
        className="pointer-events-auto absolute left-[5%] top-[22%] w-68 hover:scale-105 hover:-rotate-3 transition-transform duration-300"
      >
        <div className="glass rounded-2xl p-4 text-left font-mono text-[11.5px] text-muted-foreground shadow-2xl border border-border/60 backdrop-blur-xl">
          <div className="mb-2.5 flex items-center justify-between border-b border-border/40 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-red-400/80" />
              <span className="size-2.5 rounded-full bg-amber-400/80" />
              <span className="size-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="text-[10px] text-muted-foreground/70 tracking-wider">agent.ts</span>
          </div>
          <pre className="leading-relaxed">
            <span className="text-accent">const</span> ship = <span className="text-accent">async</span> () =&gt; &#123;<br />
            &nbsp;&nbsp;<span className="text-accent">await</span> <span className="text-primary">architect</span>()<br />
            &nbsp;&nbsp;<span className="text-accent">await</span> <span className="text-primary">deployAI</span>()<br />
            &nbsp;&nbsp;<span className="text-muted-foreground">return</span> &lt;<span className="text-emerald-400">ProductionSaaS</span> /&gt;<br />
            &#125;
          </pre>
        </div>
      </motion.div>

      {/* Metric badge card */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: 5 }}
        animate={{ opacity: 1, y: 0, rotate: 5 }}
        transition={{ delay: 1.1, duration: 0.9 }}
        className="pointer-events-auto absolute right-[6%] bottom-[22%] w-58 hover:scale-105 hover:rotate-3 transition-transform duration-300"
      >
        <div className="glass rounded-2xl p-4.5 text-left shadow-2xl border border-border/60 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-muted-foreground">
              Performance
            </span>
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="mt-1 text-3xl font-display font-medium">
            99<span className="text-primary">.</span>
          </div>
          <div className="mt-1 text-xs text-muted-foreground">Lighthouse Score · Mobile & Desktop</div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary/80">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "99%" }}
              transition={{ delay: 1.4, duration: 1.2 }}
              className="h-full bg-linear-to-r from-primary to-accent"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

