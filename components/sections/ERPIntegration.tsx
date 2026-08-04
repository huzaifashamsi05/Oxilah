"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const features = [
  "API-first architecture",
  "Third-party integrations (accounting, CRM, payment gateways)",
  "Custom integration development available"
];

const textVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.15 } 
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function ERPIntegration() {
  return (
    <section className="py-24 w-full bg-background-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content - Left (55% width roughly) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
            className="lg:col-span-6 xl:col-span-5 flex flex-col items-start"
          >
            <motion.div variants={itemVariants} className="glass-card px-4 py-1.5 rounded-full flex items-center space-x-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
              <span className="text-small font-medium text-white">Seamless Integration</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-h2 md:text-h1 font-bold font-heading text-white mb-6 leading-tight">
              Connects With the Tools You Already Use
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-body text-text-secondary mb-8 leading-relaxed">
              Our ERP platform integrates smoothly with your existing software ecosystem, so adoption never means starting from zero.
            </motion.p>
            
            <div className="flex flex-col space-y-4 w-full">
              {features.map((item, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent-secondary shrink-0 mr-3 mt-0.5" />
                  <span className="text-text-secondary">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual - Right (45% width roughly) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
            className="lg:col-span-6 xl:col-span-7 relative"
          >
            <div className="absolute inset-0 bg-accent-primary/20 blur-[80px] rounded-full scale-90 -z-10" />
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="glass-card p-2 md:p-4 rounded-2xl border-white/10 shadow-[0_0_40px_rgba(46,127,255,0.15)]"
            >
              <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-xl overflow-hidden border border-white/5 bg-black">
                <Image 
                  src="/images/erp-integration.jpg"
                  alt="System Integration Visualization"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
