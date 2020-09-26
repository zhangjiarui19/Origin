import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('views/Home')

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
    path: '/third',
    component: () => import('views/Third')
  },
  {
    path: '/third1',
    component: () => import('components/thirdComponents/ThirdOne')
  },
  {
    path: '/precambrian',
    component: () => import('components/secondComponents/Precambrian')
  },
  {
    path: '/paleozoic',
    component: () => import('components/secondComponents/Paleozoic')
  },
  {
    path: '/mesozoic',
    component: () => import('components/secondComponents/Mesozoic')
  },
  {
    path: '/cenozoic',
    component: () => import('components/secondComponents/Cenozoic')
  },
  {
    path: '/nolivingthing',
    component: () => import('components/childComponents/NoLivingThing')
  },
  {
    path: '/archaeozoic',
    component: () => import('components/childComponents/Archaeozoic')
  },
  {
    path: '/proterozoic',
    component: () => import('components/childComponents/Proterozoic')
  },
  {
    path: '/cambrian',
    component: () => import('components/childComponents/Cambrian')
  },
  {
    path: '/ordovician',
    component: () => import('components/childComponents/Ordovician')
  },
  {
    path: '/silurian',
    component: () => import('components/childComponents/Silurian')
  },
  {
    path: '/devonian',
    component: () => import('components/childComponents/Devonian')
  },
  {
    path: '/carboniferous',
    component: () => import('components/childComponents/Carboniferous')
  },
  {
    path: '/permian',
    component: () => import('components/childComponents/Permian')
  },
  {
    path: '/triassic',
    component: () => import('components/childComponents/Triassic')
  },
  {
    path: '/jurassic',
    component: () => import('components/childComponents/Jurassic')
  },
  {
    path: '/eocene',
    component: () => import('components/childComponents/Eocene')
  },
  {
    path: '/cretaceous',
    component: () => import('components/childComponents/Cretaceous')
  },
  {
    path: '/oligocene',
    component: () => import('components/childComponents/Oligocene')
  },
  {
    path: '/miocene',
    component: () => import('components/childComponents/Miocene')
  },
  {
    path: '/pliocene',
    component: () => import('components/childComponents/Pliocene')
  },
  {
    path: '/pleistocene',
    component: () => import('components/childComponents/Pleistocene')
  },
  {
    path: '/holocene',
    component: () => import('components/childComponents/Holocene')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
