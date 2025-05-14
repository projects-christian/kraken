<template>
  <section id="home" class="relative overflow-hidden pt-[72px] pb-14" data-aos="zoom-out" data-aos-easing="ease"
           data-aos-duration="1000">
    <div class="px-10">
      <div class="rounded-2xl overflow-hidden bg-no-repeat bg-cover" :style="{backgroundImage:`url(${aiImg3})`}">
        <div class="bg-default-950/70 rounded-2xl">
          <div class="container">
            <div class="p-6 relative">
              <div class="absolute top-20 start-80 -z-1 animate-[spin_10s_linear_infinite]">
                <img :src="star" alt="">
              </div>
              <div class="absolute tot-auto  bottom-40 end-60 -z-1 animate-[spin_10s_linear_infinite]">
                <img :src="star" alt="">
              </div>
              <div class="absolute tot-auto  bottom-96 end-36 -z-1 animate-[spin_10s_linear_infinite]">
                <img :src="star" alt="">
              </div>

              <div class="flex h-full items-center justify-center py-36">
                <div class="text-center max-w-3xl mx-auto relative">
                  <span
                      class="py-1 px-3 rounded-md text-sm font-medium uppercase tracking-wider text-white/80 bg-white/10">AI knowledge hub</span>
                  <h1 class="md:text-5xl/snug text-3xl font-semibold text-white mt-10">AI-Powered Solution For Effective
                    Business.</h1>
                  <p class="w-3/4 mx-auto text-base font-normal text-default-200 mt-5">Lorem lpsum Dolor sit Amet,
                    Consectetur Adipiscing Elit, sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
                    Enim Ad Minim, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip</p>

                  <div class="flex flex-wrap items-center justify-center gap-6 mt-10">
                    <a href="#"
                       class="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300">Discover
                      More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="pb-20" data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="1000">
    <div>
      <div class="relative gap-8 m-auto flex overflow-hidden">
        <div class="marquee__group gap-8 flex items-center justify-around flex-shrink-0 min-w-full">
          <div v-for="(item,idx) in features1" :key="idx" class="py-3">
            <h2 class="text-5xl font-medium text-white">{{ item }}</h2>
          </div>
        </div>

        <div aria-hidden="true" class="marquee__group gap-8 flex items-center justify-around flex-shrink-0 min-w-full">
          <div v-for="(item,idx) in features1" :key="idx" class="py-3">
            <h2 class="text-5xl font-medium text-white">{{ item }}</h2>
          </div>
        </div>
      </div>

      <div class="marquee--reverse gap-8 m-auto flex overflow-hidden mt-7">
        <div class="marquee__group gap-8 delay-[31s] flex items-center justify-around flex-shrink-0 min-w-full">
          <div v-for="(item,idx) in features2" :key="idx" class="py-3">
            <h2 class="text-5xl font-medium text-white">{{ item }}</h2>
          </div>
        </div>

        <div aria-hidden="true"
             class="marquee__group delay-[31s] gap-8 flex items-center justify-around flex-shrink-0 min-w-full">
          <div v-for="(item,idx) in features2" :key="idx" class="py-3">
            <h2 class="text-5xl font-medium text-white">{{ item }}</h2>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
import aiImg3 from "@/assets/images/ai/img-3.jpg"
import star from "@/assets/images/ai/star.svg"

const features1: string[] = ['Automatic learning', 'Describe your idea', 'Select Templates', 'Optimization']
const features2: string[] = ['Innovation', 'Generate Copy', 'Advanced analytics', 'Algorithm', 'Text Editor']
</script>