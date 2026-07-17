/** @type {import('tailwindcss').Config} */
export default {
  // Light theme only. Kept the `class` strategy so a future dark mode is easy.
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2.5rem',
        xl: '4rem',
      },
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        // Light teal page background — #f7fefe
        paper: '#f7fefe',
        surface: {
          50: '#ffffff',
          100: '#f2fcfc',
          200: '#f7fefe',
          300: '#d0f5f5',
        },
        // Deep teal-charcoal text for readability on both white cards and the
        // soft-teal page background.
        navy: {
          950: '#03130f',
          900: '#062b23', // headings
          800: '#0f3830',
          700: '#1f5347',
          600: '#33695c', // strong body
          500: '#527d72', // muted body
          400: '#7a9a90', // faint / labels
          300: '#a9c2bb',
        },
        // Subtle teal-tinted hairline borders.
        line: {
          DEFAULT: '#b8f0eb',
          soft: '#d4faf8',
          strong: '#7ee8dc',
        },
        // Bright teal brand accent (#10DDC2) for CTAs, step numbers, and interactive states.
        electric: {
          DEFAULT: '#10DDC2',
          50: '#ecfffb',
          100: '#d4faf6',
          200: '#a8f5ec',
          300: '#6eebdd',
          400: '#3de8d4',
          500: '#10DDC2',
          600: '#0BB59F',
          700: '#099a87',
        },
        // Pale aqua — pairs with the teal accent for ambient glows.
        aqua: {
          200: '#d4faf8',
          400: '#7ee8dc',
          500: '#10DDC2',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        breathe: '0.14em',
      },
      fontSize: {
        'display-sm': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        display: ['clamp(3.25rem, 9vw, 7rem)', { lineHeight: '0.96', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(4rem, 12vw, 9.5rem)', { lineHeight: '0.92', letterSpacing: '-0.045em' }],
      },
      backgroundImage: {
        // Faint, well-lit tints rather than glows.
        'radial-glow':
          'radial-gradient(60% 60% at 50% 35%, rgba(16,221,194,0.14) 0%, rgba(16,221,194,0) 70%)',
        'radial-aqua':
          'radial-gradient(50% 50% at 50% 50%, rgba(16,221,194,0.18) 0%, rgba(16,221,194,0) 70%)',
        'electric-sheen':
          'linear-gradient(120deg, rgba(16,221,194,0) 0%, rgba(16,221,194,0.5) 45%, rgba(61,232,212,0.7) 50%, rgba(16,221,194,0.5) 55%, rgba(16,221,194,0) 100%)',
        grid:
          'linear-gradient(rgba(6,43,35,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6,43,35,0.05) 1px, transparent 1px)',
      },
      boxShadow: {
        // Soft, teal-tinted elevation for the primary CTA.
        glow: '0 10px 30px -10px rgba(16,221,194,0.45)',
        'glow-soft': '0 20px 50px -24px rgba(16,221,194,0.35)',
        card: '0 1px 2px rgba(6,43,35,0.04), 0 12px 32px -16px rgba(6,43,35,0.12)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        shimmer: 'shimmer 6s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3.5s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
