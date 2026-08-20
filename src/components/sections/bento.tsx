import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { FileTextIcon } from "@radix-ui/react-icons";
import { MapPin } from "lucide-react";
import { CollaborationBoxCard } from "../bento/CollaborationBoxCard";
import { DomainExpertiseCardBackground } from "../bento/DomainExpertiseCardBackground";
import LocationCard from "../bento/LocationCard";
import { BentoTechStackCard } from "../bento/TechStackCardBackground";
import { TrustCardBackground } from "../bento/TrustCardBackground";

export function Bento() {
  const features = [
    {
      Icon: FileTextIcon,
      name: "Trust & Reliability",
      description:
        "I deliver on time, communicate clearly, and keep progress visible.",
      background: <TrustCardBackground />,
      className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2"
    },
    {
      background: <BentoTechStackCard />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3"
    },
    {
      Icon: MapPin,
      name: "Remote",
      description: "Based in Pakistan, working worldwide.",
      background: <LocationCard />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4"
    },
    {
      background: <CollaborationBoxCard />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3"
    },
    {
      background: <DomainExpertiseCardBackground />,
      className: "lg:col-start-2 lg:col-end-4 lg:row-start-3 lg:row-end-4"
    }
  ];

  return (
    <section className="relative py-24 md:py-32" id="capabilities">
      <div className="mb-16 max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          02 / CAPABILITIES
        </p>
        <h2 className="mt-4 font-display text-4xl leading-[1.05] text-foreground md:text-6xl font-light">
          Engineering capabilities{" "}
          <span className="italic">built on execution</span>.
        </h2>
        <p className="mt-4 text-base text-foreground-muted leading-relaxed font-sans max-w-xl">
          A focused overview of core capabilities spanning AI systems
          integration, scalable SaaS product architectures, and DevOps.
        </p>
      </div>

      <BentoGrid className="auto-rows-64">
        {features.map((feature, index) => (
          <BentoCard
            key={feature.name || feature.className || index}
            {...feature}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
