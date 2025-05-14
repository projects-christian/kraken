<template>
  <div>
    <div class="m-2 relative w-full lg:w-full">
      <div class="group">
        <div class="border border-black rounded-xl w-full translate-x-1 transition-all duration-500">
          <div class="bg-default-950 rounded-xl h-full p-6 relative z-10">
            <div class="flex items-center gap-3">
              <div>
                <img :src="item.user.image" class="h-12 w-12 rounded-full" alt="">
              </div>
              <div>
                <h3 class="text-xl font-medium text-default-200">{{ item.user.name }}</h3>
                <p class="text-sm font-normal text-default-400 mt-1">{{ item.user.role }}</p>
              </div>
            </div>
            <p class="text-base font-medium text-default-300 mt-4 max-w-xs">
              {{ item.review}}
            </p>
          </div>
        </div>
        <div class="absolute bg-primary rounded-xl h-full left-0 top-0 w-full -z-10"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {TestimonialType} from "@/views/pages/index-4/components/types";

defineProps({
  item: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>