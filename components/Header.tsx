"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  Search, 
  X, 
  QrCode, 
  Check, 
  Copy, 
  ExternalLink,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type ModalState = {
  isOpen: boolean;
  type: "zalo" | "search" | "mobileMenu";
};

type SearchItem = {
  title: string;
  description: string;
  url: string;
  category: string;
};

const searchDatabase: SearchItem[] = [
  {
    title: "Trang Chủ - OWNLY Custom Lab",
    description: "Nhà sản xuất gọng kính thiết kế đơn bản, đo ni khuôn mặt đầu tiên tại Việt Nam.",
    url: "/",
    category: "Trang chủ"
  },
  {
    title: "Về Chúng Tôi - OWNLY",
    description: "Khám phá câu chuyện đằng sau studio chế tác kính mắt thiết kế thủ công hàng đầu.",
    url: "/about",
    category: "Về chúng tôi"
  },
  {
    title: "Công nghệ Orbit Showcase (Catalogue đặc trưng)",
    description: "Chiêm ngưỡng gọng kính Acetate cao cấp xoay 360 độ cực kỳ sắc sảo.",
    url: "/#orbit-showcase",
    category: "Catalogue"
  },
  {
    title: "Lookbook Collection 2025",
    description: "Bộ sưu tập những mẫu thiết kế gọng kính tinh tế, sang trọng và cá tính.",
    url: "/#lookbook",
    category: "Thiết kế"
  },
  {
    title: "Quy trình chế tác gọng kính 5 bước",
    description: "Cách đo đạc tỷ lệ khuôn mặt và tiện cắt tay tấm nhựa Acetate sinh học.",
    url: "/#customization",
    category: "Dịch vụ"
  },
  {
    title: "Catalogue đã chế tác - What We Made",
    description: "Thư viện lưu giữ những gọng kính thời trang độc bản hoàn thiện cho từng khách hàng.",
    url: "/#what-we-made",
    category: "Catalogue"
  },
              {
    title: "Cơ Hội Hợp Tác - OWNLY Custom Lab",
    description: "Đăng ký trở thành đại lý, đối tác nhượng quyền, hoặc nhà thiết kế đồng sáng tạo cùng OWNLY.",
    url: "/partnership",
    category: "Hợp Tác"
  },
  {
    title: "Chất liệu Acetate Sinh học cao cấp",
    description: "Chất liệu nhập khẩu bền bỉ, dễ đánh bóng móng và tạo hoa vân tự nhiên.",
    url: "/about#story-museum-card",
    category: "Chất liệu"
  },
  {
    title: "Cộng đồng Zalo Custom Lab",
    description: "Nơi trao đổi, kết nối những tín đồ thời trang gọng kính đo chỉ số khuôn mặt lẻ.",
    url: "/about#join-us-section",
    category: "Cộng đồng"
  },
  {
    title: "Chế tác thủ công tùy chỉnh",
    description: "Gia công tỷ mỷ từng milimét gọng kính, thổi hồn cá tính riêng biệt cho sản phẩm.",
    url: "/about#story-museum-card",
    category: "Ưu điểm"
  }
];

