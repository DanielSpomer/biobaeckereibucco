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
        background: '#f4f0e4',
        surface: '#fffdf7',
        'surface-container': '#e9e2cf',
        primary: '#00357f',
        'primary-bright': '#0a4d9b',
        yellow: '#ffca50',
        sky: '#6aacc2',
        green: '#6fa162',
        red: '#a0342a',
        charcoal: '#202427',
        muted: '#565c5e',
        line: '#d5ccb8',
      },
      fontFamily: {
        serif: ['Mediator Serif', 'Georgia', 'serif'],
        sans: ['Avenir Next', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 16px 36px rgba(59, 39, 34, 0.08)',
        lift: '0 22px 54px rgba(0, 53, 127, 0.16)',
      },
    },
  },
  plugins: [],
}
