import axios from 'axios'
import {CommentType, ErrorType, JSPHResponseType, PostType, UserDataType} from "../common/commonTypes/commonTypes";

export const apiJsonPlaceholder = {
    getPosts: () => { // получить посты (100 шт по умолчанию)
        return axios.get <JSPHResponseType<Array<PostType>>>
        ( `https://jsonplaceholder.typicode.com/posts` )
            .then( (response) => ({response}) )// успешный ответ
            .catch( (error: ErrorType) => ({error}) ) // ошибка запроса в ответе
    },
    getUserDataById: (id: number) => {  //получить данные пользователя по его ID
        return axios.get<JSPHResponseType<Array<UserDataType>>>
        ( `https://jsonplaceholder.typicode.com/users?id=${id}` )
            .then( (response) => ({response}) )// успешный ответ
            .catch( (error: ErrorType) => ({error}) ) // ошибка запроса в ответе
    },
    getCommentsByPostId: (postId: number) => {  //получить комментарии по postId
        return axios.get<JSPHResponseType<CommentType>>
        ( `https://jsonplaceholder.typicode.com/comments?postId=${postId}` )
            .then( (response) => ({response}) )// успешный ответ
            .catch( (error: ErrorType) => ({error}) ) // ошибка запроса в ответе
    },
}
