"use client"
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/lib/data";

export function FeaturedWork() {
  return (
    <section id="work" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              / 04 - Selected work
            </p>
            <h2 className="mt-3 text-4xl font-display md:text-6xl">
              Recently <span className="italic text-gradient">shipped</span>.
            </h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm backdrop-blur transition hover:bg-card"
          >
            All projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} large={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
