"use client";
import { profile } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="animate-nav-in fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 font-mono tracking-wider sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2 text-foreground"
        >
          <span className="font-sans text-sm font-medium">
            {profile.handle}
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <NavLink to="/" label="Home" active={pathname === "/"} />
          <NavLink to="/work" label="Work" active={pathname === "/work"} />
        </div>
      </nav>
    </header>
  );
}

function NavLink({
  to,
  label,
  active,
}: Readonly<{ to: "/" | "/work"; label: string; active: boolean }>) {
  return (
    <Link
      href={to}
      className={`rounded-full border px-3 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors ${
        active
          ? "border-white/10 bg-white/10 text-foreground"
          : "border-transparent text-foreground-muted hover:text-foreground"
      }`}
    >
      {label}
    </Link>
  );
}
