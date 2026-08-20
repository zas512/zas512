"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  RadioTower,
  type LucideIcon
} from "lucide-react";
import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";

type NodeId =
  | "experience"
  | "edtech"
  | "fintech"
  | "realEstate"
  | "voip"
  | "healthcare"
  | "agenticAi";

type DomainNode = {
  id: NodeId;
  name: string;
  Icon: LucideIcon;
  x: number;
  y: number;
  drift: number;
  phase: number;
  isCenter?: boolean;
};

type Edge = {
  from: "experience";
  to: Exclude<NodeId, "experience">;
};

type NodeMetric = {
  width: number;
  height: number;
};

type Pulse = {
  id: string;
  to: Exclude<NodeId, "experience">;
  startedAt: number;
  durationMs: number;
};

const nodes: DomainNode[] = [
  {
    id: "fintech",
    name: "FinTech",
    Icon: Landmark,
    x: 50,
    y: 15,
    drift: 2.2,
    phase: 0.4
  },
  {
    id: "edtech",
    name: "EdTech",
    Icon: GraduationCap,
    x: 27,
    y: 31,
    drift: 2.4,
    phase: 1.3
  },
  {
    id: "agenticAi",
    name: "Agentic AI",
    Icon: Bot,
    x: 73,
    y: 31,
    drift: 2.4,
    phase: 2.1
  },
  {
    id: "healthcare",
    name: "Healthcare",
    Icon: HeartPulse,
    x: 20,
    y: 54,
    drift: 2.6,
    phase: 2.9
  },
  {
    id: "experience",
    name: "Experience",
    Icon: Bot,
    x: 50,
    y: 52,
    drift: 1.8,
    phase: 1.8,
    isCenter: true
  },
  {
    id: "realEstate",
    name: "Real Estate",
    Icon: Building2,
    x: 80,
    y: 54,
    drift: 2.6,
    phase: 3.4
  },
  {
    id: "voip",
    name: "VoIP & Telecom",
    Icon: RadioTower,
    x: 35,
    y: 76,
    drift: 2.5,
    phase: 4.2
  }
];

const edges: Edge[] = [
  { from: "experience", to: "edtech" },
  { from: "experience", to: "fintech" },
  { from: "experience", to: "agenticAi" },
  { from: "experience", to: "realEstate" },
  { from: "experience", to: "voip" },
  { from: "experience", to: "healthcare" }
];

const domainNodeIds: Exclude<NodeId, "experience">[] = [
  "edtech",
  "fintech",
  "agenticAi",
  "realEstate",
  "voip",
  "healthcare"
];

const defaultNodeMetrics: Record<NodeId, NodeMetric> = {
  experience: { width: 132, height: 46 },
  edtech: { width: 102, height: 42 },
  fintech: { width: 102, height: 42 },
  realEstate: { width: 126, height: 42 },
  voip: { width: 146, height: 42 },
  healthcare: { width: 124, height: 42 },
  agenticAi: { width: 124, height: 42 }
};

