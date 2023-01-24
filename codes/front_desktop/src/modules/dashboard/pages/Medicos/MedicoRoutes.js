export default [
  {
    path: '/medicos',
    name: 'medicos',
    component: () => import('./MedicoView.vue'),
  },
  {
    path: '/medicos/adicionar-medico',
    name: 'medico-adicionar',
    component: () => import('./MedicoAddView.vue')
  },
  {
    path: '/medicos/editar-medico/:id',
    name: 'medico-info',
    component: () => import('./MedicoInfoView.vue')
  },
  {
    path: '/medicos/editar-medico/:id/editar',
    name: 'medico-info-editar',
    component: () => import('./MedicoInfoEditarView.vue')
  }
]