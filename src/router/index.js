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
  },
  {
    path: '/cambrian-1',
    component: () => import('components/childComponents/fuckingchild/cambrian1')
  },
  {
    path: '/cambrian-2',
    component: () => import('components/childComponents/fuckingchild/cambrian2')
  },
  {
    path: '/ordovician1',
    component: () => import('components/childComponents/fuckingchild/ordovician1')
  },
  {
    path: '/ordovician2',
    component: () => import('components/childComponents/fuckingchild/ordovician2')
  },
  {
    path: '/silurian1',
    component: () => import('components/childComponents/fuckingchild/silurian1')
  },
  {
    path: '/silurian2',
    component: () => import('components/childComponents/fuckingchild/silurian2')
  },
  {
    path: '/devonian1',
    component: () => import('components/childComponents/fuckingchild/devonian1')
  },
  {
    path: '/devonian2',
    component: () => import('components/childComponents/fuckingchild/devonian2')
  },
  {
    path: '/carboniferous1',
    component: () => import('components/childComponents/fuckingchild/carboniferous1')
  },
  {
    path: '/carboniferous2',
    component: () => import('components/childComponents/fuckingchild/carboniferous2')
  },
  {
    path: '/permian1',
    component: () => import('components/childComponents/fuckingchild/permian1')
  },
  {
    path: '/permian2',
    component: () => import('components/childComponents/fuckingchild/permian2')
  },
  {
    path: '/triassic1',
    component: () => import('components/childComponents/fuckingchild/triassic1')
  },
  {
    path: '/triassic2',
    component: () => import('components/childComponents/fuckingchild/triassic2')
  },
  {
    path: '/jurassic1',
    component: () => import('components/childComponents/fuckingchild/jurassic1')
  },
  {
    path: '/jurassic2',
    component: () => import('components/childComponents/fuckingchild/jurassic2')
  },
  {
    path: '/cretaceous1',
    component: () => import('components/childComponents/fuckingchild/cretaceous1')
  },
  {
    path: '/cretaceous2',
    component: () => import('components/childComponents/fuckingchild/cretaceous2')
  },
  {
    path: '/eocene1',
    component: () => import('components/childComponents/fuckingchild/eocene1')
  },
  {
    path: '/eocene2',
    component: () => import('components/childComponents/fuckingchild/eocene2')
  },
  {
    path: '/oligocene1',
    component: () => import('components/childComponents/fuckingchild/oligocene1')
  },
  {
    path: '/oligocene2',
    component: () => import('components/childComponents/fuckingchild/oligocene2')
  },
  {
    path: '/miocene1',
    component: () => import('components/childComponents/fuckingchild/miocene1')
  },
  {
    path: '/miocene2',
    component: () => import('components/childComponents/fuckingchild/miocene2')
  },
  {
    path: '/pliocene1',
    component: () => import('components/childComponents/fuckingchild/pliocene1')
  },
  {
    path: '/pliocene2',
    component: () => import('components/childComponents/fuckingchild/pliocene2')
  },
  {
    path: '/pleistocene1',
    component: () => import('components/childComponents/fuckingchild/pleistocene1')
  },
  {
    path: '/pleistocene2',
    component: () => import('components/childComponents/fuckingchild/pleistocene2')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
