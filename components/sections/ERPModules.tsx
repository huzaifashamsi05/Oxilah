"use client";

import { motion, Variants } from "framer-motion";
import { Wallet, Package, Users, TrendingUp, Factory, BarChart3 } from "lucide-react";

const modules = [
  { icon: Wallet, title: "Finance & Accounting", description: "Real-time financial reporting, invoicing, budgeting, and automated reconciliation." },
  { icon: Package, title: "Inventory & Supply Chain", description: "Live stock tracking, automated reordering, and end-to-end supply chain visibility." },
  { icon: Users, title: "Human Resources", description: "Employee records, payroll automation, performance tracking, and onboarding workflows." },
  { icon: TrendingUp, title: "Sales & CRM", description: "Pipeline management, customer insights, and sales performance analytics in one view." },
  { icon: Factory, title: "Manufacturing & Production", description: "Production planning, quality control tracking, and resource allocation tools." },
  { icon: BarChart3, title: "Business Intelligence", description: "Custom dashboards and real-time analytics across every department, in one place." }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ERPModules() {
  return (
    <section id="modules" className="py-24 w-full bg-background-secondary relative overflow-hidden">
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
            <span className="text-small font-medium text-white">Core Modules</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h2 md:text-h1 font-bold font-heading text-white mb-6"
          >
            Every Function, One Unified System
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body text-text-secondary max-w-[600px]"
          >
            Each module works independently or together — configured around exactly what your business needs.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {modules.map((module, idx) => {
            const Icon = module.icon;
            return (
              <motion.div key={idx} variants={cardVariants} className="group h-full">
                <div className="glass-card p-8 rounded-2xl h-full flex flex-col transition-all duration-300 group-hover:-translate-y-2 group-hover:border-accent-secondary/50 group-hover:shadow-[0_10px_30px_rgba(0,212,255,0.1)]">
                  
                  <div className="w-14 h-14 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-6 text-accent-secondary group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-white mb-4">{module.title}</h3>
                  
                  <p className="text-text-secondary text-sm flex-grow leading-relaxed">
                    {module.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
