import { Card, CardContent } from "@/components/ui/card";
import { bentoGlassCard } from "./bento-surface";

/** Bottom wide strip: workspace / services (placeholder). */
export function BentoWorkspaceCard() {
  return (
    <Card
      size="sm"
      className={bentoGlassCard("min-h-[100px] rounded-3xl md:min-h-[120px]")}
    >
      <CardContent className="flex min-h-[inherit] flex-col items-center justify-center px-6 py-5 text-center text-muted-foreground md:flex-row md:justify-between md:text-left">
        <span className="text-xs font-medium tracking-wide uppercase">
          Workspace
        </span>
        <span className="mt-2 max-w-md text-[11px] leading-relaxed opacity-80 md:mt-0">
          Content slot — marquee, services, or status line.
        </span>
      </CardContent>
    </Card>
  );
}
