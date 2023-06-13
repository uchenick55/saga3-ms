import axios from 'axios'
import {commentType, errorType, jSPHResponseType, postType, userDataType} from "../common/commonTypes/commonTypes";

export const apiJsonPlaceholder = {
    getPosts: () => { // получить посты (100 шт по умолчанию)
        return axios.get <jSPHResponseType<Array<postType>>>
        ( `https://jsonplaceholder.typicode.com/posts` )
            .then( (response) => ({response}) )// успешный ответ
            .catch( (error: errorType) => ({error}) ) // ошибка запроса в ответе
    },
    getUserDataById: (id: number) => {  //получить данные пользователя по его ID
        return axios.get<jSPHResponseType<Array<userDataType>>>
        ( `https://jsonplaceholder.typicode.com/users?id=${id}` )
            .then( (response) => ({response}) )// успешный ответ
            .catch( (error: errorType) => ({error}) ) // ошибка запроса в ответе
    },
    getCommentsByPostId: (postId: number) => {  //получить комментарии по postId
        return axios.get<jSPHResponseType<commentType>>
        ( `https://jsonplaceholder.typicode.com/comments?postId=${postId}` )
            .then( (response) => ({response}) )// успешный ответ
            .catch( (error: errorType) => ({error}) ) // ошибка запроса в ответе
    },
}
