import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Liên Hệ',
  description: 'Trò chuyện và kết nối cùng Ownly Custom Lab để bắt đầu hiện thực hóa những thiết kế gọng kính mơ ước của bạn.',
  openGraph: {
    title: 'Liên hệ | Ownly Custom Lab',
    description: 'Trò chuyện và kết nối cùng Ownly Custom Lab để bắt đầu hiện thực hóa những thiết kế gọng kính mơ ước của bạn.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
