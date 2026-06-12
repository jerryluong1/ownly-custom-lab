"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  desc: string;
  image: string;
  top: string;
  left: string;
  rotation: number;
  size: "sm" | "md" | "lg";
  delay: number;
}

// 8 mathematically distributed points along an ellipse
const products: Product[] = [
  { 
    id: 1, 
    name: "Modern Aviator", 
    desc: "Sleek metal finish with a contemporary teardrop shape.", 
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80", 
    top: "calc(50% - 380px)", left: "50%", rotation: -2, size: "md", delay: 0.1 
  },
  { 
    id: 2, 
    name: "Classic Tortoise", 
    desc: "Timeless Havana frame with vintage flair.", 
    image: "https://images.unsplash.com/photo-1572246538688-3f326dca3951?auto=format&fit=crop&w=600&q=80", 
    top: "calc(50% - 268px)", left: "calc(50% + 268px)", rotation: 8, size: "lg", delay: 0.2 
  },
  { 
    id: 3, 
    name: "Clear Crystal", 
    desc: "Minimalist transparent frame for a clean look.", 
    image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=600&q=80", 
    top: "50%", left: "calc(50% + 380px)", rotation: 4, size: "md", delay: 0.3 
  },
  { 
    id: 4, 
    name: "Bold Black Square", 
    desc: "Thick acetate frames that make a statement.", 
    image: "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&w=600&q=80", 
    top: "calc(50% + 268px)", left: "calc(50% + 268px)", rotation: -6, size: "lg", delay: 0.4 
  },
  { 
    id: 5, 
    name: "Champagne Round", 
    desc: "Soft round frames in a delicate champagne hue.", 
    image: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&w=600&q=80", 
    top: "calc(50% + 380px)", left: "50%", rotation: 3, size: "md", delay: 0.5 
  },
  { 
    id: 6, 
    name: "Retro Cat-Eye", 
    desc: "Feminine shape with an exaggerated wing.", 
    image: "https://images.unsplash.com/photo-1563903530908-afdd155d057a?auto=format&fit=crop&w=600&q=80", 
    top: "calc(50% + 268px)", left: "calc(50% - 268px)", rotation: -5, size: "lg", delay: 0.6 
  },
  { 
    id: 7, 
    name: "Matte Olive", 
    desc: "Earthy tones in a modern rectangular silhouette.", 
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80", 
    top: "50%", left: "calc(50% - 380px)", rotation: 4, size: "md", delay: 0.7 
  },
  { 
    id: 8, 
    name: "Two-Tone Gradient", 
    desc: "Unique fade effect from dark to light.", 
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=600&q=80", 
    top: "calc(50% - 268px)", left: "calc(50% - 268px)", rotation: -7, size: "lg", delay: 0.15 
  },
];

const sizeClasses = {
  sm: "w-[160px] md:w-[180px]",
  md: "w-[200px] md:w-[240px]",
  lg: "w-[240px] md:w-[300px]",
};

