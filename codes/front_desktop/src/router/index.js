import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from '@/modules/auth/router'
import dashboardRoutes from '@/modules/dashboard/router'
import { getLocalToken } from '@/modules/auth/storage'

const routes = [
  ...authRoutes,
  ...dashboardRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !getLocalToken()) {
    next({ name: 'login' })
  } else {
    next()
  }

})

export default router