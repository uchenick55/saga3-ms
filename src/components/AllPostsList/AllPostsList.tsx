import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/store/store-redux";
import PostItem from "./PostItem";
import {PostType} from "../../common/commonTypes/commonTypes";
import Avatar from "../../assets/svg/avatar-default.svg"
import {AllPostsActions} from "../../redux/reducers/all-posts-reducer";

const AllPostsList: React.FC = () => {
    const AllPosts: Array<PostType> = useSelector( (state: GlobalStateType) => state.allPosts.AllPosts )
    const dispatch = useDispatch()
    const {getCommentsByPostIdAC} = AllPostsActions

    const getComments = useCallback((postId:number) => { // мемоизируем колбек для ререндеров
        dispatch(getCommentsByPostIdAC(postId))
    },[])


    return <div>
        {AllPosts.map( (postItem) => {
                const {body, id, title, userId} = postItem // извлекаем данные из массива постов
                return <PostItem key={id} body={body} title={title}
                                 userId={userId} Avatar={Avatar} id={id}
                                 getComments={getComments} /> // отрисовка одного поста
            }
        )}
    </div>
}
export default AllPostsList