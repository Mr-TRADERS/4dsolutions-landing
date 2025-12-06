/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin-slow 18s linear infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'light-sweep': 'light-sweep 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
