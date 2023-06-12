export type PostType = {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}

export type NulableType<n> = null | n // тип нулевой


export type CommentType = {
    "postId": number, // id поста, к которому идут комментарии
    "id": number, // id данного сомментария
    "name": "quo vero reiciendis velit similique earum", // заголовок комментария
    "email": "Jayne_Kuhic@sydney.com", // почта того, кто оставил комментарий
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    // тело комментария
}

export type UserDataType = {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat": string,
            "lng": string
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
}

export type ErrorType = {
    code: string,
    config: {},
    message:string,
    name: string,
    request: object,
    stack: string

}

export type JSPHResponseType<D=Array<PostType>> = { // тип ответа от сервера, по умолчанию - посты
    config: object,
    data: D,
    headers: object,
    request: object,
    status: number,
    statusText: string
}