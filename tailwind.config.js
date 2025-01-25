/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins, serif',
        montserrat: 'Montserrat, serif',
      },

      height: {
        hero: 'calc(95vh - 80px)',
        'hero-sm': 'calc(95vh - 120px)',
      },
    },
  },
  plugins: [],
};
