<template>
  <div class="bg-default-950/40 backdrop-blur-3xl group rounded-lg space-y-6 overflow-hidden p-3"
       data-aos="fade-right" data-aos-easing="ease" data-aos-duration="1000">
    <div class="relative rounded-lg overflow-hidden">
      <img class="mx-auto h-full max-w-full object-cover object-top ransition duration-500 group-hover:scale-105"
           :src="blog.image">
      <div class="absolute inset-0">
        <div class="bg-black/60 h-full w-full rounded">
          <div class="flex items-end h-full p-4">
            <div>
              <p class="mb-2 text-white font-semibold">{{ blog.publishedDate }}</p>
              <h5 class="text-3xl font-bold text-white mb-4">{{ blog.title }}</h5>
              <p class="text-base font-semibold text-default-100 mb-6 whitespace-nowrap md:whitespace-normal truncate">
                {{ blog.description }}
              </p>
              <a href="#" class="text-white border-b border-dashed border-default-200 pb-1">Read
                More
                <MoveRight class="inline h-4 w-4 ms-2"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {BlogType} from "@/views/pages/index-1/components/types";
import {MoveRight} from "lucide-vue-next";

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  }
})
</script>