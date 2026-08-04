"use client";

import { motion } from "framer-motion";
import { Target, Rocket, ShieldCheck, Sparkles } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every line of code, every design decision, made with intention — nothing generic, nothing accidental."
  },
  {
    icon: Rocket,
    title: "Ambition",
    description: "We build for businesses that think big, and we engineer systems that can grow with that ambition."
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Transparent process, honest timelines, and security-first engineering in everything we deliver."
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description: "We hold our work to a standard most companies don't — because compromise isn't in our vocabulary."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function VisionValues() {
  return (
    <section className="py-24 bg-background-primary w-full relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
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
            <span className="text-small font-medium text-white">What Drives Us</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h2 md:text-h1 font-bold font-heading text-white"
          >
            Our Vision & Values
          </motion.h2>
        </div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass-card p-8 rounded-2xl border-white/5 hover:border-accent-primary/50 transition-colors duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-accent-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent-primary/20 transition-colors duration-300">
                <value.icon className="w-7 h-7 text-accent-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
              <p className="text-text-secondary leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
