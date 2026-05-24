/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          black:    '#0A0A0A',
          white:    '#FFFFFF',
          platinum: '#D4D4D4',
          silver:   '#6B6B6B',
          offwhite: '#F5F5F5',
          border:   '#E5E5E5',
        },
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.25, 0.4, 0.25, 1)',
      },
    },
  },
  plugins: [],
}

