import EstatisticaRoutes from '../pages/Estatistica/EstatisticaRoutes'
import HomeRoutes from '../pages/Home/HomeRoutes'
import MedicoRoutes from '../pages/Medicos/MedicoRoutes'
import PacienteRoutes from '../pages/Pacientes/PacienteRoutes'
import TesteRoutes from '../pages/Teste/TesteRoutes'

const Erro404 = () => import('../pages/Error/Erro404View.vue')

export default [
  ...HomeRoutes,
  ...EstatisticaRoutes,
  ...MedicoRoutes,
  ...PacienteRoutes,
  ...TesteRoutes,
  {
    path: '/*',
    name: 'Erro404',
    component: Erro404
  },
]