<template>
  <section id="home" class="relative pt-[74px] overflow-hidden">
    <div class="container-fluid lg:px-10 md:px-3 relative overflow-hidden">
      <div class="lg:py-24 py-[74px] md:rounded-lg shadow bg-default-950/40 backdrop-blur-3xl">
        <div class="container relative">
          <div class="absolute top-0">
            <Badge
                class="animate-[spin_10s_linear_infinite] h-12 w-12 fill-primary/20 text-transparent"/>
          </div>
          <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div class="md:col-span-7" data-aos="fade-right" data-aos-easing="ease" data-aos-duration="1000">
              <div class="md:me-6">
                                <span
                                    class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-primary/20 text-primary mb-6">
                                    <span class="w-2 h-2 inline-block bg-primary rounded-full"></span>
                                    Aquí respiras arte
                                </span>
                <h4 class="font-semibold text-4xl/tight lg:text-6xl/tight capitalize text-white mb-4"><span
                    class="bg-gradient-to-l from-red-600 to-primary text-transparent bg-clip-text">Kraken Studio Art</span>
                  escenografia, carrozas y ambientación.</h4>
                <p class="text-lg max-w-xl text-default-200 mb-6">Únete a nosotros y descubre cómo podemos transformar tu próximo evento en una experiencia inolvidable.
                    ¡llevamos la magia del arte a tu vida!</p>

                <!-- <div>
                  <a href="#"
                     class="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-hover transition-all duration-300 me-2 mt-2">Explore
                    Now</a>
                  <a href="#"
                     class="inline-flex items-center justify-center gap-2 py-2 px-6 transition-all duration-300 border bg-transparent border-white/20 text-white rounded-lg mt-2 hover:bg-primary hover:border-primary">Sell
                    Now <i class="mdi mdi-arrow-top-right-thin text-xl leading-[0]"></i></a>
                </div> -->
              </div>
            </div>

            <div class="md:col-span-5" data-aos="fade-left" data-aos-easing="ease" data-aos-duration="1000">
              <div class="flex gap-4 md:gap-6 tilt">
                <div class="flex flex-col gap-4 md:gap-6 pt-10 md:pt-16 w-full">
                  <img :src="nftArt22"
                       class="w-full h-40 md:h-[278px] rounded-lg object-cover" alt="">
                  <img :src="nftArt18"
                       class="w-full h-40 md:h-[278px] rounded-lg object-cover" alt="">
                </div>
                <div class="flex flex-col gap-4 md:gap-6 pb-10 md:pb-16 w-full relative">
                  <div class="absolute bottom-0 end-0 -z-10">
                    <Triangle
                        class="animate-[spin_10s_linear_infinite] h-12 w-12 fill-primary/20 text-transparent"/>
                  </div>
                  <img :src="nftArt5"
                       class="w-full h-40 md:h-[278px] rounded-lg object-cover" alt="">
                  <img :src="nftArt6"
                       class="w-full h-40 md:h-[278px] rounded-lg object-cover" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {Badge, Triangle} from "lucide-vue-next";
import nftArt5 from "@/assets/images/nft/art/5.png"
import nftArt6 from "@/assets/images/nft/art/6.png"
import nftArt18 from "@/assets/images/nft/art/18.png"
import nftArt22 from "@/assets/images/nft/art/22.png"
</script>