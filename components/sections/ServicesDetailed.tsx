"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface RowProps {
  imageSrc: string;
  imageAlt: string;
  label: string;
  title: string;
  description: string;
  features: string[];
  reverse?: boolean;
}

const textVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.15 } 
  }
};

const textReverseVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.15 } 
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

const imageReverseVariants: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

function ServiceRow({ imageSrc, imageAlt, label, title, description, features, reverse = false }: RowProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? "" : ""}`}>
      
      {/* Visual */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={reverse ? imageReverseVariants : imageVariants}
        className={`relative ${reverse ? 'order-last lg:order-last' : 'order-last lg:order-first'}`}
      >
        <div className="absolute inset-0 bg-accent-primary/20 blur-[80px] rounded-full scale-90 -z-10" />
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="glass-card p-2 md:p-4 rounded-2xl border-white/10 shadow-[0_0_40px_rgba(46,127,255,0.15)]"
        >
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/5 bg-black">
            <Image 
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Text Content */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={reverse ? textReverseVariants : textVariants}
        className={`flex flex-col items-start ${reverse ? 'order-first lg:order-first' : 'order-first lg:order-last'}`}
      >
        <motion.div variants={itemVariants} className="glass-card px-4 py-1.5 rounded-full flex items-center space-x-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
          <span className="text-small font-medium text-white">{label}</span>
        </motion.div>
        
        <motion.h2 variants={itemVariants} className="text-h2 font-bold font-heading text-white mb-6 leading-tight">
          {title}
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-body text-text-secondary mb-8 leading-relaxed">
          {description}
        </motion.p>
        
        <div className="flex flex-col space-y-4 w-full">
          {features.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-accent-secondary shrink-0 mr-3 mt-0.5" />
              <span className="text-text-secondary">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function ServicesDetailed() {
  return (
    <section className="py-24 w-full bg-background-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-32">
        
        <ServiceRow 
          imageSrc="/images/services-1.jpg"
          imageAlt="ERP Development Visualization"
          label="ERP Development"
          title="Systems That Unify Your Entire Operation"
          description="We design ERP platforms that eliminate data silos and give your team a single source of truth — from inventory and finance to HR and customer operations."
          features={["Modular architecture", "Real-time reporting", "Role-based access control"]}
        />

        <ServiceRow 
          imageSrc="/images/services-2.jpg"
          imageAlt="Custom Software Visualization"
          label="Custom Software Development"
          title="Built Around Your Business, Not a Template"
          description="Off-the-shelf software forces you to adapt your operations to its limitations. We build custom platforms that adapt to you."
          features={["Tailored workflows", "Scalable codebase", "Ongoing iteration support"]}
          reverse={true}
        />

        <ServiceRow 
          imageSrc="/images/services-3.jpg"
          imageAlt="Cloud Architecture Visualization"
          label="Cloud Architecture"
          title="Infrastructure That Scales With You"
          description="We architect cloud systems designed for reliability under real-world load, so performance never becomes your bottleneck."
          features={["Auto-scaling infrastructure", "99.9% uptime design", "Continuous deployment pipelines"]}
        />
        
      </div>
    </section>
  );
}
