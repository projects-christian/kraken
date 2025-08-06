<template>
    <header class="ms-header navbar-white">
        <nav class="ms-nav">
            <div class="ms-logo">
                <a href="index.html" data-type="page-transition">
                    <img
                        :src="logo"
                        class="h-10"
                        alt="Logo kraken"
                    />
                </a>
            </div>
            <!-- <button class="hamburger" type="button" data-toggle="navigation">
                <span class="hamburger-box">
                    <span class="hamburger-label">menu</span>
                    <span class="hamburger-inner"></span>
                </span>
            </button> -->
        </nav>
      </header>
</template>

<script setup lang="ts">
    import logo from "@/assets/images/logo-kraken.png";
</script>
