"use client";
import { motion } from "motion/react";
import { memo, useEffect, useMemo, useRef, useState } from "react";

interface Point {
  x: number;
  y: number;
}

interface PathData {
  id: string;
  d: string;
  opacity: number;
  width: number;
}

// Path generation function (unchanged logic)
function generateAestheticPath(
  index: number,
  position: number,
  type: "primary" | "secondary" | "accent"
): string {
  const baseAmplitude =
    type === "primary" ? 150 : type === "secondary" ? 100 : 60;
  const phase = index * 0.2;
  const points: Point[] = [];
  const segments = type === "primary" ? 10 : type === "secondary" ? 8 : 6;

  const startX = 2400;
  const startY = 800;
  const endX = -2400;
  const endY = -800 + index * 25;

  for (let i = 0; i <= segments; i++) {
    const progress = i / segments;
    const eased = 1 - (1 - progress) ** 2;

    const baseX = startX + (endX - startX) * eased;
    const baseY = startY + (endY - startY) * eased;

    const amplitudeFactor = 1 - eased * 0.3;
    const wave1 =
      Math.sin(progress * Math.PI * 3 + phase) *
      (baseAmplitude * 0.7 * amplitudeFactor);
    const wave2 =
      Math.cos(progress * Math.PI * 4 + phase) *
      (baseAmplitude * 0.3 * amplitudeFactor);
    const wave3 =
      Math.sin(progress * Math.PI * 2 + phase) *
      (baseAmplitude * 0.2 * amplitudeFactor);

    points.push({
      x: baseX * position,
      y: baseY + wave1 + wave2 + wave3
    });
  }

  const pathCommands = points.map((point: Point, i: number) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    const prevPoint = points[i - 1];
    const tension = 0.4;
    const cp1x = prevPoint.x + (point.x - prevPoint.x) * tension;
    const cp1y = prevPoint.y;
    const cp2x = prevPoint.x + (point.x - prevPoint.x) * (1 - tension);
    const cp2y = point.y;
    return `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${point.x} ${point.y}`;
  });

  return pathCommands.join(" ");
}

const generateUniqueId = (prefix: string, index: number): string =>
  `${prefix}-${index}`;

// Hook: pause animation when off-screen or tab is hidden
function useShouldAnimate(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);

    const onVisibility = () =>
      setTabVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibility);

    let observer: IntersectionObserver | null = null;
    if (ref.current) {
      observer = new IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        { threshold: 0 }
      );
      observer.observe(ref.current);
    }

    return () => {
      mq.removeEventListener("change", onChange);
      document.removeEventListener("visibilitychange", onVisibility);
      observer?.disconnect();
    };
  }, [ref]);

  return inView && tabVisible && !reducedMotion;
}

// Single reusable wave-group renderer (filter applied ONCE per group, not per-path)
const WaveGroup = memo(function WaveGroup({
  paths,
  className,
  groupOpacity,
  yRange,
  duration,
  animate
}: {
  paths: PathData[];
  className: string;
  groupOpacity: number;
  yRange: number;
  duration: number;
  animate: boolean;
}) {
  return (
    <motion.g
      className={className}
      style={{ opacity: groupOpacity }}
      initial={{ y: 0 }}
      animate={{ y: animate ? [0, -yRange, 0] : 0 }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        repeatType: "reverse"
      }}
    >
      {paths.map((path) => (
        <path
          key={path.id}
          d={path.d}
          stroke="url(#sharedGradient)"
          strokeLinecap="round"
          strokeWidth={path.width}
          style={{ opacity: path.opacity }}
        />
      ))}
    </motion.g>
  );
});

// Memoized FloatingPaths component
export const FloatingPaths = memo(function FloatingPaths({
  position,
  animate = true
}: {
  position: number;
  animate?: boolean;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const canAnimate = useShouldAnimate(containerRef) && animate;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const primaryPaths: PathData[] = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: generateUniqueId("primary", i),
        d: generateAestheticPath(i, position, "primary"),
        opacity: 0.35 + i * 0.04,
        width: 5 + i * 0.4
      })),
    [position]
  );

  const secondaryPaths: PathData[] = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: generateUniqueId("secondary", i),
        d: generateAestheticPath(i, position, "secondary"),
        opacity: 0.28 + i * 0.03,
        width: 3.5 + i * 0.3
      })),
    [position]
  );

  const accentPaths: PathData[] = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => ({
        id: generateUniqueId("accent", i),
        d: generateAestheticPath(i, position, "accent"),
        opacity: 0.2 + i * 0.06,
        width: 2.5 + i * 0.25
      })),
    [position]
  );

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{
        willChange: "filter",
        filter:
          "blur(3px) drop-shadow(0 0 14px rgba(56,189,248,0.45)) drop-shadow(0 0 28px rgba(56,189,248,0.25))"
      }}
    >
      <svg
        className="h-full w-full text-slate-950/40 dark:text-white/40"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="-2400 -800 4800 1600"
        style={{ willChange: "transform" }}
      >
        <title>Background Paths</title>
        <defs>
          <linearGradient id="sharedGradient" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.05" />
            <stop offset="40%" stopColor="var(--cyan)" stopOpacity="0.4" />
            <stop offset="75%" stopColor="var(--amber)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <WaveGroup
          paths={primaryPaths}
          className="primary-waves"
          groupOpacity={1}
          yRange={15}
          duration={8}
          animate={canAnimate}
        />
        <WaveGroup
          paths={secondaryPaths}
          className="secondary-waves"
          groupOpacity={0.8}
          yRange={10}
          duration={6}
          animate={canAnimate}
        />
        <WaveGroup
          paths={accentPaths}
          className="accent-waves"
          groupOpacity={0.6}
          yRange={5}
          duration={4}
          animate={canAnimate}
        />
      </svg>
    </div>
  );
});

// Memoized AnimatedTitle component
const AnimatedTitle = memo(function AnimatedTitle({
  title
}: {
  title: string;
}) {
  return (
    <motion.h1
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 bg-linear-to-r from-neutral-800/90 to-neutral-600/90 bg-clip-text font-bold text-3xl text-transparent tracking-tighter sm:text-5xl md:text-5xl dark:from-white/90 dark:to-white/70"
      initial={{ opacity: 0, y: 20 }}
      transition={{
        duration: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9]
      }}
    >
      {title}
    </motion.h1>
  );
});

export default memo(function BackgroundPaths({
  title = "Background Paths"
}: {
  title?: string;
}) {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
        <motion.div
          animate={{ opacity: 1 }}
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <AnimatedTitle title={title} />
        </motion.div>
      </div>
    </div>
  );
});
