import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fcece4',
          100: '#f1e4d4', 
          200: '#ece7dd',
          300: '#a5765b',
          400: '#a5765b',
          500: '#a5765b',
          600: '#8d5c4b',
          700: '#7a4f3e',
          800: '#674231',
          900: '#543524',
        },
        leather: {
          50: '#fcece4',
          100: '#f1e4d4',
          200: '#ece7dd', 
          300: '#a5765b',
          400: '#a5765b',
          500: '#a5765b',
          600: '#8d5c4b',
          700: '#7a4f3e',
          800: '#674231',
          900: '#543524',
        },
        brand: {
          primary: '#8d5c4b',
          light: '#f1e4d4',
          cream: '#fcece4', 
          medium: '#a5765b',
          neutral: '#ece7dd',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config