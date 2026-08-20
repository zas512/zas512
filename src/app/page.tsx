import Navbar from "@/components/nav";
import { Bento } from "@/components/sections/bento";
import { Contact } from "@/components/sections/contact";
import { FeaturedWork } from "@/components/sections/featured-work";
import { GithubActivity } from "@/components/sections/github-activity";
import { Hero } from "@/components/sections/hero";
import { TechOrbit } from "@/components/sections/tech-orbit";
import { Timeline } from "@/components/sections/timeline";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
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
