export default [
  {
    path: '/lista-medicos',
    name: 'Medicos',
    component: () => import('./views/MedicoView.vue'),
    meta: { auth: true }
  },
  {
    path: '/lista-medicos/adicionar-medico',
    name: 'Adicionar-Medico',
    component: () => import('./views/MedicoAddView.vue'),
    meta: { auth: true }
  },
  {
    path: '/lista-medicos/perfil-medico/:id',
    name: 'Informações-Medico',
    component: () => import('./views/MedicoInfoView.vue'),
    meta: { auth: true }
  },
  {
    path: '/lista-medicos/perfil-medico/:id/editar',
    name: 'Editar-Informações-Medico',
    component: () => import('./views/MedicoInfoEditarView.vue'),
    meta: { auth: true }
  }
]