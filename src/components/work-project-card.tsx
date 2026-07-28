"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Database, Lock } from "lucide-react";
import { TechIcon } from "@/components/tech-icon";
import { techStack, type Project } from "@/lib/data";
import Image from "next/image";

const CARD_BACKGROUNDS = [
  "from-rose-500 via-pink-600 to-fuchsia-700",
  "from-blue-600 via-indigo-600 to-violet-700",
  "from-violet-600 via-purple-600 to-fuchsia-800",
  "from-emerald-600 via-teal-600 to-cyan-700",
  "from-amber-500 via-orange-600 to-rose-600",
  "from-sky-500 via-blue-600 to-indigo-700",
];

function getProjectTypeLabel(project: Project): string {
  const stack = project.stack.map((s) => s.toLowerCase()).join(" ");
  if (stack.includes("react native") || stack.includes("expo"))
    return "MOBILE APP";
  if (project.type === "backend") return "BACKEND";
  return "WEB APP";
}

function getStackIcon(name: string) {
  const found = techStack.find(
    (t) => t.name.toLowerCase() === name.toLowerCase(),
  );
  if (found) return { slug: found.slug, color: found.color };
  const slug = name
    .toLowerCase()
    .replace(/\.js$/i, "dotjs")
    .replace(/\./g, "dot")
    .replace(/\s+/g, "");
  return { slug, color: "FFFFFF" };
}

function formatProjectNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

function formatProjectDate(year: string, index: number) {
  const quarters = ["Q1", "Q2", "Q3", "Q4"];
  return `${quarters[index % 4]} ${year}`;
}

export function WorkProjectCard({
  project,
  index,
}: Readonly<{
  project: Project;
  index: number;
}>) {
  const bg = CARD_BACKGROUNDS[index % CARD_BACKGROUNDS.length];
  const typeLabel = getProjectTypeLabel(project);

  return (
    <motion.article
      initial={{ opacity: 0, y: 72 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: "easeIn" }}
      className="group"
    >
      <div className="mb-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <span>
          {formatProjectNumber(index)} —— {typeLabel}
        </span>
        <span>{formatProjectDate(project.year, index)}</span>
      </div>

      <h2 className="mb-5 font-display text-4xl leading-none tracking-tight md:text-5xl lg:text-6xl">
        {project.title}
      </h2>

      <Link href={`/work/${project.slug}`} className="block">
        <div
          className={`relative overflow-hidden rounded-[2rem] bg-linear-to-br ${bg} p-6 md:p-8 transition-transform duration-500 group-hover:scale-[1.01]`}
        >
          <div className="flex items-start justify-between gap-6">
            <p className="max-w-md text-sm leading-relaxed text-white/90 md:text-base">
              {project.tagline}
            </p>
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur transition group-hover:bg-white group-hover:text-neutral-900">
              <ArrowUpRight className="size-4 transition-transform group-hover:rotate-12" />
            </span>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-2xl">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="aspect-16/10 w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
            ) : (
              <div className="relative flex aspect-16/10 flex-col items-center justify-center gap-3 bg-black/30 p-8 text-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[24px_24px]" />
                <div className="relative flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md">
                  {project.type === "backend" ? (
                    <Database className="size-6 text-white/70" />
                  ) : (
                    <Lock className="size-6 text-white/70" />
                  )}
                </div>
                <span className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                  {project.type === "backend"
                    ? "Backend Infrastructure"
                    : "NDA Protected"}
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => {
          const icon = getStackIcon(tech);
          return (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground backdrop-blur transition hover:border-primary/30 hover:text-foreground"
            >
              <TechIcon slug={icon.slug} color={icon.color} size={14} />
              {tech}
            </span>
          );
        })}
      </div>
    </motion.article>
  );
}
