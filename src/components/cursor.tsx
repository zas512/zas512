import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [hover, setHover] = useState(false);
  const [hidden, setHidden] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setHidden(false);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      setHover(!!t?.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (hidden) return null;
  return (
    <>
      <motion.div
        ref={ref}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          animate={{ scale: hover ? 2.4 : 1, opacity: hover ? 0.4 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="-translate-x-1/2 -translate-y-1/2 size-3 rounded-full bg-primary"
          style={{ boxShadow: "0 0 20px var(--glow)" }}
        />
      </motion.div>
    </>
  );
}
