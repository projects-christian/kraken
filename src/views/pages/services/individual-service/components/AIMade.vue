<template>
    <section class="pb-24">
        <div class="container">
            <div class="flex flex-wrap items-center justify-between gap-5">
                <div>
                    <div class="max-w-2xl mx-auto">
                        <h2 class="text-3xl font-medium text-white mb-4">
                            {{ t("servicesAiMade.title") }}
                        </h2>
                        <p class="text-lg text-default-200">
                            {{ t("servicesAiMade.description") }}
                        </p>
                    </div>
                </div>
                <!-- <div>
                    <a
                        href="#"
                        class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-md bg-primary hover:bg-primary-hover transition-all duration-300"
                        >Generate AI Images</a
                    >
                </div> -->
            </div>
        </div>

        <div class="mt-14">
            <div
                class="relative gap-8 m-auto flex overflow-hidden"
                
            >
                <div
                    class="marquee__group gap-8 flex items-center justify-around flex-shrink-0 min-w-full"
                >
                    <img
                        v-for="(img, idx) in imagesShowcase1"
                        :key="idx"
                        class="aspect-1 object-cover rounded-xl h-60 w-full"
                        :src="img"
                        alt=""
                    />
                </div>

                <div
                    aria-hidden="true"
                    class="marquee__group gap-8 flex items-center justify-around flex-shrink-0 min-w-full"
                >
                    <img
                        v-for="(img, idx) in imagesShowcase1"
                        :key="idx"
                        class="aspect-1 object-cover rounded-xl h-60 w-full"
                        :src="img"
                        alt=""
                    />
                </div>
            </div>

            <div
                class="marquee--reverse gap-8 m-auto flex overflow-hidden mt-7"
                
            >
                <div
                    class="marquee__group gap-8 delay-[31s] flex items-center justify-around flex-shrink-0 min-w-full"
                >
                    <img
                        v-for="(img, idx) in imagesShowcase2"
                        :key="idx"
                        class="aspect-1 object-cover rounded-xl h-60 w-full"
                        :src="img"
                        alt=""
                    />
                </div>

                <div
                    aria-hidden="true"
                    class="marquee__group delay-[31s] gap-8 flex items-center justify-around flex-shrink-0 min-w-full"
                >
                    <img
                        v-for="(img, idx) in imagesShowcase2"
                        :key="idx"
                        class="aspect-1 object-cover rounded-xl h-60 w-full"
                        :src="img"
                        alt=""
                    />
                </div>
            </div>
        </div>

        <!-- <div class="flex items-center justify-center mt-12">
            <a
                href="#"
                class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300"
                >More Tools
                <MoveRight class="h-5 w-5" />
            </a>
        </div> -->
    </section>
</template>

<script setup lang="ts">
import { MoveRight } from "lucide-vue-next";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

defineProps<{
  imagesShowcase1: string[],
  imagesShowcase2: string[],
}>();
</script>

