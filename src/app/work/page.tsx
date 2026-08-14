"use client";
import { WorkProjectCard } from "@/components/work-project-card";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

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
    [sortedProjects]
  );
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    return active === "All"
      ? sortedProjects
      : sortedProjects.filter((p) => p.tags.includes(active));
  }, [active, sortedProjects]);

  const leftColumn = useMemo(
    () => filtered.filter((_, i) => i % 2 === 0),
    [filtered]
  );
  const rightColumn = useMemo(
    () => filtered.filter((_, i) => i % 2 === 1),
    [filtered]
  );

  return (
    <main className="pt-32">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
        <div className="pointer-events-none absolute inset-x-0 top-24 -z-10 flex justify-center overflow-hidden">
          <span
            aria-hidden
            className="select-none font-display text-[clamp(6rem,18vw,14rem)] leading-none text-foreground/2 outline-text"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.02)" }}
          >
            PROJECTS
          </span>
        </div>

        <div className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.66, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="mt-3 font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl font-light">
              Selected <span className="italic">projects</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm text-foreground-muted md:text-base font-sans">
              Production software, AI products, and real-time systems — built
              for real users across startups, agencies, and independent
              engagements.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:zainalis.914@gmail.com?subject=Hiring%20Inquiry"
                className="rounded-full border border-accent bg-accent-soft px-5 py-2.5 text-xs font-mono uppercase tracking-widest text-accent transition hover:bg-accent-soft/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Hire for a project
              </a>
              <a
                href="mailto:zainalis.914@gmail.com?subject=Portfolio%20Question"
                className="rounded-full border border-border bg-surface px-5 py-2.5 text-xs font-mono uppercase tracking-widest text-foreground transition hover:border-border-strong hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Ask a question
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="mt-12 flex flex-wrap justify-center gap-2"
          >
            {["All", ...allTags].map((tag) => (
              <button
                type="button"
                key={tag}
                onClick={() => setActive(tag)}
                data-cursor="hover"
                className={`rounded-full border px-4 py-2 text-[10px] font-mono uppercase tracking-widest transition ${
                  active === tag
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-border bg-surface text-foreground-muted hover:text-foreground hover:border-border-strong"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-32">
        {filtered.length === 0 ? (
          <div className="mx-auto mt-8 max-w-xl rounded-xl border border-border bg-surface p-10 text-center">
            <p className="font-mono text-[10px] tracking-[0.2em] text-foreground-subtle uppercase">
              No matches
            </p>
            <h2 className="mt-3 font-display text-3xl text-foreground font-light md:text-4xl">
              No projects found for this tag
            </h2>
            <p className="mt-3 text-sm text-foreground-muted">
              Try another tag or reset to view every project.
            </p>
            <button
              type="button"
              onClick={() => setActive("All")}
              className="mt-6 inline-flex items-center justify-center rounded-full border border-accent bg-accent-soft px-5 py-2 text-xs font-mono uppercase tracking-widest text-accent transition hover:bg-accent-soft/30"
            >
              Show all projects
            </button>
          </div>
        ) : (
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
        )}
      </section>
    </main>
  );
}
