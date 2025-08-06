<template>
  <main class="ms-container home-slider">
    <!-- Swiper Slider -->
    <div class="swiper-container" ref="swiperContainer">
      <div class="swiper-wrapper">
        <!-- Slide -->
        <div class="swiper-slide">
            <div class="slide-inner" data-swiper-parallax="45%">
                <div class="overlay"></div>
                <div
                    class="slide-inner--image"
                    :style="{ backgroundImage: `url(${barranquillaOne})` }"
                ></div>
                <div class="slide-inner--info">
                    <h1>Iconic<br />Barranquilla</h1>
                    <a data-type="page-transition" class="ms-btn--slider">Estas listo?</a>
                </div>
            </div>
        </div>
        <!-- Puedes agregar más slides aquí -->
        <div class="swiper-slide">
            <div class="slide-inner" data-swiper-parallax="45%">
                <div class="overlay"></div>
                <div
                    class="slide-inner--image"
                    :style="{ backgroundImage: `url(${fountain1})` }"
                ></div>
                <div class="slide-inner--info">
                    <h2>Hacer nuevos lugares<br />inspirados  en el primer mundo</h2>
                    <ul>
                        <li>Impulsar el turismo y lugares emblemáticos en la ciudad</li>
                        <li>Sitios pintorescos que sean turísticamente atractivos</li>
                    </ul>
                    <a data-type="page-transition" class="ms-btn--slider">Con nuestro sello que es el arte</a>
                </div>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="slide-inner" data-swiper-parallax="45%">
                <div class="overlay"></div>
                <div
                    class="slide-inner--image"
                    :style="{ backgroundImage: `url(${img1})` }"
                ></div>
                <div class="slide-inner--info">
                    <h2>¿Qué hace falta para convertir<br />Barranquilla en una ciudad del primer mundo?</h2>
                    <ul>
                        <li>Infraestructura civil</li>
                        <li>Infraestructura Artística</li>
                        <li>Cultura comunitaria</li>
                        <li>Activación Creativa</li>
                        <li>Desarrollo mixto</li>
                    </ul>
                    <a data-type="page-transition" class="ms-btn--slider">take a look</a>
                </div>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="slide-inner" data-swiper-parallax="45%">
                <div class="overlay"></div>
                <div
                    class="slide-inner--image"
                    :style="{ backgroundImage: `url(${piazzaDelNettuno})` }"
                ></div>
                <div class="slide-inner--info">
                    <h2>Kraken Studio ofrece<br />propuesta para la <br />creación de</h2>
                    <ul>
                        <li>Plazas comerciales</li>
                    </ul>
                    <a data-type="page-transition" class="ms-btn--slider">take a look</a>
                </div>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="slide-inner" data-swiper-parallax="45%">
                <div class="overlay"></div>
                <div
                    class="slide-inner--image"
                    :style="{ backgroundImage: `url(${northMacedonia})` }"
                ></div>
                <div class="slide-inner--info">
                    <h1>Fuentes</h1>
                    <p></p>
                    <a data-type="page-transition" class="ms-btn--slider">take a look</a>
                </div>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="slide-inner" data-swiper-parallax="45%">
                <div class="overlay"></div>
                <div
                    class="slide-inner--image"
                    :style="{ backgroundImage: `url(${christmasCity})` }"
                ></div>
                <div class="slide-inner--info">
                    <h1>Macroesculturas en la ciudad</h1>
                    <p></p>
                    <a data-type="page-transition" class="ms-btn--slider">take a look</a>
                </div>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="slide-inner" data-swiper-parallax="45%">
                <div class="overlay"></div>
                <div
                    class="slide-inner--image"
                    :style="{ backgroundImage: `url(${christmasCity})` }"
                ></div>
                <div class="slide-inner--info">
                    <h1>Espacios icónicos</h1>
                    <p></p>
                    <a data-type="page-transition" class="ms-btn--slider">take a look</a>
                </div>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="slide-inner" data-swiper-parallax="45%">
                <div class="overlay"></div>
                <div
                    class="slide-inner--image"
                    :style="{ backgroundImage: `url(${garden1})` }"
                ></div>
                <div class="slide-inner--info">
                    <h1>Jardines inspirados en la cultura oriental</h1>
                    <p></p>
                    <a data-type="page-transition" class="ms-btn--slider">take a look</a>
                </div>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="slide-inner" data-swiper-parallax="45%">
                <div class="overlay"></div>
                <div
                    class="slide-inner--image"
                    :style="{ backgroundImage: `url(${carnival1})` }"
                ></div>
                <div class="slide-inner--info">
                    <h1>La creación de un pasillo estilo museo en el malecón</h1>
                    <p></p>
                    <a data-type="page-transition" class="ms-btn--slider">take a look</a>
                </div>
            </div>
        </div>
      </div>

      <!-- Botones -->
      <div class="swiper-nav-btn">
        <div class="swiper-button-prev swiper-button-white">prev</div>
        <div class="swiper-button-next swiper-button-white">next</div>
      </div>

      <!-- Paginación + Contador -->
      <div class="expanded-timeline">
        <div class="expanded-timeline__counter">
          <span>{{ currentSlide }}</span>/<span>{{ totalSlides }}</span>
        </div>
        <div class="swiper-pagination"></div>
        <div class="scroll-message">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.5 15.98" class="scroll-svg">
            <title>Asset 1</title>
            <g>
              <g data-name="Layer 1">
                <polygon fill="#fff" points="0 4.64 0.71 5.34 3.85 2.2 3.85 15.98 4.85 15.98 4.85 2.2 8 5.34 8.71 4.64 4.35 0.29 0 4.64"></polygon>
                <polygon fill="#fff" points="11.65 0 11.65 13.79 8.5 10.64 7.79 11.35 12.15 15.7 16.5 11.35 15.79 10.64 12.65 13.79 12.65 0 11.65 0"></polygon>
              </g>
            </g>
          </svg>
          Scroll
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import img1 from '@/assets/images/proposal/img-1.jpg'
import barranquillaOne from '@/assets/images/proposal/barranquilla-one.jpg'
import singapore1 from '@/assets/images/proposal/singapore-1.jpg'
import fountain1 from '@/assets/images/proposal/fountain-of-newts.jpg'
import piazzaDelNettuno from '@/assets/images/proposal/piazza-del-nettuno-square-in-bologna.jpg'
import northMacedonia from '@/assets/images/proposal/north-macedonia.jpg'
import christmasCity from '@/assets/images/proposal/christmas-city.jpg'
import garden1 from '@/assets/images/proposal/wangjianglou-park.jpg'
import carnival1 from '@/assets/images/proposal/carnival-1.jpg'


import { onMounted, ref } from 'vue'
import Swiper from 'swiper'
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Parallax,
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
Swiper.use([Navigation, Pagination, Mousewheel, Keyboard, Parallax])


Swiper.use([Navigation, Pagination, Mousewheel, Keyboard, Parallax])

const swiperContainer = ref<HTMLElement | null>(null)
const swiperInstance = ref<Swiper | null>(null)
const currentSlide = ref(1)
const totalSlides = ref(0)

onMounted(() => {
  if (swiperContainer.value) {
    swiperInstance.value = new Swiper(swiperContainer.value, {
      loop: false,
      speed: 1000,
      grabCursor: false,
      mousewheel: true,
      keyboard: true,
      simulateTouch: false,
      parallax: true,
      effect: 'slide',
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init(swiper) {
          totalSlides.value = swiper.slides.length
          currentSlide.value = swiper.activeIndex + 1
        },
        slideChange(swiper) {
          currentSlide.value = swiper.activeIndex + 1
        },
      },
    })
  }
})
</script>
