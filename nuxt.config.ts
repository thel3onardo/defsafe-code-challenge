// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxt/test-utils/module",
  ],

  devtools: { enabled: true },

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === "production"
          ? { preset: ["default", { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },

  googleFonts: {
    families: {
      Jost: [400, 500, 600, 700],
    },
    prefetch: true,
    preload: true,
  },

  typescript: {
    strict: true,
    builder: "vite",
  },

  routeRules: {
    "/": { prerender: true },
  },
});
