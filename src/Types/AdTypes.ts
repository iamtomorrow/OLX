import { UserProps } from "./UserTypes"

interface AdImageProps {
    name: string,
    url: string
}

export interface AdProps {
    _id: string,
    name: string,
    id_user: string,
    state: string,
    category: string,
    price: string,
    price_negotiable: boolean,
    description: string,
    views: number,
    status: string,
    date_created: string,
    images: [AdImageProps]
    advertiser: [UserProps]
}
