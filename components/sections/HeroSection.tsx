"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const Hero3DScene = dynamic(() => import("./Hero3DScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="w-4 h-4 rounded-full bg-accent-secondary animate-pulse shadow-[0_0_15px_rgba(0,212,255,0.8)]" />
    </div>
  ),
});

const staggerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.15, duration: 0.6, ease: "easeOut" }
  })
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-accent-primary/10 rounded-full blur-[100px] md:blur-[120px] -z-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center z-10">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-7 flex flex-col items-start mt-8 lg:mt-0 relative z-20 order-last lg:order-first">
          
          <motion.div 
            custom={0} initial="hidden" animate="visible" variants={staggerVariants}
            className="glass-card px-4 py-1.5 rounded-full flex items-center space-x-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
            <span className="text-small font-medium text-white">IT Solutions & ERP Systems</span>
          </motion.div>

          <motion.h1 
            custom={1} initial="hidden" animate="visible" variants={staggerVariants}
            className="text-[clamp(2.5rem,8vw,5.5rem)] font-bold font-heading text-white leading-[1.1] mb-6"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Intelligent Systems</span> for the Businesses of Tomorrow
          </motion.h1>

          <motion.p 
            custom={2} initial="hidden" animate="visible" variants={staggerVariants}
            className="text-body text-text-secondary max-w-[500px] mb-8"
          >
            Oxilah designs and builds enterprise-grade ERP platforms and custom software solutions engineered for scale, security, and performance — built for businesses that refuse to compromise.
          </motion.p>

          <motion.div 
            custom={3} initial="hidden" animate="visible" variants={staggerVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto"
          >
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-medium hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(46,127,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] w-full sm:w-auto">
              Start Your Project
            </button>
            <button className="group px-8 py-3.5 rounded-full border border-white/10 glass-card text-white font-medium flex items-center justify-center hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto">
              Explore ERP Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>

        </div>

        {/* Right Side: 3D Visual */}
        <div className="lg:col-span-5 w-full h-[250px] lg:h-[600px] relative order-first lg:order-last mt-8 lg:mt-0">
          <Hero3DScene />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center opacity-70 hover:opacity-100 transition-opacity z-20">
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden mb-2">
          <motion.div 
            className="w-full h-1/2 bg-accent-secondary"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
        <span className="text-small text-text-secondary uppercase tracking-widest text-[10px]">Scroll</span>
      </div>
    </section>
  );
}
