const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        // example: "Bebas": ["Bebas Neue", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        // example: 'Hidreco': "url('/img/hidreco.png')"
      },
      colors: {
        // example: "dark-primary": "#0A0F0D",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
