import PostsListRender from "../PostsListRender/PostsListRender";
import React, {useMemo} from "react";
import {PostType} from "../../common/commonTypes/commonTypes";
import {useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/store/store-redux";

const AllPostsList:React.FC = () => {
    console.log("AllPostsList")
    const AllPosts: Array<PostType> = useSelector( (state: GlobalStateType) => state.allPosts.AllPosts )  //все посты с сервера

    return <div>
        <PostsListRender PostsList={AllPosts}/>
    </div>
}
export default AllPostsList