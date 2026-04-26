import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const Card = ({
  className,
  children
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col overflow-hidden rounded-4xl p-4 hover:border-white/20 hover:brightness-[1.03] hover:shadow-[inset_0_2px_40px_rgba(0,0,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.14),0_0_36px_-6px_rgba(139,92,246,0.35)] border border-white/10 bg-linear-to-br from-white/8 via-zinc-950/30 to-zinc-950/50 supports-backdrop-filter:from-white/6 supports-backdrop-filter:via-zinc-950/20 supports-backdrop-filter:to-zinc-950/35 backdrop-blur-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_1px_0_0_rgba(255,255,255,0.04)]",
        className
      )}
    >
      {children}
    </div>
  );
};
