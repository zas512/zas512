import { Card } from "@/components/ui/card";

export function BentoWorkspaceCard() {
  return (
    <Card className="h-full min-h-50 rounded-3xl md:min-h-55">
      <div className="flex h-full min-h-[inherit] flex-col items-center justify-center px-6 py-5 text-center text-muted-foreground md:flex-row md:justify-between md:text-left">
        <span className="text-xs font-medium tracking-wide uppercase">
          Workspace
        </span>
        <span className="mt-2 max-w-md text-xs leading-relaxed opacity-80 md:mt-0">
          Content slot — marquee, services, or status line.
        </span>
      </div>
    </Card>
  );
}
