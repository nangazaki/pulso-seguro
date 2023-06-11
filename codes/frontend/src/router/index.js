import { createRouter, createWebHistory } from "vue-router"

import { routesLanding } from "../modules/landing/router"
import { routesAuth } from "../modules/auth/router"
import { routesDashboard } from "../modules/dashboard/router"

import beforeEach from "./beforeEach"

// import beforeEach from "./beforeEach"

const routes = [
  ...routesAuth,
  ...routesLanding,
  ...routesDashboard
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(beforeEach)

export default router

