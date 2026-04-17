import HeroContent from "@/components/main/HeroContent";
import { BentoAboutSection } from "@/components/main/bento/BentoAboutSection";
import { Footer } from "@/components/Footer";
import BlackHole from "@/components/main/BlackHole";

export default function Home() {
  return (
    <>
      <BlackHole />
      <HeroContent />
      <BentoAboutSection />
      <Footer />
    </>
  );
}
