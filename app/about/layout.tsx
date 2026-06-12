import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Về Chúng Tôi',
  description: 'Khám phá câu chuyện và triết lý của Ownly Custom Lab - Xưởng thiết kế và gia công kính mắt cao cấp theo yêu cầu hàng đầu.',
  openGraph: {
    title: 'Về Chúng Tôi | Ownly Custom Lab',
    description: 'Khám phá câu chuyện và triết lý của Ownly Custom Lab - Xưởng thiết kế và gia công kính mắt cao cấp theo yêu cầu hàng đầu.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
