"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { WorkProjectCard } from "@/components/work-project-card";
import { projects } from "@/lib/data";

export default function WorkPage() {
  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      const hasImageA = a.image ? 1 : 0;
      const hasImageB = b.image ? 1 : 0;
      return hasImageB - hasImageA;
    });
  }, []);

  const allTags = useMemo(
    () => Array.from(new Set(sortedProjects.flatMap((p) => p.tags))),
    [sortedProjects],
  );
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    return active === "All"
      ? sortedProjects
      : sortedProjects.filter((p) => p.tags.includes(active));
  }, [active, sortedProjects]);

  const leftColumn = useMemo(
    () => filtered.filter((_, i) => i % 2 === 0),
    [filtered],
  );
  const rightColumn = useMemo(
    () => filtered.filter((_, i) => i % 2 === 1),
    [filtered],
  );

  return (
    <main className="pt-32">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 dot-bg mask-[radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-24 -z-10 flex justify-center overflow-hidden">
          <span
            aria-hidden
            className="select-none font-display text-[clamp(6rem,18vw,14rem)] leading-none text-foreground/[0.03] outline-text"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.04)" }}
          >
            PROJECTS
          </span>
        </div>

        <div className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeIn" }}
            className="text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              / Curated
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
              <span className="italic text-gradient">Work</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm text-muted-foreground md:text-base">
              Production software, AI products, and realtime systems — built for
              real users across startups, agencies, and independent engagements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeIn" }}
            className="mt-10 flex flex-wrap justify-center gap-2"
          >
            {["All", ...allTags].map((tag) => (
              <button
                key={tag}
                onClick={() => setActive(tag)}
                data-cursor="hover"
                className={`rounded-full border px-4 py-1.5 text-xs transition ${
                  active === tag
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="flex flex-col gap-24 md:gap-32">
            {leftColumn.map((project, i) => (
              <WorkProjectCard
                key={project.slug}
                project={project}
                index={i * 2}
              />
            ))}
          </div>

          <div className="flex flex-col gap-24 md:gap-32 md:pt-32 lg:pt-48">
            {rightColumn.map((project, i) => (
              <WorkProjectCard
                key={project.slug}
                project={project}
                index={i * 2 + 1}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
