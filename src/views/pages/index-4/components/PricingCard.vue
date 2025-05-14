<template>
  <div class="flex flex-col h-full text-center">
    <div class="bg-default-950/40 pt-8 pb-5 px-8">
      <h4 class="font-medium text-lg text-default-200">{{ plan.name }}</h4>
    </div>

    <div class="h-full bg-default-950/40 lg:mt-px lg:py-5 px-8">
      <span class="mt-7 font-bold text-5xl text-default-200">
         <span v-if="plan.price > 0" class="font-bold text-2xl -me-2">{{ currency }}</span>
        {{ plan.price === 0 ? 'Free' : plan.price }}
      </span>
    </div>

    <div class="bg-default-950/40 flex justify-center lg:mt-px pt-7 px-8">
      <ul class="space-y-2.5 text-center text-sm">
        <li v-for="(item,idx) in plan.features" :key="idx" class="text-default-200">
          {{ item.label }}
        </li>
      </ul>
    </div>

    <div class="bg-default-950/40 py-8 px-8">
      <a class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300"
         href="#">
        Sign up
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {PricingPlanType} from "@/views/pages/index-4/components/types";
import {currency} from "@/helpers";

defineProps({
  plan: {
    type: Object as PropType<PricingPlanType>,
    required: true
  }
})
</script>