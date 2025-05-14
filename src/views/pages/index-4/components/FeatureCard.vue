<template>
  <div class="border border-white/10 bg-default-950/40 overflow-hidden rounded-3xl p-10" data-aos="fade-up"
       data-aos-easing="ease" data-aos-duration="1000">
    <div class="group transition-all duration-700">
      <div>
        <div class="flex flex-col">
          <div class="relative">
            <div class="opacity-100">
              <div class="group-hover:w-10 pb-12 group-hover:pb-8 transition-all duration-700">
                <component :is="item.icon"
                           class="h-12 w-12 group-hover:h-8 group-hover:w-8 text-primary transition-all duration-700"/>
              </div>
            </div>
          </div>
          <div>
            <h4 class="text-2xl font-medium text-white">{{ item.title }}</h4>
            <p class="text-default-200 mt-3">{{ item.description }}</p>
            <div
                class="h-3 transition-all duration-700 group-hover:pt-6 overflow-hidden group-hover:overflow-visible -mb-3">
              <div class="opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p class="text-base text-default-200 pb-5 flex items-center">Read more
                  <ChevronRight class="h-5 w-5 text-primary"/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {FeatureType} from "@/views/pages/index-4/components/types";
import {ChevronRight} from "lucide-vue-next";

defineProps({
  item: {
    type: Object as PropType<FeatureType>,
    required: true
  }
})
</script>