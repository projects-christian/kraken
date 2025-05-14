<template>
  <section id="price" class="py-20">
    <div class="container">
      <div class="lg:flex gap-10">
        <div class="flex flex-col items-center xl:items-start mb-10 lg:ms-0" data-aos="fade-right"
             data-aos-easing="ease" data-aos-duration="1000">
          <h1 class="text-2xl font-medium capitalize lg:text-3xl text-white">Our Pricing Plan</h1>

          <div class="mt-2">
            <span class="inline-block w-40 h-1 bg-primary rounded-full"></span>
            <span class="inline-block w-3 h-1 mx-1 bg-primary rounded-full"></span>
            <span class="inline-block w-1 h-1 bg-primary rounded-full"></span>
          </div>

          <div class="flex items-center justify-center gap-4 mt-4">
            <span class="text-base text-white">Monthly</span>
            <label for="pricing-input" class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" id="pricing-input" @change="togglePlans" class="sr-only peer">
              <span
                  class="w-11 h-4 bg-default-700 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-default-950 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[2px] after:border-default-950 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:ring-2 after:ring-offset-2 after:ring-offset-default-950 after:ring-primary after:bg-primary"></span>
            </label>
            <span class="text-base text-white">Yearly</span>
          </div>

          <p class="mt-4 font-medium text-default-200 mb-6">
            You can get All Access by selecting your plan!
          </p>

          <a href="#" class="inline-flex gap-2 items-center relative text-primary group">
            <span
                class="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0"></span>
            Select &amp; try <i data-lucide="move-right" class="h-4 w-4"></i>
          </a>
        </div>

        <div class="flex-1" data-aos="fade-left" data-aos-easing="ease" data-aos-duration="1000">
          <div class="flex items-center justify-center flex-col md:flex-row gap-x-4 gap-y-8">
            <template v-for="(item,idx) in pricingPlans" :key="idx">
              <template v-if="item.duration === planDuration">
                <PricingCard v-for="(plan,index) in item.plans" :key="index" :duration="item.duration" :plan="plan"/>
              </template>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type {PricingType} from "@/views/pages/index-5/components/types";
import PricingCard from "@/views/pages/index-5/components/PricingCard.vue";
import {pricingPlans} from "@/views/pages/index-5/components/data";
import {ref} from "vue";

const planDuration = ref<PricingType['duration']>('month')

const togglePlans = () => {
  if (planDuration.value === 'month') return planDuration.value = 'year';
  return planDuration.value = 'month';
}
</script>