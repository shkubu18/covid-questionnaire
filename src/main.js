import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js';
import './assets/main.css'
import "./config/vee-validate/rules"
import "./config/vee-validate/messages"

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
