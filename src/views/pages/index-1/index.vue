<template>

  <NavBar :nav-links="navLinks"/>

  <Hero/>

  <Categories/>

  <!-- <Sellers/> -->

  <Showcase/>

  <section class="pb-24" data-aos="zoom-out" data-aos-easing="ease" data-aos-duration="1000">
    <div class="container">
      <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-px rounded-xl overflow-hidden">
        <div
            class="group relative bg-slate-950/40 backdrop-blur-3xl transition-all duration-500 hover:bg-primary/40 overflow-hidden">
          <div class="p-6">
            <div class="relative h-24 w-24 overflow-hidden text-transparent">
              <Diamond class="h-24 w-24 fill-primary/10 group-hover:fill-white/20"/>
              <div
                  class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-primary rounded-xl group-hover:text-white duration-500 inline-flex justify-center items-center">
                <Wallet class="h-6 w-6"/>
              </div>
            </div>

            <div class="mt-6">
              <a href="" class="text-xl font-medium text-white duration-500">Set up your wallet</a>
              <p class="text-default-300 group-hover:text-white/80 duration-500 mt-3">Use Trust Wallet,
                Metamask or any wallet to connect to the app.</p>
              <p class="text-default-300 group-hover:text-white/80 duration-500 mt-2">You can upload any files
                from your computer or use Youtube links. Keep in mind that our content repurposing works
                best with longer videos.</p>
            </div>
          </div>
        </div>

        <div
            class="group relative bg-slate-950/40 backdrop-blur-3xl transition-all duration-500 hover:bg-primary/40 overflow-hidden">
          <div class="p-6">
            <div class="relative inline-block overflow-hidden text-transparent">
              <Diamond class="h-24 w-24 fill-primary/10 group-hover:fill-white/20"/>
              <div
                  class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-primary rounded-xl group-hover:text-white duration-500 inline-flex justify-center items-center">
                <Shapes class="h-6 w-6"/>
              </div>
            </div>

            <div class="mt-6">
              <a href="" class="text-xl font-medium text-white duration-500">Create your collection</a>
              <p class="text-default-300 group-hover:text-white/80 duration-500 mt-3">Upload your NFTs and set
                a title, description and price.</p>
              <p class="text-default-300 group-hover:text-white/80 duration-500 mt-2">You can upload any files
                from your computer or use Youtube links. Keep in mind that our content repurposing works
                best with longer videos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- <Browse/> -->

  <FAQs/>

  <!-- <Blogs/> -->

  <Footer/>

  <Background2/>

  <BackToTop/>

</template>

<script setup lang="ts">
import type {NavBarLinkType} from "@/types/layout";
import NavBar from "@/components/NavBar.vue";
import Hero from "@/views/pages/index-1/components/Hero.vue";
import Categories from "@/views/pages/index-1/components/Categories.vue";
import Sellers from "@/views/pages/index-1/components/Sellers.vue";
import Showcase from "@/views/pages/index-1/components/Showcase.vue";
import Browse from "@/views/pages/index-1/components/Browse.vue";
import FAQs from "@/views/pages/index-1/components/FAQs.vue";
import Blogs from "@/views/pages/index-1/components/Blogs.vue";
import Footer from "@/views/pages/index-1/components/Footer.vue";
import Background2 from "@/components/Background2.vue";
import BackToTop from "@/components/BackToTop.vue";

import {Diamond, Wallet, Shapes} from "lucide-vue-next";

const navLinks: NavBarLinkType[] = [
  {
    id: 'home',
    label: 'Inicio',
    route: {url: '#home'}
  },
  {
    id: 'categories',
    label: 'Categorias',
    route: {url: '#categories'}
  },
//   {
//     id: 'sellers',
//     label: 'Sellers',
//     route: {url: '#sellers'}
//   },
  {
    id: 'showcase',
    label: 'Exhibición',
    route: {url: '#showcase'}
  },
  {
    id: 'faq',
    label: 'Faq',
    route: {url: '#faq'}
  },
//   {
//     id: 'blog',
//     label: 'Blog',
//     route: {url: '#blog'}
//   }
]
</script>