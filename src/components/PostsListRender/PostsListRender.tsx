import React, {memo, useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/store/store-redux";
import PostItem from "./PostItem";
import {PostType} from "../../common/commonTypes/commonTypes";
import Avatar from "../../assets/svg/avatar-default.svg"
import {AllPostsActions, PaginationDataType, PostsInitialState} from "../../redux/reducers/all-posts-reducer";
import Preloader from "../../common/Preloader/Preloader";
import PaginationBS from "../../common/Pagination/PaginationBS";

type PostsListRenderType = {
    PostsList: Array<PostType>
}
const PostsListRender: React.FC<PostsListRenderType> = memo( ({PostsList}) => {

    console.log( "PostsListRender" )

    const PaginationData: PaginationDataType = useSelector( (state: GlobalStateType) => state.allPosts.PaginationData ) //все данные пагинации

    const dispatch = useDispatch()
    const {getCommentsByPostIdAC, setPaginationDataAC} = AllPostsActions // извлекаем из экшен креатор на получение комментариев

    const [SearchPostQuery, setSearchPostQuery] = useState<string>( "" ) // поисковая строка с колбеком обновления

    const onChangeSearchPostQuery = (SearchPostQuery: string) => {// задаем новый поисковый запрос
        setSearchPostQuery( SearchPostQuery ) // обновляем локальный стейт
        if (PaginationData.CurrentPage !== 1) {//если страница пагинации !==1
            console.log( "смена текущей страницы и диапазона пагинации на 1 при поиске" )
            setPaginationData( PostsInitialState.PaginationData )
        }
    }

    const getComments = useCallback( (postId: number) => { // мемоизируем колбек для ререндеров
        dispatch( getCommentsByPostIdAC( postId ) )
    }, [] )
    const setPaginationData = useCallback( (PaginationData: PaginationDataType) => { // мемоизируем колбек для обновления данных пагинации
        dispatch( setPaginationDataAC( PaginationData ) )
    }, [] )
    const isFetching: boolean = useSelector( (state: GlobalStateType) => state.app.isFetching )

    const PostsListCopied: Array<PostType> = structuredClone( PostsList ) // полная копия массива постов

    // фильтруем заголовки на содержание поисковой строки (переводим в один регистр для стравнения)
    const PostsListFiltered: Array<PostType> =
        PostsListCopied.filter( (post: PostType) => post.title.toLowerCase().includes( SearchPostQuery.toLowerCase() ) )

    // определение направления сортировки по заголовкам массива постов
    const [sortHeaderDirection, setSortHeaderDirection] = useState<boolean | undefined>( undefined )

    // если направление сортировки определено, сортируем
    {
        sortHeaderDirection !== undefined &&
        PostsListFiltered.sort( (a: PostType, b: PostType) => { // сортируем массив постов по заголовкам
            const partA = a.title.toLowerCase(); // ignore upper and lowercase
            const partB = b.title.toLowerCase(); // ignore upper and lowercase
            return sortHeaderDirection // если прямая/обратная сортировка
                ? (partA > partB) ? 1 : -1 // прямая сортировка
                : (partA < partB) ? 1 : -1 // возврат 1 или -1 для сортировки
        } )
    }
    const { // данные пагинации из стейта
        PageSize, // количество постов на одной странице
        CurrentPage, // текущая страница пагинации
        CurrentRangeLocal, // текущий диапазон пагинации
        PortionSize,// количество отображаемых страниц пагинации между порциями

    } = PaginationData
    const PostsListFiltSortPagin: Array<PostType> =
        PostsListFiltered.filter( (post: PostType, ind: number) =>
            ind >= (PageSize * (CurrentPage - 1)) && ind < (PageSize * CurrentPage) )

    return <div>
        {isFetching && <Preloader/>} {/*если идет загрузка, показать прелоадер*/}
        <input type="text" value={SearchPostQuery}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeSearchPostQuery( e.target.value )}/>
        <div onClick={() => setSearchPostQuery( "" )}>x</div>

        <button onClick={() => {
            sortHeaderDirection === undefined // если направление сортировки не определено
                ? setSortHeaderDirection( true ) // начальная прямая сортировка массива постов
                : setSortHeaderDirection( !sortHeaderDirection ) // при последующих активациях реверс сортировки
        }}>Сортировка постов по заголовкам
        </button>
        <PaginationBS TotalPostsCount={PostsListFiltered.length} PageSize={PageSize}
                      CurrentPage={CurrentPage} CurrentRangeLocal={CurrentRangeLocal}
                      PortionSize={PortionSize} setPaginationData={setPaginationData}
        />

        {
            PostsListFiltSortPagin// Во всех отсортированных и отфильтрованых постах с сервера
                .map( (postItem, ind) => { // пробегаем по массиву
                        const {body, id, title, userId} = postItem // извлекаем данные из массива постов
                        return <PostItem key={ind} body={body} title={title}
                                         userId={userId} Avatar={Avatar} id={id}
                                         getComments={getComments}/> // отрисовка одного поста
                    }
                )}
    </div>
} )
export default PostsListRender