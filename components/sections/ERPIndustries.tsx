"use client";

import { motion, Variants } from "framer-motion";
import { Factory, ShoppingBag, Truck, HeartPulse, HardHat, Landmark } from "lucide-react";

const industries = [
  { icon: Factory, label: "Manufacturing" },
  { icon: ShoppingBag, label: "Retail & E-commerce" },
  { icon: Truck, label: "Logistics" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: HardHat, label: "Construction" },
  { icon: Landmark, label: "Finance & Banking" }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15 } }
};

export default function ERPIndustries() {
  return (
    <section className="py-24 w-full bg-background-primary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card px-4 py-1.5 rounded-full flex items-center space-x-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
            <span className="text-small font-medium text-white">Industries We Serve</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h2 md:text-h1 font-bold font-heading text-white"
          >
            ERP Systems Built for Your Industry
          </motion.h2>
        </div>

        {/* Tags */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx} 
                variants={pillVariants}
                className="glass-card px-6 py-3.5 rounded-full flex items-center space-x-3 transition-colors duration-300 hover:border-accent-secondary hover:bg-white/10 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] cursor-default"
              >
                <Icon className="w-5 h-5 text-accent-secondary" />
                <span className="text-white font-medium">{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}
