import type {IconType} from "@/types";

export type FeatureType = {
    icon: IconType
    title: string
    description: string
}

export type TopicType = {
    name: string
    points: string
    discussers: { image: string }[]
}

export type TestimonialType = {
    review: string
    user: {
        image: string
        name: string
        role: string
    }
}

export type PricingPlanType = {
    name: string
    description?: string
    price: number
    features: {
        icon?: IconType
        label: string
    }[]
    isPopular?: boolean
}


export type FAQType = {
    question: string
    answer: string
}