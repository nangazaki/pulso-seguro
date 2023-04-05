import { createRouter, createWebHistory } from "vue-router"

import { routesAuth } from "../modules/auth/router"
import { routesDashboard } from "../modules/dashboard/router"

const routes = [
  ...routesAuth,
  ...routesDashboard
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

