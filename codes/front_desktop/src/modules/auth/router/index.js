const Login = () => import('../views/LoginView.vue');

export default [
    { 
        path: '/login', 
        name: 'Login',
        component: Login 
    }
]