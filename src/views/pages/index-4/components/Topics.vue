<template>
  <section class="py-20">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-medium capitalize text-white mb-4">Trending Topics</h2>
          <p class="text-sm text-default-200 font-medium">Start working with Tailwindcss It allows you to compose
            complex designs <br> by combining and customizing utility classes..</p>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <template v-for="(topic,idx) in trendingTopics" :key="idx">
          <TopicCard :rank="idx+1" :topic="topic"/>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TopicCard from "@/views/pages/index-4/components/TopicCard.vue";
import {trendingTopics} from "@/views/pages/index-4/components/data";
</script>