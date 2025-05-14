<template>
  <NavBar :nav-links="navLinks"/>

  <Hero/>

  <Tools/>

  <Services/>

  <Features/>

  <Topics/>

  <Testimonials/>

  <Pricing/>

  <FAQs/>

  <CTA/>

  <Footer/>

  <Background1/>

  <BackToTop/>
</template>

<script setup lang="ts">
import type {NavBarLinkType} from "@/types/layout";
import NavBar from "@/components/NavBar.vue";
import Hero from "@/views/pages/index-4/components/Hero.vue";
import Tools from "@/views/pages/index-4/components/Tools.vue";
import Services from "@/views/pages/index-4/components/Services.vue";
import Features from "@/views/pages/index-4/components/Features.vue";
import Topics from "@/views/pages/index-4/components/Topics.vue";
import Testimonials from "@/views/pages/index-4/components/Testimonials.vue";
import Pricing from "@/views/pages/index-4/components/Pricing.vue";
import FAQs from "@/views/pages/index-4/components/FAQs.vue";
import CTA from "@/views/pages/index-4/components/CTA.vue";
import Footer from "@/views/pages/index-4/components/Footer.vue";
import BackToTop from "@/components/BackToTop.vue";
import Background1 from "@/components/Background1.vue";

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
    id: 'testimonials',
    label: 'Testimonials',
    route: {url: '#testimonials'}
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