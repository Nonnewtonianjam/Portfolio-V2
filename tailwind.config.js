module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#764BA2',
        lightPurple: '#667EEA'
      },
    },
      fontFamily: {
        'spectral': ['Spectral', 'serif'],
        'monsterrat': ['Monsterrat', 'sans-serif'],
      }
    },
  plugins: [],
}