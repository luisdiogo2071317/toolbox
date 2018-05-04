const pkg = require('./package');

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'WD Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My cool Web' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      //{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loadingIndicator: {
    name: 'circle',
    color: '#fa923f'
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  babel: {
    presets: [
      'es2015',
      'stage-0'
    ],
    plugins: [["transform-runtime", {
      "polyfill": true,
      "regenerator": true
    }]]
  },



  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  buildDir: '../functions/nuxt',
  build: {
    publicPath: '/public/',
    vendor: ['axios'],
    extractCSS: true,

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
};