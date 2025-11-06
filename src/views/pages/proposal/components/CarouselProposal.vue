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
                    <a data-type="page-transition" class="ms-btn--slider">¿Estás listo?</a>
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
                    <div class="collage relative">
                      <img
                          :src="trastevere"
                          class="absolute w-[600px] h-auto top-[-500px] left-[550px] z-[1]"
                          alt="Logo kraken"
                      />
                      <img
                          :src="trevi"
                          class="absolute w-[400px] h-auto top-[-630px] left-[190px] z-[2]"
                          alt="Logo kraken"
                      />
                      <img
                          :src="arc"
                          class="absolute w-[400px] h-auto top-[-250px] right-[-250px] z-[2]"
                          alt="Logo kraken"
                      />
                      <img
                          :src="temple"
                          class="absolute w-[400px] h-auto top-[-300px] left-[190px] z-[2]"
                          alt="Logo kraken"
                      />
                      <img
                          :src="stands"
                          class="absolute w-[400px] h-auto top-[-630px] right-[-250px] z-[2]"
                          alt="Logo kraken"
                      />
                      
                    </div>
                    <h2>Hacer nuevos lugares<br />inspirados  en el primer mundo</h2>
                    <ul>
                        <li>Impulsar el turismo y lugares emblemáticos en la ciudad</li>
                        <li>Sitios pintoréscos que sean turísticamente atractivos</li>
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
                    :style="{ backgroundImage: `url(${barranquillaTwo})` }"
                ></div>
                <div class="slide-inner--info">
                    <h2>¿Qué hace falta para convertir a<br />Barranquilla en una ciudad del primer mundo?</h2>
                    <ul>
                        <li>Atractivos turísticos</li>
                        <li>Infraestructura adecuada</li>
                        <li>Marketing y promoción</li>
                        <li>Desarrollo mixto</li>
                        <li>Comunidad receptiva</li>
                    </ul>
                    <a data-type="page-transition" class="ms-btn--slider">Kraken Studio</a>
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
                    <h2>Kraken Studio ofrece<br /></h2>
                    <p>Un plan de intervención urbana para revitalizar zonas estratégicas con espacios que generen cultura, turismo y economía local.</p>
                    <a data-type="page-transition" class="ms-btn--slider">Kraken Studio</a>
                </div>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="slide-inner" data-swiper-parallax="45%">
                <div class="overlay"></div>
                <div
                    class="slide-inner--image"
                    :style="{ backgroundImage: `url(${candyland})` }"
                ></div>
                <div class="slide-inner--info">
                    <h1>Candyland</h1>
                    <div class="mb-[25px]">
                        <p class="mb-[10px]"><b>¿Qué es?</b> 
                            <br/><span class="list-benefits">Lugar turístico de alto impacto inspirado en la innovación y estándares nunca antes vistos en Barranquilla</span></p>
                        <p class="mb-[10px]"><b>¿Por qué atrae el turismo?</b> 
                            <br/><span class="list-benefits">Es un lugar que impacta visualmente por sus colores y obras de arte en el exterior e interior del lugar</span></p>                                                                                           
                        <p class="mb-[10px]"><b>Beneficios para la ciudad:</b> 
                            <br/><span class="list-benefits">Lugar emblemático, innovación, activación del turismo </span></p>
                    </div>
                    <a data-type="page-transition" class="ms-btn--slider">Lugar icónico</a>
                </div>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="slide-inner" data-swiper-parallax="45%">
                <div class="overlay"></div>
                <div
                    class="slide-inner--image"
                    :style="{ backgroundImage: `url(${goldenGate})` }"
                ></div>
                <div class="slide-inner--info">
                    <h1>Puerta de oro</h1>
                    <div class="mb-[25px]">
                        <p class="mb-[10px]"><b>¿Qué es?</b> 
                            <br/><span class="list-benefits">Una gigantesca puerta de color oro que haga referencia al nombre emblemático de Barranquilla, Puerta de Oro</span></p>
                        <p class="mb-[10px]"><b>¿Por qué atrae el turismo?</b> 
                            <br/><span class="list-benefits">Destaca por su gran tamaño y acabados artísticos con referencia a la ciudad más bella de Colombia</span></p>                                                                                           
                        <p class="mb-[10px]"><b>Beneficios para la ciudad:</b> 
                            <br/><span class="list-benefits">Activación del turismo e identidad cultural de la ciudad</span></p>
                    </div>
                    <a data-type="page-transition" class="ms-btn--slider">Lugar icónico</a>
                </div>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="slide-inner" data-swiper-parallax="45%">
                <div class="overlay"></div>
                <div
                    class="slide-inner--image"
                    :style="{ backgroundImage: `url(${chineseTemple})` }"
                ></div>
                <div class="slide-inner--info">
                    <h1>Templo icónico<br/> en Puerto Mocho</h1>
                    <div class="mb-[25px]">
                        <p class="mb-[10px]"><b>¿Qué es?</b> 
                            <br/><span class="list-benefits">Impulso artístico en Puerto Mocho para atraer turismo a este lugar</span></p>
                        <p class="mb-[10px]"><b>¿Por qué atrae el turismo?</b> 
                            <br/><span class="list-benefits">El templo brinda innovación e incentiva más al turista a ir a Puerto Mocho y ayudar a activar la economía de ese sector</span></p>                                                                                           
                        <p class="mb-[10px]"><b>Beneficios para la ciudad:</b> 
                            <br/><span class="list-benefits">Activación del comercio e impulso para Puerto Mocho</span></p>
                    </div>
                    <a data-type="page-transition" class="ms-btn--slider">Lugar icónico</a>
                </div>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="slide-inner" data-swiper-parallax="45%">
                <div class="overlay"></div>
                <div
                    class="slide-inner--image"
                    :style="{ backgroundImage: `url(${stadiumStatues})` }"
                ></div>
                <div class="slide-inner--info">
                    <h1>Estatuas en el<br/> Metro</h1>
                    <div class="mb-[25px]">
                        <p class="mb-[10px]"><b>¿Qué es?</b> 
                            <br/><span class="list-benefits">Homenaje a las leyendas que se han esforzados durante estos 101 años de la institución y logrado las mejores asañas </span></p>
                        <p class="mb-[10px]"><b>¿Por qué atrae el turismo?</b> 
                            <br/><span class="list-benefits">Las estatuas  brindarían un impacto más visual al estadio provocando que turistas quieran tomarse fotos e incluso motivación para los mismos jugadores de algún día ver su propia estatua ahí</span></p>                                                                                           
                        <p class="mb-[10px]"><b>Beneficios para la ciudad:</b> 
                            <br/><span class="list-benefits">Activación del estadio para atraer más gente y reforzar de mejor manera la renovación del estadio</span></p>
                    </div>
                    <a data-type="page-transition" class="ms-btn--slider">Lugar icónico</a>
                </div>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="slide-inner" data-swiper-parallax="45%">
                <div class="overlay"></div>
                <div
                    class="slide-inner--image"
                    :style="{ backgroundImage: `url(${carnival})` }"
                ></div>
                <div class="slide-inner--info">
                    <h1>Pasillo<br/>del carnaval</h1>
                    <div class="mb-[25px]">
                        <p class="mb-[10px]"><b>¿Qué es?</b> 
                            <br/><span class="list-benefits">Pasillo en el Gran Malecón de 20 metros de largo lleno de estatuas, figuras y referencias de lo que es el carnaval.</span></p>
                        <p class="mb-[10px]"><b>¿Por qué atrae el turismo?</b> 
                            <br/><span class="list-benefits">Sería un impulso visual al Gran Malecón y aportaría más a lo que es la cultura de Barranquilla y el carnaval.</span></p>                                                                                           
                        <p class="mb-[10px]"><b>Beneficios para la ciudad:</b> 
                            <br/><span class="list-benefits">Identidad cultural de la ciudad y explicación de lo que es el carnaval para los turistas que aún no lo conocen</span></p>
                    </div>
                    <a data-type="page-transition" class="ms-btn--slider">Lugar icónico</a>
                </div>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="slide-inner" data-swiper-parallax="45%">
                <div class="overlay"></div>
                <div
                    class="slide-inner--image"
                    :style="{ backgroundImage: `url(${foodCourt})` }"
                ></div>
                <div class="slide-inner--info">
                    <h1>Plaza comercial<br/>de stand</h1>
                    <div class="mb-[25px]">
                        <p class="mb-[10px]"><b>¿Qué es?</b> 
                            <br/><span class="list-benefits">Una nueva oportunidad para atraer el comercio a las calles implementando stands artísticos de comida.</span></p>
                        <p class="mb-[10px]"><b>¿Por qué atrae el turismo?</b> 
                            <br/><span class="list-benefits">Este espacio brinda una experiencia de primer mundo al aire libre que podría ser utilizado para eventos sociales y concursos.</span></p>                                                                                           
                        <p class="mb-[10px]"><b>Beneficios para la ciudad:</b> 
                            <br/><span class="list-benefits">Nuevos escenarios para eventos y oportunidad para el comercio.</span></p>
                    </div>
                    <a data-type="page-transition" class="ms-btn--slider">Lugar icónico</a>
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
                    <h1>Plaza fontanova<br/></h1>
                    <div class="mb-[25px]">
                        <p class="mb-[10px]"><b>¿Qué es?</b> 
                            <br/><span class="list-benefits">Un espacio en el cual se busca el impacto visual de los residentes y turistas añadiendo este nuevo lugar emblemático de la ciudad.</span></p>
                        <p class="mb-[10px]"><b>¿Por que atrae el turismo?</b> 
                            <br/><span class="list-benefits">Sus acabados inspirados en Europa, las estatuas basadas en la cultura de barranquilla y su gran espacio para promover el comercio haría de este lugar un referente en la ciudad.</span></p>                                                                                           
                        <p class="mb-[10px]"><b>Beneficios para la ciudad:</b> 
                            <br/><span class="list-benefits">Un nuevo lugar emblemático y escenario para nuevos eventos en la ciudad.</span></p>
                    </div>
                    <a data-type="page-transition" class="ms-btn--slider">Lugar icónico</a>
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
                    <h1>Jardín oriental</h1>
                    <div class="mb-[25px]">
                        <p class="mb-[10px]"><b>¿Qué es?</b> 
                            <br/><span class="list-benefits">Un jardín basado en la cultura oriental con espacios verdes increibles y lagos artificiales llenos de paz y un aire fresco para la ciudad.</span></p>
                        <p class="mb-[10px]"><b>¿Por qué atrae el turismo?</b> 
                            <br/><span class="list-benefits">Colombia cuenta con muy pocos jardines orientales y Barranquilla sería una de pocas ciudades que implementaría este tipo de jardines de gran impacto ecológico.</span></p>                                                                                           
                        <p class="mb-[10px]"><b>Beneficios para la ciudad:</b> 
                            <br/><span class="list-benefits">Nuevas zonas verdes y una Barranquilla más ecológica y ambiental.</span></p>
                    </div>
                    <a data-type="page-transition" class="ms-btn--slider">Lugar icónico</a>
                </div>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="slide-inner" data-swiper-parallax="45%">
                <div class="overlay"></div>
                <div
                    class="slide-inner--image"
                    :style="{ backgroundImage: `url(${restShip})` }"
                ></div>
                <div class="slide-inner--info">
                    <h1>Barcos restaurantes<br /> en el rio</h1>
                    <div class="mb-[25px]">
                        <p class="mb-[10px]"><b>¿Qué es?</b> 
                            <br/><span class="list-benefits">Una nueva idea de comercio inspirada en el Río Sena, que se puede replicar para utilizar más activamente el Río Magdalena mediante barcos que ofrecan un tour por el río mientras se ofrece una cena o comida de dos horas.</span></p>
                        <p class="mb-[10px]"><b>¿Por que atrae el turismo?</b> 
                            <br/><span class="list-benefits">Esta nueva experiencia permite que todo tipo de persona que esté en la ciudad quiera conocer un poco más del río mientras disfruta de una deliciosa comida.</span></p>                                                                                           
                        <p class="mb-[10px]"><b>Beneficios para la ciudad:</b> 
                            <br/><span class="list-benefits">Nuevas ideas de comercio e impulsar los recursos naturales de la ciudad como el Río Magdalena.</span></p>
                    </div>
                    <a data-type="page-transition" class="ms-btn--slider">Lugar icónico</a>
                </div>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="slide-inner" data-swiper-parallax="45%">
                <div class="overlay"></div>
                <div
                    class="slide-inner--image"
                    :style="{ backgroundImage: `url(${guitarra})` }"
                ></div>
                <div class="slide-inner--info" style="margin-left: 250px;">
                    <h1>Eventos<br /> en la ciudad</h1>
                    <div class="mb-[25px]">
                        <p style="font-size: 30px; margin-bottom: 0;">Ofrecemos un plan de actividades para impulsar el turismo</p>
                        <p style="font-size: 30px;">con la intención de traer más gente a barranquilla del interior y exterior del país:</p>
                        <ul style="font-size: 20px;">
                            <li>Competiciones de DJs</li> 
                            <li>Eventos de música sin cobro para los artistas que desean darse a conocer y no cuentan con patrocinio </li>
                            <li>Competencias de bartender</li>
                            <li>Batallas de baile</li>
                            <li>Obras de teatro para los artistas que deseen darse a conocer a la ciudad</li>
                            <li>Desfiles de moda para las marcas de ropa y emprendedores que quieran impulsar su marca</li>
                            <li>Competencias de artes marciales para niños</li>
                            <li>Batallas de coros para impulsar la música</li>
                            <li>Esculturas efímeras en la ciudad</li>
                            <li>Ambientaciones artísticas en la vía pública, combinando creatividad y promoción para impulsar el turismo y generar visibilidad.</li>
                        </ul>
                    </div>
                    <a data-type="page-transition" class="ms-btn--slider">Eventos icónicos</a>
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

