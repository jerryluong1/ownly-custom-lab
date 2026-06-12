"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  ArrowUpRight,
  HelpCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Link from "next/link";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5 stroke-[1.5]" />,
      title: "Email",
      value: "ownlycustomlab@gmail.com",
      link: "mailto:ownlycustomlab@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5 stroke-[1.5]" />,
      title: "Điện thoại",
      value: "0886 891 273",
      link: "tel:0886891273"
    },
    {
      icon: <MapPin className="w-5 h-5 stroke-[1.5]" />,
      title: "Địa chỉ",
      value: (
        <>
          Hải Phòng <br/>
          <span className="text-muted/80 text-[13px] mt-1.5 inline-block font-medium">TP. Hồ Chí Minh (Coming Soon)</span>
        </>
      ),
      link: null
    },
    {
      icon: <Clock className="w-5 h-5 stroke-[1.5]" />,
      title: "Giờ làm việc",
      value: "Thứ 2 - Chủ nhật: 08:00 - 20:00",
      link: null
    }
  ];

  const faqs = [
    {
      q: "Thời gian giao hàng là bao lâu?",
      a: "Đơn hàng sản phẩm có sẵn sẽ được giao trong vòng 2-3 ngày. Với đơn hàng chế tác thủ công (custom dũa phom dáng), thời gian hoàn thiện và giao hàng sẽ từ 5-7 ngày làm việc."
    },
    {
      q: "Chính sách đổi trả như thế nào?",
      a: "Bạn có thể đổi sản phẩm trong vòng 07 ngày kể từ ngày nhận hàng với điều kiện sản phẩm còn nguyên đai kiện, nguyên trạng mới 100%, chưa qua sử dụng và chưa cắt mắt kính thay đổi kết cấu."
    },
    {
      q: "Làm sao để tư vấn cắt mắt kính phù hợp?",
      a: "Quý khách có thể cung cấp sổ đo khúc xạ hiện tại cho chuyên viên tư vấn qua Zalo. OWNLY sẽ tư vấn lựa chọn chất liệu tròng, chiết suất và phom gọng phù hợp nhất với đơn kính của bạn."
    },
    {
      q: "Có hỗ trợ thanh toán trực tuyến không?",
      a: "Chúng tôi hỗ trợ linh hoạt các hình thức thanh toán bao gồm: chuyển khoản ngân hàng trực tuyến qua mã QR và thanh toán tiền mặt (COD đối với một số khu vực)."
    }
  ];

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-paper text-ink selection:bg-amber selection:text-white font-raleway flex flex-col justify-between" id="contact-page-root">
        <Header />

        <main className="flex-1 pb-24" id="contact-main">
          
          {/* HEADER SECTION */}
          <section className="relative pt-[160px] md:pt-[200px] pb-24 md:pb-32 mb-16 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=2000&q=80" 
                alt="Liên Hệ"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-paper to-transparent pointer-events-none" />
            </div>
            
            <div className="max-w-[1170px] mx-auto px-6 xl:px-0 text-center space-y-5 relative z-10 drop-shadow-md">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber font-bold block drop-shadow-sm">
                KẾT NỐI VỚI CHÚNG TÔI
              </span>
              <h1 className="text-[32px] sm:text-[42px] md:text-[52px] font-display font-medium text-white leading-tight tracking-[0.05em] uppercase drop-shadow-lg">
                LIÊN HỆ
              </h1>
              <p className="text-[14px] sm:text-[15px] font-sans font-medium text-white/95 max-w-lg mx-auto leading-relaxed drop-shadow-md">
                Chúng tôi luôn sẵn sàng lắng nghe, giải đáp thắc mắc và hỗ trợ bạn trong suốt quá trình trải nghiệm tại OWNLYCUSTOMLAB.
              </p>
            </div>
          </section>

          <div className="max-w-[1170px] mx-auto px-6 xl:px-0 mt-16 md:mt-20">
            
            {/* CONTACT INFO GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
              {contactMethods.map((method, idx) => {
                const innerContent = (
                  <>
                    <div className="w-12 h-12 rounded-full border border-amber/20 bg-amber/5 flex items-center justify-center text-amber mx-auto mb-6 shrink-0">
                      {method.icon}
                    </div>
                    <div className="space-y-2.5 flex-1">
                      <h3 className="text-[12px] font-mono uppercase tracking-[0.2em] font-semibold text-graphite">
                        {method.title}
                      </h3>
                      <div className="text-[16px] font-sans text-ink font-semibold leading-relaxed">
                        {method.value}
                      </div>
                    </div>
                  </>
                );

                return method.link ? (
                  <a 
                    key={idx} 
                    href={method.link}
                    className="bg-paper border border-amber/30 p-8 rounded-lg text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-center min-h-[220px]"
                  >
                    {innerContent}
                  </a>
                ) : (
                  <div 
                    key={idx}
                    className="bg-paper border border-amber/30 p-8 rounded-lg text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-center min-h-[220px]"
                  >
                    {innerContent}
                  </div>
                );
              })}
            </div>

            {/* TWO COLUMNS SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              
              {/* LEFT: GỬI TIN NHẮN (ZALO) */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-[26px] md:text-[32px] font-display font-light text-ink tracking-[0.02em]">
                    Gửi Tin Nhắn
                  </h2>
                  <p className="text-[14.5px] font-sans font-light text-graphite leading-relaxed max-w-md border-l border-amber pl-4">
                    Có câu hỏi hoặc góp ý? Hãy trò chuyện trực tiếp với chúng tôi qua kênh Zalo chính thức để nhận được phản hồi tức thời và hỗ trợ tốt nhất.
                  </p>
                </div>

                <div className="bg-cream/20 border border-sand/40 p-8 rounded-lg space-y-6 shadow-xs relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                     <MessageCircle className="w-48 h-48" />
                  </div>
                  
                  <div className="space-y-2 relative z-10">
                    <span className="font-mono text-[10px] text-amber font-semibold uppercase tracking-wider">
                      Phản hồi trong 5 phút
                    </span>
                    <h3 className="text-[18px] font-display font-medium text-ink">
                      Liên hệ qua Zalo OWNLYCUSTOMLAB
                    </h3>
                  </div>

                  <a 
                    href="https://zalo.me/0886891273" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-amber hover:bg-amber/90 text-white py-4 px-8 rounded-md font-sans text-[13px] uppercase tracking-[0.15em] font-medium transition-all duration-300 w-full sm:w-auto relative z-10 group"
                  >
                    <span>Chat Ngay Trên Zalo</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <p className="text-[12px] text-muted font-sans font-light relative z-10">
                    * Yêu cầu có tài khoản Zalo hoặc ứng dụng Zalo trên thiết bị của bạn.
                  </p>
                </div>
              </div>

              {/* RIGHT: FAQ */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-[26px] md:text-[32px] font-display font-light text-ink tracking-[0.02em]">
                    Câu Hỏi Thường Gặp
                  </h2>
                  <p className="text-[14px] font-sans font-light text-graphite">
                    Giải đáp nhanh những thắc mắc thường gặp của bạn.
                  </p>
                </div>

                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-sand/30 pb-6 last:border-0 last:pb-0">
                      <h4 className="text-[15px] font-medium text-ink mb-3 font-sans leading-relaxed">
                        {faq.q}
                      </h4>
                      <p className="text-[14px] text-graphite/90 font-light font-sans leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-sand/30">
                  <p className="text-[13.5px] font-sans font-light text-graphite mb-3">
                    Không tìm thấy câu trả lời bạn cần?
                  </p>
                  <a 
                    href="mailto:ownlycustomlab@gmail.com" 
                    className="inline-flex items-center gap-2 text-[13px] font-sans font-medium text-ink hover:text-amber transition-colors"
                  >
                    <HelpCircle className="w-4 h-4" />
                    <span>Liên hệ trực tiếp với chúng tôi</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
