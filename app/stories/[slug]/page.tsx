"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

// Demo data for story details related to eyewear/fashion
const storiesData: Record<string, any> = {
  "11-hang-gai": {
    title: "11 HÀNG GAI",
    subtitle: "Bối cảnh chụp hình BST Gọng Kính Thủ Công",
    date: "1 Thg 03 2024",
    author: "OWNLYCUSTOMLAB",
    category: "STYLE & STORIES",
    heroImage: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80",
    content1: "Có thể bạn chưa biết, bối cảnh thực hiện bộ hình này là một nơi mang đậm linh hồn di sản của Hà Nội.",
    gridImages: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&q=80",
    ],
    content2: "Đây vốn là căn nhà có tuổi đời hơn 100 năm, là tài sản của tổ tiên gia chủ để lại, được xây dựng từ năm 1918 rồi truyền từ đời này qua đời khác. Căn nhà vẫn giữ nguyên những bức hoành phi cổ, câu đối sơn son thếp vàng cùng các vật dụng mộc mạc từ thời xưa. Đây là không gian hoàn hảo để tôn vinh nét đẹp cổ điển, trầm mặc của dòng gọng kính Acetate chế tác thủ công bằng tay của chúng tôi.",
    content3: "Thật may mắn khi giữa lòng phố cổ cổ kính, vẫn còn những góc nhỏ lưu giữ trọn vẹn giá trị xưa cũ như 11 Hàng Gai. Nơi đây vừa là background đậm chất điện ảnh cho bộ sưu tập kính mát, vừa là góc cà phê yên bình để cảm nhận dòng chảy thời gian của Hà Nội.\n\nGhé qua đây, đừng quên tự thưởng cho mình một ly cà phê trứng ấm nóng giữa trời thu Hà Nội nhé xx",
  },
  "noi-nang-ve-xuong-che-tac": {
    title: "NƠI NẮNG VỀ: XƯỞNG CHẾ TÁC",
    subtitle: "Ánh sáng tự nhiên và nhịp điệu của những đôi bàn tay chế tác gọng kính",
    date: "28 Thg 09 2023",
    author: "OWNLYCUSTOMLAB",
    category: "OWN",
    heroImage: "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&q=80",
    content1: "Mỗi buổi sáng khi tia nắng đầu tiên rọi qua khung cửa kính, xưởng chế tác của chúng tôi lại bừng sáng với nhịp điệu rộn ràng của những công cụ.",
    gridImages: [
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80",
    ],
    content2: "Chúng tôi tin rằng, chỉ bằng sự kết hợp hài hoà giữa nguồn nguyên liệu Acetate sinh học thượng hạng và sự kiên nhẫn tối đa của người thợ, một chiếc gọng kính mới thực sự sở hữu phần hồn độc bản. Tại thềm xưởng ngập nắng ở Hải Phòng, từng lát cắt thô mộc dần được đẽo gọt chuẩn xác đến từng milimet để ôm trọn đường nét gương mặt.",
    content3: "Sự thô cứng của chất liệu Acetate hữu cơ biến đổi kỳ diệu dưới đôi bàn tay lành nghề, qua bao vòng mài giũa để đạt độ dẻo dai và mềm mại tối đa khi tiếp xúc với da. Mỗi đường cong, mỗi khớp bản lề đều mang dấu ấn của năng lượng sáng tạo tận tâm.",
  },
  "viet-ve-kinh-mat-ha-noi": {
    title: "VIẾT VỀ KÍNH MÁT HÀ NỘI",
    subtitle: "Bóng dáng những chiếc kính mát thanh lịch trên phố cũ Hà Nội",
    date: "28 Thg 09 2023",
    author: "OWNLYCUSTOMLAB",
    category: "OWN",
    heroImage: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80",
    content1: "Kính mát không chỉ để che nắng, nó là món phụ kiện định hình phong cách sống phảng phất nét thanh lịch phóng khoáng của người Hà Nội cổ.",
    gridImages: [
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508296695146-257a814050b4?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80",
    ],
    content2: "Người Hà Nội ngắm phố phường qua lăng kính có màu thời gian - dịu nhẹ, lãng mạn và tinh tế. Một gọng kính đồi mồi cổ điển đi cùng tà áo dài hay chiếc măng tô sẫm màu dưới tiết trời thu đông se se lạnh luôn đem lại một cảm giác rất riêng.",
    content3: "Chúng tôi tìm thấy nguồn cảm hứng từ những bản nhạc xưa cũ, từ nhịp chuông xe điện lịch sử để dệt nên những đường viền kính thanh thoát. Từng chiếc kính được ra đời để đồng hành cùng bạn lang thang qua những con ngõ nhỏ của phố cổ.",
  },
  "nghe-thuat-danh-bong-acetate": {
    title: "NGHỆ THUẬT ĐÁNH BÓNG ACETATE",
    subtitle: "Bí quyết tỏa sáng của chiếc kính thượng lưu qua kỹ thuật đánh bóng",
    date: "28 Thg 09 2023",
    author: "OWNLYCUSTOMLAB",
    category: "OWN",
    heroImage: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80",
    content1: "Bóng như gương, mướt như lụa - đó chính là tiêu chuẩn khắt khe cho một chiếc gọng Cellulose Acetate cao cấp sau công đoạn đánh bóng thủ công nhiều ngày.",
    gridImages: [
      "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80",
    ],
    content2: "Không giống như kính nhựa công nghiệp đúc khuôn vội vã, Acetate cần được nâng niu tỉ mẩn. Chúng tôi thực hiện quy trình đánh bóng 3 giai đoạn: mài mút bằng đất sét organic để xóa bỏ mọi đường vân dao xước, đánh bóng thô bằng bánh vải xơ dừa, và cuối cùng là đánh bóng tinh bằng mỡ cừu cao cấp.",
    content3: "Chính kỹ thuật đặc biệt này khiến cho chất màu đồi mồi sâu hoắm hay những sọc vân hổ phách lung linh nổi bật rõ rệt dưới ánh nắng mặt trời, sang trọng vô ngần và bền bỉ tựa như tác phẩm nghệ thuật.",
  },
  "goc-nho-cua-tho-kinh": {
    title: "GÓC NHỎ CỦA THỢ KÍNH",
    subtitle: "Thế giới của đục gõ, dũa tay và những tâm tư người làm nghề",
    date: "25 Thg 9 2023",
    author: "OWNLYCUSTOMLAB",
    category: "STYLE & STORIES",
    heroImage: "https://images.unsplash.com/photo-1508296695146-257a814050b4?auto=format&fit=crop&q=80",
    content1: "Bước vào xưởng, mùi của mạt dũa bay nhè nhẹ, xếp ngay ngắn trên mặt bàn gỗ sồi sần sùi là hàng chục chiếc kìm chuyên dụng, dũa thép và những phác thảo dán vội.",
    gridImages: [
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80",
    ],
    content2: "Người làm kính thủ công cần một cái đầu lạnh và một trái tim cực kỳ kiên nhẫn. Chỉ một cú dũa quá tay, cả tấm Acetate đắt đỏ sẽ phải bỏ đi. Mặt kính phay lõm sâu hay đường vát mặt gãy góc đầy táo bạo đòi hỏi sự nhạy cảm tuyệt vời từ các giác quan của người thợ mộc mạc.",
    content3: "Đối với chúng tôi, hạnh phúc giản đơn là khoảnh khắc chiếc gọng kính vừa vặn khăng khít, ôm chặt thái dương và thanh thoát trên sống mũi của vị khách, phản ánh đúng cá tính duy nhất của họ.",
  },
  "tu-ban-ve-den-gong-kinh": {
    title: "TỪ BẢN VẼ ĐẾN GỌNG KÍNH",
    subtitle: "Dựng xây tỷ lệ vàng nhân trắc học cho từng khuôn mặt Á Đông",
    date: "25 Thg 09 2023",
    author: "OWNLYCUSTOMLAB",
    category: "STYLE & STORIES",
    heroImage: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80",
    content1: "Mỗi chiếc kính đều được thai nghén từ bản vẽ kỹ thuật tỷ lệ 1:1, đo đạc tỉ mỉ từng chỉ số nhân trắc học để đảm bảo cảm giác đeo siêu nhẹ.",
    gridImages: [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80",
    ],
    content2: "Người châu Á có cầu mũi thấp hơn và xương gò má cao hơn phương Tây. Do đó, chúng tôi nghiên cứu tinh chỉnh cầu kính (Bridge Keyhole), độ nghiêng của vành kính cùng chiều dài càng kính một cách kỹ lưỡng nhằm ngăn chặn tối đa việc kính bị tuột xuống khi chuyển động hay cười nói.",
    content3: "Từng đường cắt CNC sắc sảo kết hợp dũa tay tinh tế đưa bản vẽ thô sơ trở thành một vật phẩm thời trang hiện đại hoàn hảo. Sự đồng điệu tuyệt vời giữa công học vật thể và thời trang cao cấp chính là giá trị cốt lõi mà chúng tôi theo đuổi.",
  },
  "default": {
    title: "CÂU CHUYỆN CHẾ TÁC",
    subtitle: "Hành trình tạo nên những chiếc kính độc bản",
    date: "28 Thg 09 2023",
    author: "OWNLYCUSTOMLAB",
    category: "OWN",
    heroImage: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80",
    content1: "Mỗi chiếc kính đều có một câu chuyện riêng, từ lúc phác thảo ý tưởng cho đến khi thành hình hoàn mĩ.",
    gridImages: [
      "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80",
    ],
    content2: "Chúng tôi tập trung vào chất liệu và kỹ thuật thủ công truyền thống, kết hợp cùng công nghệ hiện đại để mang lại trải nghiệm hoàn hảo cho người đeo. Từ việc lựa chọn Acetate chất lượng cao, đẽo gọt khung kính cho đến việc đánh bóng tỉ mỉ.",
    content3: "Sự tinh tế không nằm ở sự phô trương, mà ẩn giấu trong từng chi tiết nhỏ nhất. Hy vọng bạn sẽ tìm thấy một phần cá tính của mình trong bộ sưu tập mới của chúng tôi.",
  }
};

