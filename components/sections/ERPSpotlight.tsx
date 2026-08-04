"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const checklist = [
  "Real-time data synchronization across departments",
  "Custom modules built around your workflows",
  "Role-based access and enterprise-grade security",
  "Scalable architecture that grows with your business"
];

const containerVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ERPSpotlight() {
  return (
    <section className="py-24 w-full bg-background-primary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column (Visual) - Order 2 on mobile, Order 1 on desktop */}
          <motion.div 
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 order-last lg:order-first relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-accent-primary/20 blur-[80px] rounded-full scale-90 -z-10" />
            
            {/* Floating Container */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="glass-card p-2 md:p-4 rounded-2xl border-white/10 shadow-[0_0_40px_rgba(46,127,255,0.15)]"
            >
              <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-xl overflow-hidden border border-white/5 bg-black">
                <Image 
                  src="/images/erp-dashboard.jpg"
                  alt="Futuristic ERP Dashboard Interface"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column (Text) - Order 1 on mobile, Order 2 on desktop */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 order-first lg:order-last flex flex-col items-start"
          >
            <motion.div variants={itemVariants} className="glass-card px-4 py-1.5 rounded-full flex items-center space-x-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
              <span className="text-small font-medium text-white">ERP Solutions</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-h2 md:text-h1 font-bold font-heading text-white mb-6 leading-tight">
              One Platform. Every Department. <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Total Control.</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-body text-text-secondary mb-8 leading-relaxed">
              Our ERP systems bring finance, inventory, HR, and operations into a single intelligent platform — eliminating data silos and giving your leadership team real-time visibility into everything that matters.
            </motion.p>
            
            <div className="flex flex-col space-y-4 mb-10 w-full">
              {checklist.map((item, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent-secondary shrink-0 mr-3 mt-0.5" />
                  <span className="text-text-secondary">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div variants={itemVariants}>
              <Link href="/erp-services" className="inline-block px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-medium hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(46,127,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]">
                Explore ERP Services
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
