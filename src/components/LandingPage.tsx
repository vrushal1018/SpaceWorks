"use client";

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowDown } from "lucide-react";

interface LandingPageProps {
  onNext: () => void;
}

export default function LandingPage({ onNext }: LandingPageProps) {
  // Animation variants
  const fadeScaleUp: Variants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const slideUp: Variants = {
    hidden: { opacity: 0, y: 150 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative min-h-screen bg-[#878787] text-white overflow-hidden font-sans"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/spaceworksmainvideo.mp4" type="video/mp4" />
      </video>

      {/* Absolute Overlay to darken the video slightly for text readability */}
      <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />

      {/* Subtle Background Glow / Ambient Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-500/10 rounded-full blur-[90px] md:blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-amber-700/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none z-0" />

      {/* Faint Vertical Grid Lines to match reference image */}
      <div className="absolute inset-0 flex justify-evenly pointer-events-none opacity-10 z-0">
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white" />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-50 flex items-center justify-between px-6 md:px-10 py-6 md:py-8 text-[10px] md:text-xs uppercase tracking-widest border-b border-white/5"
      >
        <div className="flex items-center">
          <a
            href="https://inatechfmglobal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-80 transition-opacity"
          >
            <Image
              src="/Ina Tech FM Logo .png"
              alt="Ina Tech FM Logo"
              width={180}
              height={60}
              className="object-contain h-8 md:h-12 w-auto"
              priority
            />
          </a>
          <span className="absolute bottom-1 md:bottom-2 left-6 md:left-10 ml-1 text-[8px] md:text-[10px] text-white/50 tracking-[0.2em] uppercase">An Ina Tech FM Vertical</span>
        </div>

        <button
          onClick={onNext}
          className="hover:text-white/70 transition-colors tracking-widest uppercase"
        >
          Contact Us
        </button>
      </motion.nav>

      {/* Main Content Area - Fully Absolute Positioned */}
      <main className="relative w-full h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] pointer-events-none">

        {/* TOP LEFT TEXT */}
        <motion.div
          variants={fadeScaleUp}
          initial="hidden"
          animate="visible"
          className="absolute top-[8%] md:top-[20%] left-6 md:left-10 z-30 pointer-events-auto"
        >
          {/* Changed from text-white/60 to text-white/90 for brightness */}
          <div className="text-white/90 text-[10px] md:text-sm max-w-[150px] md:max-w-[220px] leading-relaxed">
            <p className="text-white font-medium tracking-widest text-[9px] md:text-xs mb-1 md:mb-2">DESIGN-LED THINKING</p>
            <p>Spaces shaped around business, people and purpose.</p>
          </div>
        </motion.div>

        {/* RIGHT SIDE TEXT */}
        <motion.div
          variants={fadeScaleUp}
          initial="hidden"
          animate="visible"
          className="absolute top-[62%] md:top-[55%] right-6 md:right-10 text-right z-30 pointer-events-auto drop-shadow-md"
        >
          {/* Changed from text-white/60 to text-white/90 for brightness */}
          <div className="text-white/90 text-[10px] md:text-sm max-w-[140px] md:max-w-[220px] leading-relaxed ml-auto">
            <p className="text-white font-medium tracking-widest text-[9px] md:text-xs mb-1 md:mb-2">CIVIL WORKS</p>
            <p>New construction, modifications and structural works with quality and compliance.</p>
          </div>
        </motion.div>

        {/* CENTER LOGO (Floating high z-index to overlap image) */}
        <motion.div
          variants={fadeScaleUp}
          initial="hidden"
          animate="visible"
          className="absolute top-[20%] md:top-[15%] left-1/2 -translate-x-1/2 w-full flex items-center justify-center z-40 pointer-events-none"
        >
          <Image
            src="/SpaceWorks Logo White 2.png"
            alt="SpaceWorks Logo"
            width={600}
            height={250}
            className="object-contain w-[80%] md:w-[600px]"
            priority
          />
        </motion.div>



      </main>

      {/* Floating Action Buttons Container */}
      <div className="absolute bottom-4 md:bottom-10 left-0 w-full px-6 md:px-10 flex justify-between items-end z-50 pointer-events-none">

        {/* Down Arrow to proceed (Bottom Center) */}
        <div className="flex-1 flex justify-center pointer-events-auto pl-[40%] md:pl-0">
          <button
            onClick={onNext}
            className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all animate-bounce group bg-black/20 backdrop-blur-sm"
          >
            <ArrowDown className="w-3 h-3 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Right Arrow Controls (Bottom Right) */}
        <motion.div variants={fadeScaleUp} initial="hidden" animate="visible" className="flex gap-2 md:gap-4 pointer-events-auto">
          <button className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all bg-black/20 backdrop-blur-sm">
            <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
          </button>
          <button className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all bg-black/20 backdrop-blur-sm">
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
          </button>
        </motion.div>
      </div>

    </motion.div>
  );
}