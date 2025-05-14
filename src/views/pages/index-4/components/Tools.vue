<template>
  <section id="tools" class="py-20">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-medium capitalize text-white mb-4">AI Generate Content In Seconds</h2>
          <p class="text-sm text-default-200 font-medium">Start working with Tailwindcss It allows you to compose
            complex designs <br> by combining and customizing utility classes..</p>
        </div>
      </div>

      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <template v-for="(item,idx) in toolFeatures" :key="idx">
          <ToolCard :item="item"/>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ToolCard from "@/views/pages/index-4/components/ToolCard.vue";
import {toolFeatures} from "@/views/pages/index-4/components/data";
</script>