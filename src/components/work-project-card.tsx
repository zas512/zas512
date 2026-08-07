"use client";
import { TechIcon } from "@/components/tech-icon";
import { techStack, type Project } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight, Database, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const CARD_BACKGROUNDS = [
  "from-rose-500/95 via-orange-500/90 to-amber-500/85",
  "from-slate-700/95 via-indigo-700/90 to-blue-700/85",
  "from-emerald-700/95 via-teal-700/90 to-cyan-700/82",
  "from-amber-600/95 via-orange-700/90 to-red-700/82",
  "from-zinc-700/95 via-blue-700/90 to-indigo-700/84",
  "from-teal-700/95 via-sky-700/90 to-blue-700/84"
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
    (t) => t.name.toLowerCase() === name.toLowerCase()
  );
  if (found) return { slug: found.slug, color: found.color };
  const slug = name
    .toLowerCase()
    .replace(/\.js$/i, "dotjs")
    .replaceAll(".", "dot")
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

function isTrustedRemoteImage(src: string) {
  return /^https:\/\/res\.cloudinary\.com\//i.test(src);
}

export function WorkProjectCard({
  project,
  index
}: Readonly<{
  project: Project;
  index: number;
}>) {
  const bg = CARD_BACKGROUNDS[index % CARD_BACKGROUNDS.length];
  const typeLabel = getProjectTypeLabel(project);
  const [imageFailed, setImageFailed] = useState(false);

  const safeImageSrc = useMemo(() => {
    if (!project.image || imageFailed) {
      return null;
    }
    return isTrustedRemoteImage(project.image) ? project.image : null;
  }, [imageFailed, project.image]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 72 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.68, ease: "easeOut" }}
      className="group"
    >
      <div className="mb-4 flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <span>
          {formatProjectNumber(index)} —— {typeLabel}
        </span>
        <span>{formatProjectDate(project.year, index)}</span>
      </div>

      <h2 className="mb-5 font-display text-4xl leading-none tracking-tight md:text-5xl lg:text-6xl">
        {project.title}
      </h2>

      <Link
        href={`/work/${project.slug}`}
        className="block"
        aria-label={`Open case study: ${project.title}`}
      >
        <div
          className={`relative overflow-hidden rounded-4xl bg-linear-to-br ${bg} p-6 md:p-8 transition-colors duration-300 group-hover:ring-1 group-hover:ring-white/30`}
        >
          <div className="flex items-start justify-between gap-6">
            <p className="max-w-md text-sm leading-relaxed text-white/90 md:text-base">
              {project.tagline}
            </p>
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur transition group-hover:bg-white group-hover:text-neutral-900">
              <ArrowUpRight className="size-4" />
            </span>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-2xl">
            {safeImageSrc ? (
              <Image
                src={safeImageSrc}
                alt={project.title}
                width={1600}
                height={1000}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                onError={() => setImageFailed(true)}
                className="aspect-16/10 w-full object-cover object-top"
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
                <span className="relative font-mono text-xs uppercase tracking-[0.16em] text-white/60">
                  {project.type === "backend"
                    ? "Backend Infrastructure"
                    : "NDA Protected"}
                </span>
              </div>
            )}
          </div>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 font-mono text-xs tracking-[0.14em] text-white/90 uppercase">
            Open case study
            <ArrowUpRight className="size-3.5" />
          </div>
        </div>
      </Link>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => {
          const icon = getStackIcon(tech);
          return (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground backdrop-blur transition hover:border-primary/30 hover:text-foreground"
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
