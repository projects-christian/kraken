<template>
  <section class="pb-24">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-6">
        <div class="relative rounded-lg overflow-hidden" data-aos="fade-right" data-aos-easing="ease"
             data-aos-duration="1000">
          <img class="mx-auto h-full w-full object-cover object-top ransition duration-500 group-hover:scale-105"
               :src="aiImg10" alt="woman" loading="lazy" width="640" height="805">
          <div class="absolute inset-0">
            <div class="h-full w-full">
              <div class="flex items-end h-full w-full p-5">
                <div class="bg-white/10 backdrop-blur-md p-6 rounded w-full">
                  <h2 class="text-lg font-normal text-center text-default-300">Gaze upon the awe-inspiring creation of
                    artificial intelligence, a majestic dragon of epic proportions. </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6" data-aos="fade-left" data-aos-easing="ease" data-aos-duration="1000">
          <div class="relative rounded-lg overflow-hidden">
            <img class="mx-auto h-full w-full object-cover object-top ransition duration-500 group-hover:scale-105"
                 :src="aiImg13" alt="woman" loading="lazy" width="640" height="805">
            <div class="absolute inset-0">
              <div class="h-full w-full">
                <div class="flex items-end h-full w-full p-5">
                  <div class="bg-white/10 backdrop-blur-md p-6 rounded w-full">
                    <h3 class="text-lg font-normal text-center text-default-200">An enchanting ice dragon born from the
                      algorithms of AI</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative rounded-lg overflow-hidden">
            <img class="mx-auto h-full w-full object-cover object-top ransition duration-500 group-hover:scale-105"
                 :src="aiImg8" alt="woman" loading="lazy" width="640" height="805">
            <div class="absolute inset-0">
              <div class="h-full w-full">
                <div class="flex items-end h-full w-full p-5">
                  <div class="bg-white/10 backdrop-blur-md p-6 rounded w-full">
                    <h3 class="text-lg font-normal text-center text-default-200">A marvel of mechanical artistry and AI
                      ingenuity</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="relative rounded-lg overflow-hidden" data-aos="fade-right" data-aos-easing="ease"
             data-aos-duration="1000">
          <img class="mx-auto h-full w-full object-cover object-top ransition duration-500 group-hover:scale-105"
               :src="aiImg11" alt="woman" loading="lazy" width="640" height="805">
          <div class="absolute inset-0">
            <div class="h-full w-full">
              <div class="flex items-end h-full w-full p-5">
                <div class="bg-white/10 backdrop-blur-md p-6 rounded w-full">
                  <h3 class="text-lg font-normal text-center text-default-200">In the heart of an enchanted forest, an
                    AI-born dragon stands as a guardian of the woods</h3>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="relative rounded-lg overflow-hidden" data-aos="fade-left" data-aos-easing="ease"
             data-aos-duration="1000">
          <img class="mx-auto h-full w-full object-cover object-top ransition duration-500 group-hover:scale-105"
               :src="aiImg12" alt="woman" loading="lazy" width="640" height="805">
          <div class="absolute inset-0">
            <div class="h-full w-full">
              <div class="flex items-end justify-end h-full w-full p-5">
                <a href="#"
                   class="py-2 px-3 flex items-center gap-6 rounded-full text-default-300 bg-white/10 backdrop-blur-md">Explore
                  more
                  <Send class="h-5 w-5 stroke-white"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import aiImg8 from "@/assets/images/ai/img-8.jpg"
import aiImg10 from "@/assets/images/ai/img-10.jpg"
import aiImg11 from "@/assets/images/ai/img-11.jpg"
import aiImg12 from "@/assets/images/ai/img-12.jpg"
import aiImg13 from "@/assets/images/ai/img-13.jpg"
import {Send} from "lucide-vue-next";
</script>
