"use client"
import { Globe } from "@/components/ui/globe";

const REGIONS = [
  { code: "GB", label: "UK" },
  { code: "PK", label: "Pakistan" },
  { code: "US", label: "USA" },
];

const LocationCard = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="relative z-10 flex flex-col items-center gap-4 px-6 pt-6 text-center">
        <h3 className="font-serif text-xl leading-snug text-neutral-100 md:text-2xl">
          Flexible with time
          <br />
          zone communications
        </h3>
        <div className="flex items-center gap-2">
          {REGIONS.map((region) => (
            <div
              key={region.code}
              className={`
                "flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs"
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
      <Globe />
    </div>
  );
};

export default LocationCard;
