"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "01",
    title: "Phân tích & đo đạc khuôn mặt",
    keywords: "FIT · PRECISION · COMFORT",
    description:
      "Mỗi khuôn mặt là một tỷ lệ duy nhất. OWNLY sẽ đo đạc chính xác để xác định chiếc kính có tỷ lệ phù hợp — thoải mái khi đeo, không cần chỉnh sửa.",
    note: undefined,
    image1: "/step-01-left.jpg",
    image2: "/step-01-right.jpg",
  },
  {
    id: "02",
    title: "Tư vấn & chọn kiểu dáng phù hợp",
    keywords: "FORM · STYLE · CHARACTER",
    description:
      "Từ oval thanh lịch, cat-eye cá tính đến aviator mạnh mẽ — 30+ kiểu dáng được thiết kế để tôn lên từng đường nét khuôn mặt. OWNLY sẽ hỗ trợ bạn tìm hình dáng phù hợp nhất.",
    note: undefined,
    image1: "/step-02-left.jpg",
    image2: "/step-02-right.jpg",
  },
  {
    id: "03",
    title: "Xác định tông màu cá nhân",
    keywords: "WARM · COOL · NEUTRAL · SEASON",
    description:
      "Không phải màu nào cũng hợp với bạn. OWNLY áp dụng phân tích Personal Color để xác định màu kính phù hợp với bạn.",
    note: "Kết quả Personal Color trở thành nền tảng cho bước chọn màu tiếp theo — để chiếc kính thực sự tôn lên vẻ đẹp vốn có của bạn.",
    image1: "/step-03-left.jpg",
    image2: "/step-03-right.jpg",
  },
  {
    id: "04",
    title: "Lựa chọn màu sắc mặt & càng kính",
    keywords: "ACETATE · COLOR · MATERIAL",
    description:
      "Từ kết quả Personal Color, bạn chọn màu cho mặt kính và càng kính — đồng màu tinh tế hoặc phối tương phản cá tính. Hơn 100 màu Acetate cao cấp, từ đen thanh lịch, tortoise ấm áp đến trong suốt tinh tế.",
    note: "Mặt kính và càng kính có thể mang hai màu khác nhau — đây là đặc quyền chỉ có ở kính tùy chỉnh.",
    image1: "/step-04-left.jpg",
    image2: "/step-04-right.jpg",
  },
  {
    id: "05",
    title: "Tạo dấu ấn riêng của bạn",
    keywords: "NAME · SYMBOL · IDENTITY",
    description:
      "Khắc tên, ký tự viết tắt hoặc biểu tượng riêng lên càng kính. Một chi tiết nhỏ biến chiếc kính thành vật phẩm độc nhất trên thế giới — được tạo ra chỉ cho bạn, bởi bạn.",
    note: "Chiếc kính mang đúng tên bạn sẽ được bàn giao trong hộp quà OWNLY.",
    image1: "/step-05-left.jpg",
    image2: "/step-05-right.jpg",
  },
];

