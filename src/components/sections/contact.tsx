"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Copy, Check } from "lucide-react";
import { SiGithub, SiLinkerd, SiX } from "react-icons/si";
import { profile } from "@/lib/data";
import Link from "next/link";

const lines = [
  { p: "$", t: "initializing secure channel…" },
  { p: ">", t: "handshake ok · tls 1.3" },
  { p: ">", t: "encrypted tunnel established" },
  { p: "$", t: "whoami" },
  { p: ">", t: `${profile.name} · ${profile.role}` },
  { p: "$", t: "status" },
  { p: ">", t: "available for select projects · Q1 2026" },
  { p: "$", t: "contact --send" },
];

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [shown, setShown] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(i);
      if (i >= lines.length) clearInterval(id);
    }, 380);
    return () => clearInterval(id);
  }, [inView]);

  const copy = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              / 05 - Get in touch
            </p>
            <h2 className="mt-3 text-4xl font-display md:text-6xl">
              Let's build something{" "}
              <span className="italic text-gradient">unforgettable</span>.
            </h2>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">
              I take on a small number of partnerships per quarter. If you've
              got a product that deserves cinematic execution, send a line.
            </p>

            <button
              onClick={copy}
              data-cursor="hover"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card/60 px-5 py-3 text-sm backdrop-blur transition hover:border-primary"
            >
              <span className="font-mono">{profile.email}</span>
              {copied ? (
                <Check className="size-4 text-emerald-400" />
              ) : (
                <Copy className="size-4 text-muted-foreground group-hover:text-primary" />
              )}
            </button>

            <div className="mt-6 flex gap-3">
              <Social icon={<SiGithub />} label="GitHub" />
              <Social icon={<SiLinkerd />} label="LinkedIn" />
              <Social icon={<SiX />} label="X" />
            </div>
          </div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-3"
          >
            <div className="glow-ring overflow-hidden rounded-2xl bg-card">
              <div className="flex items-center gap-2 border-b border-border bg-surface-2/50 px-4 py-3">
                <span className="size-3 rounded-full bg-red-400/70" />
                <span className="size-3 rounded-full bg-amber-400/70" />
                <span className="size-3 rounded-full bg-emerald-400/70" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  ~/zain.dev - bash
                </span>
              </div>
              <div className="space-y-1.5 p-6 font-mono text-sm">
                {lines.slice(0, shown).map((l, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3"
                  >
                    <span
                      className={l.p === "$" ? "text-accent" : "text-primary"}
                    >
                      {l.p}
                    </span>
                    <span
                      className={
                        l.p === "$"
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }
                    >
                      {l.t}
                    </span>
                  </motion.div>
                ))}
                {shown >= lines.length && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      window.location.href = `mailto:${profile.email}`;
                    }}
                    className="mt-3 flex items-center gap-3 border-t border-border pt-4"
                  >
                    <span className="text-accent">$</span>
                    <input
                      placeholder="your@email.com - say hello"
                      className="flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
                    />
                    <span className="inline-block h-4 w-2 animate-blink bg-primary" />
                    <button className="rounded-md bg-foreground px-3 py-1 text-xs text-background">
                      send
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Social({
  icon,
  label,
}: Readonly<{ icon: React.ReactNode; label: string }>) {
  return (
    <Link
      href="#"
      data-cursor="hover"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-xs text-muted-foreground backdrop-blur transition hover:border-primary hover:text-foreground"
    >
      {icon} {label}
    </Link>
  );
}
