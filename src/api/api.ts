import axios from 'axios'
import {CommentType} from "../common/commonTypes/commonTypes";

export const apiJsonPlaceholder = {
    getPosts: async () => {
        const response = await axios.get (`https://jsonplaceholder.typicode.com/posts`)
        return response.data
    },
    getCommentsByPostId: async (postId:number) => {
        const response = await axios.get (`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        return response.data
    },
    getUserDataById: async (id:number) => {
        const response = await axios.get (`https://jsonplaceholder.typicode.com/users?id=${id}`)
        return response.data[0]
    }
}