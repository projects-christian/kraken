import type { CurrencyType, SocialLinkType } from "@/types";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-vue-next";

import favicon from "@/assets/images/favicon.ico";

export const appName: string = "Kraken";
export const appTitle: string =
    "Carrozas, ambientación de eventos, esculturas - kraken Studio Art";
export const appDescription: string =
    "Somos expertos para crear lo que necesites para todo tipo de eventos: Carnavales, Procesiones religiosas, Desfiles temáticos, Fiestas patronales, Lanzamientos de productos, Stands para ferias comerciales, etc.";
export const appAuthor: string = "Alius Corp";
export const appAuthorWebsite: string = "https://coderthemes.com/";

export const buyLink: string = "";

export const currentYear: number = new Date().getFullYear();

export const currency: CurrencyType = "$";

export { favicon };

export const socialLinks: SocialLinkType[] = [
    {
        icon: Facebook,
        route: { url: "" },
    },
    {
        icon: Instagram,
        route: { url: "" },
    },
    {
        icon: Twitter,
        route: { url: "" },
    },
    {
        icon: Linkedin,
        route: { url: "" },
    },
];