export default function Header() {
  const pathname = usePathname();
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    type: "zalo",
  });
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const lastScrollY = useRef(0);

  // Scroll detection logic: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Class change state at top
      if (currentScrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide/Show mechanism
      if (currentScrollY <= 80) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down -> hide
        setShowHeader(false);
      } else {
        // Scrolling up -> show
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://zalo.me/g/ownly-custom-lab");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openModal = (type: "zalo" | "search" | "mobileMenu") => {
    setModal({ isOpen: true, type });
    if (type === "search") {
      setSearchQuery("");
    }
  };

  const closeModal = () => {
    setModal({ isOpen: false, type: "zalo" });
  };

  // Filter search database
  const filteredResults = searchQuery.trim() === "" 
    ? [] 
    : searchDatabase.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* HEADER */}
      <header 
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 bg-white border-b border-sand/60 shadow-[0_4px_30px_rgba(0,0,0,0.06)] ${
          scrolled ? "py-3 md:py-4" : "py-4 md:py-5"
        } ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
        id="main-site-header"
      >
        <div className="w-full max-w-[1170px] mx-auto flex justify-between items-center px-6 xl:px-0">
          <div className="flex-shrink-0" id="header-logo-container">
            <a href="/" className="flex items-center hover:opacity-85 transition-opacity">
              <Image 
                src="/logo.png" 
                alt="Baoquang Optic Logo" 
                width={200} 
                height={60} 
                className="object-contain w-auto h-[44px] md:h-[48px]"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          <div className="flex items-center gap-10" id="header-nav-container">
            <nav className="hidden xl:flex items-center gap-[34px] text-[15px] font-medium tracking-wide whitespace-nowrap text-graphite font-raleway">
              <a 
                href="/" 
                className={`transition-colors relative py-1 ${
                  isActive("/") 
                    ? "text-amber font-semibold after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1.5px] after:bg-amber" 
                    : "hover:text-amber"
                }`}
              >
                Trang Chủ
              </a>
              <a 
                href="/about" 
                className={`transition-colors relative py-1 ${
                  isActive("/about") 
                    ? "text-amber font-semibold after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1.5px] after:bg-amber" 
                    : "hover:text-amber"
                }`}
              >
                Về Chúng Tôi
              </a>
              <a 
                href="/catalogue" 
                className={`transition-colors relative py-1 ${
                  isActive("/catalogue") 
                    ? "text-amber font-semibold after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1.5px] after:bg-amber" 
                    : "hover:text-amber"
                }`}
              >
                Catalogue
              </a>
              <a 
                href="/stories" 
                className={`transition-colors relative py-1 ${
                  isActive("/stories") 
                    ? "text-amber font-semibold after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1.5px] after:bg-amber" 
                    : "hover:text-amber"
                }`}
              >
                Stories
              </a>
              <a href="/partnership" className={`transition-colors relative py-1 ${isActive("/partnership") ? "text-amber font-semibold after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1.5px] after:bg-amber" : "hover:text-amber"}`}>Hợp Tác</a>
              <a href="/warranty" className={`transition-colors relative py-1 ${isActive("/warranty") ? "text-amber font-semibold after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1.5px] after:bg-amber" : "hover:text-amber"}`}>Chính Sách Bảo Hành</a>
              <a href="/contact" className={`transition-colors relative py-1 ${isActive("/contact") ? "text-amber font-semibold after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1.5px] after:bg-amber" : "hover:text-amber"}`}>Liên Hệ</a>
            </nav>

            <div className="flex items-center gap-6">
              <button 
                onClick={() => openModal("mobileMenu")}
                className="xl:hidden hover:text-amber transition-colors text-ink"
                aria-label="Toggle Menu"
                id="mobile-header-menu-btn"
              >
                <Menu className="w-6 h-6" />
              </button>
              <button 
                onClick={() => openModal("search")}
                className="hover:text-amber transition-colors hidden md:block text-ink"
                aria-label="Search"
                id="header-search-btn"
              >
                <Search className="w-[22px] h-[22px]" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MODAL SYSTEM (AnimatePresence) */}
      <AnimatePresence>
        {modal.isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink/75 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
            onClick={closeModal}
            id="global-modal-overlay"
          >
            {modal.type !== "mobileMenu" && (
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 text-sand/65 hover:text-white transition-colors p-2 z-[110]"
                aria-label="Close modal"
              >
                <X className="w-8 h-8" />
              </button>
            )}

            {/* Zalo Modal */}
            {modal.type === "zalo" && (
              <motion.div 
                initial={{ scale: 0.93, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.93, opacity: 0, y: 15 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="bg-paper border border-sand rounded-xl p-6 md:p-8 max-w-sm w-full text-center space-y-5 relative overflow-hidden shadow-xl"
                onClick={(e) => e.stopPropagation()}
                id="global-zalo-modal"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber to-ginger" />
                
                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-amber font-bold">Zalo Community</span>
                  <h3 className="text-[20px] font-bold text-ink tracking-tight">Kênh Cộng Đồng OWNLY</h3>
                  <p className="text-[12px] text-graphite/90 font-light leading-relaxed">
                    Kết nối, cập nhật nhanh nhất các thông báo, sự kiện giới thiệu bộ sưu tập và thông tin ưu đãi độc bản của chúng tôi.
                  </p>
                </div>

                {/* Stylized simulated QR Code Container */}
                <div className="relative w-44 h-44 mx-auto bg-white p-3 rounded-lg border border-sand flex items-center justify-center group shadow-md">
                  <div className="relative w-full h-full border-2 border-slate-100 flex flex-col justify-between p-2">
                    <div className="flex justify-between">
                      <div className="w-7 h-7 border-4 border-black" />
                      <div className="w-7 h-7 border-4 border-black" />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="font-bold text-[9px] text-black tracking-widest font-mono">OWNLY</div>
                      <div className="w-16 h-1.5 bg-black rounded-sm" />
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="w-7 h-7 border-4 border-black" />
                      <div className="w-3.5 h-3.5 bg-amber rounded-full" />
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-ink/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center rounded-lg">
                    <QrCode className="w-7 h-7 text-cream mb-2" />
                    <p className="text-[10px] text-white/90 font-medium">Bật camera điện thoại quét mã kết nối</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Copy field */}
                  <div className="bg-cream/40 border border-sand rounded p-2.5 flex items-center justify-between gap-2 text-left">
                    <span className="text-[11px] text-graphite font-mono truncate select-all">
                      https://zalo.me/g/ownly-custom-lab
                    </span>
                    <button 
                      onClick={handleCopyLink}
                      className="py-1 px-2 text-[10px] font-semibold bg-amber/10 hover:bg-amber/20 text-amber border border-amber/20 rounded transition-all flex items-center gap-1"
                      title="Sao chép địa chỉ liên kết"
                    >
                      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      <span>{copied ? "Đã chép" : "Chép ID"}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <button 
                      onClick={closeModal}
                      className="py-2.5 px-3 border border-sand hover:bg-cream/35 text-[12px] uppercase tracking-wider font-semibold rounded text-graphite"
                    >
                      Đóng
                    </button>
                    <a 
                      href="https://zalo.me/g/ownly-custom-lab" 
                      target="_blank" 
                      rel="noreferrer noopener"
                      className="py-2.5 px-3 bg-amber hover:bg-ginger text-[12px] uppercase tracking-wider font-semibold rounded text-white flex items-center justify-center gap-1 shadow-md"
                    >
                      <span>Mở Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Search Modal (Global & Real-time Coverage) */}
            {modal.type === "search" && (
              <motion.div 
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                className="bg-paper border border-sand rounded-xl p-6 max-w-xl w-full relative shadow-2xl flex flex-col max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
                id="global-search-modal"
              >
                <div className="flex items-center gap-3 border-b border-sand pb-4">
                  <Search className="w-5 h-5 text-amber shrink-0" />
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm kiếm nội dung, sản phẩm, chất liệu Acetate..." 
                    className="bg-transparent outline-none border-none text-[15px] text-ink w-full placeholder-graphite/45 font-sans"
                    autoFocus
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="text-graphite/50 hover:text-ink transition-colors text-[11px] font-mono px-1"
                    >
                      Xóa
                    </button>
                  )}
                </div>

                {/* Search Results Display */}
                <div className="overflow-y-auto mt-4 pr-1 flex-1 space-y-4 max-h-[50vh] scrollbar-thin">
                  {searchQuery.trim() === "" ? (
                    <div className="space-y-4 py-2">
                      <p className="text-[11px] uppercase tracking-widest text-amber font-mono font-bold">Từ khóa gợi ý</p>
                      <div className="flex flex-wrap gap-2">
                        {["Acetate", "Custom", "Showcase", "Lookbook", "Chế tác", "Bảo hành", "Câu chuyện"].map((t) => (
                          <button 
                            key={t} 
                            onClick={() => setSearchQuery(t)}
                            className="px-3 py-1.5 rounded-full bg-cream/50 border border-sand/50 hover:border-amber/40 hover:bg-cream transition-all text-[12px] text-graphite font-medium"
                          >
                            #{t}
                          </button>
                        ))}
                      </div>
                      <div className="pt-2 text-[13px] text-graphite/60 font-light italic">
                        Hãy nhập từ khoá để tìm kiếm mọi chuyên mục, sản phẩm và câu chuyện thủ công trên website của OWNLY Custom Lab.
                      </div>
                    </div>
                  ) : filteredResults.length > 0 ? (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center pb-2 text-[11px] text-graphite/60 font-mono">
                        <span>KẾT QUẢ TÌM KIẾM ({filteredResults.length})</span>
                        <span>Nhấp để di chuyển</span>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {filteredResults.map((item, index) => (
                          <a
                            key={index}
                            href={item.url}
                            onClick={closeModal}
                            className="block p-4 rounded-lg bg-cream/24 border border-sand/40 hover:border-amber/40 hover:bg-cream/60 transition-all group"
                          >
                            <div className="flex justify-between items-start gap-2">
                              <h4 className="text-[15px] font-bold text-ink group-hover:text-amber transition-colors font-sans leading-snug">
                                {item.title}
                              </h4>
                              <span className="text-[9px] font-mono font-bold uppercase py-0.5 px-2 rounded bg-amber/10 text-amber border border-amber/20 whitespace-nowrap">
                                {item.category}
                              </span>
                            </div>
                            <p className="text-[13px] text-graphite/85 font-light mt-1.5 leading-normal">
                              {item.description}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="py-8 text-center space-y-2">
                      <p className="text-graphite font-light text-[14px]">
                        Không tìm thấy nội dung nào khớp với từ khóa <strong className="text-ink">"{searchQuery}"</strong>
                      </p>
                      <p className="text-[12px] text-amber/80 italic font-light">
                        Thử tìm kiếm với: "Acetate", "Lookbook", "Chế tác", "Zalo"
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Mobile Sidebar Navigation */}
            {modal.type === "mobileMenu" && (
              <motion.div 
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ type: "tween", duration: 0.35 }}
                className="absolute right-0 top-0 bottom-0 max-w-[280px] w-full bg-paper border-l border-sand p-6 flex flex-col justify-between text-left"
                onClick={(e) => e.stopPropagation()}
                id="global-mobile-sidebar"
              >
                <div className="space-y-8">
                  <div className="flex justify-between items-center pb-4 border-b border-sand">
                    <Image 
                      src="/logo.png" 
                      alt="Baoquang Optic Logo" 
                      width={130} 
                      height={40} 
                      className="object-contain h-7 w-auto"
                      referrerPolicy="no-referrer"
                    />
                    <button onClick={closeModal} className="text-graphite hover:text-ink hover:scale-105 transition-all p-1" aria-label="Close sidebar">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <nav className="flex flex-col gap-[22px] text-[15px] uppercase tracking-wider font-semibold font-raleway text-graphite">
                    <a href="/" onClick={closeModal} className={`transition-colors ${isActive("/") ? "text-amber" : "hover:text-amber"}`}>Trang chủ</a>
                    <a href="/about" onClick={closeModal} className={`transition-colors ${isActive("/about") ? "text-amber" : "hover:text-amber"}`}>Về chúng tôi</a>
                    <a href="/catalogue" onClick={closeModal} className={`transition-colors ${isActive("/catalogue") ? "text-amber" : "hover:text-amber"}`}>Catalogue</a>
                    <a href="/stories" onClick={closeModal} className={`transition-colors ${isActive("/stories") ? "text-amber" : "hover:text-amber"}`}>Stories</a>
                    <a href="/partnership" onClick={closeModal} className={`transition-colors ${isActive("/partnership") ? "text-amber" : "hover:text-amber"}`}>Hợp Tác</a>
                    <a href="/warranty" onClick={closeModal} className={`transition-colors ${isActive("/warranty") ? "text-amber" : "hover:text-amber"}`}>Chính sách bảo hành</a>
                    <a href="/contact" onClick={closeModal} className={`transition-colors ${isActive("/contact") ? "text-amber" : "hover:text-amber"}`}>Liên hệ</a>
                  </nav>
                </div>

                <div className="space-y-4">
                  <button 
                    onClick={() => openModal("zalo")}
                    className="w-full py-3 bg-amber hover:bg-ginger text-white uppercase text-[11px] tracking-widest font-bold rounded shadow transition-all flex items-center justify-center gap-1.5"
                  >
                    <QrCode className="w-4 h-4" />
                    <span>Nhóm Zalo</span>
                  </button>
                  <p className="text-center text-[10px] text-graphite/50">© 2025 OWNLY Custom Lab</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
