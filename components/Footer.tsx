export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 border-t border-navy-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                <span className="text-navy-900 font-bold text-sm">M</span>
              </div>
              <span className="text-lg font-bold text-gold">메달나우</span>
            </div>
            <p className="text-gray-400 text-sm">
              실시간 올림픽 메달 소식과 경기 일정을 한눈에 확인하세요.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <a href="/rankings" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  순위
                </a>
              </li>
              <li>
                <a href="/schedule" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  일정
                </a>
              </li>
              <li>
                <a href="/news" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  뉴스
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-semibold mb-4">문의</h3>
            <p className="text-gray-400 text-sm">
              이메일: contact@medalnow.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-navy-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} 메달나우(MedalNow). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
