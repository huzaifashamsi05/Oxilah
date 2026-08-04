import AboutHero from "@/components/sections/AboutHero";
import CompanyStory from "@/components/sections/CompanyStory";
import VisionValues from "@/components/sections/VisionValues";
import TeamGrid from "@/components/sections/TeamGrid";
import MilestonesTimeline from "@/components/sections/MilestonesTimeline";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "About Us | Oxilah",
  description: "Learn about Oxilah's mission to engineer software without compromise.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <AboutHero />
      <CompanyStory />
      <VisionValues />
      <TeamGrid />
      <MilestonesTimeline />
      <FinalCTA />
    </main>
  );
}
