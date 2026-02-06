"use client";

interface MedalCount {
  country: string;
  countryKo: string;
  flag: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
}

const medalData: MedalCount[] = [
  { country: "Norway", countryKo: "노르웨이", flag: "🇳🇴", gold: 16, silver: 8, bronze: 13, total: 37 },
  { country: "Germany", countryKo: "독일", flag: "🇩🇪", gold: 12, silver: 10, bronze: 5, total: 27 },
  { country: "Korea", countryKo: "대한민국", flag: "🇰🇷", gold: 9, silver: 7, bronze: 6, total: 22 },
  { country: "Canada", countryKo: "캐나다", flag: "🇨🇦", gold: 8, silver: 6, bronze: 11, total: 25 },
  { country: "USA", countryKo: "미국", flag: "🇺🇸", gold: 8, silver: 10, bronze: 7, total: 25 },
  { country: "Netherlands", countryKo: "네덜란드", flag: "🇳🇱", gold: 8, silver: 5, bronze: 4, total: 17 },
  { country: "China", countryKo: "중국", flag: "🇨🇳", gold: 7, silver: 9, bronze: 8, total: 24 },
  { country: "Japan", countryKo: "일본", flag: "🇯🇵", gold: 5, silver: 7, bronze: 9, total: 21 },
  { country: "Italy", countryKo: "이탈리아", flag: "🇮🇹", gold: 5, silver: 6, bronze: 8, total: 19 },
  { country: "France", countryKo: "프랑스", flag: "🇫🇷", gold: 4, silver: 7, bronze: 11, total: 22 },
];

export default function MedalTable() {
  return (
    <div className="bg-navy-900 border border-navy-800 rounded-lg overflow-hidden">
      {/* Header with Live Badge */}
      <div className="px-6 py-4 border-b border-navy-800 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gold">메달 순위</h2>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
            </span>
          </div>
          <span className="text-sm text-gold font-semibold animate-pulse">
            실시간 업데이트 중
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-navy-800 text-gray-300 text-sm">
              <th className="px-6 py-3 text-left font-semibold">순위</th>
              <th className="px-6 py-3 text-left font-semibold">국가</th>
              <th className="px-4 py-3 text-center font-semibold">
                <span className="inline-block">🥇</span>
                <span className="ml-1">금</span>
              </th>
              <th className="px-4 py-3 text-center font-semibold">
                <span className="inline-block">🥈</span>
                <span className="ml-1">은</span>
              </th>
              <th className="px-4 py-3 text-center font-semibold">
                <span className="inline-block">🥉</span>
                <span className="ml-1">동</span>
              </th>
              <th className="px-4 py-3 text-center font-semibold">합계</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-800">
            {medalData.map((country, index) => {
              const isKorea = country.country === "Korea";
              return (
                <tr
                  key={country.country}
                  className={`transition-colors ${
                    isKorea
                      ? "bg-gold bg-opacity-10 border-l-4 border-l-gold hover:bg-opacity-20"
                      : "hover:bg-navy-800"
                  }`}
                >
                  <td className="px-6 py-4">
                    <span
                      className={`font-bold ${
                        isKorea ? "text-gold text-lg" : "text-gray-400"
                      }`}
                    >
                      {index + 1}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{country.flag}</span>
                      <div>
                        <div
                          className={`font-semibold ${
                            isKorea ? "text-gold text-lg" : "text-gray-200"
                          }`}
                        >
                          {country.countryKo}
                        </div>
                        <div className="text-xs text-gray-500">
                          {country.country}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td
                    className={`px-4 py-4 text-center font-bold ${
                      isKorea ? "text-gold text-lg" : "text-yellow-400"
                    }`}
                  >
                    {country.gold}
                  </td>
                  <td
                    className={`px-4 py-4 text-center font-bold ${
                      isKorea ? "text-gold text-lg" : "text-gray-300"
                    }`}
                  >
                    {country.silver}
                  </td>
                  <td
                    className={`px-4 py-4 text-center font-bold ${
                      isKorea ? "text-gold text-lg" : "text-orange-400"
                    }`}
                  >
                    {country.bronze}
                  </td>
                  <td
                    className={`px-4 py-4 text-center font-bold ${
                      isKorea ? "text-gold text-xl" : "text-gray-200"
                    }`}
                  >
                    {country.total}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-navy-950 border-t border-navy-800 text-center">
        <p className="text-sm text-gray-400">
          마지막 업데이트: {new Date().toLocaleString("ko-KR")}
        </p>
      </div>
    </div>
  );
}
