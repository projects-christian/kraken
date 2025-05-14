import type {ToolType, FeatureType, FAQType, PricingType} from "@/views/pages/index-5/components/types";
import {
    Component,
    Code2,
    BadgeDollarSign,
    Aperture,
    Compass,
    Image,
    Github,
    Dribbble,
    FileText,
    Pen,
    Database,
    Gitlab,
    Palette,
    CaseSensitive, CheckCircle2, XCircle
} from "lucide-vue-next";
import type {FooterItemType} from "@/types/layout";

export const tools: ToolType[] = [
    {
        icon: Dribbble,
        name: 'Social Media',
        variant: 'red-500'
    },
    {
        icon: Component,
        name: 'Design',
        variant: 'sky-500'
    },
    {
        icon: Code2,
        name: 'Coding',
        variant: 'default-500'
    },
    {
        icon: BadgeDollarSign,
        name: 'Marketing',
        variant: 'indigo-500'
    },
    {
        icon: Aperture,
        name: 'Seo',
        variant: 'yellow-500'
    },
    {
        icon: Compass,
        name: 'Design Builder',
        variant: 'teal-500'
    },
    {
        icon: Image,
        name: 'Free Ai Image',
        variant: 'pink-500'
    },
    {
        icon: Github,
        name: 'Free Repository',
        variant: 'violet-500'
    },
]

export const features: FeatureType[] = [
    {
        icon: FileText,
        title: 'Articles and Blog Posts',
        description: 'AI can create informative articles or blog posts on a wide range of topics.'
    },
    {
        icon: Pen,
        title: 'Creative Writing',
        description: 'AI can generate short stories, poetry, or other creative pieces.'
    },
    {
        icon: Database,
        title: 'Data Analysis and Reporting',
        description: 'AI can analyze data and generate reports with insights and Financial Reports.'
    },
    {
        icon: Gitlab,
        title: 'Code and Programming',
        description: 'Code Snippets: AI can generate code snippets in various programming languages.'
    },
    {
        icon: Palette,
        title: 'Design and Visual Content',
        description: 'Graphic Design: AI can generate images, logos, and other visual content.'
    },
    {
        icon: CaseSensitive,
        title: 'Language Translation',
        description: 'AI can translate text from one language to another and Ai can any language your choice.'
    },
]

export const pricingPlans: PricingType[] = [
    {
        duration: 'month',
        plans: [
            {
                name: 'Essential',
                description: 'Our new Customers for a free one month of service offers.',
                price: 19,
                features: [
                    {label: 'All limited links', icon: CheckCircle2},
                    {label: 'Own analytics platform', icon: CheckCircle2},
                    {label: 'Chat support', icon: CheckCircle2},
                    {label: 'Optimize hashtags', icon: CheckCircle2},
                    {label: 'Mobile app', icon: XCircle},
                    {label: 'Unlimited users', icon: XCircle},
                ]
            },
            {
                name: 'Premium',
                description: 'Our new Customers for a free one month of service offers.',
                price: 29,
                features: [
                    {label: 'All limited links', icon: CheckCircle2},
                    {label: 'Own analytics platform', icon: CheckCircle2},
                    {label: 'Chat support', icon: CheckCircle2},
                    {label: 'Optimize hashtags', icon: CheckCircle2},
                    {label: 'Mobile app', icon: CheckCircle2},
                    {label: 'Unlimited users', icon: CheckCircle2},
                ]
            },
        ]
    },
    {
        duration: 'year',
        plans: [
            {
                name: 'Essential',
                description: 'Our new Customers for a free one month of service offers.',
                price: 200,
                features: [
                    {label: 'All limited links', icon: CheckCircle2},
                    {label: 'Own analytics platform', icon: CheckCircle2},
                    {label: 'Chat support', icon: CheckCircle2},
                    {label: 'Optimize hashtags', icon: CheckCircle2},
                    {label: 'Mobile app', icon: XCircle},
                    {label: 'Unlimited users', icon: XCircle},
                ]
            },
            {
                name: 'Premium',
                description: 'Our new Customers for a free one month of service offers.',
                price: 300,
                features: [
                    {label: 'All limited links', icon: CheckCircle2},
                    {label: 'Own analytics platform', icon: CheckCircle2},
                    {label: 'Chat support', icon: CheckCircle2},
                    {label: 'Optimize hashtags', icon: CheckCircle2},
                    {label: 'Mobile app', icon: CheckCircle2},
                    {label: 'Unlimited users', icon: CheckCircle2},
                ]
            },
        ]
    }
]

export const faqs: FAQType[] = [
    {
        question: 'Will it support my language?',
        answers: [' Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.', 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.']
    },
    {
        question: 'Do you also provide subtitles?',
        answers: [' Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.', 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.']
    },
    {
        question: 'How do I get started?',
        answers: [' Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.', 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.']
    },
    {
        question: 'Do you have any samples?',
        answers: [' Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.', 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.']
    },
    {
        question: 'Can I get custom templates?',
        answers: [' Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.', 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.']
    },
    {
        question: 'What types of videos can i upload?',
        answers: [' Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.', 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.']
    },
]


export const footerItems: FooterItemType[] = [
    {
        title: 'About Us',
        links: [
            {
                label: 'Support Center',
                route: {}
            },
            {
                label: 'Customer Support',
                route: {}
            },
            {
                label: 'About Us',
                route: {}
            },
            {
                label: 'Copyright',
                route: {}
            },
            {
                label: 'Popular Campaign',
                route: {}
            },
            {
                label: 'Return Policy',
                route: {}
            },

            {
                label: 'Privacy Policy',
                route: {}
            },
            {
                label: 'Terms & Conditions',
                route: {}
            }
        ]
    },
    {
        title: 'Support',
        links: [
            {
                label: 'Press Inquiries',
                route: {}
            },
            {
                label: 'Social Media Directories',
                route: {}
            },
            {
                label: 'Images & B-roll',
                route: {}
            },
            {
                label: 'Site Map',
                route: {}
            },
        ]
    }
]