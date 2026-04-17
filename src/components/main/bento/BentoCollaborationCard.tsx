import { Card, CardContent } from "@/components/ui/card";
import { bentoGlassCard } from "./bento-surface";

/** Center: CTA / email collaboration (placeholder). */
export function BentoCollaborationCard() {
  return (
    <Card
      size="sm"
      className={bentoGlassCard(
        "h-full min-h-[200px] rounded-3xl md:min-h-[220px]",
      )}
    >
      <CardContent className="flex h-full min-h-[inherit] flex-col items-center justify-center p-6 text-center text-muted-foreground">
        <span className="text-xs font-medium tracking-wide uppercase">
          Collaboration
        </span>
        <span className="mt-2 max-w-[20rem] text-[11px] leading-relaxed opacity-80">
          Content slot — headline, email field, copy action.
        </span>
      </CardContent>
    </Card>
  );
}
