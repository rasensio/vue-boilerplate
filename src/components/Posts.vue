<template>
  <div id="posts">
    <ul id="example-1">
    <li v-for="post in posts">
      {{ post.title }} <a v-bind:href="'#/posts/' + post.id">read more</a> 
    </li>
</ul>
  </div>
</template>
<script>
export default {
  name: "Posts",
  data: () => ({
    posts: []
  }),
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      this.posts = response.data
    })

  }
}
</script>
<style scoped>
  li {
    text-align: left
  }
</style>
