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