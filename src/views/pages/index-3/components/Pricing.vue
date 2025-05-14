<template>
  <section id="price" class="py-14">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-medium capitalize text-white mb-4">We've got a plan that's perfect for you</h2>
          <p class="text-sm text-default-200 font-medium">Start working with Tailwindcss It allows you to compose
            complex designs <br> by combining and customizing utility classes..</p>
          <div class="flex items-center justify-center gap-4 mt-6">
            <span class="text-base font-medium text-default-200">Monthly</span>
            <label for="pricing-input" class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" id="pricing-input" @change="togglePlans" class="sr-only peer"/>
              <span
                  class="w-11 h-4 bg-default-700 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-default-950 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[2px] after:border-default-950 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:ring-2 after:ring-offset-2 after:ring-offset-default-950 after:ring-primary after:bg-primary"></span>
            </label>
            <span class="text-base font-medium text-default-200">Yearly</span>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">

        <template v-for="(item,idx) in pricingPlans" :key="idx">
          <template v-if="item.duration === planDuration">
            <PricingCard v-for="(plan,index) in item.plans" :key="index" :duration="item.duration" :plan="plan"/>
          </template>
        </template>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref} from "vue";
import type {PricingType} from "@/views/pages/index-3/components/types";
import {pricingPlans} from "@/views/pages/index-3/components/data";
import PricingCard from "@/views/pages/index-3/components/PricingCard.vue";

const planDuration = ref<PricingType['duration']>('month')

const togglePlans = () => {
  if (planDuration.value === 'month') return planDuration.value = 'year';
  return planDuration.value = 'month';
}
</script>