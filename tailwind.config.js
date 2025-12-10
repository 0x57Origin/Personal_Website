/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        'cyber-dark': '#0A0A0A',
        'cyber-text': '#E5E5E5',
        'cyber-green': '#00E676',
        'cyber-gray': '#1A1A1A',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        'none': '0px',
      }
    },
  },
  plugins: [],
}