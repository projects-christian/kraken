<template>
    <header class="navbar overflow-visible">
        <div class="container">
            <nav class="relative z-50 overflow-visible">
                <LogoBox />

                <div class="lg:hidden flex items-center ms-auto px-2.5">
                    <button
                        class="hs-collapse-toggle inline-flex items-center justify-center h-9 w-12 rounded-md border border-white/20 bg-default-100/5"
                        type="button"
                        id="hs-unstyled-collapse"
                        data-hs-collapse="#mobileMenu"
                        data-hs-type="collapse"
                    >
                        <Menu class="h-5 w-5 stroke-white" />
                    </button>
                </div>

                <div
                    id="mobileMenu"
                    class="hs-collapse transition-all duration-300 lg:basis-auto basis-full grow hidden lg:flex items-center justify-center mx-auto mt-2 lg:mt-0"
                >
                    <ul id="navbar-navlist" class="navbar-nav">
                        <li
                            v-for="(link, idx) in navLinks"
                            :key="link.id"
                            class="nav-item"
                            :class="{ active: activeSectionIndex === idx }"
                        >
                            <template v-if="link.route.name">
                                <router-link
                                    :to="localizedRoute(link.route.name)"
                                    class="nav-link"
                                >
                                    {{ link.label }}
                                </router-link>
                            </template>
                            <template v-else-if="link.route.path">
                                <a
                                    :href="link.route.path"
                                    class="nav-link"
                                >
                                    {{ link.label }}
                                </a>
                            </template>
                        </li>
                    </ul>

                    <div
                        class="lg:hidden flex items-center pt-4 mt-4 lg:pt-0 lg:mt-0 border-t border-white/10 lg:border-none"
                    >
                        <!-- <a href="#"
                        class="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-3">
                        <ArrowBigDownDash class="h-5 w-5 me-2"/>
                        Download</a> -->
                    </div>
                </div>

                <div class="hidden lg:flex items-center">
                    <!-- <a href="#demo"
                    class="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300">
                    <ArrowBigDownDash class="h-5 w-5 me-2"/>
                    Download </a> -->
                </div>
                <SelectLanguage />
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, onUnmounted, type PropType, ref } from "vue";
import type { NavBarLinkType } from "@/types/layout";
import LogoBox from "@/components/LogoBox.vue";
import SelectLanguage from "@/components/SelectLanguage.vue";


import { ArrowBigDownDash, Menu } from "lucide-vue-next";
import { useLocalizedRoute } from '@/helpers/useLocalizedRoute'

const { localizedRoute } = useLocalizedRoute()

const props = defineProps({
    navLinks: {
        type: Array as PropType<NavBarLinkType[]>,
        required: true,
    },
});

const navClass = ref<string>("");

onMounted(() => {
    window.addEventListener("scroll", () => {
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navClass.value = "nav-sticky";
        } else {
            navClass.value = "";
        }
    });

    window.addEventListener("scroll", getActiveSectionIndex);
});

onUnmounted(() => {
    window.removeEventListener("scroll", getActiveSectionIndex);
});

let activeSectionIndex = ref(0);

const getActiveSectionIndex = () => {
    const currentScrollPos = window.pageYOffset;

    for (let i = 0; i < props.navLinks.length; i++) {
        const section = document.getElementById(props.navLinks[i].id);
        if (section) {
            const sectionTop = section.offsetTop - 70;
            const sectionHeight = section.offsetHeight;
            if (
                currentScrollPos >= sectionTop &&
                currentScrollPos < sectionTop + sectionHeight
            ) {
                activeSectionIndex.value = i;
                break;
            }
        }
    }
};
</script>
