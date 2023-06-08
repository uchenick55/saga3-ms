export type PostType = {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}

export type NulableType<n> = null | n // тип нулевой
