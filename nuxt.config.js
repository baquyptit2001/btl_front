export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/js/jquery-1.12.1.min.js' },
      { src: '/js/popper.min.js' },
      { src: '/js/bootstrap.min.js' },
      { src: '/js/jquery.magnific-popup.js' },
      { src: '/js/swiper.min.js' },
      { src: '/js/masonry.pkgd.js' },
      { src: '/js/owl.carousel.min.js' },
      { src: '/js/jquery.nice-select.min.js' },
      { src: '/js/slick.min.js' },
      { src: '/js/jquery.counterup.min.js' },
      { src: '/js/waypoints.min.js' },
      { src: '/js/contact.js' },
      { src: '/js/jquery.ajaxchimp.min.js' },
      { src: '/js/jquery.form.js' },
      { src: '/js/jquery.validate.min.js' },
      // { src: '/js/mail-script.min.js' },
      { src: '/js/custom.js' },

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/bootstrap.min.css',
    '~assets/css/animate.css',
    '~assets/css/owl.carousel.min.css',
    '~assets/css/all.css',
    // '~assets/css/flaticon.css',
    '~assets/css/themify-icons.css',
    '~assets/css/magnific-popup.css',
    '~assets/css/slick.css',
    '~assets/css/style.css',
  ],



  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
