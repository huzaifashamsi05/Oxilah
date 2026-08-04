import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import LoadingScreen from "@/components/ui/LoadingScreen";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Oxilah | Enterprise ERP & Custom Software Development",
  description: "Oxilah designs and builds enterprise-grade ERP platforms and custom software solutions engineered for scale, security, and performance.",
  openGraph: {
    title: "Oxilah | Enterprise ERP & Custom Software Development",
    description: "Oxilah designs and builds enterprise-grade ERP platforms and custom software solutions engineered for scale, security, and performance.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans overflow-x-hidden`}>
        <LoadingScreen />
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
