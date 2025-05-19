import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Emnify Software - Profesyonel Web Tasarım ve Yazılım Hizmetleri',
  description: 'Emnify Software ile işletmeniz için profesyonel web tasarım, yazılım geliştirme ve dijital pazarlama çözümleri.',
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
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 