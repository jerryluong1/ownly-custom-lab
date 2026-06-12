"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  RefreshCw, 
  Check, 
  X, 
  Phone, 
  Mail, 
  Hammer,
  UserCheck,
  Info,
  AlertCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

enum PolicyTab {
  WARRANTY = "warranty",
  RETURN = "return"
}

export default function WarrantyPage() {
  const [activeTab, setActiveTab] = useState<PolicyTab>(PolicyTab.WARRANTY);

  const warrantyQuickFacts = [
    {
      title: "Bảo hành độ bóng",
      value: "Trọn đời",
      desc: "Xỉn màu do sử dụng thông thường.",
      accent: "text-amber"
    },
    {
      title: "Bảo hành kỹ thuật",
      value: "24 tháng",
      desc: "Đối với các sản phẩm mang thương hiệu OWNLY.",
      accent: "text-ink"
    },
    {
      title: "Bảo hành nhà cung cấp",
      value: "12 tháng",
      desc: "Theo chính sách nhà cung cấp.",
      accent: "text-muted"
    }
  ];

  const returnQuickFacts = [
    {
      title: "Thời hạn đổi hàng",
      value: "07 ngày",
      desc: "Kể từ ngày mua hoặc ngày nhận hàng",
      accent: "text-amber"
    },
    {
      title: "Số lần đổi hàng",
      value: "01 lần",
      desc: "Duy nhất mỗi đơn hàng",
      accent: "text-ink"
    }
  ];

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-paper text-ink selection:bg-amber selection:text-white font-raleway flex flex-col justify-between" id="warranty-page-root">
        <Header />

        <main className="flex-1 pb-24 pt-28 md:pt-36" id="warranty-main">
          <div className="max-w-[1170px] mx-auto px-6 xl:px-0">
            
            {/* TAB SELECTOR HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 border-b border-sand/30 pb-8" id="warranty-tabs-section">
              <div className="space-y-1.5 text-center md:text-left">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber font-bold block">CAM KẾT DỊCH VỤ</span>
                <h1 className="text-[26px] sm:text-[32px] md:text-[38px] font-display font-bold text-ink leading-tight uppercase tracking-[0.06em]">
                  QUYỀN LỢI <span className="text-amber">KHÁCH HÀNG</span>
                </h1>
              </div>

              {/* Minimal Luxury sliding tabs */}
              <div className="flex items-center gap-6 bg-cream/10 p-1.5 rounded-lg border border-sand/30 relative shadow-xs">
                <button
                  onClick={() => setActiveTab(PolicyTab.WARRANTY)}
                  className={`relative py-3 px-6 rounded-md font-semibold text-[11px] uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 cursor-pointer overflow-hidden ${
                    activeTab === PolicyTab.WARRANTY
                      ? "text-white"
                      : "text-graphite hover:text-ink"
                  }`}
                >
                  {activeTab === PolicyTab.WARRANTY && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-ink rounded-md z-0"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <ShieldCheck className="relative z-10 w-3.5 h-3.5 shrink-0" />
                  <span className="relative z-10">CHÍNH SÁCH BẢO HÀNH</span>
                </button>
                <button
                  onClick={() => setActiveTab(PolicyTab.RETURN)}
                  className={`relative py-3 px-6 rounded-md font-semibold text-[11px] uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 cursor-pointer overflow-hidden ${
                    activeTab === PolicyTab.RETURN
                      ? "text-white"
                      : "text-graphite hover:text-ink"
                  }`}
                >
                  {activeTab === PolicyTab.RETURN && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-ink rounded-md z-0"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <RefreshCw className="relative z-10 w-3.5 h-3.5 shrink-0" />
                  <span className="relative z-10">CHÍNH SÁCH ĐỔI HÀNG</span>
                </button>
              </div>
            </div>

            {/* POLICY CONTENTS */}
            <AnimatePresence mode="wait">
              {activeTab === PolicyTab.WARRANTY ? (
                <motion.div
                  key="warranty-content"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-16"
                >
                  {/* HERO BANNER SECTION */}
                  <div className="bg-ink text-white rounded-lg p-8 md:p-16 relative overflow-hidden border border-white/5 shadow-md">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,165,19,0.08),transparent_60%)] pointer-events-none" />
                    <div className="max-w-2xl relative z-10 space-y-4">
                      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber font-bold block">
                        OWNLY CUSTOM LAB
                      </span>
                      <h2 className="text-[28px] sm:text-[38px] md:text-[44px] font-display font-bold leading-tight tracking-[0.05em] uppercase">
                        CHÍNH SÁCH <span className="text-amber">BẢO HÀNH</span>
                      </h2>
                      <p className="text-[14px] sm:text-[15px] font-sans font-light text-paper/85 leading-relaxed max-w-xl">
                        Áp dụng cho tất cả sản phẩm mua tại OWNLY Custom Lab
                      </p>
                    </div>
                  </div>

                  {/* QUICK FACTS GRID */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {warrantyQuickFacts.map((fact, idx) => (
                      <div 
                        key={idx} 
                        className="bg-paper border border-sand/40 rounded-lg p-6 sm:p-8 flex flex-col shadow-xs hover:border-sand transitions-all duration-300 min-h-[160px]"
                      >
                        <div>
                          <span className="text-[11px] uppercase tracking-[0.20em] font-medium text-graphite font-mono block mb-3">{fact.title}</span>
                          <span className={`text-[32px] sm:text-[40px] font-display font-medium leading-none tracking-tight ${fact.accent}`}>
                            {fact.value}
                          </span>
                        </div>
                        <p className="text-[14px] text-graphite/90 font-light font-sans mt-5 border-t border-sand/30 pt-4 leading-relaxed">
                          {fact.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* DETAILED CONTENT COLUMNS */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
                    
                    {/* LEFT MAIN DETAILS */}
                    <div className="lg:col-span-8 space-y-12">
                      
                      {/* SECTION 1: DUOC BAO HANH */}
                      <div className="space-y-6">
                        <h3 className="text-[18px] sm:text-[20px] font-display font-medium text-ink tracking-wide uppercase flex items-center gap-4">
                          <span className="w-10 h-10 rounded-full bg-amber/10 text-amber flex items-center justify-center font-bold text-[15px] font-mono shrink-0">01</span>
                          Sản phẩm OWNLY — Được bảo hành
                        </h3>
                        
                        <div className="bg-paper border border-sand/30 rounded-lg p-5 sm:p-8 space-y-4 shadow-xs">
                          <ul className="space-y-5 text-[14px] sm:text-[15px] text-graphite font-sans font-light">
                            <li className="flex items-start gap-3.5">
                              <span className="text-amber mt-1 shrink-0">
                                <Check className="w-4 h-4 stroke-[2]" />
                              </span>
                              <span className="leading-relaxed">
                                <strong>Nứt, gãy gọng bất thường trong điều kiện sử dụng bình thường</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-3.5">
                              <span className="text-amber mt-1 shrink-0">
                                <Check className="w-4 h-4 stroke-[2]" />
                              </span>
                              <span className="leading-relaxed">
                                <strong>Lỗi bản lề, ốc vít — lỏng, tuột, kẹt</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-3.5">
                              <span className="text-amber mt-1 shrink-0">
                                <Check className="w-4 h-4 stroke-[2]" />
                              </span>
                              <span className="leading-relaxed">
                                <strong>Bong/tróc bề mặt, đổi màu không do tác động bên ngoài</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-3.5">
                              <span className="text-amber mt-1 shrink-0">
                                <Check className="w-4 h-4 stroke-[2]" />
                              </span>
                              <span className="leading-relaxed">
                                <strong>Lỗi phụ kiện (ve mũi,...) do chất lượng linh kiện</strong>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* SECTION 2: KHONG AP DUNG BAO HANH */}
                      <div className="space-y-6">
                        <h3 className="text-[18px] sm:text-[20px] font-display font-medium text-ink tracking-wide uppercase flex items-center gap-4">
                          <span className="w-10 h-10 rounded-full bg-neutral-100 text-graphite flex items-center justify-center font-bold text-[15px] font-mono shrink-0">02</span>
                          Không áp dụng bảo hành
                        </h3>

                        <div className="bg-paper border border-sand/30 rounded-lg p-5 sm:p-8 space-y-4 shadow-xs">
                          <ul className="space-y-5 text-[14px] sm:text-[15px] text-graphite font-sans font-light">
                            <li className="flex items-start gap-3.5">
                              <span className="text-red-500 mt-1 shrink-0">
                                <X className="w-4 h-4 stroke-[2]" />
                              </span>
                              <span className="leading-relaxed">
                                <strong>Hư hỏng do va đập, rơi, tác động lực mạnh</strong> 
                              </span>
                            </li>
                            <li className="flex items-start gap-3.5">
                              <span className="text-red-500 mt-1 shrink-0">
                                <X className="w-4 h-4 stroke-[2]" />
                              </span>
                              <span className="leading-relaxed">
                                <strong>Trầy xước, hao mòn tự nhiên; ảnh hưởng bởi mồ hôi, hóa chất, nhiệt độ cao</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-3.5">
                              <span className="text-red-500 mt-1 shrink-0">
                                <X className="w-4 h-4 stroke-[2]" />
                              </span>
                              <span className="leading-relaxed">
                                <strong>Tự ý sửa chữa hoặc can thiệp bởi bên thứ ba</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-3.5">
                              <span className="text-red-500 mt-1 shrink-0">
                                <X className="w-4 h-4 stroke-[2]" />
                              </span>
                              <span className="leading-relaxed">
                                <strong>Thay đổi theo nhu cầu thẩm mỹ cá nhân</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-3.5">
                              <span className="text-red-500 mt-1 shrink-0">
                                <X className="w-4 h-4 stroke-[2]" />
                              </span>
                              <span className="leading-relaxed">
                                <strong>Hàng mua áp dụng các chương trình khuyến mãi, giảm giá đặc biệt</strong>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* SECTION 3: NHA CUNG CAP KHAC */}
                      <div className="space-y-6">
                        <h3 className="text-[18px] sm:text-[20px] font-display font-medium text-ink tracking-wide uppercase flex items-center gap-4">
                          <span className="w-10 h-10 rounded-full bg-amber/10 text-amber flex items-center justify-center font-bold text-[15px] font-mono shrink-0">03</span>
                          Bảo hành sản phẩm nhà cung cấp khác
                        </h3>

                        <div className="bg-paper border border-sand/30 rounded-lg p-5 sm:p-8 space-y-6 shadow-xs">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 text-[14px] text-graphite font-sans font-light">
                            <div className="flex items-start gap-3">
                              <span className="text-amber mt-0.5 shrink-0"><Check className="w-4 h-4 stroke-[2]" /></span>
                              <span className="leading-relaxed"><strong>Thời hạn 12 tháng kể từ ngày giao hàng</strong></span>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-amber mt-0.5 shrink-0"><Check className="w-4 h-4 stroke-[2]" /></span>
                              <span className="leading-relaxed"><strong>Áp dụng cho lỗi kỹ thuật từ nhà sản xuất</strong></span>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-amber mt-0.5 shrink-0"><Check className="w-4 h-4 stroke-[2]" /></span>
                              <span className="leading-relaxed"><strong>Hình thức: đổi sản phẩm mới hoặc tương đương nếu hết hàng</strong></span>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-red-500 mt-0.5 shrink-0"><X className="w-4 h-4 stroke-[2]" /></span>
                              <span className="leading-relaxed text-graphite"><strong>Không áp dụng: hàng thanh lý, giảm giá đặc biệt, lỗi do người dùng</strong></span>
                            </div>
                          </div>

                          <div className="border border-sand/40 bg-cream/20 p-5 rounded-lg text-[13.5px] text-graphite/90 flex items-start gap-3">
                            <Info className="w-4.5 h-4.5 text-amber shrink-0 mt-0.5 stroke-[1.5]" />
                            <p className="leading-relaxed font-light">
                              <strong>Điều kiện bảo hành:</strong> xuất trình hóa đơn hoặc thông tin đơn hàng hợp lệ tại thời điểm yêu cầu.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* SECTION 4: GIA CONG THU CONG */}
                      <div className="space-y-6">
                        <h3 className="text-[18px] sm:text-[20px] font-display font-medium text-ink tracking-wide uppercase flex items-center gap-4">
                          <span className="w-10 h-10 rounded-full bg-amber/10 text-amber flex items-center justify-center font-bold text-[15px] font-mono shrink-0">04</span>
                          Sản phẩm gia công thủ công
                        </h3>

                        <div className="bg-paper border border-sand/30 rounded-lg p-5 sm:p-8 space-y-6 shadow-xs font-sans">
                          <div className="space-y-4">
                            <div className="border border-sand/40 bg-cream/20 p-5 rounded-lg text-[13.5px] text-graphite/90 flex items-start gap-3">
                              <Hammer className="w-4.5 h-4.5 text-amber shrink-0 mt-0.5 stroke-[1.5]" />
                              <span className="leading-relaxed font-light">
                                <strong>Hàng gia công thủ công có thể tồn tại sai số kích thước ±1mm và biến thể nhỏ về bề mặt so với mẫu tham chiếu
— đây là đặc tính tự nhiên, không phải lỗi sản xuất.</strong>
                              </span>
                            </div>

                            <div className="border border-sand/40 bg-cream/20 p-5 rounded-lg text-[13.5px] text-graphite/90 flex items-start gap-3">
                              <UserCheck className="w-4.5 h-4.5 text-amber shrink-0 mt-0.5 stroke-[1.5]" />
                              <span className="leading-relaxed font-light">
                                <strong>Tất cả đơn hàng gia công thủ công yêu cầu khách xác nhận kiểu dáng, màu sắc và thông số trước khi sản xuất.
Sau khi xác nhận, OWNLY không chịu trách nhiệm với khiếu nại liên quan đến các thông số đã được duyệt</strong>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* SECTION 5: HO TRU NGOAI BAO HANH */}
                      <div className="space-y-6">
                        <h3 className="text-[18px] sm:text-[20px] font-display font-medium text-ink tracking-wide uppercase flex items-center gap-4">
                          <span className="w-10 h-10 rounded-full bg-amber/10 text-amber flex items-center justify-center font-bold text-[15px] font-mono shrink-0">05</span>
                          Hỗ trợ ngoài bảo hành (trong 12 tháng)
                        </h3>

                        <div className="bg-paper border border-sand/30 rounded-lg p-5 sm:p-8 space-y-5 shadow-xs">
                          <ul className="space-y-5 text-[14px] sm:text-[15px] text-graphite font-sans font-light">
                            <li className="flex items-start gap-3.5">
                              <span className="text-amber mt-1 shrink-0">
                                <Check className="w-4 h-4 stroke-[2]" />
                              </span>
                              <span className="leading-relaxed">
                                <strong>Giảm 30% khi mua gọng mới thay thế — áp dụng khi hoàn trả sản phẩm cũ</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-3.5">
                              <span className="text-amber mt-1 shrink-0">
                                <Check className="w-4 h-4 stroke-[2]" />
                              </span>
                              <span className="leading-relaxed">
                                <strong>Hỗ trợ sửa chữa có phí nếu khả thi</strong>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                    </div>

                    {/* RIGHT COLUMN: PROCESS & CONTACT */}
                    <div className="lg:col-span-4 space-y-8">
                      
                      {/* PROCESS CARD */}
                      <div className="border border-sand/30 bg-cream/10 rounded-lg p-6 sm:p-8 space-y-6 shadow-xs">
                        <div className="space-y-2 border-b border-sand/20 pb-5">
                          <h4 className="text-[16px] font-display font-medium text-ink tracking-wide uppercase">
                            Quy trình yêu cầu bảo hành
                          </h4>
                        </div>

                        <div className="space-y-6">
                          
                          {/* Step 1 */}
                          <div className="flex gap-4 items-center">
                            <span className="font-display italic text-[24px] text-amber font-light leading-none shrink-0 w-8">01</span>
                            <div className="space-y-1">
                              <h5 className="text-[14px] font-medium text-ink leading-relaxed">Liên hệ OWNLY qua hotline hoặc email kèm hình ảnh/video sản phẩm lỗi</h5>
                            </div>
                          </div>

                          {/* Step 2 */}
                          <div className="flex gap-4 items-center">
                            <span className="font-display italic text-[24px] text-amber font-light leading-none shrink-0 w-8">02</span>
                            <div className="space-y-1">
                              <h5 className="text-[14px] font-medium text-ink leading-relaxed">Cung cấp hóa đơn hoặc thông tin đơn hàng hợp lệ</h5>
                            </div>
                          </div>

                          {/* Step 3 */}
                          <div className="flex gap-4 items-center">
                            <span className="font-display italic text-[24px] text-amber font-light leading-none shrink-0 w-8">03</span>
                            <div className="space-y-1">
                              <h5 className="text-[14px] font-medium text-ink leading-relaxed">OWNLY phản hồi trong 2 ngày làm việc</h5>
                            </div>
                          </div>

                          {/* Step 4 */}
                          <div className="flex gap-4 items-center">
                            <span className="font-display italic text-[24px] text-amber font-light leading-none shrink-0 w-8">04</span>
                            <div className="space-y-1">
                              <h5 className="text-[14px] font-medium text-ink leading-relaxed">Gửi sản phẩm về OWNLY theo hướng dẫn — xử lý trong 5–7 ngày làm việc</h5>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CALL CENTER CARD */}
                      <div className="bg-paper text-ink rounded-lg p-6 sm:p-8 space-y-6 shadow-xs border border-sand/30 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle,rgba(217,165,19,0.06)_0%,transparent_70%)] -mr-10 -mt-10 pointer-events-none" />
                        
                        <div className="space-y-1.5 relative z-10 text-center">
                          <h4 className="text-[16px] sm:text-[18px] font-display font-medium tracking-wide text-ink">Trung Tâm Hỗ Trợ</h4>
                        </div>
                        
                        <div className="space-y-3 pt-2 text-[13.5px] relative z-10 w-full">
                          <div className="flex items-center gap-4 bg-cream/10 p-4 rounded-xl border border-sand/20 hover:border-sand/40 transition-colors w-full">
                            <div className="w-10 h-10 rounded-full bg-cream/30 flex items-center justify-center shrink-0">
                              <Phone className="w-4 h-4 text-amber stroke-[1.5]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-muted text-[10px] uppercase tracking-wider font-mono mb-0.5">Hotline</p>
                              <a href="tel:0886891273" className="text-ink hover:text-amber font-medium text-[15px] sm:text-[16px] transition-colors block truncate w-full">0886 891 273</a>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 bg-cream/10 p-4 rounded-xl border border-sand/20 hover:border-sand/40 transition-colors w-full">
                            <div className="w-10 h-10 rounded-full bg-cream/30 flex items-center justify-center shrink-0">
                              <Mail className="w-4 h-4 text-amber stroke-[1.5]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-muted text-[10px] uppercase tracking-wider font-mono mb-0.5">Email</p>
                              <a href="mailto:ownlycustomlab@gmail.com" className="text-ink hover:text-amber font-medium text-[15px] sm:text-[16px] transition-colors block truncate w-full">ownlycustomlab@gmail.com</a>
                            </div>
                          </div>
                        </div>

                        <div className="text-[12.5px] text-muted text-center pt-2 relative z-10 font-light italic">
                          Chính sách có thể được cập nhật theo từng thời điểm.
                        </div>
                      </div>

                    </div>

                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="return-content"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-16"
                >
                  {/* HERO BANNER SECTION */}
                  <div className="bg-ink text-white rounded-lg p-8 md:p-16 relative overflow-hidden border border-white/5 shadow-md">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,165,19,0.08),transparent_60%)] pointer-events-none" />
                    <div className="max-w-2xl relative z-10 space-y-4">
                      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber font-bold block">
                        OWNLY CUSTOM LAB
                      </span>
                      <h2 className="text-[28px] sm:text-[38px] md:text-[44px] font-display font-bold leading-tight tracking-[0.05em] uppercase">
                        CHÍNH SÁCH <span className="text-amber">ĐỔI HÀNG</span>
                      </h2>
                      <p className="text-[14px] sm:text-[15px] font-sans font-light text-paper/85 leading-relaxed max-w-xl">
                        01 lần duy nhất · Trong vòng 07 ngày
                      </p>
                    </div>
                  </div>

                  {/* QUICK FACTS GRID */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {returnQuickFacts.map((fact, idx) => (
                      <div 
                        key={idx} 
                        className="bg-paper border border-sand/40 rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-sand transitions-all duration-300 min-h-[140px]"
                      >
                        <div>
                          <span className="text-[11px] uppercase tracking-[0.20em] font-medium text-graphite font-mono block mb-3">{fact.title}</span>
                          <span className={`text-[32px] sm:text-[40px] font-display font-medium leading-none tracking-tight ${fact.accent}`}>
                            {fact.value}
                          </span>
                        </div>
                        <p className="text-[14px] text-graphite/90 font-light font-sans mt-5 border-t border-sand/30 pt-4 leading-relaxed">
                          {fact.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* DETAILED CONTENT COLUMNS */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
                    
                    {/* LEFT COLUMN DETAILS */}
                    <div className="lg:col-span-8 space-y-12">
                      
                      {/* SECTION 1: DIEU KIEN CHUNG */}
                      <div className="space-y-6">
                        <h3 className="text-[18px] sm:text-[20px] font-display font-medium text-ink tracking-wide uppercase flex items-center gap-4">
                          <span className="w-10 h-10 rounded-full bg-amber/10 text-amber flex items-center justify-center font-bold text-[15px] font-mono shrink-0">01</span>
                          Điều kiện chung
                        </h3>
                        
                        <div className="bg-paper border border-sand/30 rounded-lg p-5 sm:p-8 space-y-4 shadow-xs">
                          <ul className="space-y-5 text-[14px] sm:text-[15px] text-graphite font-sans font-light">
                            <li className="flex items-start gap-4">
                              <span className="text-amber mt-1 shrink-0">
                                <Check className="w-4 h-4 stroke-[2]" />
                              </span>
                              <span className="leading-relaxed">
                                <strong>Còn nguyên vẹn, chưa sử dụng, chưa thay/ lắp tròng</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-4">
                              <span className="text-amber mt-1 shrink-0">
                                <Check className="w-4 h-4 stroke-[2]" />
                              </span>
                              <span className="leading-relaxed">
                                <strong>Có hóa đơn hoặc thông tin đơn hàng hợp lệ</strong>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* SECTION 2: TRUONG HOP AP DUNG */}
                      <div className="space-y-6">
                        <h3 className="text-[18px] sm:text-[20px] font-display font-medium text-ink tracking-wide uppercase flex items-center gap-4">
                          <span className="w-10 h-10 rounded-full bg-amber/10 text-amber flex items-center justify-center font-bold text-[15px] font-mono shrink-0">02</span>
                          TRƯỜNG HỢP ĐƯỢC ĐỔI
                        </h3>

                        {/* DESKTOP TABLE */}
                        <div className="hidden md:block overflow-hidden border border-sand/30 rounded-lg shadow-sm font-sans text-[13.5px]">
                          <table className="w-full text-left border-collapse bg-paper">
                            <thead>
                              <tr className="bg-cream/25 border-b border-sand/30 text-ink font-semibold uppercase tracking-wider text-[11px] font-mono text-left">
                                <th className="p-4 w-[40%] text-left">LÝ DO</th>
                                <th className="p-4 w-[35%] text-left">HÌNH THỨC</th>
                                <th className="p-4 w-[25%] opacity-90 text-left">PHÍ VẬN CHUYỂN</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-sand/20">
                              <tr>
                                <td className="p-4">
                                  <p className="font-semibold text-ink">Lỗi từ OWNLY</p>
                                  <p className="text-xs text-graphite/80 mt-1 leading-relaxed">Sai mẫu/màu, lỗi kỹ thuật, hỏng khi vận chuyển</p>
                                </td>
                                <td className="p-4 text-graphite font-light">Đổi sản phẩm tương đương</td>
                                <td className="p-4 font-semibold text-amber">OWNLY chịu 100%</td>
                              </tr>
                              <tr>
                                <td className="p-4">
                                  <p className="font-semibold text-ink">Khách thay đổi nhu cầu</p>
                                  <p className="text-xs text-graphite/80 mt-1 leading-relaxed">Chỉ áp dụng hàng chưa custom</p>
                                </td>
                                <td className="p-4 text-graphite font-light">Cùng mẫu khác màu hoặc sản phẩm giá trị tương đương</td>
                                <td className="p-4 text-graphite/85 font-light">Khách hàng chịu</td>
                              </tr>
                              <tr>
                                <td className="p-4">
                                  <p className="font-semibold text-ink">Lỗi nhà sản xuất</p>
                                  <p className="text-xs text-graphite/80 mt-1 leading-relaxed">Hàng NCC</p>
                                </td>
                                <td className="p-4 text-graphite font-light">Đổi sản phẩm tương đương</td>
                                <td className="p-4 font-semibold text-amber">OWNLY chịu 100%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        {/* MOBILE LIST */}
                        <div className="md:hidden space-y-4 font-sans text-[13.5px]" id="warranty-table-mobile">
                          {/* Item 1 */}
                          <div className="bg-paper border border-sand/30 rounded-lg p-5 space-y-3 shadow-xs">
                            <div className="flex justify-between items-center border-b border-sand/20 pb-2">
                              <span className="font-semibold text-ink text-[14px]">Lỗi từ OWNLY</span>
                              <span className="text-[10px] bg-amber/10 text-amber font-semibold font-mono py-0.5 px-2.5 rounded-full uppercase tracking-wider">OWNLY 100%</span>
                            </div>
                            <p className="text-graphite font-light leading-relaxed text-[12.5px]">Sai mẫu/màu, lỗi kỹ thuật, hỏng khi vận chuyển</p>
                            <p className="text-[12px] text-graphite"><strong className="font-medium text-ink">Đổi mới:</strong> Đổi sản phẩm tương đương</p>
                          </div>
                          
                          {/* Item 2 */}
                          <div className="bg-paper border border-sand/30 rounded-lg p-5 space-y-3 shadow-xs">
                            <div className="flex justify-between items-center border-b border-sand/20 pb-2">
                              <span className="font-semibold text-ink text-[14px]">Khách thay đổi nhu cầu</span>
                              <span className="text-[10px] bg-neutral-100 text-graphite font-semibold font-mono py-0.5 px-2.5 rounded-full uppercase tracking-wider">Khách chịu</span>
                            </div>
                            <p className="text-graphite font-light leading-relaxed text-[12.5px]">Chỉ áp dụng hàng chưa custom</p>
                            <p className="text-[12px] text-graphite"><strong className="font-medium text-ink">Đổi mới:</strong> Cùng mẫu khác màu hoặc sản phẩm giá trị tương đương</p>
                          </div>

                          {/* Item 3 */}
                          <div className="bg-paper border border-sand/30 rounded-lg p-5 space-y-3 shadow-xs">
                            <div className="flex justify-between items-center border-b border-sand/20 pb-2">
                              <span className="font-semibold text-ink text-[14px]">Lỗi nhà sản xuất</span>
                              <span className="text-[10px] bg-amber/10 text-amber font-semibold font-mono py-0.5 px-2.5 rounded-full uppercase tracking-wider">OWNLY 100%</span>
                            </div>
                            <p className="text-graphite font-light leading-relaxed text-[12.5px]">Hàng NCC</p>
                            <p className="text-[12px] text-graphite"><strong className="font-medium text-ink">Đổi mới:</strong> Đổi sản phẩm tương đương</p>
                          </div>
                        </div>

                        {/* Proof Callout Box */}
                        <div className="border border-sand/40 bg-cream/20 p-5 rounded-lg text-[13.5px] text-graphite/90 flex items-start gap-3 mt-4">
                          <AlertCircle className="w-4.5 h-4.5 text-amber shrink-0 mt-0.5 stroke-[1.5]" />
                          <p className="leading-relaxed font-light">
                            Yêu cầu video mở hộp khi nhận hàng làm bằng chứng hợp lệ.
                          </p>
                        </div>
                      </div>

                      {/* SECTION 3: KHONG AP DUNG DOI HANG */}
                      <div className="space-y-6">
                        <h3 className="text-[18px] sm:text-[20px] font-display font-medium text-ink tracking-wide uppercase flex items-center gap-4">
                          <span className="w-10 h-10 rounded-full bg-neutral-100 text-graphite flex items-center justify-center font-bold text-[15px] font-mono shrink-0">03</span>
                          KHÔNG ÁP DỤNG ĐỔI HÀNG
                        </h3>

                        <div className="bg-paper border border-sand/30 rounded-lg p-5 sm:p-8 space-y-4 shadow-xs">
                          <ul className="space-y-5 text-[14px] sm:text-[15px] text-graphite font-sans font-light">
                            <li className="flex items-start gap-3.5">
                              <span className="text-red-500 mt-1 shrink-0">
                                <X className="w-4 h-4 stroke-[2]" />
                              </span>
                              <span className="leading-relaxed">
                                Sản phẩm đã custom (khắc laser, logo, thiết kế riêng).
                              </span>
                            </li>
                            <li className="flex items-start gap-3.5">
                              <span className="text-red-500 mt-1 shrink-0">
                                <X className="w-4 h-4 stroke-[2]" />
                              </span>
                              <span className="leading-relaxed">
                                Đã lắp tròng hoặc có dấu hiệu sử dụng.
                              </span>
                            </li>
                            <li className="flex items-start gap-3.5">
                              <span className="text-red-500 mt-1 shrink-0">
                                <X className="w-4 h-4 stroke-[2]" />
                              </span>
                              <span className="leading-relaxed">
                                Không có video mở hộp · Hàng thanh lý/giảm giá · Quá 07 ngày.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* SECTION 4: SAN PHAM GIA CONG THU CONG */}
                      <div className="space-y-6 flex-1">
                        <h3 className="text-[18px] sm:text-[20px] font-display font-medium text-ink tracking-wide uppercase flex items-center gap-4">
                          <span className="w-10 h-10 rounded-full bg-amber/10 text-amber flex items-center justify-center font-bold text-[15px] font-mono shrink-0">04</span>
                          SẢN PHẨM GIA CÔNG THỦ CÔNG
                        </h3>

                        <div className="bg-paper border border-sand/30 rounded-lg p-5 sm:p-8 space-y-4 shadow-xs font-sans text-[14px] sm:text-[15px]">
                          <div className="border border-sand/40 bg-cream/20 p-5 rounded-lg text-[13.5px] text-graphite/90 flex items-start gap-3 italic">
                            <UserCheck className="w-4.5 h-4.5 text-amber shrink-0 mt-0.5" />
                            <span className="font-light leading-relaxed">
                                Tất cả đơn hàng gia công thủ công yêu cầu khách xác nhận kiểu dáng, màu sắc và thông số trước khi sản xuất. Sau khi xác nhận, OWNLY không chịu trách nhiệm với khiếu nại liên quan đến các thông số đã được duyệt.
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* SECTION 5: HOAN TIEN */}
                      <div className="space-y-6">
                        <h3 className="text-[18px] sm:text-[20px] font-display font-medium text-ink tracking-wide uppercase flex items-center gap-4">
                          <span className="w-10 h-10 rounded-full bg-amber/10 text-amber flex items-center justify-center font-bold text-[15px] font-mono shrink-0">05</span>
                          CHÍNH SÁCH HOÀN TIỀN
                        </h3>

                        <div className="bg-paper border border-sand/30 rounded-lg p-5 sm:p-8 space-y-4 shadow-xs font-sans text-[14px] sm:text-[15px]">
                          <div className="border border-sand/40 bg-cream/20 p-5 rounded-lg text-[13.5px] text-graphite/90 flex items-start gap-3 leading-relaxed">
                            <Info className="w-4.5 h-4.5 text-amber shrink-0 mt-0.5 stroke-[1.5]" />
                            <p className="font-light leading-relaxed">
                              OWNLY không áp dụng hoàn tiền. Nếu lỗi từ OWNLY nhưng không còn sản phẩm thay thế, OWNLY hỗ trợ đổi sang sản phẩm giá trị tương đương. Nếu không thể cung cấp trong 30 ngày, hai bên thỏa thuận phương án phù hợp.
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* RIGHT COLUMN: RECYCLE STEP PROCESS */}
                    <div className="lg:col-span-4 space-y-8">
                      
                      {/* PROCESS CARD */}
                      <div className="border border-sand/30 bg-cream/10 rounded-lg p-6 sm:p-8 space-y-6 shadow-xs">
                        <div className="space-y-2 border-b border-sand/20 pb-5">
                          <h4 className="text-[16px] font-display font-medium text-ink tracking-wide uppercase">
                            Quy trình đổi trả hàng
                          </h4>
                        </div>

                        <div className="space-y-6">
                          
                          {/* Step 1 */}
                          <div className="flex gap-4 items-center">
                            <span className="font-display italic text-[24px] text-amber font-light leading-none shrink-0 w-8">01</span>
                            <div className="space-y-1">
                              <h5 className="text-[14px] font-medium text-ink leading-relaxed">Liên hệ OWNLY kèm hóa đơn, mô tả vấn đề và video/ảnh sản phẩm.</h5>
                            </div>
                          </div>

                          {/* Step 2 */}
                          <div className="flex gap-4 items-center">
                            <span className="font-display italic text-[24px] text-amber font-light leading-none shrink-0 w-8">02</span>
                            <div className="space-y-1">
                              <h5 className="text-[14px] font-medium text-ink leading-relaxed">OWNLY xác nhận và phản hồi trong 2 ngày làm việc.</h5>
                            </div>
                          </div>

                          {/* Step 3 */}
                          <div className="flex gap-4 items-center">
                            <span className="font-display italic text-[24px] text-amber font-light leading-none shrink-0 w-8">03</span>
                            <div className="space-y-1">
                              <h5 className="text-[14px] font-medium text-ink leading-relaxed">Gửi sản phẩm về OWNLY theo hướng dẫn.</h5>
                            </div>
                          </div>

                          {/* Step 4 */}
                          <div className="flex gap-4 items-center">
                            <span className="font-display italic text-[24px] text-amber font-light leading-none shrink-0 w-8">04</span>
                            <div className="space-y-1">
                              <h5 className="text-[14px] font-medium text-ink leading-relaxed">Nhận hàng đổi trong 5–7 ngày làm việc.</h5>
                            </div>
                          </div>

                        </div>
                      </div>

                      {/* CALL CENTER CARD */}
                      <div className="bg-paper text-ink rounded-lg p-6 sm:p-8 space-y-6 shadow-xs border border-sand/30 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle,rgba(217,165,19,0.06)_0%,transparent_70%)] -mr-10 -mt-10 pointer-events-none" />
                        
                        <div className="space-y-1.5 relative z-10 text-center">
                          <h4 className="text-[16px] sm:text-[18px] font-display font-medium tracking-wide text-ink">Trung Tâm Hỗ Trợ</h4>
                        </div>
                        
                        <div className="space-y-3 pt-2 text-[13.5px] relative z-10 w-full">
                          <div className="flex items-center gap-4 bg-cream/10 p-4 rounded-xl border border-sand/20 hover:border-sand/40 transition-colors w-full">
                            <div className="w-10 h-10 rounded-full bg-cream/30 flex items-center justify-center shrink-0">
                              <Phone className="w-4 h-4 text-amber stroke-[1.5]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-muted text-[10px] uppercase tracking-wider font-mono mb-0.5">Hotline trực tiếp</p>
                              <a href="tel:0886891273" className="text-ink hover:text-amber font-medium text-[15px] sm:text-[16px] transition-colors block truncate w-full">0886 891 273</a>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 bg-cream/10 p-4 rounded-xl border border-sand/20 hover:border-sand/40 transition-colors w-full">
                            <div className="w-10 h-10 rounded-full bg-cream/30 flex items-center justify-center shrink-0">
                              <Mail className="w-4 h-4 text-amber stroke-[1.5]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-muted text-[10px] uppercase tracking-wider font-mono mb-0.5">Hộp thư điện tử</p>
                              <a href="mailto:ownlycustomlab@gmail.com" className="text-ink hover:text-amber font-medium text-[15px] sm:text-[16px] transition-colors block truncate w-full">ownlycustomlab@gmail.com</a>
                            </div>
                          </div>
                        </div>

                        <div className="text-[12.5px] text-muted/80 text-center italic font-light pt-2">
                          Chính sách có thể được cập nhật theo từng thời điểm.
                        </div>
                      </div>

                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
