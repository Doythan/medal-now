import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의하기 - 메달나우 | MedalNow",
  description: "메달나우에 대한 문의사항, 피드백, 제안을 보내주세요.",
};

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">문의하기</h1>
        <p className="text-xl text-gray-300">
          궁금하신 사항이나 제안할 내용이 있으시면 언제든 연락주세요
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Email */}
        <div className="bg-gradient-to-br from-navy-900 to-navy-800 border-2 border-gold rounded-lg p-8">
          <div className="text-5xl mb-4">📧</div>
          <h2 className="text-2xl font-bold text-gold mb-3">이메일</h2>
          <p className="text-gray-300 mb-4">
            가장 빠르고 확실한 연락 방법입니다.
            1-2 영업일 내에 답변드립니다.
          </p>
          <a
            href="mailto:contact@medalnow.com"
            className="inline-block bg-gold hover:bg-gold-600 text-navy-900 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            contact@medalnow.com
          </a>
        </div>

        {/* Response Time */}
        <div className="bg-navy-900 border border-navy-800 rounded-lg p-8">
          <div className="text-5xl mb-4">⏰</div>
          <h2 className="text-2xl font-bold text-gold mb-3">응답 시간</h2>
          <div className="text-gray-300 space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-gold">•</span>
              <div>
                <strong>평일:</strong> 09:00 - 18:00 (KST)
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gold">•</span>
              <div>
                <strong>주말/공휴일:</strong> 순차적으로 답변
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gold">•</span>
              <div>
                <strong>평균 응답 시간:</strong> 1-2 영업일
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gold mb-6">자주 묻는 질문</h2>
        <div className="space-y-4">
          <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gold mb-2">
              Q. 메달 순위 정보는 어떻게 업데이트되나요?
            </h3>
            <p className="text-gray-300">
              A. 국제올림픽위원회(IOC) 공식 데이터를 기반으로 실시간으로 업데이트됩니다.
              경기 결과 발표 후 최대한 빠르게 반영됩니다.
            </p>
          </div>

          <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gold mb-2">
              Q. 경기 일정 시간은 어느 나라 기준인가요?
            </h3>
            <p className="text-gray-300">
              A. 모든 경기 시간은 한국 시간(KST)으로 표시됩니다.
              현지 시간과의 시차 정보도 함께 제공합니다.
            </p>
          </div>

          <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gold mb-2">
              Q. 뉴스레터 구독은 어떻게 하나요?
            </h3>
            <p className="text-gray-300">
              A. 뉴스 페이지 하단의 뉴스레터 구독란에 이메일 주소를 입력하시면
              중요한 경기 결과와 한국 선수단 소식을 받아보실 수 있습니다.
            </p>
          </div>

          <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gold mb-2">
              Q. 모바일에서도 이용할 수 있나요?
            </h3>
            <p className="text-gray-300">
              A. 네, 메달나우는 반응형 웹사이트로 제작되어 PC, 태블릿, 스마트폰 등
              모든 기기에서 최적화된 화면으로 이용하실 수 있습니다.
            </p>
          </div>

          <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gold mb-2">
              Q. 잘못된 정보를 발견했어요.
            </h3>
            <p className="text-gray-300">
              A. 정보의 정확성을 최우선으로 하고 있습니다. 잘못된 정보를 발견하셨다면
              즉시 contact@medalnow.com으로 알려주세요. 확인 후 신속히 수정하겠습니다.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Topics */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gold mb-6">이런 내용으로 연락주세요</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-navy-900 border border-navy-800 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">🐛</div>
            <h3 className="text-lg font-bold text-gold mb-2">버그 신고</h3>
            <p className="text-sm text-gray-400">
              웹사이트 오류나 문제점을 발견하셨나요?
            </p>
          </div>

          <div className="bg-navy-900 border border-navy-800 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">💡</div>
            <h3 className="text-lg font-bold text-gold mb-2">기능 제안</h3>
            <p className="text-sm text-gray-400">
              새로운 기능이나 개선 아이디어가 있으신가요?
            </p>
          </div>

          <div className="bg-navy-900 border border-navy-800 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">❓</div>
            <h3 className="text-lg font-bold text-gold mb-2">일반 문의</h3>
            <p className="text-sm text-gray-400">
              서비스 이용 관련 궁금한 점이 있으신가요?
            </p>
          </div>

          <div className="bg-navy-900 border border-navy-800 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="text-lg font-bold text-gold mb-2">파트너십</h3>
            <p className="text-sm text-gray-400">
              협업이나 제휴를 제안하고 싶으신가요?
            </p>
          </div>

          <div className="bg-navy-900 border border-navy-800 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">📝</div>
            <h3 className="text-lg font-bold text-gold mb-2">콘텐츠 제보</h3>
            <p className="text-sm text-gray-400">
              올림픽 관련 뉴스나 정보를 제보하고 싶으신가요?
            </p>
          </div>

          <div className="bg-navy-900 border border-navy-800 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">⭐</div>
            <h3 className="text-lg font-bold text-gold mb-2">피드백</h3>
            <p className="text-sm text-gray-400">
              서비스 이용 후기나 개선 의견을 나누고 싶으신가요?
            </p>
          </div>
        </div>
      </div>

      {/* Business Information */}
      <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border-2 border-gold rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gold mb-4">사업자 정보</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
          <div>
            <div className="mb-3">
              <span className="text-gray-500">서비스명:</span>
              <span className="ml-2 font-semibold">메달나우 (MedalNow)</span>
            </div>
            <div className="mb-3">
              <span className="text-gray-500">대표 이메일:</span>
              <span className="ml-2">contact@medalnow.com</span>
            </div>
          </div>
          <div>
            <div className="mb-3">
              <span className="text-gray-500">운영 시간:</span>
              <span className="ml-2">평일 09:00 - 18:00</span>
            </div>
            <div className="mb-3">
              <span className="text-gray-500">휴무:</span>
              <span className="ml-2">주말 및 공휴일</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-4">다른 정보가 필요하신가요?</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/about"
            className="bg-navy-900 border border-navy-800 hover:border-gold text-gray-300 hover:text-gold px-6 py-2 rounded-lg transition-colors"
          >
            소개
          </a>
          <a
            href="/privacy"
            className="bg-navy-900 border border-navy-800 hover:border-gold text-gray-300 hover:text-gold px-6 py-2 rounded-lg transition-colors"
          >
            개인정보처리방침
          </a>
          <a
            href="/terms"
            className="bg-navy-900 border border-navy-800 hover:border-gold text-gray-300 hover:text-gold px-6 py-2 rounded-lg transition-colors"
          >
            이용약관
          </a>
        </div>
      </div>
    </div>
  );
}
