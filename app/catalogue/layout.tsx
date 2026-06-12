import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catalogue',
  description: 'Khám phá bộ sưu tập các mẫu thiết kế gọng kính độc quyền tại Ownly Custom Lab.',
  openGraph: {
    title: 'Catalogue & Bộ sưu tập | Ownly Custom Lab',
    description: 'Khám phá bộ sưu tập các mẫu thiết kế gọng kính độc quyền tại Ownly Custom Lab.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
