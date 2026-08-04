"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message. Please try again.');
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        message: ""
      });
    } catch (error) {
      const err = error as Error;
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || 'An unexpected error occurred.');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="glass-card rounded-2xl p-8 md:p-10 w-full relative overflow-hidden border-white/5"
    >
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center text-center py-12 min-h-[400px]"
          >
            <div className="w-20 h-20 rounded-full bg-accent-secondary/10 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-accent-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully</h3>
            <p className="text-text-secondary mb-8 max-w-[300px]">
              Thank you for reaching out. We&apos;ll be in touch within 24 hours.
            </p>
            <button 
              onClick={() => setStatus("idle")}
              className="px-6 py-2.5 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="flex flex-col space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-text-primary">Full Name *</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-background-secondary border border-white/10 rounded-xl px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary/50 transition-all"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-text-primary">Email Address *</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-background-secondary border border-white/10 rounded-xl px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary/50 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-text-primary">Company Name</label>
                <input 
                  type="text" 
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Corp (Optional)"
                  className="bg-background-secondary border border-white/10 rounded-xl px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary/50 transition-all"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="projectType" className="text-sm font-medium text-text-primary">Project Type</label>
                <select 
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="bg-background-secondary border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select an option</option>
                  <option value="ERP Development">ERP Development</option>
                  <option value="Custom Software">Custom Software</option>
                  <option value="Web/Mobile App">Web/Mobile App</option>
                  <option value="Cloud Architecture">Cloud Architecture</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-text-primary">Project Details *</label>
              <textarea 
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your goals, timeline, and budget..."
                className="bg-background-secondary border border-white/10 rounded-xl px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary/50 transition-all resize-y min-h-[120px]"
              />
            </div>

            {status === "error" && (
              <div className="flex items-center space-x-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="pt-2">
              <button 
                type="submit"
                disabled={status === "submitting"}
                className="w-full md:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-medium flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(46,127,255,0.3)]"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
