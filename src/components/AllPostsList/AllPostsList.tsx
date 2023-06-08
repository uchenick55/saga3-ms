import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/store/store-redux";
import PostItem from "./PostItem";
import {PostType} from "../../common/commonTypes/commonTypes";
import Avatar from "../../assets/svg/avatar-default.svg"
import {AllPostsActions} from "../../redux/reducers/all-posts-reducer";
import Preloader from "../../common/Preloader/Preloader";

const AllPostsList: React.FC = () => {
    const AllPosts: Array<PostType> = useSelector( (state: GlobalStateType) => state.allPosts.AllPosts )
    const dispatch = useDispatch()
    const {getCommentsByPostIdAC} = AllPostsActions

    const getComments = useCallback( (postId: number) => { // мемоизируем колбек для ререндеров
        dispatch( getCommentsByPostIdAC( postId ) )
    }, [] )
    const isFetching: boolean = useSelector( (state: GlobalStateType) => state.app.isFetching )

    console.log( "AllPostsList" )
    return <div>
        {isFetching && // если идет загрузка, показать прелоадер
        <Preloader/>
        }
        <button onClick={() => {
            getComments( 1 )
        }
        }>
            Комментарии
        </button>
        {AllPosts.map( (postItem) => {
                const {body, id, title, userId} = postItem // извлекаем данные из массива постов
                return <PostItem key={id} body={body} title={title}
                                 userId={userId} Avatar={Avatar} id={id}
                                 getComments={getComments}/> // отрисовка одного поста
            }
        )}
    </div>
}
export default AllPostsList