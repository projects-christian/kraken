import type {CurrencyType, SocialLinkType} from "@/types";
import {Facebook, Instagram, Twitter, Linkedin} from "lucide-vue-next";

import favicon from '@/assets/images/favicon.ico'

export const appName: string = 'Kraken'
export const appTitle: string = 'kraken Studio Art - Maximizamos el impacto visual de los espacios'
export const appDescription: string = 'Tailwind CSS AI Startup & Technology Saas & AI Software Landing Page Template, ai agency, ai application, ai business, ai, creative ai art, ai it solutions, modern web ai, multipurpose, saas, nft art, nft software, tailwind css.'
export const appAuthor: string = 'Alius Corp'
export const appAuthorWebsite: string = 'https://coderthemes.com/'

export const buyLink: string = ''

export const currentYear: number = new Date().getFullYear()

export const currency: CurrencyType = '$'

export {favicon}

export const socialLinks: SocialLinkType[] = [
    {
        icon: Facebook,
        route: {url: ''}
    },
    {
        icon: Instagram,
        route: {url: ''}
    },
    {
        icon: Twitter,
        route: {url: ''}
    },
    {
        icon: Linkedin,
        route: {url: ''}
    },
]