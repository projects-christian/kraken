<template>
  <section class="py-20" data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="1000">
    <div class="container">
      <div class="border rounded-2xl border-white/10 bg-slate-950/40">
        <div class="p-6">
          <div>
            <nav class="flex flex-wrap 2xl:flex-nowrap items-center gap-6 justify-evenly rounded-md space-x-3 p-2"
                 aria-label="Tabs" role="tablist">
              <button type="button"
                      class="hs-tab-active:-semibold hs-tab-active:bg-primary py-5 px-10 rounded-lg items-center gap-2 border border-white/10 -mb-px transition-all text-lg font-medium space-nowrap text-white"
                      id="tabs-with-underline-item-4" data-hs-tab="#tabs-with-underline-4"
                      aria-controls="tabs-with-underline-4" role="tab">
                AI Generator
              </button>
              <button type="button"
                      class="hs-tab-active:-semibold hs-tab-active:bg-primary py-5 px-10 rounded-lg items-center gap-2 border border-white/10 -mb-px transition-all text-lg font-medium space-nowrap text-white"
                      id="tabs-with-underline-item-5" data-hs-tab="#tabs-with-underline-5"
                      aria-controls="tabs-with-underline-5" role="tab">
                AI Image Generator
              </button>
              <button type="button"
                      class="hs-tab-active:-semibold hs-tab-active:bg-primary py-5 px-10 rounded-lg items-center gap-2 border border-white/10 -mb-px transition-all text-lg font-medium space-nowrap text-white active"
                      id="tabs-with-underline-item-6" data-hs-tab="#tabs-with-underline-6"
                      aria-controls="tabs-with-underline-6" role="tab">
                AI Code Generator
              </button>
              <button type="button"
                      class="hs-tab-active:-semibold hs-tab-active:bg-primary py-5 px-10 rounded-lg items-center gap-2 border border-white/10 -mb-px transition-all text-lg font-medium space-nowrap text-white"
                      id="tabs-with-underline-item-7" data-hs-tab="#tabs-with-underline-7"
                      aria-controls="tabs-with-underline-7" role="tab">
                AI Chat Bot
              </button>
            </nav>

            <div class="mt-10 overflow-hidden">
              <div id="tabs-with-underline-4" class=" transition-all duration-300 transform hidden" role="tabpanel"
                   aria-labelledby="tabs-with-underline-item-1">
                <div class="grid xl:grid-cols-2 gap-6">
                  <div class="p-6 rounded-xl border border-white/10">
                    <h2 class="text-3xl font-medium text-white">Transcribe Your speech into text.</h2>
                    <p class="text-base font-medium text-default-200 mt-5">Aenean leo ligula, porttitor eu, consequat
                      vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                      Phasellus viverra nulla ut metus varius laoreet.</p>
                  </div>
                  <div class="p-6 rounded-xl border border-white/10">
                    <img :src="aiImg1" class="rounded-md" alt="">
                  </div>
                </div>
              </div>

              <div id="tabs-with-underline-5" class="transition-all duration-300 transform  hidden" role="tabpanel"
                   aria-labelledby="tabs-with-underline-item-2">
                <div class="grid xl:grid-cols-2 gap-6">
                  <div class="p-6 rounded-xl border border-white/10">
                    <h2 class="text-3xl font-medium text-white">Create eye-catching images and graphics.</h2>
                    <p class="text-base font-medium text-default-200 mt-5">Aenean imperdiet. Etiam ultricies nisi vel
                      augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
                      eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                      quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
                      tempus.</p>
                    <p class="text-base font-medium text-default-200 mt-4">Donec vitae sapien ut libero venenatis
                      faucibus. Nullam quis ante.</p>
                  </div>
                  <div class="p-6 rounded-xl border border-white/10">
                    <div>
                      <h2 class="text-lg font-medium text-white mb-8">Advanced options+</h2>
                      <div class="grid grid-cols-3 gap-6">
                        <img :src="aiImg6" class="rounded-md" alt="">
                        <img :src="aiImg9" class="rounded-md" alt="">
                        <img :src="aiImg22" class="rounded-md" alt="">
                        <img :src="aiImg14" class="rounded-md" alt="">
                        <img :src="aiImg21" class="rounded-md" alt="">
                        <img :src="aiImg10" class="rounded-md" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="tabs-with-underline-6" class="transition-all duration-300 transform  active" role="tabpanel"
                   aria-labelledby="tabs-with-underline-item-3">
                <div class="grid xl:grid-cols-2 gap-6">
                  <div class="p-6 rounded-xl border border-white/10">
                    <h2 class="text-3xl font-medium text-white">Generate high quality code in no time.</h2>
                    <p class="text-base font-medium text-default-200 mt-5">Aenean imperdiet. Etiam ultricies nisi vel
                      augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
                      eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                      quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
                      tempus.</p>
                  </div>

                  <div class="p-6 rounded-xl border border-white/10">
                    <div class="bg-default-900/50 p-3 rounded-lg">
                      <h2 class="text-lg font-medium text-white">Script.js</h2>
                      <p class="text-base font-medium text-default-200 py-5">"date pulbilshed": <span
                          class="text-primary">"2015-02-05Tob.00-00+08.00",</span></p>
                      <P class="text-base font-medium text-default-200">"author":{ <br>
                        <span class="ps-7">"private": <span class="text-primary">true ;</span> <br></span>
                        <span class="ps-7">"author": <span class="text-primary">coderthemes ;</span> <br></span>
                        }
                      </P>

                      <P class="text-base font-medium text-default-200 pt-5">"publlsher":{ <br>
                        <span class="ps-7">"@type": <span class="text-primary">text ;</span> <br></span>
                        <span class="ps-7">"@name": <span class="text-primary">tailwind ;</span> <br></span>
                        }
                      </P>

                      <button class="text-base font-medium w-full py-2 mt-8 rounded-md text-white bg-slate-600/50">
                        Generate
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div id="tabs-with-underline-7" class="transition-all duration-300 transform  hidden" role="tabpanel"
                   aria-labelledby="tabs-with-underline-item-2">
                <div class="grid xl:grid-cols-2 gap-6">
                  <div class="p-6 rounded-xl border border-white/10">
                    <h2 class="text-3xl font-medium text-white">Meet your next virtual assistant.</h2>
                    <p class="text-base font-medium text-default-200 mt-5">Aenean commodo ligula eget dolor. Aenean
                      massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                      quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                      enim.</p>
                  </div>
                  <div class="p-6 rounded-xl border border-white/10">
                    <img :src="aiImg2" class="rounded-md mx-auto" alt="">
                  </div>
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
import aiImg1 from "@/assets/images/ai/img-1.jpg"
import aiImg2 from "@/assets/images/ai/img-2.jpg"
import aiImg6 from "@/assets/images/ai/img-6.jpg"
import aiImg9 from "@/assets/images/ai/img-9.jpg"
import aiImg10 from "@/assets/images/ai/img-10.jpg"
import aiImg14 from "@/assets/images/ai/img-14.jpg"
import aiImg21 from "@/assets/images/ai/img-21.jpg"
import aiImg22 from "@/assets/images/ai/img-22.jpg"
</script>