"use client";

import { motion, Variants } from "framer-motion";

const technologies = [
  "Next.js", "React", "TypeScript", "Node.js", 
  "PostgreSQL", "MongoDB", "AWS", "Docker", 
  "Python", "TensorFlow"
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15 } }
};

export default function TechStack() {
  return (
    <section className="py-24 w-full bg-background-primary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card px-4 py-1.5 rounded-full flex items-center space-x-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
            <span className="text-small font-medium text-white">Technology We Use</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h2 md:text-h1 font-bold font-heading text-white mb-6"
          >
            Built With Modern, <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Proven Technology</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body text-text-secondary max-w-[600px]"
          >
            We choose the right tools for the job — not the trendiest ones.
          </motion.p>
        </div>

        {/* Tech Pills */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {technologies.map((tech, idx) => (
            <motion.div 
              key={idx} 
              variants={pillVariants}
              className="glass-card px-6 py-3 rounded-full flex items-center space-x-3 transition-colors duration-300 hover:border-accent-secondary hover:bg-white/10 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] cursor-default"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
              <span className="text-white font-medium">{tech}</span>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
