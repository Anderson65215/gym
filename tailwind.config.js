/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fold-y': 'fold-y 0.65s linear both',
      },
      keyframes: {
        'fold-y': {
          '0%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0.5)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: ['@tailwindcss/forms'],
}