import trevi from '@/assets/images/proposal/collage/fontana-di-trevi.jpg'
import trastevere from '@/assets/images/proposal/collage/trastevere.webp'
import arc from '@/assets/images/proposal/collage/arc-de-triomphe.jpg'
import temple from '@/assets/images/proposal/collage/temple.jpg'
import stands from '@/assets/images/proposal/collage/stands.jpg'


import barranquillaTwo from '@/assets/images/proposal/barranquilla-2.jpg'
import candyland from '@/assets/images/proposal/candyland-3.jpg'
import goldenGate from '@/assets/images/proposal/golden-gate.jpg'
import chineseTemple from '@/assets/images/proposal/chinese-temple.jpg'
import stadiumStatues from '@/assets/images/proposal/stadium-statues-1.jpg'
import carnival from '@/assets/images/proposal/carnival.jpg'
import foodCourt from '@/assets/images/proposal/food-court.png'
import restShip from '@/assets/images/proposal/rest-ship.jpg'


import guitarra from '@/assets/images/proposal/mujer-tocando-la-guitarra.jpg'


import fountain1 from '@/assets/images/proposal/fountain-of-newts.jpg'
import piazzaDelNettuno from '@/assets/images/proposal/piazza-del-nettuno-square-in-bologna-2.jpg'
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
