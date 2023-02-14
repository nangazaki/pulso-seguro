import { createApp } from 'vue'
import store from "@/store"
import VeeValidate from "vee-validate"
import './style.css'
import router from './router';

import App from './App.vue'

createApp(App)
    .use(store)
    .use(router)
    .use(VeeValidate, { classes: true, events: 'change' })
    .mount('#app')
