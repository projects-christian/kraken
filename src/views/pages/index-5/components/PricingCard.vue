<template>
  <div class="border rounded-lg border-white/10 bg-default-950/40 backdrop-blur-3xl">
    <div class="p-6">
      <h1 class="text-xl font-medium text-default-100 capitalize lg:text-2xl">{{ plan.name }}</h1>

      <p class="mt-4 text-default-300">
        {{ plan.description }}
      </p>

      <h2 class="mt-4 text-2xl font-semibold text-default-200 sm:text-3xl">{{ currency }}{{ plan.price }}<span
          class="text-base font-medium">/{{ toSentenceCase(duration) }}</span></h2>

      <p class="mt-1 text-default-300">
        Pay every {{ duration }}
      </p>

      <button
          class="w-full px-4 py-2 mt-6 tracking-wide text-primary capitalize transition-colors duration-300 transform bg-primary/20 rounded-md hover:bg-primary hover:text-white focus:text-white focus:outline-none focus:bg-primary">
        Start Now
      </button>
    </div>

    <hr class="border-white/10">

    <div class="p-6">
      <h1 class="text-lg font-medium text-white capitalize lg:text-xl">What’s included:</h1>

      <div class="mt-8 space-y-4">

        <div v-for="(item,idx) in plan.features" :key="idx" class="flex items-center gap-4">
          <component :is="item.icon" class="w-5 h-5"/>
          <span class="text-default-300">{{ item.label }}</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {PricingPlanType, PricingType} from "@/views/pages/index-5/components/types";
import {toSentenceCase} from "@/helpers/change-casing";
import {currency} from "@/helpers";

defineProps({
  plan: {
    type: Object as PropType<PricingPlanType>,
    required: true
  },
  duration: {
    type: String as PropType<PricingType['duration']>,
    required: true
  }
})
</script>