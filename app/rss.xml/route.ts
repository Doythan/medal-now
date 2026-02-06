import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://medal-now.pages.dev';

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>메달나우 - 2026 밀라노-코르티나 동계올림픽</title>
    <link>${baseUrl}</link>
    <description>2026 밀라노-코르티나 동계올림픽 실시간 메달 순위, 경기 일정, 최신 뉴스</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>

    <item>
      <title>2026 밀라노-코르티나 동계올림픽 D-DAY, 17일간의 열전 시작</title>
      <link>${baseUrl}/news</link>
      <description>제25회 동계올림픽이 이탈리아 밀라노와 코르티나에서 개막합니다.</description>
      <pubDate>${new Date('2026-02-06').toUTCString()}</pubDate>
      <guid>${baseUrl}/news#1</guid>
    </item>

    <item>
      <title>차준환, 밀라노 올림픽 메달 도전</title>
      <link>${baseUrl}/news</link>
      <description>피겨스케이팅 남자 싱글 차준환 선수가 올림픽 메달 획득을 목표로 최종 훈련에 돌입했습니다.</description>
      <pubDate>${new Date('2026-02-05').toUTCString()}</pubDate>
      <guid>${baseUrl}/news#2</guid>
    </item>

    <item>
      <title>김길리, 스피드스케이팅 1500m서 금메달 도전</title>
      <link>${baseUrl}/news</link>
      <description>스피드스케이팅 김길리 선수가 2022 베이징 올림픽의 아쉬움을 딛고 밀라노에서 금메달 획득에 도전합니다.</description>
      <pubDate>${new Date('2026-02-04').toUTCString()}</pubDate>
      <guid>${baseUrl}/news#3</guid>
    </item>

    <item>
      <title>2026 밀라노-코르티나 동계올림픽 완벽 가이드</title>
      <link>${baseUrl}/posts/guide</link>
      <description>대회 일정, 경기 종목, 한국 주요 선수 정보를 한눈에 확인하세요</description>
      <pubDate>${new Date('2026-02-01').toUTCString()}</pubDate>
      <guid>${baseUrl}/posts/guide</guid>
    </item>
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
