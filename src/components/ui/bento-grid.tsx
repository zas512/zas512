import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from "react";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name?: string;
  className: string;
  background: ReactNode;
  Icon?: ComponentType<{ className?: string }> | null;
  description?: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn("grid w-full auto-rows-88 grid-cols-3 gap-4", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl bg-surface border border-border",
      className
    )}
    {...props}
  >
    <div className="absolute inset-0 z-0">{background}</div>
    <div className="p-5 mt-auto z-10">
      {(Icon || name || description) && (
        <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300">
          {Icon ? (
            <Icon className="h-10 w-10 origin-left transform-gpu text-foreground-muted" />
          ) : null}
          {name ? (
            <h3 className="text-lg font-sans font-semibold text-foreground mt-2">
              {name}
            </h3>
          ) : null}
          {description ? (
            <p className="max-w-lg text-sm text-foreground-muted leading-relaxed font-sans">
              {description}
            </p>
          ) : null}
        </div>
      )}
    </div>
  </div>
);

export { BentoCard, BentoGrid };
