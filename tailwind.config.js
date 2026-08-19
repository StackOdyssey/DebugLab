/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brutal: {
          yellow: '#FFE600',
          yellowLight: '#FFF677',
          lime: '#A3E635',
          green: '#22C55E',
          cyan: '#06B6D4',
          blue: '#3B82F6',
          sky: '#38BDF8',
          pink: '#F43F5E',
          magenta: '#EC4899',
          purple: '#8B5CF6',
          violet: '#7C3AED',
          orange: '#FB923C',
          amber: '#F59E0B',
          bg: '#FDFBF7',
          card: '#FFFFFF',
          darkBg: '#0F1117',
          darkCard: '#1A1D24',
          darkBorder: '#2E3440',
          black: '#121212',
        }
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0px 0px #000000',
        'brutal': '4px 4px 0px 0px #000000',
        'brutal-md': '6px 6px 0px 0px #000000',
        'brutal-lg': '8px 8px 0px 0px #000000',
        'brutal-xl': '12px 12px 0px 0px #000000',
        'brutal-white': '4px 4px 0px 0px #FFFFFF',
        'brutal-white-lg': '8px 8px 0px 0px #FFFFFF',
        'brutal-dark': '4px 4px 0px 0px #000000',
        'brutal-glow': '4px 4px 0px 0px #FFE600',
        'brutal-cyan': '4px 4px 0px 0px #06B6D4',
        'brutal-pink': '4px 4px 0px 0px #F43F5E',
        'brutal-lime': '4px 4px 0px 0px #A3E635',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Cabinet Grotesk', 'Space Grotesk', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '5': '5px',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'bounce-subtle': 'bounce-subtle 2s infinite ease-in-out',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
