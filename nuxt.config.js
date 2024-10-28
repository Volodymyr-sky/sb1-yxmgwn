export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'IT Solutions Partner - Professional IT Services',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Professional IT solutions and services for businesses in Germany' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/sitemap'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    loaders: {
      scss: {
        implementation: require('sass')
      }
    }
  },

  // BootstrapVue configuration
  bootstrapVue: {
    icons: true
  },

  // Generate dynamic routes
  generate: {
    routes: function() {
      const servicesData = require('./assets/data/leistungen.json')
      const expertiseData = require('./assets/data/expertise.json')
      
      const serviceRoutes = servicesData.services.map(service => `/leistungen/${service.slug}`)
      const expertiseRoutes = expertiseData.areas.map(area => `/expertise/${area.slug}`)
      
      return [...serviceRoutes, ...expertiseRoutes]
    }
  },

  // Sitemap configuration
  sitemap: {
    hostname: 'https://www.yoursite.de',
    gzip: true,
    routes: function() {
      const servicesData = require('./assets/data/leistungen.json')
      const expertiseData = require('./assets/data/expertise.json')
      
      const serviceRoutes = servicesData.services.map(service => `/leistungen/${service.slug}`)
      const expertiseRoutes = expertiseData.areas.map(area => `/expertise/${area.slug}`)
      
      return [...serviceRoutes, ...expertiseRoutes]
    }
  }
}