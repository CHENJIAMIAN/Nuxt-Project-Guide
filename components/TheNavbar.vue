<template>
  <nav class="nav">
    <div class="logo">

      <el-button>
        <nuxt-link :to="{name: 'index'}" class="header">
          <span>导航栏</span>
        </nuxt-link>
      </el-button>

      <nuxt-link v-for="post in posts" :to="{name: 'posts-id', params: {id: post.id}}" :key="post.id">
        <el-button>
          <!-- posts-id 对应 posts/_id.vue -->
          {{post.id}}
        </el-button>
      </nuxt-link>

    </div>
  </nav>
</template>

<script>
  export default {
    computed: {
      posts() {
        return this.$store.state.posts.all
      }
    }
  }

</script>

<style lang="scss" scoped>


</style>
