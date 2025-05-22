<template>
    <NavBar :nav-links="navLinks" />

    <Hero />

    <Categories />

    <TypesOfEvents />

    <!-- <Sellers /> -->

    <Showcase />

    <!-- <Browse /> -->

    <FAQs />

    <!-- <Blogs/> -->

    <section
        class="pb-24"
        id="contacto"
        data-aos="zoom-out"
        data-aos-easing="ease"
        data-aos-duration="1000"
    >
        <div class="container">
            <div
                class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-px rounded-xl overflow-hidden"
            >
                <div
                    class="group relative bg-slate-950/40 backdrop-blur-3xl transition-all duration-500 hover:bg-primary/40 overflow-hidden"
                >
                    <div class="p-6">
                        <div
                            class="relative h-24 w-24 overflow-hidden text-transparent"
                        >
                            <Diamond
                                class="h-24 w-24 fill-primary/10 group-hover:fill-white/20"
                            />
                            <div
                                class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-primary rounded-xl group-hover:text-white duration-500 inline-flex justify-center items-center"
                            >
                                <Wallet class="h-6 w-6" />
                            </div>
                        </div>

                        <div class="mt-6">
                            <h3
                                href=""
                                class="text-xl font-medium text-white duration-500"
                                >Contáctanos
                            </h3>
                            <p
                                class="text-default-300 group-hover:text-white/80 duration-500 mt-3 mb-6"
                            >
                                ¿Tienes una idea en mente? ¿Quieres pedir un
                                presupuesto o hacer una consulta? Escríbenos y
                                con gusto te ayudaremos a darle forma a tu
                                proyecto. Estamos para escucharte.
                            </p>
                            <p
                                class="text-default-300 group-hover:text-white/80 duration-500 mt-2"
                            >
                                Email:
                                <b>krakenstudioadm@gmail.com</b>
                            </p>
                            <p
                                class="text-default-300 group-hover:text-white/80 duration-500 mt-2"
                            >
                                WhatsApp:
                                <b>+573053075869</b>
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    class="group relative  bg-slate-950/40 backdrop-blur-3xl transition-all duration-500 hover:bg-primary/40 overflow-hidden"
                >
                    <div class="p-6">
                        <div
                            class="relative inline-block overflow-hidden text-transparent"
                        >
                            <Diamond
                                class="h-24 w-24 fill-primary/10 group-hover:fill-white/20"
                            />
                            <div
                                class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-primary rounded-xl group-hover:text-white duration-500 inline-flex justify-center items-center"
                            >
                                <Shapes class="h-6 w-6" />
                            </div>
                        </div>

                        <div class="mt-6">
                            <!-- <a
                                href=""
                                class="text-xl font-medium text-white duration-500"
                                >Si estás buscando darle un toque especial a tu
                                negocio</a
                            >
                            <p
                                class="text-default-300 group-hover:text-white/80 duration-500 mt-3"
                            >
                                Como una ambientación llamativa, letreros
                                personalizados, marcos decorativos para tu stand
                                o piezas únicas que capten la atención, no dudes
                                en contactarnos.
                            </p>
                            <p
                                class="text-default-300 group-hover:text-white/80 duration-500 mt-2"
                            >
                                Creamos soluciones a medida que destacan tu
                                marca y atraen miradas.
                            </p> -->
                            <div class="pb-8">
                                <h3 class="text-xl font-medium text-white duration-500">Escribenos</h3>
                                <p class="text-default-300 group-hover:text-white/80 duration-500 mt-3 mb-6">Tambien puedes usar este formulario para ponerte en contacto con nosotros comentandonos la idea que tienes en mente o el producto/servicio que necesites.</p>
                                <form class="space-y-2 mb-6" action="https://formsubmit.co/krakenstudioadm@gmail.com" method="post">
                                    <!-- <label for="name" class="text-base text-white">Nombre</label> -->
                                    <div class="relative">
                                        <input type="text" id="name"
                                                class="py-4 ps-4 pe-40 w-full h-12 text-white rounded-lg bg-default-950/60 backdrop-blur-3xl border-white/10 focus:ring-0 focus:border-white/10"
                                                placeholder="Ingresa tu nombre:" name="name">
                                    </div>
                                    <div class="relative">
                                        <input type="email" id="subcribe"
                                                class="py-4 ps-4 pe-40 w-full h-12 text-white rounded-lg bg-default-950/60 backdrop-blur-3xl border-white/10 focus:ring-0 focus:border-white/10"
                                                placeholder="Ingresa tu Email:" name="email">
                                    </div>
                                    <div class="relative">
                                        <input type="text" id="company"
                                                class="py-4 ps-4 pe-40 w-full h-12 text-white rounded-lg bg-default-950/60 backdrop-blur-3xl border-white/10 focus:ring-0 focus:border-white/10"
                                                placeholder="Nombre de empresa:" name="company">
                                    </div>
                                    <div class="relative">
                                        <input type="text" id="event"
                                                class="py-4 ps-4 pe-40 w-full h-12 text-white rounded-lg bg-default-950/60 backdrop-blur-3xl border-white/10 focus:ring-0 focus:border-white/10"
                                                placeholder="Tipo de evento: Ejemplo: Carnaval, Fiesta patronal, Producción audiovisual, Lanzamiento de producto, Boda, etc." name="event">
                                    </div>
                                    <div class="relative">
                                        <textarea name="description" id="event" cols="30" rows="10" class="py-4 ps-4 pe-40 w-full h-20 text-white rounded-lg bg-default-950/60 backdrop-blur-3xl border-white/10 focus:ring-0 focus:border-white/10" placeholder="Descripción del proyecto o idea:"></textarea>
                                    </div>
                                    <div class="relative">
                                        <button type="submit"
                                                class="inline-flex items-center justify-center gap-2 px-6 absolute top-[6px] end-[6px] h-9 transition-all bg-primary hover:bg-primary-hover border-primary hover:border-primary-hover text-white rounded-md">
                                            Enviar
                                            <MoveRight class="h-4 w-4"/>
                                        </button>                                    
                                    </div>
                                    <!-- <input type="hidden" name="_next" value="https://krakenstudioart.com/pages/index-2"> -->
                                    <input type="hidden" name="_captcha" value="true">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer />

    <Background2 />

    <BackToTop />
