import type {
    FeatureType,
    TestimonialType,
} from "@/src/views/services/individual-service/components/types";

import { Activity, Layers, Dribbble } from "lucide-vue-next";

import carrozas from "@/assets/images/nft/art/servicios-carrozas.png";
import piezasArtisticas from "@/assets/images/nft/art/servicios-piezas-artisticas.png";
import esculturas from "@/assets/images/nft/art/servicios-esculturas.png";
import setDeRodaje from "@/assets/images/nft/art/servicios-set-de-rodaje.png";
import estatuillas from "@/assets/images/nft/art/servicios-estatuillas.png";
import ambientacion from "@/assets/images/nft/art/servicios-ambientacion-de-lugar.png";
import disfraces from "@/assets/images/nft/art/servicios-disfraces.png";
import parquesTematicos from "@/assets/images/nft/art/servicios-parques-tematicos.png";

import aiImg6 from "@/assets/images/ai/img-6.jpg";
import aiImg7 from "@/assets/images/ai/img-7.jpg";
import aiImg8 from "@/assets/images/ai/img-8.jpg";
import aiImg9 from "@/assets/images/ai/img-9.jpg";
import aiImg10 from "@/assets/images/ai/img-10.jpg";
import aiImg11 from "@/assets/images/ai/img-11.jpg";
import aiImg12 from "@/assets/images/ai/img-12.jpg";
import aiImg13 from "@/assets/images/ai/img-13.jpg";
import aiImg14 from "@/assets/images/ai/img-14.jpg";
import aiImg21 from "@/assets/images/ai/img-21.jpg";
import aiImg22 from "@/assets/images/ai/img-22.jpg";

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


export const services = [
    {
        slug: "carrozas",
        title: "Carrozas",
        image: carrozas,
        description: "<b>Carrozas terrestres - acuáticas</b>: diseñamos todo tipo de carroza con la dinámica que quieras exponer o crear basándonos en el tema o ferias designadas.",
        imagesShowcase1: [carroza1, carroza2, carroza3, carroza5, carroza4, carroza6, carroza7],
        imagesShowcase2: [carroza7, carroza6, carroza5, carroza3, carroza4, carroza2, carroza1]
    },
    {
        slug: "piezas-artisticas",
        title: "Piezas artísticas",
        image: piezasArtisticas,
        description: "Creación de piezas artísticas que decoran el entorno del evento, como columnas decorativas, figuras monumentales,esculturas o estructuras modulares que sigan la misma línea estética.",
        imagesShowcase1: [artisticPieces1, artisticPieces2, artisticPieces3, artisticPieces4, artisticPieces5, artisticPieces6],
        imagesShowcase2: [artisticPieces6, artisticPieces5, artisticPieces4, artisticPieces3, artisticPieces2, artisticPieces1]
    },
    {
        slug: "esculturas-y-macroesculturas",
        title: "Esculturas y Macroesculturas",
        image: esculturas,
        description: "Creación de macro o micro esculturas únicas que puedan instalarse en puntos clave del evento, como entradas o zonas de alto tráfico fabricadas en cualquier tipo de material.",
        imagesShowcase1: [],
        imagesShowcase2: []
    },
    {
        slug: "sets-de-rodaje-para-cine-y-tv",
        title: "Sets de rodaje para cine y TV",
        image: setDeRodaje,
        description: "Ofrecemos una amplia gama de sets de cine diseñados y construidos a medida para dar vida a tus ideas más ambiciosas. Desde recreaciones históricas detalladas hasta futuristas paisajes urbanos o acogedores interiores requeridos basados en el guión ",
        imagesShowcase1: [],
        imagesShowcase2: []
    },
    {
        slug: "estatuillas-para-premios",
        title: "Estatuillas para premios",
        image: estatuillas,
        description: "Creación de estatuillas exclusivas para los premios con diseños únicos y personalizados,fabricados en cualquier tipo de material.",
        imagesShowcase1: [],
        imagesShowcase2: []
    },
    {
        slug: "ambientacion-de-lugar",
        title: "Ambientación de lugar",
        image: ambientacion,
        description: "Ofrecemos un servicio integral de ambientación para una amplia variedad de lugares: desde eventos corporativos y celebraciones sociales hasta espacios comerciales, hoteles, restaurantes y hogares. Nuestro equipo de diseñadores y creativos se sumerge en tu visión, comprendiendo la esencia de tu marca o tus deseos personales para desarrollar una propuesta a medida.",
        imagesShowcase1: [ambientacion1, ambientacion2, ambientacion3, ambientacion4, ambientacion1],
        imagesShowcase2: [ambientacion4, ambientacion3, ambientacion2, ambientacion1, ambientacion4]
    },
    {
        slug: "creacion-de-disfraces",
        title: "Creación de disfraces",
        image: disfraces,
        description: "Diseño de disfraces elaborados y detallados de todo tipo de material para los participantes, acorde con la temática del evento (marítima, histórica, fantástica, etc).",
        imagesShowcase1: [],
        imagesShowcase2: []
    },
    {
        slug: "parques-tematicos",
        title: "Parques temáticos",
        image: parquesTematicos,
        description: "Somos expertos en revitalizar y transformar parques temáticos, convirtiendo atracciones anticuadas en experiencias inolvidables,Ofrecemos soluciones integrales, desde el rediseño de atracciones existentes y la conceptualización de nuevas áreas temáticas, hasta la implementación de tecnologías de vanguardia y mejoras en la experiencia del cliente.",
        imagesShowcase1: [],
        imagesShowcase2: []
    },
];

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


