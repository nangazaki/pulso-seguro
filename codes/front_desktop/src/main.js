import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueApexCharts from "vue3-apexcharts";
import './style.css'
import router from './router';

const pinia = createPinia()
import App from './App.vue'



createApp(App)
    .use(pinia)
    .use(VueApexCharts)
    .use(router)
    .mount('#app')
