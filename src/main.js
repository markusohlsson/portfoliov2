import { createApp } from 'vue'
import '../src/assets/styles/base.css'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css'


AOS.init({
    duration:800,
    offset: 150,
    once: false,
    mirror: true,
})

createApp(App)
    .use(router)
    .mount('#app')

