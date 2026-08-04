import HeroSection from "@/components/sections/HeroSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyOxilah from "@/components/sections/WhyOxilah";
import ERPSpotlight from "@/components/sections/ERPSpotlight";
import ProcessSection from "@/components/sections/ProcessSection";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Oxilah | Enterprise ERP & Custom Software Development",
  description: "Oxilah designs and builds enterprise-grade ERP platforms and custom software solutions engineered for scale, security, and performance.",
};

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <ServicesPreview />
      <WhyOxilah />
      <ERPSpotlight />
      <ProcessSection />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
