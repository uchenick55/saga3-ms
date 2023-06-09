import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/store/store-redux";
import PostItem from "./PostItem";
import {PostType} from "../../common/commonTypes/commonTypes";
import Avatar from "../../assets/svg/avatar-default.svg"
import {AllPostsActions} from "../../redux/reducers/all-posts-reducer";
import Preloader from "../../common/Preloader/Preloader";

const AllPostsList: React.FC = () => {
    const AllPosts: Array<PostType> = useSelector( (state: GlobalStateType) => state.allPosts.AllPosts ) //все посты с сервера
    const dispatch = useDispatch()
    const {getCommentsByPostIdAC} = AllPostsActions // извлекаем из экшен креатор на получение комментариев

    const [SearchPostQuery, setSearchPostQuery] = useState<string>( "" ) // поисковая строка с колбеком обновления

    const getComments = useCallback( (postId: number) => { // мемоизируем колбек для ререндеров
        dispatch( getCommentsByPostIdAC( postId ) )
    }, [] )
    const isFetching: boolean = useSelector( (state: GlobalStateType) => state.app.isFetching )

    console.log( "AllPostsList" )
    return <div>
        {isFetching && <Preloader/>} {/*если идет загрузка, показать прелоадер*/}
        <input type="text" value={SearchPostQuery}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchPostQuery( e.target.value )}/>
               <div onClick={()=>setSearchPostQuery("")}>x</div>
        {
            AllPosts// Во всех постах с сервера
                // фильтруем заголовки на содержание поисковой строки (переводим в один регистр для стравнения)
                .filter( (post: PostType) => post.title.toLowerCase().includes( SearchPostQuery.toLowerCase() ) )
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