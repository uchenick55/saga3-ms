import React, {memo, useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/store/store-redux";
import PostItem from "./PostItem";
import {PostType} from "../../common/commonTypes/commonTypes";
import Avatar from "../../assets/svg/avatar-default.svg"
import {
    AllPostsActions,
    PaginationDataType,
    PostsInitialState
} from "../../redux/reducers/all-posts-reducer";
import Preloader from "../../common/Preloader/Preloader";
import PaginationBS from "../../common/Pagination/PaginationBS";
import sortPostFn from "./SortPosts";
import PostsInputRender from "./PostsInputRender";
import RenderSortButton from "./RenderSortButton";
import RenderPosts from "./RenderPosts";

type PostsListRenderType = {
    PostsList: Array<PostType>
}
const PostsListRender: React.FC<PostsListRenderType> = memo( ({PostsList}) => {

    console.log( "PostsListRender" )
    const dispatch = useDispatch()

    const PaginationData: PaginationDataType = useSelector( (state: GlobalStateType) => state.allPosts.PaginationData ) //все данные пагинации
    const setPaginationData = useCallback( (PaginationData: PaginationDataType) => { // мемоизируем колбек для обновления данных пагинации
        dispatch( setPaginationDataAC( PaginationData ) )
    }, [] )


    const {getCommentsByPostIdAC, setPaginationDataAC} = AllPostsActions // извлекаем из экшен креатор на получение комментариев

    const getComments = useCallback( (postId: number) => { // мемоизируем колбек получения комментариев для ререндеров
        dispatch( getCommentsByPostIdAC( postId ) )
    }, [] )

    const isFetching: boolean = useSelector( (state: GlobalStateType) => state.app.isFetching ) // статус индикации загрузки

    const PostsListCopied: Array<PostType> = structuredClone( PostsList ) // полная копия массива постов

    //// Фильтрация постов по поисковой строке
    const [SearchPostQuery, setSearchPostQuery] = useState<string>( "" ) // поисковая строка с колбеком обновления

    // фильтруем заголовки на содержание поисковой строки (переводим в один регистр для стравнения)



    let PostsListFiltered: Array<PostType> =
        PostsListCopied.filter( (post: PostType) => post.title.toLowerCase().includes( SearchPostQuery.toLowerCase() ) )


    // определение направления сортировки по заголовкам массива постов
    const [sortHeaderDirection, setSortHeaderDirection] = useState<boolean | undefined>( undefined )

    // если направление сортировки определено, сортируем
    PostsListFiltered = sortPostFn( PostsListFiltered, sortHeaderDirection )



    const { // данные пагинации из стейта
        PageSize, // количество постов на одной странице
        CurrentPage, // текущая страница пагинации
        CurrentRangeLocal, // текущий диапазон пагинации
        PortionSize,// количество отображаемых страниц пагинации между порциями

    } = PaginationData
    const PostsListFiltSortPagin: Array<PostType> =
        PostsListFiltered.filter( (post: PostType, ind: number) =>
            ind >= (PageSize * (CurrentPage - 1)) && ind < (PageSize * CurrentPage) )





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

        {renderPosts} {/*отрисовка постов*/}

    </div>
} )
export default PostsListRender