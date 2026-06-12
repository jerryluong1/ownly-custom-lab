"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

type GalleryItem = {
  id: string;
  image: string;
  handle: string;
};

const items: GalleryItem[] = [
  {
    id: "01",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop",
    handle: "@ownly.eyewear",
  },
  {
    id: "02",
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=600&auto=format&fit=crop",
    handle: "@eyewear.lifestyle",
  },
  {
    id: "03",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop",
    handle: "@vintage.frames",
  },
  {
    id: "04",
    image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?q=80&w=600&auto=format&fit=crop",
    handle: "@designer.glasses",
  },
  {
    id: "05",
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=1000&auto=format&fit=crop",
    handle: "@street.eyewear",
  },
  {
    id: "06",
    image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?q=80&w=500&auto=format&fit=crop",
    handle: "@optical.style",
  },
  {
    id: "07",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600&auto=format&fit=crop",
    handle: "@ownly.custom",
  },
  {
    id: "08",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop",
    handle: "@eyewear.packing",
  },
  {
    id: "09",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    handle: "@baoquang.optic",
  },
  {
    id: "10",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=500&auto=format&fit=crop",
    handle: "@ownly.club",
  },
];

// Duplicate items for seamless continuous looping
const marqueeItems = [...items, ...items];

export default function WhatWeMade() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Header Reveal
    gsap.fromTo(
      ".wwm-header-content",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="what-we-made" className="relative w-full bg-paper pt-[60px] pb-[120px] overflow-hidden">
      <div className="w-full max-w-[1170px] mx-auto px-6 xl:px-0">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-[40px] md:mb-[60px]">
          <h2 className="wwm-header-content font-display font-light text-[56px] lg:text-[80px] text-[#2A2F37] leading-[1.05] tracking-tight mb-6">
            What We Made
          </h2>
          <p className="wwm-header-content font-sans text-[16px] lg:text-[18px] text-[#2A2F37]/70 font-light tracking-wide max-w-[600px]">
             Nơi lưu giữ những khoảnh khắc tinh tuyển của nghệ thuật kính mắt thiết kế riêng.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      {/* We pause animation on hover using CSS or motion, but motion with css standard is smooth */}
      <div className="relative w-full flex overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
          className="flex gap-4 md:gap-6 px-2 md:px-3 whitespace-nowrap min-w-max hover:[animation-play-state:paused]"
        >
          {marqueeItems.map((item, index) => (
            <a
              key={`${item.id}-${index}`}
              href="#"
              className="relative block w-[240px] md:w-[320px] lg:w-[400px] aspect-[4/3] overflow-hidden group shrink-0"
            >
              <Image
                src={item.image}
                alt={item.handle}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                sizes="(max-width: 768px) 240px, (max-width: 1024px) 320px, 400px"
                referrerPolicy="no-referrer"
              />
              
              {/* Instagram Overlay Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Instagram Handle Text */}
              <div className="absolute left-5 bottom-5 md:left-6 md:bottom-6 flex items-center gap-2 text-white/90 group-hover:text-white transition-colors duration-500">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-sans text-[11px] md:text-[13px] font-medium tracking-[0.06em] uppercase">
                  {item.handle}
                </span>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

