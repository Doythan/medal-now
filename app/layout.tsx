import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://medalnow.com'),
  title: {
    default: "메달나우 | MedalNow - 2026 밀라노-코르티나 동계올림픽 실시간 정보",
    template: "%s | 메달나우"
  },
  description: "2026 밀라노-코르티나 동계올림픽 실시간 메달 순위, 경기 일정, 최신 뉴스를 한눈에 확인하세요. 한국 선수단 소식과 종목별 상세 정보를 제공합니다.",
  keywords: [
    "2026 동계올림픽",
    "밀라노 코르티나 올림픽",
    "올림픽 메달 순위",
    "올림픽 경기 일정",
    "한국 메달",
    "쇼트트랙",
    "피겨스케이팅",
    "스피드스케이팅",
    "차준환",
    "김길리",
    "올림픽 뉴스",
    "Winter Olympics 2026",
    "Milano Cortina",
  ],
  authors: [{ name: "메달나우" }],
  creator: "메달나우",
  publisher: "메달나우",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://medalnow.com',
    title: '메달나우 - 2026 밀라노-코르티나 동계올림픽',
    description: '2026 동계올림픽 실시간 메달 순위, 경기 일정, 한국 선수단 뉴스',
    siteName: '메달나우',
  },
  twitter: {
    card: 'summary_large_image',
    title: '메달나우 - 2026 밀라노-코르티나 동계올림픽',
    description: '실시간 메달 순위와 경기 일정을 확인하세요',
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
  verification: {
    // Google Search Console verification 추가 시 사용
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="canonical" href="https://medalnow.com" />
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXX" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
