export default [
  {
    path: '/dashboard/apontamentos',
    name: 'Apontamentos',
    component: () => import('./views/HomeNotas.vue'),
    meta: { auth: true }
  },
  {
    path: '/dashboard/apontamentos/novo',
    name: 'Novo Apontamento',
    component: () => import('./views/AdicionarNota.vue'),
    meta: { auth: true }
  }
]