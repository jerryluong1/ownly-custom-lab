import './globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Ownly Custom Lab | Design - Customize - Own It',
    template: '%s | Ownly Custom Lab',
  },
  description: 'Thương hiệu sản xuất và gia công thiết kế gọng kính mắt theo yêu cầu uy tín hàng đầu. Giúp bạn sáng tạo nên chiếc kính phản chiếu cá tính riêng biệt (OEM/ODM).',
  keywords: ['kính mắt', 'gọng kính', 'sản xuất kính', 'kính tùy chỉnh', 'custom lab', 'mắt kính', 'kính thiết kế', 'OEM gọng kính', 'ODM gọng kính'],
  authors: [{ name: 'Ownly Custom Lab' }],
  creator: 'Ownly Custom Lab',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://ownlycustomlab.com',
    title: 'Ownly Custom Lab | Design - Customize - Own It',
    description: 'Thương hiệu sản xuất và gia công thiết kế gọng kính mắt theo yêu cầu uy tín hàng đầu. Giúp bạn sáng tạo nên chiếc kính mang cá tính riêng biệt.',
    siteName: 'Ownly Custom Lab',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Ownly Custom Lab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ownly Custom Lab | Custom Eyewear',
    description: 'Sản xuất và gia công thiết kế gọng kính mắt theo yêu cầu.',
    images: ['https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${raleway.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var currentFetch = window.fetch;
                  var customFetch = currentFetch;
                  Object.defineProperty(window, 'fetch', {
                    get: function() { return customFetch; },
                    set: function(val) { customFetch = val; },
                    configurable: true,
                    enumerable: true
                  });
                } catch (e) {
                  console.warn('Sandbox fetch patch failed safely', e);
                }
              })();
            `
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
