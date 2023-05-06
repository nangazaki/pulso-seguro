export default [
  {
    path: '/dashboard/estatisticas',
    name: 'Estatisticas',
    component: () => import('./views/HomeEstatisticas.vue'),
    meta: { auth: true }
  }
]