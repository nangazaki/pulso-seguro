export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('./views/Home.vue'),
    meta: { auth: true }
  }
]