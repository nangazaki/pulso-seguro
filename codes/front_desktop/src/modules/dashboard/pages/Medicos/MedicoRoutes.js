export default [
  {
    path: '/lista-medicos',
    name: 'medicos',
    component: () => import('./views/MedicoView.vue'),
    meta: { auth: true }
  },
  {
    path: '/lista-medicos/adicionar-medico',
    name: 'medico-adicionar',
    component: () => import('./views/MedicoAddView.vue'),
    meta: { auth: true }
  },
  {
    path: '/lista-medicos/perfil-medico/:id',
    name: 'medico-info',
    component: () => import('./views/MedicoInfoView.vue'),
    meta: { auth: true }
  },
  {
    path: '/lista-medicos/perfil-medico/:id/editar',
    name: 'medico-info-editar',
    component: () => import('./views/MedicoInfoEditarView.vue'),
    meta: { auth: true }
  }
]