<template>
  <div data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="1000">
    <div class="bg-slate-950/40 rounded-xl hover:-translate-y-2 transition-all duration-500">
      <div class="border border-white/10 rounded-xl">
        <div class="p-6">
          <h5 class="text-base font-medium text-primary">{{ plan.name }}</h5>
          <p class="relative text-5xl font-normal tracking-tight text-white mt-5">
            {{ currency }}{{ plan.price }}<sub class="text-lg font-normal text-default-200">/{{ duration }}</sub></p>
          <p class="text-default-300 mt-4">{{ plan.description }}</p>
          <a href="#"
             class="flex items-center justify-center gap-2 border text-white py-2 px-6 mt-6 rounded-lg hover:bg-primary-hover transition-all duration-300" :class="plan.isPopular ? 'border-primary bg-primary' : 'border-white/10'">
            Get started
            <MoveRight class="h-5 w-5"/>
          </a>
          <hr class="my-5 border-dashed border-white/10">
          <ul role="list" class="mt-3 text-sm text-default-700">

            <li v-for="(item,idx) in plan.features" :key="idx" class="flex items-center gap-2 py-2">
              <component v-if="item.icon" :is="item.icon" class="inline-block h-5 w-5 me-1 text-primary"/>
              <span class="text-default-50">{{ item.label }}</span>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {PricingPlanType, PricingType} from "@/views/pages/index-3/components/types";
import {MoveRight} from "lucide-vue-next";
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