import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "경기 일정 - 2026 밀라노-코르티나 동계올림픽 | 메달나우",
  description: "2026 밀라노-코르티나 동계올림픽 전체 경기 일정과 종목별 경기 시간을 확인하세요. 한국 선수 출전 경기, 메달 결정전 일정 정보를 제공합니다.",
};

const scheduleData = [
  {
    date: "2월 6일 (개회식)",
    events: [
      { time: "20:00", sport: "개회식", event: "밀라노-코르티나 동계올림픽 개막", venue: "산 시로 스타디움", highlight: true, korean: false },
    ]
  },
  {
    date: "2월 7일 (금)",
    events: [
      { time: "10:00", sport: "스키점프", event: "남자 노멀힐 예선", venue: "코르티나", korean: false, highlight: false },
      { time: "14:00", sport: "피겨스케이팅", event: "팀 이벤트 - 남자 싱글 쇼트", venue: "밀라노", korean: true, highlight: false },
      { time: "16:30", sport: "스피드스케이팅", event: "여자 3000m", venue: "밀라노", korean: true, highlight: false },
      { time: "19:00", sport: "쇼트트랙", event: "남자 1500m 예선", venue: "밀라노", korean: true, highlight: false },
    ]
  },
  {
    date: "2월 8일 (토)",
    events: [
      { time: "10:30", sport: "알파인스키", event: "남자 활강", venue: "코르티나", korean: false, highlight: false },
      { time: "15:00", sport: "피겨스케이팅", event: "팀 이벤트 - 여자 싱글 쇼트", venue: "밀라노", korean: true, highlight: false },
      { time: "18:00", sport: "쇼트트랙", event: "여자 500m 준결승/결승 🥇", venue: "밀라노", korean: true, highlight: false },
      { time: "19:30", sport: "스피드스케이팅", event: "남자 5000m 🥇", venue: "밀라노", korean: false, highlight: false },
    ]
  },
  {
    date: "2월 9일 (일)",
    events: [
      { time: "11:00", sport: "스노보드", event: "여자 슬로프스타일 예선", venue: "리비뇨", korean: false, highlight: false },
      { time: "14:00", sport: "바이애슬론", event: "여자 7.5km 스프린트 🥇", venue: "안텔셀바", korean: false, highlight: false },
      { time: "17:00", sport: "쇼트트랙", event: "남자 1000m 예선", venue: "밀라노", korean: true, highlight: false },
      { time: "20:00", sport: "아이스하키", event: "남자 예선 라운드", venue: "밀라노", korean: false, highlight: false },
    ]
  },
  {
    date: "2월 10일 (월)",
    events: [
      { time: "10:00", sport: "크로스컨트리", event: "여자 10km 클래식 🥇", venue: "테세로", korean: false, highlight: false },
      { time: "13:30", sport: "프리스타일", event: "남자 모굴 결승 🥇", venue: "리비뇨", korean: false, highlight: false },
      { time: "16:00", sport: "피겨스케이팅", event: "남자 싱글 쇼트프로그램", venue: "밀라노", korean: true, highlight: false },
      { time: "19:00", sport: "쇼트트랙", event: "여자 1500m 준결승/결승 🥇", venue: "밀라노", korean: true, highlight: false },
    ]
  },
];

const sportCategories = [
  { icon: "⛷️", name: "알파인스키", events: 11 },
  { icon: "🏂", name: "스노보드", events: 11 },
  { icon: "⛸️", name: "피겨스케이팅", events: 5 },
  { icon: "🏃", name: "쇼트트랙", events: 9 },
  { icon: "⛸️", name: "스피드스케이팅", events: 14 },
  { icon: "🎿", name: "프리스타일", events: 13 },
  { icon: "🎿", name: "크로스컨트리", events: 12 },
  { icon: "🏔️", name: "스키점프", events: 4 },
  { icon: "🎯", name: "바이애슬론", events: 11 },
  { icon: "🏒", name: "아이스하키", events: 2 },
  { icon: "🥌", name: "컬링", events: 3 },
  { icon: "🛷", name: "봅슬레이", events: 4 },
];

