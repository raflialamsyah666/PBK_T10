import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Orders from '../views/Orders.vue'
import Menu from '../views/Menu.vue'
import Cart from '../views/Cart.vue'
import History from '../views/History.vue'
import Profile from '../views/Profile.vue'
import Logout from '../views/Logout.vue'
import Login from '../views/Login.vue' 

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
