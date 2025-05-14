<template>
  <section id="price" class="py-20" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-medium capitalize text-white mb-4">Pricing and plans for everyone</h2>
          <p class="text-sm text-default-200 font-medium">Start working with Tailwindcss It allows you to compose
            complex designs <br> by combining and customizing utility classes..</p>
        </div>
      </div>

      <div class="rounded-2xl overflow-hidden">

        <div class="grid gap-px sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
          <template v-for="(plan,idx) in pricingPlans" :key="idx">
            <PricingCard :plan="plan"/>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PricingCard from "@/views/pages/index-4/components/PricingCard.vue";
import {pricingPlans} from "@/views/pages/index-4/components/data";
</script>