import Vue from 'vue'
import VueRouter from 'vue-router'
//import style from '../assets/style.css'

Vue.use(VueRouter)

const routes = [
  {
    path : '/connexion',
    component: () => import('../views/Connexion.vue')
  },
  {
    path : '/Sigin',
    component: () => import('../views/Sigin.vue')
  },
  {
    path : '/home',
    component: () => import('../views/Home.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
