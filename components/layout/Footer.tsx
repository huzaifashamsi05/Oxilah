import Link from "next/link";
import { Globe, Mail, MessageCircle, Share2 } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <Logo className="w-12 h-12 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(46,127,255,0.5)]" />
              <span className="text-3xl font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">OXILAH</span>
            </Link>
            <p className="text-text-secondary mb-6">
              Empowering your digital presence with cutting-edge technology and premium design solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-heading text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-text-secondary hover:text-accent-secondary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-text-secondary hover:text-accent-secondary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-text-secondary hover:text-accent-secondary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-text-secondary hover:text-accent-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold font-heading text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-text-secondary hover:text-accent-secondary transition-colors">Web Development</Link></li>
              <li><Link href="/erp-services" className="text-text-secondary hover:text-accent-secondary transition-colors">ERP Solutions</Link></li>
              <li><Link href="/services" className="text-text-secondary hover:text-accent-secondary transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services" className="text-text-secondary hover:text-accent-secondary transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold font-heading text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-text-secondary">contact@oxilah.com</li>
              <li className="text-text-secondary">+1 (555) 123-4567</li>
              <li className="text-text-secondary">123 Tech Boulevard, Innovation City</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between">
          <p className="text-text-secondary text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Oxilah. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-text-secondary hover:text-accent-secondary transition-colors">
              <Globe size={20} />
            </Link>
            <Link href="#" className="text-text-secondary hover:text-accent-secondary transition-colors">
              <Mail size={20} />
            </Link>
            <Link href="#" className="text-text-secondary hover:text-accent-secondary transition-colors">
              <MessageCircle size={20} />
            </Link>
            <Link href="#" className="text-text-secondary hover:text-accent-secondary transition-colors">
              <Share2 size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
