import ContactHero from "@/components/sections/ContactHero";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";

export const metadata = {
  title: "Contact Us | Oxilah",
  description: "Get in touch with Oxilah to discuss your next software or ERP project.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <ContactHero />
      
      {/* Combined Form & Info Section */}
      <section className="py-24 bg-background-primary w-full overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Form (60%) */}
            <div className="w-full lg:w-3/5">
              <ContactForm />
            </div>

            {/* Right Column: Info (40%) */}
            <div className="w-full lg:w-2/5 mt-8 lg:mt-0">
              <ContactInfo />
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
