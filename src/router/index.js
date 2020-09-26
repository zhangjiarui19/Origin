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
    component: () => import('components/childComponents/one/NoLivingThing')
  },
  {
    path: '/archaeozoic',
    component: () => import('components/childComponents/one/Archaeozoic')
  },
  {
    path: '/proterozoic',
    component: () => import('components/childComponents/one/Proterozoic')
  },
  {
    path: '/cambrian',
    component: () => import('components/childComponents/two/Cambrian')
  },
  {
    path: '/ordovician',
    component: () => import('components/childComponents/two/Ordovician')
  },
  {
    path: '/silurian',
    component: () => import('components/childComponents/two/Silurian')
  },
  {
    path: '/devonian',
    component: () => import('components/childComponents/two/Devonian')
  },
  {
    path: '/carboniferous',
    component: () => import('components/childComponents/two/Carboniferous')
  },
  {
    path: '/permian',
    component: () => import('components/childComponents/two/Permian')
  },
  {
    path: '/triassic',
    component: () => import('components/childComponents/three/Triassic')
  },
  {
    path: '/jurassic',
    component: () => import('components/childComponents/three/Jurassic')
  },
  {
    path: '/eocene',
    component: () => import('components/childComponents/four/Eocene')
  },
  {
    path: '/cretaceous',
    component: () => import('components/childComponents/three/Cretaceous')
  },
  {
    path: '/oligocene',
    component: () => import('components/childComponents/four/Oligocene')
  },
  {
    path: '/miocene',
    component: () => import('components/childComponents/four/Miocene')
  },
  {
    path: '/pliocene',
    component: () => import('components/childComponents/four/Pliocene')
  },
  {
    path: '/pleistocene',
    component: () => import('components/childComponents/four/Pleistocene')
  },
  {
    path: '/holocene',
    component: () => import('components/childComponents/four/Holocene')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
