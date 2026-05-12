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
        background: '#f2ebd0',
        surface: '#fff9e9',
        'surface-container': '#e8ddbe',
        primary: '#00357f',
        'primary-bright': '#004aad',
        yellow: '#ffca50',
        sky: '#6aacc2',
        green: '#6fa162',
        red: '#a0342a',
        charcoal: '#3b2722',
        muted: '#5c5049',
        line: '#d9c9a5',
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 16px 36px rgba(59, 39, 34, 0.08)',
        lift: '0 22px 54px rgba(0, 53, 127, 0.16)',
      },
    },
  },
  plugins: [],
}
