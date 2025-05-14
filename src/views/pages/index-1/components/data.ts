import type {FooterItemType} from "@/types/layout";
import type {BlogType, CategoryType, FAQType, SellerType} from "@/views/pages/index-1/components/types";
import {addOrSubtractDaysFromDate} from "@/helpers/date-time";

import nftArt4 from "@/assets/images/nft/art/4.png"
import nftArt5 from "@/assets/images/nft/art/5.png"
import nftArt6 from "@/assets/images/nft/art/6.png"
import nftArt7 from "@/assets/images/nft/art/7.png"
import nftArt8 from "@/assets/images/nft/art/8.png"
import nftArt9 from "@/assets/images/nft/art/9.png"
import nftArt10 from "@/assets/images/nft/art/10.png"
import nftArt11 from "@/assets/images/nft/art/11.png"
import nftArt12 from "@/assets/images/nft/art/12.png"
import nftArt13 from "@/assets/images/nft/art/13.png"
import nftArt14 from "@/assets/images/nft/art/14.png"
import nftArt15 from "@/assets/images/nft/art/15.png"
import nftArt16 from "@/assets/images/nft/art/16.png"
import nftArt17 from "@/assets/images/nft/art/17.png"
import nftArt19 from "@/assets/images/nft/art/19.png";
import nftArt18 from "@/assets/images/nft/art/18.png"
import nftArt20 from "@/assets/images/nft/art/20.png"
import nftArt21 from "@/assets/images/nft/art/21.png"
import nftArt22 from "@/assets/images/nft/art/22.png"

import avatar1 from "@/assets/images/avatars/img-1.png"
import avatar2 from "@/assets/images/avatars/img-2.png"
import avatar3 from "@/assets/images/avatars/img-3.png"
import avatar4 from "@/assets/images/avatars/img-4.png"
import avatar5 from "@/assets/images/avatars/img-5.png"
import avatar6 from "@/assets/images/avatars/img-6.png"
import avatar8 from "@/assets/images/avatars/img-8.png"
import avatar9 from "@/assets/images/avatars/img-9.png"
import avatar10 from "@/assets/images/avatars/img-10.png"
import avatar11 from "@/assets/images/avatars/img-11.png"

import blog1 from "@/assets/images/nft/bg/1.png"
import blog2 from "@/assets/images/nft/bg/2.png"


export const categories: CategoryType[] = [
    {
        image: nftArt4,
        name: 'Carrozas',
        creator: {
            image: avatar1,
            username: '@Nikom'
        },
        description: "Diseño de carrozas nauticas y terrestres, con materiales ligeros y resistentes.",
        bid: {
            current: 20.5,
            last: 25.04,
        },
        sale: {
            endDate: addOrSubtractDaysFromDate(10, true)
        }
    },
    {
        image: nftArt5,
        name: 'Piezas artisticas',
        creator: {
            image: avatar3,
            username: '@Mexi'
        },
        description: "Creación de piezas y figuras que decoran  el entorno del evento.",
        bid: {
            current: 12.5,
            last: 25.04,
        }
    },
    {
        image: nftArt6,
        name: 'Esculturas y Macroesculturas',
        creator: {
            image: avatar4,
            username: '@Astro'
        },
        description: "Esculturas a gran escala con acabados de calidad y durabilidad.",
        bid: {
            current: 14.8,
            last: 12.04,
        },
        isLiked: true
    },
    {
        image: nftArt7,
        name: 'Sets de rodaje para cine y TV',
        creator: {
            image: avatar5,
            username: '@Aliza'
        },
        description: "Transformamos espacios existentes en los escenarios requeridos por el guion.",
        bid: {
            current: 18,
            last: 32.06,
        },
        sale: {
            endDate: addOrSubtractDaysFromDate(4, true)
        }
    },
    {
        image: nftArt8,
        name: 'Estatuillas para premios',
        creator: {
            image: avatar8,
            username: '@Tony'
        },
        description: "Diseños unicos y exclusivos para que cada una sea un objeto de colección.",
        bid: {
            current: 20.42,
            last: 18.96,
        }
    },
    {
        image: nftArt9,
        name: 'Ambientación de lugar',
        creator: {
            image: avatar9,
            username: '@Alabto'
        },
        description: "Creamos ambientaciones temáticas para eventos especiales, lanzamientos de productos, celebraciones y más.",
        bid: {
            current: 24.96,
            last: 40.22,
        }
    },
    {
        image: nftArt14,
        name: 'Creación de disfraces',
        creator: {
            image: avatar10,
            username: '@Minato'
        },
        description: "Elaborados y detallados con alta calidad acorde a la tematica del evento.",
        bid: {
            current: 12.5,
            last: 25.04,
        },
        sale: {
            endDate: addOrSubtractDaysFromDate(7, true)
        }
    },
    {
        image: nftArt22,
        name: 'Parques temáticos',
        creator: {
            image: avatar11,
            username: '@Tamari'
        },
        description: "Implica la transformación de espacios en mundos fantásticos",
        bid: {
            current: 42.52,
            last: 20.42,
        }
    },
]

