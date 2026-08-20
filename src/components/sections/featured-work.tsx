"use client";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/lib/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, BarChart3, Cpu, GitCommit } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: BarChart3,
    value: "40%",
    label: "faster data retrieval",
  },
  {
    icon: GitCommit,
    value: "2,600+",
    label: "commits / year",
  },
  {
    icon: Cpu,
    value: "6",
    label: "production AI systems shipped",
  },
];

export function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      // Stagger fade-in of stat items
      const statItems = gsap.utils.toArray(".stat-item");
      if (!prefersReducedMotion) {
        gsap.fromTo(
          statItems,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".stat-strip",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      } else {
        gsap.set(statItems, { opacity: 1, y: 0 });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="work" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              05 / Selected work
            </p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] text-bone md:text-5xl font-light">
              Products built for real <span className="italic">operations</span>
              .
            </h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] text-bone transition hover:border-accent hover:bg-signal-2"
          >
            <span>All projects</span>
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Quantified Impact Stat Strip */}
        <div className="stat-strip mb-16 grid grid-cols-1 gap-6 sm:grid-cols-3 border-y border-line py-8 bg-surface/10">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="stat-item opacity-0 flex items-center gap-4 px-4 py-2"
              >
                <div className="flex size-10 items-center justify-center rounded-xl border border-line bg-surface/50 text-cyan">
                  <Icon className="size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-2xl font-bold text-bone tracking-tight leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-dim">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} large={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
