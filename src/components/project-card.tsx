"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Database, Lock } from "lucide-react";
import type { Project } from "@/lib/data";

export function ProjectCard({
  project,
  index = 0,
  large = false,
  onClick,
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
        ease: [0.22, 1, 0.36, 1],
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
        className="overflow-hidden rounded-2xl border border-border bg-card/40 h-full transition-all hover:border-primary/40 flex flex-col justify-between"
      >
        <section
          className={`relative overflow-hidden ${large ? "aspect-16/10" : "aspect-4/3"} flex items-center justify-center`}
        >
          {project.image ? (
            <>
              <div
                className={`absolute inset-0 bg-linear-to-br ${project.accent ?? "from-primary/20 to-accent/10"} opacity-60`}
              />
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 size-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
            </>
          ) : (
            <div
              className={`absolute inset-0 bg-linear-to-br ${project.accent ?? "from-neutral-900 via-neutral-950 to-neutral-900"} flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden`}
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] opacity-30" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-48 rounded-full bg-primary/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="relative flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:border-primary/30 group-hover:bg-primary/5">
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-primary/10 to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {project.type === "backend" ? (
                    <Database className="size-6 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                  ) : (
                    <Lock className="size-6 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                  )}
                </div>

                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground/80 bg-white/5 border border-white/5 px-2.5 py-0.5 rounded-full">
                  {project.type === "backend"
                    ? "Backend Infrastructure"
                    : "NDA Protected"}
                </span>

                <div className="mt-2 flex flex-wrap justify-center gap-1.5 max-w-[80%]">
                  {project.stack.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="text-xs text-muted-foreground font-mono"
                    >
                      #{s.toLowerCase().replaceAll(".js", "")}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="absolute left-5 top-5 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 2).map((t) => (
              <span
                key={t}
                className="rounded-full bg-background/70 px-2.5 py-1 text-xs uppercase tracking-[0.14em] text-muted-foreground backdrop-blur"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="absolute right-5 top-5 inline-flex size-9 items-center justify-center rounded-full bg-background/70 backdrop-blur transition group-hover:bg-foreground group-hover:text-background">
            <ArrowUpRight className="size-4 transition-transform group-hover:rotate-12" />
          </div>
        </section>
        <section className="flex items-end justify-between gap-4 p-5">
          <div>
            <h3 className="font-display text-2xl leading-tight md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {project.tagline}
            </p>
          </div>
          <div className="hidden text-right text-xs uppercase tracking-[0.14em] text-muted-foreground md:block">
            <div>{project.year}</div>
            <div>{project.client}</div>
          </div>
        </section>
      </Link>
    </motion.div>
  );
}
