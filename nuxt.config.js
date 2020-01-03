// nuxt.config.js 文件用于组织Nuxt.js 应用的个性化配置，以便覆盖默认配置。
// 若无额外配置，该文件不能被重命名。
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  generate: {
    // 该配置项用于定义每个动态路由的参数，Nuxt.js 依据这些路由配置生成对应目录结构的静态文件。
    routes: [
      '/posts/balut',
      '/posts/whereIsIt',
      '/posts/how'
    ]
  },

  /*
    该配置项用于配置应用默认的meta标签。
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  该配置项用于个性化定制 Nuxt.js 使用的加载组件。
  */
  loading: { color: '#fff' },

  /*
    该配置项用于定义应用的全局（所有页面均需引用的）样式文件、模块或第三方库。
  */
  css: [
    '~/assets/style.css'
  ],

  /*
  Nuxt.js允许您在运行Vue.js应用程序之前执行js插件
  */
  plugins: [
  ],

  /*
  该配置项允许您将Nuxt模块添加到项目中。模块只是在引导Nuxt时按顺序调用的函数, 用来扩展 Nuxt 的核心功能
  */
  modules: [
  ],

  /* Nuxt.js 允许你在自动生成的 vendor.bundle.js 文件中添加一些模块，以减少应用 bundle 的体积。如果你的应用依赖第三方模块，这个配置项是十分实用的。 */
  build: {
    extend(config, ctx) {
    }
  }
}
