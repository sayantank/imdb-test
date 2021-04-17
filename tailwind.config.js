module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-purple": "#7754ce",
        "dark-purple": "#210e5d",
        blue: "#217bef",
        yellow: "#f3ad0b",
        gold: "#f3ad0b",
      },
      spacing: {
        108: "30rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
