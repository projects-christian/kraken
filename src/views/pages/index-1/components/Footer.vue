<template>
  <footer class="bg-default-950/40 backdrop-blur-3xl">
    <div class="container lg:px-20">
      <div class="flex flex-col lg:flex-row justify-between gap-14 py-24">
        <div class="lg:w-3/12">
          <a href="#" class="flex items-center gap-2 logo">
            <img :src="logo" class="w-36" alt="">
          </a>

          <p class="text-default-200 text-sm font-medium max-w-xs mt-6">Comienza tu experiencia con Kraken 
            </p>
          <!-- <h5 class="text-default-200 text-base font-semibold mb-4 mt-6">Follow Us :</h5>
          <ul class="flex flex-wrap items-center gap-1">
            <li v-for="(link,idx) in socialLinks" :key="idx">
              <router-link :to="link.route.url ? link.route.url : link.route"
                           class="h-8 w-8 inline-flex items-center justify-center border border-white/10 rounded-md transition-all duration-500 group hover:bg-primary">
                <component :is="link.icon" class="h-4 w-4 text-default-300 group-hover:text-white"/>
              </router-link>
            </li>
          </ul> -->
        </div>

        <div class="lg:w-8/12">
          <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-6">

            <div v-for="(item,idx) in footerItems" :key="idx">
              <ul class="flex flex-col gap-3">
                <h5 class="xl:text-xl lg:text-lg font-semibold text-default-200 mb-2">{{ item.title }}</h5>
                <li v-for="link in item.links">
                  <router-link :to="link.route.url ? link.route.url : link.route"
                               class="inline-flex items-center gap-2 text-base font-semibold text-default-100 hover:text-primary transition-all">
                    <CircleSlash class="inline-block h-4 w-4"/>
                    {{ link.label}}
                  </router-link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10 py-6">
      <div
          class="container lg:px-20 flex flex-wrap justify-center items-center gap-4 h-full md:justify-between text-center md:text-start">
        <p class="text-base font-medium text-default-400">
          {{ currentYear }}
          © {{ appName }} - <a href="#">Elaborado 
          <Heart class="inline h-4 w-4 text-red-500 fill-red-500"/>
          por
          {{ appAuthor }}</a>
        </p>
        <p class="text-base font-medium text-default-400">
          <a href="#">Terms Conditions & Policy</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import logo from "@/assets/images/kraken-logo.png"
import {CircleSlash, Heart} from "lucide-vue-next";
import {currentYear, appName, appAuthor, socialLinks} from "@/helpers";
import {footerItems} from "@/views/pages/index-1/components/data";
</script>