import React, {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {UserActions} from "../../redux/reducers/user-reducer";
import {PostType} from "../../common/commonTypes/commonTypes";
import {GlobalStateType} from "../../redux/store/store-redux";
import PostsListRender from "../PostsListRender/PostsListRender";
import {AllPostsActions, PostsInitialState} from "../../redux/reducers/all-posts-reducer";

const UserPosts: React.FC = () => {
    const dispatch = useDispatch()
    const AllPosts: Array<PostType> = useSelector( (state: GlobalStateType) => state.allPosts.AllPosts )  //все посты с сервера
    const userId:number = 1

    //отфильтровать посты только по Id выбранного пользователя
    const AllPostsFilteredByUser: Array<PostType> = AllPosts.filter((post:PostType)=>post.userId===userId)

    useEffect(()=>{
        dispatch( UserActions.getUserDataAC(userId)  )//получить данные пользователя по его Id
        dispatch( AllPostsActions.setPaginationDataAC( PostsInitialState.PaginationData ) ) // занулить пагинацию
    },[])

    return <div>
        <PostsListRender PostsList={useMemo(()=>AllPostsFilteredByUser,[AllPostsFilteredByUser])}/>
    </div>
}
export default UserPosts