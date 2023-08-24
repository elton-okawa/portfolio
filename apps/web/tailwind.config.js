const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.indigo['500'],
        secondary: colors.orange['400'],
      },
      keyframes: ({ theme }) => ({
        typing: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
        'blink-caret': {
          from: { borderRight: `0.2em solid ${theme('colors.secondary')}` },
          to: { borderColor: theme('colors.secondary') },
          '50%': { borderColor: 'transparent' },
        },
      }),
      animation: {
        typing: 'typing 1.5s steps(11, end), blink-caret 1s step-end 5',
      },
    },
  },
};
