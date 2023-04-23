export default [
  {
    path: '/dashboard/meu-perfil',
    name: 'Perfil',
    component: () => import('./views/MeuPerfil.vue'),
    meta: { auth: true }
  },
  {
    path: '/dashboard/adicionar-adm',
    name: 'Adicionar ADM',
    component: () => import('./views/AdicionarAdmin.vue'),
    meta: { auth: true }
  }
]