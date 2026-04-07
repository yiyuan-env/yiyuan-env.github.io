module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2D5A27',
        'mint-green': '#F0F9F1',
        'sand': '#F5F5DC',
        'ocean-blue': '#0077B6',
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0.01', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0.01', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0.01', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'fade-in-left': 'fade-in-left 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.8s ease-out 0.2s forwards',
        'fade-in-up-delay-1': 'fade-in-up 0.5s ease-out 0.1s forwards',
        'fade-in-up-delay-3': 'fade-in-up 0.5s ease-out 0.3s forwards',
      }
    },
  },
  plugins: [],
}
