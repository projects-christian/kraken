<template>
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

<script setup>
// No se necesita lógica aquí
</script>
