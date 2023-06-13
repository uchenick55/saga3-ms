import PostsInputRender from "../PostsListRender/PostsInputRender";
import {AllPostsActions, PaginationDataType, PostsInitialState} from "../../redux/reducers/all-posts-reducer";
import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/store/store-redux";

const PostInputContainer: React.FC = () => {// Фильтрация постов по поисковой строке

    const {setPaginationDataAC, setSearchPostQueryAC} = AllPostsActions // извлекаем из экшен креатор на получение комментариев

    const dispatch = useDispatch()

    // извлекаем из стейта значение поисковой строки
    const SearchPostQuery: string = useSelector( (state: GlobalStateType) => state.allPosts.SearchPostQuery ) //
   //колбек на обновление поисковой строки
    const setSearchPostQuery = (SearchPostQuery: string) => dispatch( setSearchPostQueryAC( SearchPostQuery ) )

    //колбек для обновления данных пагинации
    const setPaginationData =(PaginationData: PaginationDataType) => {
        dispatch( setPaginationDataAC( PaginationData ) )
    }

    //все данные пагинации
    const PaginationData: PaginationDataType = useSelector( (state: GlobalStateType) => state.allPosts.PaginationData )

    return <PostsInputRender //поле поиска по заголовкам постов
        SearchPostQuery={SearchPostQuery} setSearchPostQuery={setSearchPostQuery}
        setPaginationData={setPaginationData} PostsInitialState={PostsInitialState}
        PaginationData={PaginationData}
    />
}
export default PostInputContainer



