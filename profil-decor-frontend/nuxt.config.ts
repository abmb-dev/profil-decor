// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui', '@nuxtjs/google-fonts', '@pinia/nuxt'],
  googleFonts: {
    families: {
      Roboto: [100],
      Montserrat: [100, 400, 600, 700],
    }
  },
  alias: {
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs'
  },
})