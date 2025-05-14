<template>
  <section id="features" class="pb-24">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-medium capitalize text-white mb-4">The AI Generator that helps you Create amazing
            image taster.</h2>
        </div>
      </div>

      <div class="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
        <template v-for="(item,idx) in features" :key="idx">
          <FeatureCard :item="item"/>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FeatureCard from "@/views/pages/index-2/components/FeatureCard.vue";
import {features} from "@/views/pages/index-2/components/data";
</script>