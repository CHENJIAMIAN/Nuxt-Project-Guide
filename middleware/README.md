# MIDDLEWARE

**This directory is not required, you can delete it if you don't want to use it.**

中间件允许您定义一个自定义函数运行在一个页面或一组页面渲染之前。

一个中间件接收 context 作为第一个参数：
```
export default function (context) {
  context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
}
```


More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing#middleware).
