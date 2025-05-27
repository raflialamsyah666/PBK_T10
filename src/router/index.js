import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './Dashboard.vue'
import Orders from './Orders.vue'
import Menu from './Menu.vue'
import Cart from './Cart.vue'
import History from './History.vue'
import Profile from './Profile.vue'
import Logout from './Logout.vue'
import Login from './Login.vue' 

const routes = [
  { path: '/', component: Dashboard },
  { path: '/orders', component: Orders },
  { path: '/menu', component: Menu },
  { path: '/cart', component: Cart },
  { path: '/history', component: History },
  { path: '/profile', component: Profile },
  { path: '/logout', component: Logout },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
