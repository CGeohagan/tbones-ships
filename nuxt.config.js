module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'toms-ships',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Alata|Spectral:400i&display=swap' }
    ],
    bodyAttrs: {
      class: 'hidden'
    },
    script: [
      { src: 'gsap/TweenMax.min.js' },
      { src: 'gsap/MorphSVGPlugin.min.js' },
    ]
  },
  plugins: [
    { ssr: false, src: '~plugins/appear' }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    loaders: {
      scss: { sourceMap: false }
    }
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  router: {
    middleware: 'pages',
    scrollBehavior (to, from, savedPosition) {
      return ({ x: 0, y: 0 })
    }
  }
}

