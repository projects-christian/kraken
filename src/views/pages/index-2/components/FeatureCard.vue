<template>
  <div class="p-10 rounded-lg bg-default-950/40 aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease"
       data-aos-duration="1000">
    <div class="text-center">
      <component :is="item.icon" class="h-10 w-10 text-primary mx-auto"/>
      <h2 class="text-2xl font-medium text-default-200 mt-4">{{ item.title }}</h2>
      <p class="text-base font-normal text-default-300 mt-4">
        {{ item.description }}
      </p>
      <a href="#" class="inline-flex gap-2 items-center relative text-primary group mt-5">
              <span
                  class="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0"></span>
        Lead more
        <MoveRight class="h-4 w-4"/>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {FeatureType} from "@/views/pages/index-2/components/types";
import {MoveRight} from "lucide-vue-next";

defineProps({
  item: {
    type: Object as PropType<FeatureType>,
    required: true
  }
})
</script>