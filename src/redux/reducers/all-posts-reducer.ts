import {InferActionsTypes} from "../store/store-redux";
import {CommentType, PostType} from "../../common/commonTypes/commonTypes";

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
    setAllPostsAC: (allPosts: Array<PostType>) => { // экшн креатор записи всех постов в стейт
        return {type: SET_ALL_POSTS, allPosts} as const
    },
    getCommentsByPostIdAC: (postId: number) => { // экшн креатор получения комментариев по ID статьи
        return {type: GET_COMMENTS_BY_POST_ID, postId} as const
    },
    setCommentsByPostIdAC: (CommentsByPostId: Array<CommentType>) => { // экшн креатор записи в стейт комментариев по ID статьи
        return {type: SET_COMMENTS_TO_STATE, CommentsByPostId} as const
    },
    setPaginationDataAC: (PaginationData: PaginationDataType) => { // экшн креатор записи в стейт комментариев по ID статьи
        return {type: SET_PAGINATION_DATA, PaginationData} as const
    },
    setShowCommentsAC: (showComments: Array<number>) => { // экшн креатор записи в стейт обновленного showComments,
        return {type: SET_SHOW_COMMENTS, showComments} as const
    },
    setSearchPostQueryAC: (SearchPostQuery: string) => { //
        return {type: SET_SEARCH_POST_QUERY, SearchPostQuery} as const
    },
    setSortHeaderDirectionAC: (SortHeaderDirection: boolean | undefined) => { //
        return {type: SET_SORT_HEADER_DIRECTION, SortHeaderDirection} as const
    }
}

export type allPostsActionsTypes = InferActionsTypes<typeof allPostsActions>

export const PostsInitialState = {//стейт по умолчанию
    allPosts: [] as Array<PostType>, // массив постов
    allComments: [] as Array<CommentType>,// массив всех комментариев
    showComments: [] as Array<number>, //массив содержащий ID постов, на которые нужно показать комментарии
    PaginationData: {// данные по пагинации
        PageSize: 5, // количество постов на одной странице
        CurrentPage: 1, // текущая страница пагинации
        CurrentRangeLocal: 1, // текущий диапазон пагинации
        PortionSize: 5, // количество отображаемых страниц пагинации между порциями
    },
    SearchPostQuery: "", // поисковый запрос
    SortHeaderDirection: undefined as boolean | undefined//направление сортировки
}
export type PaginationDataType = typeof PostsInitialState.PaginationData

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
            const allCommentsFiltered: Array<CommentType> = // затираем все старые загруженные комментарии по данному ID поста, возможно уже написали новые
                state.allComments.filter( comment => comment.postId !== action.CommentsByPostId[0].postId )
            stateCopy = {
                ...state, // копия всего стейта
                allComments: [...allCommentsFiltered, ...action.CommentsByPostId], // записываем загруженные комментарии по данному ID в общий список комментариев
            }
            return stateCopy; // возврат копии стейта после изменения
        case SET_PAGINATION_DATA:  // экшн записи данных пагинации в стор
            stateCopy = {
                ...state, // копия всего стейта
                PaginationData: action.PaginationData, // записываем обновленные данные пагинации в стейт
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
                SearchPostQuery: action.SearchPostQuery, // записываем обновленный SearchPostQuery в стейт
            }
            return stateCopy; // возврат копии стейта после изменения
        case SET_SORT_HEADER_DIRECTION:  // задать направление сортировки постов
            stateCopy = {
                ...state, // копия всего стейта
                SortHeaderDirection: action.SortHeaderDirection, // записываем обновленный SortHeaderDirection в стейт
            }
            return stateCopy; // возврат копии стейта после изменения
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export default AllPostsReducer