<template>
    <NavBar :nav-links="navLinks" />

    <Hero :title="service?.title" :description="service?.description" :image="service?.image"/>

    <AIMade
        v-if="service?.imagesShowcase1 && service.imagesShowcase1.length"
        :imagesShowcase1="service.imagesShowcase1"
        :imagesShowcase2="service.imagesShowcase2"
    />
    <Features />

    <FAQs />

    <Footer />

    <Background2 />

    <BackToTop />
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { services } from "@/views/services/individual-service/components/data";

import type { NavBarLinkType } from "@/types/layout";
import NavBar from "@/components/NavBar.vue";
import Hero from "@/views/services/individual-service/components/Hero.vue";
import AIMade from "@/views/services/individual-service/components/AIMade.vue";

import Features from "@/views/services/individual-service/components/Features.vue";

import FAQs from "@/views/pages/index-1/components/FAQs.vue";
import Footer from "@/views/pages/index-1/components/Footer.vue";
import Background2 from "@/components/Background2.vue";
import BackToTop from "@/components/BackToTop.vue";

// Función para convertir slug a clave válida del objeto
function normalizeSlug(slug) {
    return slug.replace(/-/g, "").toLowerCase();
}

const route = useRoute();
const router = useRouter();

const service = computed(() =>
    services.find((s) => s.slug === route.params.slug),
);

// Redirigir si no existe el servicio
onMounted(() => {
    if (!service.value) {
        router.replace("/404");
    }
});

const navLinks: NavBarLinkType[] = [
    {
        id: "home",
        label: "Inicio",
        route: { url: "/" },
    },
    {
        id: "categories",
        label: "Servicios",
        route: { url: "/#categories" },
    },
    // {
    //     id: "events",
    //     label: "Tipos de eventos",
    //     route: { url: "/#events" },
    // },
    //   {
    //     id: 'sellers',
    //     label: 'Sellers',
    //     route: {url: '#sellers'}
    //   },
    // {
    //     id: "showcase",
    //     label: "Exhibición",
    //     route: { url: "#showcase" },
    // },
    {
        id: "faq",
        label: "Faq",
        route: { url: "/#faq" },
    },
    {
        id: "contacto",
        label: "Contáctanos",
        route: { url: "/#contacto" },
    },
    //   {
    //     id: 'blog',
    //     label: 'Blog',
    //     route: {url: '#blog'}
    //   }
];
</script>