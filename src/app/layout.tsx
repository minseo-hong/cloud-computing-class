import type { Metadata } from 'next';

import './globals.css';
import '/public/styles/font.css';
import NavBar from '@/components/ui/NavBar';
import Metrics from '@/components/ui/metrics/Metrics';

export const metadata: Metadata = {
  title: 'ENGAGE ENERGY - KUSITMS',
  description: '큐시즘 1회 전시회 - ENGAGE ENERGY',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-black font-pretendard text-white">
        <NavBar />
        {children}
        <Metrics />
      </body>
    </html>
  );
}
