"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

// Demo data for collection details
const collectionsData: Record<string, { title: string; image: string; description: string }> = {
  "bst-acetate-nguyen-ban": {
    title: "BST ACETATE NGUYÊN BẢN",
    description: "Bộ sưu tập mang đậm dấu ấn thủ công với dòng gọng kiếng nguyên bản, tinh xảo trong từng chi tiết chạm khắc.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80",
  },
  "bst-kim-loai-co-dien": {
    title: "BST KIM LOẠI CỔ ĐIỂN",
    description: "Cảm hứng đến từ những thập niên cũ, kết hợp kỹ thuật chế tác kim loại độc bản và hiện đại hơn.",
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80",
  },
  "bst-kinh-mat-dieu-khac-2024": {
    title: "BST KÍNH MÁT ĐIÊU KHẮC (2024)",
    description: "Ánh sáng, hình khối và sự phản chiếu. Một thiết kế ấn tượng kết hợp các yếu tố nghệ thuật điêu khắc.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80",
  }
};

const products = [
  { id: 1, name: "Lilly 3728", image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80", placeholder: true },
  { id: 2, name: "Lilly 3730", image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80", placeholder: true },
  { id: 3, name: "Lilly 3727", image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80", placeholder: true },
  { id: 4, name: "Lilly 3729", image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80", placeholder: true },
  
  { id: 5, name: "Carolina 3714", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80", placeholder: true },
  { id: 6, name: "Carolina 3713", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80", placeholder: true },
  { id: 7, name: "Carolina 3711", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80", placeholder: true },
  { id: 8, name: "Carolina 3712", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80", placeholder: true },
  
  { id: 9, name: "Flavour 3709", image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80", placeholder: true },
  { id: 10, name: "Flavour 3706", image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80", placeholder: true },
  { id: 11, name: "Flavour 3705", image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80", placeholder: true },
  { id: 12, name: "Flavour 3707", image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80", placeholder: true },
  
  { id: 13, name: "Sablè 3692", image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80", placeholder: true },
  { id: 14, name: "Sablè 3689", image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80", placeholder: true },
  { id: 15, name: "Sablè 3691", image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80", placeholder: true },
  { id: 16, name: "Sablè 3690", image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80", placeholder: true },
];

export default function CollectionDetailPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop() || "bst-acetate-nguyen-ban";
  
  const collectionInfo = collectionsData[slug] || collectionsData["bst-acetate-nguyen-ban"];

  return (
    <div className="min-h-screen bg-paper font-sans flex flex-col">
      <Header />
      
      <main className="flex-1 w-full pt-20">
        
        {/* Banner Section */}
        <div className="relative w-full h-[60vh] md:h-[80vh] bg-sand/20 overflow-hidden">
          <Image
            src={collectionInfo.image}
            alt={collectionInfo.title}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-12 md:bottom-24 left-6 md:left-16 max-w-2xl text-white drop-shadow-md"
          >
            <h1 className="text-[32px] md:text-[56px] font-display font-semibold tracking-wide uppercase leading-tight mb-4">
              {collectionInfo.title}
            </h1>
            <p className="text-[16px] md:text-[18px] opacity-90 font-light tracking-wide max-w-xl">
              {collectionInfo.description}
            </p>
          </motion.div>
        </div>

        {/* Product Grid Section */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 md:py-24">
          {/* Breadcrumb Navigation */}
          <div className="text-[13px] md:text-[14px] font-medium text-graphite tracking-wide mb-16">
            <Link href="/catalogue" className="hover:text-amber transition-colors">Catalogue</Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{collectionInfo.title}</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-16">
            {products.map((product, index) => (
              <Link href={`/product/${product.id}`} key={product.id} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group flex flex-col cursor-pointer"
                >
                  {/* Product Image Area */}
                  <div className="relative w-full aspect-[4/3] bg-transparent flex items-center justify-center mb-6 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  {/* Product Details */}
                  <h3 className="text-[13px] md:text-[14px] font-sans font-medium text-graphite text-center tracking-wide group-hover:text-amber transition-colors">
                    {product.name}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-24 md:mt-32 flex justify-center">
            <button className="px-12 py-3 border border-graphite/20 text-graphite hover:border-amber hover:text-amber transition-all duration-300 font-sans text-[13px] tracking-wider uppercase bg-transparent">
              Load More
            </button>
          </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}
