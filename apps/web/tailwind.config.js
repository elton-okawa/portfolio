const colors = require('tailwindcss/colors');
const { createThemes } = require('tw-colors');
const animation = require('tailwindcss-animated');
const { scrollbarGutter } = require('tailwind-scrollbar-utilities');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  plugins: [
    animation,
    createThemes(
      {
        light: {
          primary: colors.indigo['500'],
          secondary: colors.orange['400'],
          accent: colors.teal['600'],
        },
        dark: {
          primary: colors.indigo['300'],
          secondary: colors.orange['300'],
          accent: colors.teal['500'],
        },
      },
      { getThemeClassName: (themeName) => themeName }
    ),
    scrollbarGutter(),
  ],
  theme: {
    extend: {
      keyframes: ({ theme }) => ({
        typing: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
        'blink-caret': {
          from: {
            borderRight: `0.2em solid ${theme('colors.secondary')}`,
          },
          to: { borderColor: theme('colors.secondary') },
          '50%': { borderColor: 'transparent' },
        },
        counter: {
          '0%': {
            'counter-increment': 'count 0',
          },
          '25%': {
            'counter-increment': 'count 1',
          },
          '50%': {
            'counter-increment': 'count 2',
          },
          '75%': {
            'counter-increment': 'count 3',
          },
          '100%': {
            'counter-increment': 'count 4',
          },
        },
      }),
      animation: {
        typing: 'typing 1.5s steps(11, end), blink-caret 1s step-end 5',
      },
      animationDelay: {
        2000: '2s',
      },
    },
  },
};
