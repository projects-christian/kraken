<template>
  <section id="testimonials" class="py-20" data-aos="fade-down" data-aos-easing="ease" data-aos-duration="1000">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-medium capitalize text-white mb-4">What Our Users Say</h2>
          <p class="text-sm text-default-200 font-medium">Start working with Tailwindcss It allows you to compose
            complex designs <br> by combining and customizing utility classes..</p>
        </div>
      </div>

      <div>
        <div class="relative gap-8 m-auto flex overflow-hidden">
          <div class="marquee__group gap-8 flex justify-around flex-shrink-0 min-w-full">
            <template v-for="(item,idx) in testimonials.slice(0,3)" :key="idx">
              <TestimonialCard :item="item"/>
            </template>
          </div>

          <div aria-hidden="true" class="marquee__group gap-8 flex justify-around flex-shrink-0 min-w-full">
            <template v-for="(item,idx) in testimonials.slice(3,testimonials.length)" :key="idx">
              <TestimonialCard :item="item"/>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import {testimonials} from "@/views/pages/index-4/components/data";
import TestimonialCard from "@/views/pages/index-4/components/TestimonialCard.vue";
</script>