import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from 'bootstrap'
import '@/assets/reset.scss'
import '@/assets/Bs5.scss'


const app = createApp(App)
app.use(router)
app.mount('#app')