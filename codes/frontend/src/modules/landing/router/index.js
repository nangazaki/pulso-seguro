
export const routesLanding = [
  {
    path: '/landing',
    name: 'Landing',
    component: () => import('../pages/Landing.vue'),
    meta: { auth: false }
  }
]