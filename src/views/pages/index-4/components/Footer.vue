<template>
  <footer class="bg-default-950/40 backdrop-blur-3xl" data-aos="fade-down" data-aos-easing="ease"
          data-aos-duration="1000">
    <div class="container lg:px-20 py-20">

      <div class="mb-6">
        <img :src="logo" class="h-14 mx-auto">
      </div>

      <div class="flex flex-wrap items-center justify-center gap-5">
        <a href="#"
           class="text-lg font-medium text-default-400 hover:text-white transition-all duration-500">Management</a>
        <a href="#"
           class="text-lg font-medium text-default-400 hover:text-white transition-all duration-500">Reporting</a>
        <a href="#"
           class="text-lg font-medium text-default-400 hover:text-white transition-all duration-500">Tracking</a>
        <a href="#"
           class="text-lg font-medium text-default-400 hover:text-white transition-all duration-500">Subscribe</a>
        <a href="#"
           class="text-lg font-medium text-default-400 hover:text-white transition-all duration-500">Company</a>
      </div>
      <div class="mt-6">
        <h6 class="text-lg font-semibold text-white text-center mb-4">Follow US :</h6>
        <ul class="flex flex-wrap items-center justify-center gap-1">
          <li v-for="(link,idx) in socialLinks" :key="idx">
            <router-link :to="link.route.url ? link.route.url : link.route"
                         class="h-10 w-10 inline-flex items-center justify-center border border-white/10 rounded-lg transition-all duration-500 group hover:bg-primary">
              <component :is="link.icon" class="h-5 w-5 text-default-300 group-hover:text-white"/>
            </router-link>
          </li>
        </ul>
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
</script>