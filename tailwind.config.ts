import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

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
        sans: ["Jost", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
