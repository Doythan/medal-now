import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "국가별 메달 순위 - 2026 밀라노-코르티나 동계올림픽 | 메달나우",
  description: "2026 밀라노-코르티나 동계올림픽 국가별 메달 순위를 실시간으로 확인하세요. 금메달, 은메달, 동메달 집계와 역대 동계올림픽 메달 순위 비교 정보를 제공합니다.",
};

const medalData = [
  { rank: 1, country: "노르웨이", countryEn: "Norway", flag: "🇳🇴", gold: 0, silver: 0, bronze: 0, total: 0 },
  { rank: 2, country: "독일", countryEn: "Germany", flag: "🇩🇪", gold: 0, silver: 0, bronze: 0, total: 0 },
  { rank: 3, country: "미국", countryEn: "USA", flag: "🇺🇸", gold: 0, silver: 0, bronze: 0, total: 0 },
  { rank: 4, country: "스웨덴", countryEn: "Sweden", flag: "🇸🇪", gold: 0, silver: 0, bronze: 0, total: 0 },
  { rank: 5, country: "네덜란드", countryEn: "Netherlands", flag: "🇳🇱", gold: 0, silver: 0, bronze: 0, total: 0 },
  { rank: 6, country: "오스트리아", countryEn: "Austria", flag: "🇦🇹", gold: 0, silver: 0, bronze: 0, total: 0 },
  { rank: 7, country: "스위스", countryEn: "Switzerland", flag: "🇨🇭", gold: 0, silver: 0, bronze: 0, total: 0 },
  { rank: 8, country: "러시아 올림픽위원회", countryEn: "ROC", flag: "🏳️", gold: 0, silver: 0, bronze: 0, total: 0 },
  { rank: 9, country: "프랑스", countryEn: "France", flag: "🇫🇷", gold: 0, silver: 0, bronze: 0, total: 0 },
  { rank: 10, country: "캐나다", countryEn: "Canada", flag: "🇨🇦", gold: 0, silver: 0, bronze: 0, total: 0 },
  { rank: 11, country: "대한민국", countryEn: "South Korea", flag: "🇰🇷", gold: 0, silver: 0, bronze: 0, total: 0, highlight: true },
  { rank: 12, country: "일본", countryEn: "Japan", flag: "🇯🇵", gold: 0, silver: 0, bronze: 0, total: 0 },
  { rank: 13, country: "이탈리아", countryEn: "Italy", flag: "🇮🇹", gold: 0, silver: 0, bronze: 0, total: 0 },
  { rank: 14, country: "중국", countryEn: "China", flag: "🇨🇳", gold: 0, silver: 0, bronze: 0, total: 0 },
  { rank: 15, country: "영국", countryEn: "Great Britain", flag: "🇬🇧", gold: 0, silver: 0, bronze: 0, total: 0 },
];

export default function Rankings() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">국가별 메달 순위</h1>
        <p className="text-gray-300 text-lg">
          2026 밀라노-코르티나 동계올림픽 국가별 메달 집계를 실시간으로 확인하세요
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-gold rounded-full"></span>
            <span>대회 기간: 2026년 2월 6일 - 2월 22일</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span>개최지: 이탈리아 밀라노-코르티나</span>
          </div>
        </div>
      </div>

      {/* Medal Count Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <div className="text-3xl mb-2">🥇</div>
          <div className="text-2xl font-bold text-gold mb-1">0</div>
          <div className="text-sm text-gray-400">금메달</div>
        </div>
        <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <div className="text-3xl mb-2">🥈</div>
          <div className="text-2xl font-bold text-gray-300 mb-1">0</div>
          <div className="text-sm text-gray-400">은메달</div>
        </div>
        <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <div className="text-3xl mb-2">🥉</div>
          <div className="text-2xl font-bold text-amber-600 mb-1">0</div>
          <div className="text-sm text-gray-400">동메달</div>
        </div>
        <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <div className="text-3xl mb-2">🏆</div>
          <div className="text-2xl font-bold text-gold mb-1">0</div>
          <div className="text-sm text-gray-400">총 메달</div>
        </div>
      </div>

      {/* Medal Rankings Table */}
      <div className="bg-navy-900 border border-navy-800 rounded-lg overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-navy-950 border-b border-navy-800">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gold">순위</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gold">국가</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gold">🥇 금</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gold">🥈 은</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gold">🥉 동</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gold">합계</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-800">
              {medalData.map((country) => (
                <tr
                  key={country.rank}
                  className={`hover:bg-navy-800 transition-colors ${
                    country.highlight ? 'bg-navy-800/50 border-l-4 border-gold' : ''
                  }`}
                >
                  <td className="px-6 py-4 text-gray-300 font-medium">{country.rank}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{country.flag}</span>
                      <div>
                        <div className={`font-medium ${country.highlight ? 'text-gold' : 'text-gray-200'}`}>
                          {country.country}
                        </div>
                        <div className="text-xs text-gray-500">{country.countryEn}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center text-gold font-bold">{country.gold}</td>
                  <td className="px-6 py-4 text-center text-gray-300 font-bold">{country.silver}</td>
                  <td className="px-6 py-4 text-center text-amber-600 font-bold">{country.bronze}</td>
                  <td className="px-6 py-4 text-center text-gray-200 font-bold">{country.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gold mb-4">📊 메달 순위 기준</h2>
          <div className="space-y-3 text-gray-300">
            <p className="text-sm">
              국제올림픽위원회(IOC)는 다음 기준으로 국가별 메달 순위를 집계합니다:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm ml-2">
              <li>금메달 개수 우선</li>
              <li>금메달이 같으면 은메달 개수 비교</li>
              <li>은메달도 같으면 동메달 개수 비교</li>
              <li>모든 메달이 같으면 알파벳 순서</li>
            </ol>
          </div>
        </div>

        <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gold mb-4">🇰🇷 한국 메달 전망</h2>
          <div className="space-y-3 text-gray-300 text-sm">
            <p>
              2026 밀라노-코르티나 동계올림픽에서 대한민국은 쇼트트랙, 스피드스케이팅,
              피겨스케이팅 종목에서 메달 획득이 유력합니다.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-gold">•</span>
                <div>
                  <strong className="text-gold">쇼트트랙:</strong> 전통의 강호로 복수 메달 기대
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gold">•</span>
                <div>
                  <strong className="text-gold">스피드스케이팅:</strong> 김길리 선수 등 유망주 다수
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gold">•</span>
                <div>
                  <strong className="text-gold">피겨스케이팅:</strong> 차준환 선수의 메달 도전
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Historical Context */}
      <div className="mt-8 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border border-gold rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gold mb-4">📈 역대 동계올림픽 한국 메달 성적</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">2022 베이징</div>
            <div className="text-gray-300">금 2 | 은 5 | 동 2 (총 9개)</div>
            <div className="text-sm text-gray-500 mt-1">종합 14위</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">2018 평창</div>
            <div className="text-gray-300">금 5 | 은 8 | 동 4 (총 17개)</div>
            <div className="text-sm text-gray-500 mt-1">종합 7위 (홈)</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">2014 소치</div>
            <div className="text-gray-300">금 3 | 은 3 | 동 2 (총 8개)</div>
            <div className="text-sm text-gray-500 mt-1">종합 13위</div>
          </div>
        </div>
      </div>
    </div>
  );
}
