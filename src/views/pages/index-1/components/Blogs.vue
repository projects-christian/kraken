<template>
  <section id="blog" class="pb-24">
    <div class="container">
      <div class="flex flex-wrap items-center justify-between mb-10">
        <div>
          <h2 class="text-4xl font-medium capitalize text-white mb-2">Resources Blog & news</h2>
          <p class="text-sm text-default-200 font-medium">Start working with Tailwindcss It allows you to compose
            complex designs <br> by combining and customizing utility classes..</p>
        </div>
        <a href="#"
           class="inline-flex items-center justify-center gap-2 border border-white/10 text-sm text-white py-1.5 px-4 rounded-full hover:bg-primary-hover transition-all duration-300">See
          All
          <MoveRight class="h-5 w-5"/>
        </a>
      </div>

      <div class="grid gap-4 px-4 sm:px-0 lg:grid-cols-2">
        <template v-for="(blog,idx) in blogs" :key="idx">
          <BlogCard :blog="blog"/>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BlogCard from "@/views/pages/index-1/components/BlogCard.vue";
import {blogs} from "@/views/pages/index-1/components/data";
import {MoveRight} from "lucide-vue-next";
</script>