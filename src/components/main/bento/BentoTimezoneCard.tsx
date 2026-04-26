import { Card } from "@/components/ui/card";

export function BentoTimezoneCard() {
  return (
    <Card className="h-full min-h-[240px] rounded-3xl md:min-h-[320px]">
      <div className="flex h-full min-h-[inherit] flex-col items-center justify-center p-5 text-center text-muted-foreground">
        <span className="text-xs font-medium tracking-wide uppercase">
          Time zones
        </span>
        <span className="mt-2 text-[11px] leading-relaxed opacity-80">
          Content slot — regions and globe visual.
        </span>
      </div>
    </Card>
  );
}
