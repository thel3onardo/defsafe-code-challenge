import defaultTheme from "tailwindcss/defaultTheme"; //eslint-disable-line
import type { Config } from "tailwindcss"; //eslint-disable-line

export default <Partial<Config>>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4A4E69",
          dark: "#22223B",
        },
        secondary: "#9A8C98",
        surface: "#C9ADA7",
        light: "#F2E9E4",
      },
      fontFamily: {
        sans: ["Jost"],
      },
    },
  },
  plugins: [],
};
