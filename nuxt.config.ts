// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  experimental: {
    payloadExtraction: false,
  },

  components: {
    dirs: ["~/components"],
  },

  css: ['~/assets/styles.css'],
  modules: ["@nuxtjs/tailwindcss", '@nuxt/image'],

  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no',
      link: [
        { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.15.0/css/all.css' },
      ],
      title: 'Wang-Pa',
      script: [],
    }
  }
});