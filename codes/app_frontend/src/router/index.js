import { createRouter, createWebHistory } from "vue-router"

import { routesAuth } from "../modules/auth/router"

const routes = [
  ...routesAuth,
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

