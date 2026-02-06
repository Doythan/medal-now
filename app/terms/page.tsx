import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 - 메달나우 | MedalNow",
  description: "메달나우 서비스 이용약관을 안내합니다.",
};

export default function Terms() {
  return (
    // eslint-disable-next-line react/no-unescaped-entities
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gold mb-4">이용약관</h1>
        <p className="text-gray-400">최종 수정일: 2026년 2월 6일</p>
      </div>

      <div className="prose prose-invert max-w-none space-y-8">
        {/* 1. 총칙 */}
        <section className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gold mb-4">제1조 (목적)</h2>
          <div className="text-gray-300 space-y-3">
            <p>
              본 약관은 메달나우(이하 "회사")가 제공하는 올림픽 정보 서비스(이하 "서비스")의
              이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항, 기타 필요한 사항을
              규정함을 목적으로 합니다.
            </p>
          </div>
        </section>

        {/* 2. 용어의 정의 */}
        <section className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gold mb-4">제2조 (용어의 정의)</h2>
          <div className="text-gray-300 space-y-2">
            <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong className="text-gold">"서비스"</strong>란 회사가 제공하는
                올림픽 메달 순위, 경기 일정, 뉴스 등의 정보 제공 서비스를 의미합니다.
              </li>
              <li>
                <strong className="text-gold">"이용자"</strong>란 본 약관에 따라
                회사가 제공하는 서비스를 받는 자를 의미합니다.
              </li>
              <li>
                <strong className="text-gold">"콘텐츠"</strong>란 서비스에서 제공되는
                모든 정보, 텍스트, 이미지, 동영상, 링크 등을 의미합니다.
              </li>
            </ul>
          </div>
        </section>

        {/* 3. 약관의 효력 및 변경 */}
        <section className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gold mb-4">제3조 (약관의 효력 및 변경)</h2>
          <div className="text-gray-300 space-y-3">
            <p>
              1. 본 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이 발생합니다.
            </p>
            <p>
              2. 회사는 필요한 경우 관련 법령을 위배하지 않는 범위 내에서 본 약관을 변경할 수 있으며,
              변경된 약관은 서비스 내 공지사항을 통해 공지한 날로부터 7일 후에 효력이 발생합니다.
            </p>
            <p>
              3. 이용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단할 수 있습니다.
              변경된 약관의 효력 발생일 이후 서비스를 계속 이용하는 경우,
              약관의 변경 사항에 동의한 것으로 간주됩니다.
            </p>
          </div>
        </section>

        {/* 4. 서비스의 제공 */}
        <section className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gold mb-4">제4조 (서비스의 제공)</h2>
          <div className="text-gray-300 space-y-3">
            <p>회사는 다음과 같은 서비스를 제공합니다:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>올림픽 국가별 메달 순위 정보</li>
              <li>올림픽 경기 일정 정보</li>
              <li>올림픽 관련 뉴스 및 소식</li>
              <li>올림픽 종목 및 선수 정보</li>
              <li>기타 올림픽 관련 정보 서비스</li>
            </ul>
            <p className="mt-4">
              회사는 서비스의 품질 향상과 이용자 편의 증진을 위해
              지속적으로 서비스를 개선하며, 필요시 서비스의 내용을 변경할 수 있습니다.
            </p>
          </div>
        </section>

        {/* 5. 서비스의 중단 */}
        <section className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gold mb-4">제5조 (서비스의 중단)</h2>
          <div className="text-gray-300 space-y-3">
            <p>회사는 다음 각 호의 경우 서비스 제공을 일시적으로 중단할 수 있습니다:</p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>시스템 정기 점검, 서버의 증설 및 교체, 네트워크의 불안정 등의 시스템 운영상 필요한 경우</li>
              <li>전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지한 경우</li>
              <li>국가비상사태, 정전, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 정상적인 서비스 제공이 불가능한 경우</li>
              <li>기타 천재지변, 불가항력적 사유가 있는 경우</li>
            </ul>
          </div>
        </section>

        {/* 6. 저작권 */}
        <section className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gold mb-4">제6조 (저작권 및 지적재산권)</h2>
          <div className="text-gray-300 space-y-3">
            <p>
              1. 서비스에서 제공하는 모든 콘텐츠에 대한 저작권 및 지적재산권은 회사 또는
              해당 콘텐츠 제공자에게 귀속됩니다.
            </p>
            <p>
              2. 이용자는 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이
              복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리 목적으로 이용하거나
              제3자에게 이용하게 하여서는 안됩니다.
            </p>
            <p>
              3. 올림픽 관련 공식 로고, 마스코트, 상징 등은 국제올림픽위원회(IOC) 및
              해당 대회 조직위원회의 지적재산권으로 보호됩니다.
            </p>
          </div>
        </section>

        {/* 7. 이용자의 의무 */}
        <section className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gold mb-4">제7조 (이용자의 의무)</h2>
          <div className="text-gray-300 space-y-3">
            <p>이용자는 다음 행위를 하여서는 안됩니다:</p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>허위 정보를 게시하거나 타인의 정보를 도용하는 행위</li>
              <li>회사의 저작권, 제3자의 저작권 등 기타 권리를 침해하는 행위</li>
              <li>공공질서 및 미풍양속에 위반되는 내용의 정보, 문장, 도형, 음향, 동영상을 전송하는 행위</li>
              <li>서비스의 안정적 운영을 방해할 수 있는 정보를 전송하거나 수신자의 의사에 반하여 광고성 정보를 전송하는 행위</li>
              <li>관련 법령에 의하여 그 전송 또는 게시가 금지되는 정보를 전송하는 행위</li>
            </ul>
          </div>
        </section>

        {/* 8. 면책 조항 */}
        <section className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gold mb-4">제8조 (면책조항)</h2>
          <div className="text-gray-300 space-y-3">
            <p>
              1. 회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 및 기타 이에 준하는
              불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 대한
              책임이 면제됩니다.
            </p>
            <p>
              2. 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.
            </p>
            <p>
              3. 회사는 서비스에서 제공되는 정보의 정확성, 신뢰성에 대해 보증하지 않으며,
              이용자가 본 서비스의 정보를 신뢰함으로써 입게 되는 손해에 대해서는 책임을 지지 않습니다.
            </p>
            <p>
              4. 회사는 이용자가 서비스를 이용하여 기대하는 수익을 얻지 못하거나
              상실한 것에 대하여 책임을 지지 않습니다.
            </p>
          </div>
        </section>

        {/* 9. 광고 게재 */}
        <section className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gold mb-4">제9조 (광고 게재 및 거래)</h2>
          <div className="text-gray-300 space-y-3">
            <p>
              1. 회사는 서비스 운영과 관련하여 서비스 화면, 홈페이지 등에 광고를 게재할 수 있습니다.
            </p>
            <p>
              2. 이용자는 서비스 이용 시 노출되는 광고 게재에 대해 동의한 것으로 간주됩니다.
            </p>
            <p>
              3. 회사는 광고 게재를 통한 광고주의 판촉활동 또는 이용자와 광고주 간의 거래에
              대해서는 책임을 지지 않습니다.
            </p>
          </div>
        </section>

        {/* 10. 준거법 및 재판관할 */}
        <section className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gold mb-4">제10조 (준거법 및 재판관할)</h2>
          <div className="text-gray-300 space-y-3">
            <p>
              1. 본 약관의 해석 및 회사와 이용자 간의 분쟁에 대하여는 대한민국의 법령을 적용합니다.
            </p>
            <p>
              2. 서비스 이용 중 발생한 회사와 이용자 간의 소송은 민사소송법상의 관할법원에 제소합니다.
            </p>
          </div>
        </section>

        {/* 부칙 */}
        <section className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gold mb-4">부칙</h2>
          <div className="text-gray-300">
            <p>본 약관은 2026년 2월 6일부터 시행됩니다.</p>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-navy-800">
          <p className="text-gray-500 text-sm">
            본 약관에 대한 문의사항이 있으시면
            <a href="/contact" className="text-gold hover:underline mx-1">문의 페이지</a>
            를 통해 연락주시기 바랍니다.
          </p>
        </div>
      </div>
    </div>
  );
}