function isLinked(nodeA: NodeId, nodeB: NodeId) {
  if (nodeA === "experience") {
    return domainNodeIds.includes(nodeB as Exclude<NodeId, "experience">);
  }
  if (nodeB === "experience") {
    return domainNodeIds.includes(nodeA as Exclude<NodeId, "experience">);
  }
  return false;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function entropyBetween(min: number, max: number) {
  const value = new Uint32Array(1);
  globalThis.crypto.getRandomValues(value);
  const normalized = value[0] / 4294967295;
  return min + normalized * (max - min);
}

function easeOutCubic(value: number) {
  return 1 - (1 - value) ** 3;
}

function capsuleOffset(metric: NodeMetric, ux: number, uy: number) {
  const rx = Math.max(metric.width / 2, 1);
  const ry = Math.max(metric.height / 2, 1);
  const denom = Math.sqrt((ux * ux) / (rx * rx) + (uy * uy) / (ry * ry));
  if (denom <= 0) {
    return rx;
  }
  return 1 / denom;
}

function getNodeClass(
  isCenter: boolean | undefined,
  isHovered: boolean,
  centerLinked: boolean,
  dimmed: boolean
) {
  if (dimmed) {
    return "border-white/10 bg-white/[0.03] opacity-40";
  }

  if (isCenter && centerLinked) {
    return "border-cyan-200/35 bg-cyan-300/10 shadow-[0_16px_40px_rgba(8,145,178,0.25),inset_0_1px_0_rgba(255,255,255,0.2)]";
  }

  if (isHovered) {
    return "border-cyan-100/40 bg-cyan-300/12 shadow-[0_20px_42px_rgba(34,211,238,0.24),inset_0_1px_0_rgba(255,255,255,0.24)]";
  }

  if (isCenter) {
    return "border-cyan-200/25 bg-white/[0.09] shadow-[0_20px_46px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.2)]";
  }

  return "border-white/15 bg-white/[0.07] shadow-[0_18px_36px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.18)]";
}

type DomainNodeBubbleProps = {
  node: DomainNode;
  index: number;
  reduceMotion: boolean;
  offset: { x: number; y: number };
  hoveredNode: NodeId | null;
  centerLinked: boolean;
  onEnter: (id: NodeId) => void;
  onLeave: () => void;
  onMeasure: (id: NodeId, element: HTMLButtonElement | null) => void;
};

function NodeBadge({
  node,
  isHovered,
  centerLinked,
  dimmed
}: Readonly<{
  node: DomainNode;
  isHovered: boolean;
  centerLinked: boolean;
  dimmed: boolean;
}>) {
  let badgeClass = "border-white/20 bg-white/8";
  if (dimmed) {
    badgeClass = "border-white/15 bg-white/5";
  } else if (isHovered || centerLinked) {
    badgeClass = "border-cyan-100/45 bg-cyan-300/14";
  }
  return (
    <span
      className={`inline-flex h-5 w-5 items-center justify-center rounded-full border ${badgeClass}`}
    >
      <node.Icon className="h-3.5 w-3.5 text-cyan-100/95" />
    </span>
  );
}

function DomainNodeBubble({
  node,
  index,
  reduceMotion,
  offset,
  hoveredNode,
  centerLinked,
  onEnter,
  onLeave,
  onMeasure
}: Readonly<DomainNodeBubbleProps>) {
  const hasHover = Boolean(hoveredNode);
  const isHovered = hoveredNode === node.id;
  const dimmed = hasHover && !isHovered && !centerLinked;
  let targetScale = 1;
  if (isHovered) {
    targetScale = 1.03;
  } else if (centerLinked) {
    targetScale = 1.01;
  }

  const cardClass = getNodeClass(
    node.isCenter,
    isHovered,
    centerLinked,
    dimmed
  );

  const labelClass = node.isCenter
    ? "font-display text-sm text-cyan-100 md:text-base"
    : "text-xs text-zinc-100/95";

  return (
    <motion.div
      key={node.id}
      className="absolute"
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        opacity: { duration: 0.42, delay: index * 0.05 }
      }}
    >
      <motion.button
        ref={(element) => onMeasure(node.id, element)}
        type="button"
        onHoverStart={() => onEnter(node.id)}
        onHoverEnd={onLeave}
        onFocus={() => onEnter(node.id)}
        onBlur={onLeave}
        animate={{
          x: offset.x,
          y: offset.y,
          scale: targetScale,
          opacity: dimmed ? 0.42 : 1
        }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 120, damping: 22, mass: 0.8 }
        }
        className={`group/node relative -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-2 text-left backdrop-blur-xl transition-colors md:px-3.5 ${cardClass}`}
      >
        <span
          className={`absolute inset-0 rounded-full bg-linear-to-r from-cyan-300/0 to-teal-300/0 opacity-0 transition-opacity duration-300`}
        />
        <span className="relative z-10 flex items-center gap-2">
          <NodeBadge
            node={node}
            isHovered={isHovered}
            centerLinked={centerLinked}
            dimmed={dimmed}
          />
          <span
            className={`whitespace-nowrap font-medium tracking-tight ${labelClass}`}
          >
            {node.name}
          </span>
        </span>
      </motion.button>
    </motion.div>
  );
}

