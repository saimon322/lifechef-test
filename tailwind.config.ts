import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,css}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#252728',
        primary: '#34A34F',
        'neutrals': {
          300: '#E1E3E5',
          400: '#BEC1C4',
          500: '#87898C',
        }
      },
      spacing: {
        '18': '4.5rem'
      },
      borderWidth: {
        '1': '1px',
        '1.5': '1.5px'
      },
      boxShadow: {
        modal: '0px 4px 4px 0px rgba(0, 0, 0, 0.02), 0px 4px 12px 0px rgba(0, 0, 0, 0.04), 0px 8px 24px 0px rgba(0, 0, 0, 0.06), 0px 16px 32px 0px rgba(0, 0, 0, 0.08)'
      }
    },
  },
  plugins: [],
}
export default config
