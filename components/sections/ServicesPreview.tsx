"use client";

import { motion, Variants } from "framer-motion";
import { Boxes, Code2, Cloud, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Boxes,
    title: "ERP Development",
    description: "End-to-end ERP systems tailored to your operations — inventory, finance, HR, and workflow automation, unified in one platform.",
    href: "/erp-services"
  },
  {
    icon: Code2,
    title: "Custom Software",
    description: "Bespoke applications engineered around your exact business logic, built to scale as your company grows.",
    href: "/services"
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Secure, scalable infrastructure design and deployment, so your systems perform reliably under any load.",
    href: "/services"
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Security-first development practices baked into every layer of your software, protecting your most critical data.",
    href: "/services"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 w-full bg-background-primary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card px-4 py-1.5 rounded-full flex items-center space-x-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
            <span className="text-small font-medium text-white">What We Do</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h2 md:text-h1 font-bold font-heading text-white mb-6"
          >
            Software Engineering, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Without Compromise</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body text-text-secondary max-w-[600px]"
          >
            From enterprise ERP systems to custom digital platforms, we build technology that works as hard as your business does.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div key={idx} variants={cardVariants} className="group h-full">
                <Link href={service.href} className="block h-full outline-none">
                  <div className="glass-card p-8 rounded-2xl h-full flex flex-col transition-all duration-300 group-hover:-translate-y-2 group-hover:border-accent-secondary/50 group-hover:shadow-[0_10px_30px_rgba(0,212,255,0.1)]">
                    
                    <div className="w-14 h-14 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-6 text-accent-secondary group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    
                    <h3 className="text-xl font-bold font-heading text-white mb-4">{service.title}</h3>
                    
                    <p className="text-text-secondary text-sm flex-grow mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mt-auto flex items-center text-accent-secondary text-sm font-medium">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
