import ERPHero from "@/components/sections/ERPHero";
import ERPModules from "@/components/sections/ERPModules";
import ERPIndustries from "@/components/sections/ERPIndustries";
import ERPIntegration from "@/components/sections/ERPIntegration";
import ERPComparison from "@/components/sections/ERPComparison";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "ERP Solutions | Oxilah",
  description: "Enterprise ERP systems built to unify your operations — finance, inventory, HR, and more.",
};

export default function ERPServices() {
  return (
    <main className="w-full">
      <ERPHero />
      <ERPModules />
      <ERPIndustries />
      <ERPIntegration />
      <ERPComparison />
      <FinalCTA />
    </main>
  );
}
