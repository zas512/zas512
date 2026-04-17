import { Card, CardContent } from "@/components/ui/card";
import { bentoGlassCard } from "./bento-surface";

/** Top-left: profile / trust (placeholder). */
export function BentoTrustCard() {
  return (
    <Card
      size="sm"
      className={bentoGlassCard(
        "h-full min-h-[220px] rounded-3xl md:min-h-[280px]",
      )}
    >
      <CardContent className="flex h-full min-h-[inherit] flex-col items-center justify-center p-6 text-center text-muted-foreground">
        <span className="text-xs font-medium tracking-wide uppercase">
          Trust &amp; profile
        </span>
        <span className="mt-2 max-w-[18rem] text-[11px] leading-relaxed opacity-80">
          Content slot — add headline, photo, and copy here.
        </span>
      </CardContent>
    </Card>
  );
}
