export default [
  {
    path: '/dashboard/meu-perfil',
    name: 'Perfil | Pulso Seguro',
    component: () => import('./views/MeuPerfil.vue'),
    meta: { auth: true }
  },
  {
    path: '/dashboard/adicionar-adm',
    name: 'Adicionar ADM | Pulso Seguro',
    component: () => import('./views/AdicionarAdmin.vue'),
    meta: { auth: true }
  },
  {
    path: '/dashboard/configuracoes-gerais',
    name: 'Configurações Gerais | Pulso Seguro',
    component: () => import('./views/Configuracoes.vue'),
    meta: { auth: true }
  },
]