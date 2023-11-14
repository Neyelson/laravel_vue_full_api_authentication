//import './assets/main.css'
import '../node_modules/@picocss/pico/css/pico.min.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')