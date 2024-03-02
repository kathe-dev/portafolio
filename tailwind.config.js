/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        ivory: {
          '50': '#fffffb',  
          '100': '#fefdf7', 
          '200': '#fdfbf0', 
          '300': '#fbf8e8', 
          '400': '#f8f5e1', 
          '500': '#F6F3DA',
          '600': '#e4e0c3', 
          '700': '#d2cdac', 
          '800': '#bfb995', 
          '900': '#ada57e'
        },
      }
    },
  },
  
  plugins: [],
}
