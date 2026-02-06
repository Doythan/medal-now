import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Yeti',
        allow: '/',
        crawlDelay: 0,
      },
    ],
    sitemap: [
      'https://medal-now.pages.dev/sitemap.xml',
      'https://medal-now.pages.dev/rss.xml',
    ],
    host: 'https://medal-now.pages.dev',
  }
}
