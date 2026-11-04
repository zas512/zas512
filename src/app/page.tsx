import { Bento } from "@/components/sections/bento";
import { Contact } from "@/components/sections/contact";
import { FeaturedWork } from "@/components/sections/featured-work";
import { GithubActivity } from "@/components/sections/github-activity";
import { Hero } from "@/components/sections/hero";
import { TechOrbit } from "@/components/sections/tech-orbit";
import { Timeline } from "@/components/sections/timeline";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <ScrollReveal>
          <Bento />
        </ScrollReveal>
        <ScrollReveal>
          <Timeline />
        </ScrollReveal>
        <ScrollReveal>
          <TechOrbit />
        </ScrollReveal>
        <ScrollReveal>
          <FeaturedWork />
        </ScrollReveal>
        <ScrollReveal>
          <GithubActivity />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </div>
    </>
  );
}
