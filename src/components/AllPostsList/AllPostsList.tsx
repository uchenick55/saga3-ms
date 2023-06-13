import PostsListRender from "../PostsListRender/PostsListRender";
import React from "react";
import {PostType} from "../../common/commonTypes/commonTypes";
import {useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/store/store-redux";

const AllPostsList:React.FC = () => {
    console.log("allPostsList")
    const allPosts: Array<PostType> = useSelector( (state: GlobalStateType) => state.allPosts.allPosts )  //все посты с сервера

    return <div>
        <h2 className='d-flex justify-content-center'>Список постов</h2>
        <PostsListRender PostsList={allPosts}/>
    </div>
}
export default AllPostsList