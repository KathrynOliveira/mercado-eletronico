import { createRouter, createWebHistory } from 'vue-router'
import OrdersList from '../pages/index.vue'

const routes = [
  { path: '/', redirect: '/orders' },
  { path: '/orders', component: OrdersList },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
