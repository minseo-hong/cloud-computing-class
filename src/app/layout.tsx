import type { Metadata } from 'next';

import NavBar from '@/components/ui/NavBar';
import GoogleAnalytics from '@/components/ui/metrics/GoogleAnalytics';
import MicrosoftClarity from '@/components/ui/metrics/MicrosoftClarity';
import GoogleTagManager from '@/components/ui/metrics/GoogleTagManager';
import GoogleTagManagerNoScript from '@/components/ui/metrics/GoogleTagManagerNoScript';

import './globals.css';
import '/public/styles/font.css';

export const metadata: Metadata = {
  title: 'ENGAGE ENERGY - KUSITMS',
  description: '큐시즘 1회 전시회 - ENGAGE ENERGY',
  icons: {
    icon: '/favicon/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <GoogleTagManager />
        <GoogleAnalytics />
        <MicrosoftClarity />
      </head>
      <body className="bg-black font-pretendard text-white">
        <NavBar />
        {children}
        <GoogleTagManagerNoScript />
      </body>
    </html>
  );
}
