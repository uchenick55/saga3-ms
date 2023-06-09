import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../redux/reducers/user-reducer";
import {postType, userDataType} from "../../common/commonTypes/commonTypes";
import {globalStateType} from "../../redux/store/store-redux";
import PostsListRender from "../PostsListRender/PostsListRender";
import {allPostsActions, PostsInitialState} from "../../redux/reducers/all-posts-reducer";
import {compose} from "redux";
import withRouter from "../../common/hoc/withRouter";
import UserCard from "./UserCard";

type ownPropsType = {
    itemId: number // id пользователя
}
const UserCommon: React.FC<ownPropsType> = ({itemId}) => {

    const dispatch = useDispatch()
    const allPosts: Array<postType> = useSelector( (state: globalStateType) => state.allPosts.allPosts )  //все посты с сервера
    const userData: userDataType = useSelector( (state: globalStateType) => state.user.userData )  //данные автора статей по его ID

    //отфильтровать посты только по Id выбранного пользователя
    const allPostsFilteredByUser: Array<postType> = allPosts.filter((post:postType)=>post.userId===itemId)

    useEffect(()=>{
        dispatch( userActions.getUserDataAC(itemId)  )//получить данные пользователя по его Id
        dispatch( allPostsActions.setPaginationDataAC( PostsInitialState.paginationData ) ) // занулить пагинацию
    },[dispatch, itemId])

    return <div>
        <h2 className='d-flex justify-content-center'>О пользователе</h2>
        <UserCard userData={userData}/>
        <h4 className='d-flex justify-content-center'>Опубликованные посты</h4>

        <PostsListRender postsList={allPostsFilteredByUser}/>

    </div>
}

export default compose<React.ComponentType>(
    withRouter// получить данные ID из URL браузера и добавить в пропсы
)( UserCommon )
