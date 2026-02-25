import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
            colors: {
                background: '#1C1C1C',
                surface: '#242424',
                card: '#2b2b2b',
                border: '#333333',
                'border-bright': '#3f3f3f',
                primary: {
                    DEFAULT: '#D4AF37',
                    50: '#fff9e6',
                    100: '#fff5d1',
                    200: '#ffe8a3',
                    300: '#ffd976',
                    400: '#ffc54a',
                    500: '#d4af37',
                    600: '#b38f2b',
                    700: '#8f6f20',
                    800: '#6b4f16',
                    900: '#4a3810',
                },
                accent: {
                    DEFAULT: '#D4AF37',
                },
                muted: '#A3A3A3',
                subtle: '#BDBDBD',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'hero-gradient':
                    'radial-gradient(ellipse at 20% 50%, rgba(212,175,55,0.10) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(28,28,28,0.06) 0%, transparent 50%)',
                'card-gradient':
                    'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                'glow-gold':
                    'radial-gradient(ellipse at center, rgba(212,175,55,0.30) 0%, transparent 70%)',
                'glow-charcoal':
                    'radial-gradient(ellipse at center, rgba(28,28,28,0.18) 0%, transparent 70%)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'grid-flow': 'gridFlow 20s linear infinite',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 16px rgba(212,175,55,0.18)' },
                    '100%': { boxShadow: '0 0 36px rgba(212,175,55,0.32), 0 0 72px rgba(28,28,28,0.08)' },
                },
                gridFlow: {
                    '0%': { backgroundPosition: '0 0' },
                    '100%': { backgroundPosition: '50px 50px' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
            boxShadow: {
                'glow-sm': '0 0 10px rgba(212,175,55,0.18)',
                'glow-md': '0 0 20px rgba(212,175,55,0.26)',
                'glow-lg': '0 0 40px rgba(212,175,55,0.34), 0 0 80px rgba(28,28,28,0.08)',
                'card': '0 4px 24px rgba(0, 0, 0, 0.48)',
                'card-hover': '0 8px 40px rgba(212,175,55,0.08), 0 4px 24px rgba(0, 0, 0, 0.6)',
            },
        },
    },
    plugins: [],
}

export default config
