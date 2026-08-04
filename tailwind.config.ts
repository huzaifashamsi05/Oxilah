import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#0A0E1A",
          secondary: "#10162A",
        },
        accent: {
          primary: "#2E7FFF",
          secondary: "#00D4FF",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A0AEC0",
        },
        border: {
          glass: "rgba(255,255,255,0.08)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
      },
      fontSize: {
        "hero": "clamp(2.5rem, 5vw + 1rem, 5.5rem)",
        "h1": ["clamp(2rem, 4vw + 1rem, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h2": ["clamp(1.75rem, 3vw + 1rem, 2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "h3": ["1.75rem", { lineHeight: "1.3" }],
        "body": ["1rem", { lineHeight: "1.5" }],
        "small": ["0.875rem", { lineHeight: "1.4" }],
      },
    },
  },
  plugins: [],
};
export default config;
