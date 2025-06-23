// src/helpers/useLocalizedRoute.ts
import { useRoute } from 'vue-router';
import { computed } from 'vue';

export function useLocalizedRoute() {
  const route = useRoute();
  const currentLocale = computed(() => route.params.locale || 'en');

  function localizedRoute(name?: string, path?: string) {
    const locale = currentLocale.value;

    if (name) {
      return locale === 'en'
        ? { name }
        : { name: `${name}-locale`, params: { locale } };
    }

    if (path) {
      return locale === 'en' ? path : `/${locale}${path}`;
    }

    console.warn("❗Ruta sin name ni path en localizedRoute()");
    return "/";
  }

  return { currentLocale, localizedRoute };
}
