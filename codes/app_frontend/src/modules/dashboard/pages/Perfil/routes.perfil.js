export default [
  {
    path: '/meu-perfil',
    name: 'Perfil',
    component: () => import('./views/MeuPerfil.vue'),
    meta: { auth: true }
  },
  {
    path: '/adicionar-adm',
    name: 'Adicionar ADM',
    component: () => import('./views/AdicionarAdmin.vue'),
    meta: { auth: true }
  }
]