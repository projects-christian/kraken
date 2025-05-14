<template>
  <section id="tools" class="py-20" data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="1000">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-medium capitalize text-white mb-4">60+ Powerful Tools</h2>
          <p class="text-sm text-default-200 font-medium">Start working with Tailwindcss It allows you to compose
            complex designs <br> by combining and customizing utility classes..</p>
        </div>
      </div>
      <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
        <template v-for="(item,idx) in tools" :key="idx">
          <ToolCard :item="item"/>
        </template>
      </div>

      <div class="flex justify-center mt-10">
        <a href="#"
           class="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300">More
          Tools
          <MoveRight class="h-5 w-5"/>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ToolCard from "@/views/pages/index-5/components/ToolCard.vue";
import {tools} from "@/views/pages/index-5/components/data";
import {MoveRight} from "lucide-vue-next";
</script>
