import { cn } from "@/lib/utils";

export function bentoGlassCard(className?: string) {
  return cn(
    "gap-0 py-0 shadow-none ring-0",
    "border border-white/10",
    "bg-gradient-to-br from-white/[0.08] via-zinc-950/30 to-zinc-950/50",
    "supports-[backdrop-filter]:from-white/[0.06] supports-[backdrop-filter]:via-zinc-950/20 supports-[backdrop-filter]:to-zinc-950/35",
    "backdrop-blur-2xl backdrop-saturate-150",
    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_1px_0_0_rgba(255,255,255,0.04)]",
    className,
  );
}
