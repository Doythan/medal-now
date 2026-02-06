import MedalTable from "@/components/MedalTable";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="text-gold">메달나우</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          실시간 올림픽 메달 소식과 경기 일정을 한눈에
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/rankings"
            className="bg-gold hover:bg-gold-600 text-navy-900 font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            메달 순위 보기
          </a>
          <a
            href="/schedule"
            className="bg-navy-800 hover:bg-navy-700 text-gold border border-gold font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            경기 일정 보기
          </a>
        </div>
      </div>

      {/* Medal Rankings Table */}
      <div className="mb-16">
        <MedalTable />
      </div>

      {/* Olympic Guide Banner */}
      <div className="mb-16">
        <a
          href="/posts/guide"
          className="block bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border-2 border-gold rounded-lg p-8 hover:border-gold-400 transition-all hover:shadow-lg hover:shadow-gold/20 group"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-3xl">📖</span>
                <span className="bg-gold text-navy-900 text-xs font-bold px-3 py-1 rounded-full">
                  필독!
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gold mb-2 group-hover:text-gold-400 transition-colors">
                2026 밀라노-코르티나 동계올림픽 완벽 가이드
              </h3>
              <p className="text-gray-300 mb-3">
                대회 일정, 경기 종목, 한국 주요 선수(차준환, 김길리 등) 정보를 한눈에 확인하세요
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-navy-950 text-gold text-xs px-3 py-1 rounded-full border border-gold">
                  대회 개요
                </span>
                <span className="bg-navy-950 text-gold text-xs px-3 py-1 rounded-full border border-gold">
                  경기 일정
                </span>
                <span className="bg-navy-950 text-gold text-xs px-3 py-1 rounded-full border border-gold">
                  종목 가이드
                </span>
                <span className="bg-navy-950 text-gold text-xs px-3 py-1 rounded-full border border-gold">
                  한국 선수 소개
                </span>
                <span className="bg-navy-950 text-gold text-xs px-3 py-1 rounded-full border border-gold">
                  메달 전망
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center ml-6">
              <div className="text-gold text-4xl group-hover:translate-x-2 transition-transform">
                →
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <a
          href="/rankings"
          className="bg-navy-900 border border-navy-800 rounded-lg p-6 hover:border-gold transition-colors block"
        >
          <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">🥇</span>
          </div>
          <h3 className="text-xl font-semibold text-gold mb-2">실시간 순위</h3>
          <p className="text-gray-400">
            국가별 메달 순위를 실시간으로 확인하세요
          </p>
        </a>

        <a
          href="/schedule"
          className="bg-navy-900 border border-navy-800 rounded-lg p-6 hover:border-gold transition-colors block"
        >
          <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">📅</span>
          </div>
          <h3 className="text-xl font-semibold text-gold mb-2">경기 일정</h3>
          <p className="text-gray-400">
            오늘의 경기 일정과 결과를 확인하세요
          </p>
        </a>

        <a
          href="/news"
          className="bg-navy-900 border border-navy-800 rounded-lg p-6 hover:border-gold transition-colors block"
        >
          <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">📰</span>
          </div>
          <h3 className="text-xl font-semibold text-gold mb-2">최신 뉴스</h3>
          <p className="text-gray-400">
            올림픽 관련 최신 소식을 받아보세요
          </p>
        </a>
      </div>
    </div>
  );
}
