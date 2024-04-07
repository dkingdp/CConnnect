module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#569542",
          200: "#252A34B2",
          300: "#C7D833",
          400: "#F48C06",
          500: "#2F327D",
          600: "#5F5F7E",
          700: "#22262F",
          800: "#AFAFAF",
          900: "#EDF7F5"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
