import "preline/preline";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import "@/assets/css/icons.css";
import "@/assets/css/style.css";
import "@/assets/css/proposal.css";

import AOS from "aos";

import { createApp } from "vue";
import { createPinia } from "pinia";

AOS.init();

import { ViteSSG } from 'vite-ssg'
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n" //

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n)

app.mount("#app");
