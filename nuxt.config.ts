// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
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
      Jost: true,
    },
    prefetch: true,
    preload: true,
  },

  // typescript: {
  //   strict: true,
  // },

  // routeRules: {
  //   "/": { prerender: true },
  //   // "/api/cats/*": { cache: { maxAge: 60 * 60 } },
  // },
});
