<template>
  <section id="testimonials" class="pb-24" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000">
    <div class="container">
      <div class="bg-default-950/20 backdrop-blur-sm rounded-xl relative md:p-20 p-6">
        <div class="hidden lg:block">
          <div class="absolute h-14 w-14 top-10 start-32 -z-1">
            <img :src="avatar1" class="rounded-full" alt="">
          </div>
          <div class="absolute h-14 w-14 top-64 start-10 -z-1">
            <img :src="avatar2" class="rounded-full" alt="">
          </div>
          <div class="absolute h-14 w-14 bottom-10 start-32 -z-1">
            <img :src="avatar3" class="rounded-full" alt="">
          </div>

          <div class="absolute h-14 w-14 top-10 end-32 -z-1">
            <img :src="avatar4" class="rounded-full" alt="">
          </div>
          <div class="absolute h-14 w-14 top-64 end-10 -z-1">
            <img :src="avatar5" class="rounded-full" alt="">
          </div>
          <div class="absolute h-14 w-14 bottom-10 end-32 -z-1">
            <img :src="avatar6" class="rounded-full" alt="">
          </div>
        </div>


        <Swiper class="testimonial-swiper"
                :modules="[Pagination,Autoplay]"
                :loop="true"
                :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                }"
                :pagination="{
                    clickable: true,
                    el: '.swiper-pagination',
                }"
                wrapper-class="pb-20">

          <SwiperSlide v-for="(item,idx) in testimonials" :key="idx">

            <div class="max-w-2xl mx-auto text-center">
              <Quote class="w-8 h-8 mx-auto fill-primary text-primary"/>
              <p class="text-lg font-medium text-default-200 mt-7">"{{ item.review }}"</p>
              <img :src="item.user.image" class="h-16 rounded-full mx-auto my-8" alt="">
              <h2 class="text-xl font-medium text-default-200">{{ item.user.name }}</h2>
              <p class="text-sm font-normal text-default-400 mt-1">{{ item.user.role }}</p>
              <div class="flex items-center justify-center gap-1 mt-1">

                <Star v-for="(star, idx) in Array.from(new Array(Math.floor(item.rating ?? 0)))"
                      :key="idx" class="h-4 w-4 stroke-yellow-300 fill-yellow-300"/>

                <StarHalf v-if="!Number.isInteger(item.rating)" class="h-4 w-4 stroke-yellow-300 fill-yellow-300"/>

                <Star v-for="(star, idx) in Array.from(new Array(5 - Math.ceil(item.rating ?? 0)))"
                      :key="idx" class="h-4 w-4 stroke-yellow-300"/>

              </div>
            </div>
          </SwiperSlide>

          <div class="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import avatar1 from "@/assets/images/avatars/img-1.png"
import avatar2 from "@/assets/images/avatars/img-2.png"
import avatar3 from "@/assets/images/avatars/img-3.png"
import avatar4 from "@/assets/images/avatars/img-4.png"
import avatar5 from "@/assets/images/avatars/img-5.png"
import avatar6 from "@/assets/images/avatars/img-6.png"

import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, Pagination} from "swiper/modules";

import {testimonials} from "@/views/pages/index-2/components/data";

import {Quote, Star, StarHalf} from "lucide-vue-next";
</script>