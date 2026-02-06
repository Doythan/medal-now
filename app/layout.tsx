import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/seo/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://medal-now.pages.dev'),
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
    url: 'https://medal-now.pages.dev',
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
    // Google Search Console verification
    google: 'A2i7lFfb16fMiTNXSGA_J2rOaCUTxw78SysJw6BCxuM',
    // Naver Search Advisor verification 추가 시 사용
    // naver: 'your-naver-verification-code',
  },
  other: {
    // Naver-specific meta tags
    'naver-site-verification': '',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
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
        <link rel="canonical" href="https://medal-now.pages.dev" />
        <meta name="google-adsense-account" content="ca-pub-4331098599610944" />
        <link rel="alternate" type="application/rss+xml" title="메달나우 RSS Feed" href="https://medal-now.pages.dev/rss.xml" />
        <meta name="theme-color" content="#FFD700" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1WZGJKE8TE"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1WZGJKE8TE');
            `,
          }}
        />

        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "vd6acluynj");
            `,
          }}
        />

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4331098599610944"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Structured Data - Organization & Website */}
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <StructuredData type="sportsEvent" />

        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow" id="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
