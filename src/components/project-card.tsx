"use client";
import type { Project } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight, Database, Lock } from "lucide-react";
import Link from "next/link";

export function ProjectCard({
  project,
  index = 0,
  large = false,
  onClick
}: Readonly<{
  project: Project;
  index?: number;
  large?: boolean;
  onClick?: (project: Project) => void;
}>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      <Link
        href={`/work/${project.slug}`}
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick(project);
          }
        }}
        data-cursor="hover"
        className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface transition duration-300 hover:border-border-strong hover:bg-surface-elevated"
      >
        <section
          className={`relative overflow-hidden ${large ? "aspect-[16/10]" : "aspect-[4/3]"} flex items-center justify-center`}
        >
          {project.image ? (
            <>
              <div className="absolute inset-0 bg-accent/5 opacity-50" />
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 size-full object-cover opacity-85 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </>
          ) : (
            <div className="absolute inset-0 overflow-hidden bg-surface-elevated p-6 text-center">
              <div className="absolute inset-0 grid-bg opacity-10" />
              <div className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl transition-transform duration-700 group-hover:scale-125" />

              <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3">
                <div className="relative flex size-14 items-center justify-center rounded-xl border border-border bg-surface transition group-hover:border-accent/40 group-hover:bg-accent-soft/10">
                  {project.type === "backend" ? (
                    <Database className="size-5 text-foreground-muted transition group-hover:text-accent" />
                  ) : (
                    <Lock className="size-5 text-foreground-muted transition group-hover:text-accent" />
                  )}
                </div>

                <span className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground-muted">
                  {project.type === "backend" ? "Backend infrastructure" : "NDA protected"}
                </span>
              </div>
            </div>
          )}

          <div className="absolute left-4 top-4 z-20 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 2).map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-surface/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-foreground-muted backdrop-blur"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="absolute right-4 top-4 z-20 inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface/80 text-foreground-muted backdrop-blur transition group-hover:border-accent group-hover:bg-accent group-hover:text-background">
            <ArrowUpRight className="size-4 transition-transform group-hover:rotate-12" />
          </div>
        </section>

        <section className="flex items-end justify-between gap-4 p-5">
          <div>
            <h3 className="font-display text-2xl leading-tight text-foreground font-light">
              {project.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
              {project.tagline}
            </p>
          </div>
          <div className="hidden shrink-0 text-right font-mono text-[10px] uppercase tracking-[0.14em] text-foreground-subtle md:block">
            <div>{project.year}</div>
            <div>{project.client}</div>
          </div>
        </section>
      </Link>
    </motion.div>
  );
}
