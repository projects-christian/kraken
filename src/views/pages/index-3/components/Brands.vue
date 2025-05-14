<template>
  <section class="py-14">
    <div class="container" data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="1000">
      <div class="mt-5">
        <Swiper
            :modules="[Pagination,Autoplay]"
            :slides-per-view="1"
            :space-between="30"
            :centered-slides="true"
            :loop="true"
            :navigation="{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }"
            :autoplay="{
                delay: 3500,
                disableOnInteraction: false,
            }"
            :breakpoints="{
                400: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }"
            class="swiper logo-swiper">

          <SwiperSlide v-for="(img,idx) in brands" :key="idx">
            <img :src="img" alt="">
          </SwiperSlide>

          <SwiperSlide v-for="(img,idx) in brands" :key="idx">
            <img :src="img" alt="">
          </SwiperSlide>

          <div class="swiper-pagination"></div>

        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import logo1 from "@/assets/images/logo/1.png"
import logo2 from "@/assets/images/logo/2.png"
import logo3 from "@/assets/images/logo/3.png"
import logo4 from "@/assets/images/logo/4.png"
import logo5 from "@/assets/images/logo/5.png"

import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, Pagination} from "swiper/modules";

const brands = [logo1, logo2, logo3, logo4, logo5]
</script>