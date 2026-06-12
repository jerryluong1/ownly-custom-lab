"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const collections = [
  {
    id: 1,
    title: "BST ACETATE NGUYÊN BẢN",
    date: "Tháng 3, 2025",
    category: "GỌNG KÍNH THỦ CÔNG",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80",
    slug: "bst-acetate-nguyen-ban"
  },
  {
    id: 2,
    title: "BST KIM LOẠI CỔ ĐIỂN",
    date: "Tháng 12, 2024",
    category: "THĂNG HOA CHẤT LIỆU",
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80",
    slug: "bst-kim-loai-co-dien"
  },
  {
    id: 3,
    title: "BST KÍNH MÁT ĐIÊU KHẮC (2024)",
    date: "Tháng 9, 2024",
    category: "NGHỆ THUẬT ÁNH SÁNG",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80",
    slug: "bst-kinh-mat-dieu-khac-2024"
  },
];

export default function CataloguePage() {
  return (
    <div className="min-h-screen bg-paper font-sans flex flex-col">
      <Header />
      
      <main className="flex-1 w-full pt-48 pb-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-32"
          >
            <h1 className="text-[40px] md:text-[56px] font-display font-semibold text-ink tracking-tight mb-4 uppercase">
              LOOKBOOK & PRODUCT
            </h1>
            <p className="text-[16px] md:text-[18px] text-graphite/80 font-light tracking-wide">
              Thông tin sản phẩm các BST của OWNLYCUSTOMLAB
            </p>
          </motion.div>

          {/* Grid Section */}
          <div className="space-y-6">
            <h2 className="text-[15px] font-light text-graphite/70 mb-6 font-sans">
              Latest
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
              {collections.map((item, index) => (
                <Link href={`/catalogue/${item.slug}`} key={item.id} className="block">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer flex flex-col"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand/20 mb-5">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        referrerPolicy="no-referrer"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="px-1">
                      <h3 className="text-[15px] font-semibold text-ink uppercase tracking-wide mb-1 transition-colors group-hover:text-amber">
                        {item.title}
                      </h3>
                      <p className="text-[14px] text-graphite/60 font-light uppercase tracking-wider text-xs">
                        {item.date} — {item.category}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
