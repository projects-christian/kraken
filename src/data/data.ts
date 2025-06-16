import type { FooterItemType } from "@/types/layout";
import type {
    BlogType,
    CategoryType,
    FAQType,
    SellerType,
} from "@/views/pages/index-1/components/types";

import type {
    FeatureType,
    TestimonialType,
} from "@/views/pages/services/individual-service/components/types";

import { Activity, Layers, Dribbble } from "lucide-vue-next";

import { addOrSubtractDaysFromDate } from "@/helpers/date-time";

import carrozas from "@/assets/images/services/servicios-carrozas.png";
import piezasArtisticas from "@/assets/images/services/servicios-piezas-artisticas.png";
import esculturas from "@/assets/images/services/servicios-esculturas.png";
import setDeRodaje from "@/assets/images/services/servicios-set-de-rodaje.png";
import estatuillas from "@/assets/images/services/servicios-estatuillas.png";
import ambientacion from "@/assets/images/services/servicios-ambientacion-de-lugar.png";
import disfraces from "@/assets/images/services/servicios-disfraces.png";
import parquesTematicos from "@/assets/images/services/servicios-parques-tematicos.png";

import carroza1 from "@/assets/images/services/carroza-1.jpg";
import carroza2 from "@/assets/images/services/carroza-2.jpg";
import carroza3 from "@/assets/images/services/carroza-3.jpg";
import carroza4 from "@/assets/images/services/carroza-4.jpg";
import carroza5 from "@/assets/images/services/carroza-5.png";
import carroza6 from "@/assets/images/services/carroza-6.jpg";
import carroza7 from "@/assets/images/services/carroza-7.jpg";

import artisticPieces1 from "@/assets/images/services/artistic-pieces1.jpg";
import artisticPieces2 from "@/assets/images/services/artistic-pieces2.png";
import artisticPieces3 from "@/assets/images/services/artistic-pieces3.jpg";
import artisticPieces4 from "@/assets/images/services/artistic-pieces4.jpg";
import artisticPieces5 from "@/assets/images/services/artistic-pieces5.png";
import artisticPieces6 from "@/assets/images/services/artistic-pieces6.jpg";

import ambientacion1 from "@/assets/images/services/ambientacion1.jpg";
import ambientacion2 from "@/assets/images/services/ambientacion2.jpg";
import ambientacion3 from "@/assets/images/services/ambientacion3.jpg";
import ambientacion4 from "@/assets/images/services/ambientacion4.jpg";

import nftArt4 from "@/assets/images/nft/art/4.png";
import nftArt5 from "@/assets/images/nft/art/5.png";
import nftArt6 from "@/assets/images/nft/art/6.png";
import nftArt7 from "@/assets/images/nft/art/7.png";
import nftArt8 from "@/assets/images/nft/art/8.png";
import nftArt9 from "@/assets/images/nft/art/9.png";
import nftArt10 from "@/assets/images/nft/art/10.png";
import nftArt11 from "@/assets/images/nft/art/11.png";
import nftArt12 from "@/assets/images/nft/art/12.png";
import nftArt13 from "@/assets/images/nft/art/13.png";
import nftArt14 from "@/assets/images/nft/art/14.png";
import nftArt15 from "@/assets/images/nft/art/15.png";
import nftArt16 from "@/assets/images/nft/art/16.png";
import nftArt17 from "@/assets/images/nft/art/17.png";
import nftArt19 from "@/assets/images/nft/art/19.png";
import nftArt18 from "@/assets/images/nft/art/18.png";
import nftArt20 from "@/assets/images/nft/art/20.png";
import nftArt21 from "@/assets/images/nft/art/21.png";
import nftArt22 from "@/assets/images/nft/art/22.png";

import avatar1 from "@/assets/images/avatars/img-1.png";
import avatar2 from "@/assets/images/avatars/img-2.png";
import avatar3 from "@/assets/images/avatars/img-3.png";
import avatar4 from "@/assets/images/avatars/img-4.png";
import avatar5 from "@/assets/images/avatars/img-5.png";
import avatar6 from "@/assets/images/avatars/img-6.png";
import avatar7 from "@/assets/images/avatars/img-7.png";
import avatar8 from "@/assets/images/avatars/img-8.png";
import avatar9 from "@/assets/images/avatars/img-9.png";
import avatar10 from "@/assets/images/avatars/img-10.png";
import avatar11 from "@/assets/images/avatars/img-11.png";

