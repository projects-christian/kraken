<template>
  <div
      class="bg-default-950/40 rounded-xl backdrop-blur-3xl border-s-2 border-primary hover:-trandefault-y-2 transition-all duration-500">
    <div class="p-10">
      <component :is="item.icon" class="h-10 w-10 text-primary"/>
      <h3 class="text-2xl font-medium text-white mb-4 mt-8">{{ item.title }}</h3>
      <p class="text-sm text-default-100 font-medium mb-4">{{ item.description }}</p>
      <a href="#" class="inline-flex gap-2 items-center relative text-primary group">
        <span
            class="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0"></span>
        Read More
        <MoveRight class="h-4 w-4"/>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {FeatureType} from "@/views/pages/index-5/components/types";
import {MoveRight} from "lucide-vue-next";

defineProps({
  item: {
    type: Object as PropType<FeatureType>,
    required: true
  }
})
</script>