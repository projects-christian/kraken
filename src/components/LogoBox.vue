<template>
    <router-link :to="localizedRoute('landing')" class="logo">
        <img :src="logo" class="h-10" alt="Logo Kraken Studio Art" />
    </router-link>
</template>

<script setup lang="ts">
import logo from "@/assets/images/logo-kraken.png";

import { useLocalizedRoute } from '@/helpers/useLocalizedRoute'
const { localizedRoute } = useLocalizedRoute()
</script>