export default function StoryDetailPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop() || "default";
  
  const story = storiesData[slug] || storiesData["default"];

  return (
    <div className="min-h-screen bg-paper font-sans flex flex-col">
      <Header />
      
      <main className="flex-1 w-full pt-32 pb-32">
        {/* Breadcrumb Navigation */}
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 mb-16">
          <div className="text-[13px] md:text-[14px] font-medium text-graphite tracking-wide">
            <Link href="/stories" className="hover:text-amber transition-colors">Stories</Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{story.title}</span>
          </div>
        </div>

        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          {/* Article Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-[12px] font-semibold text-sky-600 tracking-widest uppercase mb-4">
              {story.category}
            </p>
            <h1 className="text-[36px] md:text-[48px] font-display font-bold text-ink tracking-tight mb-4">
              {story.title}
            </h1>
            <p className="text-[15px] md:text-[16px] text-graphite mb-6">
              {story.subtitle}
            </p>
            <div className="flex items-center justify-center gap-2 text-[13px] text-graphite/60 uppercase tracking-wider">
              <span>{story.date}</span>
              <span>—</span>
              <span>{story.author}</span>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-[4px] overflow-hidden mb-16"
          >
            <Image
              src={story.heroImage}
              alt={story.title}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </motion.div>

          {/* Article Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-[760px] mx-auto space-y-12"
          >
            <p className="text-[15px] md:text-[16px] text-ink font-light leading-[1.8] text-center">
              {story.content1}
            </p>

            {/* Grid Images */}
            {story.gridImages && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
                {story.gridImages.map((img: string, idx: number) => (
                  <div key={idx} className="relative aspect-[3/4] w-full rounded-[4px] overflow-hidden">
                    <Image
                      src={img}
                      alt={`${story.title} image ${idx + 1}`}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-6 text-[14px] md:text-[15px] text-graphite font-light leading-[1.9]">
              <p>{story.content2}</p>
              <p className="whitespace-pre-line">{story.content3}</p>
            </div>

            {/* Footer lines */}
            <div className="pt-16 mt-16 border-t border-graphite/20 space-y-3 text-[13px] text-graphite/60">
              <p>• Studio: OWNLY Custom Lab | Hải Phòng</p>
              <p>• Hotline: 0886891273</p>
              <p>• Email: ownlycustomlab@gmail.com</p>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
