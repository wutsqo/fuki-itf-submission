module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        olivedrab: "#9BBA47",
        skyblue: "#7BBACF",
        whitesmoke: "#F1F3F6",
        darkslategray: "#424242",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
