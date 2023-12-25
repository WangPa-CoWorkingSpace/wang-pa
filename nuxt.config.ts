// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  devtools: { enabled: true },

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
      viewport: 'width=500, initial-scale=1',
      link: [
        { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.15.0/css/all.css' },
      ],
      title: 'Wang-Pa',
      script: [],
    }
  }
});