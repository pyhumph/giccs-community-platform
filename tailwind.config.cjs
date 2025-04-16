const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", ...fontFamily.sans],
        dm: ["DM Sans", ...fontFamily.sans],
        inter: ["Inter", ...fontFamily.sans],
        lato: ["Lato", ...fontFamily.sans],
        manrope: ["Manrope", ...fontFamily.sans],
        merriweather: ["Merriweather", ...fontFamily.serif],
        nunito: ["Nunito", ...fontFamily.sans],
        openSans: ["Open Sans", ...fontFamily.sans],
        roboto: ["Roboto", ...fontFamily.sans],
        workSans: ["Work Sans", ...fontFamily.sans],
        dancingScript: ["Dancing Script", ...fontFamily.sans],
        Caveat: ["Caveat", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
