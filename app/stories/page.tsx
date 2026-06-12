"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const stories = [
  {
    id: 1,
    title: "11 HÀNG GAI",
    date: "Tháng 3 01, 2024",
    category: "STYLE & STORIES",
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80",
    slug: "11-hang-gai",
  },
  {
    id: 2,
    title: "Nơi Nắng Về: Xưởng Chế Tác",
    date: "Tháng 9 28, 2023",
    category: "NICE THINGS",
    image: "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&q=80",
    slug: "noi-nang-ve-xuong-che-tac",
  },
  {
    id: 3,
    title: "Viết Về Kính Mát Hà Nội",
    date: "Tháng 9 28, 2023",
    category: "NICE THINGS",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80",
    slug: "viet-ve-kinh-mat-ha-noi",
  },
  {
    id: 4,
    title: "Nghệ Thuật Đánh Bóng Acetate",
    date: "Tháng 9 28, 2023",
    category: "NICE THINGS",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80",
    slug: "nghe-thuat-danh-bong-acetate",
  },
  {
    id: 5,
    title: "Góc Nhỏ Của Thợ Kính",
    date: "Tháng 9 25, 2023",
    category: "STYLE & STORIES",
    image: "https://images.unsplash.com/photo-1508296695146-257a814050b4?auto=format&fit=crop&q=80",
    slug: "goc-nho-cua-tho-kinh",
  },
  {
    id: 6,
    title: "Từ Bản Vẽ Đến Gọng Kính",
    date: "Tháng 9 25, 2023",
    category: "STYLE & STORIES",
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80",
    slug: "tu-ban-ve-den-gong-kinh",
  },
];

export default function StoriesPage() {
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
              STORIES
            </h1>
            <p className="text-[16px] md:text-[18px] text-graphite/80 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              Những câu chuyện đằng sau nghệ thuật chế tác và nguồn cảm hứng tạo nên các bộ sưu tập kính mắt thủ công.
            </p>
          </motion.div>

          {/* Grid Section */}
          <div className="space-y-6">
            <h2 className="text-[15px] font-light text-graphite/70 mb-6 font-sans">
              Latest
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
              {stories.map((item, index) => (
                <Link href={`/stories/${item.slug}`} key={item.id} className="block">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer flex flex-col"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand/20 mb-5 rounded-[4px]">
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
