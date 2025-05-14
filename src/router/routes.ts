import type {RouteRecordRaw} from "vue-router";

interface RouteMetaType {
    title?: string;
    requiresAuth?: boolean // add this if authentication is needed
}

export const allRoutes: Array<RouteRecordRaw & { meta?: RouteMetaType }> = [
    {
        path: '/',
        name: 'landing',
        component: () => import('@/views/landing/index.vue'),
    },
    {
        path: '/pages/',
        children: [
            {
                path: 'index-1',
                name: 'pages.index-1',
                meta: {
                    requiresAuth: true,
                },
                component: () => import('@/views/pages/index-1/index.vue'),
            },
            {
                path: 'index-2',
                name: 'pages.index-2',
                meta: {
                    requiresAuth: true,
                },
                component: () => import('@/views/pages/index-2/index.vue'),
            },
            {
                path: 'index-3',
                name: 'pages.index-3',
                meta: {
                    requiresAuth: true,
                },
                component: () => import('@/views/pages/index-3/index.vue'),
            },
            {
                path: 'index-4',
                name: 'pages.index-4',
                meta: {
                    requiresAuth: true,
                },
                component: () => import('@/views/pages/index-4/index.vue'),
            },
            {
                path: 'index-5',
                name: 'pages.index-5',
                meta: {
                    requiresAuth: true,
                },
                component: () => import('@/views/pages/index-5/index.vue'),
            },
        ]
    },
    {
        path: '/auth/',
        children: [
            {
                path: 'sign-in',
                name: 'auth.sign-in',
                meta: {
                    title: 'Sign In'
                },
                component: () => import('@/views/auth/sign-in.vue'),
            },
            {
                path: 'sign-in-with-qr',
                name: 'auth.sign-in-with-qr',
                meta: {
                    title: 'Sign In With QR'
                },
                component: () => import('@/views/auth/sign-in-with-qr.vue'),
            },
            {
                path: 'sign-up',
                name: 'auth.sign-up',
                meta: {
                    title: 'Sign Up'
                },
                component: () => import('@/views/auth/sign-up.vue'),
            },
            {
                path: 'lock-screen',
                name: 'auth.lock-screen',
                meta: {
                    title: 'Lock Screen'
                },
                component: () => import('@/views/auth/lock-screen.vue'),
            },
            {
                path: 'forgot-password',
                name: 'auth.forgot-password',
                meta: {
                    title: 'Forgot Password'
                },
                component: () => import('@/views/auth/forgot-password.vue'),
            },
            {
                path: 'logout',
                name: 'auth.logout',
                meta: {
                    title: 'Logout'
                },
                component: () => import('@/views/auth/logout.vue'),
            },
        ]
    },
];