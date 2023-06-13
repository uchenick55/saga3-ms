import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {globalStateType} from "../../redux/store/store-redux";
import {postType} from "../../common/commonTypes/commonTypes";
import {
    allPostsActions,
    paginationDataType,
} from "../../redux/reducers/all-posts-reducer";
import Preloader from "../../common/Preloader/Preloader";
import PaginationBS from "../../common/Pagination/PaginationBS";
import postListSortFn from "./Functions/postListSortFn";
import RenderPosts from "./RenderPosts";
import postListPaginFn from "./Functions/postListPaginFn";
import postListSearchFilterFn from "./Functions/postListSearchFilterFn";
import notFound from "../../assets/svg/not-found.svg";
import Image from "react-bootstrap/Image";

type postsListRenderType = {
    PostsList: Array<postType>
}
const PostsListRender: React.FC<postsListRenderType> = ( ({PostsList}) => {

    console.log( "PostsListRender" )
    const dispatch = useDispatch()

    //все данные пагинации
    const paginationData: paginationDataType = useSelector( (state: globalStateType) => state.allPosts.paginationData )

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
    const PostsListCopied: Array<postType> = structuredClone( PostsList ) // полная копия массива постов

    // извлечь статус загрузки
    const isFetching: boolean = useSelector( (state: globalStateType) => state.app.isFetching ) // статус индикации загрузки

    // извлечь поисковый запрос из стейта
    const searchPostQuery: string = useSelector( (state: globalStateType) => state.allPosts.searchPostQuery ) //

    // извлечь направления сортировки по заголовкам массива постов
    const sortHeaderDirection: boolean | undefined = useSelector( (state: globalStateType) => state.allPosts.sortHeaderDirection )

    // фильтруем заголовки на содержание поисковой строки (переводим в один регистр для стравнения)
    let PostsListFiltered: Array<postType> = postListSearchFilterFn(PostsListCopied, searchPostQuery)

    //сортируем фильтрованый список
    const PostsListFiltSort: Array<postType> = postListSortFn( PostsListFiltered, sortHeaderDirection )

    //Делаем пагинацию для отсортированого и отфильтрованого списка
    const PostsListFiltSortPagin: Array<postType> = postListPaginFn( PostsListFiltSort, pageSize, сurrentPage )

    const paginationRender = <PaginationBS // отрисовка пагинации
        totalPostsCount={PostsListFiltered.length} pageSize={pageSize}
        сurrentPage={сurrentPage} currentRangeLocal={currentRangeLocal}
        portionSize={portionSize} setPaginationData={setPaginationData}
    />

    const renderPosts = <RenderPosts PostsList={PostsListFiltSortPagin} getComments={getComments}/>

    return <div>
        {isFetching && <Preloader/>} {/*если идет загрузка, показать прелоадер*/}

        {PostsListFiltSortPagin.length>0 && paginationRender} {/*пагинация*/}

        {PostsListFiltSortPagin.length>0
            ? renderPosts //отрисовка постов
            :  <div className='d-flex justify-content-center my-5'>
                {!isFetching && <div>
                    <Image src={notFound} style={{width:"7rem"}}
                           alt={"ничего не найдено"} title={"ничего не найдено"}
                    />
                    <h3>ничего не найдено</h3>
                </div> }
                </div> // если загрузка завершена и данных нет, отобразить уведомление
        }

    </div>
} )
export default PostsListRender