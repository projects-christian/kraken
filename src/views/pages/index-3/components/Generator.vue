<template>
  <section id="generator" class="py-14">
    <div class="container" data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="1000">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-medium capitalize text-white mb-4">Choose Social Media Post Generator</h2>
          <p class="text-sm text-default-200 font-medium">Start working with Tailwindcss It allows you to compose
            complex designs <br> by combining and customizing utility classes..</p>
        </div>
      </div>

      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <template v-for="(item,idx) in generatorFeatures" :key="idx">
          <FeatureCard2 :item="item"/>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FeatureCard2 from "@/views/pages/index-3/components/FeatureCard2.vue";
import {generatorFeatures} from "@/views/pages/index-3/components/data";
</script>