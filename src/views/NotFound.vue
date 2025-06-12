<template>
    <NavBar :nav-links="navLinks" />
    <div
        class="min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
        <h1 class="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 class="text-2xl font-semibold mb-2">Página no encontrada</h2>
        <p class="text-gray-500 mb-6">
            La página que estás buscando no existe o fue movida.
        </p>
        <router-link
            to="/"
            class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
            Volver al inicio
        </router-link>
    </div>
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
