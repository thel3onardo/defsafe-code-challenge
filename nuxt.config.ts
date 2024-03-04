// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/google-fonts", "nuxt-icon", "@nuxtjs/tailwindcss"],

  devtools: { enabled: true },

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: 'tailwind.config',
    editorSupport: true,
  },

  googleFonts: {
    families: {
      Jost: true,
    },
  },

  typescript: {
    strict: true,
  },
});
