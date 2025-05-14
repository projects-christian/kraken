<template>
  <div
      class="group p-8 rounded-xl bg-default-950/40 transition-all duration-500 hover:-translate-y-2 hover:bg-primary/40">
    <div
        class="h-14 w-14 flex items-center justify-center rounded-lg bg-primary/20 text-primary group-hover:bg-white/20 group-hover:text-white">
      <component :is="item.icon" class="h-9 w-9"/>
    </div>
    <h3 class="text-xl font-medium text-default-200 mt-8">{{ item.title }}</h3>
    <p class="text-base font-normal text-default-300 mt-4">{{ item.description }}</p>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {FeatureType} from "@/views/pages/index-3/components/types";

defineProps({
  item: {
    type: Object as PropType<FeatureType>,
    required: true
  }
})
</script>