import blog1 from "@/assets/images/nft/bg/1.png";
import blog2 from "@/assets/images/nft/bg/2.png";

export const categories: CategoryType[] = [
    {
        image: carrozas,
        name: "Carrozas",
        slug: "carrozas",
        meta: {
            title: "carrozas",
            description: "Diseño de carrozas nauticas y terrestres, con materiales ligeros y resistentes."
        },
        creator: {
            image: carrozas,
            username: "@Nikom",
        },
        intro:
            "Diseño de carrozas nauticas y terrestres, con materiales ligeros y resistentes.",
        description: "<b>Carrozas terrestres - acuáticas</b>: diseñamos todo tipo de carroza con la dinámica que quieras exponer o crear basándonos en el tema o ferias designadas.",
        imagesShowcase1: [carroza1, carroza2, carroza3, carroza5, carroza4, carroza6, carroza7],
        imagesShowcase2: [carroza7, carroza6, carroza5, carroza3, carroza4, carroza2, carroza1],
        bid: {
            current: 20.5,
            last: 25.04,
        },
        sale: {
            endDate: addOrSubtractDaysFromDate(10, true),
        },
        isLiked: true,
    },
    {
        image: piezasArtisticas,
        name: "Piezas artisticas",
        slug: "piezas-artisticas",
        meta: {
            title: "Piezas artisticas",
            description: "Creación de piezas y figuras que decoran  el entorno del evento."
        },
        creator: {
            image: piezasArtisticas,
            username: "@Mexi",
        },
        intro:
            "Creación de piezas y figuras que decoran  el entorno del evento.",
        description: "Creación de piezas artísticas que decoran el entorno del evento, como columnas decorativas, figuras monumentales,esculturas o estructuras modulares que sigan la misma línea estética.",
        imagesShowcase1: [artisticPieces1, artisticPieces2, artisticPieces3, artisticPieces4, artisticPieces5, artisticPieces6],
        imagesShowcase2: [artisticPieces6, artisticPieces5, artisticPieces4, artisticPieces3, artisticPieces2, artisticPieces1],
        bid: {
            current: 12.5,
            last: 25.04,
        },
        isLiked: true,
    },
    {
        image: esculturas,
        name: "Esculturas y Macroesculturas",
        slug: "esculturas-y-macroesculturas",
        meta: {
            title: "Esculturas y Macroesculturas",
            description: "Esculturas a gran escala con acabados de calidad y durabilidad."
        },
        creator: {
            image: esculturas,
            username: "@Astro",
        },
        intro:
            "Esculturas a gran escala con acabados de calidad y durabilidad.",
        description: "Creación de macro o micro esculturas únicas que puedan instalarse en puntos clave del evento, como entradas o zonas de alto tráfico fabricadas en cualquier tipo de material.",
        imagesShowcase1: [],
        imagesShowcase2: [],
        bid: {
            current: 14.8,
            last: 12.04,
        },
        isLiked: true,
    },
    {
        image: setDeRodaje,
        name: "Sets de rodaje para cine y TV",
        slug: "sets-de-rodaje-para-cine-y-tv",
        meta: {
            title: "Sets de rodaje para cine y TV",
            description: "Transformamos espacios existentes en los escenarios requeridos por el guion."
        },
        creator: {
            image: setDeRodaje,
            username: "@Aliza",
        },
        intro:
            "Transformamos espacios existentes en los escenarios requeridos por el guion.",
        description: "Ofrecemos una amplia gama de sets de cine diseñados y construidos a medida para dar vida a tus ideas más ambiciosas. Desde recreaciones históricas detalladas hasta futuristas paisajes urbanos o acogedores interiores requeridos basados en el guión ",
        imagesShowcase1: [],
        imagesShowcase2: [],
        bid: {
            current: 18,
            last: 32.06,
        },
        sale: {
            endDate: addOrSubtractDaysFromDate(4, true),
        },
        isLiked: true,
    },
    {
        image: estatuillas,
        name: "Estatuillas para premios",
        slug: "estatuillas-para-premios",
        meta: {
            title: "Estatuillas para premios",
            description: "Diseños unicos y exclusivos para que cada una sea un objeto de colección."
        },
        creator: {
            image: estatuillas,
            username: "@Tony",
        },
        intro:
            "Diseños unicos y exclusivos para que cada una sea un objeto de colección.",
        description: "Creación de estatuillas exclusivas para los premios con diseños únicos y personalizados,fabricados en cualquier tipo de material.",
        imagesShowcase1: [],
        imagesShowcase2: [],
        bid: {
            current: 20.42,
            last: 18.96,
        },
        isLiked: true,
    },
    {
        image: ambientacion,
        name: "Ambientación de lugar",
        slug: "ambientacion-de-lugar",
        meta: {
            title: "Ambientación de lugar",
            description: "Creamos ambientaciones temáticas para eventos especiales, lanzamientos de productos, celebraciones y más."
        },
        creator: {
            image: ambientacion,
            username: "@Alabto",
        },
        intro:
            "Creamos ambientaciones temáticas para eventos especiales, lanzamientos de productos, celebraciones y más.",
        description: "Ofrecemos un servicio integral de ambientación para una amplia variedad de lugares: desde eventos corporativos y celebraciones sociales hasta espacios comerciales, hoteles, restaurantes y hogares. Nuestro equipo de diseñadores y creativos se sumerge en tu visión, comprendiendo la esencia de tu marca o tus deseos personales para desarrollar una propuesta a medida.",
        imagesShowcase1: [ambientacion1, ambientacion2, ambientacion3, ambientacion4, ambientacion1],
        imagesShowcase2: [ambientacion4, ambientacion3, ambientacion2, ambientacion1, ambientacion4],
        bid: {
            current: 24.96,
            last: 40.22,
        },
        isLiked: true,
    },
    {
        image: disfraces,
        name: "Creación de disfraces",
        slug: "creacion-de-disfraces",
        meta: {
            title: "Creación de disfraces",
            description: "Elaborados y detallados con alta calidad acorde a la tematica del evento."
        },
        creator: {
            image: disfraces,
            username: "@Minato",
        },
        intro:
            "Elaborados y detallados con alta calidad acorde a la tematica del evento.",
        description: "Diseño de disfraces elaborados y detallados de todo tipo de material para los participantes, acorde con la temática del evento (marítima, histórica, fantástica, etc).",
        imagesShowcase1: [],
        imagesShowcase2: [],
        bid: {
            current: 12.5,
            last: 25.04,
        },
        sale: {
            endDate: addOrSubtractDaysFromDate(7, true),
        },
        isLiked: true,
    },
    {
        image: parquesTematicos,
        name: "Parques temáticos",
        slug: "parques-tematicos",
        meta: {
            title: "Parques temáticos",
            description: "Implica la transformación de espacios en mundos fantásticos."
        },
        creator: {
            image: parquesTematicos,
            username: "@Tamari",
        },
        intro:
            "Implica la transformación de espacios en mundos fantásticos.",
        description: "Somos expertos en revitalizar y transformar parques temáticos, convirtiendo atracciones anticuadas en experiencias inolvidables,Ofrecemos soluciones integrales, desde el rediseño de atracciones existentes y la conceptualización de nuevas áreas temáticas, hasta la implementación de tecnologías de vanguardia y mejoras en la experiencia del cliente.",
        imagesShowcase1: [],
        imagesShowcase2: [],
        bid: {
            current: 42.52,
            last: 20.42,
        },
        isLiked: true,
    },
];

