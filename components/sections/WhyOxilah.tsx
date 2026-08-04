"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface StatProps {
  finalValue: number;
  suffix: string;
  label: string;
  decimals?: number;
}

function AnimatedStat({ finalValue, suffix, label, decimals = 0 }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(0, finalValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => {
          setDisplayValue(value.toFixed(decimals));
        }
      });
      return controls.stop;
    }
  }, [isInView, finalValue, decimals]);

  return (
    <div ref={ref} className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
      <h3 className="text-5xl md:text-h1 font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary mb-2 drop-shadow-sm">
        {displayValue}{suffix}
      </h3>
      <p className="text-small text-text-secondary font-medium tracking-wide uppercase">{label}</p>
    </div>
  );
}

export default function WhyOxilah() {
  const stats = [
    { finalValue: 40, suffix: "+", label: "Enterprise Projects Delivered", decimals: 0 },
    { finalValue: 99.9, suffix: "%", label: "System Uptime Reliability", decimals: 1 },
    { finalValue: 15, suffix: "+", label: "Industries Served", decimals: 0 },
    { finalValue: 24, suffix: "/7", label: "Dedicated Support", decimals: 0 },
  ];

  return (
    <section className="py-24 md:py-32 w-full bg-background-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <div className="glass-card px-4 py-1.5 rounded-full flex items-center space-x-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              <span className="text-small font-medium text-white">Why Oxilah</span>
            </div>
            
            <h2 className="text-h2 md:text-h1 font-bold font-heading text-white mb-6 leading-tight">
              Built for Businesses That <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Demand More</span>
            </h2>
            
            <p className="text-body text-text-secondary mb-10 max-w-xl leading-relaxed">
              We don&apos;t build generic software. Every system we deliver is engineered around your specific workflows, designed to eliminate inefficiency and give your business a genuine technological edge.
            </p>
            
            <Link href="#process" className="group px-8 py-3.5 rounded-full border border-white/10 glass-card text-white font-medium flex items-center justify-center hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto">
              See Our Process
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Right Column (Stats Grid) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, idx) => (
              <AnimatedStat key={idx} {...stat} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
