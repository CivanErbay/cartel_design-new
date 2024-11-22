/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      screens: {
        xl: '1440px',
        '1.5xl': '1520px',
        '2xl': '1920px',
      },
      colors: { primary: '#3bebca' },
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
};
