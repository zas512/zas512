"use client";
import { useEffect, useRef } from "react";
import createGlobe, { type COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;
const PAKISTAN: [number, number] = [30.3753, 69.3451];
const USA: [number, number] = [37.0902, -95.7129];
const UK: [number, number] = [55.3781, -3.436];
const AUSTRALIA: [number, number] = [-25.2744, 133.7751];
const GERMANY: [number, number] = [51.1657, 10.4515];
const HIGHLIGHT_COLOR: [number, number, number] = [34 / 255, 197 / 255, 94 / 255];

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [59 / 255, 130 / 255, 246 / 255],
  markerColor: [37 / 255, 99 / 255, 235 / 255],
  glowColor: [59 / 255, 130 / 255, 246 / 255],
  markers: [
    { location: PAKISTAN, size: 0.14, color: HIGHLIGHT_COLOR },
    { location: USA, size: 0.08, color: HIGHLIGHT_COLOR },
    { location: UK, size: 0.08, color: HIGHLIGHT_COLOR },
    { location: AUSTRALIA, size: 0.08, color: HIGHLIGHT_COLOR },
    { location: GERMANY, size: 0.08, color: HIGHLIGHT_COLOR },
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: Readonly<{
  className?: string;
  config?: COBEOptions;
}>) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, { mass: 1, damping: 30, stiffness: 100 });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (wrapperRef.current) {
        widthRef.current = wrapperRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();
    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phiRef.current += 0.0015;
        state.phi = phiRef.current + rs.get();
        state.width = widthRef.current * 2;
        state.height = widthRef.current * 2;
      },
    });
    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div
        ref={wrapperRef}
        className="absolute left-1/2 top-[20%] aspect-square w-[180%] -translate-x-1/2"
      >
        <canvas
          ref={canvasRef}
          className="size-full opacity-0 transition-opacity duration-500 contain-[layout_paint_size]"
          onPointerDown={(e) => {
            pointerInteracting.current = e.clientX;
            updatePointerInteraction(e.clientX);
          }}
          onPointerUp={() => updatePointerInteraction(null)}
          onPointerOut={() => updatePointerInteraction(null)}
          onMouseMove={(e) => updateMovement(e.clientX)}
          onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
        />
      </div>
    </div>
  );
}
