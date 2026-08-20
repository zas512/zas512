"use client";
import { TechIcon } from "@/components/tech-icon";
import { techStack } from "@/lib/data";
import { motion } from "framer-motion";

export function TechOrbit() {
  const inner = techStack.slice(0, 8);
  const outer = techStack.slice(8);

  return (
    <section className="relative overflow-hidden py-32">
      <div className="container px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            04 / CORE ABILITIES
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] text-foreground md:text-6xl font-light">
            The toolkit <span className="italic">in orbit</span>.
          </h2>
          <p className="mt-4 text-base text-foreground-muted leading-relaxed font-sans max-w-xl">
            A polyglot stack chosen per problem. Hover any icon to bring it
            forward.
          </p>
        </div>

        {/* Orbit */}
        <div className="relative mx-auto mt-20 aspect-square w-full max-w-180">
          {[0.42, 0.66, 0.92].map((r, i) => (
            <div
              key={r}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border"
              style={{
                width: `${r * 100}%`,
                height: `${r * 100}%`,
                opacity: 0.55 - i * 0.12
              }}
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
      </div>
    </section>
  );
}

function OrbitRing({
  items,
  radius,
  duration,
  reverse = false
}: Readonly<{
  items: { name: string; slug: string; color: string }[];
  radius: number;
  duration: number;
  reverse?: boolean;
}>) {
  const spinClass = reverse ? "spin-counter" : "spin-clockwise";
  const counterSpinClass = reverse ? "spin-clockwise" : "spin-counter";

  return (
    <div
      className="absolute inset-0"
      style={{
        animation: `${spinClass} ${duration}s linear infinite`,
        willChange: "transform"
      }}
    >
      {items.map((it, i) => {
        const angle = (360 / items.length) * i;
        const rad = (angle * Math.PI) / 180;
        const x = 50 + radius * Math.cos(rad);
        const y = 50 + radius * Math.sin(rad);
        return (
          <div
            key={it.name}
            className="absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
              animation: `${counterSpinClass} ${duration}s linear infinite`,
              willChange: "transform"
            }}
          >
            <div
              data-cursor="hover"
              className="bg-surface border border-border group flex h-12 items-center gap-2 rounded-xl px-3 text-xs font-medium transition hover:scale-110 hover:border-primary max-w-28 sm:max-w-32 min-w-0"
              title={it.name}
            >
              <TechIcon
                slug={it.slug}
                color={it.color}
                size={18}
                className="shrink-0"
              />
              <span className="hidden sm:inline truncate">{it.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
