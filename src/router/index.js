import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ItemDetail from '@/views/ItemDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/items/:id',
    name: 'item-detail',
    component: ItemDetail,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