export const topSellers: SellerType[] = [
    {
        image: avatar1,
        name: "Nikom Petroy",
        earnings: 60000,
        topWork: [nftArt4, nftArt5, nftArt6],
    },
    {
        image: avatar2,
        name: "Mexi Luna",
        earnings: 55000,
        topWork: [nftArt7, nftArt8, nftArt9],
    },
    {
        image: avatar4,
        name: "Astro Stark",
        earnings: 52000,
        topWork: [nftArt10, nftArt11, nftArt12],
    },
    {
        image: avatar5,
        name: "Aliza Spencer",
        earnings: 48500,
        topWork: [nftArt13, nftArt14, nftArt15],
    },
    {
        image: avatar6,
        name: "Tony Stark",
        earnings: 45200,
        topWork: [nftArt16, nftArt17, nftArt18],
    },
    {
        image: avatar8,
        name: "Minato Namikaze",
        earnings: 45100,
        topWork: [nftArt20, nftArt21, nftArt22],
    },
];

export const browseByCategory = [
    {
        type: "Art",
        image: nftArt19,
    },
    {
        type: "Music",
        image: nftArt5,
    },
    {
        type: "Utility",
        image: nftArt14,
    },
];

export const faqs: FAQType[] = [
    {
        question: "¿Trabajan a medida según una idea o concepto del cliente?",
        answer: "Sí, todos nuestros proyectos son personalizados. Trabajamos en conjunto con el cliente para transformar sus ideas en diseños únicos y funcionales.",
    },
    {
        question:
            "¿Cuál es el proceso de trabajo desde el primer contacto hasta la entrega final?",
        answer: "Comenzamos con una reunión para entender tu necesidad, luego desarrollamos una propuesta visual y técnica, y tras su aprobación, pasamos a la producción y montaje.",
    },
    {
        question: "¿Con cuánta anticipación debo hacer mi pedido?",
        answer: "En caso de emergencia contactanos y te damos una respuesta, recomendamos contactarnos al menos con 1 a 3 meses de anticipación, dependiendo de la magnitud del proyecto.",
    },
    {
        question:
            "¿Ofrecen transporte e instalación de las escenografías o carrozas?",
        answer: "Sí, ofrecemos servicio completo, que incluye transporte, montaje en el lugar del evento o presentación.",
    },
    {
        question: "¿Realizan trabajos en todo el país?",
        answer: "Realizamos trabajos a nivel nacional e internacional.",
    },
    {
        question: "¿Cómo solicito un presupuesto?",
        answer: "Puedes contactarnos a través del formulario en nuestra web, por correo electrónico o teléfono. Cuéntanos tu idea, fechas y lugar del evento, y te enviaremos una propuesta a medida.",
    },
];

