export default [
  {
    path: '/estatisticas',
    name: 'Estatísticas',
    component: () => import('./views/EstatisticasView.vue'),
    meta: { auth: true }
  }
]