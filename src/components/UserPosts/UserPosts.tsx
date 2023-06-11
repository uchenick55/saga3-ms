import React, {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {UserActions} from "../../redux/reducers/user-reducer";
import {PostType} from "../../common/commonTypes/commonTypes";
import {GlobalStateType} from "../../redux/store/store-redux";
import PostsListRender from "../PostsListRender/PostsListRender";
import {AllPostsActions, PostsInitialState} from "../../redux/reducers/all-posts-reducer";
import {compose} from "redux";
import withRouter from "../../common/hoc/withRouter";
import goBack from "../../assets/svg/back-arrow1.svg"
import {useNavigate} from 'react-router-dom';
import s from "../../common/classes/common.module.css"

type OwnPropsType = {
    ItemId: number // id пользователя
}
const UserPosts: React.FC<OwnPropsType> = ({ItemId}) => {
    console.log( "UserPosts" )

    const dispatch = useDispatch()
    const AllPosts: Array<PostType> = useSelector( (state: GlobalStateType) => state.allPosts.AllPosts )  //все посты с сервера

    //отфильтровать посты только по Id выбранного пользователя
    const AllPostsFilteredByUser: Array<PostType> = AllPosts.filter((post:PostType)=>post.userId===ItemId)

    const navigate = useNavigate(); // хук для навигации по страницам (кнопка назад)

    const goBackRender = <img src={goBack} className={s.goBack}
                                                   alt={"go back"} title={"go back"}
                                                   onClick={() => navigate( -1 )} // при клике перейти назад по истории
    />


    useEffect(()=>{
        dispatch( UserActions.getUserDataAC(ItemId)  )//получить данные пользователя по его Id
        dispatch( AllPostsActions.setPaginationDataAC( PostsInitialState.PaginationData ) ) // занулить пагинацию
    },[])

    return <div>
        {goBackRender}
        <PostsListRender PostsList={useMemo(()=>AllPostsFilteredByUser,[AllPostsFilteredByUser])}/>
    </div>
}

export default compose<React.ComponentType>(
    withRouter// получить данные ID из URL браузера и добавить в пропсы
)( UserPosts )
