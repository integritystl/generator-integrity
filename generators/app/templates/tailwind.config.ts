import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  safelist: ['text-2xl', 'text-xl', 'text-lg', 'text-base', 'text-sm', 'text-xs', 'grid-cols-1', 'grid-cols-2'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      transparent: colors.transparent,
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      orange: colors.orange,
    },
    extend: {
      animation: {
        // Tooltip
        'slide-up-fade': 'slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-fade': 'slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        // Tooltip
        'slide-up-fade': {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down-fade': {
          '0%': { opacity: '0', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    forms,
    typography,
    plugin(({ addVariant }) => {
      addVariant('radix-side-top', '&[data-side="top"]')
      addVariant('radix-side-bottom', '&[data-side="bottom"]')
    }),
  ],
}

export default config
