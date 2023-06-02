/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      darkerGrotesque: 'var(--darker-grotesque)',
      hankenGrotesk: 'var(--hanken-grotesk)',
      barlow: 'var(--barlow)',
      arimo: 'var(--arimo)',
    },
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(280px, 1fr))',
      },
      colors: {
        darkGreen: 'var(--dark-green)',
        brightRed: 'var(--bright-red)',
        lightYellow: 'var(--light-yellow)',
        darkYellow: 'var(--dark-yellow)',
        lightBlue: 'var(--light-blue)',
        brightPink: 'var(--bright-pink)',
        darkPink: 'var(--dark-pink)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
