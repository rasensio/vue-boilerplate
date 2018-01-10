<template>
  <div id="post">
    <h1>{{post.title}}</h1>
    <p>{{post.body}}</p>
    <span>stuff</span>
  </div>

</template>
<script>

//console.log(this.$route.params.id)
export default {
  name: "post",
  data: () => ({
    post: {}
  }),
  created() {
    console.log('hi')
    this.$http.get('https://jsonplaceholder.typicode.com/posts/' +  this.$route.params.id).then(response => {
      this.post = response.data
    })

  }
}
</script>
<style scoped>
</style>
