"use client";
import { projects, type Project } from "@/lib/data";
import { gsap } from "gsap";
import {
  AlertCircle,
  ArrowLeft,
  ArrowUpRight,
  Database,
  Lock
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiGithub } from "react-icons/si";
import { use, useEffect, useRef, useState } from "react";

function isVideoUrl(url: string) {
  if (!url) {
    return false;
  }

  const normalized = url.toLowerCase();
  return (
    normalized.endsWith(".mp4") ||
    normalized.endsWith(".webm") ||
    normalized.endsWith(".ogg") ||
    normalized.includes("/video/upload/")
  );
}

function isTrustedRemoteImage(url: string) {
  return /^https:\/\/res\.cloudinary\.com\//i.test(url);
}

function mediaKey(src: string, index: number) {
  return `${src}-${index}`;
}

function HeroMedia({
  title,
  image,
  video,
  onImageError,
  heroImageFailed
}: Readonly<{
  title: string;
  image?: string;
  video?: string;
  onImageError: () => void;
  heroImageFailed: boolean;
}>) {
  if (video) {
    return (
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 size-full object-cover opacity-90"
      />
    );
  }

  if (image && !heroImageFailed && isTrustedRemoteImage(image)) {
    return (
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 80vw"
        onError={onImageError}
        className="absolute inset-0 size-full object-cover opacity-90"
      />
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/35">
      <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-white/70">
        Media unavailable
      </div>
    </div>
  );
}

function GalleryMedia({
  src,
  index,
  title,
  failed,
  onImageError
}: Readonly<{
  src: string;
  index: number;
  title: string;
  failed: boolean;
  onImageError: () => void;
}>) {
  if (isVideoUrl(src)) {
    return (
      <video
        src={src}
        controls
        loop
        muted
        playsInline
        className="aspect-4/3 w-full object-cover transition duration-700"
      />
    );
  }

  if (failed || !isTrustedRemoteImage(src)) {
    return (
      <div className="flex aspect-4/3 items-center justify-center bg-black/20 text-center">
        <span className="px-4 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
          Image unavailable
        </span>
      </div>
    );
  }

  return (
    <div className="relative aspect-4/3">
      <Image
        src={src}
        alt={`${title} screenshot ${index + 1}`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        loading="lazy"
        onError={onImageError}
        className="object-cover transition duration-700"
      />
    </div>
  );
}

function projectStatus(project: Project) {
  return project.gitHubRepo === "private" || project.githubUrl === "private"
    ? "Proprietary"
    : "Public";
}

function projectRepoHref(project: Project) {
  if (project.githubUrl === "private" || project.gitHubRepo === "private") {
    return undefined;
  }

  return project.githubUrl;
}

export function ProjectPageClient({
  project: p
}: Readonly<{ project: Project }>) {
  const pageRef = useRef<HTMLDivElement>(null);
  const [heroImageFailed, setHeroImageFailed] = useState(false);
  const [galleryImageFailed, setGalleryImageFailed] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      const staggers = pageRef.current?.querySelectorAll(".animate-stagger");
      if (!staggers || staggers.length === 0) {
        return;
      }

      gsap.fromTo(
        staggers,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.64,
          stagger: 0.06,
          ease: "power4.out",
          delay: 0.06
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, [p.slug]);

  const hasMedia = Boolean(p.image || p.video);
  const repoHref = projectRepoHref(p);
  const isPrivateRepo = !repoHref;

  return (
    <main ref={pageRef} className="relative overflow-hidden pt-28">
      <div
        className={`pointer-events-none absolute -top-40 -z-10 size-125 rounded-full bg-linear-to-br ${p.accent ?? "from-primary/20 to-accent/10"} left-1/4 blur-3xl opacity-20`}
      />
      <div
        className={`pointer-events-none absolute top-1/2 -right-40 -z-10 size-125 rounded-full bg-linear-to-br ${p.accent ?? "from-primary/20 to-accent/10"} blur-3xl opacity-15`}
      />

      <div className="container mx-auto max-w-5xl px-6">
        <div className="animate-stagger">
          <Link
            href="/work"
            data-cursor="hover"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            Back to all work
          </Link>
        </div>

        <div className="animate-stagger mt-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-card/60 px-2.5 py-1 text-xs uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="mt-5 font-display text-5xl leading-none text-foreground md:text-7xl">
                {p.title}
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
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
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45"
                >
                  Live <ArrowUpRight className="size-4" />
                </a>
              )}
              {p.githubUrl &&
                (isPrivateRepo ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium text-muted-foreground opacity-70">
                    <SiGithub className="size-4" />
                    Private Repo
                  </span>
                ) : (
                  <a
                    href={repoHref}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="hover"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium transition hover:bg-card active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45"
                  >
                    <SiGithub className="size-4" />
                    Source
                  </a>
                ))}
            </div>
          </div>
        </div>

        {hasMedia ? (
          <div className="animate-stagger mt-12 overflow-hidden rounded-3xl border border-border bg-card/40 shadow-2xl">
            <div className="relative aspect-video overflow-hidden">
              <div
                className={`absolute inset-0 bg-linear-to-br ${p.accent ?? "from-primary/20 to-accent/10"} opacity-40`}
              />
              <HeroMedia
                title={p.title}
                image={p.image}
                video={p.video}
                heroImageFailed={heroImageFailed}
                onImageError={() => setHeroImageFailed(true)}
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/10 to-transparent" />
            </div>
          </div>
        ) : (
          <div className="animate-stagger mt-12 overflow-hidden rounded-3xl border border-border bg-card/10 shadow-2xl">
            <div className="relative flex aspect-video select-none flex-col items-center justify-center overflow-hidden p-8">
              <div
                className={`absolute inset-0 bg-linear-to-br ${p.accent ?? "from-neutral-900 via-neutral-950 to-neutral-900"}`}
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] opacity-35" />
              <div className="absolute top-1/2 left-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[96px]" />

              <div className="relative z-10 flex max-w-md flex-col items-center gap-4 text-center">
                <div className="relative flex size-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
                  <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-primary/10 to-accent/10" />
                  {p.type === "backend" ? (
                    <Database className="size-9 text-muted-foreground" />
                  ) : (
                    <Lock className="size-9 text-muted-foreground" />
                  )}
                </div>

                <div>
                  <h3 className="font-display text-3xl text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {p.type === "backend"
                      ? "Architecture, APIs, and systems design under active deployment."
                      : "Details are restricted under non-disclosure agreements."}
                  </p>
                </div>

                <span className="mt-2 rounded-full border border-white/5 bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground/80">
                  {p.type === "backend"
                    ? "Proprietary Backend System"
                    : "Client NDA Protected"}
                </span>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/10 to-transparent" />
            </div>
          </div>
        )}

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
            <div className="mt-2 font-display text-2xl">{projectStatus(p)}</div>
          </div>
        </div>

        <div className="animate-stagger mt-20 grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Overview
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">The brief</h2>
          </div>
          <div className="space-y-6 md:col-span-3">
            <p className="text-lg leading-relaxed text-foreground/90">
              {p.description || "No description provided."}
            </p>
            {p.problem && (
              <div className="rounded-2xl border border-border/50 bg-secondary/20 p-6 shadow-sm">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
                  <AlertCircle className="size-4" /> The Challenge
                </div>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {p.problem}
                </p>
              </div>
            )}
          </div>
        </div>

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
            <ul className="divide-y divide-border/40 md:col-span-3">
              {p.features.map((feature, index) => (
                <li
                  key={`${feature}-${index}`}
                  className="flex items-start gap-4 py-4 text-base text-foreground/90"
                >
                  <span className="mt-0.5 font-mono text-xs text-muted-foreground">
                    0{index + 1}
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {p.stack && p.stack.length > 0 && (
          <div className="animate-stagger mt-20 border-t border-border pt-16">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Tech Stack
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {p.stack.map((stackItem) => (
                <span
                  key={stackItem}
                  className="rounded-full border border-border bg-secondary/40 px-4 py-2 text-xs font-mono text-foreground/90 transition duration-300 hover:border-primary/40 hover:bg-secondary/60"
                >
                  {stackItem}
                </span>
              ))}
            </div>
          </div>
        )}

        {p.metrics && p.metrics.length > 0 && (
          <div className="animate-stagger mt-20 space-y-6 border-t border-border pt-16">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Impact & Performance
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {p.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="glow-ring rounded-2xl border border-border bg-card/40 p-6 transition duration-300 hover:scale-[1.02]"
                >
                  <div className="font-display text-4xl text-foreground md:text-5xl">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {p.gallery && p.gallery.length > 0 && (
          <div className="animate-stagger mt-20 space-y-6 border-t border-border pt-16">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Project Gallery
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {p.gallery.map((src, i) => (
                <div
                  key={mediaKey(src, i)}
                  className="group overflow-hidden rounded-2xl border border-border bg-secondary/10 shadow-md transition duration-300 hover:border-primary/40"
                >
                  <GalleryMedia
                    src={src}
                    index={i}
                    title={p.title}
                    failed={Boolean(galleryImageFailed[mediaKey(src, i)])}
                    onImageError={() =>
                      setGalleryImageFailed((prev) => ({
                        ...prev,
                        [mediaKey(src, i)]: true
                      }))
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="animate-stagger mt-32 flex flex-col items-center gap-6 border-t border-border pt-16 pb-24 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
            Next
          </p>
          <Link
            href="/work"
            data-cursor="hover"
            className="group font-display text-4xl text-foreground transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 md:text-6xl"
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
  params
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  const { id } = use(params);
  const project = projects.find((entry) => entry.slug === id);

  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} />;
}
