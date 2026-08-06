import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { BellIcon, FileTextIcon } from "@radix-ui/react-icons";
import { MapPin } from "lucide-react";
import { CollaborationBoxCard } from "../bento/CollaborationBoxCard";
import LocationCard from "../bento/LocationCard";
import { BentoTechStackCard } from "../bento/TechStackCardBackground";
import { TrustCardBackground } from "../bento/TrustCardBackground";
import { WorkspaceCardBackground } from "../bento/WorkspaceCardBackground";

export function Bento() {
  const features = [
    {
      Icon: FileTextIcon,
      name: "Trust & Reliability",
      description:
        "I deliver on time, communicate clearly, and keep progress visible.",
      href: "/about",
      cta: "About me",
      background: <TrustCardBackground />,
      className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2"
    },
    {
      Icon: null,
      name: "",
      description: "",
      href: "",
      cta: "",
      background: <BentoTechStackCard />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3"
    },
    {
      Icon: MapPin,
      name: "Remote",
      description: "Pakistan",
      href: "/contact",
      cta: "Work together",
      background: <LocationCard />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4"
    },
    {
      Icon: null,
      name: "",
      description: "",
      href: "",
      cta: "",
      background: <CollaborationBoxCard />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3"
    },
    {
      Icon: BellIcon,
      name: "Workspace",
      description:
        "Full-stack execution across web apps, real-time systems, and AI-powered platforms.",
      href: "/work",
      cta: "View projects",
      background: <WorkspaceCardBackground />,
      className: "lg:col-start-2 lg:col-end-4 lg:row-start-3 lg:row-end-4"
    }
  ];

  return (
    <BentoGrid className="auto-rows-64">
      {features.map((feature, index) => (
        <BentoCard
          key={feature.name || feature.className || index}
          {...feature}
        />
      ))}
    </BentoGrid>
  );
}
