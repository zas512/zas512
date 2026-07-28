"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/data";

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            / 02 - Experience
          </p>
          <h2 className="mt-3 text-4xl font-display md:text-6xl">
            A <span className="italic text-gradient">decade-in-the-making</span> taste for craft.
          </h2>
        </div>

        <div ref={ref} className="relative mt-20">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ height }}
            className="absolute left-4 top-0 w-px bg-linear-to-b from-primary via-accent to-transparent md:left-1/2 md:-translate-x-1/2"
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

function Row({ item, index }: { item: (typeof experience)[number]; index: number }) {
  const isLeft = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative grid grid-cols-1 gap-6 pl-12 md:grid-cols-2 md:gap-12 md:pl-0`}
    >
      <div className="absolute left-4 top-2 size-3 -translate-x-1.25 rounded-full bg-primary ring-4 ring-background md:left-1/2 md:-translate-x-1/2">
        <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-50" />
      </div>
      <div className={`${isLeft ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {item.period}
        </div>
        <h3 className="mt-2 font-display text-2xl md:text-3xl">{item.role}</h3>
        <div className="mt-1 text-primary">
          {item.company} · <span className="text-muted-foreground">{item.location}</span>
        </div>
      </div>
      <div className={`${isLeft ? "md:pl-12" : "md:order-1 md:pr-12 md:text-right"}`}>
        <p className="text-sm text-muted-foreground">{item.summary}</p>
        <ul className={`mt-4 space-y-1.5 text-sm ${isLeft ? "" : "md:[&>li]:before:hidden"}`}>
          {item.achievements.map((a) => (
            <li key={a} className="text-foreground/90">
             &bull; {a}
            </li>
          ))}
        </ul>
        <div className={`mt-4 flex flex-wrap gap-1.5 ${isLeft ? "" : "md:justify-end"}`}>
          {item.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-[11px] text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
