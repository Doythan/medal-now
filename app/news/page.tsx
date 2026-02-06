import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "올림픽 뉴스 - 2026 밀라노-코르티나 동계올림픽 | 메달나우",
  description: "2026 밀라노-코르티나 동계올림픽 최신 뉴스, 한국 선수단 소식, 경기 하이라이트를 실시간으로 확인하세요.",
};

const newsData = [
  {
    id: 1,
    category: "대회 소식",
    title: "2026 밀라노-코르티나 동계올림픽 D-DAY, 17일간의 열전 시작",
    excerpt: "제25회 동계올림픽이 이탈리아 밀라노와 코르티나에서 개막합니다. 109개 세부 종목에서 전 세계 선수들이 메달을 놓고 경쟁합니다.",
    date: "2026-02-06",
    image: "🏔️",
    featured: true,
  },
  {
    id: 2,
    category: "한국 선수단",
    title: "차준환, 밀라노 올림픽 메달 도전... '4회전 점프 완성도가 관건'",
    excerpt: "피겨스케이팅 남자 싱글 차준환 선수가 올림픽 메달 획득을 목표로 최종 훈련에 돌입했습니다. 4회전 점프의 성공률이 메달의 열쇠가 될 전망입니다.",
    date: "2026-02-05",
    image: "⛸️",
    featured: true,
  },
  {
    id: 3,
    category: "한국 선수단",
    title: "김길리, 스피드스케이팅 1500m서 금메달 도전... '베이징의 설욕'",
    excerpt: "스피드스케이팅 김길리 선수가 2022 베이징 올림픽의 아쉬움을 딛고 밀라노에서 금메달 획득에 도전합니다.",
    date: "2026-02-04",
    image: "⛸️",
    featured: false,
  },
  {
    id: 4,
    category: "쇼트트랙",
    title: "쇼트트랙 대표팀, '금빛 질주' 준비 완료... 첫 메달은 여자 500m",
    excerpt: "한국 쇼트트랙 대표팀이 전통의 강호 자존심을 걸고 올림픽 첫 메달 사냥에 나섭니다. 여자 500m가 첫 메달 종목입니다.",
    date: "2026-02-03",
    image: "🏃",
    featured: false,
  },
  {
    id: 5,
    category: "경기 일정",
    title: "개막식은 2월 6일 밤 8시... 산 시로 스타디움에서 화려한 막 오른다",
    excerpt: "밀라노의 상징적인 산 시로 스타디움에서 개최되는 개막식은 이탈리아의 전통과 현대가 어우러진 화려한 퍼포먼스로 꾸며질 예정입니다.",
    date: "2026-02-02",
    image: "🎭",
    featured: false,
  },
  {
    id: 6,
    category: "종목 분석",
    title: "알파인스키 강국 대결 예고... 스위스 vs 오스트리아 라이벌 구도",
    excerpt: "알파인스키 종목에서 전통의 강호 스위스와 오스트리아의 치열한 메달 경쟁이 예상됩니다.",
    date: "2026-02-01",
    image: "⛷️",
    featured: false,
  },
  {
    id: 7,
    category: "대회 준비",
    title: "밀라노-코르티나, 친환경 올림픽 표방... 기존 시설 최대 활용",
    excerpt: "2026 동계올림픽 조직위는 신규 건설을 최소화하고 기존 시설을 최대한 활용하는 친환경 올림픽을 목표로 합니다.",
    date: "2026-01-31",
    image: "🌱",
    featured: false,
  },
  {
    id: 8,
    category: "기술 혁신",
    title: "AI 심판 도입, 빙상 종목서 판정 논란 최소화 기대",
    excerpt: "이번 올림픽부터 AI 기술이 접목된 판정 시스템이 일부 빙상 종목에 도입되어 공정한 경기 운영이 기대됩니다.",
    date: "2026-01-30",
    image: "🤖",
    featured: false,
  },
];

const categories = ["전체", "대회 소식", "한국 선수단", "쇼트트랙", "경기 일정", "종목 분석"];

export default function News() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">올림픽 뉴스</h1>
        <p className="text-gray-300 text-lg">
          2026 밀라노-코르티나 동계올림픽 최신 소식과 한국 선수단 뉴스를 확인하세요
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category === "전체"
                  ? "bg-gold text-navy-900"
                  : "bg-navy-900 text-gray-300 border border-navy-800 hover:border-gold"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured News */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gold mb-4">📌 주요 뉴스</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsData
            .filter((news) => news.featured)
            .map((news) => (
              <article
                key={news.id}
                className="bg-gradient-to-br from-navy-900 to-navy-800 border-2 border-gold rounded-lg p-6 hover:shadow-lg hover:shadow-gold/20 transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{news.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-gold text-navy-900 text-xs font-bold px-3 py-1 rounded-full">
                        {news.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(news.date).toLocaleDateString("ko-KR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gold mb-3 group-hover:text-gold-400 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{news.excerpt}</p>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>

      {/* All News */}
      <div>
        <h2 className="text-2xl font-bold text-gold mb-4">📰 전체 뉴스</h2>
        <div className="space-y-4">
          {newsData
            .filter((news) => !news.featured)
            .map((news) => (
              <article
                key={news.id}
                className="bg-navy-900 border border-navy-800 rounded-lg p-6 hover:border-gold transition-colors cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{news.image}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="bg-navy-950 text-gold text-xs font-semibold px-3 py-1 rounded-full border border-gold">
                        {news.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(news.date).toLocaleDateString("ko-KR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-200 mb-2 group-hover:text-gold transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{news.excerpt}</p>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-12 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border-2 border-gold rounded-lg p-8">
        <div className="text-center">
          <div className="text-4xl mb-4">📬</div>
          <h2 className="text-2xl font-bold text-gold mb-3">뉴스레터 구독</h2>
          <p className="text-gray-300 mb-6">
            중요한 경기 결과와 한국 선수단 소식을 이메일로 받아보세요
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 px-4 py-3 bg-navy-950 border border-navy-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gold"
            />
            <button className="bg-gold hover:bg-gold-600 text-navy-900 font-semibold px-6 py-3 rounded-lg transition-colors">
              구독
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            * 언제든지 구독을 취소할 수 있습니다
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <a
          href="/rankings"
          className="bg-navy-900 border border-navy-800 rounded-lg p-6 hover:border-gold transition-colors block text-center group"
        >
          <div className="text-3xl mb-3">🥇</div>
          <h3 className="text-lg font-semibold text-gold group-hover:text-gold-400 mb-2">
            메달 순위 보기
          </h3>
          <p className="text-sm text-gray-400">실시간 국가별 메달 집계</p>
        </a>
        <a
          href="/schedule"
          className="bg-navy-900 border border-navy-800 rounded-lg p-6 hover:border-gold transition-colors block text-center group"
        >
          <div className="text-3xl mb-3">📅</div>
          <h3 className="text-lg font-semibold text-gold group-hover:text-gold-400 mb-2">
            경기 일정 보기
          </h3>
          <p className="text-sm text-gray-400">종목별 상세 일정 확인</p>
        </a>
        <a
          href="/posts/guide"
          className="bg-navy-900 border border-navy-800 rounded-lg p-6 hover:border-gold transition-colors block text-center group"
        >
          <div className="text-3xl mb-3">📖</div>
          <h3 className="text-lg font-semibold text-gold group-hover:text-gold-400 mb-2">
            올림픽 가이드
          </h3>
          <p className="text-sm text-gray-400">대회 정보 완벽 정리</p>
        </a>
      </div>
    </div>
  );
}
