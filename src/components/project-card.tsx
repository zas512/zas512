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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1]
      }}
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
        className="overflow-hidden rounded-xl border border-border bg-surface h-full transition-all duration-300 hover:border-border-strong hover:bg-surface-elevated flex flex-col justify-between"
      >
        <section
          className={`relative overflow-hidden ${large ? "aspect-16/10" : "aspect-4/3"} flex items-center justify-center`}
        >
          {project.image ? (
            <>
              <div className="absolute inset-0 bg-accent/5 opacity-40 z-10" />
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 size-full object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-103"
              />
            </>
          ) : (
            <div className="absolute inset-0 bg-surface-elevated flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-48 rounded-full bg-accent/5 blur-3xl transition-transform duration-700 group-hover:scale-120" />

              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="relative flex size-14 items-center justify-center rounded-xl border border-border bg-surface transition-all duration-500 group-hover:border-accent/30 group-hover:bg-accent-soft/10">
                  {project.type === "backend" ? (
                    <Database className="size-5 text-foreground-muted group-hover:text-accent transition-colors duration-500" />
                  ) : (
                    <Lock className="size-5 text-foreground-muted group-hover:text-accent transition-colors duration-500" />
                  )}
                </div>

                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground-muted bg-surface border border-border px-2.5 py-0.5 rounded-full">
                  {project.type === "backend"
                    ? "Backend Infrastructure"
                    : "NDA Protected"}
                </span>

                <div className="mt-2 flex flex-wrap justify-center gap-1.5 max-w-[80%]">
                  {project.stack.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="text-[11px] text-foreground-subtle font-mono"
                    >
                      #{s.toLowerCase().replaceAll(".js", "")}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="absolute left-5 top-5 flex flex-wrap gap-1.5 z-20">
            {project.tags.slice(0, 2).map((t) => (
              <span
                key={t}
                className="rounded-full bg-surface/80 border border-border px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.14em] text-foreground-muted backdrop-blur"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="absolute right-5 top-5 inline-flex size-9 items-center justify-center rounded-full bg-surface/80 border border-border text-foreground-muted backdrop-blur transition group-hover:bg-accent group-hover:text-background group-hover:border-accent z-20">
            <ArrowUpRight className="size-4 transition-transform group-hover:rotate-12" />
          </div>
        </section>
        <section className="flex items-end justify-between gap-4 p-5">
          <div>
            <h3 className="font-display text-2xl leading-tight text-foreground font-light">
              {project.title}
            </h3>
            <p className="mt-1.5 text-sm text-foreground-muted leading-relaxed font-sans">
              {project.tagline}
            </p>
          </div>
          <div className="hidden text-right font-mono text-[10px] uppercase tracking-[0.14em] text-foreground-subtle md:block shrink-0">
            <div>{project.year}</div>
            <div>{project.client}</div>
          </div>
        </section>
      </Link>
    </motion.div>
  );
}
