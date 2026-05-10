import { HeroSection } from "@/components/home/HeroSection";
import { RitualJourney } from "@/components/home/RitualJourney";
import { ChakraGrid } from "@/components/home/ChakraGrid";
import { WhyUs } from "@/components/home/WhyUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RitualJourney />
      <ChakraGrid />
      <WhyUs />
    </>
  );
}
