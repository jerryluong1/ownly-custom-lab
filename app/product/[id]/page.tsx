"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Demo data
const allProducts = [
  { id: 1, name: "Lilly 3728", frame: "3728", collectionSlug: "bst-kim-loai-co-dien", collectionTitle: "BST KIM LOẠI CỔ ĐIỂN" },
  { id: 2, name: "Lilly 3730", frame: "3730", collectionSlug: "bst-kim-loai-co-dien", collectionTitle: "BST KIM LOẠI CỔ ĐIỂN" },
  { id: 3, name: "Lilly 3727", frame: "3727", collectionSlug: "bst-kim-loai-co-dien", collectionTitle: "BST KIM LOẠI CỔ ĐIỂN" },
  { id: 4, name: "Lilly 3729", frame: "3729", collectionSlug: "bst-kim-loai-co-dien", collectionTitle: "BST KIM LOẠI CỔ ĐIỂN" },
  { id: 5, name: "Carolina 3714", frame: "3714", collectionSlug: "bst-kinh-mat-dieu-khac-2024", collectionTitle: "BST KÍNH MÁT ĐIÊU KHẮC (2024)" },
  { id: 6, name: "Carolina 3713", frame: "3713", collectionSlug: "bst-kinh-mat-dieu-khac-2024", collectionTitle: "BST KÍNH MÁT ĐIÊU KHẮC (2024)" },
  { id: 7, name: "Carolina 3711", frame: "3711", collectionSlug: "bst-kinh-mat-dieu-khac-2024", collectionTitle: "BST KÍNH MÁT ĐIÊU KHẮC (2024)" },
  { id: 8, name: "Carolina 3712", frame: "3712", collectionSlug: "bst-kinh-mat-dieu-khac-2024", collectionTitle: "BST KÍNH MÁT ĐIÊU KHẮC (2024)" },
  { id: 9, name: "Flavour 3709", frame: "3709", collectionSlug: "bst-acetate-nguyen-ban", collectionTitle: "BST ACETATE NGUYÊN BẢN" },
  { id: 10, name: "Flavour 3706", frame: "3706", collectionSlug: "bst-acetate-nguyen-ban", collectionTitle: "BST ACETATE NGUYÊN BẢN" },
  { id: 11, name: "Flavour 3705", frame: "3705", collectionSlug: "bst-acetate-nguyen-ban", collectionTitle: "BST ACETATE NGUYÊN BẢN" },
  { id: 12, name: "Flavour 3707", frame: "3707", collectionSlug: "bst-acetate-nguyen-ban", collectionTitle: "BST ACETATE NGUYÊN BẢN" },
  { id: 13, name: "Sablè 3692", frame: "3692", collectionSlug: "bst-kim-loai-co-dien", collectionTitle: "BST KIM LOẠI CỔ ĐIỂN" },
  { id: 14, name: "Sablè 3689", frame: "3689", collectionSlug: "bst-kim-loai-co-dien", collectionTitle: "BST KIM LOẠI CỔ ĐIỂN" },
  { id: 15, name: "Sablè 3691", frame: "3691", collectionSlug: "bst-kim-loai-co-dien", collectionTitle: "BST KIM LOẠI CỔ ĐIỂN" },
  { id: 16, name: "Sablè 3690", frame: "3690", collectionSlug: "bst-kim-loai-co-dien", collectionTitle: "BST KIM LOẠI CỔ ĐIỂN" },
];

const mockImages = [
  "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80"
];

export default function ProductDetailPage() {
  const pathname = usePathname();
  const router = useRouter();
  const id = pathname.split("/").pop() || "1";
  
  const currentProductIndex = allProducts.findIndex(p => p.id.toString() === id);
  const validIndex = currentProductIndex !== -1 ? currentProductIndex : 0;
  const currentProductData = allProducts[validIndex];
  
  const product = { 
    name: currentProductData.name, 
    frame: currentProductData.frame, 
    collectionTitle: currentProductData.collectionTitle,
    collectionSlug: currentProductData.collectionSlug,
    size: "54 - 16 - 145", 
    images: mockImages 
  };
  
  const prevProductId = allProducts[(validIndex - 1 + allProducts.length) % allProducts.length].id;
  const nextProductId = allProducts[(validIndex + 1) % allProducts.length].id;
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-paper font-sans flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          {/* Breadcrumb & Navigation */}
          <div className="flex justify-between items-center text-[13px] md:text-[14px] font-medium text-graphite mb-16 tracking-wide">
            <div>
              <Link href="/catalogue" className="hover:text-amber transition-colors">Catalogue</Link>
              <span className="mx-2">/</span>
              <Link href={`/catalogue/${product.collectionSlug}`} className="hover:text-amber transition-colors">{product.collectionTitle}</Link>
              <span className="mx-2">/</span>
              <span className="text-ink">{product.name}</span>
            </div>
            <div className="flex items-center gap-3 md:gap-5">
              <Link href={`/product/${prevProductId}`} className="flex items-center hover:text-amber transition-colors group">
                <ChevronLeft className="w-4 h-4 mr-1 text-graphite/50 group-hover:text-amber transition-colors" />
                <span className="uppercase text-xs tracking-wider">Trước</span>
              </Link>
              <span className="text-graphite/30">|</span>
              <Link href={`/product/${nextProductId}`} className="flex items-center hover:text-amber transition-colors group">
                <span className="uppercase text-xs tracking-wider">Tiếp</span>
                <ChevronRight className="w-4 h-4 ml-1 text-graphite/50 group-hover:text-amber transition-colors" />
              </Link>
            </div>
          </div>

          {/* Product Image Slider */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] mb-8 bg-transparent">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Slider Controls */}
            <button 
              className="absolute inset-y-0 left-0 w-20 flex items-center justify-start pl-2 md:pl-6 group cursor-pointer outline-none" 
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8 text-graphite/40 group-hover:text-amber transition-colors duration-300" strokeWidth={1.5} />
            </button>
            <button 
              className="absolute inset-y-0 right-0 w-20 flex items-center justify-end pr-2 md:pr-6 group cursor-pointer outline-none" 
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8 text-graphite/40 group-hover:text-amber transition-colors duration-300" strokeWidth={1.5} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mb-20">
            {product.images.map((_: any, idx: number) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-[6px] h-[6px] rounded-full transition-all duration-300 ${
                  idx === currentImageIndex 
                    ? "bg-ink scale-125" 
                    : "bg-transparent border border-graphite/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Product Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="text-[28px] md:text-[32px] font-sans font-medium text-ink tracking-tight mb-8">
              {product.name}
            </h1>
            
            <div className="text-[14px] md:text-[15px] font-light text-graphite leading-relaxed tracking-wide space-y-4 mb-10">
              <p>
                Kế thừa bản sắc thuần túy: thực sự nữ tính, hiện đại và lôi cuốn. Một thiết kế đương đại với những sắc màu cập nhật xu hướng mới nhất, được định vị để trở thành một sản phẩm được săn đón.
              </p>
              <p>
                {product.name} không tạo ra sự phô trương, mà mang đến sự gắn kết hài hòa. Chiếc kính đánh dấu một chương quan trọng trong bộ sưu tập của chúng tôi bằng sự thanh lịch và sức hút mạnh mẽ trên thị trường.
              </p>
            </div>

            <div className="text-[13px] md:text-[14px] font-sans font-medium text-graphite tracking-wide space-y-1">
              <p>Frame: {product.frame}</p>
              <p>Size available: {product.size}</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
