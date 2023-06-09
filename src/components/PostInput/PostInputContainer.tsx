import PostsInputRender from "../PostsListRender/PostsInputRender";
import {allPostsActions, paginationDataType, PostsInitialState} from "../../redux/reducers/all-posts-reducer";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {globalStateType} from "../../redux/store/store-redux";

const PostInputContainer: React.FC = () => {// Фильтрация постов по поисковой строке

    const {setPaginationDataAC, setSearchPostQueryAC} = allPostsActions // извлекаем из экшен креатор на получение комментариев

    const dispatch = useDispatch()

    //имя страницы из URL
    const patchFromState: string = useSelector( (state: globalStateType) => state.app.patch) //

    // извлекаем из стейта значение поисковой строки
    const searchPostQuery: string = useSelector( (state: globalStateType) => state.allPosts.searchPostQuery ) //
   //колбек на обновление поисковой строки
    const setSearchPostQuery = (searchPostQuery: string) => dispatch( setSearchPostQueryAC( searchPostQuery ) )

    //колбек для обновления данных пагинации
    const setPaginationData =(paginationData: paginationDataType) => {
        dispatch( setPaginationDataAC( paginationData ) )
    }

    //все данные пагинации
    const paginationData: paginationDataType = useSelector( (state: globalStateType) => state.allPosts.paginationData )

    return <PostsInputRender //поле поиска по заголовкам постов
        searchPostQuery={searchPostQuery} setSearchPostQuery={setSearchPostQuery}
        setPaginationData={setPaginationData} PostsInitialState={PostsInitialState}
        paginationData={paginationData} patchFromState={patchFromState}
    />
}
export default PostInputContainer



