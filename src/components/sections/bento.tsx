import { MapPin } from "lucide-react";
import { BellIcon, CalendarIcon, FileTextIcon, InputIcon } from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import LocationCard from "@/components/bento/LocationCard";

export function Bento() {
  const features = [
    {
      Icon: FileTextIcon,
      name: "Save your files",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Learn more",
      background: <img alt="" className="absolute -top-20 -right-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: InputIcon,
      name: "Full text search",
      description: "Search through all your files in one place.",
      href: "/",
      cta: "Learn more",
      background: <img alt="" className="absolute -top-20 -right-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: MapPin,
      name: "Remote",
      description: "Pakistan",
      href: "/",
      cta: "Learn more",
      background: <LocationCard />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      name: "Calendar",
      description: "Use the calendar to filter your files by date.",
      href: "/",
      cta: "Learn more",
      background: <img alt="" className="absolute -top-20 -right-20 opacity-60" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    },
    {
      Icon: BellIcon,
      name: "Notifications",
      description: "Get notified when someone shares a file or mentions you in a comment.",
      href: "/",
      cta: "Learn more",
      background: <img alt="" className="absolute -top-20 -right-20 opacity-60" />,
      className: "lg:col-start-2 lg:col-end-4 lg:row-start-3 lg:row-end-4",
    },
  ];

  return (
    <>
      <Header />
      <BentoGrid className="auto-rows-[18rem]">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </>
  );
}

function Header() {
  return (
    <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          / 01 - Who & what
        </p>
        <h2 className="mt-3 text-4xl font-display leading-[1.02] md:text-6xl">
          Full Stack AI Engineer, <span className="italic text-gradient">end to end</span>.
        </h2>
      </div>
      <p className="max-w-sm text-sm text-muted-foreground">
        Five years architecting and shipping production systems - from enterprise SaaS to AI-native
        applications and real-time platforms.
      </p>
    </div>
  );
}
