"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ServicesHero() {
  return (
    <section className="relative min-h-[60vh] w-full flex items-center justify-center pt-40 pb-32 overflow-hidden bg-background-primary">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-60" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="glass-card px-4 py-1.5 rounded-full flex items-center space-x-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
            <span className="text-small font-medium text-white">Our Services</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold font-heading text-white leading-tight mb-8">
            Software Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Engineered for Impact</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-body text-text-secondary max-w-[600px] leading-relaxed">
            From enterprise systems to custom platforms, we deliver technology built around how your business actually operates.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
