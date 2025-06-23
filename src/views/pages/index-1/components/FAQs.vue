<template>
    <section id="faq" class="pb-24">
        <div class="container">
            <div class="flex flex-wrap items-center justify-between mb-10">
                <div>
                    <h2 class="text-4xl font-medium capitalize text-white mb-2">
                        {{ t("homeFaqs.title") }}
                    </h2>
                    <p class="text-sm text-default-200 font-medium">
                        {{ t("homeFaqs.description") }}
                    </p>
                </div>
            </div>

            <div class="grid lg:grid-cols-2 gap-6">
                <div
                    v-for="(items, index) in chunkArray(faqs, 2)"
                    :key="index"
                    class="hs-accordion-group space-y-4"
                    data-aos="fade-right"
                    data-aos-easing="ease"
                    data-aos-duration="1000"
                >
                    <div
                        v-for="(item, idx) in items"
                        :key="idx"
                        class="hs-accordion border border-white/10 bg-default-950/40 backdrop-blur-3xl rounded-lg overflow-hidden"
                        :id="`faq-${index + 1}-${idx + 1}`"
                    >
                        <button
                            class="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-white transition-all"
                            :aria-controls="`faq-${index + 1}-${idx + 1}`"
                        >
                            <h4 class="text-base font-semibold flex">
                                <HelpCircle class="h-5 w-5 stroke-white me-3" />
                                {{ item.question }}
                            </h4>
                            <ChevronUp
                                class="h-4 w-4 transition-all duration-500 hs-accordion-active:-rotate-180"
                            />
                        </button>
                        <div
                            :id="`faq-${index + 1}-${idx + 1}`"
                            class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                            :aria-labelledby="`faq-${index + 1}-${idx + 1}`"
                        >
                            <div class="px-6 pb-4 pt-0">
                                <p class="text-default-300 text-sm font-medium">
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
import { ref, watch } from "vue";
import { ChevronUp, HelpCircle } from "lucide-vue-next";
import { chunkArray } from "@/helpers/array";
import { generateFaqs } from "@/data/data";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const faqs = ref(generateFaqs(t));

// Vuelve a generar cuando cambia el idioma
watch(locale, () => {
  faqs.value = generateFaqs(t);
});
</script>
