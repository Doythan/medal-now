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

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="bg-navy-900 border border-navy-800 rounded-lg p-6 hover:border-gold transition-colors">
          <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">🥇</span>
          </div>
          <h3 className="text-xl font-semibold text-gold mb-2">실시간 순위</h3>
          <p className="text-gray-400">
            국가별 메달 순위를 실시간으로 확인하세요
          </p>
        </div>

        <div className="bg-navy-900 border border-navy-800 rounded-lg p-6 hover:border-gold transition-colors">
          <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">📅</span>
          </div>
          <h3 className="text-xl font-semibold text-gold mb-2">경기 일정</h3>
          <p className="text-gray-400">
            오늘의 경기 일정과 결과를 확인하세요
          </p>
        </div>

        <div className="bg-navy-900 border border-navy-800 rounded-lg p-6 hover:border-gold transition-colors">
          <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">📰</span>
          </div>
          <h3 className="text-xl font-semibold text-gold mb-2">최신 뉴스</h3>
          <p className="text-gray-400">
            올림픽 관련 최신 소식을 받아보세요
          </p>
        </div>
      </div>
    </div>
  );
}
