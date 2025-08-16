import { createApp } from 'vue'
import '../src/assets/styles/base.css'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"


AOS.init({
    duration:800,
    offset: 90,
    once: false,
    mirror: true,
})
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')

