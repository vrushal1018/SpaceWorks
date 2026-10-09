"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LandingPage from "@/components/LandingPage";
import ContactPage from "@/components/ContactPage";

export default function Page() {
  const [currentPage, setCurrentPage] = useState<"landing" | "contact">("landing");

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        {currentPage === "landing" ? (
          <LandingPage key="landing" onNext={() => setCurrentPage("contact")} />
        ) : (
          <ContactPage key="contact" onBack={() => setCurrentPage("landing")} />
        )}
      </AnimatePresence>
    </div>
  );
}
