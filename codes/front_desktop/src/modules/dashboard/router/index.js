const HomeView = () => import('../pages/Home/HomeView.vue')
const EstatisticasView = () => import('../pages/Estatistica/EstatisticasView.vue')
const MedicosView = () => import('../pages/Medicos/MedicosView.vue')
const PacientesView = () => import('../pages/Pacients/PacientesView.vue')
const Erro404 = () => import('../pages/Error/Erro404View.vue')

export default [
    {
        path: '',
        redirect: '/login'
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: HomeView
    },
    {
        path: '/estatisticas',
        name: 'Esstatísticas',
        component: EstatisticasView
    },
    {
        path: '/medicos/',
        name: 'medicos',
        component: MedicosView, 
        children: [
            {
                path: ':adicionar-medico',
                component: () => import('../pages/Medicos/components/AdicionarMedico.vue')
            }
        ]
    },
    {
        path: '/pacientes',
        name: 'Pacientes',
        component: PacientesView
    },
    {
        path: '/*',
        name: 'Erro404',
        component: Erro404
    },
]