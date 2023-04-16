export default [
  {
    path: '/dashboard/pacientes',
    name: 'Pacientes',
    component: () => import('./views/HomePaciente.vue'),
    meta: { auth: true }
  },
  {
    path: '/dashboard/pacientes/adicionar',
    name: 'Adicionar Paciente',
    component: () => import('./views/AdicionarPaciente.vue'),
    meta: { auth: true }
  },
  {
    path: '/dashboard/pacientes/:id/info',
    name: 'Info Paciente',
    component: () => import('./views/InformacaoPaciente.vue'),
    meta: { auth: true }
  },
  {
    path: '/dashboard/pacientes/:id/editar',
    name: 'Editar Paciente',
    component: () => import('./views/EditarPaciente.vue'),
    meta: { auth: true }
  }
]