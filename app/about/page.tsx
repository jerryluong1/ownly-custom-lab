"use client";

import { useRef } from "react";
import Image from "next/image";
import { 
  Award,
  Heart,
  Leaf,
  Users,
  ArrowRight
} from "lucide-react";
import { motion } from "motion/react";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <SmoothScroll>
      <div 
        ref={containerRef} 
        className="min-h-screen bg-paper text-ink selection:bg-amber selection:text-white font-raleway overflow-hidden"
        id="about-page-root"
      >
        {/* HEADER */}
        <Header />

        {/* HERO SECTION */}
        <section 
          className="relative h-[60vh] min-h-[500px] flex flex-col justify-center items-center px-6 overflow-hidden"
          id="about-hero"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=1600"
              alt="OWNLY Custom Lab"
              fill
              className="object-cover object-center"
              priority
              referrerPolicy="no-referrer"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="w-full max-w-[1170px] mx-auto text-center z-10 text-white mt-16">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <h1 className="text-[40px] sm:text-[60px] md:text-[80px] font-display font-[800] uppercase tracking-widest leading-none drop-shadow-sm">
                OWNLYCUSTOMLAB
              </h1>
              <p className="max-w-3xl mx-auto text-[16px] md:text-[20px] font-light tracking-wider pt-3 opacity-90 font-sans">
                Nơi nghệ thuật gặp gỡ công nghệ, tạo nên kính mắt vượt thời gian
              </p>
            </motion.div>
          </div>
        </section>

        {/* CÂU CHUYỆN CỦA CHÚNG TÔI (OUR STORY) Section */}
        <section 
          className="py-16 md:py-32 px-6 relative bg-white"
          id="our-story-section"
        >
          <div className="max-w-[1170px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Column: Image */}
            <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto lg:max-w-none rounded-sm overflow-hidden" id="story-visual-column">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="w-full h-full relative"
              >
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                  alt="Our Story"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Right Column: Text */}
            <div className="space-y-8" id="story-text-column">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-display font-light text-ink leading-[1.1] mb-8">
                  Câu Chuyện Của<br />Chúng Tôi
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="space-y-6 text-[15px] sm:text-[15.5px] text-graphite/80 leading-[1.85] font-light"
              >
                <p>Câu chuyện bắt đầu từ trong xưởng.</p>

                <p>Hơn 20 năm sản xuất gọng kính, chúng tôi hiểu rõ hơn ai hết cách tạo ra một chiếc kính "đúng chuẩn": màu sắc mặt và càng — tất cả phải đồng nhất, đúng quy cách, đủ để xuất đi hàng nghìn cái giống hệt nhau. Đẹp. Hoàn chỉnh. Nhưng không dành cho ai cụ thể. Cho đến một buổi chiều, team chúng tôi thử làm khác — không theo quy chuẩn, chỉ theo cảm quan. Mỗi người tự chọn màu họ thích, tự kết hợp theo cách riêng. Và điều xảy ra là: ai cũng hào hứng theo cách mà họ không có khi chọn kính ngoài thị trường.</p>

                <p>Chúng tôi nhận ra, thứ mọi người thật sự tìm kiếm không chỉ là một món phụ kiện đẹp — mà là cảm giác đúng mình. Một thứ mà kính sẵn rất khó mang lại.</p>

                <p>OWNLY ra đời từ khoảnh khắc đó.</p>

                <p>Tại đây, bạn không chọn từ catalogue. Bạn tạo ra chiếc kính của chính mình — từ dáng gọng, màu sắc, đến những chi tiết nhỏ nhất. Mọi tùy chỉnh đều là thật — không phải lời hứa.</p>

                <p>OWNLY. Chỉ thuộc về bạn.</p>
              </motion.div>
            </div>

          </div>
        </section>

        {/* CÁC GIÁ TRỊ CỐT LÕI (CORE VALUES) SECTION */}
        <section 
          className="py-20 md:py-32 px-6 bg-[#FAFAFA] relative"
          id="core-values-section"
        >
          <div className="max-w-[1170px] mx-auto space-y-16">
            
            {/* Header core values */}
            <div className="text-center space-y-6 max-w-2xl mx-auto" id="values-header">
              <h2 className="text-[36px] md:text-[48px] font-display font-light text-ink leading-tight tracking-wide">
                Giá Trị Cốt Lõi
              </h2>
              <p className="text-[15px] md:text-[16px] text-graphite/70 font-light">
                Những nguyên tắc định hướng mọi hoạt động của chúng tôi
              </p>
            </div>

            {/* Pillars Grid - 4 columns layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="values-grid">
              
              {/* Item 1 - INDIVIDUALITY */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white px-6 py-12 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                id="value-item-1"
              >
                <div className="w-14 h-14 border border-ink/20 flex items-center justify-center text-ink mb-6">
                  <Heart className="w-5 h-5 stroke-[1.25]" />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-ink tracking-[0.15em] uppercase mb-2">
                    INDIVIDUALITY
                  </h3>
                  <h4 className="text-[14px] text-graphite/80 italic mb-4">Cá tính là gốc rễ</h4>
                  <p className="text-[13.5px] text-graphite/70 leading-[1.7] font-light max-w-[220px]">
                    Không có hai người giống nhau — chiếc kính của bạn cũng có thể như vậy. Chúng tôi ở đây để tôn vinh cá tính riêng của bạn.
                  </p>
                </div>
              </motion.div>

              {/* Item 2 - CRAFTSMANSHIP */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white px-6 py-12 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                id="value-item-2"
              >
                <div className="w-14 h-14 border border-ink/20 flex items-center justify-center text-ink mb-6">
                  <Leaf className="w-5 h-5 stroke-[1.25]" />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-ink tracking-[0.15em] uppercase mb-2">
                    CRAFTSMANSHIP
                  </h3>
                  <h4 className="text-[14px] text-graphite/80 italic mb-4">Làm thật, làm tốt</h4>
                  <p className="text-[13.5px] text-graphite/70 leading-[1.7] font-light max-w-[220px]">
                    Mỗi chiếc kính được kiểm soát từ chất liệu đến từng chi tiết hoàn thiện. Chất lượng không phải lời hứa — đó là cách chúng tôi làm việc mỗi ngày.
                  </p>
                </div>
              </motion.div>

              {/* Item 3 - FREEDOM */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white px-6 py-12 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                id="value-item-3"
              >
                <div className="w-14 h-14 border border-ink/20 flex items-center justify-center text-ink mb-6">
                  <Users className="w-5 h-5 stroke-[1.25]" />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-ink tracking-[0.15em] uppercase mb-2">
                    FREEDOM
                  </h3>
                  <h4 className="text-[14px] text-graphite/80 italic mb-4">Tự do định nghĩa bản thân</h4>
                  <p className="text-[13.5px] text-graphite/70 leading-[1.7] font-light max-w-[220px]">
                    Màu sắc, kiểu dáng, dấu ấn cá nhân — bạn quyết định tất cả. Chúng tôi ở đây để biến ý tưởng của bạn thành hiện thực.
                  </p>
                </div>
              </motion.div>

              {/* Item 4 - AUTHENTICITY */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white px-6 py-12 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                id="value-item-4"
              >
                <div className="w-14 h-14 border border-ink/20 flex items-center justify-center text-ink mb-6">
                  <Award className="w-5 h-5 stroke-[1.25]" />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-ink tracking-[0.15em] uppercase mb-2">
                    AUTHENTICITY
                  </h3>
                  <h4 className="text-[14px] text-graphite/80 italic mb-4">Chân thật trong từng lựa chọn</h4>
                  <p className="text-[13.5px] text-graphite/70 leading-[1.7] font-light max-w-[220px]">
                    Từ cách tư vấn đến vật liệu sử dụng, chúng tôi luôn chọn điều phù hợp với bạn - vì giá trị thật nằm ở việc phản ánh đúng con người bạn.
                  </p>
                </div>
              </motion.div>

            </div>

          </div>
        </section>

        {/* THAM GIA CÙNG CHÚNG TÔI (ZALO COMMUNITY BANNER) */}
        <section 
          className="relative py-32 md:py-48 px-6 overflow-hidden flex flex-col items-center justify-center bg-[#111111]"
          id="join-us-section"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1600"
              alt="Join OWNLY Community"
              fill
              className="object-cover opacity-50"
              referrerPolicy="no-referrer"
            />
            {/* Top mask fading from the previous section's bg color */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#FAFAFA] via-[#FAFAFA]/40 to-transparent z-10" />
            {/* Bottom mask fading into dark footer */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent z-10" />
          </div>

          <div className="w-full max-w-[800px] text-center space-y-8 z-20 relative text-white mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-[36px] sm:text-[48px] md:text-[56px] font-display font-light tracking-wide leading-tight">
                Tham Gia Cùng Chúng Tôi
              </h2>
              <p className="text-[15px] md:text-[18px] text-white/90 max-w-2xl mx-auto font-light leading-[1.8]">
                Khám phá bộ sưu tập mới nhất và trở thành một phần của cộng đồng OWNLY
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex justify-center pt-6"
            >
              <a 
                href="https://zalo.me/g/ownly-custom-lab"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center gap-3 bg-[#D9A513] text-white px-8 py-4 md:px-10 md:py-[18px] rounded-full font-sans text-[14px] md:text-[15px] font-medium hover:bg-[#c49411] transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95"
              >
                Tham gia vào Group cộng đồng trên Zalo của OWNLY
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />

      </div>
    </SmoothScroll>
  );
}

