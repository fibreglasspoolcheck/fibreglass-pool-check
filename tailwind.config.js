/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#1a1a1a', light: '#3d3d3d' },
        'warm-grey': '#6b6560',
        cream: '#faf8f5',
        'warm-white': '#f5f2ee',
        accent: { DEFAULT: '#d4622b', hover: '#b8531f' },
        deep: '#141211',
        'border-warm': '#e8e4df',
        brand: { dark: '#0f172a', orange: '#ea580c' },
      },
      fontFamily: {
        serif: ['var(--font-dm-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
