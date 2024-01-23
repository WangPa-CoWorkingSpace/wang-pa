// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  experimental: {
    payloadExtraction: false,
  },

  components: {
    dirs: ["~/components"],
  },

  css: ['~/assets/styles.css'],
  modules: ["@nuxtjs/tailwindcss", '@nuxt/image', 'nuxt-vue3-google-signin'],
  plugins: [
    { src: '~/src/check_login_exp.ts', mode: 'client' }
  ],
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no',
      meta: [
        { name: 'theme-color', content: '#1cb7d9' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.15.4/css/all.css' }
      ],
      title: 'Wang-Pa',
      script: [],
    },
    
  },
  runtimeConfig: {
    public: {
      MAB_BOX_TOKEN: process.env.MAB_BOX_TOKEN,
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      RECAPTCHA_SC_ID: process.env.RECAPTCHA_SC_ID
    }
  },
  googleSignIn: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  }
});