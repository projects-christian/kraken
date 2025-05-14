import type {FooterLinkType} from "@/types/layout";

export type SaleType = {
    startDate?: Date
    endDate: Date
    discount?: {
        type: 'amount' | 'percent'
        amount: number
    }
}

export type CreatorType = {
    image: string
    name?: string
    username: string
}

export type CategoryType = {
    image: string
    name: string
    creator: CreatorType
    bid: {
        current: number
        last: number
    }
    sale?: SaleType
    isLiked?: boolean
}

export type SellerType = {
    image: string
    name: string
    earnings: number
    topWork: string[]
}

export type FAQType = {
    question: string
    answer: string
}

export type BlogType = {
    image: string
    title: string
    description: string
    publishedDate: string
}