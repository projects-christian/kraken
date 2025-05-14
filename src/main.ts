import 'preline/preline'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'aos/dist/aos.css'
import 'glightbox/dist/css/glightbox.min.css'
import '@/assets/css/icons.css'
import '@/assets/css/style.css'

import AOS from 'aos'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

AOS.init()

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
