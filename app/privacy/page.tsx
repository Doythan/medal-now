import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 - 메달나우 | MedalNow",
  description: "메달나우의 개인정보 수집 및 이용, 보호 정책에 대해 안내합니다.",
};

export default function Privacy() {
  return (
    // eslint-disable-next-line react/no-unescaped-entities
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gold mb-4">개인정보처리방침</h1>
        <p className="text-gray-400">최종 수정일: 2026년 2월 6일</p>
      </div>

      <div className="prose prose-invert max-w-none space-y-8">
        {/* 1. 총칙 */}
        <section className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gold mb-4">1. 총칙</h2>
          <div className="text-gray-300 space-y-3">
            <p>
              메달나우(이하 "회사")는 이용자의 개인정보를 중요시하며, 「개인정보 보호법」,
              「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령을 준수하고 있습니다.
            </p>
            <p>
              회사는 본 개인정보처리방침을 통해 이용자가 제공하는 개인정보가 어떠한 용도와
              방식으로 이용되고 있으며, 개인정보 보호를 위해 어떠한 조치를 취하고 있는지
              알려드립니다.
            </p>
          </div>
        </section>

        {/* 2. 수집하는 개인정보 */}
        <section className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gold mb-4">2. 수집하는 개인정보의 항목</h2>
          <div className="text-gray-300 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gold mb-2">2.1 자동 수집 정보</h3>
              <p className="mb-2">서비스 이용 과정에서 다음 정보가 자동으로 생성되어 수집될 수 있습니다:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>접속 로그, 쿠키, 접속 IP 정보</li>
                <li>서비스 이용 기록, 방문 기록</li>
                <li>기기 정보 (OS, 브라우저 정보)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gold mb-2">2.2 뉴스레터 구독</h3>
              <p className="mb-2">뉴스레터 구독 시 다음 정보를 수집합니다:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>이메일 주소</li>
                <li>구독 일시</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. 개인정보의 이용 목적 */}
        <section className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gold mb-4">3. 개인정보의 수집 및 이용 목적</h2>
          <div className="text-gray-300">
            <p className="mb-3">회사는 수집한 개인정보를 다음의 목적으로만 이용합니다:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>서비스 제공 및 운영</li>
              <li>서비스 개선 및 신규 서비스 개발</li>
              <li>뉴스레터 발송 (구독자에 한함)</li>
              <li>서비스 이용 통계 분석</li>
              <li>법령 및 이용약관 위반 행위에 대한 대응</li>
            </ul>
          </div>
        </section>

        {/* 4. 개인정보 보유 및 이용 기간 */}
        <section className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gold mb-4">4. 개인정보의 보유 및 이용 기간</h2>
          <div className="text-gray-300 space-y-3">
            <p>
              회사는 법령에 따른 개인정보 보유·이용 기간 또는 이용자로부터 개인정보를
              수집 시 동의받은 개인정보 보유·이용 기간 내에서 개인정보를 처리·보유합니다.
            </p>
            <div className="bg-navy-950 rounded-lg p-4 mt-4">
              <h3 className="text-lg font-semibold text-gold mb-2">보유 기간</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>뉴스레터 구독 정보: 구독 해지 시까지</li>
                <li>접속 로그 기록: 3개월</li>
                <li>법령에 의한 보관: 관련 법령에서 정한 기간</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. 개인정보의 파기 */}
        <section className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gold mb-4">5. 개인정보의 파기 절차 및 방법</h2>
          <div className="text-gray-300 space-y-3">
            <p>
              회사는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는
              지체없이 해당 개인정보를 파기합니다.
            </p>
            <div>
              <h3 className="text-lg font-semibold text-gold mb-2">파기 방법</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>전자적 파일 형태: 복구 및 재생이 불가능한 기술적 방법으로 삭제</li>
                <li>종이 문서: 분쇄 또는 소각</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. 이용자의 권리 */}
        <section className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gold mb-4">6. 이용자의 권리와 행사 방법</h2>
          <div className="text-gray-300 space-y-3">
            <p>이용자는 언제든지 다음과 같은 권리를 행사할 수 있습니다:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>개인정보 열람 요구</li>
              <li>개인정보 정정 요구</li>
              <li>개인정보 삭제 요구</li>
              <li>개인정보 처리 정지 요구</li>
              <li>뉴스레터 구독 해지</li>
            </ul>
            <p className="mt-4">
              권리 행사는 이메일(contact@medalnow.com)을 통해 하실 수 있으며,
              회사는 지체없이 조치하겠습니다.
            </p>
          </div>
        </section>

        {/* 7. 쿠키 사용 */}
        <section className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gold mb-4">7. 쿠키(Cookie)의 운용</h2>
          <div className="text-gray-300 space-y-3">
            <p>
              회사는 이용자에게 개인화되고 맞춤화된 서비스를 제공하기 위해
              쿠키를 사용합니다.
            </p>
            <div>
              <h3 className="text-lg font-semibold text-gold mb-2">쿠키 사용 목적</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>서비스 이용 편의성 향상</li>
                <li>방문 및 이용 형태 파악</li>
                <li>관심 분야 파악 및 맞춤 서비스 제공</li>
              </ul>
            </div>
            <p className="mt-4">
              이용자는 웹 브라우저 설정을 통해 쿠키 허용, 거부 등을 설정할 수 있습니다.
              단, 쿠키 저장을 거부할 경우 일부 서비스 이용에 어려움이 있을 수 있습니다.
            </p>
          </div>
        </section>

        {/* 8. 개인정보 보호책임자 */}
        <section className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gold mb-4">8. 개인정보 보호책임자</h2>
          <div className="text-gray-300">
            <p className="mb-4">
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고,
              개인정보 처리와 관련한 이용자의 불만 처리 및 피해구제를 위하여
              아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <div className="bg-navy-950 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gold mb-3">개인정보 보호책임자</h3>
              <ul className="space-y-1">
                <li>이메일: contact@medalnow.com</li>
                <li>응대 시간: 평일 09:00 - 18:00</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 9. 광고 */}
        <section className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gold mb-4">9. 광고 서비스</h2>
          <div className="text-gray-300 space-y-3">
            <p>
              본 웹사이트는 Google AdSense를 통해 광고를 게재하고 있습니다.
              Google AdSense는 쿠키를 사용하여 사용자의 관심사에 맞는 광고를 표시할 수 있습니다.
            </p>
            <p>
              Google의 쿠키 사용에 대한 자세한 내용은
              <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline ml-1">
                Google 광고 정책
              </a>
              에서 확인하실 수 있습니다.
            </p>
            <p>
              이용자는
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline mx-1">
                광고 설정
              </a>
              에서 맞춤 광고를 비활성화할 수 있습니다.
            </p>
          </div>
        </section>

        {/* 10. 정책 변경 */}
        <section className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gold mb-4">10. 개인정보처리방침의 변경</h2>
          <div className="text-gray-300">
            <p>
              이 개인정보처리방침은 2026년 2월 6일부터 적용됩니다.
              법령, 정책 또는 보안기술의 변경에 따라 내용의 추가, 삭제 및 수정이 있을 시에는
              변경사항 시행 7일 전부터 공지사항을 통해 고지할 것입니다.
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-navy-800">
          <p className="text-gray-500 text-sm">
            본 방침에 대한 문의사항이 있으시면
            <a href="/contact" className="text-gold hover:underline mx-1">문의 페이지</a>
            를 통해 연락주시기 바랍니다.
          </p>
        </div>
      </div>
    </div>
  );
}
