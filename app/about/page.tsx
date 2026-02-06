import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개 - 메달나우 | MedalNow",
  description: "메달나우는 올림픽 메달 소식과 경기 정보를 실시간으로 제공하는 스포츠 정보 플랫폼입니다.",
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
            <span className="text-navy-900 font-bold text-3xl">M</span>
          </div>
          <h1 className="text-5xl font-bold text-gold">메달나우</h1>
        </div>
        <p className="text-xl text-gray-300">
          실시간 올림픽 정보의 모든 것
        </p>
      </div>

      {/* Mission */}
      <div className="bg-gradient-to-br from-navy-900 to-navy-800 border-2 border-gold rounded-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-gold mb-4">우리의 미션</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          메달나우(MedalNow)는 전 세계 올림픽 팬들에게 정확하고 신속한 경기 정보를 제공합니다.
          우리는 메달 순위, 경기 일정, 선수 정보, 최신 뉴스를 한곳에서 쉽게 확인할 수 있도록
          사용자 친화적인 플랫폼을 구축했습니다.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          2026 밀라노-코르티나 동계올림픽을 시작으로, 모든 올림픽 대회에서
          최고의 정보 서비스를 제공하는 것이 우리의 목표입니다.
        </p>
      </div>

      {/* What We Offer */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gold mb-6">제공하는 서비스</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
            <div className="text-4xl mb-3">🥇</div>
            <h3 className="text-xl font-bold text-gold mb-3">실시간 메달 순위</h3>
            <p className="text-gray-300">
              국가별 메달 집계를 실시간으로 업데이트하여 제공합니다.
              금, 은, 동메달 현황과 역대 성적 비교 정보를 확인할 수 있습니다.
            </p>
          </div>

          <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
            <div className="text-4xl mb-3">📅</div>
            <h3 className="text-xl font-bold text-gold mb-3">경기 일정</h3>
            <p className="text-gray-300">
              전체 종목의 경기 일정을 한눈에 확인하고,
              한국 선수 출전 경기를 빠르게 찾을 수 있습니다.
            </p>
          </div>

          <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
            <div className="text-4xl mb-3">📰</div>
            <h3 className="text-xl font-bold text-gold mb-3">최신 뉴스</h3>
            <p className="text-gray-300">
              대회 관련 주요 소식과 한국 선수단 뉴스를
              카테고리별로 정리하여 제공합니다.
            </p>
          </div>

          <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
            <div className="text-4xl mb-3">📖</div>
            <h3 className="text-xl font-bold text-gold mb-3">올림픽 가이드</h3>
            <p className="text-gray-300">
              대회 개요, 종목별 정보, 주요 선수 소개 등
              올림픽을 즐기기 위한 완벽한 가이드를 제공합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gold mb-6">핵심 가치</h2>
        <div className="space-y-4">
          <div className="bg-navy-900 border-l-4 border-gold p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-gold mb-2">정확성</h3>
            <p className="text-gray-300">
              신뢰할 수 있는 공식 출처에서 정보를 수집하고 검증하여 제공합니다.
            </p>
          </div>

          <div className="bg-navy-900 border-l-4 border-gold p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-gold mb-2">신속성</h3>
            <p className="text-gray-300">
              경기 결과와 메달 집계를 실시간으로 업데이트하여 최신 정보를 제공합니다.
            </p>
          </div>

          <div className="bg-navy-900 border-l-4 border-gold p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-gold mb-2">사용자 중심</h3>
            <p className="text-gray-300">
              직관적인 인터페이스와 쉬운 네비게이션으로 누구나 편리하게 이용할 수 있습니다.
            </p>
          </div>

          <div className="bg-navy-900 border-l-4 border-gold p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-gold mb-2">독창성</h3>
            <p className="text-gray-300">
              단순한 정보 나열을 넘어 역대 기록 비교, 종목별 분석 등
              차별화된 콘텐츠를 제공합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Technology */}
      <div className="bg-navy-900 border border-navy-800 rounded-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-gold mb-4">기술 스택</h2>
        <p className="text-gray-300 mb-4">
          메달나우는 최신 웹 기술을 활용하여 빠르고 안정적인 서비스를 제공합니다:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-navy-950 rounded-lg p-4">
            <div className="text-2xl mb-2">⚛️</div>
            <div className="text-sm text-gray-300">Next.js 14</div>
          </div>
          <div className="bg-navy-950 rounded-lg p-4">
            <div className="text-2xl mb-2">🎨</div>
            <div className="text-sm text-gray-300">Tailwind CSS</div>
          </div>
          <div className="bg-navy-950 rounded-lg p-4">
            <div className="text-2xl mb-2">📘</div>
            <div className="text-sm text-gray-300">TypeScript</div>
          </div>
          <div className="bg-navy-950 rounded-lg p-4">
            <div className="text-2xl mb-2">🚀</div>
            <div className="text-sm text-gray-300">Cloudflare</div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border-2 border-gold rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gold mb-3">함께 만들어가요</h2>
        <p className="text-gray-300 mb-6">
          메달나우는 사용자 여러분의 피드백을 소중히 생각합니다.
          개선 사항이나 새로운 기능 제안이 있으시다면 언제든 연락주세요.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gold hover:bg-gold-600 text-navy-900 font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          문의하기
        </a>
      </div>

      {/* Footer Info */}
      <div className="mt-12 text-center text-sm text-gray-500">
        <p>메달나우(MedalNow) &copy; 2026. All rights reserved.</p>
        <p className="mt-2">
          이메일: contact@medalnow.com
        </p>
      </div>
    </div>
  );
}
