"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="min-h-[50vh] w-full flex items-center justify-center pt-40 pb-20 bg-background-primary relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-secondary/10 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card px-4 py-1.5 rounded-full flex items-center space-x-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
          <span className="text-small font-medium text-white">Get in Touch</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-h2 md:text-5xl lg:text-6xl font-bold font-heading text-white leading-[1.1] mb-6 max-w-[700px]"
        >
          Let&apos;s Build Something Exceptional
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-body text-text-secondary max-w-[550px] leading-relaxed"
        >
          Tell us about your project. Our team will get back to you within 24 hours to discuss how we can help.
        </motion.p>
      </div>
    </section>
  );
}
