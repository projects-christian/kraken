<template>
  <div class="bg-default-950/40 backdrop-blur-3xl" data-aos="fade-left" data-aos-easing="ease"
       data-aos-duration="1000">
    <div class="sm:p-10 p-8">
      <div class="inline-flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-xl mb-10">
        <component :is="item.icon" class="h-8 w-8"></component>
      </div>
      <h2 class="text-2xl text-white font-medium mb-4">{{ item.title }}</h2>
      <p class="text-base text-default-200 mb-6">{{ item.description}}</p>
      <a href="#"
         class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300">More
        Tools
        <MoveRight class="h-5 w-5"/>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {FeatureType} from "@/views/pages/index-3/components/types";
import {MoveRight} from "lucide-vue-next";

defineProps({
  item: {
    type: Object as PropType<FeatureType>,
    required: true
  }
})
</script>