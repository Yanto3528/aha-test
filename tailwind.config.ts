import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
      ubuntu: ['var(--font-ubuntu)', 'sans-serif'],
    },
    colors: {
      primary: {
        500: '#00A3FF',
        DEFAULT: '#00A3FF',
      },
      greyscale: {
        400: '#5D5D5D',
        500: '#929292',
        800: '#242424',
        light: '#1B1B1B',
        dark: '#181818',
        darker: '#080808',
      },
      fail: {
        main: '#FF4769',
      },
      black: '#000',
      white: '#fff',
      transparent: 'transparent',
    },
    extend: {
      gridTemplateColumns: {
        'calendar-header': '3rem 1fr 3rem',
      },
      boxShadow: {
        calendar: '4px 4px 20px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [require('tailwindcss-radix')()],
};
export default config;
