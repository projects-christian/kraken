<template>
    <NavBar :nav-links="navLinks" />

</template>

<script setup lang="ts">
import type { NavBarLinkType } from "@/types/layout";
import NavBar from "@/components/NavBar.vue";

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