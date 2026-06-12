import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  PlaySquare,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-[#111111] text-white pt-[120px] pb-[40px] px-6 xl:px-0 font-raleway">
      <div className="max-w-[1170px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:gap-[120px] mb-[60px]">
          {/* Logo Section */}
          <div className="mb-12 lg:mb-0 shrink-0">
            <div className="flex items-center h-full pt-2">
              <Image 
                src="/ownly-custom-lab/logo.png" 
                alt="Baoquang Optic Logo" 
                width={280} 
                height={70}
                className="h-16 md:h-20 w-auto opacity-90"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between w-full gap-12 lg:gap-[100px]">
            {/* About Us */}
            <div className="flex-1 max-w-[500px]">
              <h3 className="text-[14px] font-bold tracking-[0.1em] uppercase mb-6 pb-4 border-b border-white/20">
                Về chúng tôi
              </h3>
              <div className="text-[14px] text-white/80 leading-relaxed space-y-6">
                <p>
                  OWNLY Custom Lab là studio kính mắt tùy chỉnh — nơi mỗi chiếc
                  kính được thiết kế riêng cho từng khuôn mặt, từng phong cách
                  và từng cá tính.
                </p>
                <div className="space-y-3">
                  <div className="flex gap-6">
                    <span className="w-[60px] text-white/50">Hotline</span>
                    <span className="text-white">0886891273</span>
                  </div>
                  <div className="flex gap-6">
                    <span className="w-[60px] text-white/50">Email</span>
                    <span className="text-white">ownlycustomlab@gmail.com</span>
                  </div>
                  <div className="flex gap-6 items-start">
                    <span className="w-[60px] text-white/50">Studio</span>
                    <div className="flex flex-col gap-2 pt-[2px]">
                      <span className="text-white font-medium">Hải Phòng</span>
                      <span className="text-[#D8C795] border border-[#D8C795]/30 rounded-full px-3 py-1 text-[12px] bg-[#D8C795]/10 self-start mt-1">
                        TP.HCM — Sắp khai trương
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="w-full md:w-[240px] shrink-0">
              <h3 className="text-[14px] font-bold tracking-[0.1em] uppercase mb-6 pb-4 border-b border-white/20">
                Mạng xã hội
              </h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center gap-3 text-[13px] text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-[24px] h-[24px] rounded-full bg-[#1877F2] flex items-center justify-center text-white">
                    <Facebook className="w-3.5 h-3.5 fill-current" />
                  </div>
                  Facebook
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-[13px] text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-[24px] h-[24px] rounded-full bg-black flex items-center justify-center text-white border border-white/20">
                    <PlaySquare className="w-3.5 h-3.5 fill-current" />
                  </div>
                  Tiktok
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-[13px] text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-[24px] h-[24px] rounded-[6px] bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#C13584] flex items-center justify-center text-white">
                    <Instagram className="w-4 h-4" />
                  </div>
                  Instagram
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-[13px] text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-[24px] h-[24px] rounded-full bg-[#FF0000] flex items-center justify-center text-white">
                    <Youtube className="w-3.5 h-3.5 fill-current" />
                  </div>
                  Youtube
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-[13px] text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-[24px] h-[24px] rounded-[6px] bg-[#0068FF] flex items-center justify-center text-white font-bold text-[10px]">
                    Zalo
                  </div>
                  Zalo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-[30px] border-t border-white/20 text-[12px] text-white/60">
          <p>Copyright © 2025 OWNLYCUSTOMLAB. All Rights Reserved</p>
          <a href="#" className="hover:text-white transition-colors">
            Điều khoản dịch vụ
          </a>
        </div>
      </div>
    </footer>
  );
}
