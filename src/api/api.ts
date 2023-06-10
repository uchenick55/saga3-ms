import axios from 'axios'

export const apiJsonPlaceholder = {
    getPosts: async () => { // получить посты (100 шт по умолчанию)
        const response = await axios.get (`https://jsonplaceholder.typicode.com/posts`)
        return response.data
    },
    getCommentsByPostId: async (postId:number) => { // получить комментарии по postId
        const response = await axios.get (`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        return response.data
    },
    getUserDataById: async (id:number) => { // получить данные пользователя по его ID
        const response = await axios.get (`https://jsonplaceholder.typicode.com/users?id=${id}`)
        return response.data[0]
    }
}