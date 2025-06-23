// src/helpers/useLocalizedRoute.ts
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export function useLocalizedRoute() {
  const route = useRoute()

  const currentLocale = computed(() => route.params.locale || 'en')

  function localizedRoute(name: string | undefined) {
    if (!name) {
      console.warn("❗Ruta sin nombre detectada en localizedRoute()");
      return "/";
    }

    return currentLocale.value === "en"
      ? { name }
      : { name: `${name}-locale`, params: { locale: currentLocale.value } };
  }

  return { currentLocale, localizedRoute }
}
