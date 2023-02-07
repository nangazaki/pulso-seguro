export default [
  {
    path: '/lista-pacientes',
    name: 'pacientes',
    component: () => import('./views/PacientesView.vue'),
  },
  {
    path: '/lista-pacientes/adicionar-paciente',
    name: 'paciente-adicionar',
    component: () => import('./views/PacienteAdicionarView.vue')
  },
  {
    path: '/lista-pacientes/perfil-paciente/:id',
    name: 'paciente-info',
    component: () => import('./views/PacienteInfoView.vue')
  },
  {
    path: '/lista-pacientes/perfil-paciente/:id/editar',
    name: 'paciente-info-editar',
    component: () => import('./views/PacienteInfoEditarView.vue')
  }
]