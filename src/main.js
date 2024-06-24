import { createApp } from 'vue'
import router from './router/index'
import './style.css'
import './assets/css/app.css'
import App from './App.vue'
const app = createApp(App)
app.use(router)
app.mount('#app')
