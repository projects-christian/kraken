<template>
  <section id="home" class="relative overflow-hidden pt-[72px] pb-20">
    <div class="px-6 py-4">
      <div class="bg-default-950/40 rounded-2xl">
        <div class="container">
          <div class="p-6">
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center relative">
              <div
                  class="absolute h-14 w-14 bg-primary/10 top-0 start-0 -z-1 rounded-2xl rounded-tl-none rounded-br-none animate-[spin_10s_linear_infinite]"></div>
              <div class="absolute h-14 w-14 bg-primary/20 bottom-0 end-0 -z-1 rounded-full animate-ping"></div>

              <div class="" data-aos="fade-right" data-aos-easing="ease" data-aos-duration="1000">
                <span
                    class="py-1 px-3 rounded-md text-sm font-medium uppercase tracking-wider text-primary bg-primary/20">MEET YOUR CO-PILOT</span>
                <h1 class="md:text-5xl/tight text-4xl font-medium text-white max-w-lg my-4">Image generate with our ai
                  instantly.</h1>
                <p class="md:text-lg text-default-300">Get AI generated images from text straight from your <br> browser
                  very easily.</p>

                <a href="#"
                   class="group mt-10 inline-flex items-center justify-center gap-2 border border-white/10 text-white py-1 px-1 pe-4 rounded-full hover:bg-primary-hover transition-all duration-300">
                  <span
                      class="h-11 w-11 rounded-full bg-primary/20 group-hover:bg-white/10 text-primary group-hover:text-white flex items-center justify-center me-2">
                    <Image class="h-5 w-5"/>
                  </span>
                  Generate Images
                </a>
              </div>
              <div class="mx-auto h-[595px] overflow-hidden" data-aos="zoom-in" data-aos-easing="ease"
                   data-aos-duration="1000">
                <div class="marquee grid grid-cols-2 gap-6">
                  <div class="relative gap-6 m-auto flex flex-col overflow-hidden">
                    <div class="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full">
                      <img v-for="(img,idx) in images1" :key="idx" class="aspect-1 object-cover rounded-xl h-full w-60"
                           :src='img' alt=''/>
                    </div>

                    <div aria-hidden="true"
                         class="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full">
                      <img v-for="(img,idx) in images1" :key="idx" class="aspect-1 object-cover rounded-xl h-full w-60"
                           :src='img' alt=''/>
                    </div>
                  </div>

                  <div class="marquee-reverse gap-6 m-auto flex flex-col overflow-hidden">
                    <div class="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full">
                      <img v-for="(img,idx) in images2" :key="idx" class="aspect-1 object-cover rounded-xl h-full w-60"
                           :src='img' alt=''/>
                    </div>

                    <div aria-hidden="true"
                         class="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full">
                      <img v-for="(img,idx) in images2" class="aspect-1 object-cover rounded-xl h-full w-60" :src='img'
                           alt=''/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {Image} from "lucide-vue-next";
import aiImg6 from "@/assets/images/ai/img-6.jpg"
import aiImg9 from "@/assets/images/ai/img-9.jpg"
import aiImg10 from "@/assets/images/ai/img-10.jpg"
import aiImg11 from "@/assets/images/ai/img-11.jpg"
import aiImg12 from "@/assets/images/ai/img-12.jpg"
import aiImg13 from "@/assets/images/ai/img-13.jpg"
import aiImg14 from "@/assets/images/ai/img-14.jpg"
import aiImg21 from "@/assets/images/ai/img-21.jpg"
import aiImg22 from "@/assets/images/ai/img-22.jpg"

const images1 = [aiImg9, aiImg14, aiImg21, aiImg22, aiImg10]
const images2 = [aiImg6, aiImg10, aiImg11, aiImg12, aiImg13]
</script>