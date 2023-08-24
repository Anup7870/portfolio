export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        "128":"52.8rem"
      },
      colors: {
        "light": "var(--light)",
        "light-2": "var(--light-2)",
        "main-light": "var(--main-light)",
        "main-color": "var(--main-color)",
        "grad": "var(--grad)",
        "but":"var(--but)",
        "line":"var(--line)"
      },
      top:{
        "minu":"-1.5rem"
      }
    },
    fontFamily: {
      'logo': [ 'Dancing Script', "cursive"],
      'headinSub': ['Poppins', "sans-serif"],
      'body': ['Raleway', "sans-serif"],
    }
  },
  plugins: [],
}