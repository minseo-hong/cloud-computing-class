import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '390px',
        desktop: '600px',
        lg: '992px',
      },
      fontFamily: {
        'clash-display': ['Clash Display', 'sans-serif'],
        pretendard: ['Pretendard', 'sans-serif'],
      },
      colors: {
        black: '#040000',
        gray: '#3F3F3F',
        'dark-gray': '#181818',
        white: '#FFFFFF',
        'dark-red': '#D83521',
        red: '#FF3B2A',
      },
    },
  },
  plugins: [],
};
export default config;
