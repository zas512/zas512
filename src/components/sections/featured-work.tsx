"use client";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function FeaturedWork() {
  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="container mx-auto">
        <div className="mb-12 flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              05 / Selected work
            </p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] text-foreground md:text-5xl font-light">
              Products built for <span className="italic">real operations</span>.
            </h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-foreground transition hover:border-border-strong hover:bg-surface-elevated"
          >
            <span>All projects</span>
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} large={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
