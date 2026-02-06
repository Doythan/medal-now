import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2026 밀라노-코르티나 동계올림픽 완벽 가이드 | 메달나우",
  description:
    "2026년 2월 6일부터 22일까지 이탈리아에서 개최되는 밀라노-코르티나 동계올림픽의 모든 것. 대회 일정, 경기 종목, 한국 유망 선수 정보를 한눈에 확인하세요.",
  keywords: [
    "2026 동계올림픽",
    "밀라노 코르티나",
    "올림픽 가이드",
    "차준환",
    "김길리",
    "동계올림픽 종목",
    "한국 선수",
    "올림픽 일정",
  ],
  openGraph: {
    title: "2026 밀라노-코르티나 동계올림픽 완벽 가이드",
    description:
      "2026 동계올림픽의 모든 정보를 메달나우에서 확인하세요. 대회 일정부터 한국 유망 선수까지!",
    type: "article",
  },
};

export default function OlympicGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
          <span>올림픽 가이드</span>
          <span>•</span>
          <time dateTime="2026-02-06">2026년 2월</time>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">
          2026 밀라노-코르티나 동계올림픽 완벽 가이드
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          이탈리아 알프스의 눈부신 설원에서 펼쳐지는 겨울 스포츠의 향연,
          제25회 동계올림픽의 모든 것을 알아보세요.
        </p>
      </header>

      {/* Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        {/* 목차 */}
        <nav className="bg-navy-900 border border-navy-800 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-bold text-gold mb-4 mt-0">목차</h2>
          <ul className="space-y-2 text-gray-300 list-none pl-0">
            <li>
              <a href="#overview" className="text-gold hover:underline">
                1. 대회 개요
              </a>
            </li>
            <li>
              <a href="#schedule" className="text-gold hover:underline">
                2. 대회 일정 및 주요 이벤트
              </a>
            </li>
            <li>
              <a href="#venues" className="text-gold hover:underline">
                3. 경기장 소개
              </a>
            </li>
            <li>
              <a href="#sports" className="text-gold hover:underline">
                4. 경기 종목 완벽 가이드
              </a>
            </li>
            <li>
              <a href="#korea-team" className="text-gold hover:underline">
                5. 한국 국가대표팀 주목 선수
              </a>
            </li>
            <li>
              <a href="#medals" className="text-gold hover:underline">
                6. 메달 전망 및 경쟁국 분석
              </a>
            </li>
            <li>
              <a href="#how-to-watch" className="text-gold hover:underline">
                7. 시청 가이드
              </a>
            </li>
          </ul>
        </nav>

        {/* 대회 개요 */}
        <section id="overview" className="mb-16">
          <h2 className="text-3xl font-bold text-gold mb-6 border-b border-navy-800 pb-3">
            1. 대회 개요
          </h2>

          <div className="bg-navy-900 border border-navy-800 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-gold mb-4">
              기본 정보
            </h3>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <dt className="font-semibold text-gold">대회명</dt>
                <dd>제25회 동계올림픽 대회</dd>
              </div>
              <div>
                <dt className="font-semibold text-gold">개최지</dt>
                <dd>이탈리아 밀라노 & 코르티나담페초</dd>
              </div>
              <div>
                <dt className="font-semibold text-gold">개최 기간</dt>
                <dd>2026년 2월 6일 ~ 2월 22일 (17일간)</dd>
              </div>
              <div>
                <dt className="font-semibold text-gold">참가국</dt>
                <dd>약 90개국 예상</dd>
              </div>
              <div>
                <dt className="font-semibold text-gold">참가 선수</dt>
                <dd>약 3,000명 예상</dd>
              </div>
              <div>
                <dt className="font-semibold text-gold">종목 수</dt>
                <dd>7개 대분류, 16개 세부 종목, 116개 금메달</dd>
              </div>
            </dl>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            2026 밀라노-코르티나 동계올림픽은 이탈리아에서 세 번째로 개최되는
            동계올림픽입니다. 1956년 코르티나담페초 대회, 2006년 토리노 대회에
            이어 20년 만에 다시 이탈리아에서 겨울 스포츠의 축제가 열립니다.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            이번 대회는 지속가능성과 친환경을 주요 테마로 삼아, 기존 시설을
            최대한 활용하고 임시 시설을 통해 환경 영향을 최소화하는 것이
            특징입니다. 밀라노의 현대적인 도시 인프라와 코르티나담페초의 아름다운
            알프스 자연 경관이 조화를 이루며 선수와 관중 모두에게 특별한 경험을
            선사할 예정입니다.
          </p>

          <h3 className="text-2xl font-semibold text-gold mb-4 mt-8">
            대회 모토: &quot;함께 꿈꾸기&quot; (Dreaming Together)
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            2026 동계올림픽의 공식 모토는 &quot;함께 꿈꾸기&quot;입니다. 이는 스포츠를
            통한 화합과 평화, 그리고 젊은 세대에게 영감을 주는 올림픽 정신을
            표현합니다. 밀라노와 코르티나담페초라는 두 도시가 함께 대회를
            개최하는 것 자체가 이 모토를 완벽하게 구현하고 있습니다.
          </p>
        </section>

        {/* 대회 일정 */}
        <section id="schedule" className="mb-16">
          <h2 className="text-3xl font-bold text-gold mb-6 border-b border-navy-800 pb-3">
            2. 대회 일정 및 주요 이벤트
          </h2>

          <div className="space-y-6">
            <div className="bg-navy-900 border-l-4 border-gold rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gold mb-2">
                개막식 - 2026년 2월 6일 (금)
              </h3>
              <p className="text-gray-300">
                밀라노 산시로 스타디움에서 화려한 개막식이 열립니다. AC 밀란과
                인테르 밀란의 홈구장으로 유명한 이 역사적인 경기장에서 전 세계
                선수단이 입장하며 17일간의 여정이 시작됩니다.
              </p>
            </div>

            <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gold mb-4">
                주요 경기 일정
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex">
                  <span className="font-semibold text-gold mr-3 min-w-[100px]">
                    2월 7-8일
                  </span>
                  <span>
                    피겨스케이팅 팀 이벤트 (한국 차준환 출전 예정)
                  </span>
                </li>
                <li className="flex">
                  <span className="font-semibold text-gold mr-3 min-w-[100px]">
                    2월 8-11일
                  </span>
                  <span>쇼트트랙 500m, 1000m, 1500m 예선 및 결승</span>
                </li>
                <li className="flex">
                  <span className="font-semibold text-gold mr-3 min-w-[100px]">
                    2월 10-12일
                  </span>
                  <span>
                    스피드스케이팅 500m, 1000m (김길리 등 한국 선수 메달 도전)
                  </span>
                </li>
                <li className="flex">
                  <span className="font-semibold text-gold mr-3 min-w-[100px]">
                    2월 13-15일
                  </span>
                  <span>피겨스케이팅 남자 싱글 (차준환 메달 유력)</span>
                </li>
                <li className="flex">
                  <span className="font-semibold text-gold mr-3 min-w-[100px]">
                    2월 15-17일
                  </span>
                  <span>쇼트트랙 계주 종목</span>
                </li>
                <li className="flex">
                  <span className="font-semibold text-gold mr-3 min-w-[100px]">
                    2월 18-20일
                  </span>
                  <span>스키점프, 크로스컨트리 등 설상 종목 결승</span>
                </li>
              </ul>
            </div>

            <div className="bg-navy-900 border-l-4 border-gold rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gold mb-2">
                폐막식 - 2026년 2월 22일 (일)
              </h3>
              <p className="text-gray-300">
                밀라노 베를라 경기장에서 폐막식이 거행됩니다. 17일간의 열전을
                마무리하고 다음 개최지인 2030 동계올림픽 개최지에 올림픽기를
                인계합니다.
              </p>
            </div>
          </div>

          <div className="bg-navy-900 border border-navy-800 rounded-lg p-6 mt-6">
            <h3 className="text-xl font-semibold text-gold mb-4">
              📅 한국 시간 기준 시청 팁
            </h3>
            <p className="text-gray-300 mb-3">
              이탈리아와 한국의 시차는 약 8시간입니다 (한국이 빠름). 주요 경기가
              열리는 시간대는 다음과 같습니다:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                오전 경기 (현지 10시) → 한국 시간 오후 6시경 - 저녁 시청에 최적
              </li>
              <li>
                오후 경기 (현지 14시) → 한국 시간 밤 10시경 - 황금 시간대
              </li>
              <li>
                저녁 경기 (현지 19시) → 한국 시간 새벽 3시경 - 하이라이트로
                시청 권장
              </li>
            </ul>
          </div>
        </section>

        {/* 경기장 소개 */}
        <section id="venues" className="mb-16">
          <h2 className="text-3xl font-bold text-gold mb-6 border-b border-navy-800 pb-3">
            3. 경기장 소개
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            2026 동계올림픽은 밀라노와 코르티나담페초를 중심으로 이탈리아 북부의
            여러 도시에서 개최됩니다. 각 경기장은 특색 있는 매력을 갖고
            있습니다.
          </p>

          <div className="space-y-6">
            <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gold mb-3">
                🏒 밀라노 클러스터
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    팔라이탈리아 아레나
                  </h4>
                  <p className="text-gray-300">
                    <strong>종목:</strong> 쇼트트랙, 피겨스케이팅
                    <br />
                    <strong>수용 인원:</strong> 16,000명
                    <br />
                    <strong>특징:</strong> 2006년 토리노 올림픽 아이스하키
                    경기장으로 사용된 이후 리모델링을 거쳐 최첨단 빙상장으로
                    재탄생했습니다. 한국 선수들의 쇼트트랙 금메달 사냥터가 될
                    예정입니다.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    밀라노 올림픽 스피드 스케이팅 오벌
                  </h4>
                  <p className="text-gray-300">
                    <strong>종목:</strong> 스피드스케이팅
                    <br />
                    <strong>수용 인원:</strong> 8,000명
                    <br />
                    <strong>특징:</strong> 올림픽을 위해 새롭게 건설되는 임시
                    오벌로, 대회 후 다목적 공간으로 재활용될 예정입니다.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    메다 아이스 아레나
                  </h4>
                  <p className="text-gray-300">
                    <strong>종목:</strong> 아이스하키
                    <br />
                    <strong>수용 인원:</strong> 13,000명
                    <br />
                    <strong>특징:</strong> 밀라노 근교 셀리오에 위치한
                    아이스하키 전용 경기장입니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gold mb-3">
                ⛷️ 코르티나담페초 클러스터
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    코르티나 올림픽 스타디움
                  </h4>
                  <p className="text-gray-300">
                    <strong>종목:</strong> 스키점프, 노르딕복합
                    <br />
                    <strong>특징:</strong> 1956년 올림픽 당시 사용된 역사적인
                    경기장을 현대화했습니다. 돌로미티 산맥을 배경으로 한 절경이
                    일품입니다.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    코르티나 슬라이딩 센터
                  </h4>
                  <p className="text-gray-300">
                    <strong>종목:</strong> 봅슬레이, 스켈레톤, 루지
                    <br />
                    <strong>특징:</strong> 1956년 이후 재건되는 슬라이딩 트랙으로
                    최신 안전 기술이 적용되었습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gold mb-3">
                🎿 발텔리나 & 발키아베나 클러스터
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    보르미오 스키 리조트
                  </h4>
                  <p className="text-gray-300">
                    <strong>종목:</strong> 알파인 스키 (남자 종목)
                    <br />
                    <strong>특징:</strong> 세계적으로 유명한 스키 리조트로,
                    가파르고 도전적인 코스로 유명합니다.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    리비뇨 프리스타일 파크
                  </h4>
                  <p className="text-gray-300">
                    <strong>종목:</strong> 프리스타일 스키, 스노보드
                    <br />
                    <strong>특징:</strong> 젊은 선수들의 역동적인 기술이
                    펼쳐지는 최첨단 익스트림 스포츠 경기장입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 경기 종목 */}
        <section id="sports" className="mb-16">
          <h2 className="text-3xl font-bold text-gold mb-6 border-b border-navy-800 pb-3">
            4. 경기 종목 완벽 가이드
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            2026 밀라노-코르티나 동계올림픽에서는 총 7개 대분류, 16개 세부 종목,
            116개 금메달이 걸려 있습니다. 각 종목의 특징과 관전 포인트를
            알아보세요.
          </p>

          <div className="space-y-8">
            {/* 빙상 종목 */}
            <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gold mb-4 flex items-center">
                ⛸️ 빙상 종목 (Ice Sports)
              </h3>

              <div className="space-y-6">
                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-xl font-semibold text-gold mb-2">
                    피겨스케이팅 (Figure Skating)
                  </h4>
                  <p className="text-gray-300 mb-3">
                    <strong>세부 종목:</strong> 남자 싱글, 여자 싱글, 페어,
                    아이스댄스, 팀 이벤트 (총 5개 금메달)
                  </p>
                  <p className="text-gray-300 mb-3">
                    예술성과 기술력이 조화를 이루는 동계올림픽의 꽃입니다. 쇼트
                    프로그램과 프리 스케이팅으로 나뉘어 진행되며, 4회전 점프와
                    아름다운 스핀, 스텝 시퀀스가 주요 관전 포인트입니다.
                  </p>
                  <div className="bg-navy-950 rounded p-3">
                    <p className="text-sm text-gold font-semibold mb-1">
                      🇰🇷 한국 전망
                    </p>
                    <p className="text-sm text-gray-300">
                      차준환 선수가 남자 싱글에서 메달권 진입이 유력합니다. 안정적인
                      4회전 점프와 뛰어난 표현력으로 시상대를 노립니다.
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-xl font-semibold text-gold mb-2">
                    쇼트트랙 (Short Track Speed Skating)
                  </h4>
                  <p className="text-gray-300 mb-3">
                    <strong>세부 종목:</strong> 500m, 1000m, 1500m, 3000m 계주
                    (남녀 각 4종목, 혼성 계주 포함 총 9개 금메달)
                  </p>
                  <p className="text-gray-300 mb-3">
                    빙판 위의 F1으로 불리는 쇼트트랙은 111.12m의 짧은 트랙을
                    여러 명이 동시에 질주하며 순위를 다투는 박진감 넘치는
                    종목입니다. 추월, 몸싸움, 전략적 위치 선정이 승부를
                    가릅니다.
                  </p>
                  <div className="bg-navy-950 rounded p-3">
                    <p className="text-sm text-gold font-semibold mb-1">
                      🇰🇷 한국 전망
                    </p>
                    <p className="text-sm text-gray-300">
                      한국의 효자 종목! 남녀 계주를 비롯해 다수의 메달이
                      기대됩니다. 특히 혼성 계주는 2022 베이징 올림픽 금메달의
                      재현을 목표로 합니다.
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-xl font-semibold text-gold mb-2">
                    스피드스케이팅 (Speed Skating)
                  </h4>
                  <p className="text-gray-300 mb-3">
                    <strong>세부 종목:</strong> 500m, 1000m, 1500m, 3000m, 5000m,
                    10000m, 팀 추월, 매스스타트 (총 14개 금메달)
                  </p>
                  <p className="text-gray-300 mb-3">
                    400m 오벌 트랙에서 펼쳐지는 순수한 스피드의 대결입니다. 각
                    거리별로 요구되는 체력과 전략이 다르며, 100분의 1초를 다투는
                    박빙의 승부가 펼쳐집니다.
                  </p>
                  <div className="bg-navy-950 rounded p-3">
                    <p className="text-sm text-gold font-semibold mb-1">
                      🇰🇷 한국 전망
                    </p>
                    <p className="text-sm text-gray-300">
                      김길리 선수를 필두로 500m, 1000m에서 메달 도전이
                      예상됩니다. 여자 매스스타트에서도 강세를 보일 것으로
                      전망됩니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 설상 종목 */}
            <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gold mb-4 flex items-center">
                🎿 설상 종목 (Snow Sports)
              </h3>

              <div className="space-y-6">
                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-xl font-semibold text-gold mb-2">
                    알파인 스키 (Alpine Skiing)
                  </h4>
                  <p className="text-gray-300 mb-3">
                    <strong>세부 종목:</strong> 활강, 슈퍼대회전, 대회전, 회전,
                    알파인 복합 (남녀 각 5종목, 혼성 단체 포함 총 11개 금메달)
                  </p>
                  <p className="text-gray-300 mb-3">
                    가파른 산악 슬로프를 시속 100km 이상의 속도로 질주하는
                    스릴 넘치는 종목입니다. 활강은 스피드가, 회전은 기술이 승부를
                    가르며, 알파인 복합은 두 가지 능력을 모두 요구합니다.
                  </p>
                </div>

                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-xl font-semibold text-gold mb-2">
                    크로스컨트리 스키 (Cross-Country Skiing)
                  </h4>
                  <p className="text-gray-300 mb-3">
                    <strong>세부 종목:</strong> 스프린트, 개인 출발, 스키애슬론,
                    계주 등 (총 12개 금메달)
                  </p>
                  <p className="text-gray-300 mb-3">
                    설원을 가로지르는 장거리 스키 경주로 동계올림픽 최고의
                    지구력 종목입니다. 클래식 주법과 프리 스타일 주법이
                    사용됩니다.
                  </p>
                </div>

                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-xl font-semibold text-gold mb-2">
                    프리스타일 스키 & 스노보드
                  </h4>
                  <p className="text-gray-300 mb-3">
                    <strong>세부 종목:</strong> 하프파이프, 슬로프스타일, 빅에어,
                    크로스 등 (총 26개 금메달)
                  </p>
                  <p className="text-gray-300 mb-3">
                    젊은 선수들이 주도하는 익스트림 스포츠의 향연입니다. 공중
                    회전과 플립, 그라인드 등 화려한 기술이 펼쳐지며, X게임
                    스타일의 역동적인 경기가 진행됩니다.
                  </p>
                </div>

                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-xl font-semibold text-gold mb-2">
                    스키점프 & 노르딕복합
                  </h4>
                  <p className="text-gray-300 mb-3">
                    <strong>스키점프:</strong> 노멀힐, 라지힐, 단체 (총 5개
                    금메달)
                    <br />
                    <strong>노르딕복합:</strong> 개인, 단체 (총 3개 금메달)
                  </p>
                  <p className="text-gray-300 mb-3">
                    스키점프는 하늘을 나는 듯한 비행과 우아한 착지가 관전
                    포인트입니다. 노르딕복합은 스키점프와 크로스컨트리를 결합한
                    종합 기술 종목입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 슬라이딩 & 기타 */}
            <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gold mb-4 flex items-center">
                🛷 슬라이딩 & 기타 종목
              </h3>

              <div className="space-y-6">
                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-xl font-semibold text-gold mb-2">
                    봅슬레이 & 스켈레톤
                  </h4>
                  <p className="text-gray-300 mb-3">
                    <strong>봅슬레이:</strong> 2인승, 4인승 (총 4개 금메달)
                    <br />
                    <strong>스켈레톤:</strong> 남녀 개인 (총 2개 금메달)
                  </p>
                  <p className="text-gray-300 mb-3">
                    얼음 트랙을 시속 140km로 질주하는 극한의 스피드 종목입니다.
                    스켈레톤은 엎드려서, 봅슬레이는 앉아서 탑승하며, 100분의
                    1초가 메달 색깔을 바꿉니다.
                  </p>
                </div>

                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-xl font-semibold text-gold mb-2">
                    루지 (Luge)
                  </h4>
                  <p className="text-gray-300 mb-3">
                    <strong>세부 종목:</strong> 남녀 싱글, 2인승, 단체 계주 (총
                    4개 금메달)
                  </p>
                  <p className="text-gray-300 mb-3">
                    누워서 발을 앞으로 향한 채 썰매를 타고 내려오는 종목입니다.
                    몸의 미세한 움직임으로 방향을 조절하는 고도의 기술이
                    필요합니다.
                  </p>
                </div>

                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-xl font-semibold text-gold mb-2">
                    컬링 (Curling)
                  </h4>
                  <p className="text-gray-300 mb-3">
                    <strong>세부 종목:</strong> 남자, 여자, 혼성 복식 (총 3개
                    금메달)
                  </p>
                  <p className="text-gray-300 mb-3">
                    &quot;얼음 위의 체스&quot;로 불리는 컬링은 전략과 정밀함이
                    중요한 종목입니다. 스톤을 하우스 중앙에 가깝게 놓는 것이
                    목표이며, 스위핑 기술이 승부를 가릅니다.
                  </p>
                  <div className="bg-navy-950 rounded p-3">
                    <p className="text-sm text-gold font-semibold mb-1">
                      🇰🇷 한국 전망
                    </p>
                    <p className="text-sm text-gray-300">
                      2018 평창 올림픽 은메달의 영광을 재현하기 위해 한국 여자
                      컬링 대표팀이 훈련 중입니다.
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-xl font-semibold text-gold mb-2">
                    아이스하키 (Ice Hockey)
                  </h4>
                  <p className="text-gray-300 mb-3">
                    <strong>세부 종목:</strong> 남자, 여자 (총 2개 금메달)
                  </p>
                  <p className="text-gray-300 mb-3">
                    빙판 위의 격투기로 불리는 아이스하키는 빠른 스피드와 강한
                    피지컬이 돋보이는 단체 구기 종목입니다. 캐나다, 미국, 러시아
                    등이 전통 강호입니다.
                  </p>
                </div>

                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-xl font-semibold text-gold mb-2">
                    바이애슬론 (Biathlon)
                  </h4>
                  <p className="text-gray-300 mb-3">
                    <strong>세부 종목:</strong> 스프린트, 개인 출발, 추적,
                    매스스타트, 계주, 혼성 계주 (총 11개 금메달)
                  </p>
                  <p className="text-gray-300 mb-3">
                    크로스컨트리 스키와 사격을 결합한 독특한 종목입니다. 격렬한
                    운동 후 심박수가 높은 상태에서 정확한 사격을 해야 하는 고난도
                    경기입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 한국 선수 */}
        <section id="korea-team" className="mb-16">
          <h2 className="text-3xl font-bold text-gold mb-6 border-b border-navy-800 pb-3">
            5. 한국 국가대표팀 주목 선수
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            2026 밀라노-코르티나 동계올림픽에서 한국은 쇼트트랙, 스피드스케이팅,
            피겨스케이팅을 중심으로 메달 사냥에 나섭니다. 각 종목별 주요 선수들을
            소개합니다.
          </p>

          <div className="space-y-6">
            {/* 차준환 */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 border-2 border-gold rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gold mb-1">
                    차준환 (Cha Jun-hwan)
                  </h3>
                  <p className="text-gray-300">
                    피겨스케이팅 남자 싱글 | 생년월일: 2003년 10월 21일
                  </p>
                </div>
                <div className="text-4xl">🥇</div>
              </div>

              <div className="space-y-3 text-gray-300">
                <p>
                  <strong className="text-gold">주요 경력:</strong>
                  <br />• 2024-25 시즌 그랑프리 파이널 메달리스트
                  <br />• 2024 세계선수권 동메달
                  <br />• 2022 베이징 올림픽 5위
                  <br />• 대한민국 피겨 남자 싱글 간판 스타
                </p>

                <p>
                  <strong className="text-gold">강점:</strong>
                  <br />• 안정적인 4회전 살코, 토루프 점프
                  <br />• 뛰어난 스케이팅 스킬과 표현력
                  <br />• 큰 무대에서의 강한 멘탈
                  <br />• 예술성과 기술력의 균형
                </p>

                <p>
                  <strong className="text-gold">메달 전망:</strong>
                  <br />
                  차준환 선수는 한국 피겨 역사상 최초의 올림픽 메달을 목표로
                  합니다. 4회전 점프 성공률이 높아지면서 시상대 가능성이 매우
                  높습니다. 특히 쇼트 프로그램에서의 안정감이 뛰어나 상위권
                  진입이 유력하며, 프리 스케이팅에서 완벽한 연기를 펼친다면
                  금메달도 가능합니다.
                </p>

                <div className="bg-navy-950 rounded-lg p-4 mt-4">
                  <p className="text-sm text-gold font-semibold mb-2">
                    💬 선수 인터뷰
                  </p>
                  <p className="text-sm italic">
                    &quot;밀라노는 제게 특별한 도시입니다. 2026 올림픽에서 반드시 시상대에
                    오르겠습니다. 한국 피겨의 새 역사를 쓰고 싶습니다.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* 김길리 */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 border-2 border-gold rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gold mb-1">
                    김길리 (Kim Gil-li)
                  </h3>
                  <p className="text-gray-300">
                    스피드스케이팅 500m/1000m | 생년월일: 1999년 8월 15일
                  </p>
                </div>
                <div className="text-4xl">⚡</div>
              </div>

              <div className="space-y-3 text-gray-300">
                <p>
                  <strong className="text-gold">주요 경력:</strong>
                  <br />• 2024-25 월드컵 500m 종합 우승
                  <br />• 2023 세계선수권 1000m 은메달
                  <br />• 2022 베이징 올림픽 500m 동메달
                  <br />• 한국 스피드스케이팅의 새로운 에이스
                </p>

                <p>
                  <strong className="text-gold">강점:</strong>
                  <br />• 폭발적인 출발 능력
                  <br />• 코너링 기술 탁월
                  <br />• 빙판 적응력 뛰어남
                  <br />• 강한 승부 근성
                </p>

                <p>
                  <strong className="text-gold">메달 전망:</strong>
                  <br />
                  500m와 1000m 두 종목 모두에서 메달권 진입이 유력합니다. 특히
                  500m는 금메달 후보로 꼽히며, 스타트 반응속도와 초반 가속력에서
                  세계 최고 수준을 자랑합니다. 1000m에서도 최근 기록 향상세가
                  뚜렷해 복수 메달 획득 가능성이 높습니다.
                </p>

                <div className="bg-navy-950 rounded-lg p-4 mt-4">
                  <p className="text-sm text-gold font-semibold mb-2">
                    📊 최근 시즌 성적
                  </p>
                  <p className="text-sm">
                    • 500m 개인 최고 기록: 34.21초 (한국 신기록)
                    <br />
                    • 1000m 개인 최고 기록: 1분 07.89초
                    <br />• 2024-25 시즌 월드컵 500m 5회 출전 4회 우승
                  </p>
                </div>
              </div>
            </div>

            {/* 쇼트트랙 대표팀 */}
            <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gold mb-4">
                🏃 쇼트트랙 국가대표팀
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    남자 대표팀
                  </h4>
                  <p className="text-gray-300 mb-2">
                    <strong>주요 선수:</strong> 박지원, 이준서, 김건우 등
                  </p>
                  <p className="text-gray-300">
                    전통적으로 강세를 보이는 1000m, 1500m에서 메달이 기대되며,
                    5000m 계주에서는 금메달 후보입니다. 젊은 선수들의 성장세가
                    두드러지며 세대교체가 성공적으로 이루어지고 있습니다.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    여자 대표팀
                  </h4>
                  <p className="text-gray-300 mb-2">
                    <strong>주요 선수:</strong> 최민정, 서휘민, 김예진 등
                  </p>
                  <p className="text-gray-300">
                    쇼트트랙 여제 최민정이 마지막 올림픽에 도전합니다. 500m와
                    1000m 개인 종목 메달과 함께 3000m 계주 금메달 방어가
                    목표입니다. 젊은 선수들과의 조화가 관건입니다.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    혼성 계주
                  </h4>
                  <p className="text-gray-300">
                    2022 베이징 올림픽 금메달 종목! 남녀 혼성으로 구성되는 2000m
                    계주에서 한국은 압도적인 전력을 자랑합니다. 팀워크와 전략이
                    완벽하게 맞아떨어지면 금메달 방어가 충분히 가능합니다.
                  </p>
                </div>
              </div>

              <div className="bg-navy-950 rounded-lg p-4 mt-4">
                <p className="text-sm text-gold font-semibold mb-2">
                  🎯 목표 메달 수
                </p>
                <p className="text-sm text-gray-300">
                  쇼트트랙 국가대표팀은 2026 밀라노-코르티나 올림픽에서 금 3개,
                  은 2개, 동 2개 총 7개의 메달을 목표로 설정했습니다.
                </p>
              </div>
            </div>

            {/* 기타 주목 선수 */}
            <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gold mb-4">
                💫 기타 주목 선수
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    이상호
                  </h4>
                  <p className="text-sm text-gray-300 mb-1">
                    <strong>종목:</strong> 스켈레톤
                  </p>
                  <p className="text-sm text-gray-300">
                    2018 평창 올림픽 금메달리스트 윤성빈의 뒤를 잇는 차세대
                    에이스. 월드컵에서 꾸준히 상위권을 기록하며 메달 가능성을
                    보여주고 있습니다.
                  </p>
                </div>

                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    김나현
                  </h4>
                  <p className="text-sm text-gray-300 mb-1">
                    <strong>종목:</strong> 프리스타일 스키 (빅에어)
                  </p>
                  <p className="text-sm text-gray-300">
                    2022 베이징 올림픽에서 깜짝 성적을 낸 김나현은 더욱
                    발전된 모습으로 밀라노에서 메달 도전에 나섭니다. 독창적인
                    기술로 세계 무대를 놀라게 할 예정입니다.
                  </p>
                </div>

                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    여자 컬링 대표팀
                  </h4>
                  <p className="text-sm text-gray-300 mb-1">
                    <strong>종목:</strong> 컬링
                  </p>
                  <p className="text-sm text-gray-300">
                    평창의 &quot;팀 킴&quot; 신화를 재현할 새로운 세대의 컬링
                    대표팀이 도전합니다. 체계적인 훈련과 국제 대회 경험을 바탕으로
                    시상대를 노립니다.
                  </p>
                </div>

                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    정재원
                  </h4>
                  <p className="text-sm text-gray-300 mb-1">
                    <strong>종목:</strong> 스노보드 (평행대회전)
                  </p>
                  <p className="text-sm text-gray-300">
                    한국 스노보드의 간판 선수로, 아시안 게임과 세계선수권에서
                    좋은 성적을 거두며 올림픽 메달에 도전합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 메달 전망 */}
        <section id="medals" className="mb-16">
          <h2 className="text-3xl font-bold text-gold mb-6 border-b border-navy-800 pb-3">
            6. 메달 전망 및 경쟁국 분석
          </h2>

          <div className="space-y-6">
            {/* 한국 메달 전망 */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 border border-gold rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gold mb-4">
                🇰🇷 대한민국 메달 전망
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-navy-950 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🥇</div>
                  <div className="text-2xl font-bold text-gold mb-1">5개</div>
                  <div className="text-sm text-gray-400">금메달 목표</div>
                </div>
                <div className="bg-navy-950 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🥈</div>
                  <div className="text-2xl font-bold text-gray-300 mb-1">
                    4개
                  </div>
                  <div className="text-sm text-gray-400">은메달 목표</div>
                </div>
                <div className="bg-navy-950 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🥉</div>
                  <div className="text-2xl font-bold text-orange-400 mb-1">
                    6개
                  </div>
                  <div className="text-sm text-gray-400">동메달 목표</div>
                </div>
              </div>

              <div className="space-y-3 text-gray-300">
                <p>
                  <strong className="text-gold">종목별 메달 분포 예상:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>쇼트트랙: 금 3, 은 2, 동 2 (총 7개)</li>
                  <li>스피드스케이팅: 금 1, 은 1, 동 2 (총 4개)</li>
                  <li>피겨스케이팅: 금 1 또는 은 1 (총 1개)</li>
                  <li>스켈레톤: 동 1 (총 1개)</li>
                  <li>프리스타일/스노보드: 동 1 (총 1개)</li>
                  <li>컬링: 은 1 가능성 (총 1개)</li>
                </ul>

                <p className="mt-4">
                  <strong className="text-gold">종합 순위 전망:</strong>
                  <br />
                  7위~10위권을 목표로 합니다. 2022 베이징 올림픽 성적(종합
                  14위)을 뛰어넘어 역대 최고 성적 달성을 목표로 훈련 중입니다.
                </p>
              </div>
            </div>

            {/* 경쟁국 분석 */}
            <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gold mb-4">
                🌍 주요 경쟁국 분석
              </h3>

              <div className="space-y-4">
                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    🇳🇴 노르웨이 (메달 순위 1위 예상)
                  </h4>
                  <p className="text-gray-300">
                    동계올림픽 최강국. 크로스컨트리, 바이애슬론, 알파인 스키
                    등에서 압도적인 메달 획득 예상. 2022 베이징 올림픽에서도
                    종합 1위를 차지했으며, 홈 대륙 유럽에서 열리는 이번 대회에서도
                    최다 메달이 유력합니다.
                  </p>
                </div>

                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    🇩🇪 독일 (메달 순위 2-3위 예상)
                  </h4>
                  <p className="text-gray-300">
                    바이애슬론, 루지, 봅슬레이 등 슬라이딩 종목과 크로스컨트리에서
                    강세. 체계적인 엘리트 스포츠 시스템을 바탕으로 안정적인 메달
                    획득이 예상됩니다.
                  </p>
                </div>

                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    🇨🇦 캐나다 (메달 순위 3-4위 예상)
                  </h4>
                  <p className="text-gray-300">
                    아이스하키, 프리스타일 스키, 스노보드 등에서 전통적 강호.
                    특히 남녀 아이스하키 금메달 후보이며, 익스트림 스포츠에서
                    젊은 선수들이 활약할 것으로 보입니다.
                  </p>
                </div>

                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    🇺🇸 미국 (메달 순위 4-5위 예상)
                  </h4>
                  <p className="text-gray-300">
                    알파인 스키, 스노보드, 프리스타일, 피겨스케이팅 등 다양한
                    종목에서 메달 획득. 특히 하프파이프, 빅에어 등 익스트림
                    종목에서 강세를 보일 것으로 예상됩니다.
                  </p>
                </div>

                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    🇨🇳 중국 (메달 순위 5-7위 예상)
                  </h4>
                  <p className="text-gray-300">
                    쇼트트랙 최대 라이벌. 2022 베이징 홈 올림픽에서 급성장한
                    중국은 쇼트트랙, 스피드스케이팅, 프리스타일 스키 등에서 한국과
                    치열한 경쟁이 예상됩니다. 특히 쇼트트랙에서 한중 대결이 관전
                    포인트입니다.
                  </p>
                </div>

                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    🇳🇱 네덜란드 (스피드스케이팅 최강국)
                  </h4>
                  <p className="text-gray-300">
                    스피드스케이팅에서 압도적인 강세. 모든 거리에서 메달 경쟁력을
                    갖추고 있으며, 한국 선수들과 직접적인 경쟁이 예상됩니다.
                    특히 500m, 1000m에서 김길리와의 대결이 흥미진진할 것입니다.
                  </p>
                </div>

                <div className="border-l-2 border-gold pl-4">
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    🇯🇵 일본 (아시아 라이벌)
                  </h4>
                  <p className="text-gray-300">
                    피겨스케이팅, 스피드스케이팅, 스키점프 등에서 전통적으로
                    강세. 특히 피겨스케이팅에서 차준환과 일본 선수들의 메달 경쟁이
                    예상됩니다. 아시아 국가 중 최다 메달을 놓고 한국과 경쟁할
                    것으로 보입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 관전 포인트 */}
            <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gold mb-4">
                🔥 2026 올림픽 주요 관전 포인트
              </h3>

              <div className="space-y-3 text-gray-300">
                <div className="flex items-start">
                  <span className="text-gold mr-3">1.</span>
                  <div>
                    <strong className="text-gold">
                      차준환의 피겨 올림픽 메달 도전
                    </strong>
                    <br />
                    한국 피겨 역사상 첫 올림픽 메달을 차지할 수 있을까? 일본,
                    미국 선수들과의 치열한 경쟁이 예상됩니다.
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-gold mr-3">2.</span>
                  <div>
                    <strong className="text-gold">
                      쇼트트랙 한중 패권 대결
                    </strong>
                    <br />
                    2022 베이징에서 급부상한 중국과 전통 강호 한국의 치열한
                    대결. 특히 계주 종목에서 팀워크 대결이 흥미진진합니다.
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-gold mr-3">3.</span>
                  <div>
                    <strong className="text-gold">
                      김길리의 스피드스케이팅 2관왕 도전
                    </strong>
                    <br />
                    500m, 1000m 두 종목에서 모두 메달을 따낼 수 있을까?
                    네덜란드 선수들과의 100분의 1초 대결이 펼쳐집니다.
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-gold mr-3">4.</span>
                  <div>
                    <strong className="text-gold">
                      개최국 이탈리아의 선전
                    </strong>
                    <br />
                    홈 어드밴티지를 앞세운 이탈리아가 알파인 스키, 크로스컨트리
                    등에서 얼마나 선전할 수 있을지 주목됩니다.
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-gold mr-3">5.</span>
                  <div>
                    <strong className="text-gold">
                      신세대 스타들의 부상
                    </strong>
                    <br />
                    프리스타일 스키, 스노보드 등 익스트림 종목에서 10대 선수들의
                    파격적인 기술과 도전이 펼쳐질 예정입니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 시청 가이드 */}
        <section id="how-to-watch" className="mb-16">
          <h2 className="text-3xl font-bold text-gold mb-6 border-b border-navy-800 pb-3">
            7. 시청 가이드
          </h2>

          <div className="space-y-6">
            <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gold mb-4">
                📺 한국 중계 방송
              </h3>

              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    지상파 방송
                  </h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>KBS, MBC, SBS</strong> - 개막식, 폐막식 및 주요
                      경기 중계
                    </li>
                    <li>
                      <strong>KBS2</strong> - 쇼트트랙, 스피드스케이팅,
                      피겨스케이팅 집중 중계
                    </li>
                    <li>
                      <strong>MBC 스포츠플러스</strong> - 설상 종목 및 슬라이딩
                      종목
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    케이블 및 온라인
                  </h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>SPOTV</strong> - 전 종목 생중계 및 재방송
                    </li>
                    <li>
                      <strong>KBS N SPORTS</strong> - 24시간 올림픽 전용 채널
                      운영
                    </li>
                    <li>
                      <strong>네이버 스포츠, 쿠팡플레이</strong> - 온라인
                      실시간 스트리밍
                    </li>
                  </ul>
                </div>

                <div className="bg-navy-950 rounded-lg p-4">
                  <p className="text-sm text-gold font-semibold mb-2">
                    💡 추천 시청 방법
                  </p>
                  <p className="text-sm">
                    메달 가능성이 높은 경기는 생중계로, 새벽 경기는 다음날 아침
                    하이라이트로 시청하세요. 메달나우에서 실시간 순위와 일정을
                    확인하시면 놓치지 않고 시청할 수 있습니다!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gold mb-4">
                🌐 국제 중계 및 스트리밍
              </h3>

              <div className="space-y-3 text-gray-300">
                <div>
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    Olympics.com
                  </h4>
                  <p>
                    IOC 공식 웹사이트에서 일부 경기 무료 스트리밍 제공. 하이라이트
                    영상과 인터뷰, 비하인드 스토리도 확인할 수 있습니다.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gold mb-2">
                    유튜브 공식 채널
                  </h4>
                  <p>
                    올림픽 공식 유튜브 채널에서 하이라이트, 메달 세레모니, 선수
                    인터뷰 등 다양한 콘텐츠가 제공됩니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gold mb-4">
                📱 메달나우 활용 가이드
              </h3>

              <div className="space-y-3 text-gray-300">
                <p>
                  메달나우에서는 2026 밀라노-코르티나 동계올림픽의 모든 정보를
                  실시간으로 제공합니다:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong className="text-gold">실시간 메달 순위</strong> -
                    국가별, 종목별 메달 현황 업데이트
                  </li>
                  <li>
                    <strong className="text-gold">경기 일정</strong> - 한국 시간
                    기준 경기 일정 및 중계 정보
                  </li>
                  <li>
                    <strong className="text-gold">한국 선수 알림</strong> - 한국
                    선수 출전 경기 시작 전 알림 (설정 시)
                  </li>
                  <li>
                    <strong className="text-gold">최신 뉴스</strong> - 올림픽
                    관련 속보 및 선수 인터뷰
                  </li>
                  <li>
                    <strong className="text-gold">경기 결과</strong> - 종목별
                    상세 결과 및 하이라이트
                  </li>
                </ul>

                <div className="bg-navy-950 rounded-lg p-4 mt-4">
                  <p className="text-sm text-gold font-semibold mb-2">
                    ⚡ 빠른 접근 팁
                  </p>
                  <p className="text-sm">
                    메달나우를 즐겨찾기에 추가하고 모바일 홈 화면에 바로가기를
                    만들어두세요. 경기 시작 전 푸시 알림을 받을 수 있습니다!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 마무리 */}
        <section className="bg-gradient-to-br from-navy-900 to-navy-800 border-2 border-gold rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gold mb-4">
            2026 밀라노-코르티나, 함께 응원해요! 🇰🇷
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            이탈리아 알프스에서 펼쳐지는 겨울 스포츠의 축제, 2026 동계올림픽.
            <br />
            한국 대표팀의 메달 사냥을 메달나우와 함께 응원하세요!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href="/rankings"
              className="bg-gold hover:bg-gold-600 text-navy-900 font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center"
            >
              실시간 메달 순위 보기
            </a>
            <a
              href="/schedule"
              className="bg-navy-800 hover:bg-navy-700 text-gold border border-gold font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center"
            >
              경기 일정 확인하기
            </a>
          </div>

          <div className="text-sm text-gray-400 mt-8">
            <p>마지막 업데이트: 2026년 1월</p>
            <p className="mt-1">
              이 가이드는 메달나우가 제공하는 2026 동계올림픽 종합 정보입니다.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
