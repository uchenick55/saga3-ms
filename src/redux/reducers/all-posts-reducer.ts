import {InferActionsTypes} from "../store/store-redux";
import {PostType} from "../../common/commonTypes/commonTypes";

export const GET_ALL_POSTS = "myApp/app-reducer/GET_ALL_POSTS"; //константа получения всех постов
export const SET_ALL_POSTS = "myApp/app-reducer/SET_ALL_POSTS"; //константа записи всех постов в стейт

export const AllPostsActions = {
    getAllPostsAC: () => { // экшн креатор получения всех постов
        return {type: GET_ALL_POSTS} as const
    },
    setAllPostsAC: (AllPosts:Array<PostType>) => { // экшн креатор записи всех постов в стейт
        return {type: SET_ALL_POSTS, AllPosts} as const
    }
}

type AllPostsActionsTypes = InferActionsTypes<typeof AllPostsActions>

const initialState = {//стейт по умолчанию
    AllPosts: [] as Array <PostType>, // массив постов
}

export type AllPostsInitialStateType = typeof initialState

const AllPostsReducer = (state: AllPostsInitialStateType = initialState, action: AllPostsActionsTypes): AllPostsInitialStateType => {//редьюсер инициализации приложения
    let stateCopy: AllPostsInitialStateType;// объявлениечасти части стейта до изменения редьюсером
    switch (action.type) {
        case SET_ALL_POSTS:  // экшн записи массива постов
            stateCopy = {
                ...state, // копия всего стейта
                AllPosts: action.AllPosts, // смена флага инициализации приложения на true
            }
           // console.log(action.AllPosts)
            return stateCopy; // возврат копии стейта после изменения
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export default AllPostsReducer