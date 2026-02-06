import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#0a1929',
        },
        gold: {
          DEFAULT: '#D4AF37',
          50: '#faf8f0',
          100: '#f5efd9',
          200: '#ecddb3',
          300: '#e2c983',
          400: '#d9b55e',
          500: '#D4AF37',
          600: '#b8962a',
          700: '#997c22',
          800: '#7d6421',
          900: '#68521f',
        },
      },
    },
  },
  plugins: [],
};
export default config;
