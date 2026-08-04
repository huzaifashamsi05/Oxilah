import ServicesHero from "@/components/sections/ServicesHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ServicesDetailed from "@/components/sections/ServicesDetailed";
import TechStack from "@/components/sections/TechStack";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Software Services | Oxilah",
  description: "Explore Oxilah's full range of software development, ERP, cloud, and security services.",
};

export default function Services() {
  return (
    <main className="w-full">
      <ServicesHero />
      <ServicesGrid />
      <ServicesDetailed />
      <TechStack />
      <FinalCTA />
    </main>
  );
}
