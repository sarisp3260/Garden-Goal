module.exports = {
  content: ['./index.html', './src/**/*.{jsx,ts,js}'],
  theme: {

    screens:{
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },

    extend: {


      colors:{
        purple: "#B4A4FC",
        primary: "#6951EB",
        blueDark: "#1B2B43",
        white: "#F9F2F5",
        ligthGray: "#1b2b431a",
      },

      fontFamily: {
        'montserrat': ['"Montserrat"']
      },

      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}
