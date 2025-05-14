<template>
  <div class="bg-default-950/40 rounded-xl backdrop-blur-3xl">
    <div class="p-6">
      <div class="flex items-center gap-4 mb-4">
        <div class="inline-flex items-center justify-center h-10 w-10 rounded-lg"
             :class="`bg-${item.variant}/20 text-${item.variant}`"
        >
          <component :is="item.icon" class="h-6 w-6"/>
        </div>
        <h3 class="text-xl font-medium text-default-200">{{ item.name }}</h3>
      </div>

      <a href="#" class="inline-flex gap-2 items-center relative text-primary group">
        <span
            class="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0"></span>
        Select & try
        <MoveRight class="h-4 w-4"/>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {ToolType} from "@/views/pages/index-5/components/types";
import {MoveRight} from "lucide-vue-next";

defineProps({
  item: {
    type: Object as PropType<ToolType>,
    required: true
  }
})
</script>