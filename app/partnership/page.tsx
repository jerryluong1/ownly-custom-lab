"use client";

import { motion } from "motion/react";
import { Play, Tag, DraftingCompass, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { useRef } from "react";

export default function PartnershipPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } }
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-paper text-ink selection:bg-amber selection:text-white font-sans flex flex-col justify-between" id="partnership-page-root">
        <Header />

        <main className="flex-1 w-full relative z-10 bg-paper overflow-clip" id="partnership-main">
          {/* Subtle Ambient Gradient Background for Hero & Video */}
          <div className="absolute top-0 left-0 w-full h-[1400px] pointer-events-none z-0">
            {/* Soft Amber Blob (Brand/Warmth) */}
            <div className="absolute top-[-5%] right-[-5%] w-[600px] md:w-[800px] h-[600px] md:h-[800px] rounded-full bg-amber/25 blur-[100px] md:blur-[160px]" />
            {/* Soft Sage/Emerald Blob (Cooperation/Sustainability/Growth) */}
            <div className="absolute top-[20%] left-[-10%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full bg-[#4A8F70]/20 blur-[100px] md:blur-[160px]" />
            {/* Soft Ocean Blue Blob (Trust/Stability/Long-term Partner) */}
            <div className="absolute top-[45%] right-[10%] w-[500px] md:w-[700px] h-[400px] md:h-[600px] rounded-full bg-[#5C85B0]/20 blur-[100px] md:blur-[160px]" />
            {/* Fade out to bottom */}
            <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-paper to-transparent" />
          </div>

          {/* HERO SECTION */}
          <section className="relative pt-[180px] pb-[100px] md:pt-[240px] md:pb-[160px] w-full px-6 flex flex-col items-center">
            {/* Elegant Background Grid / Architectural Motif */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-[5%] md:left-[15%] w-[1px] h-full bg-ink/[0.04]" />
              <div className="absolute top-0 left-[50%] w-[1px] h-full bg-ink/[0.04]" />
              <div className="absolute top-0 right-[5%] md:right-[15%] w-[1px] h-full bg-ink/[0.04]" />
              <div className="absolute top-[40%] left-0 w-full h-[1px] bg-ink/[0.04]" />
              <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-ink/[0.04]" />
            </div>

            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 lg:gap-24 relative z-10"
            >
              <div className="w-full lg:w-2/3 shrink-0">
                <motion.h1 
                  variants={itemVariants} 
                  className="font-display leading-[1.0] tracking-tight text-ink font-light flex flex-col gap-1 md:gap-2"
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 md:gap-x-4">
                    <span className="text-[28px] md:text-[42px] lg:text-[48px] xl:text-[56px]">Bạn có</span>
                    <span className="text-[72px] md:text-[100px] lg:text-[120px] xl:text-[144px] italic text-amber font-semibold whitespace-nowrap">Ý Tưởng.</span>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-x-3 md:gap-x-4">
                    <span className="text-[28px] md:text-[42px] lg:text-[48px] xl:text-[56px]">Chúng tôi có</span>
                    <span className="text-[72px] md:text-[100px] lg:text-[120px] xl:text-[144px] italic text-amber font-semibold whitespace-nowrap">Xưởng.</span>
                  </div>
                </motion.h1>
              </div>

              <div className="w-full lg:w-1/3 lg:pb-6">
                <motion.div variants={itemVariants} className="pl-6 md:pl-8 border-l-[1px] border-ink/20 relative">
                  <div className="absolute top-0 -left-[1.5px] w-[3px] h-8 bg-amber" />
                  <p className="text-[16px] md:text-[18px] text-graphite leading-[1.85] font-light">
                    <strong className="font-medium text-ink mr-1">OWNLY Custom Lab</strong> cung cấp dịch vụ sản xuất gọng kính theo yêu cầu — từ thiết kế mẫu mới đến sản xuất hàng loạt mang thương hiệu riêng của bạn.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* VIDEO PLACEHOLDER SECTION */}
          <section className="w-full px-6 mb-[140px] md:mb-[200px]">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative w-full max-w-[1400px] mx-auto aspect-video rounded-3xl overflow-hidden bg-[#EAE8E3] group cursor-pointer"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-700 group-hover:scale-105">
                <div className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-full border border-ink/20 flex items-center justify-center backdrop-blur-md group-hover:bg-ink group-hover:border-ink transition-all duration-500">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-ink fill-ink group-hover:text-paper group-hover:fill-paper ml-1 md:ml-1.5 transition-colors duration-500" />
                </div>
              </div>
              <div className="absolute top-8 left-8 md:top-12 md:left-12 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[12px] uppercase tracking-[0.2em] font-mono text-ink font-medium">Demo Video / OWNLY Lab</span>
              </div>
            </motion.div>
          </section>

          {/* PHẦN 1 — Chúng tôi làm được gì */}
          <section className="relative z-10 py-[140px] md:py-[200px] bg-ink text-paper">
            <div className="max-w-[1200px] mx-auto px-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-10"
              >
                <h2 className="font-display text-[48px] md:text-[72px] lg:text-[86px] leading-[1.2] md:leading-[1.1] tracking-tight text-white uppercase max-w-2xl">
                  Chúng tôi<br />
                  <span className="italic text-amber font-light">làm được gì?</span>
                </h2>
                <div className="md:w-1/3">
                  <p className="text-[16px] md:text-[18px] text-paper/70 font-light leading-relaxed">
                    Với hơn <span className="text-white font-medium">20 năm kinh nghiệm</span> trong ngành kính mắt, chúng tôi đồng hành cùng các thương hiệu, chuỗi cửa hàng và nhà phân phối trong việc tạo ra dòng sản phẩm riêng.
                  </p>
                </div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 lg:gap-x-32 pt-16 border-t border-paper/20">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="group"
                >
                  <div className="text-[13px] uppercase tracking-[0.2em] font-mono text-amber mb-6">01 / Dịch vụ</div>
                  <h3 className="font-display font-light text-[32px] md:text-[40px] text-white mb-6 uppercase tracking-tight group-hover:text-amber transition-colors duration-500">
                    OEM
                  </h3>
                  <p className="text-[15px] md:text-[16px] text-paper/70 leading-[1.8] font-light">
                    Sản xuất theo thiết kế và thông số kỹ thuật của bạn. Từ bản vẽ kỹ thuật hoặc mẫu gốc, chúng tôi biến ý tưởng thành sản phẩm thực tế với độ chính xác cao nhất.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="group"
                >
                  <div className="text-[13px] uppercase tracking-[0.2em] font-mono text-amber mb-6">02 / Dịch vụ</div>
                  <h3 className="font-display font-light text-[32px] md:text-[40px] text-white mb-6 uppercase tracking-tight group-hover:text-amber transition-colors duration-500">
                    Private Label
                  </h3>
                  <p className="text-[15px] md:text-[16px] text-paper/70 leading-[1.8] font-light">
                    Gắn thương hiệu riêng lên dòng sản phẩm có sẵn. Phù hợp cho những đối tác cần giải pháp nhanh chóng với các mẫu gọng kính đã được kiểm chứng chất lượng.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* PHẦN 2 — Quy trình làm việc */}
          <section className="relative z-10 py-[140px] md:py-[200px] bg-[#F5F4F0]">
            <div className="max-w-[1200px] mx-auto px-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-24 flex items-center justify-between"
              >
                <h2 className="font-display text-[48px] md:text-[72px] lg:text-[86px] leading-[1.2] md:leading-[1.1] tracking-tight text-ink uppercase">
                  Quy trình<br />
                  <span className="italic text-amber font-light">Làm việc</span>
                </h2>
              </motion.div>

              <div className="flex flex-col border-t border-ink/20 mt-12 md:mt-20">
                {[
                  {
                    step: "01",
                    title: "Tư vấn & xác định yêu cầu",
                    desc: "Trao đổi chi tiết về ý tưởng, số lượng, chất liệu, tiêu chuẩn kỹ thuật và ngân sách dự kiến."
                  },
                  {
                    step: "02",
                    title: "Duyệt thiết kế & Sản xuất thử",
                    desc: "Hoàn thiện bản vẽ 2D/3D, duyệt mẫu prototype và kiểm định chất lượng."
                  },
                  {
                    step: "03",
                    title: "Sản xuất đại trà & Bàn giao",
                    desc: "Triển khai sản xuất hàng loạt, đóng gói theo tiêu chuẩn và vận chuyển đến đối tác."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={item.step} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex flex-col md:flex-row items-start md:items-center py-10 md:py-14 px-6 md:px-12 -mx-6 md:-mx-12 border-b border-ink/10 group hover:bg-white/60 hover:border-transparent hover:shadow-sm rounded-3xl transition-all duration-500"
                  >
                    <div className="md:w-1/4 mb-6 md:mb-0">
                      <span className="font-display text-[64px] md:text-[80px] font-light leading-none text-ink/20 group-hover:text-amber transition-colors duration-500">
                        {item.step}
                      </span>
                    </div>
                    <div className="md:w-1/2 mb-4 md:mb-0 pr-8">
                      <h4 className="font-display font-medium text-[24px] md:text-[32px] text-ink uppercase tracking-tight">
                        {item.title}
                      </h4>
                    </div>
                    <div className="md:w-1/4">
                      <p className="text-[15px] text-graphite leading-[1.8] font-light">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* PHẦN 3 — Phù hợp với ai */}
          <section className="relative z-10 py-[140px] md:py-[200px] bg-paper">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="flex flex-col lg:flex-row gap-20">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="lg:w-5/12 lg:sticky lg:top-40 h-fit"
                >
                  <h2 className="font-display text-[48px] md:text-[60px] lg:text-[76px] leading-[1.2] lg:leading-[1.1] tracking-tight text-ink uppercase">
                    Phù hợp<br />với ai?
                  </h2>
                </motion.div>

                <div className="lg:w-7/12 flex flex-col">
                  {[
                    "Chuỗi cửa hàng kính muốn có dòng sản phẩm độc quyền",
                    "Thương hiệu thời trang muốn mở rộng sang phụ kiện",
                    "Nhà phân phối cần nguồn hàng ổn định, chất lượng kiểm soát được",
                    "Startup eyewear cần đối tác sản xuất linh hoạt"
                  ].map((text, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className="py-10 md:py-14 border-t border-ink/20 first:border-t-0 flex items-start gap-8 group"
                    >
                      <div className="w-2 h-2 rounded-full bg-amber mt-2.5 shrink-0 group-hover:scale-150 transition-transform duration-500" />
                      <p className="text-[20px] md:text-[28px] lg:text-[32px] text-ink leading-[1.3] font-light tracking-tight group-hover:text-amber transition-colors duration-500">
                        {text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA & CONTACT SECTION */}
          <section className="pt-[100px] pb-[160px] md:pt-[120px] md:pb-[240px] bg-ink text-paper relative z-10 overflow-hidden" id="contact-form">
            <div className="max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="space-y-12 w-full max-w-4xl"
              >
                <div className="flex flex-col items-center gap-6">
                  <div className="w-px h-24 bg-gradient-to-b from-transparent to-amber/50" />
                  <div className="text-[12px] uppercase tracking-[0.2em] font-mono text-amber">Bắt đầu bằng một cuộc trò chuyện</div>
                </div>

                <h2 className="font-display text-[56px] md:text-[80px] lg:text-[110px] leading-[1.2] md:leading-[1.1] tracking-tight text-white uppercase font-light">
                  Gửi yêu cầu<br/>của bạn
                </h2>
                
                <p className="text-[16px] md:text-[20px] text-white/60 leading-relaxed font-light mx-auto max-w-md">
                  Chúng tôi sẽ phản hồi trong 24 giờ để cùng thảo luận về cách hiện thực hóa ý tưởng của bạn.
                </p>
                
                <div className="pt-10 flex justify-center">
                  <a 
                    href="https://zalo.me/your-zalo-id" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-4 bg-paper text-ink px-10 py-5 rounded-full font-sans text-[15px] font-medium uppercase tracking-widest hover:bg-amber hover:text-white transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95"
                  >
                    Zalo của OWNLYCUSTOMLAB
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

