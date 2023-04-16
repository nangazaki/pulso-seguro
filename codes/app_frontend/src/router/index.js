import { createRouter, createWebHistory } from "vue-router"

import { routesAuth } from "../modules/auth/router"
import { routesDashboard } from "../modules/dashboard/router"

// import beforeEach from "./beforeEach"

const routes = [
  ...routesAuth,
  ...routesDashboard
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach(beforeEach)

router.beforeEach((to, from, next) => {
  document.title = `${to.name} - Pulso Seguro`
  next()
})

export default router

