export default [
  {
    path: '/meu-perfil',
    name: 'meu-perfil',
    component: () => import('./views/PerfilView.vue')
  },
  {
    path: '/adicionar-medico',
    name: 'Adicionar Médico',
    component: () => import('./views/AddAdmView.vue')
  },
]