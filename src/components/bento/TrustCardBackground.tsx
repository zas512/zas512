"use client";
import { person } from "@/app/resources";
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";

export function TrustCardBackground() {
  return (
    <div className="relative h-full overflow-hidden">
      <WavyBackground
        containerClassName="absolute inset-0 h-full w-full"
        className="hidden"
        backgroundFill="#09090B"
        waveOpacity={0.16}
        blur={8}
        speed="slow"
        colors={["#7c3aed", "#a855f7", "#06b6d4", "#22d3ee", "#60a5fa"]}
      />
      <Image
        src={person.avatar}
        alt=""
        width={112}
        height={112}
        className="absolute left-1/2 z-20 size-52 -translate-x-1/2 top-16 rounded-full border-4 border-white/20 object-cover transition-all duration-300 group-hover:scale-95 group-hover:top-10"
      />
      <div className="absolute inset-x-0 bottom-0 z-30 h-28 bg-linear-to-t from-black/35 to-transparent" />
    </div>
  );
}
