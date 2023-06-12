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

    const {getCommentsByPostIdAC, setPaginationDataAC, setSearchPostQueryAC} = AllPostsActions // извлекаем из экшен креатор на получение комментариев

    const getComments = useCallback( (postId: number) => { // мемоизируем колбек получения комментариев для ререндеров
        dispatch( getCommentsByPostIdAC( postId ) )
    }, [] )

    const isFetching: boolean = useSelector( (state: GlobalStateType) => state.app.isFetching ) // статус индикации загрузки

    const PostsListCopied: Array<PostType> = structuredClone( PostsList ) // полная копия массива постов

    //// Фильтрация постов по поисковой строке
    const SearchPostQuery: string = useSelector( (state: GlobalStateType) => state.allPosts.SearchPostQuery ) //
    const setSearchPostQuery =(SearchPostQuery:string) => dispatch(setSearchPostQueryAC(SearchPostQuery))

    // определение направления сортировки по заголовкам массива постов
    const [sortHeaderDirection, setSortHeaderDirection] = useState<boolean | undefined>( undefined )

    // фильтруем заголовки на содержание поисковой строки (переводим в один регистр для стравнения)
    let PostsListFiltered: Array<PostType> = postListSearchFilterFn(PostsListCopied, SearchPostQuery)

    //Список постов после фильтрации и сортировки
    const PostsListFiltSort: Array<PostType> = postListSortFn( PostsListFiltered, sortHeaderDirection )

    //Список постов после фильтрации, сортировки и пагинации
    const PostsListFiltSortPagin: Array<PostType> = postListPaginFn( PostsListFiltSort, PageSize, CurrentPage )

    const postInpitRender = <PostsInputRender //поле поиска по заголовкам постов
        SearchPostQuery={SearchPostQuery} setSearchPostQuery={setSearchPostQuery}
        setPaginationData={setPaginationData} PostsInitialState={PostsInitialState}
        PaginationData={PaginationData}
    />

    const renderSortButton = <RenderSortButton // отрисовка кнопки сортировки
        sortHeaderDirection={sortHeaderDirection} setSortHeaderDirection={setSortHeaderDirection}/>

    const paginationRender = <PaginationBS // отрисовка пагинации
        TotalPostsCount={PostsListFiltered.length} PageSize={PageSize}
        CurrentPage={CurrentPage} CurrentRangeLocal={CurrentRangeLocal}
        PortionSize={PortionSize} setPaginationData={setPaginationData}
    />

    const renderPosts = <RenderPosts PostsList={PostsListFiltSortPagin} getComments={getComments}/>

    return <div>
        {isFetching && <Preloader/>} {/*если идет загрузка, показать прелоадер*/}

        {postInpitRender} {/*поле поиска по заголовкам постов*/}

        {renderSortButton} {/*отрисовка кнопки сортировки*/}

        {paginationRender} {/*пагинация*/}

        {PostsListFiltSortPagin.length>0
            ? renderPosts //отрисовка постов
            : <div>ничего не найдено</div> }

    </div>
} )
export default PostsListRender