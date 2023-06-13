import {inferActionsTypes} from "../store/store-redux";
import {commentType, postType} from "../../common/commonTypes/commonTypes";

export const GET_ALL_POSTS = "myApp/app-reducer/GET_ALL_POSTS"; //константа получения всех постов
export const SET_ALL_POSTS = "myApp/app-reducer/SET_ALL_POSTS"; //константа записи всех постов в стейт
export const GET_COMMENTS_BY_POST_ID = "myApp/app-reducer/GET_COMMENTS_BY_POST_ID"; //константа получения комментариев по ID статьи
export const SET_COMMENTS_TO_STATE = "myApp/app-reducer/SET_COMMENTS_TO_STATE"; //константа записи в стейт комментариев по ID статьи
export const SET_PAGINATION_DATA = "myApp/app-reducer/SET_PAGINATION_DATA"; //константа записи в стейт данных пагинации
export const SET_SHOW_COMMENTS = "myApp/app-reducer/SET_SHOW_COMMENTS"; //константа записи в стейт данных пагинации
export const SET_SEARCH_POST_QUERY = "myApp/app-reducer/SET_SEARCH_POST_QUERY"; // задать поисковый запрос среди постов
export const SET_SORT_HEADER_DIRECTION = "myApp/app-reducer/SET_SORT_HEADER_DIRECTION"; // задать рнаправление сортировки постов

export const allPostsActions = {
    getAllPostsAC: () => { // экшн креатор получения всех постов
        return {type: GET_ALL_POSTS} as const
    },
    setAllPostsAC: (allPosts: Array<postType>) => { // экшн креатор записи всех постов в стейт
        return {type: SET_ALL_POSTS, allPosts} as const
    },
    getCommentsByPostIdAC: (postId: number) => { // экшн креатор получения комментариев по ID статьи
        return {type: GET_COMMENTS_BY_POST_ID, postId} as const
    },
    setCommentsByPostIdAC: (CommentsByPostId: Array<commentType>) => { // экшн креатор записи в стейт комментариев по ID статьи
        return {type: SET_COMMENTS_TO_STATE, CommentsByPostId} as const
    },
    setPaginationDataAC: (paginationData: paginationDataType) => { // экшн креатор записи в стейт комментариев по ID статьи
        return {type: SET_PAGINATION_DATA, paginationData} as const
    },
    setShowCommentsAC: (showComments: Array<number>) => { // экшн креатор записи в стейт обновленного showComments,
        return {type: SET_SHOW_COMMENTS, showComments} as const
    },
    setSearchPostQueryAC: (searchPostQuery: string) => { //
        return {type: SET_SEARCH_POST_QUERY, searchPostQuery} as const
    },
    setSortHeaderDirectionAC: (sortHeaderDirection: boolean | undefined) => { //
        return {type: SET_SORT_HEADER_DIRECTION, sortHeaderDirection} as const
    }
}

type allPostsActionsTypes = inferActionsTypes<typeof allPostsActions>

export const PostsInitialState = {//стейт по умолчанию
    allPosts: [] as Array<postType>, // массив постов
    allComments: [] as Array<commentType>,// массив всех комментариев
    showComments: [] as Array<number>, //массив содержащий ID постов, на которые нужно показать комментарии
    paginationData: {// данные по пагинации
        pageSize: 5, // количество постов на одной странице
        сurrentPage: 1, // текущая страница пагинации
        currentRangeLocal: 1, // текущий диапазон пагинации
        portionSize: 5, // количество отображаемых страниц пагинации между порциями
    },
    searchPostQuery: "", // поисковый запрос
    sortHeaderDirection: undefined as boolean | undefined//направление сортировки
}
export type paginationDataType = typeof PostsInitialState.paginationData

export type allPostsInitialStateType = typeof PostsInitialState

const AllPostsReducer = (state: allPostsInitialStateType = PostsInitialState, action: allPostsActionsTypes): allPostsInitialStateType => {//редьюсер инициализации приложения
    let stateCopy: allPostsInitialStateType;// объявлениечасти части стейта до изменения редьюсером
    switch (action.type) {
        case SET_ALL_POSTS:  // экшн записи массива постов
            stateCopy = {
                ...state, // копия всего стейта
                allPosts: action.allPosts, // смена флага инициализации приложения на true
            }
            return stateCopy; // возврат копии стейта после изменения
        case SET_COMMENTS_TO_STATE:  // экшн записи комментариев в стор
            const allCommentsFiltered: Array<commentType> = // затираем все старые загруженные комментарии по данному ID поста, возможно уже написали новые
                state.allComments.filter( comment => comment.postId !== action.CommentsByPostId[0].postId )
            stateCopy = {
                ...state, // копия всего стейта
                allComments: [...allCommentsFiltered, ...action.CommentsByPostId], // записываем загруженные комментарии по данному ID в общий список комментариев
            }
            return stateCopy; // возврат копии стейта после изменения
        case SET_PAGINATION_DATA:  // экшн записи данных пагинации в стор
            stateCopy = {
                ...state, // копия всего стейта
                paginationData: action.paginationData, // записываем обновленные данные пагинации в стейт
            }
            return stateCopy; // возврат копии стейта после изменения
        case SET_SHOW_COMMENTS:  // экшн записи showComments в стейт
            stateCopy = {
                ...state, // копия всего стейта
                showComments: action.showComments, // записываем обновленный массив showComments в стейт
            }
            return stateCopy; // возврат копии стейта после изменения
        case SET_SEARCH_POST_QUERY:  //
            stateCopy = {
                ...state, // копия всего стейта
                searchPostQuery: action.searchPostQuery, // записываем обновленный searchPostQuery в стейт
            }
            return stateCopy; // возврат копии стейта после изменения
        case SET_SORT_HEADER_DIRECTION:  // задать направление сортировки постов
            stateCopy = {
                ...state, // копия всего стейта
                sortHeaderDirection: action.sortHeaderDirection, // записываем обновленный sortHeaderDirection в стейт
            }
            return stateCopy; // возврат копии стейта после изменения
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export default AllPostsReducer