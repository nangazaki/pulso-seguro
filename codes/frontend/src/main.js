import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'


// import { useRootStore } from './store'
import VueSweetalert2 from 'vue-sweetalert2';

createApp(App)
  .use(router)
  .use(createPinia())
  .use(VueSweetalert2)
  .mount('#app')
