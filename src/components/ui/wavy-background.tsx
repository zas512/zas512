"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  blur = 10,
  saturation = 1,
  brightness = 0.85,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  blur?: number;
  saturation?: number;
  brightness?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: any,
    canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = container.clientWidth || window.innerWidth;
    h = ctx.canvas.height = container.clientHeight || window.innerHeight;
    ctx.filter = `blur(${blur}px) saturate(${saturation}) brightness(${brightness})`;
    nt = 0;

    const resize = () => {
      w = ctx.canvas.width = container.clientWidth || window.innerWidth;
      h = ctx.canvas.height = container.clientHeight || window.innerHeight;
      ctx.filter = `blur(${blur}px) saturate(${saturation}) brightness(${brightness})`;
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    window.addEventListener("resize", resize);
    render();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee"
  ];
  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        let y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = () => {
    ctx.clearRect(0, 0, w, h);
    ctx.globalAlpha = waveOpacity || 0.5;
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    const cleanup = init();
    return () => {
      cancelAnimationFrame(animationId);
      cleanup?.();
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari
            ? {
                filter: `blur(${blur}px) saturate(${saturation}) brightness(${brightness})`
              }
            : {})
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
