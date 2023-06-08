import axios from 'axios'
import {CommentType} from "../common/commonTypes/commonTypes";

export const apiJsonPlaceholder = {
    getPosts: async () => {
        const response = await axios.get (`https://jsonplaceholder.typicode.com/posts`)
        return response.data
    },
    getCommentsByPostId: async (postId:number) => {
        const response = await axios.get (`https://jsonplaceholder.typicode.com/comments`)
       // Имитируем получение комментариев только по данному ID статьи (сервер отдает сразу все)
        const CommentsById: Array<CommentType> = response.data.filter((r: CommentType)=>r.postId === postId)
        return CommentsById
    }
}