export const blogs: BlogType[] = [
    {
        image: blog1,
        title: "The Beginner's to creating & selling digital NFTs",
        description:
            "suscipit eget imperdiet nec imperdiet iaculis ipsum. Sed aliquam ultrices mauris.",
        publishedDate: "27 Aug 2021",
    },
    {
        image: blog2,
        title: "7 Reasons to sell your NFTs on openSea",
        description:
            "Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero.",
        publishedDate: "31 Jan 2022",
    },
];

export const footerItems: FooterItemType[] = [
    {
        title: "Servicios",
        links: [
            {
                label: "Carrozas",
                route: {
                    url: "/servicios/carrozas"
                },
            },
            {
                label: "Piezas artisticas",
                route: {
                    url: "/servicios/piezas-artisticas"
                },
            },
            {
                label: "Esculturas y Macroesculturas",
                route: {
                    url: "servicios/esculturas-y-macroesculturas"
                },
            },
            {
                label: "Sets de rodaje para cine y TV",
                route: {
                    url: "/servicios/sets-de-rodaje-para-cine-y-tv"
                },
            },
        ],
    },
    {
        title: "Servicios",
        links: [
            {
                label: "Estatuillas para premios",
                route: {
                    url: "/servicios/estatuillas-para-premios"
                },
            },
            {
                label: "Ambientación de lugar",
                route: {
                    url: "/servicios/ambientacion-de-lugar"
                },
            },
            {
                label: "Creación de disfraces",
                route: {
                    url: "/servicios/creacion-de-disfraces"
                },
            },
            {
                label: "Parques temáticos",
                route: {
                    url: "/servicios/parques-tematicos"
                },
            },
        ],
    },
    // {
    //     title: "Recursos",
    //     links: [
    //         {
    //             label: "",
    //             route: {},
    //         },
    //         {
    //             label: "",
    //             route: {},
    //         },
    //         {
    //             label: "",
    //             route: {},
    //         },
    //     ],
    // },
    // {
    //     title: "Compañia",
    //     links: [
    //         {
    //             label: "",
    //             route: {},
    //         },
    //         {
    //             label: "",
    //             route: {},
    //         },
    //     ],
    // },
];

