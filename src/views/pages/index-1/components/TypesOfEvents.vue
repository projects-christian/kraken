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
const features1: string[] = [
    "Carnavales",
    "Procesiones religiosas",
    "Desfiles temáticos",
    "Fiestas patronales",
    "Ferias y exposiciones",
    "Eventos empresariales",
    "Escenografías para cine o televisión",
];
const features2: string[] = [
    "Festivales culturales",
    "Stands para ferias comerciales",
    "Peñas y encuentros folclóricos",
    "Fiestas temáticas privadas",
    "Eventos municipales o gubernamentales",
    "Presentaciones teatrales",
];
</script>
