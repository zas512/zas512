"use client";
import { Globe } from "@/components/ui/globe";

const REGIONS = [
  { code: "GB", label: "UK" },
  { code: "PK", label: "Pakistan" },
  { code: "US", label: "USA" }
];

const LocationCard = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="relative z-10 flex flex-col items-center gap-4 px-6 pt-6 text-center">
        <p className="text-balance font-display tracking-wide text-xl w-full text-center text-zinc-100 md:text-3xl">
          Flexible with time zone communications
        </p>

        <div className="flex items-center gap-2">
          {REGIONS.map((region) => (
            <div
              key={region.code}
              className={`
                flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs
                ${
                  region.label === "Pakistan"
                    ? "border-blue-500/60 bg-blue-500/10 text-blue-300"
                    : "border-white/10 bg-white/5 text-neutral-400"
                }
              `}
            >
              <span className="font-semibold">{region.code}</span>
              <span>{region.label}</span>
            </div>
          ))}
        </div>
      </div>
      <Globe className="absolute top-40 left-1/2 -translate-x-1/2 w-125 sm:w-145 md:w-170 lg:w-190 max-w-none pointer-events-auto" />
    </div>
  );
};

export default LocationCard;
