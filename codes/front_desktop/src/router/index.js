import { createRouter, createWebHistory } from 'vue-router'

import authRoutes from '@/modules/auth/router'
import dashboardRoutes from '@/modules/dashboard/router'

import beforeEach from './beforeEach'

const routes = [
  ...authRoutes,
  ...dashboardRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(beforeEach)

export default router