export default function Schedule() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">경기 일정</h1>
        <p className="text-gray-300 text-lg">
          2026 밀라노-코르티나 동계올림픽 전체 경기 일정과 한국 선수 출전 경기를 확인하세요
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-navy-900 border border-navy-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-gold mb-1">17일</div>
          <div className="text-sm text-gray-400">대회 기간</div>
        </div>
        <div className="bg-navy-900 border border-navy-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-gold mb-1">16</div>
          <div className="text-sm text-gray-400">종목</div>
        </div>
        <div className="bg-navy-900 border border-navy-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-gold mb-1">109</div>
          <div className="text-sm text-gray-400">세부 종목</div>
        </div>
        <div className="bg-navy-900 border border-navy-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-gold mb-1">7</div>
          <div className="text-sm text-gray-400">경기장</div>
        </div>
      </div>

      {/* Sport Categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gold mb-4">종목별 보기</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {sportCategories.map((sport) => (
            <button
              key={sport.name}
              className="bg-navy-900 border border-navy-800 hover:border-gold rounded-lg p-4 transition-colors text-center"
            >
              <div className="text-3xl mb-2">{sport.icon}</div>
              <div className="text-sm font-medium text-gray-200 mb-1">{sport.name}</div>
              <div className="text-xs text-gray-500">{sport.events}개 종목</div>
            </button>
          ))}
        </div>
      </div>

      {/* Daily Schedule */}
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gold">일정표</h2>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-gold rounded-full"></span>
              <span className="text-gray-400">🥇 메달 결정전</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              <span className="text-gray-400">🇰🇷 한국 출전</span>
            </div>
          </div>
        </div>

        {scheduleData.map((day, idx) => (
          <div key={idx} className="bg-navy-900 border border-navy-800 rounded-lg overflow-hidden">
            <div className="bg-navy-950 border-b border-navy-800 px-6 py-4">
              <h3 className="text-xl font-bold text-gold">{day.date}</h3>
            </div>
            <div className="divide-y divide-navy-800">
              {day.events.map((event, eventIdx) => (
                <div
                  key={eventIdx}
                  className={`px-6 py-4 hover:bg-navy-800 transition-colors ${
                    event.highlight ? 'border-l-4 border-gold' : ''
                  } ${event.korean ? 'border-l-4 border-blue-500' : ''}`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-mono text-gray-400 bg-navy-950 px-3 py-1 rounded">
                          {event.time}
                        </span>
                        <span className="text-sm font-semibold text-gold bg-navy-950 px-3 py-1 rounded">
                          {event.sport}
                        </span>
                        {event.korean && (
                          <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded border border-blue-500">
                            🇰🇷 한국 선수 출전
                          </span>
                        )}
                      </div>
                      <div className="text-gray-200 font-medium mb-1">{event.event}</div>
                      <div className="text-sm text-gray-500">📍 {event.venue}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Important Info */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-navy-900 to-navy-800 border border-gold rounded-lg p-6">
          <h3 className="text-xl font-bold text-gold mb-4">🕐 시간 안내</h3>
          <div className="space-y-2 text-gray-300 text-sm">
            <p>• 모든 시간은 한국 시간(KST) 기준입니다</p>
            <p>• 이탈리아와 한국의 시차는 8시간입니다</p>
            <p>• 예: 이탈리아 12:00 = 한국 20:00</p>
            <p className="mt-4 text-xs text-gray-500">
              * 경기 일정은 현지 사정에 따라 변경될 수 있습니다
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-navy-900 to-navy-800 border border-gold rounded-lg p-6">
          <h3 className="text-xl font-bold text-gold mb-4">🏟️ 주요 경기장</h3>
          <div className="space-y-3 text-gray-300 text-sm">
            <div>
              <strong className="text-gold">밀라노 (Milano)</strong>
              <p className="text-gray-400">• 빙상 종목 (피겨, 쇼트트랙, 스피드, 하키)</p>
            </div>
            <div>
              <strong className="text-gold">코르티나 (Cortina)</strong>
              <p className="text-gray-400">• 알파인스키, 컬링</p>
            </div>
            <div>
              <strong className="text-gold">리비뇨 (Livigno)</strong>
              <p className="text-gray-400">• 스노보드, 프리스타일</p>
            </div>
          </div>
        </div>
      </div>

      {/* Korean Athletes Schedule */}
      <div className="mt-8 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border-2 border-blue-500 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gold mb-4">🇰🇷 한국 주요 선수 출전 일정</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-navy-950 rounded-lg p-4 border border-navy-800">
            <div className="text-lg font-bold text-gold mb-2">차준환 (피겨스케이팅)</div>
            <div className="space-y-1 text-sm text-gray-300">
              <p>• 2월 10일 - 남자 싱글 쇼트</p>
              <p>• 2월 12일 - 남자 싱글 프리</p>
            </div>
          </div>
          <div className="bg-navy-950 rounded-lg p-4 border border-navy-800">
            <div className="text-lg font-bold text-gold mb-2">김길리 (스피드스케이팅)</div>
            <div className="space-y-1 text-sm text-gray-300">
              <p>• 2월 11일 - 여자 1500m</p>
              <p>• 2월 15일 - 여자 1000m</p>
            </div>
          </div>
          <div className="bg-navy-950 rounded-lg p-4 border border-navy-800">
            <div className="text-lg font-bold text-gold mb-2">쇼트트랙 대표팀</div>
            <div className="space-y-1 text-sm text-gray-300">
              <p>• 2월 7일 - 남자 1500m</p>
              <p>• 2월 8일 - 여자 500m</p>
              <p>• 2월 10일 - 여자 1500m</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
