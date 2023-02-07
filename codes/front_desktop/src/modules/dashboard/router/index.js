import EstatisticaRoutes from '../pages/Estatistica/EstatisticaRoutes'
import HomeRoutes from '../pages/Home/HomeRoutes'
import MedicoRoutes from '../pages/Medicos/MedicoRoutes'
import PacienteRoutes from '../pages/Pacientes/PacienteRoutes'

export default [
  ...HomeRoutes,
  ...EstatisticaRoutes,
  ...MedicoRoutes,
  ...PacienteRoutes,
  {
    path: '/*',
    name: 'Erro404',
    component: () => import('../pages/Error/Erro404View.vue')
  },
]