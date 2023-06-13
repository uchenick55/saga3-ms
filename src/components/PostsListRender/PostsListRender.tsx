import React, {memo, useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/store/store-redux";
import {PostType} from "../../common/commonTypes/commonTypes";
import {
    AllPostsActions,
    PaginationDataType,
    PostsInitialState
} from "../../redux/reducers/all-posts-reducer";
import Preloader from "../../common/Preloader/Preloader";
import PaginationBS from "../../common/Pagination/PaginationBS";
import postListSortFn from "./Functions/postListSortFn";
import PostsInputRender from "./PostsInputRender";
import RenderSortButton from "./RenderSortButton";
import RenderPosts from "./RenderPosts";
import postListPaginFn from "./Functions/postListPaginFn";
import postListSearchFilterFn from "./Functions/postListSearchFilterFn";

type PostsListRenderType = {
    PostsList: Array<PostType>
}
const PostsListRender: React.FC<PostsListRenderType> = ( ({PostsList}) => {

    console.log( "PostsListRender" )
    const dispatch = useDispatch()

    //все данные пагинации
    const PaginationData: PaginationDataType = useSelector( (state: GlobalStateType) => state.allPosts.PaginationData )

    const { // извлекаем переменные из пагинации
        PageSize, CurrentPage, CurrentRangeLocal, PortionSize,
    } = PaginationData

    const setPaginationData = useCallback ((PaginationData: PaginationDataType) => { // мемоизируем колбек для обновления данных пагинации
        dispatch( setPaginationDataAC( PaginationData ) )
    },[])

    const {getCommentsByPostIdAC, setPaginationDataAC, setSearchPostQueryAC, setSortHeaderDirectionAC} = AllPostsActions // извлекаем колбеки из AllPostsActions

    const getComments = useCallback( (postId: number) => { // мемоизируем колбек получения комментариев для ререндеров
        dispatch( getCommentsByPostIdAC( postId ) )
    }, [] )

    // сделать полную копию полученых в пропсах постов
    const PostsListCopied: Array<PostType> = structuredClone( PostsList ) // полная копия массива постов

    // извлечь статус загрузки
    const isFetching: boolean = useSelector( (state: GlobalStateType) => state.app.isFetching ) // статус индикации загрузки

    // извлечь поисковый запрос из стейта
    const SearchPostQuery: string = useSelector( (state: GlobalStateType) => state.allPosts.SearchPostQuery ) //

    // извлечь направления сортировки по заголовкам массива постов
    const sortHeaderDirection: boolean | undefined = useSelector( (state: GlobalStateType) => state.allPosts.SortHeaderDirection )

    // фильтруем заголовки на содержание поисковой строки (переводим в один регистр для стравнения)
    let PostsListFiltered: Array<PostType> = postListSearchFilterFn(PostsListCopied, SearchPostQuery)

    //сортируем фильтрованый список
    const PostsListFiltSort: Array<PostType> = postListSortFn( PostsListFiltered, sortHeaderDirection )

    //Делаем пагинацию для отсортированого и отфильтрованого списка
    const PostsListFiltSortPagin: Array<PostType> = postListPaginFn( PostsListFiltSort, PageSize, CurrentPage )

    const paginationRender = <PaginationBS // отрисовка пагинации
        TotalPostsCount={PostsListFiltered.length} PageSize={PageSize}
        CurrentPage={CurrentPage} CurrentRangeLocal={CurrentRangeLocal}
        PortionSize={PortionSize} setPaginationData={setPaginationData}
    />

    const renderPosts = <RenderPosts PostsList={PostsListFiltSortPagin} getComments={getComments}/>

    return <div>
        {isFetching && <Preloader/>} {/*если идет загрузка, показать прелоадер*/}

        {paginationRender} {/*пагинация*/}

        {PostsListFiltSortPagin.length>0
            ? renderPosts //отрисовка постов
            : <div>ничего не найдено</div>
        }
    </div>
} )
export default PostsListRender