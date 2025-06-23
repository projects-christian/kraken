<template>
  <div class="relative inline-block text-left z-50">
    <button
      @click="toggleDropdown"
      class="bg-white text-gray-500 border border-white rounded-[5px] px-3 py-2 w-36 flex items-center justify-between gap-2"
    >
      <span class="flex items-center gap-1">
        {{ localeLabels[currentLocale] }}
      </span>
      <svg
        :class="[
          'w-4 h-4 transition-transform duration-200',
          open ? 'rotate-180' : 'rotate-0'
        ]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <ul
      v-show="open"
      class="absolute mt-2 w-full bg-white border border-white rounded-[5px] shadow-md"
    >
      <li
        v-for="(label, code) in localeLabels"
        :key="code"
        @click="switchLang(code)"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
      >
        {{ label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const currentLocale = computed(() => route.params.locale || "en");

const localeLabels = {
  en: "🇺🇸 English",
  es: "🇪🇸 Español",
  it: "🇮🇹 Italiano",
  nl: "🇳🇱 Nederlands",
};

const open = ref(false);
const toggleDropdown = () => (open.value = !open.value);

function switchLang(newLang) {
  const rawPath = route.fullPath;
  const currentIsEnglish = !route.params.locale || route.params.locale === "en";
  const switchingToEnglish = newLang === "en";

  let newPath;

  if (switchingToEnglish) {
    newPath = rawPath.replace(/^\/[a-z]{2}(\/|$)/, "/");
  } else {
    if (!currentIsEnglish) {
      newPath = rawPath.replace(/^\/[a-z]{2}(\/|$)/, `/${newLang}/`);
    } else {
      newPath = `/${newLang}${rawPath}`;
    }
  }

  open.value = false;
  router.push(newPath);
}
</script>
