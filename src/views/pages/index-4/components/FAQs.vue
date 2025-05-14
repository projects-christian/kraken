<template>
  <section id="faq" class="py-20">
    <div class="container">
      <div class="grid xl:grid-cols-2 gap-6">
        <div class="xl:text-start text-center" data-aos="fade-right" data-aos-easing="ease" data-aos-duration="1000">
          <h2 class="text-3xl font-medium capitalize text-white mb-4">Frequently asked questions</h2>
          <p class="text-sm text-default-200 font-medium">Start working with Tailwindcss It allows you to compose
            complex designs <br> by combining and customizing utility classes..</p>
          <a href="#"
             class="mt-10 inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300">See
            More
            <MoveRight class="h-5 w-5"/>
          </a>
        </div>

        <div data-aos="fade-left" data-aos-easing="ease" data-aos-duration="1000">
          <div class="hs-accordion-group space-y-4">

            <div v-for="(item,idx) in faqs" :key="idx"
                 class="hs-accordion border border-white/10 bg-default-950/40 backdrop-blur-3xl rounded-lg overflow-hidden"
                 :class="{'active':idx===0}"
                 :id="`faq-${idx+1}`">
              <button
                  class="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-white transition-all"
                  :aria-controls="`faq-${idx+1}`">
                <h5 class="text-base font-semibold flex">
                  <HelpCircle class="h-5 w-5 stroke-white align-middle me-3"/>
                  {{ item.question }}
                </h5>
                <ChevronUp class="h-4 w-4 transition-all duration-500 hs-accordion-active:-rotate-180"/>
              </button>
              <div :id="`faq-${idx+1}`"
                   class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                   :class="{'hidden':idx!=0}"
                   :aria-labelledby="`faq-${idx+1}`">
                <div class="px-6 pb-4 pt-0">
                  <p class="text-default-300 text-sm font-medium mb-2">
                    {{ item.answer }}
                  </p>
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
import {faqs} from "@/views/pages/index-4/components/data";
import {ChevronUp, HelpCircle, MoveRight} from "lucide-vue-next";
</script>