import type {IconType} from "@/types";

export type ToolType = {
    icon: IconType
    name: string
    variant: string
}

export type FeatureType = {
    icon: IconType
    title: string
    description: string
}

export type PricingPlanType = {
    name: string
    description: string
    price: number
    features: {
        icon?: IconType
        label: string
    }[]
    isPopular?: boolean
}

export type PricingType = {
    duration: 'month' | 'year'
    plans: PricingPlanType[]
}

export type FAQType = {
    question: string
    answers: string[]
}