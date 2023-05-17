export default [
  {
    path: '/dashboard/teste',
    name: 'Pagina de Teste',
    component: () => import('./views/ComponenteDeTeste.vue'),
    meta: { auth: true }
  },
  {
    path: '/dashboard/pathMatch(.*)',
    name: 'Pagina 404',
    component: () => import('./views/Pagina404.vue'),
    meta: { auth: true }
  }
]