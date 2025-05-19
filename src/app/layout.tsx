import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Emnify Software - Profesyonel Web Tasarım ve Yazılım Hizmetleri',
    template: '%s | Emnify Software',
  },
  description: 'Emnify Software ile işletmeniz için profesyonel web tasarım, yazılım geliştirme ve dijital pazarlama çözümleri.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Emnify Software - Profesyonel Web Tasarım ve Yazılım Hizmetleri',
    description: 'Emnify Software ile işletmeniz için profesyonel web tasarım, yazılım geliştirme ve dijital pazarlama çözümleri.',
    url: 'https://emnifysoft.com',
    siteName: 'Emnify Software',
    images: [
      {
        url: '/emnify-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Emnify Software',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emnify Software - Profesyonel Web Tasarım ve Yazılım Hizmetleri',
    description: 'Emnify Software ile işletmeniz için profesyonel web tasarım, yazılım geliştirme ve dijital pazarlama çözümleri.',
    images: ['/emnify-og.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 