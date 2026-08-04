"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ERP3DScene = dynamic(() => import("./ERP3DScene"), { ssr: false });

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ERPHero() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="min-h-screen w-full flex items-center pt-40 pb-20 bg-background-primary relative overflow-hidden">
      
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-accent-primary/10 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[60vh]">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start z-10"
          >
            <motion.div variants={itemVariants} className="glass-card px-4 py-1.5 rounded-full flex items-center space-x-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
              <span className="text-small font-medium text-white">Enterprise Resource Planning</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-[clamp(2.5rem,7vw,4.5rem)] font-bold font-heading text-white leading-[1.1] mb-6">
              One Platform. Every Department. <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Total Control.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-body text-text-secondary max-w-[500px] mb-10 leading-relaxed">
              Our ERP systems unify finance, inventory, HR, and operations into a single intelligent platform — built to eliminate inefficiency and give your leadership real-time visibility.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/contact" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-medium flex items-center justify-center hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(46,127,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] w-full sm:w-auto">
                Request a Demo
              </Link>
              <Link href="#modules" className="px-8 py-3.5 rounded-full border border-white/10 glass-card text-white font-medium flex items-center justify-center hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto">
                View Modules
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="w-full h-[250px] lg:h-[600px] relative order-first lg:order-last mt-8 lg:mt-0"
          >
            <ERP3DScene isMobile={isMobile} />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
