"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import SmoothScroll from "@/components/SmoothScroll";
import OrbitShowcase from "@/components/OrbitShowcase";
import LookbookSection from "@/components/LookbookSection";
import FiveStepsCustomization from "@/components/FiveStepsCustomization";
import WhatWeMade from "@/components/WhatWeMade";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <SmoothScroll>
      <div ref={containerRef} className="min-h-screen bg-paper font-body">
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section className="relative h-screen w-full flex items-center overflow-hidden bg-paper cursor-default">
        {/* Text Layer (Centered) */}
        <div className="absolute inset-0 z-20 flex items-center overflow-hidden whitespace-nowrap select-none pointer-events-none">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 60,
            }}
            className="flex items-center w-max text-[#2A2F37]"
          >
            {[...Array(4)].map((_, i) => (
              <span key={i} className="font-display font-[800] text-[90px] sm:text-[120px] md:text-[140px] lg:text-[160px] xl:text-[186px] leading-[1.1] tracking-[-0.02em] px-4 pb-4">
                DESIGN &middot; CUSTOMIZE &middot; OWN IT &middot; 
              </span>
            ))}
          </motion.div>
        </div>

        {/* Images Layer (Near header) */}
        <div className="absolute top-[80px] md:top-[90px] lg:top-[110px] xl:top-[120px] left-0 right-0 h-[180px] md:h-[220px] lg:h-[240px] xl:h-[260px] z-10 flex items-center overflow-hidden whitespace-nowrap select-none">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 33.33,
            }}
            className="flex items-center w-max h-full"
          >
            {[...Array(2)].map((_, index) => (
              <div key={index} className="relative h-full w-auto shrink-0 flex items-center pr-8">
                <img 
                  src="/banner.png?v=2" 
                  alt="Ownly Custom Lab Banner" 
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Images Layer (Near footer) */}
        <div className="absolute bottom-[16px] md:bottom-[24px] lg:bottom-[32px] xl:bottom-[40px] left-0 right-0 h-[180px] md:h-[220px] lg:h-[240px] xl:h-[260px] z-10 flex items-center overflow-hidden whitespace-nowrap select-none">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 33.33,
            }}
            className="flex items-center w-max h-full"
          >
            {[...Array(2)].map((_, index) => (
              <div key={index} className="relative h-full w-auto shrink-0 flex items-center pr-8">
                <img 
                  src="/banner-bottom.png" 
                  alt="Ownly Custom Lab Banner Bottom" 
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ORBIT SHOWCASE SECTION */}
      <OrbitShowcase />

      {/* LOOKBOOK SECTION */}
      <LookbookSection />

      {/* 5 STEPS CUSTOMIZATION SECTION */}
      <FiveStepsCustomization />

      {/* WHAT WE MADE SECTION */}
      <WhatWeMade />

      {/* FOOTER */}
      <Footer />
      </div>
    </SmoothScroll>
  );
}
