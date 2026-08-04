"use client";

import { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Oxilah rebuilt our entire operations backbone. The ERP system they delivered eliminated three separate legacy tools and cut our reporting time by half.",
    initials: "AK",
    name: "Ahmed Khan",
    role: "Operations Director, Placeholder Logistics Co."
  },
  {
    quote: "Working with Oxilah felt like having an in-house engineering team. The attention to detail in both design and architecture was exceptional.",
    initials: "MR",
    name: "Maria Reyes",
    role: "CTO, Placeholder Retail Group"
  },
  {
    quote: "The platform Oxilah built handles our scale effortlessly. Zero downtime since launch, and the support has been outstanding.",
    initials: "SH",
    name: "Sara Hussain",
    role: "CEO, Placeholder Manufacturing Inc."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const itemWidth = (scrollRef.current.children[0] as HTMLElement)?.offsetWidth || 380;
    const newIndex = Math.round(scrollLeft / (itemWidth + 24)); // 24 is roughly the gap
    setActiveIndex(Math.min(testimonials.length - 1, Math.max(0, newIndex)));
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const item = scrollRef.current.children[index] as HTMLElement;
    if (item) {
      // Calculate scroll position relative to container
      const containerLeft = scrollRef.current.getBoundingClientRect().left;
      const itemLeft = item.getBoundingClientRect().left;
      const currentScroll = scrollRef.current.scrollLeft;
      // Scroll to item ensuring it's at the start (minus some padding)
      const paddingOffset = 24; 
      scrollRef.current.scrollTo({ 
        left: currentScroll + (itemLeft - containerLeft) - paddingOffset, 
        behavior: "smooth" 
      });
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-24 w-full bg-background-primary relative overflow-hidden">
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
            <span className="text-small font-medium text-white">Client Success</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h2 md:text-h1 font-bold font-heading text-white max-w-3xl"
          >
            Trusted by Businesses That Expect Excellence
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative -mx-6 md:-mx-12 px-6 md:px-12">
          <motion.div 
            ref={scrollRef}
            onScroll={handleScroll}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 items-stretch [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={idx} 
                variants={cardVariants} 
                className="snap-center sm:snap-start shrink-0 w-[85vw] sm:w-[380px] glass-card p-8 rounded-2xl flex flex-col transition-transform hover:-translate-y-1"
              >
                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-secondary text-accent-secondary" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-body text-text-secondary italic mb-8 flex-grow leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                
                <div className="w-full h-px bg-border-glass mb-6" />
                
                {/* Author */}
                <div className="flex items-center space-x-4 mt-auto">
                  <div className="w-12 h-12 rounded-full shrink-0 bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm tracking-wider">{testimonial.initials}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-text-secondary text-[12px]">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-6 mt-8">
          <button 
            onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={activeIndex === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "bg-accent-secondary w-8" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={() => scrollToIndex(Math.min(testimonials.length - 1, activeIndex + 1))}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={activeIndex === testimonials.length - 1}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