export default function OrbitShowcase() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  const activeProduct = activeId ? products.find(p => p.id === activeId) : null;
  const mobileProduct = products[mobileIndex];

  return (
    <section id="orbit-showcase" className="relative w-full bg-paper flex flex-col justify-center py-[120px] overflow-hidden">
      
      {/* ------------------------------------- */}
      {/* DESKTOP ORBIT COMPOSITION            */}
      {/* ------------------------------------- */}
      <div className="hidden md:flex flex-col items-center justify-center relative w-full max-w-[1170px] h-[900px] mx-auto px-6 xl:px-0">
        
        {/* Center Content Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-[480px] text-center p-10 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId || "default"}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <h2 className="font-display text-5xl md:text-[64px] leading-[1.1] text-[#2A2F37] mb-6 tracking-tight">
                {activeProduct ? activeProduct.name : "Signature Look"}
              </h2>
              <p className="font-sans text-[17px] md:text-[19px] text-[#2A2F37]/75 leading-relaxed max-w-[380px]">
                {activeProduct 
                  ? activeProduct.desc 
                  : "Choose your frame, lens color, material and finishing details. Every combination is made to match your personal style."}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Orbit Products */}
        {products.map((product) => {
          const isActive = activeId === product.id;
          const isFaded = activeId !== null && !isActive;

          return (
            <div
              key={product.id}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2 transform-gpu"
              style={{
                top: product.top,
                left: product.left,
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: product.delay, ease: "easeOut" }}
              >
                {/* Idle floating wrapper */}
                <motion.div
                  animate={isActive ? { y: 0, rotate: product.rotation } : {
                    y: [0, -6, 0],
                    rotate: [product.rotation, product.rotation + 2, product.rotation]
                  }}
                  transition={isActive ? { duration: 0.3 } : {
                    repeat: Infinity,
                    duration: 5 + product.delay * 2,
                    ease: "easeInOut",
                  }}
                  className="relative flex flex-col items-center group cursor-pointer"
                  onMouseEnter={() => setActiveId(product.id)}
                  onMouseLeave={() => setActiveId(null)}
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.12 : 1,
                      opacity: isFaded ? 0.45 : 1,
                      boxShadow: isActive 
                        ? "0 25px 50px -12px rgba(42, 47, 55, 0.25)" 
                        : "0 10px 20px -5px rgba(42, 47, 55, 0.08)",
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`relative ${sizeClasses[product.size]} aspect-[4/3] rounded-2xl overflow-hidden bg-white ${isActive ? 'z-50 ring-1 ring-[#2A2F37]/5' : 'z-10'}`}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      referrerPolicy="no-referrer"
                      className="object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105 p-3"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Subtle aesthetic border to enhance premium feel */}
                    <div className="absolute inset-0 border border-black/[0.04] rounded-2xl pointer-events-none" />
                  </motion.div>

                  {/* Elegant Active Label (Floats slightly below the card) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 16 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-0 whitespace-nowrap bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-[#2A2F37]/5 z-40 pointer-events-none"
                      >
                        <span className="text-xs font-sans text-[#2A2F37] font-semibold tracking-wider uppercase">
                          {product.name}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* ------------------------------------- */}
      {/* MOBILE VERTICAL SHOWCASE ROW          */}
      {/* ------------------------------------- */}
      <div className="md:hidden flex flex-col items-center w-full px-6 pt-10 pb-20 relative z-20">
        
        {/* Mobile Headline Segment */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 w-full"
        >
          <h2 className="font-display text-[40px] text-[#2A2F37] mb-4 leading-[1.1] tracking-tight">
            Create Your Own<br/>Signature Look
          </h2>
          <p className="font-sans text-[16px] text-[#2A2F37]/75">
            Select an inspiration to begin your custom design journey.
          </p>
        </motion.div>

        {/* Large Active Visual */}
        <div className="w-full max-w-[400px] mb-8 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full aspect-[4/3] bg-white rounded-[24px] overflow-hidden shadow-xl shadow-black/5"
            >
               <Image
                src={mobileProduct.image}
                alt={mobileProduct.name}
                fill
                referrerPolicy="no-referrer"
                className="object-contain mix-blend-multiply p-6"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Title & Actions */}
        <div className="w-full max-w-[400px] text-center mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-display text-3xl text-[#2A2F37] mb-3">
                {mobileProduct.name}
              </h3>
              <p className="font-sans text-[#2A2F37]/75 text-[15px] leading-relaxed mb-8 px-4">
                {mobileProduct.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <button className="hidden w-full bg-[#2A2F37] text-paper py-4 rounded-full font-sans font-medium tracking-wide text-[16px] hover:bg-[#1a1d22] active:scale-[0.98] transition-all shadow-lg shadow-black/10">
            Customize this style
          </button>
        </div>

        {/* Horizontal Thumbnails Scroll Component */}
        <div className="w-full overflow-hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 pb-6 hide-scrollbar">
            {products.map((product, i) => (
              <button
                key={product.id}
                onClick={() => setMobileIndex(i)}
                className={`snap-center shrink-0 w-[100px] aspect-[4/3] rounded-2xl overflow-hidden relative transition-all duration-300 bg-white ${
                  mobileIndex === i 
                    ? 'ring-2 ring-[#2A2F37] ring-offset-2 ring-offset-paper scale-100 shadow-md' 
                    : 'opacity-50 hover:opacity-80 scale-95'
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover mix-blend-multiply"
                  sizes="100px"
                />
              </button>
            ))}
          </div>
        </div>

      </div>
      
      {/* Utility to hide horizontal scollbar physically but allow touch scroll */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
