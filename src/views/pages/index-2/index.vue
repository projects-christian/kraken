<template>
  <NavBar :nav-links="navLinks"/>

  <Hero/>

  <Examples/>

  <Features/>

  <AIMade/>

  <Testimonials/>

  <section class="pb-24">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-medium capitalize text-white mb-4">Supercharge your content generation process.</h2>
          <p class="w-2/3 mx-auto text-base text-default-200 font-medium">Join us today and experience the power of
            AI-powered text creation for yourself!</p>

          <div class="mt-8">
            <a href="#"
               class="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300">Get
              start free
              <MoveRight class="h-5 w-5"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer/>

  <Background1/>

  <BackToTop/>
</template>

<script setup lang="ts">
import type {NavBarLinkType} from "@/types/layout";
import NavBar from "@/components/NavBar.vue";
import Hero from "@/views/pages/index-2/components/Hero.vue";
import Examples from "@/views/pages/index-2/components/Examples.vue";
import Features from "@/views/pages/index-2/components/Features.vue";
import AIMade from "@/views/pages/index-2/components/AIMade.vue";
import Testimonials from "@/views/pages/index-2/components/Testimonials.vue";
import Footer from "@/views/pages/index-2/components/Footer.vue";
import Background1 from "@/components/Background1.vue";
import BackToTop from "@/components/BackToTop.vue";

import {MoveRight} from "lucide-vue-next";

const navLinks: NavBarLinkType[] = [
  {
    id: 'home',
    label: 'Home',
    route: {url: '#home'}
  },
  {
    id: 'features',
    label: 'Features',
    route: {url: '#features'}
  },
  {
    id: 'ai_made',
    label: 'AI Made',
    route: {url: '#ai_made'}
  },
  {
    id: 'testimonials',
    label: 'Testimonials',
    route: {url: '#testimonials'}
  }
]
</script>