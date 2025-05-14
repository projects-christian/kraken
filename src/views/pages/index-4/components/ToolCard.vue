<template>
  <div class="border p-6 border-white/10 rounded-xl bg-default-950/40 text-center" data-aos="fade-up"
       data-aos-easing="ease" data-aos-duration="1000">
    <span class="inline-flex relative z-0 bg-primary/10 h-24 w-24 items-center justify-center"
          style="border-radius: 28% 72% 50% 50%/26% 20% 80% 74%;">
      <component :is="item.icon" class="h-10 w-10 mx-auto text-primary"/>
    </span>
    <h2 class="text-2xl font-medium text-white mt-5">{{ item.title }}</h2>
    <p class="text-base font-medium text-default-200 mt-2 mb-6">{{ item.description }}</p>
    <a href="#"
       class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300">More
      Tools
      <MoveRight class="h-5 w-5"/>
    </a>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {FeatureType} from "@/views/pages/index-4/components/types";
import {MoveRight} from "lucide-vue-next";

defineProps({
  item: {
    type: Object as PropType<FeatureType>,
    required: true
  }
})
</script>