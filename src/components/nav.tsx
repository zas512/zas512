"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5"
    >
      <nav className="glass flex items-center gap-1 rounded-full px-2 py-2 text-sm">
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full px-3 py-1.5 text-foreground"
        >
          <span className="relative size-2 rounded-full bg-primary">
            <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-60" />
          </span>
          <span className="font-display text-base tracking-tight">
            {profile.handle}
          </span>
        </Link>
        <NavLink to="/" label="Home" />
        <NavLink to="/work" label="Work" />
      </nav>
    </motion.header>
  );
}

function NavLink({
  to,
  label,
}: Readonly<{ to: "/" | "/work"; label: string }>) {
  return (
    <Link
      href={to}
      className="rounded-full px-3 py-1.5 text-muted-foreground transition hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
    >
      {label}
    </Link>
  );
}
