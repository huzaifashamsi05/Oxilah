"use client";

import { motion } from "framer-motion";
import { Globe, Mail } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Placeholder Name 1",
    role: "Founder & CEO",
    initials: "P1"
  },
  {
    name: "Placeholder Name 2",
    role: "Lead Engineer",
    initials: "P2"
  },
  {
    name: "Placeholder Name 3",
    role: "Head of Design",
    initials: "P3"
  },
  {
    name: "Placeholder Name 4",
    role: "ERP Solutions Architect",
    initials: "P4"
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

export default function TeamGrid() {
  return (
    <section className="py-24 bg-background-secondary w-full relative overflow-hidden">
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
            <span className="text-small font-medium text-white">Our Team</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h2 md:text-h1 font-bold font-heading text-white mb-6"
          >
            The People Behind the Platform
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body text-text-secondary max-w-[600px]"
          >
            A team of engineers and strategists dedicated to building software that performs.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group border-white/5 hover:border-accent-primary/30 transition-all duration-300"
            >
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <span className="text-2xl font-bold text-white">{member.initials}</span>
              </div>
              
              <h3 className="text-h3 font-semibold text-white mb-1">{member.name}</h3>
              <p className="text-small text-accent-secondary mb-6">{member.role}</p>
              
              <div className="flex items-center space-x-4">
                <Link href="#" className="text-text-secondary hover:text-accent-secondary transition-colors">
                  <Globe className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-text-secondary hover:text-accent-secondary transition-colors">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