export default function FiveStepsCustomization() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // We use GSAP to pin the container and drive animations based on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=5000", // 5000px pinned scroll
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            // Progress logic mapping to steps
            const p = self.progress;
            // Headlines finishes at 0.2
            // Remaining 0.8 is divided by 5 steps
            const stepOffset = 0.2;
            if (p > stepOffset) {
              const stepProgress = (p - stepOffset) / (1 - stepOffset);
              const index = Math.min(Math.floor(stepProgress * steps.length), steps.length - 1);
              if (index !== activeIndexRef.current) {
                activeIndexRef.current = Math.max(0, index);
                setActiveIndex(activeIndexRef.current);
              }
            } else {
              if (activeIndexRef.current !== 0) {
                activeIndexRef.current = 0;
                setActiveIndex(0);
              }
            }
          }
        }
      });

      // Intro Headline Animation (0 to 20% of timeline)
      tl.fromTo(headlineRef.current, 
        {
          top: "50%",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
          scale: 1.75,
        },
        {
          top: 120, // calc(0% + 120px)
          left: 0,
          xPercent: 0,
          yPercent: 0,
          scale: 1,
          duration: 0.2, // 20% of total scroll distance
          ease: "none"
        }
      );

      // Content fade in (15% to 20%)
      tl.fromTo(contentRef.current, 
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.05, ease: "none" },
        0.15 // Start slightly before headline finishes
      );

      // Left and Right Image initial fade (15% to 20%)
      tl.fromTo([leftImageRef.current, rightImageRef.current],
        { opacity: 0 },
        { opacity: 1, duration: 0.05, ease: "none" },
        0.15
      );

      // Parallax on Left and Right Images over the entire timeline (20% to 100%)
      tl.fromTo(leftImageRef.current,
        { y: 70 },
        { y: -70, duration: 0.8, ease: "none" },
        0.2
      );
      tl.fromTo(rightImageRef.current,
        { y: -70 },
        { y: 70, duration: 0.8, ease: "none" },
        0.2
      );

      return () => {
        tl.kill();
      };
    });

    return () => mm.revert();
  }, { scope: containerRef });

  const activeStep = steps[activeIndex];

  return (
    <section className="relative bg-paper w-full border-t border-[#2A2F37]/10" id="customization">
      {/* ------------------------------------- */}
      {/* DESKTOP PINNED LAYOUT                 */}
      {/* ------------------------------------- */}
      <div 
        ref={containerRef} 
        className="hidden lg:block relative h-screen w-full"
      >
        <div className="h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* Main Container */}
          <div className="w-full max-w-[1170px] h-full px-6 xl:px-0 mx-auto relative pointer-events-none flex items-center justify-between gap-[80px]">
            
            {/* Dynamic Intro Headline - Absolute in container */}
            <h2 
              ref={headlineRef}
              style={{
                position: "absolute",
                transformOrigin: "center center"
              }}
              className="font-display font-bold text-[52px] lg:text-[68px] xl:text-[76px] text-amber leading-[1.0] lg:leading-[1.0] tracking-[-0.02em] whitespace-nowrap z-50 text-left pointer-events-auto"
            >
              5 Bước tạo nên<br />
              một chiếc kính
            </h2>

            {/* LEFT SIDE: Text Content */}
            <div className="w-[500px] lg:w-[560px] h-full relative flex flex-col pt-[320px] shrink-0 pointer-events-auto">
                {/* Dynamic Content */}
                <div 
                  ref={contentRef}
                  className="w-full opacity-0"
                >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-display text-[32px] text-[#D8C795] font-medium leading-none">
                        {activeStep.id}
                      </span>
                      <span className="font-sans text-[14px] tracking-widest text-[#D8C795] uppercase font-semibold">
                        {activeStep.keywords}
                      </span>
                    </div>

                    <h3 className="font-display text-[36px] lg:text-[44px] text-[#2A2F37] leading-[1.15] mb-6">
                      {activeStep.title}
                    </h3>

                    <p className="font-sans text-[16px] lg:text-[18px] text-[#2A2F37]/75 leading-relaxed max-w-[460px] mb-8">
                      {activeStep.description}
                    </p>

                    {activeStep.note && (
                      <div className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-[#D8C795] max-w-[420px]">
                        <p className="font-sans text-[15px] text-[#2A2F37]/60 leading-relaxed italic">
                          {activeStep.note}
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* RIGHT SIDE: Image Panels */}
            <div 
              className="flex items-center gap-[40px] shrink-0 pointer-events-auto"
            >
              {/* Panel 1 */}
              <div className="transform translate-y-[28px]">
                <div 
                  ref={leftImageRef}
                  className="relative w-[300px] h-[460px] rounded-[16px] overflow-hidden opacity-0"
                >
                  <AnimatePresence>
                    <motion.div
                      key={`img1-${activeStep.id}`}
                      initial={{ opacity: 0, y: 20, scale: 0.985, filter: "blur(2px)" }}
                      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -20, filter: "blur(2px)", position: "absolute", zIndex: -1 }}
                      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 w-full h-full bg-[#E5E0D5]"
                    >
                      <Image
                        src={activeStep.image1}
                        alt={activeStep.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Panel 2 */}
              <div className="transform -translate-y-[28px]">
                <div 
                  ref={rightImageRef}
                  className="relative w-[300px] h-[460px] rounded-[16px] overflow-hidden opacity-0"
                >
                  <AnimatePresence>
                    <motion.div
                      key={`img2-${activeStep.id}`}
                      initial={{ opacity: 0, y: 20, scale: 0.985, filter: "blur(2px)" }}
                      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -20, filter: "blur(2px)", position: "absolute", zIndex: -1 }}
                      transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                      className="absolute inset-0 w-full h-full bg-[#E5E0D5]"
                    >
                      <Image
                        src={activeStep.image2}
                        alt={activeStep.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ------------------------------------- */}
      {/* MOBILE VERTICAL SCROLL LAYOUT         */}
      {/* ------------------------------------- */}
      <div className="lg:hidden flex flex-col w-full px-6 py-[20px]">
        {/* Mobile Headline */}
        <div className="mb-16 md:mb-20">
          <h2 className="font-display font-bold text-[42px] md:text-[56px] text-amber leading-[1.1] tracking-tight">
            5 Bước tạo nên<br />
            một chiếc kính
          </h2>
        </div>

        {/* Vertical Steps */}
        <div className="flex flex-col gap-24 md:gap-32">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-8 md:gap-12"
            >
              <div className="w-full aspect-[4/5] relative rounded-[8px] overflow-hidden shadow-sm md:aspect-video">
                <Image
                  src={step.image1}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <div className="flex-1 flex flex-col md:px-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-[28px] md:text-[36px] text-[#D8C795] font-medium leading-none">
                    {step.id} <span className="text-[18px] md:text-[22px] opacity-60">/ 05</span>
                  </span>
                </div>

                <span className="font-sans text-[12px] md:text-[14px] tracking-widest text-[#D8C795] uppercase font-semibold mb-3 block">
                  {step.keywords}
                </span>

                <h3 className="font-display text-[32px] md:text-[40px] text-[#2A2F37] leading-[1.15] mb-5">
                  {step.title}
                </h3>

                <p className="font-sans text-[16px] md:text-[18px] text-[#2A2F37]/75 leading-relaxed mb-6">
                  {step.description}
                </p>

                {step.note && (
                  <div className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-[#D8C795]">
                    <p className="font-sans text-[15px] md:text-[16px] text-[#2A2F37]/60 leading-relaxed italic">
                      {step.note}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
