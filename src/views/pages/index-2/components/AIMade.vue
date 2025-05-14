<template>
  <section id="ai_made" class="pb-24">
    <div class="container">
      <div class="grid md:grid-cols-2 gap-6 items-center">
        <div class="relative" data-aos="fade-right" data-aos-easing="ease" data-aos-duration="1000">
          <img :src="aiImg7" class="rounded-xl" alt="">
          <div class="absolute inset-0 bg-default-950/50 rounded-xl"></div>
          <div class="hidden lg:block">
            <div class="absolute top-10 -end-52">
              <div class="inline-block">
                <div class="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg">
                  <div class="max-w-sm text-center p-6">
                    <p class="text-base font-medium text-default-300">The image is original and not copied or borroweb
                      from someone else's work</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute top-auto bottom-20 -start-20">
              <div class="inline-block">
                <div class="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg">
                  <div class="py-4 px-6 ">
                    <h5>Detailed Work</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-easing="ease" data-aos-duration="1000">
          <div class="max-w-md text-end ms-auto">
            <span class="py-1 px-3 rounded-md text-sm font-medium uppercase tracking-wider text-primary bg-primary/10">Unique Images</span>
            <h2 class="text-3xl font-medium capitalize text-default-200 mt-4">Unique Images means no copyright
              issues</h2>
            <p class="text-base font-medium text-default-300 mt-5 mb-8">The image is original and not copied or borrowed
              from someone else's work, which ensures that there are no legal restrictions on its use or
              distribution.</p>
            <a href="#"
               class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full bg-primary hover:bg-primary-hover transition-all duration-300">Read
              More
              <MoveRight class="h-5 w-5"/>
            </a>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6 items-center mt-12">
        <div data-aos="fade-right" data-aos-easing="ease" data-aos-duration="1000">
          <div class="max-w-md p-3">
            <span class="py-1 px-3 rounded-md text-sm font-medium uppercase tracking-wider text-primary bg-primary/10">custom Images</span>
            <h2 class="text-3xl font-medium capitalize text-default-200 mt-4">Create images your custom AI mode</h2>
            <p class="text-base font-medium text-default-300 mt-5 mb-8">Every element in this image, from the smallest
              brushstroke to the grandest panorama, is a product of AI's creative prowess.</p>
            <a href="#"
               class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full bg-primary hover:bg-primary-hover transition-all duration-300">Read
              More
              <MoveRight class="h-5 w-5"/>
            </a>
          </div>
        </div>

        <div class="relative" data-aos="fade-left" data-aos-easing="ease" data-aos-duration="1000">
          <img :src="aiImg8" class="rounded-xl" alt="">
          <div class="absolute inset-0 bg-default-950/50 rounded-xl"></div>
          <div class="hidden lg:block">
            <div class="absolute top-10 -start-52">
              <div class="inline-block">
                <div class="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg">
                  <div class="max-w-sm text-center p-6">
                    <p class="text-base font-medium text-default-300">The image is original and not copied or borrowed
                      from someone else's work</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute top-auto bottom-20 -end-20">
              <div class="inline-block">
                <div class="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg">
                  <div class="py-4 px-6 ">
                    <h5>High Quality</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="pb-24">
    <div class="container">
      <div class="flex flex-wrap items-center justify-between gap-5">
        <div>
          <div class="max-w-2xl mx-auto">
            <h2 class="text-3xl font-medium text-white mb-4">Our AI-made Images</h2>
            <p class="text-sm text-default-200 font-medium">I am blown away by the AI-generated artwork. Each piece is a
              masterpiece in its own right, and I love how it combines the creativity of human artists with the
              innovation of AI.</p>
          </div>
        </div>
        <div>
          <a href="#"
             class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-md bg-primary hover:bg-primary-hover transition-all duration-300">Generate
            AI Images</a>
        </div>
      </div>
    </div>

    <div class="mt-14">
      <div class="relative gap-8 m-auto flex overflow-hidden" data-aos="fade-up" data-aos-easing="ease"
           data-aos-duration="1000">
        <div class="marquee__group gap-8 flex items-center justify-around flex-shrink-0 min-w-full">
          <img v-for="(img,idx) in images1" :key="idx" class="aspect-1 object-cover rounded-xl h-60 w-full" :src='img' alt=''>
        </div>

        <div aria-hidden="true" class="marquee__group gap-8 flex items-center justify-around flex-shrink-0 min-w-full">
          <img v-for="(img,idx) in images1" :key="idx" class="aspect-1 object-cover rounded-xl h-60 w-full" :src='img' alt=''>
        </div>
      </div>

      <div class="marquee--reverse gap-8 m-auto flex overflow-hidden mt-7" data-aos="fade-up" data-aos-easing="ease"
           data-aos-duration="1000">
        <div class="marquee__group gap-8 delay-[31s] flex items-center justify-around flex-shrink-0 min-w-full">
          <img v-for="(img,idx) in images2" :key="idx" class="aspect-1 object-cover rounded-xl h-60 w-full" :src='img' alt=''>
        </div>

        <div aria-hidden="true"
             class="marquee__group delay-[31s] gap-8 flex items-center justify-around flex-shrink-0 min-w-full">
          <img v-for="(img,idx) in images2" :key="idx" class="aspect-1 object-cover rounded-xl h-60 w-full" :src='img' alt=''>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center mt-12">
      <a href="#"
         class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300">More
        Tools
        <MoveRight class="h-5 w-5"/>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import {MoveRight} from "lucide-vue-next";
import aiImg6 from "@/assets/images/ai/img-6.jpg"
import aiImg7 from "@/assets/images/ai/img-7.jpg"
import aiImg8 from "@/assets/images/ai/img-8.jpg"
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