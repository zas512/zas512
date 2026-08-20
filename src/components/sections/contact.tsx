"use client";
import { profile } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { Check, Copy } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { SiGithub, SiLinkerd, SiX } from "react-icons/si";

const lines = [
  { p: "$", t: "initializing secure channel…" },
  { p: ">", t: "handshake ok · tls 1.3" },
  { p: ">", t: "encrypted tunnel established" },
  { p: "$", t: "whoami" },
  { p: ">", t: `${profile.name} · ${profile.role}` },
  { p: "$", t: "status" },
  { p: ">", t: "available for select projects · Q1 2026" },
  { p: "$", t: "contact --send" }
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
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              06 / GET IN TOUCH
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] text-foreground md:text-6xl font-light">
              Let's build something{" "}
              <span className="italic">unforgettable</span>.
            </h2>
            <p className="mt-5 max-w-sm text-sm text-foreground-muted leading-relaxed font-sans">
              I take on a small number of partnerships per quarter. If you've
              got a product that deserves cinematic execution, send a line.
            </p>

            <button
              type="button"
              onClick={copy}
              data-cursor="hover"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-surface px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-foreground transition hover:border-border-strong hover:bg-surface-elevated"
            >
              <span className="text-foreground-muted">{profile.email}</span>
              {copied ? (
                <Check className="size-3.5 text-accent" />
              ) : (
                <Copy className="size-3.5 text-foreground-subtle group-hover:text-accent transition-colors" />
              )}
            </button>

            <div className="mt-6 flex flex-wrap gap-2">
              <Social
                icon={<SiGithub />}
                label="GitHub"
                href="https://github.com/zas512"
              />
              <Social
                icon={<SiLinkerd />}
                label="LinkedIn"
                href="https://www.linkedin.com/in/zas512/"
              />
              <Social icon={<SiX />} label="X" href="https://x.com/zas512" />
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
            <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl">
              <div className="flex items-center gap-2 border-b border-border bg-surface-elevated/50 px-4 py-3">
                <span className="size-2 rounded-full bg-border-strong" />
                <span className="size-2 rounded-full bg-border-strong" />
                <span className="size-2 rounded-full bg-border-strong" />
                <span className="ml-3 font-mono text-[10px] uppercase tracking-wider text-foreground-subtle">
                  ~/zain.dev - bash
                </span>
              </div>
              <div className="space-y-1.5 p-6 font-mono text-xs tracking-wider leading-relaxed">
                {lines.slice(0, shown).map((l) => (
                  <motion.div
                    key={`${l.p}-${l.t}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3"
                  >
                    <span className="text-accent">{l.p}</span>
                    <span
                      className={
                        l.p === "$"
                          ? "text-foreground"
                          : "text-foreground-muted"
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
                    className="mt-4 flex items-center gap-3 border-t border-border pt-4"
                  >
                    <span className="text-accent">$</span>
                    <input
                      placeholder="your@email.com - say hello"
                      className="flex-1 bg-transparent text-foreground outline-none placeholder:text-foreground-subtle text-xs"
                    />
                    <span className="inline-block h-3.5 w-1.5 animate-blink bg-accent" />
                    <button
                      type="submit"
                      className="rounded-full bg-accent-soft border border-accent/20 px-3.5 py-1 text-[10px] font-mono uppercase tracking-widest text-accent hover:bg-accent-soft/30 transition-all cursor-pointer"
                    >
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
  href
}: Readonly<{ icon: ReactNode; label: string; href: string }>) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      data-cursor="hover"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-foreground-muted transition hover:border-border-strong hover:text-foreground hover:bg-surface-elevated"
    >
      {icon} {label}
    </Link>
  );
}
