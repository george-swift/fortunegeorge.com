import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--backgroundColor)',
        foreground: 'var(--paragraphColor)',
        primary: 'var(--titleColor)',
        link: 'var(--linkColor)',
        overlay: 'var(--menuOverlayBackgroundColor)'
      },
      containers: {
        '8xl': '1400px'
      },
      fontFamily: {
        obviously: ['obviously', 'system-ui', 'serif']
      },
      fontSize: {
        hero: 'var(--heroTextFontSize)'
      },
      maxWidth: ({ theme, breakpoints }) => ({
        unset: 'unset',
        none: 'none',
        '8xl': '1400px',
        ...breakpoints(theme('screens'))
      })
    }
  },
  plugins: []
} satisfies Config
