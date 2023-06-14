import PostsListRender from "../PostsListRender/PostsListRender";
import React from "react";
import {postType} from "../../common/commonTypes/commonTypes";
import {useSelector} from "react-redux";
import {globalStateType} from "../../redux/store/store-redux";

const AllPostsList:React.FC = () => {
    const allPosts: Array<postType> = useSelector( (state: globalStateType) => state.allPosts.allPosts )  //все посты с сервера

    return <div>
        <h2 className='d-flex justify-content-center'>Список постов</h2>
        <PostsListRender postsList={allPosts}/>
    </div>
}
export default AllPostsList