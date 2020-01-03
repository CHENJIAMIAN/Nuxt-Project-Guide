# Nuxt.js基础知识



Nuxt.js 集成了以下组件/框架，用于开发完整而强大的 Web 应用：

- Vue 2
- Vue-Router
- Vuex (当配置了 Vuex 状态树配置项 时才会引入)
- Vue 服务器端渲染 (排除使用 mode: 'spa')
- Vue-Meta
压缩并 gzip 后，总代码大小为：57kb （如果使用了 Vuex 特性的话为 60kb）。

另外，Nuxt.js 使用 Webpack 和 vue-loader 、 babel-loader 来处理代码的自动化构建工作（如打包、代码分层、压缩等等）。


![组件的运行流程](https://zh.nuxtjs.org/nuxt-schema.svg)


``` 
别名	     目录

~ 或 @	    srcDir

~~ 或 @@	rootDir
```


## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000, 启动时nuxt，它将启动具有热更新加载的开发服务器，并且Vue 服务器端渲染配置为自动为服务器呈现应用程序。
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# 为基于 Vue.js 的应用提供生成对应的静态站点的功能 (预渲染)。是向开发集成各种微服务（Microservices）的 Web 应用迈开的新一步
$ yarn run generate
```

This repository contains the example code for the [Nuxt.js Fundamentals](https://vueschool.io/courses/nuxtjs-fundamentals) course.

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
