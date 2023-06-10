import {InferActionsTypes} from "../store/store-redux";
import {CommentType, PostType} from "../../common/commonTypes/commonTypes";

export const GET_ALL_POSTS = "myApp/app-reducer/GET_ALL_POSTS"; //константа получения всех постов
export const SET_ALL_POSTS = "myApp/app-reducer/SET_ALL_POSTS"; //константа записи всех постов в стейт
export const GET_COMMENTS_BY_POST_ID = "myApp/app-reducer/GET_COMMENTS_BY_POST_ID"; //константа получения комментариев по ID статьи
export const SET_COMMENTS_TO_STATE = "myApp/app-reducer/SET_COMMENTS_TO_STATE"; //константа записи в стейт комментариев по ID статьи
export const SET_PAGINATION_DATA = "myApp/app-reducer/SET_PAGINATION_DATA"; //константа записи в стейт данных пагинации

export const AllPostsActions = {
    getAllPostsAC: () => { // экшн креатор получения всех постов
        return {type: GET_ALL_POSTS} as const
    },
    setAllPostsAC: (AllPosts:Array<PostType>) => { // экшн креатор записи всех постов в стейт
        return {type: SET_ALL_POSTS, AllPosts} as const
    },
    getCommentsByPostIdAC: (postId:number) => { // экшн креатор получения комментариев по ID статьи
        return {type: GET_COMMENTS_BY_POST_ID, postId} as const
    },
    setCommentsByPostIdAC: (CommentsByPostIdAC:Array <CommentType>) => { // экшн креатор записи в стейт комментариев по ID статьи
        return {type: SET_COMMENTS_TO_STATE, CommentsByPostIdAC} as const
    },
    setPaginationDataAC: (PaginationData:PaginationDataType) => { // экшн креатор записи в стейт комментариев по ID статьи
        return {type: SET_PAGINATION_DATA, PaginationData} as const
    }
}

export type AllPostsActionsTypes = InferActionsTypes<typeof AllPostsActions>

export const PostsInitialState = {//стейт по умолчанию
    AllPosts: [] as Array <PostType>, // массив постов
    AllComments: [] as Array <CommentType>,// массив всех комментариев
    PaginationData: {// данные по пагинации
        PageSize:5, // количество постов на одной странице
        CurrentPage: 1, // текущая страница пагинации
        CurrentRangeLocal: 1, // текущий диапазон пагинации
        PortionSize: 5, // количество отображаемых страниц пагинации между порциями
    }
}
export type PaginationDataType = typeof PostsInitialState.PaginationData

export type AllPostsInitialStateType = typeof PostsInitialState

const AllPostsReducer = (state: AllPostsInitialStateType = PostsInitialState, action: AllPostsActionsTypes): AllPostsInitialStateType => {//редьюсер инициализации приложения
    let stateCopy: AllPostsInitialStateType;// объявлениечасти части стейта до изменения редьюсером
    switch (action.type) {
        case SET_ALL_POSTS:  // экшн записи массива постов
            stateCopy = {
                ...state, // копия всего стейта
                AllPosts: action.AllPosts, // смена флага инициализации приложения на true
            }
            return stateCopy; // возврат копии стейта после изменения
        case SET_COMMENTS_TO_STATE:  // экшн записи комментариев в стор
            const AllCommentsFiltered:Array <CommentType> = // затираем все старые загруженные комментарии по данному ID поста, возможно уже написали новые
                state.AllComments.filter(comment=>comment.postId!==action.CommentsByPostIdAC[0].postId)
            stateCopy = {
                ...state, // копия всего стейта
                AllComments: [...AllCommentsFiltered, ...action.CommentsByPostIdAC]  , // записываем загруженные комментарии по данному ID в общий список комментариев
            }
            return stateCopy; // возврат копии стейта после изменения
        case SET_PAGINATION_DATA:  // экшн записи данных пагинации в стор
            stateCopy = {
                ...state, // копия всего стейта
                PaginationData: action.PaginationData , // записываем обновленные данные пагинации в стейт
            }
            return stateCopy; // возврат копии стейта после изменения
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export default AllPostsReducer