export function DomainExpertiseCardBackground() {
  const graphRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<Record<NodeId, HTMLButtonElement | null>>({
    experience: null,
    edtech: null,
    fintech: null,
    realEstate: null,
    voip: null,
    healthcare: null,
    agenticAi: null
  });
  const pointerTarget = useRef({ x: 0.5, y: 0.5, active: false });
  const frameRef = useRef({ time: 0, x: 0.5, y: 0.5, active: false });
  const pulsesRef = useRef<Pulse[]>([]);
  const nextPulseAtRef = useRef(0);
  const reduceMotion = Boolean(useReducedMotion());
  const [hoveredNode, setHoveredNode] = useState<NodeId | null>(null);
  const [size, setSize] = useState({ width: 1, height: 1 });
  const [nodeMetrics, setNodeMetrics] =
    useState<Record<NodeId, NodeMetric>>(defaultNodeMetrics);
  const [frameTick, setFrameTick] = useState(0);

  useEffect(() => {
    const node = graphRef.current;
    if (!node) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) {
        return;
      }
      setSize({
        width: Math.max(1, entry.contentRect.width),
        height: Math.max(1, entry.contentRect.height)
      });
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const elements = nodeRefs.current;
    const observers: ResizeObserver[] = [];

    const updateMetric = (id: NodeId, element: HTMLButtonElement) => {
      const rect = element.getBoundingClientRect();
      setNodeMetrics((prev) => {
        const previous = prev[id];
        if (
          Math.abs(previous.width - rect.width) < 0.5 &&
          Math.abs(previous.height - rect.height) < 0.5
        ) {
          return prev;
        }

        return {
          ...prev,
          [id]: { width: rect.width, height: rect.height }
        };
      });
    };

    for (const node of nodes) {
      const element = elements[node.id];
      if (!element) {
        continue;
      }

      updateMetric(node.id, element);
      const observer = new ResizeObserver(() => updateMetric(node.id, element));
      observer.observe(element);
      observers.push(observer);
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [size.width, size.height]);

  useEffect(() => {
    if (reduceMotion) {
      frameRef.current.active = false;
      pulsesRef.current = [];
      return;
    }

    let raf = 0;
    nextPulseAtRef.current = performance.now() + entropyBetween(1800, 2600);

    const animate = (now: number) => {
      frameRef.current.time = now;
      const target = pointerTarget.current;
      frameRef.current.x += (target.x - frameRef.current.x) * 0.095;
      frameRef.current.y += (target.y - frameRef.current.y) * 0.095;
      frameRef.current.active = target.active;

      const alive = pulsesRef.current.filter(
        (pulse) => now - pulse.startedAt < pulse.durationMs
      );
      pulsesRef.current = alive;

      if (now >= nextPulseAtRef.current) {
        if (alive.length < 2) {
          const pickedIndex = Math.floor(
            entropyBetween(0, domainNodeIds.length)
          );
          const picked = domainNodeIds[pickedIndex] ?? domainNodeIds[0];
          pulsesRef.current = [
            ...alive,
            {
              id: `${Math.round(now)}-${picked}`,
              to: picked,
              startedAt: now,
              durationMs: entropyBetween(980, 1320)
            }
          ];
        }
        nextPulseAtRef.current = now + entropyBetween(2100, 3000);
      }

      setFrameTick((value) => (value + 1) % 1000000);
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [reduceMotion]);

  const nodeOffsets = useMemo(() => {
    const values = new Map<NodeId, { x: number; y: number }>();
    const pointerX = frameRef.current.x * size.width;
    const pointerY = frameRef.current.y * size.height;
    const now = frameRef.current.time;
    const influenceRadius = Math.min(size.width, size.height) * 0.42;

    for (const [index, node] of nodes.entries()) {
      const timeA = now / (6200 + index * 330);
      const timeB = now / (7800 + index * 420);
      const driftX = reduceMotion
        ? 0
        : Math.sin(timeA + node.phase) * node.drift;
      const driftY = reduceMotion
        ? 0
        : Math.cos(timeB + node.phase * 0.85) * (node.drift * 0.9);

      const baseX = (node.x / 100) * size.width;
      const baseY = (node.y / 100) * size.height;
      const graphX = baseX + driftX;
      const graphY = baseY + driftY;

      if (!frameRef.current.active || reduceMotion) {
        values.set(node.id, {
          x: driftX,
          y: driftY
        });
        continue;
      }

      const dx = pointerX - graphX;
      const dy = pointerY - graphY;
      const dist = Math.hypot(dx, dy);

      if (dist > influenceRadius) {
        values.set(node.id, {
          x: driftX,
          y: driftY
        });
        continue;
      }

      const ratio = (1 - dist / influenceRadius) ** 1.45;
      const strength = node.isCenter ? 3.9 : 3.3;
      const pull = ratio * strength;
      const pullX = (dx / Math.max(dist, 1)) * pull;
      const pullY = (dy / Math.max(dist, 1)) * pull;

      values.set(node.id, {
        x: clamp(driftX + pullX, -6, 6),
        y: clamp(driftY + pullY, -6, 6)
      });
    }

    return values;
  }, [frameTick, reduceMotion, size]);

  const nodeCenters = useMemo(() => {
    const centers = new Map<NodeId, { x: number; y: number }>();
    for (const node of nodes) {
      const offset = nodeOffsets.get(node.id) ?? { x: 0, y: 0 };
      centers.set(node.id, {
        x: (node.x / 100) * size.width + offset.x,
        y: (node.y / 100) * size.height + offset.y
      });
    }
    return centers;
  }, [nodeOffsets, size]);

  const edgeSegments = useMemo(() => {
    const values: Array<{
      id: string;
      to: Exclude<NodeId, "experience">;
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      active: boolean;
      opacity: number;
    }> = [];

    for (const edge of edges) {
      const fromCenter = nodeCenters.get(edge.from);
      const toCenter = nodeCenters.get(edge.to);
      if (!fromCenter || !toCenter) {
        continue;
      }

      const dx = toCenter.x - fromCenter.x;
      const dy = toCenter.y - fromCenter.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 1) {
        continue;
      }

      const ux = dx / dist;
      const uy = dy / dist;

      const fromMetric = nodeMetrics.experience;
      const toMetric = nodeMetrics[edge.to];
      const startPad = 12;
      const endPad = 12;
      const startClip = capsuleOffset(fromMetric, ux, uy) + startPad;
      const endClip = capsuleOffset(toMetric, -ux, -uy) + endPad;
      const safeStartClip = clamp(startClip, 8, dist * 0.45);
      const safeEndClip = clamp(endClip, 8, dist * 0.45);
      const x1 = fromCenter.x + ux * safeStartClip;
      const y1 = fromCenter.y + uy * safeStartClip;
      const x2 = toCenter.x - ux * safeEndClip;
      const y2 = toCenter.y - uy * safeEndClip;
      const active = hoveredNode === edge.to;
      const hasHover = Boolean(hoveredNode);
      let opacity = 0.25;
      if (hasHover) {
        opacity = active ? 0.76 : 0.08;
      }

      values.push({
        id: `${edge.from}-${edge.to}`,
        to: edge.to,
        x1,
        y1,
        x2,
        y2,
        active,
        opacity
      });
    }

    return values;
  }, [hoveredNode, nodeCenters, nodeMetrics]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
    const y = clamp((event.clientY - rect.top) / rect.height, 0, 1);
    pointerTarget.current = { x, y, active: true };
  };

  const handleMouseLeave = () => {
    pointerTarget.current = { x: 0.5, y: 0.5, active: false };
    setHoveredNode(null);
  };

  const pulseRenderData = useMemo(() => {
    if (reduceMotion) {
      return [] as Array<{
        id: string;
        cx: number;
        cy: number;
        opacity: number;
      }>;
    }

    const now = frameRef.current.time;
    const byTarget = new Map(edgeSegments.map((edge) => [edge.to, edge]));
    const values: Array<{
      id: string;
      cx: number;
      cy: number;
      opacity: number;
    }> = [];

    for (const pulse of pulsesRef.current) {
      const edge = byTarget.get(pulse.to);
      if (!edge) {
        continue;
      }

      const progress = clamp((now - pulse.startedAt) / pulse.durationMs, 0, 1);
      if (progress >= 1) {
        continue;
      }

      const eased = easeOutCubic(progress);
      const cx = edge.x1 + (edge.x2 - edge.x1) * eased;
      const cy = edge.y1 + (edge.y2 - edge.y1) * eased;
      const fadeOut = progress < 0.15 ? progress / 0.15 : 1 - progress;

      values.push({
        id: pulse.id,
        cx,
        cy,
        opacity: fadeOut
      });
    }

    return values;
  }, [edgeSegments, frameTick, reduceMotion]);

  const setNodeElement = (id: NodeId, element: HTMLButtonElement | null) => {
    nodeRefs.current[id] = element;
  };

  return (
    <div className="relative h-full overflow-hidden p-6">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute inset-[-24%]"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: ["1%", "-2%", "1%"],
                  y: ["-2%", "1%", "-1%"],
                  rotate: [0, 2.4, -1.8, 0]
                }
          }
          transition={{
            duration: 52,
            ease: "easeInOut",
            repeat: Infinity
          }}
        />
      </div>
      <p className="text-balance font-display tracking-wide text-xl w-full text-center text-zinc-100 md:text-3xl">
        Product experience across regulated, real-time and AI-first systems.
      </p>

      <div
        ref={graphRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative z-10 h-[calc(100%-5.1rem)] min-h-62.5"
      >
        <svg
          className="pointer-events-none absolute inset-0 z-0"
          width={size.width}
          height={size.height}
          viewBox={`0 0 ${size.width} ${size.height}`}
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <filter
              id="domain-edge-glow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="1.7" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter
              id="domain-pulse-glow"
              x="-300%"
              y="-300%"
              width="700%"
              height="700%"
            >
              <feGaussianBlur stdDeviation="2.4" result="pulseBlur" />
              <feMerge>
                <feMergeNode in="pulseBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {edgeSegments.map((edge) => (
              <linearGradient
                key={`grad-${edge.id}`}
                id={`grad-${edge.id}`}
                x1={edge.x1}
                y1={edge.y1}
                x2={edge.x2}
                y2={edge.y2}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0%"
                  stopColor={
                    edge.active
                      ? "rgba(103,232,249,0.86)"
                      : "rgba(103,232,249,0.48)"
                  }
                />
                <stop
                  offset="100%"
                  stopColor={
                    edge.active
                      ? "rgba(45,212,191,0.56)"
                      : "rgba(45,212,191,0.24)"
                  }
                />
              </linearGradient>
            ))}
          </defs>

          {edgeSegments.map((edge) => (
            <g key={edge.id}>
              <line
                x1={edge.x1}
                y1={edge.y1}
                x2={edge.x2}
                y2={edge.y2}
                stroke={`url(#grad-${edge.id})`}
                strokeWidth={1.8}
                strokeLinecap="round"
                opacity={edge.opacity * 0.46}
                filter="url(#domain-edge-glow)"
              />
              <line
                x1={edge.x1}
                y1={edge.y1}
                x2={edge.x2}
                y2={edge.y2}
                stroke={`url(#grad-${edge.id})`}
                strokeWidth={1}
                strokeLinecap="round"
                opacity={edge.opacity}
              />
            </g>
          ))}

          {pulseRenderData.map((pulse) => (
            <g key={pulse.id} filter="url(#domain-pulse-glow)">
              <circle
                cx={pulse.cx}
                cy={pulse.cy}
                r={3.4}
                fill="rgba(103,232,249,0.78)"
                opacity={pulse.opacity * 0.85}
              />
              <circle
                cx={pulse.cx}
                cy={pulse.cy}
                r={1.6}
                fill="rgba(240,253,250,0.95)"
                opacity={pulse.opacity}
              />
            </g>
          ))}
        </svg>

        <motion.div
          className="pointer-events-none absolute"
          animate={{
            x: nodeOffsets.get("experience")?.x ?? 0,
            y: nodeOffsets.get("experience")?.y ?? 0,
            scale: hoveredNode && hoveredNode !== "experience" ? 1.08 : 1.02
          }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 105, damping: 20, mass: 0.88 }
          }
        >
          <span className="absolute -top-14 -left-14 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/12 blur-3xl" />
        </motion.div>

        <div className="relative z-10 h-full">
          {nodes.map((node, index) => {
            const offset = nodeOffsets.get(node.id) ?? { x: 0, y: 0 };
            const centerLinked =
              hoveredNode !== null &&
              node.id === "experience" &&
              hoveredNode !== "experience" &&
              isLinked("experience", hoveredNode);

            return (
              <DomainNodeBubble
                key={node.id}
                node={node}
                index={index}
                reduceMotion={reduceMotion}
                offset={offset}
                hoveredNode={hoveredNode}
                centerLinked={centerLinked}
                onEnter={setHoveredNode}
                onLeave={() => setHoveredNode(null)}
                onMeasure={setNodeElement}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
