import Image from "next/image";
import { person } from "@/app/resources";
import { TrustRingsSvg } from "@/components/main/bento/TrustRingsSvg";

export function TrustCardBackground() {
  return (
    <div className="relative h-full overflow-hidden">
      <TrustRingsSvg
        className="absolute left-1/2 top-0 w-[140%] -translate-x-1/2 opacity-75 transition-all duration-300 group-hover:opacity-40"
      />
      <Image
        src={person.avatar}
        alt=""
        width={112}
        height={112}
        className="absolute left-1/2 top-8 h-28 w-28 -translate-x-1/2 rounded-full border-4 border-white/10 object-cover transition-transform duration-300 group-hover:scale-95"
      />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/35 to-transparent" />
    </div>
  );
}
