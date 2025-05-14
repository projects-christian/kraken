<template>
  <section id="home" class="relative overflow-hidden pt-40 pb-20" data-aos="zoom-out" data-aos-easing="ease"
           data-aos-duration="1000">
    <div
        class="absolute h-14 w-14 bg-primary/10 top-1/2 start-80 -z-1 rounded-2xl rounded-tl-none rounded-br-none animate-[spin_10s_linear_infinite]"></div>
    <div class="absolute h-14 w-14 bg-primary/20 top-1/2 end-80 -z-1 rounded-full animate-ping"></div>
    <div class="container">
      <div class="text-center">
        <div class="flex justify-center mt-6">
          <div class="max-w-2xl">
            <h1 class="text-5xl/tight text-default-100 font-medium mb-6">Unleash the potential of ai for your
              business</h1>
            <p class="text-base text-default-300 font-medium lg:max-w-md mx-auto">Et harum quidem rerum facilis est et
              expedita distinctio nam libero tempore est nihil.</p>
          </div>
        </div>

        <div>
          <a href="https://www.youtube.com/embed/5wOhrU2V-SI?si=vCWHEfjx8d-ZgKVp"
             class="glightbox w-44 relative flex items-center justify-center gap-2.5 rounded-full text-base font-medium py-3.5 px-6 mt-10 mx-auto bg-primary/40 text-white transition-all duration-300 ring-4 ring-primary/25 hover:bg-primary">
            <Play class="h-6 w-6"/>
            Watch Video
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {Play} from "lucide-vue-next";
import {onMounted} from "vue";
import GLightbox from "glightbox"

onMounted(() => {
  GLightbox({selector: ".glightbox"});
})
</script>