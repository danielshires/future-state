/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['Xanh Mono', 'SFMono-Regular'],
      'display': ["Geostar Fill", 'serif'],
    },
    letterSpacing: {
      widest: '.25em',
    }
  },
  plugins: [],
  darkMode: 'media',
}

