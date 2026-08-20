"use client";
import Link from "next/link";

export default function WorkError({
  error,
  reset
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  return (
    <main className="container mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Work Surface Error
      </p>
      <h1 className="mt-3 font-display text-4xl leading-none text-foreground md:text-6xl">
        Couldn&apos;t load this project view
      </h1>
      <p className="mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
        Something failed while rendering project proof content. You can retry,
        or return to all projects.
      </p>
      <p className="mt-3 break-all font-mono text-xs text-muted-foreground/80">
        {error.message || "Unknown rendering error"}
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-full border border-primary/40 bg-primary/15 px-5 py-2 text-sm text-primary transition hover:bg-primary/20"
        >
          Retry
        </button>
        <Link
          href="/work"
          className="rounded-full border border-border bg-card/60 px-5 py-2 text-sm text-foreground transition hover:bg-card"
        >
          Back to all work
        </Link>
      </div>
    </main>
  );
}
