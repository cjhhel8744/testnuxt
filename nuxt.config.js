export default {
  telemetry: false, // 설치시 물어보는거 제거
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'testapp',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: 'https://cdndata.milkt.co.kr/mid/www/img/icon/favicon_32x32.ico' },
      { rel: 'stylesheet', href: '//high.milkt.co.kr/Css/New/common.css' },
      { rel: 'stylesheet', href: '//high.milkt.co.kr/Css/New/board.css' },
      { rel: 'stylesheet', href: '//high.milkt.co.kr/css/renew/common.css?2' },
      { rel: 'stylesheet', href: '//high.milkt.co.kr/css/renew/layout.css' },
      { rel: 'stylesheet', href: '//high.milkt.co.kr/css/renew/contents.css' },
      { rel: 'stylesheet', href: '//high.milkt.co.kr/css/renew/swiper.css' },
    ],
    script: [
				{ src: '//high.milkt.co.kr/js/renew/jquery-1.11.3.min.js' },
				{ src: '//high.milkt.co.kr/Js/JQuery/swiper.min.js' },
				{ src: '//cdndata.milkt.co.kr/mid/www/Js/Renew/plugins.js' },
				{ src: '//high.milkt.co.kr/Js/Renew/common.js?5' },
        { src: '//high.milkt.co.kr/Js/Common.js' },
				{ src: '//high.milkt.co.kr/Js/New/script.js' },
				{ src: '//high.milkt.co.kr/Js/JQuery/jquery.watermark.min.js' },
				{ src: '//high.milkt.co.kr/js/new/slides.min.jquery.js' },
				{ src: '//high.milkt.co.kr/js/new/webwidget_slideshow_dot.js' },
				{ src: '//high.milkt.co.kr/js/new/number_slideshow.js' },
        { src: '//high.milkt.co.kr/Js/Renew/jquery.bxslider.js' },
			],
  },

  layouts: {
    default: '~/layouts/default.vue',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 },
            },
          ],
        ]
      },
    },
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
    // Disable HMR messages
    hotMiddleware: {
      client: {
        noInfo: true,
      },
    },
  }
}
