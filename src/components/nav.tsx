"use client";
import { profile } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5"
    >
      <nav className="glass flex backdrop-blur-3xl items-center gap-2 rounded-full px-3 py-2 text-xs font-mono tracking-wider">
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full px-3 py-1 text-foreground"
        >
          <span className="relative size-2 rounded-full bg-accent">
            <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-60" />
          </span>
          <span className="font-sans text-sm font-semibold tracking-tight">
            {profile.handle}
          </span>
        </Link>
        <div className="h-4 w-px bg-border-strong mx-1" />
        <NavLink to="/" label="Home" active={pathname === "/"} />
        <NavLink to="/work" label="Work" active={pathname === "/work"} />
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-3 py-1.5 text-foreground-muted transition hover:text-foreground uppercase tracking-widest font-mono text-xs"
        >
          Resume
        </a>
        <a
          href="https://calendly.com/zas512"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-3 py-1.5 text-foreground-muted transition hover:text-foreground uppercase tracking-widest font-mono text-xs"
        >
          Book Call
        </a>
        <Link
          href="/#contact"
          className="rounded-full px-3 py-1.5 text-foreground-muted transition hover:text-foreground uppercase tracking-widest font-mono text-xs"
        >
          Contact
        </Link>
      </nav>
    </motion.header>
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
      className={`rounded-full px-3 py-1.5 transition uppercase tracking-widest font-mono text-xs ${
        active
          ? "text-accent bg-accent-soft/20 border border-accent/10"
          : "text-foreground-muted hover:text-foreground"
      }`}
    >
      {label}
    </Link>
  );
}
