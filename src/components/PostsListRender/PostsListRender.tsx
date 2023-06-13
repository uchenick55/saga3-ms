import React, {memo, useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/store/store-redux";
import {PostType} from "../../common/commonTypes/commonTypes";
import {
    allPostsActions,
    paginationDataType,
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
    const paginationData: paginationDataType = useSelector( (state: GlobalStateType) => state.allPosts.paginationData )

    const { // извлекаем переменные из пагинации
        pageSize, сurrentPage, currentRangeLocal, portionSize,
    } = paginationData

    const setPaginationData = useCallback ((paginationData: paginationDataType) => { // мемоизируем колбек для обновления данных пагинации
        dispatch( setPaginationDataAC( paginationData ) )
    },[])

    const {getCommentsByPostIdAC, setPaginationDataAC, setSearchPostQueryAC, setSortHeaderDirectionAC} = allPostsActions // извлекаем колбеки из allPostsActions

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
    const PostsListFiltSortPagin: Array<PostType> = postListPaginFn( PostsListFiltSort, pageSize, сurrentPage )

    const paginationRender = <PaginationBS // отрисовка пагинации
        TotalPostsCount={PostsListFiltered.length} pageSize={pageSize}
        сurrentPage={сurrentPage} currentRangeLocal={currentRangeLocal}
        portionSize={portionSize} setPaginationData={setPaginationData}
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