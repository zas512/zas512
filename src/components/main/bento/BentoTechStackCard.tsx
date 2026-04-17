"use client";
import { useMemo, useState, type ReactNode } from "react";
import {
  SiCss,
  SiDocker,
  SiHtml5,
  SiNetlify,
  SiNodedotjs,
  SiPostgresql,
  SiShopify,
  SiSourcetree,
  SiTailwindcss,
} from "react-icons/si";
import LogoLoop from "@/components/LogoLoop";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { bentoGlassCard } from "./bento-surface";

type TechLogo = {
  node: ReactNode;
  title: string;
  href: string;
};

const iconClass = "size-[1.05rem] shrink-0 text-zinc-300";

function techPillRender(item: TechLogo, _key: string) {
  const pill = (
    <span className="inline-flex h-8 shrink-0 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 text-[11px] font-medium tracking-wide text-zinc-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
      <span className="flex items-center [&_svg]:size-[1.05rem]">
        {item.node}
      </span>
      <span className="font-mono text-[10px] text-zinc-400">{item.title}</span>
    </span>
  );
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex shrink-0 no-underline outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
      aria-label={item.title}
    >
      {pill}
    </a>
  );
}

function TechStackRow({
  direction,
  logos,
  ariaLabel,
  paused,
}: {
  direction: "left" | "right";
  logos: TechLogo[];
  ariaLabel: string;
  paused: boolean;
}) {
  return (
    <div className="relative h-[52px] w-full overflow-hidden md:h-[56px]">
      <LogoLoop
        logos={logos}
        speed={38}
        direction={direction}
        logoHeight={32}
        gap={28}
        pauseOnHover={false}
        paused={paused}
        scaleOnHover
        fadeOut
        fadeOutColor="rgb(9 9 11)"
        ariaLabel={ariaLabel}
        renderItem={(item: TechLogo, key: string) =>
          techPillRender(item as TechLogo, String(key))
        }
        className="h-full"
      />
    </div>
  );
}

export function BentoTechStackCard() {
  const [cardHovered, setCardHovered] = useState(false);

  const row1 = useMemo<TechLogo[]>(
    () => [
      {
        node: <SiHtml5 className={iconClass} />,
        title: "HTML",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        node: <SiCss className={iconClass} />,
        title: "CSS",
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        node: <SiTailwindcss className={iconClass} />,
        title: "Tailwind CSS",
        href: "https://tailwindcss.com",
      },
    ],
    [],
  );

  const row2 = useMemo<TechLogo[]>(
    () => [
      {
        node: <SiShopify className={iconClass} />,
        title: "Shopify",
        href: "https://www.shopify.com",
      },
      {
        node: <SiNodedotjs className={iconClass} />,
        title: "Node.js",
        href: "https://nodejs.org",
      },
      {
        node: <SiPostgresql className={iconClass} />,
        title: "PostgreSQL",
        href: "https://www.postgresql.org",
      },
    ],
    [],
  );

  const row3 = useMemo<TechLogo[]>(
    () => [
      {
        node: <SiNetlify className={iconClass} />,
        title: "Netlify",
        href: "https://www.netlify.com",
      },
      {
        node: <SiSourcetree className={iconClass} />,
        title: "Sourcetree",
        href: "https://www.sourcetreeapp.com",
      },
      {
        node: <SiDocker className={iconClass} />,
        title: "Docker",
        href: "https://www.docker.com",
      },
    ],
    [],
  );

  return (
    <Card
      size="sm"
      className={bentoGlassCard(
        "relative h-full min-h-[260px] overflow-hidden rounded-3xl md:min-h-full",
      )}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-90"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 85% 70% at 50% 108%, rgba(168, 85, 247, 0.14), transparent 52%), radial-gradient(circle at 50% 120%, rgba(236, 72, 153, 0.06), transparent 45%)",
        }}
      />
      <CardContent className="relative z-1 flex h-full min-h-[inherit] flex-col gap-5 p-5 pt-6">
        <h3 className="text-center font-heading text-lg font-medium leading-snug tracking-tight text-balance sm:text-xl">
          <span className="bg-linear-to-r from-violet-300 via-fuchsia-200 to-zinc-100 bg-clip-text text-transparent">
            Crafting experiences powered by next-gen tech
          </span>
        </h3>

        <div className="flex flex-col gap-3">
          <TechStackRow
            direction="left"
            logos={row1}
            ariaLabel="Front-end stack"
            paused={cardHovered}
          />
          <TechStackRow
            direction="right"
            logos={row2}
            ariaLabel="Platform and data stack"
            paused={cardHovered}
          />
          <TechStackRow
            direction="left"
            logos={row3}
            ariaLabel="Delivery and tooling"
            paused={cardHovered}
          />
        </div>

        <div className="mt-auto flex justify-center pt-1">
          <div className="w-full max-w-[280px] rounded-xl border border-white/10 bg-zinc-950/40 p-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm">
            <div className="mb-2.5 flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-red-500/90" />
              <span className="size-2 rounded-full bg-amber-400/90" />
              <span className="size-2 rounded-full bg-emerald-500/85" />
            </div>
            <div className="mb-3 h-6 rounded-md border border-white/5 bg-black/30" />
            <p className="mb-3 text-center text-[10px] leading-relaxed text-zinc-400">
              Websites that stand out and make a difference
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Button
                type="button"
                size="xs"
                className="h-7 rounded-lg bg-violet-600 px-3 text-[10px] font-semibold text-white hover:bg-violet-500"
              >
                Get started
              </Button>
              <Button
                type="button"
                variant="outline"
                size="xs"
                className="h-7 rounded-lg border-white/15 bg-transparent px-3 text-[10px] text-zinc-200 hover:bg-white/5"
              >
                Read more
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
