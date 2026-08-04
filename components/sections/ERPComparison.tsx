"use client";

import { motion, Variants } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

const comparisonPoints = [
  {
    generic: "Rigid, one-size-fits-all modules",
    oxilah: "Custom-configured to your exact workflows"
  },
  {
    generic: "Slow, generic support tickets",
    oxilah: "Dedicated support team, direct access"
  },
  {
    generic: "Steep learning curve",
    oxilah: "Intuitive UI designed for fast adoption"
  },
  {
    generic: "Locked into vendor limitations",
    oxilah: "Open architecture, full ownership"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ERPComparison() {
  return (
    <section className="py-24 w-full bg-background-primary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
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
            <span className="text-small font-medium text-white">Why Choose Oxilah ERP</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h2 md:text-h1 font-bold font-heading text-white"
          >
            The Difference Is in the Details
          </motion.h2>
        </div>

        {/* Comparison Table */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Generic ERP Column */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col space-y-4 order-last md:order-none opacity-80 md:opacity-100"
            >
              <div className="text-center pb-4 border-b border-white/10 mb-2">
                <h3 className="text-xl font-semibold text-text-secondary">Generic ERP Software</h3>
              </div>
              {comparisonPoints.map((point, idx) => (
                <motion.div key={`generic-${idx}`} variants={rowVariants} className="glass-card p-6 rounded-2xl flex items-center bg-white/[0.02] border-white/5">
                  <X className="w-6 h-6 text-text-secondary/50 shrink-0 mr-4" />
                  <p className="text-text-secondary">{point.generic}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Oxilah ERP Column */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col space-y-4"
            >
              <div className="text-center pb-4 border-b border-accent-secondary/30 relative mb-2">
                <div className="absolute inset-0 bg-accent-secondary/10 blur-xl -z-10" />
                <h3 className="text-xl font-bold text-white">Oxilah ERP</h3>
              </div>
              {comparisonPoints.map((point, idx) => (
                <motion.div key={`oxilah-${idx}`} variants={rowVariants} className="glass-card p-6 rounded-2xl flex items-center border-accent-secondary/30 bg-accent-primary/5 shadow-[0_0_20px_rgba(0,212,255,0.05)] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-accent-secondary/0 group-hover:bg-accent-secondary/5 transition-colors duration-500" />
                  <CheckCircle2 className="w-6 h-6 text-accent-secondary shrink-0 mr-4 relative z-10" />
                  <p className="text-white font-medium relative z-10">{point.oxilah}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
        
      </div>
    </section>
  );
}
