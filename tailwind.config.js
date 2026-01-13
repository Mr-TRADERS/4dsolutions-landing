/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin-slow 18s linear infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'light-sweep': 'light-sweep 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}