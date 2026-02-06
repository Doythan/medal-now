# 메달나우 (MedalNow)

2026 밀라노-코르티나 동계올림픽 실시간 정보 플랫폼

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)

## 🌟 주요 기능

### 📊 실시간 메달 순위
- 국가별 금·은·동 메달 집계
- 역대 동계올림픽 성적 비교
- 한국 메달 하이라이트

### 📅 경기 일정
- 종목별 상세 경기 일정
- 한국 선수 출전 경기 표시
- 메달 결정전 일정 하이라이트
- 한국 시간 기준 표시

### 📰 올림픽 뉴스
- 카테고리별 뉴스 정리
- 한국 선수단 소식
- 대회 주요 이슈
- 뉴스레터 구독 기능

### 📖 올림픽 가이드
- 대회 개요 및 일정
- 16개 종목 상세 소개
- 한국 주요 선수 프로필
- 경기장 안내
- 메달 전망 분석

## 🎯 서비스 특징

- ✅ **실시간 정보**: 최신 메달 순위와 경기 결과
- ✅ **한국 중심**: 한국 선수단 맞춤 정보
- ✅ **독창적 콘텐츠**: 심층 분석과 가이드
- ✅ **반응형 디자인**: 모든 기기 최적화
- ✅ **빠른 속도**: Next.js 14 App Router 활용

## 🛠️ 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Cloudflare Pages
- **SEO**: Dynamic Sitemap, Robots.txt, Open Graph

## 📂 프로젝트 구조

```
medalnow/
├── app/
│   ├── page.tsx              # 홈페이지
│   ├── rankings/             # 메달 순위
│   ├── schedule/             # 경기 일정
│   ├── news/                 # 뉴스
│   ├── posts/guide/          # 올림픽 가이드
│   ├── about/                # 소개
│   ├── contact/              # 문의
│   ├── privacy/              # 개인정보처리방침
│   ├── terms/                # 이용약관
│   ├── sitemap.ts            # 사이트맵
│   └── robots.ts             # robots.txt
├── components/
│   ├── Header.tsx            # 헤더
│   ├── Footer.tsx            # 푸터
│   └── MedalTable.tsx        # 메달 테이블
└── public/                   # 정적 파일
```

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 서버 실행

```bash
npm start
```

## 📄 주요 페이지

- `/` - 홈페이지 (메달 테이블, 주요 기능 소개)
- `/rankings` - 국가별 메달 순위
- `/schedule` - 경기 일정
- `/news` - 올림픽 뉴스
- `/posts/guide` - 올림픽 완벽 가이드
- `/about` - 서비스 소개
- `/contact` - 문의하기
- `/privacy` - 개인정보처리방침
- `/terms` - 이용약관

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary (Gold)**: `#FFD700` - 메달, 강조
- **Navy**: `#0A1628` - 배경
- **Gray**: 텍스트 및 보조 요소

### 타이포그래피
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, 2xl-6xl
- **Body**: Regular, sm-base

## 📱 반응형 디자인

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO 최적화

- ✅ 페이지별 고유 메타데이터
- ✅ Open Graph 태그
- ✅ Twitter Card
- ✅ 동적 Sitemap
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ 구조화된 데이터

## 🌐 배포

Cloudflare Pages에 배포되어 있으며, `main` 브랜치에 푸시하면 자동으로 배포됩니다.

## 📧 문의

- **이메일**: contact@medalnow.com
- **문의 페이지**: [/contact](/contact)

## 📜 라이선스

Copyright © 2026 메달나우(MedalNow). All rights reserved.

## 🙏 감사의 글

이 프로젝트는 2026 밀라노-코르티나 동계올림픽을 응원하는 마음으로 제작되었습니다.
모든 올림픽 팬들에게 유용한 정보를 제공하기 위해 노력하고 있습니다.

---

**메달나우와 함께 2026 동계올림픽을 즐기세요! 🥇⛸️🎿**
