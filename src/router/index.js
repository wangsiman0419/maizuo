import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'films',
    component:()=>import('@/views/Films.vue'),
    children:[
      {
        path:'/films/nowPlaying',
        component:()=>import('@/views/NowPlaying.vue')
      },
      {
        path:'/films/ComingSoon',
        component:()=>import('@/views/ComingSoon.vue')
      }
    ],
    redirect:'/films/nowPlaying'
  },
  {
    path: '/film',
    name: 'film',
    component: () => import('@/views/Film.vue')
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('@/views/City.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
