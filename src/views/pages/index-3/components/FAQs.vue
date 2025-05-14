<template>
  <section id="faq" class="py-14">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-medium capitalize text-white mb-4">Any questions</h2>
          <p class="text-sm text-default-200 font-medium">Start working with Tailwindcss It allows you to compose
            complex designs <br> by combining and customizing utility classes..</p>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-6">
        <div v-for="(items,index) in chunkArray(faqs,2)" :key="index" class="hs-accordion-group space-y-4"
             data-aos="fade-right" data-aos-easing="ease" data-aos-duration="1000">

          <div v-for="(item,idx) in items" :key="idx"
               class="hs-accordion border border-white/10 bg-default-950/40 backdrop-blur-3xl rounded-lg overflow-hidden"
               :id="`faq-${index+1}-${idx+1}`">
            <button
                class="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-white transition-all"
                :aria-controls="`faq-${index+1}-${idx+1}`">
              <h5 class="text-base font-semibold flex">
                <HelpCircle class="h-5 w-5 stroke-white me-3"/>
                {{ item.question }}
              </h5>
              <ChevronUp class="h-4 w-4 transition-all duration-500 hs-accordion-active:-rotate-180"/>
            </button>
            <div :id="`faq-${index+1}-${idx+1}`"
                 class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                 :aria-labelledby="`faq-${index+1}-${idx+1}`">
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
  </section>
</template>

<script setup lang="ts">
import {ChevronUp, HelpCircle} from "lucide-vue-next";
import {faqs} from "@/views/pages/index-3/components/data";
import {chunkArray} from "@/helpers/array";
</script>