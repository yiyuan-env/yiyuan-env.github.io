module.exports = {
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
    },
  },
  plugins: [],
}
