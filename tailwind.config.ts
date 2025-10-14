import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        headline: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        stats: ['Montserrat', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          '400': '#4ade80',
          '500': '#22c55e',
          '600': '#16a34a',
          '700': '#15803d',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          '500': '#a855f7',
          '700': '#7e22ce',
          '900': '#40196C',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        neutral: {
          '50': '#f8fafc',
          '100': '#f1f5f9',
          '200': '#e2e8f0',
          '300': '#cbd5e1',
          '400': '#94a3b8',
          '600': '#475569',
          '800': '#1e293b',
          '900': '#0f172a',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '3xl': '1.5rem',
        '2xl': '1rem',
        xl: 'calc(var(--radius) + 4px)', // 20px if radius is 16px
        lg: 'var(--radius)', // 16px
        md: 'calc(var(--radius) - 4px)', // 12px
        sm: 'calc(var(--radius) - 8px)', // 8px
      },
      fontSize: {
        'display': '4.5rem', // 72px
        'h1': '3rem', // 48px
        'h2': '2.25rem', // 36px
        'h3': '1.875rem', // 30px
        'h4': '1.5rem', // 24px
        'body-lg': '1.125rem', // 18px
        'body': '1rem', // 16px
        'body-sm': '0.875rem', // 14px
      },
      lineHeight: {
        'display': '1.1',
        'h1': '1.2',
        'h2': '1.25',
        'h3': '1.3',
        'h4': '1.4',
        'body-lg': '1.7',
        'body': '1.6',
        'body-sm': '1.5',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-up': {
          from: { transform: 'translateY(60px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-from-left': {
          from: { transform: 'translateX(-60px)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-from-right': {
          from: { transform: 'translateX(60px)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        'scale-in': {
          from: { transform: 'scale(0.8)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
        'float': {
          '0%': { transform: 'translateY(100vh) scale(1)' },
          '100%': { transform: 'translateY(-100vh) scale(1.1)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-in-out forwards',
        'slide-up': 'slide-up 0.8s cubic-bezier(0.6, -0.05, 0.01, 0.99) forwards',
        'slide-from-left': 'slide-from-left 0.8s cubic-bezier(0.6, -0.05, 0.01, 0.99) forwards',
        'slide-from-right': 'slide-from-right 0.8s cubic-bezier(0.6, -0.05, 0.01, 0.99) forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'float': 'float linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
