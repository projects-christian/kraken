<template>
  <section id="features" class="py-14">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-medium capitalize text-white mb-4">We're here to support you every step way</h2>
          <p class="text-sm text-default-200 font-medium">Start working with Tailwindcss It allows you to compose
            complex designs <br> by combining and customizing utility classes..</p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-px overflow-hidden rounded-3xl">
        <template v-for="(item,idx) in features" :key="idx">
          <FeatureCard1 :item="item"/>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FeatureCard1 from "@/views/pages/index-3/components/FeatureCard1.vue";
import {features} from "@/views/pages/index-3/components/data";
</script>