import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LookbookSection() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // Parallax effect
    gsap.to(imageRef.current, {
      y: "15%",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    // Content Reveal
    gsap.fromTo(".lookbook-content", 
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
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="lookbook" className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden bg-[#111111]">
      {/* Background Image Container */}
      <div 
        ref={imageRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2000&auto=format&fit=crop"
          alt="Lookbook & Product"
          fill
          className="object-cover object-center grayscale"
          sizes="100vw"
          referrerPolicy="no-referrer"
        />
        {/* Sophisticated dark overlay mapping to theme's dark ink */}
        <div className="absolute inset-0 bg-[#2A2F37]/30 mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#111111]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[1170px] mx-auto w-full mt-24">
        <h2 
          className="lookbook-content font-display font-light text-[48px] md:text-[64px] lg:text-[80px] text-paper leading-[1.05] tracking-tight mb-6"
        >
          Lookbook & Product
        </h2>

        <p 
          className="lookbook-content font-sans text-[16px] md:text-[18px] text-[#ffffff] mb-10 md:mb-[50px] font-normal tracking-wide max-w-[400px]"
        >
          Thông tin các sản phẩm của OWNLY
        </p>

        <div className="lookbook-content">
          <Link 
            href="/catalogue" 
            className="group flex items-center gap-3 bg-paper text-[#2A2F37] px-8 py-4 md:px-10 md:py-[18px] rounded-full font-sans text-[14px] md:text-[15px] font-medium hover:bg-amber hover:text-white transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95"
          >
            Khám phá Catalogue
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
