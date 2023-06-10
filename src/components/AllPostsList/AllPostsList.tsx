import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/store/store-redux";
import PostItem from "./PostItem";
import {PostType} from "../../common/commonTypes/commonTypes";
import Avatar from "../../assets/svg/avatar-default.svg"
import {AllPostsActions, PaginationDataType} from "../../redux/reducers/all-posts-reducer";
import Preloader from "../../common/Preloader/Preloader";
import PaginationBS from "../../common/Pagination/PaginationBS";

const AllPostsList: React.FC = () => {

    console.log( "AllPostsList" )

    const AllPosts: Array<PostType> = useSelector( (state: GlobalStateType) => state.allPosts.AllPosts ) //все посты с сервера
    const PaginationData: PaginationDataType = useSelector( (state: GlobalStateType) => state.allPosts.PaginationData ) //все данные пагинации

    const {TotalPostsCount, PageSize, CurrentPage, CurrentRangeLocal, PortionSize} = PaginationData // данные пагинации из стейта

    const dispatch = useDispatch()
    const {getCommentsByPostIdAC, setPaginationDataAC} = AllPostsActions // извлекаем из экшен креатор на получение комментариев

    const [SearchPostQuery, setSearchPostQuery] = useState<string>( "" ) // поисковая строка с колбеком обновления

    const getComments = useCallback( (postId: number) => { // мемоизируем колбек для ререндеров
        dispatch( getCommentsByPostIdAC( postId ) )
    }, [] )
    const setPaginationData = useCallback( (PaginationData:PaginationDataType) => { // мемоизируем колбек для обновления данных пагинации
        dispatch( setPaginationDataAC( PaginationData ) )
    }, [] )
    const isFetching: boolean = useSelector( (state: GlobalStateType) => state.app.isFetching )

    const AllPostsCopied: Array<PostType> = structuredClone( AllPosts ) // полная копия массива постов

    // фильтруем заголовки на содержание поисковой строки (переводим в один регистр для стравнения)
    const AllPostsFiltered: Array<PostType> =
        AllPostsCopied.filter( (post: PostType) => post.title.toLowerCase().includes( SearchPostQuery.toLowerCase() ) )

    // определение направления сортировки по заголовкам массива постов
    const [sortHeaderDirection, setSortHeaderDirection] = useState<boolean | undefined>( undefined )

    // если направление сортировки определено, сортируем
    {
        sortHeaderDirection !== undefined &&
        AllPostsFiltered.sort( (a: PostType, b: PostType) => { // сортируем массив постов по заголовкам
            const partA = a.title.toLowerCase(); // ignore upper and lowercase
            const partB = b.title.toLowerCase(); // ignore upper and lowercase
            let compareResult = sortHeaderDirection // если прямая/обратная сортировка
                ? (partA > partB) ? 1 : -1 // прямая сортировка
                : (partA < partB) ? 1 : -1 // обратная сортировка
            return compareResult // возврат 1 или -1 для сортировки
        } )
    }

    return <div>
        {isFetching && <Preloader/>} {/*если идет загрузка, показать прелоадер*/}
        <input type="text" value={SearchPostQuery}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchPostQuery( e.target.value )}/>
        <div onClick={() => setSearchPostQuery( "" )}>x</div>

        <button onClick={() => {
            sortHeaderDirection === undefined // если направление сортировки не определено
                ? setSortHeaderDirection( true ) // начальная прямая сортировка массива постов
                : setSortHeaderDirection( !sortHeaderDirection ) // при последующих активациях реверс сортировки
        }}>Сортировка постов по заголовкам
        </button>
        <PaginationBS TotalPostsCount={AllPostsFiltered.length} PageSize={PageSize}
                      CurrentPage={CurrentPage} CurrentRangeLocal={CurrentRangeLocal}
                      PortionSize={PortionSize} setPaginationData={setPaginationData}
        />

        {
            AllPostsFiltered// Во всех отсортированных и отфильтрованых постах с сервера
                .map( (postItem, ind) => { // пробегаем по массиву
                        const {body, id, title, userId} = postItem // извлекаем данные из массива постов
                        return <PostItem key={ind} body={body} title={title}
                                         userId={userId} Avatar={Avatar} id={id}
                                         getComments={getComments}/> // отрисовка одного поста
                    }
                )}
    </div>
}
export default AllPostsList