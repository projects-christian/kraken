<template>
  <section class="pb-24" data-aos="zoom-out" data-aos-duration="800">
    <div class="container">
      <div class="flex flex-wrap items-center justify-between mb-10">
        <div>
          <h2 class="text-4xl font-medium capitalize text-white mb-2">Browse by categories</h2>
          <p class="text-sm text-default-200 font-medium">Start working with Tailwindcss It allows you to compose
            complex designs <br> by combining and customizing utility classes..</p>
        </div>
        <a href="#"
           class="inline-flex items-center justify-center gap-2 border border-white/10 text-sm text-white py-1.5 px-4 rounded-full hover:bg-primary-hover transition-all duration-300">See
          All
          <MoveRight class="h-5 w-5"/>
        </a>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div v-for="(item,idx) in browseByCategory" :key="idx" class="relative rounded-xl overflow-hidden">
          <div class="absolute inset-0 bg-black/60"></div>
          <div class="absolute top-0 start-0 p-4">
            <a href=""
               class="inline-flex items-center justify-center gap-2 border border-primary text-base bg-primary text-white py-1.5 px-6 rounded-full hover:bg-primary-hover transition-all duration-300">
              {{ item.type}}
            </a>
          </div>
          <img :src="item.image" alt="" class="">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {browseByCategory} from "@/views/pages/index-1/components/data";
import {MoveRight} from "lucide-vue-next";
</script>