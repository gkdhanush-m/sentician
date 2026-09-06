/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        saira: ['Saira', 'sans-serif'],
        galada: ['"Galada"', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
        rockwell: ['"Rockwell"', 'serif'],
      },
      keyframes: {
        shakeY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-5px)' },
          '75%': { transform: 'translateY(5px)' },
        },
        rotateAndZoom: {
          '0%': { transform: 'rotate(0deg) scale(1.6)' },
          '100%': { transform: 'rotate(360deg) scale(1.6)' },
        },
      },
      animation: {
        'spin-zoom': 'rotateAndZoom 12s linear infinite',
        shakeY: 'shakeY 0.5s ease-in-out 3',
      },
      colors: {
        'custom-blue': '#239FE3',
        'custom-black': '#4B535B',
        'custom-light-blue': '#50bcf7',
        'custom-gray-black': '#33364A',
        'custom-scrool-bg': '#6827DA',
        'custom-white-bg': '#E6E9F2',
        'custom-red-line': '#BB3279',
        'custom-client-bg': '#15122C',
        'custom-nav-pink-bg': '#3C2B6A',
        'custom-nav-blue-bg': '#1E4A6A',
        'custom-nav-blue-center-bg': '#222847',
        'custom-light-blue-bg': '#F2EBFF',
        'custom-thick-blue': '#6827DA',
        'custom-tablet-blue': '#8A50F5',
      },
      gradientColorStops: {
        'custom-blue': '#239FE3',
      },
    },
  },
  plugins: [],
}

