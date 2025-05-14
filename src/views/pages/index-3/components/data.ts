import {Youtube, Users2, LineChart, Smartphone, ShoppingCart, Check} from "lucide-vue-next";
import type {FeatureType, PricingType, FAQType} from "@/views/pages/index-3/components/types";
import type {FooterItemType} from "@/types/layout";

export const features: FeatureType[] = [
    {
        icon: Youtube,
        title: 'Video podcast & creators',
        description: 'We foster a sense of community and engagement, encouraging viewers to be a part of the conversation and share their thoughts'
    },
    {
        icon: Users2,
        title: 'For Content Teams',
        description: 'Our analytics tools provide actionable insights, enabling your team to create content that drives engagement and conversions'
    },
]

export const generatorFeatures: FeatureType[] = [
    {
        icon: LineChart,
        title: 'Grow on multiple platforms',
        description: 'By utilizing the artificial intelligence AI technology that we provide, you can quickly grow on various platforms without having to invest extra time and effort.'
    },
    {
        icon: Smartphone,
        title: 'Engage viewers everywhere',
        description: 'By adopting advanced AI technology. you can expand the reach of your audience and reach viewers on various platforms in an effective and efficient way.'
    },
    {
        icon: ShoppingCart,
        title: 'Spend more time creating',
        description: 'With the artificial intelligence AI technology that we provide, you can produce spectacular video edits in a very short time effective and efficient way.'
    },
]

export const pricingPlans: PricingType[] = [
    {
        duration: 'month',
        plans: [
            {
                name: 'Basic plan',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                price: 12,
                features: [
                    {label: 'All analytics features', icon: Check},
                    {label: 'Up to 25 000 tracked visits', icon: Check},
                    {label: 'Normal support', icon: Check},
                    {label: 'Mobile app', icon: Check},
                    {label: 'Up to 3 team members', icon: Check},
                ]
            },
            {
                name: 'Startup',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                price: 35,
                isPopular: true,
                features: [
                    {label: 'Everything on Basic plan', icon: Check},
                    {label: 'Up to 1000 tracked visits', icon: Check},
                    {label: 'Premium support', icon: Check},
                    {label: 'Mobile app', icon: Check},
                    {label: 'Up to 10 team members', icon: Check},
                ]
            },
            {
                name: 'Enterprise',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                price: 60,
                features: [
                    {label: 'Everything on Growth plan', icon: Check},
                    {label: 'Up to 5000 tracked visits', icon: Check},
                    {label: 'Dedicated support', icon: Check},
                    {label: 'Mobile app', icon: Check},
                    {label: 'Up to 50 team members', icon: Check},
                ]
            },
        ]
    },
    {
        duration: 'year',
        plans: [
            {
                name: 'Basic plan',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                price: 70,
                features: [
                    {label: 'All analytics features', icon: Check},
                    {label: 'Up to 25 000 tracked visits', icon: Check},
                    {label: 'Normal support', icon: Check},
                    {label: 'Mobile app', icon: Check},
                    {label: 'Up to 3 team members', icon: Check},
                ]
            },
            {
                name: 'Startup',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                price: 250,
                isPopular: true,
                features: [
                    {label: 'Everything on Basic plan', icon: Check},
                    {label: 'Up to 1000 tracked visits', icon: Check},
                    {label: 'Premium support', icon: Check},
                    {label: 'Mobile app', icon: Check},
                    {label: 'Up to 10 team members', icon: Check},
                ]
            },
            {
                name: 'Enterprise',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                price: 500,
                features: [
                    {label: 'Everything on Growth plan', icon: Check},
                    {label: 'Up to 5000 tracked visits', icon: Check},
                    {label: 'Dedicated support', icon: Check},
                    {label: 'Mobile app', icon: Check},
                    {label: 'Up to 50 team members', icon: Check},
                ]
            },
        ]
    }
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


export const footerItems: FooterItemType[] = [
    {
        title: 'Product',
        links: [
            {
                label: 'Features',
                route: {}
            },
            {
                label: 'Get an Essay',
                route: {}
            },
            {
                label: 'Pricing',
                route: {}
            },
        ]
    },
    {
        title: 'Support',
        links: [
            {
                label: 'Walkthrough',
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
        title: 'Legal',
        links: [
            {
                label: 'Terms of service',
                route: {}
            },
            {
                label: 'Refund policy',
                route: {}
            },
            {
                label: 'Privacy policy',
                route: {}
            },
        ]
    }
]