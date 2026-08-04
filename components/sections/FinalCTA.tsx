"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

// Simple lightweight particle component
function Particles() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl z-0">
      {[...Array(20)].map((_, i) => {
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 100}%`;
        const duration = 3 + Math.random() * 4;
        const delay = Math.random() * 2;
        
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: [0, 0.4, 0],
              y: [10, -20]
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-accent-secondary blur-[0.5px]"
            style={{ left, top }}
          />
        );
      })}
    </div>
  );
}

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 w-full bg-background-primary px-4 md:px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-7xl mx-auto glass-card rounded-[2.5rem] p-10 md:p-20 flex flex-col items-center text-center overflow-hidden border-white/10 shadow-[0_0_50px_rgba(46,127,255,0.05)]"
      >
        {/* Pulsing Radial Background Glow */}
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square rounded-full bg-gradient-to-tr from-accent-primary to-accent-secondary blur-[100px] z-0 pointer-events-none"
        />
        
        <Particles />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="glass-card px-4 py-1.5 rounded-full flex items-center space-x-2 mb-8 bg-white/5 border-white/20">
            <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
            <span className="text-small font-medium text-white">Ready to Build?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold font-heading text-white mb-6 leading-tight drop-shadow-lg max-w-4xl">
            Let&apos;s Engineer Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Breakthrough</span>
          </h2>
          
          <p className="text-body text-text-secondary max-w-[550px] mb-12 leading-relaxed">
            Whether you need a complete ERP transformation or a custom software solution, our team is ready to turn your vision into a scalable reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="px-8 md:px-10 py-4 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-medium hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(46,127,255,0.4)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] w-full sm:w-auto text-center"
            >
              Start Your Project
            </Link>
            <Link 
              href="/contact" 
              className="px-8 md:px-10 py-4 rounded-full border border-white/20 glass-card text-white font-medium hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
