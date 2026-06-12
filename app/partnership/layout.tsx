import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'B2B & Partnership',
  description: 'Bạn có ý tưởng, chúng tôi có xưởng. Dịch vụ ODM/OEM sản xuất gia công kính mắt mang thương hiệu riêng của bạn.',
  openGraph: {
    title: 'Đối Tác & B2B | Ownly Custom Lab',
    description: 'Dịch vụ ODM/OEM sản xuất gia công kính mắt với thiết kế độc quyền, chất lượng chuẩn quốc tế, đáp ứng mọi yêu cầu riêng biệt.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
