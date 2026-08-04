"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "2019",
    title: "Oxilah Founded",
    description: "Started with a small team and a clear mission: build software without compromise."
  },
  {
    year: "2021",
    title: "First Enterprise ERP Launch",
    description: "Delivered our first full-scale ERP platform for a manufacturing client, setting the standard for what followed."
  },
  {
    year: "2023",
    title: "Expanded Across Industries",
    description: "Grew our client base across retail, logistics, and healthcare sectors."
  },
  {
    year: "2026",
    title: "40+ Projects Delivered",
    description: "Reached a major milestone in enterprise projects delivered, with zero major downtime incidents."
  }
];

export default function MilestonesTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-24 bg-background-primary w-full relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card px-4 py-1.5 rounded-full flex items-center space-x-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
            <span className="text-small font-medium text-white">Our Journey</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h2 md:text-h1 font-bold font-heading text-white"
          >
            Milestones That Shaped Us
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Animated Vertical Line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-1 bg-white/5 rounded-full -translate-x-1/2" />
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-primary to-accent-secondary rounded-full -translate-x-1/2 z-0"
          />

          <div className="space-y-16">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div key={idx} className="relative flex items-center md:justify-between flex-col md:flex-row group">
                  
                  {/* Dot Marker */}
                  <div className="absolute left-[24px] md:left-1/2 w-4 h-4 rounded-full bg-accent-secondary border-4 border-background-primary -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,212,255,0.5)] group-hover:scale-150 transition-transform duration-300" />
                  
                  {/* Left Side (Desktop) */}
                  <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                    >
                      <h3 className="text-3xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary mb-2">
                        {milestone.year}
                      </h3>
                      <h4 className="text-xl font-semibold text-white mb-3">{milestone.title}</h4>
                      <p className="text-text-secondary">{milestone.description}</p>
                    </motion.div>
                  </div>

                  {/* Empty Spacer (Desktop) */}
                  <div className={`hidden md:block w-5/12 ${isEven ? 'md:order-2' : ''}`} />
                  
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
