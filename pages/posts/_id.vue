<template>
  <div class="container">
    posts/_id.vue
    <article>
      <h1 class="title">{{post.title}}</h1>
      <p>{{post.content}}</p>
    </article>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: this.post.title,
      }
    },
    data() {
      return {
        id: this.$route.params.id
      }
    },
    computed: {
      post() {
        return this.$store.state.posts.all.find(post => post.id === this.id)
      },
    }
  }

</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    line-height: 1.5;
  }

  article * {
    margin-bottom: 1rem;
  }

  aside {
    min-width: 280px;
    max-width: 280px;
    padding-left: 2rem;
  }

  .title {
    font-size: 2rem;
  }

</style>
