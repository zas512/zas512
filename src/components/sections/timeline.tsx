"use client";
import { experience } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"]
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-24 md:py-32" id="experience">
      <div className="container mx-auto">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            03 / EXPERIENCE
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] text-foreground md:text-6xl font-light">
            A track record of <span className="italic">shipping systems</span>.
          </h2>
          <p className="mt-4 text-base text-foreground-muted leading-relaxed font-sans max-w-xl">
            Building production software, developer tooling, and real-time
            infrastructure at CCRIPT Agency and beyond.
          </p>
        </div>

        <div ref={ref} className="relative mt-20">
          {/* Central timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ height }}
            className="absolute left-4 top-0 w-px bg-accent md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-16">
            {experience.map((e, i) => (
              <Row key={e.company} item={e} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  item,
  index
}: Readonly<{ item: (typeof experience)[number]; index: number }>) {
  const isLeft = index % 2 === 0;
  const isCurrent = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative grid grid-cols-1 gap-6 pl-12 md:grid-cols-2 md:gap-12 md:pl-0`}
    >
      {/* Node dot on timeline */}
      <div
        className={`absolute left-4 top-2 size-3.5 -translate-x-1.5 rounded-full border border-background ring-4 ring-background md:left-1/2 md:-translate-x-1/2 ${
          isCurrent ? "bg-accent" : "bg-foreground-subtle"
        }`}
      >
        {isCurrent && (
          <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-50" />
        )}
      </div>

      {/* Role title and period */}
      <div
        className={`${isLeft ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}
      >
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          {item.period}
        </div>
        <h3 className="mt-2 font-display text-2xl md:text-3xl text-foreground font-light">
          {item.role}
        </h3>
        <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-foreground-muted">
          {item.company} ·{" "}
          <span className="text-foreground-subtle">{item.location}</span>
        </div>
      </div>

      {/* Details and stack */}
      <div
        className={`${isLeft ? "md:pl-12" : "md:order-1 md:pr-12 md:text-right"}`}
      >
        <p className="text-sm text-foreground-muted leading-relaxed font-sans">
          {item.summary}
        </p>

        {/* Achievements list: Show detailed list for current, compact list for older */}
        {isCurrent ? (
          <div className="mt-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground-subtle block mb-2">
              Selected systems & contributions:
            </span>
            <ul
              className={`space-y-2 text-sm text-foreground-muted ${isLeft ? "text-left" : "md:text-right"}`}
            >
              {item.achievements.map((a) => (
                <li
                  key={a}
                  className="relative pl-4 md:pl-0 flex items-start gap-2 justify-start md:justify-end md:flex-row-reverse"
                >
                  <span className="text-accent">&bull;</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="mt-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground-subtle block mb-1">
              Systems:
            </span>
            <p className="text-xs text-foreground-subtle leading-relaxed">
              {item.achievements.map((a) => a.split(" - ")[0]).join(" · ")}
            </p>
          </div>
        )}

        <div
          className={`mt-4 flex flex-wrap gap-1.5 ${isLeft ? "" : "md:justify-end"}`}
        >
          {item.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-[10px] text-foreground-muted uppercase tracking-wider"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
