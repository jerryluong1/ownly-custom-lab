import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chính Sách Bảo Hành',
  description: 'Xem chi tiết các chính sách bảo hành, đổi trả và hậu mãi khi đặt hàng tại Ownly Custom Lab.',
  openGraph: {
    title: 'Bảo hành & Dịch vụ | Ownly Custom Lab',
    description: 'Xem chi tiết các chính sách bảo hành, đổi trả và hậu mãi khi đặt hàng tại Ownly Custom Lab.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
