<template>
  <footer class="bg-default-950/40">
    <div class="container">
      <div class="grid lg:grid-cols-9 grid-cols-2 gap-10 lg:gap-16 py-20">
        <div class="lg:col-span-3 sm:col-span-1 col-span-2">
          <img :src="logo" class="h-10" alt="">

          <div class="mt-7">
            <h6 class="text-base text-white mb-4">Follow US :</h6>
            <ul class="flex flex-wrap items-center gap-1">
              <li v-for="(link,idx) in socialLinks" :key="idx">
                <router-link :to="link.route.url ? link.route.url : link.route"
                             class="h-10 w-10 inline-flex items-center justify-center border border-white/10 rounded-lg transition-all duration-500 group hover:bg-primary">
                  <component :is="link.icon" class="h-5 w-5 text-default-300 group-hover:text-white"/>
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        <div v-for="(item,idx) in footerItems" :key="idx" class="lg:col-span-2 sm:col-span-1 col-span-2">
          <ul class="flex flex-col gap-3">
            <h5 class="xl:text-xl lg:text-lg font-medium text-white mb-2">{{ item.title }}</h5>
            <li v-for="link in item.links">
              <router-link :to="link.route.url ? link.route.url : link.route"
                           class="text-base font-normal text-default-200 hover:text-white transition-all">
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <div class="border-t border-white/10 py-6">
      <div
          class="container lg:px-20 flex flex-wrap justify-center items-center gap-4 h-full md:justify-between text-center md:text-start">
        <p class="text-base font-medium text-default-400">
          {{ currentYear }}
          © {{ appName }} - <a href="#">Design & Crafted
          <Heart class="inline h-4 w-4 text-red-500 fill-red-500"/>
          by
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
import logo from "@/assets/images/logo.png"
import {Heart} from "lucide-vue-next";
import {currentYear, appName, appAuthor, socialLinks} from "@/helpers";
import {footerItems} from "@/views/pages/index-3/components/data";
</script>