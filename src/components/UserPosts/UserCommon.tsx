import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {UserActions} from "../../redux/reducers/user-reducer";
import {PostType, UserDataType} from "../../common/commonTypes/commonTypes";
import {GlobalStateType} from "../../redux/store/store-redux";
import PostsListRender from "../PostsListRender/PostsListRender";
import {allPostsActions, PostsInitialState} from "../../redux/reducers/all-posts-reducer";
import {compose} from "redux";
import withRouter from "../../common/hoc/withRouter";
import UserCard from "./UserCard";

type OwnPropsType = {
    ItemId: number // id пользователя
}
const UserCommon: React.FC<OwnPropsType> = ({ItemId}) => {
    console.log( "UserPosts" )

    const dispatch = useDispatch()
    const allPosts: Array<PostType> = useSelector( (state: GlobalStateType) => state.allPosts.allPosts )  //все посты с сервера
    const UserData: UserDataType = useSelector( (state: GlobalStateType) => state.user.UserData )  //данные автора статей по его ID

    //отфильтровать посты только по Id выбранного пользователя
    const allPostsFilteredByUser: Array<PostType> = allPosts.filter((post:PostType)=>post.userId===ItemId)

    useEffect(()=>{
        dispatch( UserActions.getUserDataAC(ItemId)  )//получить данные пользователя по его Id
        dispatch( allPostsActions.setPaginationDataAC( PostsInitialState.PaginationData ) ) // занулить пагинацию
    },[dispatch, ItemId])

    return <div>
        <h2 className='d-flex justify-content-center'>О пользователе</h2>
        <UserCard UserData={UserData}/>
        <h4 className='d-flex justify-content-center'>Опубликованные посты</h4>

        <PostsListRender PostsList={allPostsFilteredByUser}/>

    </div>
}

export default compose<React.ComponentType>(
    withRouter// получить данные ID из URL браузера и добавить в пропсы
)( UserCommon )
