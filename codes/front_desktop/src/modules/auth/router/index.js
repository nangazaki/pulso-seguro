const Login = () => import('../views/LoginView.vue');

export default [
    { 
        name: 'login',
        path: '/login', 
        component: Login 
    }
]