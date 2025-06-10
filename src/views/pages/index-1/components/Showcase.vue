<template>
    <section
        id="showcase"
        class="pb-24"
        data-aos="zoom-out"
        data-aos-duration="800"
    >
        <div class="container">
            <div class="flex flex-wrap items-center justify-between mb-10">
                <div>
                    <h2 class="text-4xl font-medium capitalize text-white mb-2">
                        Trabajos Realizados
                    </h2>
                    <p class="text-sm text-default-200 font-medium">
                        Conocé algunos de nuestros trabajos realizados en
                        escenografía, carrozas y ambientación. <br />
                        Ideas que se hicieron realidad a través del diseño, la
                        técnica y la pasión.
                    </p>
                </div>
                <!-- <a
                    href="#"
                    class="inline-flex items-center justify-center gap-2 border border-white/10 text-sm text-white py-1.5 px-4 rounded-full hover:bg-primary-hover transition-all duration-300"
                    >See More
                    <MoveRight class="h-5 w-5" />
                </a> -->
            </div>

            <div
                class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 rounded-xl overflow-hidden"
            >
                <a
                    v-for="(img, idx) in showcaseItems"
                    :key="idx"
                    :href="img"
                    class="glightbox overflow-hidden"
                >
                    <img
                        :src="img"
                        class="w-full rounded-lg md:rounded-none object-cover hover:scale-110 transition-all duration-1000"
                        alt=""
                    />
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import GLightbox from "glightbox";
import { MoveRight } from "lucide-vue-next";

import img1 from "@/assets/images/gallery/gallery-1.jpg";
import img2 from "@/assets/images/gallery/gallery-2.jpg";
import img3 from "@/assets/images/gallery/gallery-3.jpg";
import img4 from "@/assets/images/gallery/gallery-4.jpg";
import img5 from "@/assets/images/gallery/gallery-5.jpg";
import img6 from "@/assets/images/gallery/gallery-6.jpg";
import img7 from "@/assets/images/gallery/gallery-7.jpg";
import img8 from "@/assets/images/gallery/gallery-8.jpg";

onMounted(() => {
    GLightbox({ selector: ".glightbox" });
});

const showcaseItems = [img1, img2, img3, img4, img5, img6, img7, img8];
</script>
