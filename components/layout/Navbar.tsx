"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "ERP Services", href: "/erp-services" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-300",
          scrolled ? "glass-card !rounded-none !border-x-0 !border-t-0 py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <Logo className="w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(46,127,255,0.5)]" />
            <span className="text-2xl md:text-3xl font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">OXILAH</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-text-primary hover:text-accent-secondary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-text-primary focus:outline-none relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute inset-y-0 right-0 w-64 bg-background-primary shadow-2xl flex flex-col pt-24 px-6 border-l border-white/10"
            >
              <nav className="flex flex-col space-y-6">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-text-primary text-lg font-medium hover:text-accent-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-center px-6 py-3 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-medium shadow-lg"
                  >
                    Get Started
                  </Link>
                </div>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
