// src/router/routes.ts
import type { RouteRecordRaw } from "vue-router"
import { SUPPORT_LOCALES } from "@/i18n" // ['en', 'es', 'it', etc.]
const proposal = import.meta.env.VITE_PROPOSAL_ENTRY;


interface RouteMetaType {
  title?: string
  description?: string
  requiresAuth?: boolean
}

// 🌐 RUTAS BASE - inglés sin prefijo
const baseRoutes: Array<RouteRecordRaw & { meta?: RouteMetaType }> = [
  {
    path: "/",
    name: "landing",
    component: () => import("@/views/pages/index-1/index.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: () => import("@/views/pages/services/archive-service/index.vue"),
    meta: {
      title: "services | Kraken Studio",
      description: "services page",
    },
  },
  {
    path: "/services/:slug",
    name: "service-detail",
    component: () => import("@/views/pages/services/individual-service/service.vue"),
    meta: {
      title: "services | Kraken Studio",
      description: "services page",
    },
  },
  {
    path: "/proposal",
    name: "proposal",
    component: () => import("@/views/pages/proposal/index.vue"),
    beforeEnter: (to, from, next) => {
      const password = prompt("Ingresa la clave para acceder:");
      if (password === proposal) {
        next();
      } else {
        alert("Clave incorrecta");
        next(false);
      }
    },
  },
  {
    path: "/pages/",
    children: [
      {
        path: "index-1",
        name: "pages.index-1",
        component: () => import("@/views/pages/index-1/index.vue"),
      },
      {
        path: "index-2",
        name: "pages.index-2",
        component: () => import("@/views/pages/index-2/index.vue"),
      },
      {
        path: "index-3",
        name: "pages.index-3",
        component: () => import("@/views/pages/index-3/index.vue"),
      },
      {
        path: "index-4",
        name: "pages.index-4",
        component: () => import("@/views/pages/index-4/index.vue"),
      },
      {
        path: "index-5",
        name: "pages.index-5",
        component: () => import("@/views/pages/index-5/index.vue"),
      },
    ],
  },
  {
    path: "/auth/",
    children: [
      {
        path: "sign-in",
        name: "auth.sign-in",
        component: () => import("@/views/auth/sign-in.vue"),
      },
      {
        path: "sign-in-with-qr",
        name: "auth.sign-in-with-qr",
        component: () => import("@/views/auth/sign-in-with-qr.vue"),
      },
      {
        path: "sign-up",
        name: "auth.sign-up",
        component: () => import("@/views/auth/sign-up.vue"),
      },
      {
        path: "lock-screen",
        name: "auth.lock-screen",
        component: () => import("@/views/auth/lock-screen.vue"),
      },
      {
        path: "forgot-password",
        name: "auth.forgot-password",
        component: () => import("@/views/auth/forgot-password.vue"),
      },
      {
        path: "logout",
        name: "auth.logout",
        component: () => import("@/views/auth/logout.vue"),
      },
    ],
  },
]

// 🌐 RUTAS CON LOCALE - para idiomas distintos de "en"
const localeRoutes: RouteRecordRaw = {
  path: "/:locale",
  component: () => import("@/layouts/LayoutRouterView.vue"),
  beforeEnter: (to, from, next) => {
    const locale = to.params.locale as string
    if (!SUPPORT_LOCALES.includes(locale)) return next("/")
    if (locale === "en") return next("/")
    next()
  },
  children: [
    {
      path: "",
      name: "landing-locale",
      component: () => import("@/views/pages/index-1/index.vue"),
    },
    {
      path: "services",
      name: "services-locale",
      component: () => import("@/views/pages/services/archive-service/index.vue"),
    },
    {
      path: "services/:slug",
      name: "service-detail-locale",
      component: () => import("@/views/pages/services/individual-service/service.vue"),
    },
    // Puedes extender con versiones localizadas de otras rutas
  ],
}

// 👇 Exportar todas las rutas combinadas
export const allRoutes: RouteRecordRaw[] = [
  ...baseRoutes,
  localeRoutes,
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
]