export const topSellers: SellerType[] = [
    {
        image: avatar1,
        name: 'Nikom Petroy',
        earnings: 60000,
        topWork: [nftArt4, nftArt5, nftArt6]
    },
    {
        image: avatar2,
        name: 'Mexi Luna',
        earnings: 55000,
        topWork: [nftArt7, nftArt8, nftArt9]
    },
    {
        image: avatar4,
        name: 'Astro Stark',
        earnings: 52000,
        topWork: [nftArt10, nftArt11, nftArt12]
    },
    {
        image: avatar5,
        name: 'Aliza Spencer',
        earnings: 48500,
        topWork: [nftArt13, nftArt14, nftArt15]
    },
    {
        image: avatar6,
        name: 'Tony Stark',
        earnings: 45200,
        topWork: [nftArt16, nftArt17, nftArt18]
    },
    {
        image: avatar8,
        name: 'Minato Namikaze',
        earnings: 45100,
        topWork: [nftArt20, nftArt21, nftArt22]
    },
]

export const browseByCategory = [
    {
        type: 'Art',
        image: nftArt19
    },
    {
        type: 'Music',
        image: nftArt5
    },
    {
        type: 'Utility',
        image: nftArt14
    },
]

export const faqs: FAQType[] = [
    {
        question: 'Will it support my language?',
        answer: 'You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.'
    },
    {
        question: 'Do you also provide subtitles?',
        answer: 'You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.'
    },
    {
        question: 'How do I get started?',
        answer: 'You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.'
    },
    {
        question: 'Do you have any samples?',
        answer: 'You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.'
    },
    {
        question: 'Can I get custom templates?',
        answer: 'You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.'
    },
    {
        question: 'What types of videos can i upload?',
        answer: 'You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.'
    },
]

export const blogs: BlogType[] = [
    {
        image: blog1,
        title: 'The Beginner\'s to creating & selling digital NFTs',
        description: 'suscipit eget imperdiet nec imperdiet iaculis ipsum. Sed aliquam ultrices mauris.',
        publishedDate: '27 Aug 2021'
    },
    {
        image: blog2,
        title: '7 Reasons to sell your NFTs on openSea',
        description: 'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero.',
        publishedDate: '31 Jan 2022'
    },
]

export const footerItems: FooterItemType[] = [
    {
        title: 'Servicios',
        links: [
            {
                label: 'Carrozas',
                route: {}
            },
            {
                label: 'Piezas artisticas',
                route: {}
            },
            {
                label: 'Esculturas y Macroesculturas',
                route: {}
            },
            {
                label: 'Sets de rodaje para cine y TV',
                route: {}
            },
        ]
    },
    {
        title: 'Servicios',
        links: [
            {
                label: 'Estatuillas para premios',
                route: {}
            },
            {
                label: 'Ambientación de lugar',
                route: {}
            },
            {
                label: 'Creación de disfraces',
                route: {}
            },
            {
                label: 'Parques temáticos',
                route: {}
            },
        ]
    },
    {
        title: 'Recursos',
        links: [
            {
                label: '',
                route: {}
            },
            {
                label: '',
                route: {}
            },
            {
                label: '',
                route: {}
            },
        ]
    },
    {
        title: 'Compañia',
        links: [
            {
                label: '',
                route: {}
            },
            {
                label: '',
                route: {}
            },
        ]
    },
]