"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CompanyStory() {
  return (
    <section className="py-24 bg-background-secondary w-full overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[55%] flex flex-col items-start"
          >
            <div className="glass-card px-4 py-1.5 rounded-full flex items-center space-x-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
              <span className="text-small font-medium text-white">Our Story</span>
            </div>
            
            <h2 className="text-h2 md:text-h1 font-bold font-heading text-white mb-8">
              Founded on a Simple Belief
            </h2>
            
            <div className="space-y-6 text-body text-text-secondary">
              <p>
                Oxilah was founded on the belief that most businesses are held back not by ambition, but by the limitations of their software. Off-the-shelf tools force compromise. Generic ERPs create more friction than they solve.
              </p>
              <p>
                We set out to build something different — software engineered specifically around how each business actually operates, with the performance, security, and design quality expected from world-class technology brands.
              </p>
              <p>
                Today, we partner with businesses across industries who refuse to settle for average, building the systems that power their next stage of growth.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[45%] relative"
          >
            <div className="absolute inset-0 bg-accent-primary/20 blur-[100px] rounded-full -z-10" />
            <div className="glass-card rounded-2xl p-2 md:p-4 overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(46,127,255,0.1)] relative aspect-[4/3] md:aspect-square w-full">
              <Image 
                src="/images/company_story_abstract.jpg" 
                alt="Company Growth Abstract" 
                fill
                className="rounded-xl object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
