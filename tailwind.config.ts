import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'monaspace-neon': ['var(--font-monaspace-neon)'],
        'monaspace-argon': ['var(--font-monaspace-argon)'],
        'monaspace-xenon': ['var(--font-monaspace-xenon)'],
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        }
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      }
    },
  },
  plugins: [],
}
export default config
