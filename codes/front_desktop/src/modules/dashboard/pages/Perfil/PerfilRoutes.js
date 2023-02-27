import MeuPerfilView from "./views/MeuPerfilView.vue"
import AddAdmView from "./views/AddAdmView.vue"

export default [
  {
    path: '/meu-perfil',
    name: 'meu-perfil',
    component: MeuPerfilView,
    meta: { auth: true }

  },
  {
    path: '/admin/adicionar-admin',
    name: 'adcionar-admin',
    component: AddAdmView,
    meta: { auth: true }

  },
]