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
  modules: ["@nuxtjs/tailwindcss", '@nuxt/image'],
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no',
      meta: [
        { name: 'theme-color', content: '#1cb7d9' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.15.0/css/all.css' },
        { rel: 'stylesheet', href: 'https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.css' },
      ],
      title: 'Wang-Pa',
      script: [
        { src: 'https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.js', type: 'text/javascript' },
      ],
    },
    
  },
  runtimeConfig: {
    public: {
      MAB_BOX_TOKEN: process.env.MAB_BOX_TOKEN
    }
  }
});