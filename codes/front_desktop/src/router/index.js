import { createRouter, createWebHistory } from 'vue-router'

import authRoutes from '@/modules/auth/router'
import dashboardRoutes from '@/modules/dashboard/router'

const routes = [
  ...authRoutes,
  ...dashboardRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router