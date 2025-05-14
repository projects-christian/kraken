<template>
  <section id="categories" class="py-24">
    <div class="container relative">
      <div class="flex flex-wrap items-center justify-between mb-10">
        <div>
          <h2 class="text-4xl font-medium capitalize text-white mb-2">Categorias</h2>
          <p class="text-sm text-default-200 font-medium">Maximizamos el impacto visual, asegurando cada detalle
            <br> Creando una atmosfera magica, vibrante y memorable.</p>
        </div>
        <a href="#"
           class="inline-flex items-center justify-center gap-2 border border-white/10 text-sm text-white py-1.5 px-4 rounded-full hover:bg-primary-hover transition-all duration-300">See
          More
          <MoveRight class="h-5 w-5"/>
        </a>
      </div>

      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">

        <template v-for="(item,idx) in categories" :key="idx">
          <CategoryCard :item="item"/>
        </template>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CategoryCard from "@/views/pages/index-1/components/CategoryCard.vue";
import {categories} from "@/views/pages/index-1/components/data";
import {MoveRight} from "lucide-vue-next";
</script>