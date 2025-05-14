<template>
  <NavBar :nav-links="navLinks"/>

  <Hero/>

  <Tools/>

  <Generator/>

  <Features/>

  <Pricing/>

  <FAQs/>

  <Footer/>

  <Background1/>

  <BackToTop/>
</template>

<script setup lang="ts">
import type {NavBarLinkType} from "@/types/layout";
import NavBar from "@/components/NavBar.vue";
import Hero from "@/views/pages/index-5/components/Hero.vue";
import Tools from "@/views/pages/index-5/components/Tools.vue";
import Generator from "@/views/pages/index-5/components/Generator.vue";
import Features from "@/views/pages/index-5/components/Features.vue";
import Pricing from "@/views/pages/index-5/components/Pricing.vue";
import FAQs from "@/views/pages/index-5/components/FAQs.vue";
import Footer from "@/views/pages/index-5/components/Footer.vue";
import Background1 from "@/components/Background1.vue";
import BackToTop from "@/components/BackToTop.vue";

const navLinks: NavBarLinkType[] = [
  {
    id: 'home',
    label: 'Home',
    route: {url: '#home'}
  },
  {
    id: 'tools',
    label: 'Tools',
    route: {url: '#tools'}
  },
  {
    id: 'features',
    label: 'Features',
    route: {url: '#features'}
  },
  {
    id: 'price',
    label: 'Price',
    route: {url: '#price'}
  },
  {
    id: 'faq',
    label: 'Faq',
    route: {url: '#faq'}
  }
]
</script>