<template>
  <section id="showcase" class="pb-24" data-aos="zoom-out" data-aos-duration="800">
    <div class="container">
      <div class="flex flex-wrap items-center justify-between mb-10">
        <div>
          <h2 class="text-4xl font-medium capitalize text-white mb-2">The Best showcase</h2>
          <p class="text-sm text-default-200 font-medium">Start working with Tailwindcss It allows you to compose
            complex designs <br> by combining and customizing utility classes..</p>
        </div>
        <a href="#"
           class="inline-flex items-center justify-center gap-2 border border-white/10 text-sm text-white py-1.5 px-4 rounded-full hover:bg-primary-hover transition-all duration-300">See
          More
          <MoveRight class="h-5 w-5"/>
        </a>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 rounded-xl overflow-hidden">

        <a v-for="(img,idx) in showcaseItems" :key="idx" :href="img"
           class="glightbox overflow-hidden">
          <img :src="img"
               class="w-full rounded-lg md:rounded-none object-cover hover:scale-110 transition-all duration-1000"
               alt="">
        </a>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import GLightbox from "glightbox"
import {MoveRight} from "lucide-vue-next";

onMounted(() => {
  GLightbox({selector: ".glightbox"});
})

const showcaseItems = [
  '/src/assets/images/nft/art/10.png',
  '/src/assets/images/nft/art/4.png',
  '/src/assets/images/nft/art/5.png',
  '/src/assets/images/nft/art/9.png',
  '/src/assets/images/nft/art/14.png',
  '/src/assets/images/nft/art/22.png',
  '/src/assets/images/nft/art/25.png',
  '/src/assets/images/nft/art/20.png'
]
</script>