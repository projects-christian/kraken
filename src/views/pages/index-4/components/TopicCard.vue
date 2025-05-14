<template>
  <div class="rounded-lg border border-white/10 bg-default-950/40 p-6" data-aos="fade-up" data-aos-easing="ease"
       data-aos-duration="1000">
    <div class="flex gap-5">
      <div>
        <div
            class="mt-2 h-8 w-8 text-xl font-semibold text-primary rounded-md bg-primary/20 flex items-center justify-center">
          {{ rank }}
        </div>
      </div>
      <div>
        <h2 class="text-xl font-medium text-white">{{ topic.name }}</h2>
        <p class="text-base font-medium text-default-200 mt-1">{{ topic.points }}</p>
        <div class="flex items-center gap-2 mt-6">
          <img v-for="(discusser,idx) in topic.discussers" :key="idx" :src="discusser.image"
               class="h-10 rounded bg-white" alt="">
        </div>
        <a href="#" class="inline-flex gap-2 items-center relative text-primary group mt-6">
          <span
              class="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0"></span>
          Read more
          <MoveRight class="h-4 w-4"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {TopicType} from "@/views/pages/index-4/components/types";
import {MoveRight} from "lucide-vue-next";

defineProps({
  topic: {
    type: Object as PropType<TopicType>,
    required: true
  },
  rank: {
    type: Number,
    required: true
  }
})
</script>