/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent1: 'var(--accent1)',
        accent2: 'var(--accent2)',
        accent3: 'var(--accent3)',
        accent4: 'var(--accent4)',
        accent5: 'var(--accent5)',
      },
    },
  },
  plugins: [],
}
