export default [
  {
    path: '/lista-pacientes',
    name: 'Pacientes',
    component: () => import('./views/PacientesView.vue'),
    meta: { auth: true }
  },
  {
    path: '/lista-pacientes/adicionar-paciente',
    name: 'Adicionar-Paciente',
    component: () => import('./views/PacienteAddView.vue'),
    meta: { auth: true }
  },
  {
    path: '/lista-pacientes/perfil-paciente/:id',
    name: 'Informação-Paciente',
    component: () => import('./views/PacienteInfoView.vue'),
    meta: { auth: true }
  },
  {
    path: '/lista-pacientes/perfil-paciente/:id/editar',
    name: 'Editar-Informação-Paciente',
    component: () => import('./views/PacienteInfoEditarView.vue'),
    meta: { auth: true }
  }
]