// export const services = [
//     {
//         slug: "piezas-artisticas",
//         title: "Piezas artísticas",
//         image: piezasArtisticas,
//         description: "Creación de piezas artísticas que decoran el entorno del evento, como columnas decorativas, figuras monumentales,esculturas o estructuras modulares que sigan la misma línea estética.",
//         imagesShowcase1: [artisticPieces1, artisticPieces2, artisticPieces3, artisticPieces4, artisticPieces5, artisticPieces6],
//         imagesShowcase2: [artisticPieces6, artisticPieces5, artisticPieces4, artisticPieces3, artisticPieces2, artisticPieces1]
//     },
//     {
//         slug: "esculturas-y-macroesculturas",
//         title: "Esculturas y Macroesculturas",
//         image: esculturas,
//         description: "Creación de macro o micro esculturas únicas que puedan instalarse en puntos clave del evento, como entradas o zonas de alto tráfico fabricadas en cualquier tipo de material.",
//         imagesShowcase1: [],
//         imagesShowcase2: []
//     },
//     {
//         slug: "sets-de-rodaje-para-cine-y-tv",
//         title: "Sets de rodaje para cine y TV",
//         image: setDeRodaje,
//         description: "Ofrecemos una amplia gama de sets de cine diseñados y construidos a medida para dar vida a tus ideas más ambiciosas. Desde recreaciones históricas detalladas hasta futuristas paisajes urbanos o acogedores interiores requeridos basados en el guión ",
//         imagesShowcase1: [],
//         imagesShowcase2: []
//     },
//     {
//         slug: "estatuillas-para-premios",
//         title: "Estatuillas para premios",
//         image: estatuillas,
//         description: "Creación de estatuillas exclusivas para los premios con diseños únicos y personalizados,fabricados en cualquier tipo de material.",
//         imagesShowcase1: [],
//         imagesShowcase2: []
//     },
//     {
//         slug: "ambientacion-de-lugar",
//         title: "Ambientación de lugar",
//         image: ambientacion,
//         description: "Ofrecemos un servicio integral de ambientación para una amplia variedad de lugares: desde eventos corporativos y celebraciones sociales hasta espacios comerciales, hoteles, restaurantes y hogares. Nuestro equipo de diseñadores y creativos se sumerge en tu visión, comprendiendo la esencia de tu marca o tus deseos personales para desarrollar una propuesta a medida.",
//         imagesShowcase1: [ambientacion1, ambientacion2, ambientacion3, ambientacion4, ambientacion1],
//         imagesShowcase2: [ambientacion4, ambientacion3, ambientacion2, ambientacion1, ambientacion4]
//     },
//     {
//         slug: "creacion-de-disfraces",
//         title: "Creación de disfraces",
//         image: disfraces,
//         description: "Diseño de disfraces elaborados y detallados de todo tipo de material para los participantes, acorde con la temática del evento (marítima, histórica, fantástica, etc).",
//         imagesShowcase1: [],
//         imagesShowcase2: []
//     },
//     {
//         slug: "parques-tematicos",
//         title: "Parques temáticos",
//         image: parquesTematicos,
//         description: "Somos expertos en revitalizar y transformar parques temáticos, convirtiendo atracciones anticuadas en experiencias inolvidables,Ofrecemos soluciones integrales, desde el rediseño de atracciones existentes y la conceptualización de nuevas áreas temáticas, hasta la implementación de tecnologías de vanguardia y mejoras en la experiencia del cliente.",
//         imagesShowcase1: [],
//         imagesShowcase2: []
//     },
// ];

export const features: FeatureType[] = [
    {
        icon: Activity,
        title: "Diseño 100% personalizado",
        description:
            "Cada proyecto se crea a medida, adaptado a tu idea, temática, presupuesto y objetivos. Nada es genérico.",
    },
    {
        icon: Layers,
        title: "Amplia experiencia en todo tipo de eventos",
        description:
            "Carnavales, procesiones, ferias, cine, teatro, lanzamientos, fiestas... conocemos los tiempos, necesidades y dinámicas de cada formato.",
    },
    {
        icon: Dribbble,
        title: "Entrega puntual y gestión profesional",
        description:
            "Respetamos los tiempos de producción y montaje. Coordinamos cada etapa del proyecto con seriedad y responsabilidad.",
    },
];


