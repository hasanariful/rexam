/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // All Font Family
      fontFamily: {
        pop: ['Poppins'],
        nun: ['Nunito'],
      },
      // All Font Family

      // ALl Colors
      colors: {
        bannerBg: '#F2F6F7',
        paraColor: '#1D2022',
        para2Color: '#5C727D',
        buttonBg: '#FF5A3C',
        phText: '#5C5B7B',
        phOutline: '#6A6986',
        borderColor: '#CECED7',
      },
      // ALl Colors

      // Container
      maxWidth: {
        container: '1170px',
      },
      // Container






    },
  },
  plugins: [],
}

