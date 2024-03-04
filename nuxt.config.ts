// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],

  devtools: { enabled: true },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    //TODO: set viewer to false in production
    viewer: true
  },

  googleFonts: {
    families: {
      Jost: true
    }
  }
})
