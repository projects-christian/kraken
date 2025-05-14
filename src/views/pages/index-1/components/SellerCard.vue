<template>
  <div class="bg-default-950/40 rounded-xl backdrop-blur-3xl" data-aos="zoom-in-up" data-aos-duration="800">
    <div class="flex items-center border-b border-dashed border-white/20 p-4">
      <div v-for="(img,idx) in seller.topWork.slice(0,3)" :key="idx" class="w-1/2 p-1">
        <img :src="img" class="rounded-md" alt="">
      </div>
    </div>
    <div class="p-4">
      <div class="flex items-center justify-between w-full mb-6">
        <img alt="" :src="seller.image" class="w-14 h-14 rounded-full">
        <h3 class="text-3xl font-semibold text-default-100/60">{{ rank < 10 ? `0${rank}` : rank }}</h3>
      </div>
      <div class="flex items-end justify-between mb-4">
        <div>
          <h5 class="font-medium text-xl flex items-center text-white mb-2">{{ seller.name }}</h5>
          <p class="text-xs text-default-200"> Total earnings: <span
              class="font-medium text-white"> {{ currency }}{{ seller.earnings }} </span>
          </p>
        </div>
        <a href="#"
           class="inline-flex items-center justify-center gap-2 border border-white/10 text-sm text-white py-1.5 px-4 rounded-full hover:bg-primary-hover transition-all duration-300">View
          Detail</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {SellerType} from "@/views/pages/index-1/components/types";
import {currency} from "@/helpers";

defineProps({
  seller: {
    type: Object as PropType<SellerType>,
    required: true
  },
  rank: {
    type: Number,
    required: true
  }
})
</script>