import { Hero } from "@/components/sections/hero";
import { Bento } from "@/components/sections/bento";
import { Timeline } from "@/components/sections/timeline";
import { TechOrbit } from "@/components/sections/tech-orbit";
import { FeaturedWork } from "@/components/sections/featured-work";
import { GithubActivity } from "@/components/sections/github-activity";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="max-w-7xl mx-auto p-6">
        <Bento />
        <Timeline />
        <TechOrbit />
        <FeaturedWork />
        <GithubActivity />
        <Contact />
      </div>
    </main>
  );
}
