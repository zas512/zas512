import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { X, ArrowUpRight, AlertCircle } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { Project } from "@/lib/data";

export function ProjectDetailsDialog({
  project,
  onClose,
}: Readonly<{
  project: Project | null;
  onClose: () => void;
}>) {
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    // Lock body scroll via style to be fully robust and simple
    document.body.style.overflow = "hidden";

    // Entrance animation
    const ctx = gsap.context(() => {
      // 1. Overlay Fade
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.35, ease: "power2.out" },
      );

      // 2. Content Slide & Scale Up
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power4.out", delay: 0.05 },
      );

      // 3. Staggered reveal for children
      const staggers = contentRef.current?.querySelectorAll(".animate-stagger");
      if (staggers && staggers.length > 0) {
        gsap.fromTo(
          staggers,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "power3.out",
            delay: 0.15,
          },
        );
      }
    });

    return () => {
      document.body.style.overflow = "";
      ctx.revert();
    };
  }, [project]);

  if (!project) return null;

  const handleClose = () => {
    if (!contentRef.current || !overlayRef.current) {
      onClose();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        onClose();
      },
    });

    tl.to(contentRef.current, {
      opacity: 0,
      y: 30,
      scale: 0.96,
      duration: 0.3,
      ease: "power3.in",
    }).to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
      },
      "-=0.2",
    );
  };

  const isVideoUrl = (url: string) => {
    if (!url) return false;
    return (
      url.endsWith(".mp4") ||
      url.endsWith(".webm") ||
      url.endsWith(".ogg") ||
      url.includes("/video/upload/")
    );
  };

  return (
    <DialogPrimitive.Root open={true}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          ref={overlayRef}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md"
          onClick={handleClose}
        />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden pointer-events-none">
          <DialogPrimitive.Content
            ref={contentRef}
            onEscapeKeyDown={(e) => {
              e.preventDefault();
              handleClose();
            }}
            onPointerDownOutside={(e) => {
              e.preventDefault();
              handleClose();
            }}
            className="relative w-full max-w-5xl h-[85vh] overflow-y-auto rounded-3xl border border-border bg-card/90 glass text-foreground focus:outline-none shadow-2xl flex flex-col pointer-events-auto select-none"
            style={{ scrollbarWidth: "thin" }}
          >
            {/* Ambient Background Aura */}
            <div
              className={`absolute -top-40 -left-40 size-96 rounded-full bg-linear-to-br ${project.accent ?? "from-primary/20 to-accent/10"} blur-3xl opacity-30 pointer-events-none -z-10`}
            />
            <div
              className={`absolute -bottom-40 -right-40 size-96 rounded-full bg-linear-to-br ${project.accent ?? "from-primary/20 to-accent/10"} blur-3xl opacity-20 pointer-events-none -z-10`}
            />

            {/* Custom Close Button */}
            <button
              onClick={handleClose}
              data-cursor="hover"
              className="absolute right-6 top-6 z-50 rounded-full border border-border bg-background/50 p-2.5 backdrop-blur cursor-pointer transition hover:bg-background hover:scale-105 active:scale-95"
            >
              <X className="size-5" />
            </button>

            {/* Image / Video Banner */}
            <section className="relative aspect-video md:aspect-21/9 w-full overflow-hidden shrink-0">
              <div
                className={`absolute inset-0 bg-linear-to-br ${project.accent ?? "from-primary/20 to-accent/10"} opacity-40`}
              />
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 size-full object-cover opacity-90"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 size-full object-cover opacity-90"
                />
              )}
              <div className="absolute inset-0 bg-linear-to-t from-card via-card/10 to-transparent" />
            </section>

            {/* Content Details */}
            <section className="px-6 py-8 md:p-10 space-y-10 grow select-text">
              {/* Header Title + Links */}
              <div className="animate-stagger flex flex-wrap items-start justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl text-gradient">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-lg text-muted-foreground">{project.tagline}</p>
                </div>

                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="hover"
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90 active:scale-95"
                    >
                      Live <ArrowUpRight className="size-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={
                        project.githubUrl === "private" || project.gitHubRepo === "private"
                          ? undefined
                          : project.githubUrl
                      }
                      target="_blank"
                      rel="noreferrer"
                      data-cursor={
                        project.githubUrl === "private" || project.gitHubRepo === "private"
                          ? undefined
                          : "hover"
                      }
                      className={`inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium transition ${
                        project.githubUrl === "private" || project.gitHubRepo === "private"
                          ? "opacity-50 cursor-not-allowed text-muted-foreground"
                          : "hover:bg-card active:scale-95"
                      }`}
                    >
                      <SiGithub className="size-4" />
                      {project.githubUrl === "private" || project.gitHubRepo === "private"
                        ? "Private Repo"
                        : "Source"}
                    </a>
                  )}
                </div>
              </div>

              {/* Year, Client, Role Info */}
              <div className="animate-stagger grid grid-cols-2 gap-6 border-y border-border py-6 md:grid-cols-4">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Year
                  </div>
                  <div className="mt-2 font-display text-2xl">{project.year || "—"}</div>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Client
                  </div>
                  <div className="mt-2 font-display text-2xl">{project.client || "—"}</div>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Role
                  </div>
                  <div className="mt-2 font-display text-2xl">{project.role || "—"}</div>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Status
                  </div>
                  <div className="mt-2 font-display text-2xl">
                    {project.gitHubRepo === "private" || project.githubUrl === "private"
                      ? "Proprietary"
                      : "Public"}
                  </div>
                </div>
              </div>

              {/* Description + Problem */}
              <div className="animate-stagger grid gap-10 md:grid-cols-5">
                <div className="md:col-span-2">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Overview
                  </p>
                  <h3 className="mt-2 font-display text-3xl">The brief</h3>
                </div>
                <div className="md:col-span-3 space-y-6">
                  <p className="text-base text-foreground/90 leading-relaxed">
                    {project.description || "No description provided."}
                  </p>
                  {project.problem && (
                    <div className="rounded-2xl border border-border/50 bg-secondary/20 p-5">
                      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
                        <AlertCircle className="size-4" /> The Challenge
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Shipped Features */}
              {project.features && project.features.length > 0 && (
                <div className="animate-stagger grid gap-10 border-t border-border pt-10 md:grid-cols-5">
                  <div className="md:col-span-2">
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      Features
                    </p>
                    <h3 className="mt-2 font-display text-3xl">What we shipped</h3>
                  </div>
                  <ul className="md:col-span-3 divide-y divide-border/40">
                    {project.features.map((f, i) => (
                      <li
                        key={f + i}
                        className="flex items-start gap-4 py-4 text-sm text-foreground/90"
                      >
                        <span className="font-mono text-xs text-muted-foreground mt-0.5">
                          0{i + 1}
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Stack */}
              {project.stack && project.stack.length > 0 && (
                <div className="animate-stagger border-t border-border pt-10">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Tech Stack
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-secondary/40 px-3.5 py-1.5 text-xs font-mono text-foreground/90 transition hover:border-primary/30"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="animate-stagger border-t border-border pt-10 space-y-6">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Impact & Performance
                  </p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-2xl border border-border bg-card/60 p-5 glow-ring transition hover:scale-[1.02]"
                      >
                        <div className="font-display text-4xl text-gradient">{m.value}</div>
                        <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Media Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="animate-stagger border-t border-border pt-10 space-y-6">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Project Gallery
                  </p>
                  <div className="grid gap-6 md:grid-cols-2">
                    {project.gallery.map((src, i) => (
                      <div
                        key={src + i}
                        className="group overflow-hidden rounded-2xl border border-border bg-secondary/10 transition hover:border-primary/30"
                      >
                        {isVideoUrl(src) ? (
                          <video
                            src={src}
                            controls
                            loop
                            muted
                            playsInline
                            className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                          />
                        ) : (
                          <img
                            src={src}
                            alt={`${project.title} screenshot ${i + 1}`}
                            loading="lazy"
                            className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          </DialogPrimitive.Content>
        </div>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
