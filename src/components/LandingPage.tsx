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
      {/* Subtle Background Glow / Ambient Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-700/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Faint Vertical Grid Lines */}
      <div className="absolute inset-0 flex justify-evenly pointer-events-none opacity-10">
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white" />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-20 flex items-center justify-between px-10 py-8 text-xs uppercase tracking-widest border-b border-white/5"
      >
        <div className="flex items-center">
          <Image
            src="/Ina Tech FM Logo .png"
            alt="Ina Tech FM Logo"
            width={180}
            height={60}
            className="object-contain h-12 w-auto"
            priority
          />
        </div>

        <button
          onClick={onNext}
          className="hover:text-white/70 transition-colors tracking-widest uppercase"
        >
          Contact Us
        </button>
      </motion.nav>

      {/* Down Arrow to proceed */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50">
        <button
          onClick={onNext}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all animate-bounce group"
        >
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-[1600px] mx-auto px-10 pt-20 h-[calc(100vh-100px)] flex flex-col justify-between">

        {/* Top Text Elements */}
        <div className="flex justify-between items-start w-full relative z-20">
          <motion.div
            variants={fadeScaleUp}
            initial="hidden"
            animate="visible"
            className="text-white/60 text-sm max-w-[250px] leading-relaxed"
          >
            <p className="text-white font-medium tracking-widest text-xs mb-1">DESIGN-LED THINKING</p>
            <p>Spaces shaped around business, people and purpose.</p>
          </motion.div>
        </div>

        {/* Hero Logo */}
        <motion.div
          variants={fadeScaleUp}
          initial="hidden"
          animate="visible"
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center pointer-events-none z-30"
        >
          <Image
            src="/SpaceWorks Logo White 2.png"
            alt="SpaceWorks Logo"
            width={500}
            height={200}
            className="object-contain w-1/2 max-w-[400px]"
            priority
          />
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          variants={fadeScaleUp}
          initial="hidden"
          animate="visible"
          className="absolute top-[40%] right-10 text-right z-20"
        >
          <div className="text-white/60 text-sm max-w-[250px] leading-relaxed ml-auto">
            <p className="text-white font-medium tracking-widest text-xs mb-1">CIVIL WORKS</p>
            <p>New construction, modifications and structural works with quality and compliance.</p>
          </div>
        </motion.div>

        {/* Images Grid & Controls Bottom Area */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative grid grid-cols-12 gap-6 h-[45vh] items-end pb-10"
        >
          {/* Bottom Left Small Image */}
          <motion.div variants={slideUp} className="col-span-3 h-32 relative group overflow-hidden rounded-sm">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop"
              alt="Living room detail"
              className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700"
            />
          </motion.div>

          {/* Middle Left Taller Image (Coming Soon) */}
          <motion.div variants={slideUp} className="col-span-3 h-48 relative group overflow-hidden rounded-sm border border-white/5 bg-white/5">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 z-10 flex items-center justify-center">
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-white tracking-widest text-lg uppercase font-semibold drop-shadow-md"
              >
                Coming Soon
              </motion.span>
            </div>
          </motion.div>

          {/* Main Center Tall Image */}
          <motion.div variants={slideUp} className="col-span-4 h-[60vh] relative -mt-32 group overflow-hidden rounded-sm">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
              alt="Tall window living room"
              className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700"
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-center w-full">
              <p className="text-sm tracking-[0.2em] uppercase font-medium">Auburn</p>
              <p className="text-xs text-white/50 tracking-widest uppercase mt-1">Residence</p>
            </div>
          </motion.div>

          {/* Bottom Right Controls */}
          <motion.div variants={fadeScaleUp} className="col-span-2 flex justify-end gap-4 h-12 mb-4">
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>

      </main>
    </motion.div>
  );
}
