<template>
  <section class="py-20" data-aos="zoom-out" data-aos-easing="ease" data-aos-duration="1000">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-medium capitalize text-white mb-4">Choose Social Media Post Generator</h2>
          <p class="text-sm text-default-200 font-medium">Start working with Tailwindcss It allows you to compose
            complex designs <br> by combining and customizing utility classes..</p>
        </div>
      </div>

      <div class="flex items-center flex-wrap rounded-3xl bg-default-950/40 backdrop-blur-3xl">
        <div class="md:w-1/2 w-auto grow md:border-e border-b border-white/10">
          <div class="sm:p-10 p-8">
            <div class="inline-flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-xl mb-10">
              <Framer class="h-10 w-10"/>
            </div>
            <h2 class="text-2xl text-white font-medium mb-4">Customize Your post</h2>
            <p class="text-base text-default-200 mb-6">Customizing your post refers to the process of tailoring your
              content to suit your specific goals, audience, and platform.</p>
            <a href="#"
               class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300">More
              Tools
              <MoveRight class="h-5 w-5"/>
            </a>
          </div>
        </div>

        <div class="md:w-1/2 w-auto grow border-b border-white/10">
          <div class="sm:p-10 p-8">
            <div class="inline-flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-xl mb-10">
              <Codesandbox class="h-10 w-10"/>
            </div>
            <h2 class="text-2xl text-white font-medium mb-4">Instant Content Creation</h2>
            <p class="text-base text-default-200 mb-6">Instant content creation refers to the process of generating
              high-quality written, visual, or multimedia content quickly and efficiently.</p>
            <a href="#"
               class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300">More
              Tools
              <MoveRight class="h-5 w-5"/>
            </a>
          </div>
        </div>

        <div class="md:w-1/2 w-auto grow border-b md:border-b-0 md:border-e border-white/10">
          <div class="sm:p-10 p-8">
            <div class="inline-flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-xl mb-10">
              <LifeBuoy class="h-10 w-10"/>
            </div>
            <h2 class="text-2xl text-white font-medium mb-4">AI-Powered Content Suggestions</h2>
            <p class="text-base text-default-200 mb-6">AI-powered content suggestions leverage artificial intelligence
              and machine learning algorithms to help content creators generate ideas.</p>
            <a href="#"
               class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300">More
              Tools
              <MoveRight class="h-5 w-5"/>
            </a>
          </div>
        </div>

        <div class="md:w-1/2 w-auto grow border-white/10">
          <div class="sm:p-10 p-8">
            <div class="inline-flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-xl mb-10">
              <Package class="h-10 w-10"></Package>
            </div>
            <h2 class="text-2xl text-white font-medium mb-4">Dedicated Customer Support</h2>
            <p class="text-base text-default-200 mb-6">Dedicated customer support is a service provided by organizations
              to assist and address the needs, concerns, and inquiries of their customers.</p>
            <a href="#"
               class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300">More
              Tools
              <MoveRight class="h-5 w-5"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {MoveRight, Framer, Codesandbox, LifeBuoy, Package} from "lucide-vue-next";
</script>