<template>
  <section id="features" class="py-20">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-medium capitalize text-white mb-4">AI Generate Content In Seconds</h2>
          <p class="text-sm text-default-200 font-medium">Start working with Tailwindcss It allows you to compose
            complex designs <br> by combining and customizing utility classes..</p>
        </div>
      </div>
      <div class="grid lg:grid-cols-3 gap-6">
        <div v-for="(items,index) in chunkArray(features,3)" :key="index" class="space-y-6" data-aos="fade-up"
             data-aos-easing="ease" data-aos-duration="1000">
          <template v-for="(item,idx) in items" :key="idx">
            <FeatureCard :item="item"/>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FeatureCard from "@/views/pages/index-5/components/FeatureCard.vue";
import {features} from "@/views/pages/index-5/components/data";
import {chunkArray} from "@/helpers/array";
</script>