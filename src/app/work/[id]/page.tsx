"use client";
import { useEffect, useRef, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { gsap } from "gsap";
import {
  ArrowLeft,
  ArrowUpRight,
  AlertCircle,
  Database,
  Lock,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects, type Project } from "@/lib/data";
import Image from "next/image";

export function ProjectPageClient({
  project: p,
}: Readonly<{ project: Project }>) {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP entrance reveal animation
    const ctx = gsap.context(() => {
      const staggers = pageRef.current?.querySelectorAll(".animate-stagger");
      if (staggers && staggers.length > 0) {
        gsap.fromTo(
          staggers,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power4.out",
            delay: 0.1,
          },
        );
      }
    }, pageRef);

    return () => ctx.revert();
  }, [p.slug]);

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
    <main className="relative pt-28 overflow-hidden" ref={pageRef}>
      {/* Ambient Background Aura reflecting project accent theme */}
      <div
        className={`absolute -top-40 left-1/4 size-125 rounded-full bg-linear-to-br ${p.accent ?? "from-primary/20 to-accent/10"} blur-3xl opacity-20 pointer-events-none -z-10`}
      />
      <div
        className={`absolute top-1/2 -right-40 size-125 rounded-full bg-linear-to-br ${p.accent ?? "from-primary/20 to-accent/10"} blur-3xl opacity-15 pointer-events-none -z-10`}
      />

      <div className="container mx-auto px-6 max-w-5xl">
        {/* Back Link */}
        <div className="animate-stagger">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            data-cursor="hover"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            Back to all work
          </Link>
        </div>

        {/* Header Block: Title + Tagline + Live & Code Links */}
        <div className="animate-stagger mt-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-card/60 px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h1 className="mt-5 font-display text-5xl leading-none md:text-7xl text-gradient">
                {p.title}
              </h1>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground leading-relaxed">
                {p.tagline}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90 active:scale-95"
                >
                  Live <ArrowUpRight className="size-4" />
                </a>
              )}
              {p.githubUrl && (
                <a
                  href={
                    p.githubUrl === "private" || p.gitHubRepo === "private"
                      ? undefined
                      : p.githubUrl
                  }
                  target="_blank"
                  rel="noreferrer"
                  data-cursor={
                    p.githubUrl === "private" || p.gitHubRepo === "private"
                      ? undefined
                      : "hover"
                  }
                  className={`inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium transition ${
                    p.githubUrl === "private" || p.gitHubRepo === "private"
                      ? "opacity-50 cursor-not-allowed text-muted-foreground"
                      : "hover:bg-card active:scale-95"
                  }`}
                >
                  <SiGithub className="size-4" />
                  {p.githubUrl === "private" || p.gitHubRepo === "private"
                    ? "Private Repo"
                    : "Source"}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Image/Video Hero Banner */}
        {p.image || p.video ? (
          <div className="animate-stagger mt-12 overflow-hidden rounded-3xl border border-border bg-card/40 shadow-2xl">
            <div className="relative aspect-video overflow-hidden">
              <div
                className={`absolute inset-0 bg-linear-to-br ${p.accent ?? "from-primary/20 to-accent/10"} opacity-40`}
              />
              {p.video ? (
                <video
                  src={p.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 size-full object-cover opacity-90"
                />
              ) : (
                <Image
                  src={p.image || "/placeholder.jpg"}
                  alt={p.title}
                  className="absolute inset-0 size-full object-cover opacity-90"
                />
              )}
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/10 to-transparent" />
            </div>
          </div>
        ) : (
          <div className="animate-stagger mt-12 overflow-hidden rounded-3xl border border-border bg-card/10 shadow-2xl">
            <div className="relative aspect-video flex flex-col items-center justify-center p-8 overflow-hidden select-none">
              <div
                className={`absolute inset-0 bg-linear-to-br ${p.accent ?? "from-neutral-900 via-neutral-950 to-neutral-900"}`}
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] opacity-35" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-72 rounded-full bg-primary/10 blur-[96px]" />

              <div className="relative z-10 flex flex-col items-center gap-4 max-w-md text-center">
                <div className="relative flex size-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
                  <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-primary/10 to-accent/10" />
                  {p.type === "backend" ? (
                    <Database className="size-9 text-muted-foreground" />
                  ) : (
                    <Lock className="size-9 text-muted-foreground" />
                  )}
                </div>

                <div>
                  <h3 className="font-display text-3xl text-gradient">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {p.type === "backend"
                      ? "Architecture, APIs, and systems design under active deployment."
                      : "Details are restricted under non-disclosure agreements."}
                  </p>
                </div>

                <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80 bg-white/5 border border-white/5 px-3 py-1 rounded-full">
                  {p.type === "backend"
                    ? "Proprietary Backend System"
                    : "Client NDA Protected"}
                </span>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/10 to-transparent" />
            </div>
          </div>
        )}

        {/* Metadata Details Grid */}
        <div className="animate-stagger mt-16 grid grid-cols-2 gap-6 border-y border-border py-8 md:grid-cols-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Year
            </div>
            <div className="mt-2 font-display text-2xl">{p.year || "—"}</div>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Client
            </div>
            <div className="mt-2 font-display text-2xl">{p.client || "—"}</div>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Role
            </div>
            <div className="mt-2 font-display text-2xl">{p.role || "—"}</div>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Status
            </div>
            <div className="mt-2 font-display text-2xl">
              {p.gitHubRepo === "private" || p.githubUrl === "private"
                ? "Proprietary"
                : "Public"}
            </div>
          </div>
        </div>

        {/* Description + Problem */}
        <div className="animate-stagger mt-20 grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Overview
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              The brief
            </h2>
          </div>
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              {p.description || "No description provided."}
            </p>
            {p.problem && (
              <div className="rounded-2xl border border-border/50 bg-secondary/20 p-6 shadow-sm">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
                  <AlertCircle className="size-4" /> The Challenge
                </div>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  {p.problem}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Shipped Features */}
        {p.features && p.features.length > 0 && (
          <div className="animate-stagger mt-20 grid gap-12 border-t border-border pt-16 md:grid-cols-5">
            <div className="md:col-span-2">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Features
              </p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">
                What we shipped
              </h2>
            </div>
            <ul className="md:col-span-3 divide-y divide-border/40">
              {p.features.map((f, i) => (
                <li
                  key={f + i}
                  className="flex items-start gap-4 py-4 text-base text-foreground/90"
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
        {p.stack && p.stack.length > 0 && (
          <div className="animate-stagger mt-20 border-t border-border pt-16">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Tech Stack
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-secondary/40 px-4 py-2 text-xs font-mono text-foreground/90 transition duration-300 hover:border-primary/40 hover:bg-secondary/60"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Metrics Grid */}
        {p.metrics && p.metrics.length > 0 && (
          <div className="animate-stagger mt-20 border-t border-border pt-16 space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Impact & Performance
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {p.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-border bg-card/40 p-6 glow-ring transition duration-300 hover:scale-[1.02]"
                >
                  <div className="font-display text-4xl text-gradient md:text-5xl">
                    {m.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Media Gallery */}
        {p.gallery && p.gallery.length > 0 && (
          <div className="animate-stagger mt-20 border-t border-border pt-16 space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Project Gallery
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {p.gallery.map((src, i) => (
                <div
                  key={src + i}
                  className="group overflow-hidden rounded-2xl border border-border bg-secondary/10 transition duration-300 hover:border-primary/40 shadow-md"
                >
                  {isVideoUrl(src) ? (
                    <video
                      src={src}
                      controls
                      loop
                      muted
                      playsInline
                      className="aspect-4/3 w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <img
                      src={src}
                      alt={`${p.title} screenshot ${i + 1}`}
                      loading="lazy"
                      className="aspect-4/3 w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next Project / See All Link */}
        <div className="animate-stagger mt-32 flex flex-col items-center gap-6 border-t border-border pt-16 text-center pb-24">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
            Next
          </p>
          <Link
            href="/work"
            className="group font-display text-4xl text-gradient md:text-6xl hover:opacity-85 transition-opacity"
            data-cursor="hover"
          >
            See all work{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const project = projects.find((p) => p.slug === id);

  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} />;
}
