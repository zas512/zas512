import { Card } from "@/components/ui/card";
import { person } from "@/app/resources";
import { ArrowRightIcon, UserRound } from "lucide-react";
import Image from "next/image";
import { TrustRingsSvg } from "./TrustRingsSvg";
import { Button } from "@/components/ui/button";

export function BentoTrustCard() {
  return (
    <Card className="group h-full min-h-[200px] rounded-3xl md:min-h-[220px] p-4">
      <div className="relative flex h-full min-h-[inherit] flex-col justify-end items-start overflow-hidden">
        {/* Rings */}
        <TrustRingsSvg
          className="absolute left-1/2 -top-8 -translate-x-1/2 opacity-80 
          transition-opacity duration-300 ease-out
          group-hover:opacity-40
          mask-[linear-gradient(to_right,transparent,black_20%,black_90%,transparent)]"
        />

        {/* Avatar */}
        <Image
          src={person.avatar}
          alt=""
          width={64}
          height={64}
          className="size-28 border-4 border-white/10 absolute left-1/2 z-20 -translate-x-1/2 top-6 rounded-full object-cover"
        />

        {/* Content + Button — lift together on hover */}
        <div className="mt-auto flex flex-col translate-y-[calc(1rem+18px)] group-hover:translate-y-0 transition-transform duration-300 ease-out items-start">
          {/* Content */}
          <div className="flex flex-col space-y-1">
            <UserRound
              className="text-zinc-400 size-10 group-hover:size-8 transition-[width,height] duration-300 ease-out"
              strokeWidth={1.7}
            />
            <p className="text-base font-bold text-zinc-400">
              Trust & Reliability
            </p>
            <p className="font-medium leading-relaxed text-zinc-100 text-lg">
              I deliver on time, communicate clearly, and ensure smooth
              progress.
            </p>
          </div>

          {/* Button */}
          <Button
            variant="ghost"
            size="xs"
            className="flex items-center gap-3 -ml-3 px-3 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out delay-100"
          >
            About me
            <ArrowRightIcon className="size-3" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
