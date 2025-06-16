import { createRouter, createWebHistory } from "vue-router";
import { type IStaticMethods } from "preline/preline";
import { allRoutes } from "@/router/routes";
import { appTitle } from "@/helpers";
import { useAuthStore } from "@/stores/auth";

declare global {
    interface Window {
        HSStaticMethods: IStaticMethods;
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: allRoutes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return { top: 0 }
        }

        if (to.hash) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const element = document.querySelector(to.hash);
                    if (element) {
                        const yOffset = -60; // Ajusta este valor según la altura de tu header
                        const y =
                            element.getBoundingClientRect().top +
                            window.pageYOffset +
                            yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                    }
                    resolve();
                }, 300); // Espera un poco por si aún no se ha renderizado el DOM
            });
        }

        return { left: 0, top: 0 };
    },
});

// set page title
router.beforeEach((to, from, next) => {
    const metaTitle = to.meta.title;
    const metaDescription = to.meta.description;

    if (metaTitle) {
        document.title = metaTitle;
    } else {
        document.title = appTitle;
    }

    const descriptionTag = document.querySelector("meta[name='description']");
    if (descriptionTag && metaDescription) {
        descriptionTag.setAttribute("content", metaDescription);
    }

    next();
});

// preline
router.afterEach((to, from, failure) => {
    if (!failure) {
        setTimeout(() => {
            window.HSStaticMethods.autoInit();
        }, 100);
    }
});

// auth (remove or comment below code if authentication is not needed)
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((route) => route.meta.requiresAuth);

    if (!requiresAuth) return next();

    const useAuth = useAuthStore();
    if (useAuth.isAuthenticated()) {
        return next();
    }

    redirectToLogin();

    function redirectToLogin() {
        next({ name: "auth.sign-in", query: { redirectedFrom: to.fullPath } });
    }
});

export default router;
