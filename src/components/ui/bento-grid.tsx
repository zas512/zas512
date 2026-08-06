import type { ComponentPropsWithoutRef, ReactNode, ComponentType } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
  href?: string;
  cta?: string;
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
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "dark:bg-background transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
      className,
    )}
    {...props}
  >
    <div className="absolute inset-0 z-0">{background}</div>
    <div className="p-4 mt-auto z-10">
      {(Icon || name || description) && (
        <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10">
          {Icon ? (
            <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-400 transition-all duration-300 ease-in-out group-hover:scale-75" />
          ) : null}
          {name ? (
            <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
              {name}
            </h3>
          ) : null}
          {description ? (
            <p className="max-w-lg text-neutral-400">{description}</p>
          ) : null}
        </div>
      )}

      {href && cta ? (
        <div
          className={cn(
            "pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden",
          )}
        >
          <Link href={href}>
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
      ) : null}
    </div>
    {href && cta ? (
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex",
        )}
      >
        <Link
          href={href}
          className="pointer-events-auto flex items-center gap-1 px-2 py-4 text-sm hover:underline"
        >
          {cta}
          <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
        </Link>
      </div>
    ) : null}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/3 group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
