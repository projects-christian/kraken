// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import { allRoutes } from "@/router/routes";
import { appTitle,getAppTitle,getAppDescription } from "@/helpers";
import { useAuthStore } from "@/stores/auth";
import i18n, { SUPPORT_LOCALES } from "@/i18n";

const DEFAULT_LOCALE = "en";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: allRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return { top: 0 };

    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const element = document.querySelector(to.hash);
          if (element) {
            const yOffset = -60;
            const y =
              element.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
          resolve();
        }, 300);
      });
    }

    return { left: 0, top: 0 };
  },
});

// ✅ Un solo beforeEach para i18n + auth + meta
router.beforeEach((to, from, next) => {
  // Idioma
  const localeParam = to.params.locale as string | undefined;
  const locale = SUPPORT_LOCALES.includes(localeParam) ? localeParam : DEFAULT_LOCALE;
  i18n.global.locale.value = locale;

  // Meta tags
  document.title = to.meta.title ? i18n.global.t(to.meta.title) : getAppTitle();

  const descriptionTag = document.querySelector("meta[name='description']");
  if (descriptionTag) {
    const metaDescription = to.meta.description
      ? i18n.global.t(to.meta.description)
      : getAppDescription();

    descriptionTag.setAttribute("content", metaDescription);
  }

  // Auth
  const requiresAuth = to.matched.some((route) => route.meta?.requiresAuth);
  if (!requiresAuth) return next();

  const useAuth = useAuthStore();
  if (useAuth.isAuthenticated()) return next();

  next({ name: "auth.sign-in", query: { redirectedFrom: to.fullPath } });
});

// Preline init
router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods?.autoInit();
    }, 100);
  }
});

export default router;
