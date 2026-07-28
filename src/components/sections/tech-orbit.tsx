"use client";
import { motion } from "framer-motion";
import { techStack } from "@/lib/data";
import { TechIcon } from "@/components/tech-icon";

export function TechOrbit() {
  const inner = techStack.slice(0, 8);
  const outer = techStack.slice(8);

  return (
    <section className="relative overflow-hidden py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            / 03 - My core abilities
          </p>
          <h2 className="mt-3 text-4xl font-display md:text-6xl">
            The toolkit, <span className="italic text-gradient">in orbit</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
            A polyglot stack chosen per problem. Hover any icon to bring it forward.
          </p>
        </div>

        {/* Orbit */}
        <div className="relative mx-auto mt-20 aspect-square w-full max-w-180">
          {[0.42, 0.66, 0.92].map((r, i) => (
            <div
              key={r}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border"
              style={{ width: `${r * 100}%`, height: `${r * 100}%`, opacity: 0.55 - i * 0.12 }}
            />
          ))}

          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-primary to-accent shadow-[0_0_60px_var(--glow)]"
          >
            <div className="flex h-full w-full items-center justify-center font-display text-3xl text-background" />
          </motion.div>

          <OrbitRing items={inner} radius={33} duration={45} />
          <OrbitRing items={outer} radius={46} duration={70} reverse />
        </div>

        {/* Grid fallback / dense view */}
        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10">
          {techStack.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.025 }}
              data-cursor="hover"
              className="group relative flex aspect-square flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card/40 p-2 transition hover:-translate-y-1 hover:border-primary hover:bg-card"
              title={t.name}
            >
              <TechIcon slug={t.slug} color={t.color} size={26} />
              <span className="line-clamp-1 text-center text-[10px] text-muted-foreground transition group-hover:text-foreground">
                {t.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OrbitRing({
  items,
  radius,
  duration,
  reverse = false,
}: {
  items: { name: string; slug: string; color: string }[];
  radius: number;
  duration: number;
  reverse?: boolean;
}) {
  return (
    <motion.div
      className="absolute inset-0"
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {items.map((it, i) => {
        const angle = (360 / items.length) * i;
        const rad = (angle * Math.PI) / 180;
        const x = 50 + radius * Math.cos(rad);
        const y = 50 + radius * Math.sin(rad);
        return (
          <motion.div
            key={it.name}
            animate={{ rotate: reverse ? 360 : -360 }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
            className="absolute"
            style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
          >
            <div
              data-cursor="hover"
              className="glass group flex h-12 items-center gap-2 rounded-xl px-3 text-xs font-medium transition hover:scale-110 hover:border-primary"
              title={it.name}
            >
              <TechIcon slug={it.slug} color={it.color} size={18} />
              <span className="hidden sm:inline">{it.name}</span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
