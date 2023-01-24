export default [
    {
        path: '',
        redirect: '/login'
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('./HomeView.vue')
    }
]