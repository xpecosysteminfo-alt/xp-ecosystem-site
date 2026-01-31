/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./eduxp/**/*.html", "./fitxp/**/*.html", "./cookxp/**/*.html", "!./node_modules/**"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0f172a',
        'brand-primary': '#3b82f6',
        'brand-secondary': '#64748b',
        'glass-black': 'rgba(0, 0, 0, 0.7)',
        'glass-white': 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'water-flow': 'water-flow 8s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'water-flow': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(10px, -10px) scale(1.05)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
