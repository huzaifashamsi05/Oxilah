"use client";

import { motion, Variants } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We analyze your business operations, challenges, and goals to define the right technical roadmap."
  },
  {
    number: "02",
    title: "Architecture & Design",
    description: "We design scalable system architecture and premium user experiences tailored to your workflows."
  },
  {
    number: "03",
    title: "Development & Testing",
    description: "Our engineers build and rigorously test your platform for performance, security, and reliability."
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing support to ensure long-term success."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 w-full bg-background-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card px-4 py-1.5 rounded-full flex items-center space-x-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
            <span className="text-small font-medium text-white">Our Process</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h2 md:text-h1 font-bold font-heading text-white mb-6"
          >
            From Concept to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Enterprise-Ready</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body text-text-secondary max-w-[600px]"
          >
            A proven methodology that turns complex business requirements into powerful, reliable software.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[32px] left-0 w-full h-[2px] overflow-hidden">
            {/* The line track */}
            <div className="absolute inset-0 border-t-2 border-dashed border-white/10" />
            {/* The animated line fill */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary origin-left opacity-30 blur-[1px]"
            />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10"
          >
            {steps.map((step, idx) => (
              <motion.div key={idx} variants={stepVariants} className="flex flex-col items-center md:items-start text-center md:text-left">
                
                {/* Number Badge */}
                <div className="w-16 h-16 rounded-full glass-card border border-accent-secondary/50 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,212,255,0.15)] relative">
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 rounded-full bg-accent-secondary/5" />
                  <span className="text-xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-br from-accent-primary to-accent-secondary relative z-10">
                    {step.number}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="text-h3 font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-small text-text-secondary leading-relaxed">
                  {step.description}
                </p>
                
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
