"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, MessageCircle } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@oxilah.com"
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (000) 000-0000"
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Placeholder Address, City, Country"
  }
];

export default function ContactInfo() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full flex flex-col space-y-6"
    >
      {/* Info Cards */}
      <div className="flex flex-col space-y-4">
        {contactInfo.map((info, idx) => (
          <div key={idx} className="glass-card p-6 rounded-2xl flex items-center border-white/5 hover:border-white/10 transition-colors">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-5 shrink-0">
              <info.icon className="w-6 h-6 text-accent-secondary" />
            </div>
            <div className="flex flex-col">
              <span className="text-small text-text-secondary mb-1">{info.label}</span>
              <span className="text-lg font-medium text-white">{info.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Socials */}
      <div className="pt-6 border-t border-white/10">
        <span className="text-small text-text-secondary block mb-4">Follow Us</span>
        <div className="flex items-center space-x-4">
          <Link href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-text-secondary hover:text-accent-secondary hover:border-accent-secondary/50 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all duration-300">
            <Globe className="w-5 h-5" />
          </Link>
          <Link href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-text-secondary hover:text-accent-secondary hover:border-accent-secondary/50 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all duration-300">
            <MessageCircle className="w-5 h-5" />
          </Link>
          <Link href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-text-secondary hover:text-accent-secondary hover:border-accent-secondary/50 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all duration-300">
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
