/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',  // Make sure this includes JSX/TSX files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#808080',
        gold: '#FFD700'
      },
      boxShadow: {
        'gold': '0 4px 10px rgba(255, 215, 0, 0.5)',  // Gold box shadow
        'black': '0 4px 10px rgba(0, 0, 0, 0.7)',    // Black box shadow
        'gray': '0 4px 10px rgba(128, 128, 128, 0.5)', // Gray box shadow
        'neon': '0 0 10px rgba(255, 0, 150, 0.8), 0 0 20px rgba(255, 0, 150, 0.6)',  // Neon glow effect
      },
      animation: {
        'pulse-custom': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Custom pulse animation
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '.5',
          },
        },
      },
    },
  },
  plugins: [],
}


