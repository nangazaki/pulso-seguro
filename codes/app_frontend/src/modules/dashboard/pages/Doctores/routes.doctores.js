export default [
  {
    path: '/dashboard/doctores',
    name: 'Doctores',
    component: () => import('./views/HomeDoctor.vue'),
    meta: { auth: true }
  },
  {
    path: '/dashboard/doctoress',
    name: 'Doctores',
    component: () => import('./views/HomeDoctor.vue'),
    meta: { auth: true }
  },
  {
    path: '/dashboard/doctores/adicionar',
    name: 'Adicionar Doctor',
    component: () => import('./views/AdicionarDoctor.vue'),
    meta: { auth: true }
  },
  {
    path: '/dashboard/doctores/:id/info',
    name: 'Info Doctor',
    component: () => import('./views/InfomacaoDoctor.vue'),
    meta: { auth: true }
  },
  {
    path: '/dashboard/doctores/:id/editar',
    name: 'Editar Doctor',
    component: () => import('./views/EditarDoctor.vue'),
    meta: { auth: true }
  },
]