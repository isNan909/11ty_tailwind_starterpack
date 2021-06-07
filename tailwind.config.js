module.exports = {
  container: {
    center: true,
  },
  purge: {
    content: ["./src/**/*.njk", "./src/**/*.html", "./src/**/*.svg"],
    layers: ["components"],
    options: {
      safelist: ["hidden"],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
