import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

interface ContactPageProps {
  onBack: () => void;
}

export default function ContactPage({ onBack }: ContactPageProps) {
  // Same Animation variants for consistency
  const fadeScaleUp: Variants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const slideUp: Variants = {
    hidden: { opacity: 0, y: 50 },
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
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative min-h-screen bg-[#878787] text-white overflow-x-hidden overflow-y-auto font-sans"
    >
      {/* Subtle Background Glow / Ambient Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-amber-700/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

      {/* Faint Vertical Grid Lines */}
      <div className="absolute inset-0 flex justify-evenly pointer-events-none opacity-10">
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white hidden md:block" />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-20 flex items-center justify-between px-6 md:px-10 py-6 md:py-8 text-[10px] md:text-xs uppercase tracking-widest border-b border-white/5"
      >
        <div className="flex items-center cursor-pointer" onClick={onBack}>
          <Image
            src="/Ina Tech FM Logo .png"
            alt="Ina Tech FM Logo"
            width={180}
            height={60}
            className="object-contain h-8 md:h-12 w-auto"
            priority
          />
        </div>

        <a
          href="https://inatechfmglobal.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white/70 transition-colors max-w-[120px] md:max-w-none text-right leading-relaxed"
        >
          An Ina TechFM Vertical
        </a>
      </motion.nav>

      {/* Up Arrow to return */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50">
        <button
          onClick={onBack}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-md hover:bg-white hover:text-black transition-all group"
        >
          <ArrowUp className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10 pt-10 md:pt-20 min-h-[calc(100vh-100px)] flex flex-col justify-start md:justify-center pb-24 md:pb-20">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-24 w-full items-start">

          {/* Left Column: Contact Information */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="col-span-1 md:col-span-12 lg:col-span-5 flex flex-col justify-center"
          >
            <motion.div variants={slideUp} className="mb-10 md:mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.1em] leading-tight mb-4">
                LET'S BUILD <br />
                <span className="font-semibold">SOMETHING</span>
              </h1>
              <p className="text-white/60 text-xs md:text-sm max-w-[300px] leading-relaxed tracking-wide">
                Reach out to discuss spaces shaped around your business, people, and purpose.
              </p>
            </motion.div>

            <div className="space-y-8 md:space-y-10">
              {/* Address */}
              <motion.div variants={slideUp} className="flex items-start gap-4 md:gap-6 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white font-medium tracking-widest text-[10px] md:text-xs mb-1 md:mb-2">HEADQUARTERS</p>
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                    123 Innovation Drive, Suite 400<br />
                    Tech District, NY 10001
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={slideUp} className="flex items-start gap-4 md:gap-6 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white font-medium tracking-widest text-[10px] md:text-xs mb-1 md:mb-2">EMAIL US</p>
                  <a href="mailto:hello@spaceworks.com" className="text-white/60 text-xs md:text-sm hover:text-white transition-colors duration-300">
                    hello@spaceworks.com
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div variants={slideUp} className="flex items-start gap-4 md:gap-6 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white font-medium tracking-widest text-[10px] md:text-xs mb-1 md:mb-2">CALL US</p>
                  <a href="tel:+1234567890" className="text-white/60 text-xs md:text-sm hover:text-white transition-colors duration-300">
                    +1 (234) 567-890
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            variants={fadeScaleUp}
            initial="hidden"
            animate="visible"
            className="col-span-1 md:col-span-12 lg:col-span-7 bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-10 lg:p-14 rounded-sm relative overflow-hidden group"
          >
            {/* Form Hover Gradient effect inside box */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <form className="relative z-10 flex flex-col gap-8 md:gap-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    placeholder="YOUR NAME"
                    className="w-full bg-transparent border-b border-white/20 py-2 md:py-3 text-xs md:text-sm tracking-widest placeholder:text-white/30 text-white focus:outline-none focus:border-white transition-colors peer"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-transparent border-b border-white/20 py-2 md:py-3 text-xs md:text-sm tracking-widest placeholder:text-white/30 text-white focus:outline-none focus:border-white transition-colors peer"
                    required
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  placeholder="SUBJECT (E.G. CIVIL WORKS)"
                  className="w-full bg-transparent border-b border-white/20 py-2 md:py-3 text-xs md:text-sm tracking-widest placeholder:text-white/30 text-white focus:outline-none focus:border-white transition-colors peer"
                />
              </div>

              {/* Message Input */}
              <div className="relative">
                <textarea
                  id="message"
                  placeholder="TELL US ABOUT YOUR PROJECT..."
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-2 md:py-3 text-xs md:text-sm tracking-widest placeholder:text-white/30 text-white focus:outline-none focus:border-white transition-colors resize-none peer"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 md:pt-4 flex justify-start md:justify-end">
                <button
                  type="submit"
                  className="group flex items-center justify-center md:justify-start gap-4 px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-500 w-full md:w-fit"
                >
                  <span className="text-[10px] md:text-xs font-medium tracking-[0.2em]">SEND MESSAGE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </main>
    </motion.div>
  );
}
