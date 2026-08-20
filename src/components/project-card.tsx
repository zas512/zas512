"use client";
import type { Project } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight, Database, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ACCENT_COLORS: Record<string, string> = {
  nexamortgage: "rgba(56, 189, 248, 0.4)", // cyan
  surehelp: "rgba(16, 185, 129, 0.4)", // emerald
  "signwise-inbox": "rgba(236, 72, 153, 0.4)", // pink/fuchsia
  pulseops: "rgba(20, 184, 166, 0.4)", // teal
  "adaptive-voice-dialer": "rgba(245, 158, 11, 0.4)", // amber
  "osint-platform": "rgba(139, 92, 246, 0.4)", // violet
  "voip-billing": "rgba(16, 185, 129, 0.4)",
  jadops: "rgba(14, 165, 233, 0.4)",
  worksapp: "rgba(236, 72, 153, 0.4)",
  "slick-magic-ai": "rgba(139, 92, 246, 0.4)",
  bebalanced: "rgba(20, 184, 166, 0.4)",
  jessiai: "rgba(99, 102, 241, 0.4)",
  "purchase-portal": "rgba(245, 158, 11, 0.4)",
  "call-center-backend": "rgba(59, 130, 246, 0.4)",
  "arms-crm-dialer": "rgba(139, 92, 246, 0.4)",
  referpool: "rgba(16, 185, 129, 0.4)",
  twinsting: "rgba(236, 72, 153, 0.4)",
};

export function ProjectCard({
  project,
  index = 0,
  onClick,
}: Readonly<{
  project: Project;
  index?: number;
  large?: boolean;
  onClick?: (project: Project) => void;
}>) {
  const accentBorder = ACCENT_COLORS[project.slug] || "rgba(56, 189, 248, 0.4)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative h-full"
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
        className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:bg-signal-2"
        style={
          {
            // Set custom border-color property dynamically on hover
            "--hover-border-color": accentBorder,
          } as any
        }
      >
        {/* Browser Chrome Header & aspect-16/10 Container */}
        <section className="relative flex flex-col border-b border-line bg-surface-elevated/40">
          {/* Browser Dots Bar */}
          <div className="flex shrink-0 items-center gap-1.5 px-4 py-2.5 border-b border-line bg-surface-elevated">
            <span className="size-2 rounded-full bg-slate-dim/60" />
            <span className="size-2 rounded-full bg-slate-dim/60" />
            <span className="size-2 rounded-full bg-slate-dim/60" />
            <span className="ml-2 font-mono text-[9px] text-slate-dim uppercase tracking-wider">
              {project.title.toLowerCase().replace(/\s+/g, "_")}.html
            </span>
          </div>

          {/* Fixed aspect ratio container */}
          <div className="relative aspect-16/10 w-full overflow-hidden flex items-center justify-center bg-void">
            {project.image ? (
              <>
                <div className="absolute inset-0 bg-accent/5 opacity-50 z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={675}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover opacity-85 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </>
            ) : (
              <div className="absolute inset-0 overflow-hidden bg-surface-elevated p-6 text-center flex items-center justify-center">
                <div className="absolute inset-0 grid-bg opacity-10" />
                <div className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl transition-transform duration-700 group-hover:scale-125" />

                <div className="relative z-10 flex flex-col items-center justify-center gap-3">
                  <div className="relative flex size-12 items-center justify-center rounded-xl border border-line bg-surface transition group-hover:border-accent/40 group-hover:bg-accent-soft/10">
                    {project.type === "backend" ? (
                      <Database className="size-5 text-slate-dim transition group-hover:text-accent" />
                    ) : (
                      <Lock className="size-5 text-slate-dim transition group-hover:text-accent" />
                    )}
                  </div>

                  <span className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-dim">
                    {project.type === "backend"
                      ? "Backend infrastructure"
                      : "NDA protected"}
                  </span>
                </div>
              </div>
            )}

            {/* Tags overlay */}
            <div className="absolute left-4 bottom-4 z-20 flex flex-wrap gap-1.5">
              {project.tags.slice(0, 2).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-surface/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-slate backdrop-blur-xs"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Icon link indicator */}
            <div className="absolute right-4 bottom-4 z-20 inline-flex size-8 items-center justify-center rounded-full border border-line bg-surface/90 text-slate backdrop-blur-xs transition group-hover:border-accent group-hover:bg-accent group-hover:text-background">
              <ArrowUpRight className="size-3.5 transition-transform group-hover:rotate-12" />
            </div>
          </div>
        </section>

        {/* Card Details */}
        <section className="flex flex-col justify-between p-5 grow">
          <div className="mb-4">
            <h3 className="font-display text-2xl leading-snug text-bone font-light transition-colors group-hover:text-cyan">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              {project.tagline}
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-dim">
            <span>{project.client}</span>
            <span>{project.year}</span>
          </div>
        </section>
      </Link>

      <style jsx global>{`
        .group:hover .group {
          border-color: var(--hover-border-color) !important;
        }
      `}</style>
    </motion.div>
  );
}
