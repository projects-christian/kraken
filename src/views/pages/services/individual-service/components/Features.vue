<template>
    <section id="features" class="pb-24">
        <div class="container">
            <div class="flex items-end justify-between mb-10">
                <div class="max-w-2xl mx-auto text-center">
                    <h2 class="text-3xl font-medium capitalize text-white mb-4">
                        {{ t("servicesFeatures.title") }}
                    </h2>
                </div>
            </div>

            <div class="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
                <template v-for="(item, idx) in features" :key="idx">
                    <FeatureCard :item="item" />
                </template>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import FeatureCard from "@/views/pages/services/individual-service/components/FeatureCard.vue";
import { generateFeatures } from "@/data/data";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const features = ref(generateFeatures(t));

// Vuelve a generar cuando cambia el idioma
watch(locale, () => {
  features.value = generateFeatures(t);
});
</script>
