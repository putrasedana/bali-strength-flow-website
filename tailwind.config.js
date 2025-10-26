/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1a1a1a',
        'dark-navy': '#0a1628',
        'electric-blue': '#00d4ff',
        'lime-accent': '#a3ff12',
        'energy-orange': '#ff6b35',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
