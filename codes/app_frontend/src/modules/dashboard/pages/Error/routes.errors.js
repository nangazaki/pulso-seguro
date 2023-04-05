export default [
  {
    path: '/:pathMatch(.*)',
    name: 'Pagina 404',
    component: () => import('./views/Pagina404.vue'),
    meta: { auth: true }
  }
]