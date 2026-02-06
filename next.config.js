/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },

  // SEO 최적화
  trailingSlash: true,

  // 성능 최적화
  compress: true,

  // 환경 변수
  env: {
    SITE_URL: 'https://medal-now.pages.dev',
  },
}

module.exports = nextConfig
