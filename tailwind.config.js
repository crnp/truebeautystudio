/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        true: {
          gray: "#2e2e2e",
          pink: "#ff9595",
          darkpink: "#cc7777",
          darkerpink: "#995959",
          lightpink: "#ffaaaa",
          lighterpink: "#ffcaca",
        },
      },
      fontFamily: {
        sans: "Lato, sans-serif",
        serif: "Georgia, serif",
      },
    },
  },
  plugins: [
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
    plugin(function ({ addUtilities }) {
      const utils = {
        ".custom-scroll::-webkit-scrollbar": {
          width: "12px",
          "background-color": "#ff9595",
        },
        ".custom-scroll::-webkit-scrollbar-track": {
          "background-color": "#ff9595",
        },
        ".custom-scroll::-webkit-scrollbar-thumb": {
          "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.1)",
          "background-color": "#cc7777",
        },
        ".hide-scrollbar": {
          "overflow-y": "scroll",
          "scrollbar-width": "none" /* Firefox */,
          "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          width: "0",
          height: "0",
          display: "none",
        },
      };
      addUtilities(utils);
    }),
  ],
  // Add Custom Classes (import )
  //
  // plugins: [
  //   plugin(function({ addUtilities }){
  //     const utils = {
  //       '.custom-class': {
  //         'display': "inline",
  //       }
  //     };

  //     addUtilities(utils)
  //   })
  // ],
};
