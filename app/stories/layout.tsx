import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stories',
  description: 'Những câu chuyện đằng sau các quá trình thiết kế, chế tác vật liệu và chia sẻ về các xu hướng kính mắt tại Ownly Custom Lab.',
  openGraph: {
    title: 'Stories | Ownly Custom Lab',
    description: 'Những câu chuyện đằng sau các quá trình thiết kế, chế tác vật liệu và chia sẻ về các xu hướng kính mắt tại Ownly Custom Lab.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
