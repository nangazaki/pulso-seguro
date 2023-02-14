import HomeRoutes from '../pages/Home/HomeRoutes'
import MedicoRoutes from '../pages/Medicos/MedicoRoutes'
import PacienteRoutes from '../pages/Pacientes/PacienteRoutes'
import EstatisticaRoutes from '../pages/Estatistica/EstatisticaRoutes'

export default [
  ...HomeRoutes,
  ...MedicoRoutes,
  ...PacienteRoutes,
  ...EstatisticaRoutes,
  {
    path: '/:pathMatch(.*)',
    name: 'Erro404',
    component: () => import('../pages/Error/Erro404View.vue')
  },
]