</template>

<script setup lang="ts">
import type { NavBarLinkType } from "@/types/layout";
import NavBar from "@/components/NavBar.vue";
import Hero from "@/views/pages/index-1/components/Hero.vue";
import Categories from "@/views/pages/index-1/components/Categories.vue";
import TypesOfEvents from "@/views/pages/index-1/components/TypesOfEvents.vue";
import Sellers from "@/views/pages/index-1/components/Sellers.vue";
import Showcase from "@/views/pages/index-1/components/Showcase.vue";
import Browse from "@/views/pages/index-1/components/Browse.vue";
import FAQs from "@/views/pages/index-1/components/FAQs.vue";
import Blogs from "@/views/pages/index-1/components/Blogs.vue";
import Footer from "@/views/pages/index-1/components/Footer.vue";
import Background2 from "@/components/Background2.vue";
import BackToTop from "@/components/BackToTop.vue";

import { Diamond, Wallet, Shapes } from "lucide-vue-next";

const navLinks: NavBarLinkType[] = [
    {
        id: "home",
        label: "Inicio",
        route: { url: "#home" },
    },
    {
        id: "categories",
        label: "Servicios",
        route: { url: "#categories" },
    },
    {
        id: "events",
        label: "Tipos de eventos",
        route: { url: "#events" },
    },
    //   {
    //     id: 'sellers',
    //     label: 'Sellers',
    //     route: {url: '#sellers'}
    //   },
    {
        id: "showcase",
        label: "Exhibición",
        route: { url: "#showcase" },
    },
    {
        id: "faq",
        label: "Faq",
        route: { url: "#faq" },
    },
    {
        id: "contacto",
        label: "Contáctanos",
        route: { url: "#contacto" },
    },
    //   {
    //     id: 'blog',
    //     label: 'Blog',
    //     route: {url: '#blog'}
    //   }
];
</script>
