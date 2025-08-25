import { createRouter, createWebHistory } from 'vue-router'
import OrdersList from '../pages/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'orders' }
  },
  { 
    path: '/orders', 
    name: 'orders',
    component: OrdersList 
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'orders' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router