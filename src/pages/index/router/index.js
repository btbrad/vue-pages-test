import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home.vue')

Vue.use(Router)

let base = `${process.env.BASE_URL}` + 'page1'

export default new Router({
  mode: 'history',
  base: base,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
