"use client";
import { TechIcon } from "@/components/tech-icon";
import { techStack, type Project } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight, Database, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

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
  index,
}: Readonly<{
  project: Project;
  index: number;
}>) {
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="mb-4 flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-foreground-subtle">
        <span>
          {formatProjectNumber(index)} / {typeLabel}
        </span>
        <span>{formatProjectDate(project.year, index)}</span>
      </div>

      <h2 className="mb-5 font-display text-4xl leading-none tracking-tight text-foreground font-light md:text-5xl lg:text-6xl">
        {project.title}
      </h2>

      <Link
        href={`/work/${project.slug}`}
        className="block"
        aria-label={`Open case study: ${project.title}`}
      >
        <div className="relative overflow-hidden rounded-xl border border-border bg-surface p-6 md:p-8 transition-all duration-300 group-hover:border-border-strong group-hover:bg-surface-elevated">
          <div className="flex items-start justify-between gap-6">
            <p className="max-w-md text-sm leading-relaxed text-foreground-muted md:text-base font-sans">
              {project.tagline}
            </p>
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-foreground-muted transition duration-300 group-hover:bg-accent group-hover:text-background group-hover:border-accent">
              <ArrowUpRight className="size-4" />
            </span>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-lg border border-border bg-surface shadow-2xl">
            {safeImageSrc ? (
              <Image
                src={safeImageSrc}
                alt={project.title}
                width={1600}
                height={1000}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                onError={() => setImageFailed(true)}
                className="aspect-16/10 w-full object-cover object-top opacity-85 transition-transform duration-700 ease-out group-hover:scale-102"
              />
            ) : (
              <div className="relative flex aspect-16/10 flex-col items-center justify-center gap-3 bg-surface-elevated/40 p-8 text-center">
                <div className="absolute inset-0 grid-bg opacity-10" />
                <div className="relative flex size-14 items-center justify-center rounded-xl border border-border bg-surface">
                  {project.type === "backend" ? (
                    <Database className="size-5 text-foreground-muted" />
                  ) : (
                    <Lock className="size-5 text-foreground-muted" />
                  )}
                </div>
                <span className="relative font-mono text-xs uppercase tracking-[0.16em] text-foreground-subtle">
                  {project.type === "backend"
                    ? "Backend Infrastructure"
                    : "NDA Protected"}
                </span>
              </div>
            )}
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 font-mono text-xs tracking-widest text-foreground-muted uppercase transition duration-300 group-hover:bg-accent-soft group-hover:text-accent group-hover:border-accent/25">
            <span>Open case study</span>
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
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-mono uppercase tracking-[0.14em] text-foreground-muted transition hover:border-border-strong hover:text-foreground hover:bg-surface-elevated"
            >
              <TechIcon slug={icon.slug} color={icon.color} size={13} />
              {tech}
            </span>
          );
        })}
      </div>
    </motion.article>
  );
}
