import { createRouter, createWebHistory } from 'vue-router'
import OrdersList from '../pages/index.vue'

const routes = [
  { 
    path: '/', 
    redirect: { name: 'orders' }
  },
  { 
    path: '/orders', 
    name: 'orders',
    component: OrdersList 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router