"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="min-h-[60vh] w-full flex items-center justify-center pt-40 pb-20 bg-background-primary relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-primary/10 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card px-4 py-1.5 rounded-full flex items-center space-x-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
          <span className="text-small font-medium text-white">About Oxilah</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-h2 md:text-hero font-bold font-heading text-white leading-[1.1] mb-6 max-w-[800px]"
        >
          Engineering Ambition Into Reality
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-body text-text-secondary max-w-[600px] leading-relaxed"
        >
          We are a team of engineers, designers, and strategists building the software infrastructure behind ambitious businesses.
        </motion.p>
      </div>
    </section>
  );
}
