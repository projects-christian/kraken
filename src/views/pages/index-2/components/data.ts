import type {FooterItemType} from "@/types/layout";
import type {FeatureType, TestimonialType} from "@/views/pages/index-2/components/types";

import {Activity, Layers, Dribbble} from "lucide-vue-next";

import avatar1 from "@/assets/images/avatars/img-1.png";
import avatar2 from "@/assets/images/avatars/img-2.png";
import avatar3 from "@/assets/images/avatars/img-3.png";


export const features: FeatureType[] = [
    {
        icon: Activity,
        title: 'Built for speed',
        description: 'Generate up to 10 images in seconds. Our AI is super fast and flexible that can generate image for you in quick times.'
    },
    {
        icon: Layers,
        title: '10+ AI models',
        description: 'From Stable Diffusion to custom community styles. We have over 10+ AI models that will works better for you.'
    },
    {
        icon: Dribbble,
        title: 'Works for everything',
        description: 'Generate up to 10 images in seconds. Our AI is super fast and flexible that can generate image for you in quick times.'
    },
]


export const testimonials: TestimonialType[] = [
    {
        review: 'Amet minim mollil non deserunt ulliamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        rating: 4.5,
        user: {
            image: avatar1,
            name: 'Shane Watson',
            role: 'CEO & Founder'
        }
    },
    {
        review: 'Amet minim mollil non deserunt ulliamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        rating: 5,
        user: {
            image: avatar2,
            name: 'Maria Ruth',
            role: 'CEO & Founder'
        }
    },
    {
        review: 'Amet minim mollil non deserunt ulliamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        rating: 4,
        user: {
            image: avatar3,
            name: 'Megan Hild',
            role: 'CEO & Founder'
        }
    },
]


export const footerItems: FooterItemType[] = [
    {
        title: 'Company',
        links: [
            {
                label: 'About',
                route: {}
            },
            {
                label: 'Developers',
                route: {}
            },
            {
                label: 'Blog',
                route: {}
            },
            {
                label: 'Contact',
                route: {}
            },
        ]
    },
    {
        title: 'Service',
        links: [
            {
                label: 'Developer Driven',
                route: {}
            },
            {
                label: 'DMCA Policy',
                route: {}
            },
            {
                label: 'Private IPFS',
                route: {}
            },
            {
                label: 'News',
                route: {}
            },
        ]
    },
]