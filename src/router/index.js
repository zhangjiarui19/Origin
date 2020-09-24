import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('views/Home')
const Second = () => import('views/Second')

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/second',
    component: Second
  },
  {
    path: '/third',
    component: () => import('views/Third')
  },
  // {},
  // {},
  // {},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
