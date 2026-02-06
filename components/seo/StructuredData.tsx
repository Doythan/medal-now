import Script from 'next/script';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'breadcrumb' | 'article' | 'event' | 'sportsEvent';
  data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: '메달나우',
          alternateName: 'MedalNow',
          url: 'https://medal-now.pages.dev',
          logo: 'https://medal-now.pages.dev/logo.png',
          description: '2026 밀라노-코르티나 동계올림픽 실시간 메달 순위, 경기 일정, 뉴스 정보 제공',
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'contact@medalnow.com',
            contactType: 'Customer Service',
            availableLanguage: ['Korean', 'English']
          },
          sameAs: [
            'https://medal-now.pages.dev'
          ]
        };

      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: '메달나우',
          alternateName: 'MedalNow',
          url: 'https://medal-now.pages.dev',
          description: '2026 밀라노-코르티나 동계올림픽 실시간 정보',
          inLanguage: 'ko-KR',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://medal-now.pages.dev/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        };

      case 'breadcrumb':
        return data;

      case 'article':
        return {
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: data.title,
          description: data.description,
          datePublished: data.publishDate,
          dateModified: data.modifiedDate || data.publishDate,
          author: {
            '@type': 'Organization',
            name: '메달나우'
          },
          publisher: {
            '@type': 'Organization',
            name: '메달나우',
            logo: {
              '@type': 'ImageObject',
              url: 'https://medal-now.pages.dev/logo.png'
            }
          }
        };

      case 'sportsEvent':
        return {
          '@context': 'https://schema.org',
          '@type': 'SportsEvent',
          name: '2026 밀라노-코르티나 동계올림픽',
          description: '제25회 동계올림픽',
          startDate: '2026-02-06',
          endDate: '2026-02-22',
          location: {
            '@type': 'Place',
            name: '밀라노-코르티나',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'IT',
              addressLocality: 'Milano'
            }
          },
          organizer: {
            '@type': 'Organization',
            name: 'IOC',
            url: 'https://olympics.com'
          }
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}
