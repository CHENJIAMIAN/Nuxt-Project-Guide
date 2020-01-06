<template>
  <section class="container">
    index.vue
  </section>
</template>

<script>
  // 一个nuxt应用会在服务端运行一次,再在客户端运行一次, 在服务端运行时(node.js)是不支持export 和 import 语法的, 所以要在if (process.client) 为true时,才import所需要的库.


  export default {
    asyncData(context) {},
    components: {},
    head() {
      return {
        title: '首页 🍕',
      }
    },
    created() {
      if (process.client) {
        const {
          Map
        } = require('ol')
        const loadmap = new Map();
        debugger
      }
    }
  }

</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

</style>
