<template>
    <section id="home" class="relative overflow-hidden pt-[72px] pb-20">
        <div class="px-6 py-4">
            <div class="bg-default-950/40 rounded-2xl">
                <div class="container">
                    <div class="p-6">
                        <div
                            class="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-center relative"
                        >
                            <div
                                class="absolute h-14 w-14 bg-primary/10 top-0 start-0 -z-1 rounded-2xl rounded-tl-none rounded-br-none animate-[spin_10s_linear_infinite]"
                            ></div>
                            <div
                                class="absolute h-14 w-14 bg-primary/20 bottom-0 end-0 -z-1 rounded-full animate-ping"
                            ></div>

                            <div
                                class=""
                                data-aos="fade-right"
                                data-aos-easing="ease"
                                data-aos-duration="1000"
                            >
                                <span
                                    class="py-1 px-3 rounded-md text-sm font-medium uppercase tracking-wider text-primary bg-primary/20"
                                    >Hecho por expertos</span
                                >
                                <h1
                                    class="md:text-5xl/tight text-4xl font-medium text-white max-w-lg my-4"
                                >
                                    {{ title }}
                                </h1>
                                <p class="md:text-lg text-default-300" v-html="description"></p>

                                <!-- <a
                                    href="#"
                                    class="group mt-10 inline-flex items-center justify-center gap-2 border border-white/10 text-white py-1 px-1 pe-4 rounded-full hover:bg-primary-hover transition-all duration-300"
                                >
                                    <span
                                        class="h-11 w-11 rounded-full bg-primary/20 group-hover:bg-white/10 text-primary group-hover:text-white flex items-center justify-center me-2"
                                    >
                                        <Image class="h-5 w-5" />
                                    </span>
                                    Generate Images
                                </a> -->
                            </div>
                            <div
                                class="relative rounded-lg overflow-hidden"
                                data-aos="fade-right"
                                data-aos-easing="ease"
                                data-aos-duration="1000"
                            >
                                <img
                                    class="mx-auto h-full w-full object-cover object-top ransition duration-500 group-hover:scale-105"
                                    :src="image"
                                    :alt="title"
                                    loading="lazy"
                                    width="640"
                                    height="805"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

defineProps({
    title: String,
    image: String,
    description: String,
});
</script>
