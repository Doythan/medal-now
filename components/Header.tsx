"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "순위", href: "/rankings" },
  { name: "일정", href: "/schedule" },
  { name: "뉴스", href: "/news" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-navy-900 border-b border-navy-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
              <span className="text-navy-900 font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-gold">메달나우</span>
          </Link>

          {/* Navigation Menu */}
          <div className="flex space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-gold border-b-2 border-gold"
                      : "text-gray-300 hover:text-gold hover:border-b-2 hover:border-gold-400"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
