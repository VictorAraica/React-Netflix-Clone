module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'

  theme: {
    fontSize: {
      smallest: ".5rem",
      tags: ".68rem",
      tiny: ".65rem",
      xs: ".75rem",

      sm: ".875rem",

      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",

      "3xl": "1.875rem",

      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",

      "7xl": "5rem",
    },
    colors: {
      black: "#000",
      netflixBlack: "#141414",
      white: "#fff",
      // rgb 240
      "gray-50": "#f0f0f0",
      // rgb 230
      "gray-100": "#e6e6e6",
      // rgb 215
      "gray-200": "#d7d7d7",
      // rgb 200
      "gray-300": "#c8c8c8",
      // rgb 185
      "gray-400": "#b9b9b9",
      // rgb 170
      "gray-500": "#aaaaaa",
      // rgb 150
      "gray-600": "#969696",
      // rgb 130
      "gray-700": "#828282",
      // rgb 100
      "gray-800": "#646464",
      // rgb 80
      "gray-900": "#505050",
      // rgb 70, 211, 105
      "green-500": "#46D369",
      "indigo-500": "#6366F1",
    },

    extend: {
      spacing: {
        25: "6.70rem",
        72: "1.375rem",
        96: "25rem",
        150: "40rem",
        200: "15%",
        250: "4%",
        300: "92%",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["responsive", "focus-within"],
      zIndex: ["hover"],
      rotate: ["responsive", "active", "group-hover"],
      width: ["responsive", "focus-within"],
      inset: ["responsive", "group-hover", "hover"],
      objectPosition: ["responsive", "group-hover", "hover"],
      position: ["responsive", "group-hover", "hover"],
      resize: ["responsive", "group-hover", "hover"],
      scale: ["active", "hover", "responsive", "group-hover"],
      transform: ["responsive", "group-hover", "hover"],
      translate: ["responsive", "group-hover", "hover"],
    },
  },
  plugins: [],
};
