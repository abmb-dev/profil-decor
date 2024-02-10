// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Roboto: [100, 300],
      Montserrat: [100, 200, 300, 400]
    }
  }
})
