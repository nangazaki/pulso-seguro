export default [
  {
    path: '/pacientes',
    name: 'Pacientes',
    component: () => import('./PacientesView.vue'),
    children: [
      {
        path: ':adicionar-paciente',
        component: () => import('./PacienteAdicionarView.vue')
      },
      {
        path: ':paciente/:id',
        component: () => import('./PacienteInfoView.vue')
      },

    ]
  }
]