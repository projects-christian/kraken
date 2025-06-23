<template>
  <footer class="bg-default-950/40 backdrop-blur-3xl">
    <div class="container lg:px-20">
      <div class="flex flex-col lg:flex-row justify-between gap-14 py-24">
        <!-- Logo + Frase -->
        <div class="lg:w-3/12">
          <a href="#" class="flex items-center gap-2 logo">
            <img :src="logo" class="w-36" alt="logo kraken studio art" />
          </a>

          <p class="text-default-200 text-sm font-medium max-w-xs mt-6">
            {{ t("footer.phrase") }}
          </p>
        </div>

        <!-- Enlaces -->
        <div class="lg:w-8/12">
          <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            <div v-for="(item, idx) in footerItems" :key="idx">
              <ul class="flex flex-col gap-3">
                <h5 class="xl:text-xl lg:text-lg font-semibold text-default-200 mb-2">
                  {{ item.title }}
                </h5>

                <li v-for="link in item.links" :key="link.label">
                  <!-- Si hay route.path (rutas dinámicas) -->
                  <router-link
                    v-if="link.route?.path"
                    :to="localizedRoute(undefined, link.route.path)"
                    class="inline-flex items-center gap-2 text-base font-semibold text-default-100 hover:text-primary transition-all"
                  >
                    <CircleSlash class="inline-block h-4 w-4" />
                    {{ link.label }}
                  </router-link>

                  <!-- Si hay una URL externa (por si acaso) -->
                  <a
                    v-else-if="typeof link.route === 'string'"
                    :href="link.route"
                    class="inline-flex items-center gap-2 text-base font-semibold text-default-100 hover:text-primary transition-all"
                  >
                    <CircleSlash class="inline-block h-4 w-4" />
                    {{ link.label }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer base -->
    <div class="border-t border-white/10 py-6">
      <div class="container lg:px-20 flex flex-wrap justify-center items-center gap-4 h-full md:justify-between text-center md:text-start">
        <p class="text-base font-medium text-default-400">
          {{ currentYear }} © {{ appName }} -
          <a href="#">
            {{ t("footer.creatorOne") }}
            <Heart class="inline h-4 w-4 text-red-500 fill-red-500" />
            {{ t("footer.creatorTwo") }} {{ appAuthor }}
          </a>
        </p>
        <p class="text-base font-medium text-default-400">
          <a href="#">Terms Conditions & Policy</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import logo from "@/assets/images/logo-kraken.png";
import { CircleSlash, Heart } from "lucide-vue-next";
import { currentYear, appName, appAuthor } from "@/helpers";
import { useI18n } from "vue-i18n";
import { useLocalizedRoute } from "@/helpers/useLocalizedRoute";
import { generateFooterItems } from "@/data/data";

const { t, locale } = useI18n();
const { localizedRoute } = useLocalizedRoute();
const footerItems = ref(generateFooterItems(t));

// Vuelve a generar cuando cambia el idioma
watch(locale, () => {
  footerItems.value = generateFooterItems(t);
});
</script>
