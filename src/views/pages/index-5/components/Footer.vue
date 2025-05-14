<template>
  <footer class="bg-default-950/40 backdrop-blur-3xl" data-aos="zoom-in" data-aos-easing="ease"
          data-aos-duration="1000">
    <div class="container lg:px-20 py-20">
      <div class="grid lg:grid-cols-12 grid-cols-2 gap-10 lg:gap-16">

        <div v-for="(item,idx) in footerItems" :key="idx" class="lg:col-span-3 sm:col-span-1 col-span-2">
          <ul class="flex flex-col gap-3">
            <h5 class="xl:text-xl lg:text-lg font-medium text-default-200 mb-2">{{ item.title }}</h5>
            <li v-for="link in item.links">
              <router-link :to="link.route.url ? link.route.url : link.route"
                           class="text-base text-default-300 hover:text-white transition-all">
                <GaugeCircle class="inline-block h-4 w-4 me-2"/>
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-6 col-span-2">
          <div class="bg-primary/20 rounded-xl">
            <div class="p-10">
              <h6 class="text-xl text-white mb-4">Newsletter</h6>
              <p class="text-base font-medium text-default-200 mb-6">Sign up and receive the latest tips via email.</p>
              <form class="space-y-2 mb-6">
                <label for="subcribe" class="text-base text-white">Email</label>
                <div class="relative">
                  <input type="email" id="subcribe"
                         class="py-4 ps-4 pe-40 w-full h-12 text-white rounded-lg bg-default-950/60 backdrop-blur-3xl border-white/10 focus:ring-0 focus:border-white/10"
                         placeholder="Enter your email :" name="email">
                  <button type="submit"
                          class="inline-flex items-center justify-center gap-2 px-6 absolute top-[6px] end-[6px] h-9 transition-all bg-primary hover:bg-primary-hover border-primary hover:border-primary-hover text-white rounded-md">
                    Subscribe
                    <MoveRight class="h-4 w-4"/>
                  </button>
                </div>
              </form>
              <div>
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
          </div>
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
import {Heart, MoveRight, GaugeCircle} from "lucide-vue-next";
import {currentYear, appName, appAuthor, socialLinks} from "@/helpers";
import {footerItems} from "@/views/pages/index-5/components/data";
</script>