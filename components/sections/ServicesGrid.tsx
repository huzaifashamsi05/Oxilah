"use client";

import { motion, Variants } from "framer-motion";
import { Boxes, Code2, Smartphone, Cloud, Database, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Boxes,
    title: "ERP Development",
    description: "Comprehensive ERP platforms unifying finance, inventory, HR, and operations into one intelligent system."
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Bespoke applications built from the ground up around your exact business logic and workflows."
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Applications",
    description: "Cross-platform digital products with premium UI/UX, engineered for performance and scale."
  },
  {
    icon: Cloud,
    title: "Cloud Architecture & DevOps",
    description: "Scalable infrastructure design, CI/CD pipelines, and deployment strategies built for reliability."
  },
  {
    icon: Database,
    title: "Data Systems & Integration",
    description: "Seamless integration between your tools and databases, with clean, structured data pipelines."
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description: "Enterprise-grade security architecture baked into every layer, protecting your critical business data."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ServicesGrid() {
  return (
    <section className="py-24 w-full bg-background-primary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div key={idx} variants={cardVariants} className="group h-full">
                <div className="glass-card p-8 rounded-2xl h-full flex flex-col transition-all duration-300 group-hover:-translate-y-2 group-hover:border-accent-secondary/50 group-hover:shadow-[0_10px_30px_rgba(0,212,255,0.1)]">
                  
                  <div className="w-14 h-14 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-6 text-accent-secondary group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-white mb-4">{service.title}</h3>
                  
                  <p className="text-text-secondary text-sm flex-grow leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
