<template>
    <section
        class="pb-20"
        id="events"
        data-aos="zoom-in"
        data-aos-easing="ease"
        data-aos-duration="1000"
    >
        <div>
            <div class="relative gap-8 m-auto flex overflow-hidden">
                <div
                    class="marquee__group gap-16 flex items-center justify-around flex-shrink-0 min-w-full"
                >
                    <div
                        v-for="(item, idx) in features1"
                        :key="idx"
                        class="py-3"
                    >
                        <h3 class="text-5xl font-medium text-white">
                            {{ item }}
                        </h3>
                    </div>
                </div>

                <div
                    aria-hidden="true"
                    class="marquee__group gap-8 flex items-center justify-around flex-shrink-0 min-w-full"
                >
                    <div
                        v-for="(item, idx) in features1"
                        :key="idx"
                        class="py-3"
                    >
                        <h3 class="text-5xl font-medium text-white">
                            {{ item }}
                        </h3>
                    </div>
                </div>
            </div>

            <div
                class="marquee--reverse gap-8 m-auto flex overflow-hidden mt-7"
            >
                <div
                    class="marquee__group gap-16 delay-[31s] flex items-center justify-around flex-shrink-0 min-w-full"
                >
                    <div
                        v-for="(item, idx) in features2"
                        :key="idx"
                        class="py-3"
                    >
                        <h3 class="text-5xl font-medium text-white">
                            {{ item }}
                        </h3>
                    </div>
                </div>

                <div
                    aria-hidden="true"
                    class="marquee__group delay-[31s] gap-8 flex items-center justify-around flex-shrink-0 min-w-full"
                >
                    <div
                        v-for="(item, idx) in features2"
                        :key="idx"
                        class="py-3"
                    >
                        <h3 class="text-5xl font-medium text-white">
                            {{ item }}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from "vue-i18n";
const { t,  } = useI18n();

const features1 = computed(() => [
    t('homeEvents.nameOne'),
    t('homeEvents.nameTwo'),
    t('homeEvents.nameThree'),
    t('homeEvents.nameFour'),
    t('homeEvents.nameFive'),
    t('homeEvents.nameSix'),
    t('homeEvents.nameSeven')
])
const features2 = computed(() => [
    t('homeEvents.nameEight'),
    t('homeEvents.nameNine'),
    t('homeEvents.nameTen'),
    t('homeEvents.nameEleven'),
    t('homeEvents.nameTwelve'),
    t('homeEvents.nameThirteen')
]);
</script>
