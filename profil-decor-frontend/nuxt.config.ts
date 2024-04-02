// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [ '~/assets/css/main.css', '~/assets/css/lenis.css', '~/assets/css/tailwind.css', '~/assets/css/splide.css'],
  modules: ['@nuxtjs/google-fonts', '@pinia/nuxt', "@nuxt/image"],
  googleFonts: {
    families: {
      Roboto: [100],
      Montserrat: [100, 400, 600, 700],
    }
  },
  alias: {
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dqoijindf/image/upload/q_auto:low/profil_decor/'
    }
  },
  runtimeConfig: {
    CLOUDINARY_CLOUD_NAME: ""
  }
})