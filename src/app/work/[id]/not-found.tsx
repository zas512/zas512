import Link from "next/link";

export default function WorkProjectNotFound() {
  return (
    <main className="container mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Project Not Found
      </p>
      <h1 className="mt-3 font-display text-4xl leading-none text-foreground md:text-6xl">
        This case study does not exist
      </h1>
      <p className="mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
        The project link may be outdated or the case study has moved. Browse all
        available work to continue.
      </p>
      <Link
        href="/work"
        className="mt-8 rounded-full border border-primary/40 bg-primary/15 px-5 py-2 text-sm text-primary transition hover:bg-primary/20"
      >
        View all projects
      </Link>
    </main>
  );
}
