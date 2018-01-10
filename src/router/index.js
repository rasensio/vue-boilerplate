import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts'
import Post from '@/components/Post'
import MarkVacation from '@/components/MarkVacation'

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mark-awesome-vacations',
      name: 'MarkVacation',
      component: MarkVacation
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/:id',
      name: 'Post',
      component: Post
    }
  ]
})
