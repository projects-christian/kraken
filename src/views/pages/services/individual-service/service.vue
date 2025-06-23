<template>
    <NavBar :nav-links="navLinks" />

    <Hero :name="service?.name" :description="service?.description" :image="service?.image"/>

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
import { useRoute, useRouter } from "vue-router";
import { onMounted, computed, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

import { generateCategories } from "@/data/data";

import type { NavBarLinkType } from "@/types/layout";
import NavBar from "@/components/NavBar.vue";
import Hero from "@/views/pages/services/individual-service/components/Hero.vue";
import AIMade from "@/views/pages/services/individual-service/components/AIMade.vue";

import Features from "@/views/pages/services/individual-service/components/Features.vue";

import FAQs from "@/views/pages/index-1/components/FAQs.vue";
import Footer from "@/views/pages/index-1/components/Footer.vue";
import Background2 from "@/components/Background2.vue";
import BackToTop from "@/components/BackToTop.vue";


const { t, locale } = useI18n();
const categories = ref(generateCategories(t));

watch(locale, () => {
  categories.value = generateCategories(t);
});

// Función para convertir slug a clave válida del objeto
// function normalizeSlug(slug) {
//     return slug.replace(/-/g, "").toLowerCase();
// }

const route = useRoute();
const router = useRouter();

const service = computed(() =>
  categories.value.find((s) => s.slug === route.params.slug)
);

// Redirigir si no existe el servicio
onMounted(() => {
    const slug = route.params.slug as string;
    const metaService = categories.value.find((s) => s.slug === slug);


    if (metaService) {
        document.title = `${metaService.meta.title} | Kraken Studio Art`;
        
        const descriptionTag = document.querySelector("meta[name='description']");
        if (descriptionTag) {
            // Elimina etiquetas HTML si las hay
            descriptionTag.setAttribute(
                "content",
                metaService.meta.description.replace(/<[^>]*>/g, "")
            );
        }
    }
    
    if (!service.value) {
        router.replace("/404");
    }
});

const navLinks: NavBarLinkType[] = [
    {
        id: "home",
        label: t("navbar.home"),
        route: { name: "landing" },
    },
    {
        id: "categories",
        label: t("navbar.services"),
        route: { path: "#categories" },
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
        label: t("navbar.faq"),
        route: { path: "#faq" },
    },
    {
        id: "contacto",
        label: t("navbar.contact"),
        route: { path: "#contacto" },
    },
    //   {
    //     id: 'blog',
    //     label: 'Blog',
    //     route: {url: '#blog'}
    //   }
];
</script>