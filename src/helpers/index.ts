import type { CurrencyType, SocialLinkType } from "@/types";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-vue-next";

import favicon from "@/assets/images/favicon.ico";
import i18n from "@/i18n";

export const appName: string = "Kraken";

export const getAppTitle = (): string => {
  return i18n.global.t("meta.app.title", i18n.global.locale.value);
};
export const getAppDescription = (): string => {
  return i18n.global.t("meta.app.description", i18n.global.locale.value);
};

export const appTitle: string =
    "Floats, event decor, sculptures – Kraken Studio Art";

export const appDescription: string =
    "Studio specialized in the creation of floats, scenography, sculptures, TV sets, and artistic environments for cultural events.";

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
